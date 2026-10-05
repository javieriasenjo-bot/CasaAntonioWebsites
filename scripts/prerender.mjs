import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

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

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

const { renderPage } = await vite.ssrLoadModule("/src/entry-server.tsx");
const paths = await vite.ssrLoadModule("/src/lib/paths.ts");
const seo = await vite.ssrLoadModule("/src/lib/seo.ts");

// GTM + GA4 are ~300 KiB. Loading them at the start competes with the hero image and the app script on slow
// phones, so they load on the first interaction or 3.5 s after the page's load event, whichever comes first.
const gtmHead = `<script>window.dataLayer=window.dataLayer||[];(function(w,d,i){function go(){if(w.__gtm)return;w.__gtm=1;w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var s=d.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+i;d.head.appendChild(s)}
['pointerdown','keydown','scroll','touchstart'].forEach(function(t){w.addEventListener(t,go,{once:true,passive:true})});
w.addEventListener('load',function(){setTimeout(go,3500)})})(window,document,'GTM-T8TLRH4L');</script>`;
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
<noscript><style>.site-header nav{display:flex!important}.menu-toggle,.quick-reserve-trigger{display:none!important}</style></noscript>
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
