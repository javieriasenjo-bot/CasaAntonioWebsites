# Code review — 18 October 2026 (Claude)

Scope: full read of `src/`, `scripts/`, `public/`, build/deploy config and a clean rebuild. Respects owner decisions in `OPEN_TRACKER.md` (no prices, no phone, approved email, social deferred).

**Health check:** clean copy → `npm ci && npm run check`: typecheck ✅, build (52 pages) ✅, 14/15 tests ✅. The one failure only happened because `photos-src/` was left out of the test copy. It is not a real defect.

Overall: solid. Prerender + hydration, hreflang, sitemap, JSON-LD, the no-JS menu, a11y (focus trap, skip link, 44px targets) and analytics queueing are all done well. The suggestions below are improvements, not fixes for broken behaviour.

---

## 1. Conversion / mobile UX (highest value)

| # | Suggestion | Files |
|---|---|---|
| 1.1 | **Show reviews in the visitor's language first.** Sort quotes so those matching the page language come first (Japanese Booking quotes first on `/ja/`, Taiwanese `zh` quotes first on `/zh-cn/`). Store the original text for translated Airbnb quotes (e.g. Junko's Japanese original) and show it on the matching language page. | `data/reviews.ts`, `components/reviews.tsx` |
| 1.2 | **Localise review dates.** `when: "December 2025"` appears in English on every language page. Store ISO `"2025-12"` and format it with `Intl.DateTimeFormat(lang, {year:"numeric", month:"long"})`. | same |
| 1.3 | **Shorten the home page on mobile.** It has 11 sections. A/B are presented three times (choice cards, then `home-stay-a`, then `home-stay-b`), and long-stay twice (`home-nomad` and `long-stay`). Merge the A/B sections into the choice cards (add a photo to each card) and merge the two long-stay sections. Move `<Reviews>` to right after the choices, so social proof sits next to the decision. That gives about 7 sections. | `components/home-page.tsx` |
| 1.4 | **Language suggestion for first-time visitors.** The banner only appears once a language has been saved. Social traffic from RedNote or Korean Instagram lands on EN with nothing saved. When nothing is stored, fall back to `navigator.languages` (ja / zh / ko) and suggest that language. Keep this as a suggestion, not a redirect (redirects are bad for SEO). | `lib/i18n.tsx` |
| 1.5 | **Localised Airbnb links.** Every language links to `airbnb.com/rooms/…`. Consider `airbnb.jp` (ja), `airbnb.co.kr` (ko) and `zh.airbnb.com` (zh), so logged-out guests land in their own language. Check each one opens the right listing. Also widen the hostname regex in `analytics-bootstrap.js` (`/(^|\.)airbnb\.com$/` does not match `.jp` or `.co.kr`) and update the tests. | `data/facts.ts`, `components/airbnb-link.tsx`, `scripts/analytics-bootstrap.js`, `tests/analytics.test.mjs` |
| 1.6 | **Footer sister-site link loses attribution.** `chrome.tsx:206` links to `https://kojohamacabins.jp/` with `rel="noopener noreferrer"` and no UTM, so Kojohama's GA4 sees a direct visit. Reuse the `KojohamaPromo` URL builder (localised URL + `utm_content=footer`) and drop `noreferrer`. | `components/chrome.tsx` |
| 1.7 | **Lightbox swipe smoothness.** Preload the next and previous images (`new Image()` with the same `srcset`/`sizes`) when the lightbox opens or changes, so swiping doesn't show a blank frame on mobile data. | `components/gallery.tsx` |

## 2. Performance

| # | Suggestion | Files |
|---|---|---|
| 2.1 | **Add a 400w photo variant.** The smallest variant is 800w. Gallery thumbnails (`50vw` on mobile) and half-width images download 2–4× more pixels than needed on DPR-2 phones. Opening "Show all" on B loads about 50 × 25–30 KB. | photo pipeline, `lib/photo-manifest.ts` |
| 2.2 | **Re-encode heavy WebP fallbacks.** `exterior-1333.webp` is 433 KB, against 171 KB for the AVIF. Only non-AVIF browsers get it, but it's the hero. | `public/photos` |
| 2.3 | **Automate the photo pipeline.** The README describes generating variants and editing `photo-manifest.ts` by hand. Add `scripts/photos.mjs` (sharp): read `photos-src/`, write AVIF/WebP at [400, 800, 1600, max], and regenerate `photo-manifest.ts`. This prevents manifest drift and makes 2.1 trivial. | new script |
| 2.4 | **Remove the hydration waterfall.** Each page loads `index.js` (66 KB gz). Only after that runs does it fetch the language pack and the page chunk. Enable `build.manifest` and have `prerender.mjs` add `<link rel="modulepreload">` for that page's chunk plus its language pack. | `vite.config.ts`, `scripts/prerender.mjs` |
| 2.5 | **Ship only the page's language.** Several components carry all 4 languages inline: `gallery.tsx` (showAll/showFewer/filters label), `reviews.tsx` (`LABEL`), `kojohama-promo.tsx` (`COPY`, so this chunk is 14.5 KB), `email-link.tsx`, `stay-view.tsx` ("Practical stay details"), and `guide-view.tsx` (manual copy text). Move these strings into the packs. | listed files, `data/packs/*` |
| 2.6 | **Minify the inline bootstrap scripts.** `analytics-bootstrap.js` and `metricool-bootstrap.js` are inlined with their comments into all 52 pages. Run them through `esbuild.transform(..., {minify:true})` in `prerender.mjs` and `vite.config.ts`. | scripts |
| 2.7 | *Optional experiment:* alias React to `preact/compat` (it supports `hydrateRoot`, `createPortal`, `useId`). This saves about 45–50 KB gz of JS per page, which matters for INP on mid-range Android. Check the field Core Web Vitals in Search Console first: the tracker defers perf work unless it's justified by measurement. | `vite.config.ts` |

## 3. SEO / structured data

| # | Suggestion | Files |
|---|---|---|
| 3.1 | Add `og:site_name`, `og:image:alt`, and `og:locale:alternate` (the other 3 locales). | `lib/seo.ts` `headFor` |
| 3.2 | `FAQPage` is emitted on both `/faq/` and `/arrival/` with identical questions. Keep it on `/faq/` only. Since 2023 FAQ rich results only show for government and health sites, so this is about tidiness, not traffic. | `lib/seo.ts` `jsonLd` |
| 3.3 | Home page graph: link the two `Apartment` nodes from `LodgingBusiness` with `containsPlace`, include them on home, and add `petsAllowed: false`. | `lib/seo.ts` |
| 3.4 | Escape `<` as `<` when serialising JSON-LD (protects against `</script>`, standard hardening). | `lib/seo.ts` `headTags` |
| 3.5 | The build writes `public/sitemap.xml`, which mutates the source tree and creates diffs. Write it to `dist/` only. | `scripts/prerender.mjs` |

## 4. Code health / maintainability

- **Dead copy keys in all 4 packs:** `bNote`, `bSlots`, `bPhotosCta`, `closeMenu`. `bNote` says B's photos are *not* interior shots, which is wrong now that B has 50 interior photos. Remove these keys before someone reuses them.
- **Address hard-coded in 3 places:** `guide-view.tsx` (`ADDRESS_JP`), `seo.ts` (`lodging()`) and the pack footers. Make `facts.ts` the single source.
- **Pack structure is inconsistent:** `en`/`ja` hold their copy inline, while `zh`/`ko` re-export from `data/copy-zh.ts` / `copy-ko.ts`. Pick one layout.
- **`SellingPoints` maps icons by array index.** If a translation reorders the items, it shows the wrong icon. Use `{icon, label}` items instead.
- **`NotFoundPage` is only reachable in dev.** Production serves the static `public/404.html`. Either drop it or prerender it into `404.html`, so all 4 languages share one template.
- **Tailwind provides only preflight and the `@theme` variables** (no utility classes are used). Optional: drop it for a small reset plus `:root` variables, which removes a dependency.
- **CSS is desktop-first** (`max-width` queries). There's no need to rewrite it, but write new CSS mobile-first (`min-width`).
- **Deploy:** running the build in `postinstall` (`cf-postinstall.mjs`) is fragile. Any `npm ci` triggers it on CI. Set the Workers Builds *build command* to `npm run build`, then delete `cf-postinstall.mjs` and the `allowScripts` workaround. `observability` in `wrangler.jsonc` does nothing for an assets-only Worker.
- **Repo hygiene:**
  - Move the 25+ dated handover docs and `docs/qa/*.json` to `docs/archive/`.
  - The README "Status (6 Oct 2026)" section is stale.
  - `.tanstack/` is a leftover folder.
  - `indexnow-submit.ps1` duplicates `scripts/indexnow.mjs`.
  - `.git` is 134 MB because photo variants are re-committed. Consider Git LFS for `*.avif`/`*.webp`/`*.jpg`.
  - Use descriptive commit messages instead of "newv" / "vv".

## Suggested order

1. Quick wins (≈1 hour): 1.6, the dead keys, 3.1, 3.4, 3.5, 2.6.
2. Conversion: 1.1, 1.2, 1.4, 1.3.
3. Pipeline: 2.3 → 2.1 / 2.2, then 2.4 / 2.5.
4. Optional: 1.5 (after verifying the domains), 2.7 (after field data), hygiene.

---

## Implementation status — 19 October 2026

All changes were made in the source and verified on a clean copy. `npm run check` passes (typecheck, 52 pages, 17 tests including 2 new ones), and so does `npm run check:browser` (all routes at mobile/desktop widths, no-JS menu, mobile header matrix, delayed first click, failed import). Before/after mobile screenshots were compared, and the Tailwind removal rendered pixel-identical.

| # | Status | What changed |
|---|---|---|
| 1.1 | Done (part) | Reviews in the page's language come first. Airbnb's Japanese originals of translated quotes are not stored, so they can't be shown yet. Paste the original text into `reviews.ts` if wanted (never invent quotes). |
| 1.2 | Done | `when` is now `YYYY-MM`, and review and "ratings recorded" dates are formatted per language (`src/lib/dates.ts`). The formatting is deterministic, so prerendered and hydrated text always match. |
| 1.3 | Done | Home page cut from 11 to 8 sections. The A/B cards gained a "Check dates" Airbnb button, and the whole card opens the apartment (stretched link). The duplicate A/B sections and the second long-stay section were removed (the `#long-stay` anchor moved to the remaining section), and reviews now follow the cards. Mobile page height went from 10,027 px to 7,851 px. |
| 1.4 | Done | A first-time visitor gets the browser-language offer, worded in the offered language. "Stay in this language" then remembers the current language. A language chosen earlier still takes priority. |
| 1.5 | Done | Airbnb buttons use airbnb.jp / zh.airbnb.com / airbnb.co.kr per page language; all three were checked to open the listings in the right language. The analytics bootstrap recognises these hosts, with a new test. Structured data keeps the canonical airbnb.com URLs. |
| 1.6 | Done | The footer and /combo/ Kojohama links are localised, carry UTM tags (`utm_content=footer` / `guide`) and keep the referrer. |
| 1.7 | Done | The lightbox fetches the next and previous photos at low priority. |
| 2.1 | Done | Added 400w AVIF/WebP for all 130 photos (260 files, 4 MB). On average a 400w AVIF is 60% smaller than the 800w one. |
| 2.2 | Not done (measured) | Re-encoding the heavy WebPs (`exterior`, `a-entrance`, `entry`) at sane quality doesn't make them smaller: they're high-detail brick and texture shots. Only browsers without AVIF download them. |
| 2.3 | Done | `npm run photos` (`scripts/photos.mjs`, sharp): makes missing sizes from `photos-src/` and regenerates `photo-manifest.ts` from the files on disk. |
| 2.4 | Done | Vite manifest → `modulepreload` for each page's chunk and language pack. The manifest is deleted from `dist`. |
| 2.5 | Done | UI strings moved from components into the packs (`copy.ui`): gallery, room filters, reviews, Kojohama promo, email, practical title, copy-address fallback, FAQ title. The privacy page keeps its 4-language text because it only loads on that page. |
| 2.6 | Done | The inline bootstrap scripts are minified with Vite's built-in minifier (`scripts/inline-scripts.mjs`). |
| 2.7 | Not done | The Preact swap is still an experiment to try only if field Core Web Vitals justify it. |
| 3.1 | Done | Added `og:site_name`, `og:image:alt` and `og:locale:alternate`. |
| 3.2 | Done | `FAQPage` now only on `/faq/`. |
| 3.3 | Done | Home graph includes both `Apartment` nodes, `containsPlace` and `petsAllowed: false`. |
| 3.4 | Done | JSON-LD escapes `<`. |
| 3.5 | Kept | `npm run campaign-links` reads `public/sitemap.xml` without needing a build, so the build keeps writing it. |
| 4 | Done | Dead keys removed in all packs (`bNote`, `bSlots`, `bPhotosCta`, `closeMenu`, `busLabel`, `matrixLabel`, `snowLabel`, `mosaicCaption`, `notFound*`, `aHome`, `bHome`). Address single-sourced in `src/data/links.ts`. Packs unified (`copy-zh.ts` / `copy-ko.ts` merged into `packs/`). `data/guides.ts` removed. `NotFoundPage` removed (production uses `public/404.html`). |
| 4 | Done + bug fix | Selling points now name their icon. Before, the icons were assigned by position and were wrong (parking showed a fork, size showed a ski slope). Added parking and bed icons. |
| 4 | Done | Tailwind removed: a small reset plus `:root` variables, with `-webkit-backdrop-filter` and `color-mix` fallbacks added by hand. CSS went from 7.8 KB to 6.5 KB gzipped. |
| 4 | Not done | Deploy `postinstall`: Cloudflare docs say Workers Builds ignores wrangler's `build` config, so removing it needs the dashboard build command set first (steps in the README). `observability` was left as it is (harmless). |
| 4 | Done | Hygiene: 46 historical docs/QA files moved to `docs/archive/`, with references rewritten. README rewritten. `indexnow-submit.ps1` removed (`npm run indexnow` replaces it). The leftover `.tanstack/` folder was deleted from the PC copy. |
| 4 | Not done | Git LFS: Workers Builds would need LFS support, or it would deploy pointer files instead of photos. Too risky for the gain. |
| — | Done | `PAGE_MODIFIED` set to 19 Oct for home, A, B and arrival. |
