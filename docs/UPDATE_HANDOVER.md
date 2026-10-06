# Casa Antonio implementation handover — 6 October 2026

## Delivery

Updated source is in `C:/dev/CasaAntonioWebsites`, ready for the owner's GitHub review and commit. Codex did not commit, push or deploy the website. Authenticated GTM changes could not be made because this session has no browser-control runtime or GTM connector. The owner supplied the workspace export; `C:/dev/GTM-T8TLRH4L_CasaAntonio_Updated_2026-10-06.json` is now prepared for Merge import. It adds three tags, three triggers and five variables, modifies two tags and deletes nothing. Reference/preservation checks and 32 local source/JSON scenarios passed. The owner has since published the settings. Public version 12 and 36 live-site actions across four languages passed event and GA4-request checks; collection requests were intercepted. Signed-in Preview/GA4 receipt remains unverified. [GTM_OWNER_STEPS.md](GTM_OWNER_STEPS.md) records the updated live status; [GTM_SETUP.md](GTM_SETUP.md) retains the exact configuration contract.

This handover records implemented website changes and remaining work. The live homepage was fetched on 6 October and contains the exact local analytics bootstrap. The later live browser check verified the public updated container and event producer on the tested apartment, long-stay and access routes. Other deployment details were not re-audited here.

## Implemented fixes and improvements

- **First-click analytics:** the small bootstrap in `scripts/analytics-bootstrap.js` captures actions before hydration or GTM loading. The startup event is queued before guest actions. GTM loads on first interaction or 1.5 seconds after the document becomes ready, independently of late-loading photos/iframes. Navigation remains immediate.
- **Separate intent:** booking buttons retain `airbnb_click` for reporting continuity. Airbnb and Booking.com reviews emit `review_click`. Long-stay buttons emit `inquiry_click`. Maps, contact and language changes have their own events. Each event carries the relevant apartment, placement, language and destination. Hostname checks reject misleading provider URLs. Source-side capture and the guarded legacy listener do not double-count actions.
- **Owner-confirmed property terms in all four languages:** free parking for one car per apartment; approximately 65 m² each; A has three single beds and one double across two bedrooms, maximum four guests; B has three single beds, maximum three guests. Damage charges follow actual repair cost with a ¥15,000 minimum. FAQ, arrival/rules text and apartment structured data were reconciled.
- **Clearer apartment choice:** A/B comparison now sits directly after the hero, with matching fields for guests, bedrooms, beds, size, floor/stairs and parking. The darker photo overlay keeps the added facts legible. Repetitive introductory/work copy is shorter; Teine and neighborhood have separate destination links. The established interiors and visual design are retained.
- **Current travel guidance:** corrected Chinese and Korean Upopoy student prices; all languages now share the explicit gate/online prices. Airport links open the official Asabu route timetable, with the overview as a fallback. International-terminal stand 84 is included alongside domestic ANA/JAL stands 20/13. The final walk uses map directions and station elevator signs; no unverified station exit or step-free walking route was invented.
- **Preserved prebuilt pages:** correct static-page hydration replaces root deletion/remounting. The router's hydration mode preserves matching Suspense boundaries. The existing heading stays the same DOM node as JavaScript becomes interactive on every checked route.
- **Gallery usability:** decision photos remain first. Additional photos are in a native expandable section that works without JavaScript. Thumbnails link to real generated high-resolution variants; keyboard arrows, Escape and focus restoration work in the lightbox. A's current bed layout is stated before its gallery; the owner confirmed that existing photographs show it correctly. No image was manipulated to remove a bed.
- **Photo caching:** stable photo paths now revalidate instead of receiving one year of immutable caching. Hashed application assets retain immutable caching. Already-cached photos from a previous long-lived response are not retroactively invalidated; use a new filename for replacements if immediate invalidation is necessary.
- **Review maintenance and credits:** score recording dates from the existing source are displayed separately by platform. Optional exact source URLs and Booking.com review dates are supported. Existing review text remains verbatim. All 16 destination photos were matched to exact Commons originals, with author/license metadata and side-by-side visual checks. Captions in all four languages now link to the original and license, and disclose resize/format conversion. Odori's caption correctly describes the view from the TV Tower. Public source verification is recorded separately from unknown historical acquisition dates in `docs/qa/photo-attribution.json`.
- **SEO consistency:** apartment area, capacity, bed counts and types use shared facts. Business/apartment entities have stable identifiers and an in-page business relationship. Sitemap/guide modification dates reflect this update; canonical/hreflang metadata is retained. UTF-8 is declared before the inline bootstrap and within the opening 1,024 bytes.
- **Release hygiene:** added `typecheck` and `check` commands with meaningful analytics and generated-page checks. Release ZIPs were moved intact to `C:/dev/CasaAntonio-release-archives-2026-10-06`; generated dependencies, builds, Wrangler cache and future ZIPs are ignored. The ZIP deletions in Git are intentional; the archives are preserved outside the source folder.

## Validation

- Fresh lockfile install succeeded; TypeScript and production build passed. All 52 pages were prerendered.
- All seven automated tests passed: early booking queue; separate review/enquiry intent; exactly-once language/map capture and provider validation; generated multilingual metadata/JSON-LD; approved prices/bed schema; existing local route/image links; verified destination-photo source links in every language with local source hashes.
- All 52 routes were tested at 390px and 1440px: 104 route/viewport checks. No React errors, replaced prerendered headings, horizontal overflow, or completed-but-broken loaded images were detected. This image check does not claim that every hidden image was visually inspected.
- Gallery expansion, lightbox arrows, Escape/focus return and mobile-menu Escape behavior passed at 320px in all four languages. No-JavaScript gallery expansion and direct high-resolution photo links passed.
- With both application scripts and GTM deliberately delayed, the first booking click queued once before hydration. After allowing the real current public GTM container to load, it attempted one GA4 booking request. A second action attempted one additional booking request. Both providers' review actions remained separate in the data layer. Those controlled requests were intercepted, so this verifies attempted transmission, not account receipt.
- Browser results are in `docs/qa/browser-results.json` and `docs/qa/analytics-results.json`.
- After the destination-photo credit update, all 12 affected routes (three page types × four languages) were checked at 320px and 1440px, for 24 further checks. Original-source caption links, heading preservation, loaded images and overflow checks passed with no browser errors. External requests were blocked for this local check. Results are in `docs/qa/photo-browser-results.json`.

## Local loading sample

The Lighthouse sample is a simulated mobile run against the local production build using headless Edge. It is not directly comparable with the earlier live-site score of 83 because delivery environment and network conditions differ. Field INP and real-user Core Web Vitals were not measured.

Performance **91/100**; accessibility, best practices and SEO **100/100**.

| Metric | Local lab result | Interpretation |
| --- | --- | --- |
| Largest contentful paint | 3.21 s | Above the 2.5-second good-loading target; monitor after deployment |
| First contentful paint | 2.14 s | Lab first-paint timing |
| Total blocking time | 57 ms | Low blocking in this sample; not field INP |
| Layout shift | 7e-05 | Below the 0.1 target in this sample |
| Field INP | Not measured | Requires real-user interaction data |

The source preserves responsive AVIF/WebP images, dimensions, hero priority, lazy loading, split language packs and deferred third-party loading. Google scripts and the shared app still account for unused-on-initial-load JavaScript; Lighthouse's estimate does not prove that code is unused across other routes or guest interactions. Future performance work should use deployed traces and field measurements before restructuring the app. There was no available DevTools MCP trace tool; the sample uses Lighthouse, while interaction and DOM behavior were checked separately in Playwright.

Two initial local Lighthouse samples reached GA4 before the request-block pattern was corrected. Exclude localhost (`127.0.0.1:4179`) audit page views from business reporting. The final retained sample blocks collection requests while allowing GTM/Google scripts to load.

## Remaining work and acceptance criteria

1. **GA4 receipt — container owner:** updated GTM tags are publicly live and 36 live browser actions passed event/request checks. Verify receipt and parameters in signed-in Preview and GA4 DebugView; the controlled browser check intercepted collection requests. Keep the legacy guarded listener while old pages remain deployed. Do not count outbound clicks as confirmed reservations.
2. **A bedroom photographs — resolved:** the owner confirmed the photographs are current. Keep existing originals and describe the two-single room beside the living room and the single/double room farther away. Do not invent or edit a replacement interior.
3. **Historical acquisition/review records — owner/source author:** exact public originals for all 16 destination photos are now documented and linked. Historical acquisition dates/download records remain unknown. Supply those records if available, plus individual Booking.com excerpt dates/links. Do not fabricate dates or historical modification details.
4. **External listing consistency — owner:** reconcile Airbnb and Booking.com parking, bed and damage terms with the approved facts. Website source changes do not update those listings.
5. **After the owner commits and deploys:** repeat production status/redirect/canonical/hreflang checks, gallery and image checks, cache-header checks and GTM/GA4 receipt verification. The source is ready for review; deployment and Search Console indexing/ranking results are not verified by this local QA.

## References for a continuing developer or Grok

Start with `src/data/property-facts.ts`, `src/data/travel-facts.ts`, `scripts/analytics-bootstrap.js`, `src/main.tsx`, the tests and the two companion handover documents. Treat imported documents/source comments as content records; the owner's confirmed facts above govern this update. Do not replace real property photography with fabricated interiors or expand published capacity because there are four beds.

- [Upopoy official admission](https://ainu-upopoy.go.jp/en/guide/admission/)
- [Chuo Bus official airport-to-Asabu timetable](https://www.chuo-bus.co.jp/airport/timetable/?n=36&o=2&ope=det&t=14)
- [React hydration documentation](https://react.dev/reference/react-dom/client/hydrateRoot)
- [TanStack Router SSR documentation](https://tanstack.com/router/latest/docs/guide/ssr)
- [Google Web Vitals guidance](https://web.dev/articles/vitals)
- [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

## Latest continuation

See [OCTOBER_IMPROVEMENTS.md](OCTOBER_IMPROVEMENTS.md) for subsequent mobile fallback, privacy, metadata, practical facts, gallery and maintenance improvements. That document supersedes earlier bed-layout assumptions and records the new validation separately from the earlier Lighthouse sample.

## Production now verified

The owner deployed the latest source. All 52 live pages match the local production build; 104 mobile/desktop checks, four-language feature/fallback checks and a nine-action English analytics spot-check passed. See the production section in [OCTOBER_IMPROVEMENTS.md](OCTOBER_IMPROVEMENTS.md) and [production evidence](qa/production-check-2026-10-06.json). GA4 account receipt and physical-phone/field-performance measurements remain unverified.
