import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createServer } from "vite";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");
const assets = [...shell.matchAll(/<link rel="stylesheet"[^>]*>|<script type="module"[^>]*><\/script>|<link rel="modulepreload"[^>]*>/g)]
  .map((match) => match[0])
  .filter((tag) => tag.includes("/assets/"))
  .join("\n");

if (!assets.includes("/assets/")) {
  throw new Error("Built asset tags were not found in dist/index.html");
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

const gtmHead = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8TLRH4L');</script>`;
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
${gtmHead}
<meta charset="UTF-8" />
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
await vite.close();
console.log(`Prerendered ${count} pages`);
