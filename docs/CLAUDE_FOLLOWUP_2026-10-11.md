# Claude follow-up review — 11 October 2026

This review checks the supplied Claude findings against the current branch, the live website and current search/listing data. It supersedes the open-item list in the earlier message; it does not rewrite historical test records.

## Decisions and completed work

| Item | Current finding | Decision |
| --- | --- | --- |
| `src/data/copy-check.ts` | Present, tracked and already committed in `4e206a0`. `tsconfig.json` includes `src`, so `npm run typecheck` checks it without adding runtime code. | Keep. No restore commit is needed. |
| Hydration documentation | The earlier 9 October full client render has now been superseded by router-free hydration on 11 October. Server and browser share the direct page tree. | Keep the new approach; do not restore the old `router.ssr` workaround. See `STARTUP_PERFORMANCE_2026-10-11.md`. |
| Analytics delay documentation | The bootstrap and both handover documents say 3.5 seconds. Interaction still starts GTM immediately and the early event queue remains active. | Correct as committed. |
| Day-trip links | The official links for Otaru, Noboribetsu, Jozankei, Furano/Biei, Hill of the Buddha and Lake Toya are present. | Closed. |
| Homepage work section | Its primary action opens the localized long-stay page. | Closed. |
| Campaign links | The generator, automated test and 64 prepared links are present. | Closed in source. Publishing selected links remains an account/content decision. |

## Performance decision

A fresh live mobile Lighthouse 13 run on 11 October scored 79 with FCP 3.2 seconds, LCP 4.2 seconds, TBT 0 ms and CLS 0. This is one throttled lab sample, not field data. The LCP element was the home hero.

The proposed `fetchpriority` change is already implemented. Lighthouse confirmed that the hero is discoverable in the initial HTML, eager and marked `fetchpriority="high"`. The browser selected the 800 px AVIF, which is 56,299 bytes. Its measured LCP subparts were about 0.10 seconds TTFB, 0.01 seconds resource delay, 0.34 seconds transfer and 0.86 seconds element render delay. A smaller image is therefore not the first supported fix from this trace.

Three local baseline runs were compared with three runs that synchronously decoded the priority image. The variant did not improve the median LCP, so it was reverted. No image or decoding change is included. The remaining Lighthouse opportunity was about 41 KiB of unused JavaScript with an estimated 320 ms saving; changing the router/runtime for that estimate would be a larger project and needs route-level interaction testing. CrUX field data is unavailable because GSC Wizard has no CrUX API key configured and this young site may not yet have enough traffic.

Summary evidence is in [`qa/claude-followup-2026-10-11.json`](qa/claude-followup-2026-10-11.json). The full Lighthouse report is retained outside Git at `C:/dev/CasaAntonio_Lighthouse_Live_2026-10-11.json`.

## Search and analytics status

Search Console now has a real Casa-specific baseline for 10 September through 7 October, settled through 6 October: seven query rows and fourteen page rows, with no clicks yet. The sample is too small for title rewrites. Canonical and slashless page variants both appear in historical page data; the live slashless URLs correctly redirect to their trailing-slash canonicals, so no redirect removal is warranted.

Bing is connected through GSC Wizard and returns zero query rows and zero page rows so far. Keep the single `sitemap.xml` submission and allow discovery time. Repeated sitemap submission will not create search demand.

The owner screenshots confirm all seven event-scoped GA4 custom dimensions are registered: apartment name, contact method, intent, link location, page language, provider and selected language. They also show the Internal Traffic filter Active and Casa Developer Traffic in Testing. The owner previously confirmed the A long-stay event receipt. The GSC Wizard connection provides current Search Console data, but it does not by itself prove that GA4's native **Product links → Search Console links** connection is active. That single GA4 admin setting and receipts for B booking/review, contact and map events remain optional account checks.

## External listings still require correction

- [Airbnb A](https://www.airbnb.com/rooms/1248284267045468378) still says “paid parking” in the title while the same listing says “Park for free” and “Free parking on premises.” Remove “paid” from the title. Its body also labels both bedroom lines “Bedroom 1”; the second should be “Bedroom 2.”
- [Booking.com A](https://www.booking.com/hotel/jp/casa-antonio-a.html) still exposes conflicting generated metadata: one bedroom and approximately 100 m²/1,076 ft². The confirmed facts are two bedrooms and approximately 65 m². Correct the accommodation/unit configuration in the Booking.com extranet rather than trying to counter it with website copy.
- Do not change the website to match either incorrect listing. The website, Airbnb bed panel and owner confirmation agree on four guests, two bedrooms, three single beds and one double bed, with free parking for one car.

These account edits cannot be made from the repository. The available Windows Computer Use runtime requires a `node_repl` tool, which is not exposed in this session, and there is no Airbnb, Booking.com or social-profile connector. The prepared campaign links remain ready for deliberate use on Casa-relevant posts and profiles.

## Validation

`npm run check` passes: TypeScript, the 52-page production build and all 12 automated tests. No source behavior was changed from an inconclusive performance experiment. The files in this follow-up only bring the handover and current evidence up to date.


## Later startup implementation (11 October)

The performance decision above records the earlier review. The subsequent approved startup work removes TanStack Router, loads only the current page and language, preserves prerendered nodes through hydration, and uses a native mobile menu. All 52 routes passed browser checks. The current implementation, measurements and validation are documented in STARTUP_PERFORMANCE_2026-10-11.md. The earlier statement that this follow-up changes no behavior applies only to the earlier review files.
