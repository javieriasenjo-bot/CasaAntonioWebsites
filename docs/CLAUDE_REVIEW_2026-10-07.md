# Claude suggestions reviewed — 7 October 2026

The supplied suggestions were assessed as proposals, not as instructions to change every listed item. Work was performed in `C:/dev/CasaAntonioWebsites`.

## Implemented

- Photo response policy changed to `public, max-age=604800, stale-while-revalidate=86400`. This avoids mandatory revalidation while a cached photo is fresh. No cold-visit PageSpeed improvement is claimed. A fresh live request to `/photos/living-800.avif` returned HTTP 200 with this policy during the review. [Cache-Control semantics](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control).
- README explains photo versioning: a replacement gets a new stem, every generated image size/format and manifest/reference is updated, and replacement social-preview images also get new URLs. Existing file contents were not changed.
- Removed root leftovers `apply.py`, `man_a.txt`, `ts_a.json`, `remove-duplicate-airbnb-click.patch`. The first three formed an old one-off photo patch and were not invoked by current build scripts.
- Removed unused `src/data/highlights.ts`, `src/data/content.ts`, `src/lib/photo-dims.ts` after searching source/build references. Obsolete 70–100 m² and parking-at-the-door claims disappeared with highlights. The active photo manifest remains authoritative for dimensions. Tree-shaking already excluded these files from the app, so cleanup is not a claimed bundle-size reduction.
- Official information is now available below every day-trip destination in all four languages: Otaru tourism, Otaru Aquarium, Sakaimachi, Noboribetsu, Jozankei, Farm Tomita, Biei, Hill of the Buddha, Lake Toya, and existing Teine/Upopoy links. Labels identify Japanese-only pages where applicable.
- Corrected stale README instructions asking for replacement bedroom photos and another GTM import. The owner's current-photo confirmation and completed GA4 receipt check remain authoritative.

## Suggestions not adopted

### Replace hydration with a full client render

The production check visited all 52 pages at 390 and 1440 px, captured page exceptions and React console errors, and compared the prebuilt heading element with the heading after app startup. All 104 route checks preserved the heading, with no React #418 or other captured application error. Gallery/menu checks and the no-JavaScript fallback also passed. The proposed mismatch was not reproduced, so `main.tsx` retains hydration and its current router SSR boundary setup. It calls hydrateRoot once on startup, not repeatedly. A blanket clear-and-render would discard already visible HTML.

This remains an integration detail to revalidate after React/TanStack upgrades; the checks are desktop Edge and mobile-width Edge, not every browser, physical iPhone, extension or slow-network case. No framework migration was performed. [React hydration expectations](https://react.dev/reference/react-dom/client/hydrateRoot), [React #418](https://react.dev/errors/418).

Evidence: `C:/dev/casa-hydration-review-2026-10-07.json`.

### Increase the GTM fallback from 1.5 to 3.5 seconds

Kept 1.5 seconds. GTM already starts on the first pointer, touch, keyboard or scroll interaction. Queueing begins immediately and does not depend on loading GTM. However, queueing is not account delivery: a short passive visit or same-tab departure before the loader runs can end before analytics sends anything. A longer fallback increases that exposure. No fresh Lighthouse comparison or trace isolates this timer as the cause of the reported score of 65, so the proposed delay is not justified by that score alone. [Lighthouse scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring).

Existing owner-confirmed GA4 receipt remains done. No additional tracking producer, GA4 event or account configuration was added.

### Delete copy-check.ts

Kept it. `tsconfig.json` includes all of `src`, so TypeScript checks this file even though the runtime app does not import it. Its assignments enforce the translated copy/guide shapes against English during `npm run typecheck`. It is a compile-time safeguard and adds no runtime bundle payload. Import absence alone does not establish that a file is useless.

### Move original photos out of Git

Kept them. There are 130 source files totaling 41,970,106 bytes. Current generation and photo-attribution SHA-256 tests rely on them. Moving them requires a documented asset retrieval workflow and durable provenance, rather than deleting originals or rewriting Git history as routine cleanup. No observed clone problem was supplied.

## Official URLs checked

Opened on 7 October:

- [Otaru Tourism Association](https://otaru.gr.jp/)
- [Otaru Aquarium visitor guide](https://otaru-aq.jp/guide)
- [Sakaimachi shopping street](https://otaru-sakaimachi.com/)
- [Noboribetsu tourism](https://noboribetsu-spa.jp/en/)
- [Jozankei tourism](https://jozankei.jp/en/)
- [Farm Tomita](https://farm-tomita.co.jp/en/)
- [Biei tourism](https://www.biei-hokkaido.jp/en/)
- [Hill of the Buddha operator information](https://www.takinoreien.com/pages/108/)
- [Lake Toya tourism](https://www.laketoya.com/en/)

The Buddha operator currently reports cleaning from 25 September through 20 October 2026, making the statue difficult to see and restricting some areas. This dated notice is available through the official link; it was not hardcoded into evergreen translated copy.

## Validation and release boundary

- Typecheck, production build of 52 pages and all 10 automated tests passed after deleting the files and adding the links.
- Local browser checks visited the day-trip page in four languages at 390 and 1440 px. Every one of the 64 destination sections had nonempty official links. No captured React/application error or horizontal overflow occurred.
- Live hydration review covered 104 route/width combinations; image, gallery, menu and no-JavaScript checks passed.
- A new owner commit (`92acad1`, title `new v`) was observed during work with the implementation already included. Codex did not commit, push or deploy. The live photo cache header matches the new policy. Production day-trip checks passed in all four languages at 390 and 1440 px: all 64 destination sections had official links, with no captured application error or overflow. Evidence: `C:/dev/casa-claude-review-production-2026-10-07.json`.
- New README/review documentation changes may still need the owner's commit. No new PageSpeed score, signed-in account change or physical iPhone test is claimed.
