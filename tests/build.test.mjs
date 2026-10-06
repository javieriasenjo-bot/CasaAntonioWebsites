import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const dist = fileURLToPath(new URL("../dist", import.meta.url));
const root = fileURLToPath(new URL("../", import.meta.url));
function pages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? pages(join(dir, e.name)) : e.name === "index.html" ? [join(dir, e.name)] : []);
}
test("all 52 generated pages retain language SEO and an early event producer", () => {
  const files = pages(dist);
  assert.equal(files.length, 52);
  for (const file of files) {
    const html = readFileSync(file, "utf8");
    assert.match(html, /<h1[ >]/);
    assert.ok(html.indexOf('<meta charset="UTF-8"') < 1024, `${file}: charset must be declared early`);
    assert.match(html, /rel="canonical"/);
    assert.equal((html.match(/rel="alternate"/g) || []).length, 5);
    assert.ok(html.indexOf("__caClickListener") < html.indexOf('type="module"'));
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  }
});
test("student online price and approved bed counts agree across languages and schema", () => {
  for (const prefix of ["", "ja/", "zh-cn/", "ko/"]) {
    const html = readFileSync(join(dist, prefix, "day-trips/index.html"), "utf8");
    assert.match(html, /400/);
    assert.doesNotMatch(html, /高中生是这个价钱的一半|고등학생은 그 반액/);
    const a = readFileSync(join(dist, prefix, "casa-antonio-a/index.html"), "utf8");
    assert.match(a, /"typeOfBed":"Single","numberOfBeds":3/);
    assert.match(a, /"typeOfBed":"Double","numberOfBeds":1/);
    assert.match(a, /"floorSize":\{"@type":"QuantitativeValue","value":65/);
    assert.doesNotMatch(a, /"numberOfBeds":4/);
  }
});

test("generated pages link to existing local routes and image variants", () => {
  for (const file of pages(dist)) {
    const html = readFileSync(file, "utf8");
    for (const match of html.matchAll(/(?:href|src)="(\/[^\"]+)"/g)) {
      const url = new URL(match[1].replaceAll("&amp;", "&"), "https://casaantonio.jp");
      const path = decodeURIComponent(url.pathname);
      assert.ok(existsSync(join(dist, path.endsWith("/") ? `${path}index.html` : path)), `${file}: ${path}`);
    }
    for (const match of html.matchAll(/srcSet="([^\"]+)"/gi)) {
      for (const entry of match[1].split(",")) {
        const path = entry.trim().split(/\s+/)[0];
        if (path.startsWith("/")) assert.ok(existsSync(join(dist, path)), `${file}: ${path}`);
      }
    }
  }
});

test("all destination photos retain verified original-source links in every language", () => {
  const records = JSON.parse(readFileSync(join(root, "docs/qa/photo-attribution.json"), "utf8"));
  assert.equal(records.length, 16);
  assert.equal(new Set(records.map(r => r.key)).size, 16);
  for (const record of records) {
    assert.equal(new URL(record.sourcePageUrl).hostname, "commons.wikimedia.org");
    assert.ok(record.author && record.license);
    assert.ok(record.comparisonRmse < 5);
    assert.equal(record.localSourceSha256, createHash("sha256").update(readFileSync(join(root, "photos-src", `${record.key}.jpg`))).digest("hex"));
  }
  for (const prefix of ["", "ja/", "zh-cn/", "ko/"]) {
    const html = ["neighborhood", "day-trips"].map(route => readFileSync(join(dist, prefix, route, "index.html"), "utf8")).join("\n");
    for (const record of records) assert.ok(html.includes(`href="${record.sourcePageUrl}"`), `${prefix}: missing original ${record.key}`);
    const teine = records.find(r => r.key === "teine");
    assert.ok(readFileSync(join(dist, prefix, "teine-ski/index.html"), "utf8").includes(`href="${teine.sourcePageUrl}"`));
  }
});
