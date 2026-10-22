# Casa Antonio — casaantonio.jp

Static, prerendered React site (Vite) served as Cloudflare Workers static assets: 13 pages × English, Japanese, Simplified Chinese and Korean = 52 pages.

- Open work and owner questions: [docs/OPEN_TRACKER.md](docs/OPEN_TRACKER.md)
- Latest code review and what was implemented: [docs/CLAUDE_CODE_REVIEW_2026-10-18.md](docs/CLAUDE_CODE_REVIEW_2026-10-18.md)
- Older handovers and QA evidence: [docs/archive/](docs/archive/) (historical; the tracker reconciles them)

## Commands

| Command | What it does |
| --- | --- |
| `npm ci` | Install exactly what `package-lock.json` lists |
| `npm run dev` | Local dev server |
| `npm run check` | Typecheck, build all 52 pages, run the tests. Run before every release |
| `npm run check:browser` | Browser checks (all routes, no-JS menu, mobile header, first click). Needs Chrome, or set `CASA_BROWSER_PATH` |
| `npm run photos` | Make missing photo sizes from `photos-src/` and regenerate the photo manifest |
| `npm run campaign-links -- …` | Social/UTM links (see below) |
| `npm run indexnow -- --urls changed-urls.txt [--submit]` | Tell Bing/IndexNow about changed URLs after a deploy |

## How pages render

Server and browser share one page tree. Each page is prerendered to HTML, then hydrated without a router, so the visible content is never replaced. Only the current page's chunk and language pack load, and the prerenderer adds `modulepreload` links for them so they download alongside the entry script. The mobile menu (`<details>`) and all booking links work without JavaScript.

## Deploy

Workers Builds runs only `npx wrangler deploy`, which does not build. On that builder (`WORKERS_CI=1`), `postinstall` (`scripts/cf-postinstall.mjs`) runs the build first. A normal `npm install` on your own PC does not. Manual deploy: `npm run deploy`.

Optional simplification (needs one dashboard change): set **Workers & Pages → casaantoniowebsites → Settings → Build → Build command** to `npm run build`, then delete `scripts/cf-postinstall.mjs` and the `postinstall` script. Cloudflare's docs say Workers Builds ignores a `build` section in `wrangler.jsonc`, so this cannot be done in code alone. Never use both at once.

`www` redirects to the apex in Cloudflare DNS. Do not add a `_redirects` file to `public/` (the build deletes it).

## Where things live

- **Text, all languages:** `src/data/packs/{en,ja,zh,ko}.ts`, including UI labels under `copy.ui`. `src/data/copy-check.ts` makes TypeScript fail if a language pack's shape differs from English.
- **Property facts** (beds, parking, damage policy): `src/data/property-facts.ts`. Confirmed facts are listed in the tracker.
- **Address, Airbnb and Kojohama links:** `src/data/links.ts`. Airbnb buttons open Airbnb's own site for the page language (airbnb.com / airbnb.jp / zh.airbnb.com / airbnb.co.kr). Kojohama links carry UTM tags.
- **Reviews:** `src/data/reviews.ts`. Never invent or edit a quote. `when` is `YYYY-MM` and is formatted per language. Quotes in the page's language are shown first.
- **SEO:** `src/lib/seo.ts` (titles, descriptions, hreflang, Open Graph, JSON-LD with localized amenities and Airbnb reserve actions). `public/llms.txt` is the plain-text summary for answer engines. `src/data/page-maintenance.ts` sets each page's `dateModified`/sitemap `lastmod`. Update it only when visible content or meaningful metadata changes.
- **Styles:** plain CSS in `src/styles.css`. Tailwind was removed on 19 Oct 2026, and a small reset sits at the top. Older rules are desktop-first (`max-width` queries); write new rules mobile-first.

## Photos

Originals live in `photos-src/<stem>.jpg`. Served sizes live in `public/photos/<stem>-<width>.{avif,webp}`, and `src/lib/photo-manifest.ts` is generated from them. To add a photo, drop the original into `photos-src/`, run `npm run photos`, then reference `/photos/<stem>.jpg` in the code (the `Photo` component picks the sizes).

Photos are cached for seven days. **When replacing a photo, use a new stem**: overwriting a URL can show returning guests the old image for a week. Version replacement `og-*.jpg` files too (they stay in `public/photos/`) and update their references in `seo.ts`. Keep the originals in the repository, because generation and the photo-attribution test depend on them.

## Analytics contract

`scripts/analytics-bootstrap.js` (inlined, minified, into every page) is the only producer of click events. GTM consumes the queue. Do not add a second click listener or a React event push.

- `airbnb_click`: booking intent. Not a completed booking.
- `review_click`: Airbnb or Booking.com review links.
- `inquiry_click`: long-stay requests.
- `contact_click`: email links.
- `map_click` and `language_change` are also tracked.

Metricool (`scripts/metricool-bootstrap.js`) counts visits only.

## Social links

Prepared links for Instagram, TikTok, RedNote and YouTube, in all four languages, are in [docs/CAMPAIGN_LINKS_2026-10-08.md](docs/CAMPAIGN_LINKS_2026-10-08.md). Generate one post link with:

`npm run campaign-links -- --campaign casa_antonio_2026_10 --content bedroom_a_2026_10_08 --source instagram --lang ja --page a`

Add `--out filename.md` to save a table. The tool reads `public/sitemap.xml`, which the build keeps up to date. For profile links use `?utm_source=instagram|tiktok|rednote&utm_medium=social&utm_campaign=bio`. Never add UTM tags to the Airbnb buttons on the site.
