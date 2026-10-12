import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../scripts/analytics-bootstrap.js", import.meta.url), "utf8");
const metricoolSource = readFileSync(new URL("../scripts/metricool-bootstrap.js", import.meta.url), "utf8");

test("Metricool waits for initial HTML, initializes once and tolerates a blocked tracker", () => {
  const scripts = [], calls = [], listeners = new Map();
  let idle;
  const window = { location: { hostname: "casaantonio.jp" }, requestIdleCallback: fn => { idle = fn; } };
  const document = { readyState: "loading", addEventListener: (name, fn) => listeners.set(name, fn),
    createElement: () => ({}), head: { appendChild: script => scripts.push(script) } };
  const context = vm.createContext({ window, document });
  vm.runInContext(metricoolSource, context);
  vm.runInContext(metricoolSource, context);
  assert.equal(scripts.length, 0);
  listeners.get("DOMContentLoaded")();
  assert.equal(scripts.length, 0);
  idle();
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].async, true);
  assert.equal(scripts[0].src, "https://tracker.metricool.com/resources/be.js");
  assert.doesNotThrow(() => scripts[0].onload());
  window.beTracker = { t: options => calls.push(options.hash) };
  scripts[0].onload(); scripts[0].onload();
  assert.deepEqual(calls, ["ffd44c179566f41dd21d51d09878d58d"]);
});

test("Metricool does not record development or unrelated hostnames", () => {
  for (const hostname of ["localhost", "127.0.0.1", "casaantonio.jp.example.com", "kojohamacabins.jp"]) {
    vm.runInNewContext(metricoolSource, { window: { location: { hostname } }, document: {} });
  }
});
function boot() {
  const listeners = new Map();
  const scripts = [];
  const document = { readyState: "loading", documentElement: { lang: "ja" },
    addEventListener: (name, fn) => listeners.set(name, fn),
    createElement: () => ({}), head: { appendChild: s => scripts.push(s) } };
  const window = { location: { href: "https://casaantonio.jp/ja/casa-antonio-a/", pathname: "/ja/casa-antonio-a/" },
    addEventListener() {}, removeEventListener() {}, setTimeout() {} };
  const context = vm.createContext({ window, document, URL, Date });
  vm.runInContext(source, context);
  return { window, scripts, context, click(href, attributes = {}) {
    const anchor = { href, getAttribute: key => attributes[key] || null, closest: () => null };
    listeners.get("click")({ target: { closest: () => anchor } });
  } };
}

test("first booking is queued before any third-party script loads", () => {
  const b = boot();
  assert.equal(b.scripts.length, 0);
  b.click("https://www.airbnb.com/rooms/1248284267045468378", { "data-intent": "booking", "data-property": "a", "data-placement": "home-a" });
  assert.equal(b.window.dataLayer[0].event, "gtm.js");
  assert.equal(b.window.dataLayer[1].event, "airbnb_click");
  assert.equal(b.window.dataLayer[1].link_location, "home-a");
  assert.equal(b.window.dataLayer[1].page_language, "ja");
  // The deployed legacy producer checks this same guard. Reinitialization must not duplicate events.
  vm.runInContext(source, b.context);
  b.click("https://www.airbnb.com/rooms/1248284267045468378", { "data-intent": "booking" });
  assert.equal(b.window.dataLayer.filter(e => e.event === "airbnb_click").length, 2);
  assert.equal(b.window.__caClickListener, true);
});

test("reviews from both providers and enquiries are distinct from booking intent", () => {
  const b = boot();
  b.click("https://www.airbnb.com/rooms/1248284267045468378", { "data-intent": "reviews", "data-property": "a" });
  b.click("https://www.booking.com/hotel/jp/casa-antonio-b.html", { "data-intent": "reviews", "data-property": "b" });
  b.click("https://www.airbnb.com/rooms/1248284267045468378", { "data-intent": "inquiry", "data-placement": "long-stay" });
  assert.deepEqual(Array.from(b.window.dataLayer.slice(1), e => e.event), ["review_click", "review_click", "inquiry_click"]);
  assert.equal(b.window.dataLayer[2].provider, "booking");
});

test("language and map actions are captured once; unrelated links are ignored", () => {
  const b = boot();
  b.click("https://casaantonio.jp/ko/", { "data-language": "ko" });
  b.click("https://maps.google.com/", { "data-map-provider": "google" });
  b.click("https://example.com/airbnb.com", { "data-intent": "booking" });
  assert.deepEqual(Array.from(b.window.dataLayer.slice(1), e => e.event), ["language_change", "map_click"]);
});
