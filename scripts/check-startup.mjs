import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import { resolve, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

// Run after npm run build. All external traffic, including analytics, is blocked.
const dist = fileURLToPath(new URL("../dist", import.meta.url));
const mime = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".avif": "image/avif", ".webp": "image/webp", ".svg": "image/svg+xml", ".json": "application/json", ".ico": "image/x-icon" };
const server = createServer((request, response) => {
  let file = resolve(join(dist, decodeURIComponent(new URL(request.url, "http://local").pathname)));
  if (file !== resolve(dist) && !file.startsWith(`${resolve(dist)}/`) && !file.startsWith(`${resolve(dist)}\\`)) {
    response.writeHead(403).end(); return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) { response.writeHead(404).end(); return; }
  response.setHeader("Content-Type", mime[extname(file)] ?? "application/octet-stream");
  response.end(readFileSync(file));
});
await new Promise(done => server.listen(0, "127.0.0.1", done));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
const results = [];
function routes(directory, prefix = "/") {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? routes(join(directory, entry.name), `${prefix}${entry.name}/`)
      : entry.name === "index.html" ? [prefix] : []);
}
const errorsFor = page => {
  const errors = [];
  page.on("pageerror", error => errors.push(String(error)));
  page.on("console", message => {
    if (message.type() === "error" && !message.text().includes("net::ERR_FAILED")) errors.push(message.text());
  });
  return errors;
};
async function context(options = {}) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, ...options });
  await ctx.route("**/*", route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
  return ctx;
}
async function assertFallback(page) {
  assert.equal(await page.locator(".menu-toggle").isVisible(), true);
  await page.locator(".menu-toggle").click();
  assert.equal(await page.locator("#site-nav").isVisible(), true);
  await page.locator(".menu-toggle").click();
  assert.equal(await page.locator("#site-nav").isVisible(), false);
  assert.equal(await page.locator(".quick-reserve-fallback a").count(), 2);
  assert.equal(await page.locator(".quick-reserve-fallback").isVisible(), true);
}
try {
  browser = await chromium.launch(process.env.CASA_BROWSER_PATH
    ? { executablePath: process.env.CASA_BROWSER_PATH }
    : { channel: "chrome" });
  const paths = routes(dist);
  assert.equal(paths.length, 52);
  for (const path of paths) {
    const ctx = await context();
    await ctx.addInitScript(() => {
      // A remembered language must change only after the matching initial tree.
      localStorage.setItem("casa-antonio-lang", "ko");
      window.__initial = {};
      new MutationObserver(() => {
        window.__initial.heading ??= document.querySelector("h1");
        window.__initial.hero ??= document.querySelector(".hero-img,.page-hero img");
      }).observe(document, { childList: true, subtree: true });
    });
    const page = await ctx.newPage(); const errors = errorsFor(page);
    await page.goto(origin + path, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.classList.contains("app-ready"));
    const preserved = await page.evaluate(() => ({
      heading: window.__initial.heading === document.querySelector("h1"),
      hero: !window.__initial.hero || window.__initial.hero === document.querySelector(".hero-img,.page-hero img"),
    }));
    assert.ok(preserved.heading && preserved.hero, `${path}: initial DOM was replaced`);
    const overflow = async () => page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    assert.equal(await overflow(), false, path);
    await page.locator(".menu-toggle").click();
    await page.waitForFunction(() => document.querySelector("#site-nav").getAttribute("data-open") === "true");
    await page.keyboard.press("Escape");
    await page.waitForFunction(() => document.querySelector("#site-nav").getAttribute("data-open") === "false");
    if (await page.locator("button.quick-reserve-trigger").count()) {
      await page.locator("button.quick-reserve-trigger").click();
      await page.locator("#reserve-menu").waitFor(); await page.keyboard.press("Escape");
      assert.equal(await page.locator("#reserve-menu").count(), 0);
    }
    if (path.includes("casa-antonio-")) {
      const thumbnail = page.locator(".g-item").first();
      await thumbnail.click(); await page.locator('[role="dialog"]').waitFor();
      await page.keyboard.press("ArrowRight"); await page.keyboard.press("Escape");
      assert.equal(await page.locator('[role="dialog"]').count(), 0);
      assert.equal(await thumbnail.evaluate(element => document.activeElement === element), true);
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    assert.equal(await overflow(), false, `${path}: desktop overflow`);
    assert.deepEqual(errors, [], path);
    results.push({ path, headingPreserved: preserved.heading, heroPreserved: preserved.hero, errors, mobileAndDesktopOverflow: false });
    await ctx.close();
  }
  for (const prefix of ["", "ja/", "zh-cn/", "ko/"]) {
    const ctx = await context({ javaScriptEnabled: false }); const page = await ctx.newPage();
    await page.goto(`${origin}/${prefix}`, { waitUntil: "domcontentloaded" });
    await assertFallback(page); results.push({ scenario: "no JavaScript", path: `/${prefix}`, passed: true });
    await ctx.close();
  }
  // Mobile browser bars and larger text must never clip the hero's heading
  // or force the menu/language controls to overlap or lose touch-target size.
  for (const prefix of ["", "ja/", "zh-cn/", "ko/"]) {
    const ctx = await context({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto(`${origin}/${prefix}`, { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("load");
    for (const viewport of [{ width: 320, height: 568 }, { width: 393, height: 650 }, { width: 430, height: 740 }, { width: 844, height: 390 }]) {
      await page.setViewportSize(viewport);
      for (const fontSize of ["100%", "125%"]) {
        await page.evaluate(size => { document.documentElement.style.fontSize = size; }, fontSize);
        // Script-disabled pages do not run animation-frame callbacks.
        await page.waitForTimeout(50);
        const layout = await page.evaluate(() => {
          const rect = selector => document.querySelector(selector).getBoundingClientRect();
          const hero = rect(".hero"), header = rect(".site-header"), menu = rect(".menu-toggle"), languages = rect(".language-switcher");
          return {
            heroContentFits: [...document.querySelectorAll(".hero-overlay > *")].every(element => {
              const r = element.getBoundingClientRect();
              return r.top >= hero.top - 1 && r.bottom <= hero.bottom + 1;
            }),
            controlsFit: menu.left >= 0 && menu.right <= innerWidth && languages.left >= 0 && languages.right <= innerWidth && languages.top >= menu.bottom - 1,
            touchTargets: [...document.querySelectorAll(".language-switcher a,.menu-toggle")].every(element => {
              const r = element.getBoundingClientRect(); return r.width >= 44 && r.height >= 44;
            }),
            headingBelowHeader: rect("h1").top >= header.bottom - 1,
            overflow: document.documentElement.scrollWidth > innerWidth + 1,
          };
        });
        assert.deepEqual(layout, { heroContentFits: true, controlsFit: true, touchTargets: true, headingBelowHeader: true, overflow: false }, `${prefix || "en"}: ${viewport.width}x${viewport.height}, text ${fontSize}`);
        results.push({ scenario: "mobile header and unclipped hero", path: `/${prefix}`, viewport, fontSize, passed: true });
      }
    }
    await ctx.close();
  }
  // Exercise the actual card surfaces and controls, not just their link markup.
  for (const prefix of ["", "ja/", "zh-cn/", "ko/"]) {
    const ctx = await context();
    const page = await ctx.newPage();
    const home = `${origin}/${prefix}`;
    for (const id of ["a", "b"]) {
      for (const action of ["title", "label", "surface", "keyboard"]) {
        await page.goto(home);
        await page.waitForFunction(() => document.documentElement.classList.contains("app-ready"));
        const card = page.locator(`.choice-${id}`);
        if (action === "surface") {
          await card.scrollIntoViewIfNeeded();
          const box = await card.boundingBox();
          await page.mouse.click(box.x + box.width - 10, box.y + 10);
        } else {
          const link = card.locator(action === "title" ? ".choice-name a" : ".choice-link");
          if (action === "keyboard") { await link.focus(); await page.keyboard.press("Enter"); }
          else await link.click();
        }
        await page.waitForURL(`${home}casa-antonio-${id}/`);
      }
      await page.goto(home);
      await page.waitForFunction(() => document.documentElement.classList.contains("app-ready"));
      const book = page.locator(`.choice-${id} .choice-book`);
      await book.evaluate(anchor => anchor.addEventListener("click", event => event.preventDefault()));
      await book.click();
      const events = await page.evaluate(() => window.dataLayer.filter(item => item.event === "airbnb_click"));
      assert.equal(events.length, 1); assert.equal(events[0].property, id);
      const photo = page.locator(`.choice-${id} .choice-photo`);
      await photo.scrollIntoViewIfNeeded();
      await page.waitForFunction(selector => { const image = document.querySelector(selector); return image.complete && image.naturalWidth > 0; }, `.choice-${id} .choice-photo`);
      assert.match(await photo.evaluate(image => image.currentSrc), /-800\.avif$/);
    }
    await ctx.addInitScript(() => { Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async text => { window.__copiedEmail = text; } } }); });
    await page.goto(home); await page.waitForFunction(() => document.documentElement.classList.contains("app-ready"));
    const copy = page.locator("footer .copy-email"); await copy.click();
    await page.waitForFunction(() => window.__copiedEmail === "admin@kagami-planning.com");
    assert.ok(await page.locator("footer [role=status]").textContent());
    assert.equal(await page.evaluate(() => window.dataLayer.filter(item => item.event === "contact_click").length), 0);
    await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error("clipboard blocked"); }; });
    await copy.click();
    await page.locator("footer .email-copy-manual").waitFor();
    assert.match(await page.locator("footer .email-copy-manual").textContent(), /admin@kagami-planning\.com/);
    results.push({ scenario: "card actions, responsive photos and email copy/fallback", path: `/${prefix}`, passed: true });
    await ctx.close();
  }
  for (const [locale, target] of [["ja-JP", "ja"], ["ko-KR", "ko"], ["zh-TW", "zh-cn"]]) {
    const ctx = await context({ locale }); const page = await ctx.newPage();
    await page.goto(origin); await page.locator(".lang-banner").waitFor();
    assert.equal(new URL(page.url()).pathname, "/");
    assert.equal(await page.locator(".lang-banner a").getAttribute("href"), `/${target}/`);
    for (const viewport of [{ width: 320, height: 568 }, { width: 393, height: 650 }, { width: 430, height: 740 }, { width: 844, height: 390 }]) {
      await page.setViewportSize(viewport);
      for (const font of ["100%", "125%"]) {
        await page.evaluate(size => { document.documentElement.style.fontSize = size; window.scrollTo(0, 0); }, font);
        await page.waitForTimeout(70);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${locale}: banner overflow`);
        assert.ok(await page.evaluate(() => document.querySelector("h1").getBoundingClientRect().top >= document.querySelector(".site-header").getBoundingClientRect().bottom - 1));
        await page.locator(".menu-toggle").click();
        await page.waitForFunction(() => document.querySelector("#site-nav").dataset.open === "true");
        const last = page.locator("#site-nav a").last(); await last.scrollIntoViewIfNeeded();
        assert.ok(await last.evaluate(element => {
          const box = element.getBoundingClientRect();
          return box.bottom <= innerHeight + 1 && element.contains(document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2));
        }), `${locale}: menu unreachable`);
        await page.keyboard.press("Escape"); await page.locator("#site-nav").waitFor({ state: "hidden" });
      }
    }
    await page.locator(".lang-banner button").click(); await page.locator(".lang-banner").waitFor({ state: "hidden" });
    await page.reload(); await page.waitForFunction(() => document.documentElement.classList.contains("app-ready"));
    assert.equal(await page.locator(".lang-banner").count(), 0);
    await page.evaluate(() => { localStorage.clear(); sessionStorage.clear(); });
    await page.reload(); await page.locator(".lang-banner a").click(); await page.waitForURL(`${origin}/${target}/`);
    results.push({ scenario: "first-visit language banner, enlarged text, dismissal and locale navigation", locale, passed: true });
    await ctx.close();
  }
  const delayed = await context();
  let release; const gate = new Promise(done => { release = done; });
  await delayed.route("**/assets/*.js", async route => { await gate; await route.continue(); });
  const early = await delayed.newPage(); const earlyErrors = errorsFor(early);
  await early.goto(origin, { waitUntil: "commit" }); await early.locator("h1").waitFor();
  await assertFallback(early);
  await early.evaluate(() => { window.__hero = document.querySelector(".hero-img"); document.querySelector('a[data-intent="booking"]').click(); });
  assert.equal(await early.evaluate(() => window.dataLayer.filter(event => event.event === "airbnb_click").length), 1);
  await early.locator(".menu-toggle").click();
  release(); await early.waitForFunction(() => document.documentElement.classList.contains("app-ready"));
  assert.equal(await early.locator(".mobile-nav").getAttribute("open"), "");
  await early.keyboard.press("Escape");
  assert.equal(await early.evaluate(() => window.__hero === document.querySelector(".hero-img")), true);
  assert.equal(await early.evaluate(() => window.dataLayer.filter(event => event.event === "airbnb_click").length), 1);
  assert.deepEqual(earlyErrors, []); await delayed.close();
  results.push({ scenario: "delayed JavaScript and first booking", passed: true, heroPreserved: true, events: 1 });
  const failed = await context();
  await failed.route("**/assets/en-*.js", route => route.abort());
  const failure = await failed.newPage();
  await failure.goto(origin, { waitUntil: "domcontentloaded" }); await failure.locator("h1").waitFor();
  await assertFallback(failure); assert.equal(await failure.locator("html.app-ready").count(), 0);
  await failed.close(); results.push({ scenario: "failed language import", passed: true });
  const evidence = { checkedAt: new Date().toISOString(), routes: paths.length, results, analytics: "blocked" };
  const output = process.argv[process.argv.indexOf("--out") + 1];
  if (process.argv.includes("--out") && output) writeFileSync(output, JSON.stringify(evidence, null, 2));
  console.log(`Startup browser checks passed: ${paths.length} routes at mobile/desktop widths, four no-JS pages, delayed first click, failed import.`);
} finally {
  await browser?.close(); await new Promise(done => server.close(done));
}
