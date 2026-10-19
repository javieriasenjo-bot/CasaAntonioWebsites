import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { inlineScripts } from "./inline-scripts.mjs";

// fileURLToPath works on Windows too (".pathname" gives "/C:/..." and breaks there).
const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");
const assets = [...shell.matchAll(/<link rel="stylesheet"[^>]*>|<script type="module"[^>]*><\/script>|<link rel="modulepreload"[^>]*>/g)]
  .map((match) => match[0])
  .filter((tag) => tag.includes("/assets/"))
  .join("\n");

if (!assets.includes("/assets/")) {
  throw new Error("Built asset tags were not found in dist/index.html");
}

// Preload the visited page's own chunk and language pack (plus their static imports), so they
// download in parallel with the entry script instead of after it has run.
const manifest = JSON.parse(readFileSync(join(dist, ".vite", "manifest.json"), "utf8"));
const PAGE_MODULE = {
  home: "src/components/home-page.tsx",
  a: "src/components/stay-view.tsx",
  b: "src/components/stay-view.tsx",
  neighborhood: "src/components/neighborhood-page.tsx",
  "day-trips": "src/components/day-trips-page.tsx",
  arrival: "src/components/arrival-page.tsx",
  privacy: "src/components/privacy-page.tsx",
};
function chunkFiles(key, seen = new Set()) {
  const entry = manifest[key];
  if (!entry) throw new Error(`Vite manifest has no chunk for ${key}; update PAGE_MODULE in prerender.mjs`);
  if (seen.has(key)) return seen;
  seen.add(key);
  for (const child of entry.imports ?? []) chunkFiles(child, seen);
  return seen;
}
const entryKey = Object.keys(manifest).find((key) => manifest[key].isEntry);
const alreadyLoaded = new Set([...chunkFiles(entryKey)].map((key) => manifest[key].file));
function preloadTags(page, lang) {
  const keys = new Set([
    ...chunkFiles(PAGE_MODULE[page] ?? "src/components/guide-view.tsx"),
    ...chunkFiles(`src/data/packs/${lang}.ts`),
  ]);
  return [...new Set([...keys].map((key) => manifest[key].file))]
    .filter((file) => !alreadyLoaded.has(file))
    .map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
    .join("\n");
}

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

const { renderPage } = await vite.ssrLoadModule("/src/entry-server.tsx");
const paths = await vite.ssrLoadModule("/src/lib/paths.ts");
const seo = await vite.ssrLoadModule("/src/lib/seo.ts");

// Queue actions immediately; defer only the third-party loader.
const [gtmHead, metricoolHead] = inlineScripts();
const gtmBody = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8TLRH4L" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;

const pages = paths.PAGE_IDS;
const langs = paths.LANGS;
let count = 0;

for (const page of pages) {
  for (const lang of langs) {
    const url = paths.pagePath(page, lang);
    const body = await renderPage(url);
    if (!body.includes("<h1")) {
      throw new Error(`Prerender missing h1 for ${url}`);
    }
    const tags = seo.headTags(page, lang);
    const html = `<!doctype html>
<html lang="${tags.htmlLang}">
<head>
<meta charset="UTF-8" />
${gtmHead}
${metricoolHead}
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#243833" />
${tags.meta}
${tags.links}
${tags.fontLink}
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
${tags.ld}
${assets}
${preloadTags(page, lang)}
</head>
<body>
${gtmBody}
<div id="root">${body}</div>
</body>
</html>`;
    const relative = url === "/" ? "index.html" : `${url.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
    const file = join(dist, relative);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    count += 1;
    const text = body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (text.length < 80) throw new Error(`Prerender too thin for ${url}`);
  }
}

const sitemap = seo.sitemapXml();
writeFileSync(join(dist, "sitemap.xml"), sitemap);
writeFileSync(join(root, "public", "sitemap.xml"), sitemap);
rmSync(join(dist, ".vite"), { recursive: true, force: true });
await vite.close();
console.log(`Prerendered ${count} pages`);
