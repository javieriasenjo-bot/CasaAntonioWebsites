import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { resolve, join, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

// Validate the built source, with touch/mobile emulation and all external traffic blocked.
const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.avif': 'image/avif', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.json': 'application/json', '.ico': 'image/x-icon' };
const server = createServer((req, res) => {
  let file = resolve(dist, '.' + decodeURIComponent(new URL(req.url, 'http://local').pathname));
  if (file !== dist && !file.startsWith(dist + sep)) { res.writeHead(403).end(); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', mime[extname(file)] || 'application/octet-stream');
  res.end(readFileSync(file));
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const origin = `http://127.0.0.1:${server.address().port}`;
const results = [], failures = [];
const viewports = [
  { width: 320, height: 568 }, { width: 375, height: 667 },
  { width: 390, height: 844 }, { width: 412, height: 915 },
  { width: 430, height: 932 }, { width: 844, height: 390 },
];
const routes = ['access', 'monthly-stay', 'long-stay', 'teine-ski', 'snow-festival'];
const check = (condition, detail) => { if (!condition) failures.push(detail); };
let browser;
try {
  browser = await chromium.launch(process.env.CASA_BROWSER_PATH ? { executablePath: process.env.CASA_BROWSER_PATH } : { channel: 'chrome' });
  for (const [prefix, locale] of [['', 'en-US'], ['ja/', 'ja-JP'], ['zh-cn/', 'zh-CN'], ['ko/', 'ko-KR']]) {
    if (process.env.CASA_PHONE_LANGUAGE && prefix !== process.env.CASA_PHONE_LANGUAGE) continue;
    const ctx = await browser.newContext({ viewport: viewports[2], locale, isMobile: true, hasTouch: true, deviceScaleFactor: 3 });
    await ctx.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
    const page = await ctx.newPage();
    page.on('pageerror', err => failures.push({ route: page.url(), runtimeError: String(err) }));
    for (const route of routes) {
      if (process.env.CASA_PHONE_ROUTE && route !== process.env.CASA_PHONE_ROUTE) continue;
      const path = `/${prefix}${route}/`;
      await page.goto(origin + path);
      await page.waitForFunction(() => document.documentElement.classList.contains('app-ready'));
      for (const viewport of viewports) {
        await page.setViewportSize(viewport);
        for (const fontSize of ['100%', '125%', '150%', '200%']) {
          await page.goto(origin + path);
          await page.waitForFunction(() => document.documentElement.classList.contains('app-ready'));
          await page.evaluate(size => { document.documentElement.style.fontSize = size; window.scrollTo(0, 0); }, fontSize);
          await page.evaluate(() => new Promise(done => requestAnimationFrame(() => requestAnimationFrame(done))));
          const layout = await page.evaluate(() => {
            const rect = s => document.querySelector(s).getBoundingClientRect();
            const h = rect('h1'), header = rect('.site-header');
            const menu = rect('.menu-toggle'), lang = rect('.language-toggle');
            const outside = [...document.querySelectorAll('main *,header *')].filter(el => {
              const r = el.getBoundingClientRect();
              return r.width && r.height && getComputedStyle(el).visibility !== 'hidden' && (r.right > document.documentElement.clientWidth + 1 || r.left < -1);
            }).slice(0, 5).map(el => ({ tag: el.tagName, class: el.className }));
            return {
              overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
              viewportWidth: innerWidth,
              headingBelowHeader: h.top >= header.bottom - 1,
              menuTarget: menu.width >= 44 && menu.height >= 44,
              languageTarget: lang.width >= 44 && lang.height >= 44,
              controlsFit: menu.left >= 0 && menu.right <= innerWidth + 1 && lang.left >= 0 && lang.right <= innerWidth + 1,
              columns: document.querySelector('.discovery-grid') ? getComputedStyle(document.querySelector('.discovery-grid')).gridTemplateColumns.split(' ').length : 0,
              outside,
              overflowingText: [...document.querySelectorAll('main p,main a,main li')].filter(el => el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).display !== 'inline').map(el => ({text: el.textContent.slice(0,180), class: el.className, scroll: el.scrollWidth, width: el.clientWidth})).slice(0,8),
            };
          });
          check(layout.viewportWidth <= viewport.width + 1 && !layout.overflow && layout.headingBelowHeader && layout.menuTarget && layout.languageTarget && layout.controlsFit, { path, viewport, fontSize, layout });
          if (viewport.width < 760 && route !== 'access') check(layout.columns === 1, { path, viewport, fontSize, reason: 'cards should stack' });
          results.push({ path, viewport, fontSize, ...layout });
        }
      }
      await page.setViewportSize(viewports[2]);
      await page.goto(origin + path);
      await page.waitForFunction(() => document.documentElement.classList.contains('app-ready'));
      await page.locator('.menu-toggle').tap();
      check(await page.locator('#site-nav').isVisible(), { path, reason: 'touch menu does not open' });
      await page.locator('.menu-toggle').tap();
      check(!await page.locator('#site-nav').isVisible(), { path, reason: 'touch menu does not close' });
      const booking = page.locator('.stay-discovery a[data-intent="booking"]');
      await booking.evaluate(a => a.addEventListener('click', e => e.preventDefault()));
      await booking.evaluate(a => a.scrollIntoView({block: 'center', behavior: 'instant'}));
      await booking.tap();
      check(await page.evaluate(() => window.dataLayer.filter(e => e.event === 'airbnb_click').length) === 1, { path, reason: 'touch booking event missing/duplicate' });
      const sticky = page.locator('.quick-reserve a[data-intent="booking"]');
      await sticky.evaluate(a => a.addEventListener('click', e => e.preventDefault()));
      await sticky.tap();
      check(await page.evaluate(() => window.dataLayer.filter(e => e.event === 'airbnb_click').length) === 2, { path, reason: 'sticky touch booking event missing/duplicate' });
      const detail = page.locator('.stay-discovery a[data-property="a"]');
      await detail.tap();
      await page.waitForURL(`${origin}/${prefix}casa-antonio-a/`);
      if (route === 'monthly-stay') {
        await page.goto(origin + path);
        await page.locator('a[href="#monthly-enquiry"]').tap();
        const email = page.locator('a[data-placement="monthly-stay-email"]');
        await email.evaluate(a => a.addEventListener('click', e => e.preventDefault()));
        await email.tap();
        check(await page.evaluate(() => window.dataLayer.filter(e => e.event === 'contact_click').length) === 1, { path, reason: 'touch email event missing/duplicate' });
      }
    }
    console.log(`Phone checks completed: ${locale}`);
    if (prefix === 'ja/' || prefix === 'ko/') {
      const route = prefix === 'ja/' ? 'monthly-stay' : 'access';
      await page.goto(`${origin}/${prefix}${route}/`);
      await page.locator('.stay-discovery').scrollIntoViewIfNeeded();
      if (prefix === 'ja/') {
        await page.waitForFunction(() => [...document.querySelectorAll('.stay-discovery img')].every(i => i.complete && i.naturalWidth));
        await page.evaluate(() => Promise.all([...document.querySelectorAll('.stay-discovery img')].map(i => i.decode())));
      }
      await page.evaluate(() => new Promise(done => requestAnimationFrame(() => requestAnimationFrame(done))));
      await page.screenshot({ path: join(root, `docs/qa/smartphone-${prefix.slice(0, -1)}-2026-11-16.png`) });
    }
    await ctx.close();
  }
  const output = { checkedAt: new Date().toISOString(), engine: 'Chromium mobile/touch emulation; not a physical iPhone or Safari test', externalRequests: 'blocked', routes: new Set(results.map(r => r.path)).size, layoutScenarios: results.length, results, failures };
  writeFileSync(join(root, process.env.CASA_PHONE_LANGUAGE ? 'docs/qa/smartphone-probe.json' : 'docs/qa/smartphones-2026-11-16.json'), JSON.stringify(output, null, 2));
  console.log(JSON.stringify({ layoutScenarios: results.length, failureCount: failures.length, firstFailures: failures.slice(0,8) }, null, 2));
  if (failures.length) process.exitCode = 1;
} catch (error) {
  failures.push({error: String(error)});
  writeFileSync(join(root, 'docs/qa/smartphone-debug.json'), JSON.stringify({results,failures},null,2));
  throw error;
} finally {
  await browser?.close();
  await new Promise(done => server.close(done));
}
