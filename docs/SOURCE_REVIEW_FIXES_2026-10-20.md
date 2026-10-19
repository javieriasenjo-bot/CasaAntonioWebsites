# Source-review fixes — 20 October 2026

Changes are implemented in the local repository for owner review, commit and deployment. No Git commit/push, production deployment, account edit, review request or social publishing was performed.

## Implemented

1. Homepage apartment labels are real page links. The existing title/stretched card link and separate Airbnb button remain usable; gaps in the actions container pass through to the stretched link instead of creating dead areas. No nested anchors were added.
2. Both card backgrounds now use the shared Photo/picture component with accurate responsive sizes, AVIF/WebP candidates and lazy loading. At the checked 390–393px viewport / DPR 2, both select 800px AVIFs: 65,558 bytes combined versus 240,762 bytes for the former 1600px WebP backgrounds, approximately 73% less. This is measured image-transfer savings, not a claimed PageSpeed or LCP gain.
3. Email controls now offer a localized Copy email address action alongside the existing mailto link, in the footer and long-stay enquiry areas. Clipboard success is announced; denied/unavailable clipboard access reveals a manual-copy prompt and the address. The button is hidden before successful application startup, leaving the email link accessible without scripts. Copying is not reported as a contact click, delivered message or booking.
4. Browser tests now click the title, visible CTA and card surface, exercise the CTA by keyboard, check each booking event once, inspect chosen image variants, and cover clipboard success/failure in all four languages.
5. Added JavaScript-enabled first-visit language tests for Japanese, Korean and Traditional Chinese browser preferences on the English homepage, with empty storage. The 24 viewport/text-size cases check overflow, heading position and menu reachability, plus suggestion navigation and dismissal persistence. The existing 32 no-JavaScript layout cases remain.
6. Those tests exposed a further menu issue: a language banner increases header height, making the old fixed menu-height allowance too large in short landscape viewports. The menu now sizes to the remaining viewport below the header; while open, the header/menu sits above the floating booking control.
7. Main tracker rows now reflect the dated 16 October signed-in review: native Search Console link, retention/filter/funnel checks, Google profile editor approval, pending photo/public propagation, direct review URL, and owner-confirmed OTA access from 1 November. Historical records remain preserved and are not presented as fresh account verification.
8. Homepage/long-stay modification dates and generated sitemap were updated for the content changes.

## Validation and review

- `npm run check`: TypeScript, production build with 52 prerendered pages and all 17 tests.
- `npm run check:browser -- --out docs/qa/source-review-fixes-2026-10-20.json`: existing 52-route mobile/desktop, hydration, gallery, reservation and failure/fallback coverage, plus the new interaction and locale scenarios above.
- Third-party analytics requests are blocked during browser checks. No test conversions are deliberately sent.
- Mobile card photos/overlay/text were visually inspected in installed Chrome. Physical iPhone/Safari validation remains the owner acceptance step after deployment.
- `git diff --check` checks whitespace. The repository remains uncommitted for the owner.

## Conditional items / boundaries

- No verified original Japanese text was supplied for the translated Airbnb reviews. Existing English wording remains labelled accurately; no original-language quote was invented. This can be added once the actual source is available.
- Casa social accounts/posts remain deferred by the owner. They were not created or published.
- Agoda's supplying feed remains unverified; no Booking-to-Agoda propagation assumption was made.
- No Booking/Airbnb policy, rate or availability was edited. Platform damage terms still require reconciliation through the correct account when access begins.
- No new framework migration, speculative image re-encoding, Git LFS change or subscription purchase was introduced.

Suggested owner commit message: `Fix homepage card navigation, responsive photos and email copying`.
