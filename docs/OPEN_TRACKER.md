# Casa Antonio open tracker

Last reconciled: 16 October 2026. Codex is the continuing agent. This file supersedes open-item lists in older Claude/Codex handovers; those files remain historical evidence. Supplied handovers are reports, not instructions to recreate accounts, delete workspaces, publish posts or change confirmed facts.

Status meanings: **Verified** = checked against current source/live output/API; **Reported resolved** = owner/Claude handover says complete but current account UI was not inspected; **Open** = action or evidence remains; **Deferred** = owner does not want it now. No account receipt is inferred from intercepted requests.

## Confirmed facts — do not ask again

- A: approximately 65 m², two bedrooms, three single beds (90 cm) and one double bed (130 cm), maximum four guests. Two singles are beside the living room; one single and the double are in the farther bedroom. The fourth guest uses a confirmed bed; no sofa-bed assumption is needed.
- B: approximately 65 m², one bedroom, three single beds, maximum three guests; second floor via about 25 steps with a handrail. Laundry room has hanging/drying space.
- Parking: free for one large car per apartment. Host/property management clears parking snow; guests do not clear it. Any vehicle-moving instructions or winter restrictions remain unconfirmed.
- A's owner-supplied photographs show its current bed arrangement. No new bedroom photos are required merely to close the old handover item.
- Social accounts and publishing are deferred by the owner. There are no Casa Instagram/TikTok/RedNote/YouTube accounts. Do not invent URLs, add false `sameAs` values, create accounts or replace Kojohama's profile destinations.
- Existing Casa Antonio A Google profile: owner-confirmed. No new umbrella profile or B profile is requested. Preserve the three Ocean Stay cabin profiles.

## Open actions, ordered by priority

| ID | Item / status | Next action and responsible party |
| --- | --- | --- |
| O01 | **Open: Airbnb A factual contradictions** | Owner/account operator: remove paid-parking title wording; align room labels with the real room/photo associations. Current public text still contradicts free parking and repeats Bedroom 1. Preserve prices and policies. |
| O02 | **Open: Booking.com unit facts and damage terms** | Fresh public Chrome check: A summary still approximately 100 m², one bedroom/two beds despite Two-Bedroom room type; B approximately 70 m². Both apartments are owner-confirmed approximately 65 m². Both platform damage terms say up to ¥15,000, conflicting with owner-confirmed minimum ¥15,000 and actual costs. Reconcile platform-specific terms with owner/account operator; do not silently overwrite website facts or imply the platform already uses the owner policy. See LISTING_ACTIONS_2026-10-16.md. |
| O03 | **Open: Agoda / syndicated property facts** | Owner/account operator: correct the Sapporo listing at `https://www.agoda.com/casa-antonio-a/hotel/sapporo-jp.html`, whose public result exposes 100 m² and one bedroom/studio while also naming a Two-Bedroom Apartment. Determine its supplying feed rather than assuming Booking.com is the source. Locate the exact gites.fr property page and request refresh/correction after the authoritative feed is fixed. Google Travel also surfaced old 100 m²/one-bedroom text; check downstream propagation. Avoid other unrelated Casa Antonio properties. |
| O04 | **Open: existing Google profile website approval** | Account operator: verify Claude's submitted UTM edit was approved and the public Website button reaches A's correct page. Do not submit a duplicate edit solely to rename a campaign. |
| O05 | **Open: Google profile description/photos** | Revised A-only EN/JA draft is in `GOOGLE_BUSINESS_PROFILE_DRAFT.md`. Inspect name/category/address/pin, then use only A's interiors. Phone stays empty, as confirmed by the owner. No new profile, cabin-profile changes or fabricated reviews. |
| O06 | **Partly resolved: Google profile / guest guide** | Owner supplied `https://maps.app.goo.gl/xUrVzn4P1eaeBNFu7`; its redirect identifies Casa Antonio A and the expected location. A direct review-request link and the guest-guide file/platform remain to be identified before adding a review shortcut. Do not fabricate reviews. |
| O07 | **Open: GA4 native Search Console product link** | Account operator: inspect Admin → Product links → Search Console links and the correct Casa stream. GSC Wizard connectivity does not prove the native link exists. |
| O08 | **Public requests verified; GA4 receipt blocked** | Fresh 16 October test: exactly one request for each B booking, B Airbnb review, B Booking review, B enquiry, map and email. All collection requests intercepted/aborted; account receipt remains unverified. GSC Wizard now returns payment_required. No duplicate listener/tag added. See ANALYTICS_FOLLOWUP_2026-10-16.md and qa/live-events-2026-10-16.json. |
| O09 | **Open: retention/filter/funnel verification** | Claude reports 14-month retention, owner-traffic exclusion and a funnel; older owner screenshot shows Internal Traffic Active / Developer Traffic Testing. Inspect current settings and funnel definition when signed-in access exists. Do not treat test traffic as reservations or actual revenue. |
| O10 | **Core question resolved; optional winter detail** | Owner confirmed host/property management clears parking snow, not guests. Publish this fact. Only vehicle-moving instructions or winter restrictions remain unconfirmed; do not invent them. |
| O11 | **Resolved: no cot / high chair** | Owner confirmed neither A nor B provides a cot or high chair on 14 October. Added to four-language practical information and FAQ. |
| O12 | **Resolved: seasoning policy** | Owner confirmed oil, salt and pepper are usually removed between stays for hygiene. Ask guests to bring needed seasonings; preserve “usually” rather than claiming absolute absence. |
| O13 | **Resolved: no advertised prices** | Owner explicitly requested removing price-per-night mentions and directing enquiries to Airbnb or the guest email. Do not reopen a from-price decision or publish inferred rates. |
| O14 | **Live email links and request generation verified** | Owner-approved admin@kagami-planning.com remains on the live site. 16 October test generated one contact_click with contact_method=email; GA4 receipt and actual delivered enquiries remain separate. |
| O15 | **Resolved: profile phone stays empty** | Owner explicitly selected no public phone. No phone number is published. Account UI not changed here. |
| O16 | **Owner input resolved / settings review remains** | Owner reports no current Google Ads and no plans to run them. Do not add advertising tags or launch ads. Review the actual consent warning/settings separately; no broad compliance conclusion follows solely from the absence of ads. |
| O17 | **Verified current ratings/quotes; individual record fields partial** | 16 October primary rendered pages: Airbnb A 4.87/30, B 4.95/22; Booking A 9.0/24, B 9.7/26. All 19 retained quotes corroborated after whitespace normalization; wording and material qualifications restored, excerpts labelled. Individual Booking dates/permanent review links remain unprovided and are not fabricated. See REVIEWS_AUDIT_2026-10-16.md. |
| O18 | **Verified live: multilingual editorial pass** | Japanese nearby/day-trip text and Chinese/Korean destination/Teine prose polished on 16 October. Korean venue/admission mistranslations and Japanese place-name spelling corrected. All 52 live rendered page bodies now match the tested local build. Existing dated travel facts retained, not represented as newly verified. |
| O19 | **Closed: 16 October publication verified** | Owner reports commit/deployment. Fresh public HTTP checks confirm all 52 routes return 200 and their normalized server-rendered bodies match the tested local build, including review scores, quote/excerpt changes and multilingual editorial copy. Evidence: qa/production-parity-2026-10-16.json. This is page-body parity, not a fresh signed-in account or interactive browser audit. |
| O20 | **Open: original T1/T4 definitions** | The supplied handover lists do not define these IDs. Do not claim they are verified or invent scope. The original task definitions would resolve the labels if available; this does not block the current audit. |

## Handover items checked and closed / deferred

| Original item | Reconciled status / evidence |
| --- | --- |
| A beds: site says one bedroom / three beds | **Verified stale:** current property facts, generated schema and live homepage show two bedrooms and three singles plus one double. |
| Free or paid parking / spaces | **Verified:** one free car space per apartment, owner-confirmed; paid Airbnb title is external O01. Winter procedure remains O10. |
| B needs 10–12 interior / placeholder photos | **Verified stale:** 50 B gallery entries and no missing 800px variants. Living-room, bedroom and kitchen samples visually inspected as real property photos. This is not a claim that every hidden gallery angle was re-inspected today. |
| Reviews are placeholders | **Partly resolved:** real A/B rating blocks and source-dated excerpts exist; B public rating 4.95 / 21 reviews. Individual excerpt verification remains O17. |
| Sitemap and combo page | **Verified:** 13 pages × four languages = 52 URLs, including four combo pages. Live `/combo/` returns 200. Keep it; separate reservations remain explicit. Attribution to a particular earlier author is not needed for acceptance. |
| Copy three old fixed files / combo build / Airbnb click fix | **Superseded:** use current repository, not an unidentified older three-file patch. The current build and click contracts pass. New local edits are tracked under O19. |
| Type errors in home-page / copy-check / load-pack | **Verified stale:** npm run check passes TypeScript, build and all 14 tests. Type errors are not ignored by the check workflow. |
| GTM inquiry/map/review tags | **Verified:** published GTM attempted the correctly classified requests once, including Provider. Receipt is separate under O08. |
| inquiry_click key event | **Verified:** GA4 API confirms it is marked; older ordinary clicks are not retroactively converted. |
| Old GTM workspace #5 | **Reported resolved:** Claude's latest handover says deleted with nothing remaining. No deletion attempted; older calendar item is stale. |
| Google tag published / stay-filter removed | **Partly verified:** public container and measurement ID work in controlled runtime tests. Private workspace history/filter UI not independently inspected. |
| GA4 custom dimensions | **Verified:** seven exact definitions returned by GA4 Admin API. |
| HTTP → HTTPS | **Verified behavior:** HTTP homepage returns 301 to HTTPS. The exact dashboard Always Use HTTPS toggle was not inspected; do not claim it was toggled. |
| `/415n/` and slashless A | **Verified expected:** unknown URL returns 404; slashless A returns 307 to canonical trailing-slash A. Do not invent redirect targets or remove valid canonical redirects to clear a report. Validation UI remains a 23 October follow-up. |
| Home/A/B indexing request today | **Verified outcome:** all 12 EN/JA/ZH/KO URLs PASS, indexed and canonical-match in fresh URL Inspection. No repeat indexing requests needed. Inspection is not itself a request to index. |
| Google sitemap success / 56 indexed pages | **Partly verified:** main sitemap has 52 submitted URLs, no errors/warnings, not pending. The sitemap API's indexed=0 field is not treated as a total index count; individual inspections confirm indexing. The reported 56 total is not independently confirmed. |
| Bing sitemap | **Verified:** one sitemap.xml feed, Success, 52 URLs. No repeat submission needed. |
| RUM off / Crawler Hints on / tag gateway off | **Reported resolved:** supplied handover only. Dashboard state not independently inspected; no speculative configuration changes. |
| PageSpeed 88 / stop performance work | **Historical lab sample:** recent Codex live run was 91 / LCP 3.22 s. Different runs vary; no ranking/field guarantee. Further refactoring is deferred unless a new measured regression warrants it. |
| Google profile creation / separate B profile | **Deferred/not requested:** existing A profile confirmed; do not recreate it or create B by assumption. |
| Social URLs / sameAs / posts / 64 campaign links | **Deferred by owner:** links are prepared for future use, not a publishing backlog. Metricool website analytics is independent of social accounts. |
| Claude GitHub App installation | **Not needed:** owner chooses Codex; do not install a Claude app as a handover prerequisite. Owner retains the GitHub commit workflow. |
| Search Console admin@ account choice | **Open only if access changes:** quoted browser sign-in is a Claude report, not current Codex browser state. Existing connector can read Casa data. Owner can decide account/permission housekeeping without disrupting working authorized access. |

## T1–T15 source acceptance review

The original exact acceptance document was not supplied. These rows assess the meanings in the handover rather than inventing new task definitions.

| Task | Current result |
| --- | --- |
| T1 | Definition unavailable: O20. |
| T2 owner voice | Plain, property-specific narrative is present. No generic invented luxury claims; editorial refinement remains O18. Exact original owner-voice acceptance is unavailable. |
| T3 selling-point chips | Present on homepage: station access, free parking, kitchen and size. |
| T4 | Definition unavailable: O20. |
| T5 hero crop | Responsive image and explicit object-position present; prior mobile/desktop visuals passed. No fresh crop defect demonstrated. |
| T6 width/height | All images in all 52 generated pages have dimensions in the current build. |
| T7 Article schema | Present in 28 localized guide-page outputs; core property/home schema remains appropriate to their page types. |
| T8 CJK meta descriptions | Page-specific Japanese/Chinese/Korean metadata present; no generic same-description blocker found. |
| T9 images on guide/text pages | Guide/page images present; privacy/legal content does not need an unrelated decorative hero simply to satisfy this label. |
| T10 combo | Source and live page present, four languages. |
| T11 copy split | Dynamic current-language pack imports present; only the requested page is loaded at startup. |
| T12 cleanup | Old router/routes and identified leftovers removed; copy-check retained for compile-time shape validation. Chinese/Korean copy modules are imported and are not dead merely because they look like older files. |
| T13 originals deployment | `photos-src` retains 130 tracked originals but is not in dist. No deletion/move from Git needed to stop deployment. |
| T14 mobile header | Native details menu works without JS; startup regression checks passed 52 routes. |
| T15 route export warnings | No route-export/type error in the fresh build. An occasional Vite plugin timing notice is a separate build timing observation. |

## Calendar follow-ups already present

Read-only Calendar search verified four existing Casa entries. No duplicate automation/event was created or deleted.

- **12 October, 09:00 Japan:** indexing reminder — outcome now verified complete for all 12 URLs.
- **12 October, 09:30:** old GTM #5 reminder — reported resolved; do not delete anything again.
- **23 October, 09:00:** recheck Search Console validation/indexing, Bing and GA4 guest traffic. Carry this forward to Codex; existing event still says ask Claude.
- **26 October, 09:00:** consent-mode follow-up. Review actual settings and owner markets; do not accept the old ads-only dismissal as a complete assessment.

Owner-requested reminder added and read back: **13 October, 09:00–09:15 Japan**, “Casa Antonio: confirm amenities, winter parking and seasonings for Codex”, with a popup at the start. Cot/high chair, snow procedures and seasonings remain unpublished pending tomorrow's reply. Event ID: `gsgabj827i3av00bcn8gco0dps`.

Media clarification: the supplied Casa A/B folders contain 89 and 50 JPEGs respectively, with no videos or subfolders found. Social publishing stays deferred. The owner separately clarified IKEA purchases are for Kojohama cabins, so they must not be added to Casa amenities. Amazon item allocation is not confirmed. Purchase details are retained privately outside Git at `C:/dev/Accommodation_Media_and_Kitchen_Inventory_2026-10-12.md`, without copying raw emails, private delivery addresses or payment details into this repository.

## Evidence and next handover

**13 October redirect email resolved:** the supplied ZIP lists slashless A, B and arrival. Live checks show one 307 hop to each corresponding trailing-slash page; all three destinations return 200 and Google URL Inspection confirms PASS / Submitted and indexed with matching canonicals. The validation failure reflects intentional redirects that remain in place, not a broken destination. Do not restart that validation just to clear the category. See `SEARCH_REDIRECT_NOTICE_2026-10-13.md`. This finding does not resolve the separate 404 validation UI status.

`qa/search-handover-2026-10-12.json`: both sitemap APIs and 12 URL inspections. `qa/handover-audit-2026-10-12.json`: current page/image/schema audit and live redirects/Metricool presence. `qa/live-gtm-2026-10-12.json`: intercepted GA4 runtime requests. `qa/growth-review-2026-10-12.json`: search/analytics baseline. `CONTENT_PROVENANCE.md`: confirmed owner facts and historical photo/review provenance.

Calendar/account reports above do not prove inaccessible private UI settings. Metricool code is now visible in production, but dashboard receipt remains separate. No direct Google/OTA/social account edit or new reminder is claimed.

Final validation after the Japanese copy/B review updates: TypeScript, the 52-page build and all 14 automated tests passed; all 52 mobile/desktop startup checks, no-JavaScript menus, delayed clicks and failed-import fallback passed. Browser evidence: `qa/handover-startup-2026-10-12.json`. Changes are local for owner commit/deployment; no new code deployment was performed in this reconciliation.

Official consent reference: https://support.google.com/tagmanager/answer/10718549?hl=en

13 October continuation: live spot checks confirm the approved email links and Metricool code; price-per-night wording is absent. Four-language enquiry instructions, FAQ/schema and search descriptions have now been aligned with email plus Airbnb. Japanese work/long-stay text was polished; the wider day-trip editorial pass remains open. All 15 tests and 52-route startup checks passed. New evidence: `qa/contact-copy-startup-2026-10-13.json`; details: `CONTACT_COPY_2026-10-13.md`. Physical facts remain pending the owner's reminder response. GA4's returned 8–12 October report still has no contact/map receipt, so those checks remain open.

Email follow-up validation on 12 October: TypeScript, build and all 15 tests passed. All 52 mobile/desktop startup checks passed; evidence is `qa/email-startup-2026-10-12.json`. Email buttons open a localized draft addressed to the owner-approved guest email and are measured as contact_click. No email was sent during testing. No code deployment or Google profile account edit was performed.

14 October owner confirmations: no cot or high chair in either apartment; parking snow is cleared by host/property management, not guests; oil, salt and pepper are usually removed between stays for hygiene. Four-language A/B practical facts, arrival information and visible/schema FAQ updated locally. Owner commit/deployment remains required for these changes. Optional questions only: vehicle-moving instructions during snow clearing, Amazon purchase allocation/installation, and the guest-guide location for a Google review shortcut. IKEA remains allocated to Kojohama.

## 16 October parallel follow-up

- Language, review and external-listing investigations completed in parallel. See REVIEWS_AUDIT_2026-10-16.md, LISTING_ACTIONS_2026-10-16.md and ANALYTICS_FOLLOWUP_2026-10-16.md.
- GSC Wizard trial/subscription now prevents fresh GA4/GSC/Bing reads. No subscription was changed; earlier successful account snapshots remain historical. Native Google/Bing interfaces are an alternative to restoring this connector. No signed-in browser-control runtime is callable in this session.
- Existing A-only Google profile description/photo brief and honest-review request draft updated. They are prepared text, not published account changes. Review shortcut still needs the actual Casa guest-guide location and verified review-request URL.
- Airbnb A parking/body labels still need account edits; structured bed panel is already correct and should retain room/photo associations. Booking size/bed and damage-policy contradictions require reconciliation. No external listing, rate, cancellation term, social profile or Google profile was edited.

16 October integrated validation: TypeScript, production build and all 15 tests passed. Browser checks passed for all 52 routes at mobile/desktop widths, all four no-JavaScript fallback pages, delayed first click and failed-import fallback. Saved evidence: qa/parallel-improvements-startup-2026-10-16.json. No commit, push, deployment or signed-in account edit was performed.

16 October post-deployment continuation: all 52 production routes return HTTP 200 and match the tested local rendered content. Publication O19 and editorial deployment O18 closed. Computer-use skill rechecked after its package update; the required node_repl runtime is still not available among callable tools. Signed-in Airbnb/Google edits therefore remain inaccessible, despite the owner's open tab. The same-day GSC Wizard payment_required results remain the account-reporting blocker; no subscription action taken. Only this tracker and the production evidence changed in this continuation; no further website deployment is needed for these documentation files.


## Signed-in account review and access date — 16 October

See ACCOUNT_REVIEW_2026-10-16.md for current evidence superseding earlier access-blocked notes. O01 and OTA corrections are deferred until owner-confirmed access from 1 November for Airbnb, Booking.com and Trip.com; one-time chat reminder created for 09:00 Japan. O04: A-specific website URL is approved in the editor, public link propagation still open. O05: existing photos inspected; bathroom uploaded and pending; description field unavailable. O06: direct review URL obtained, guest guide still unidentified. O07: native Search Console link verified. O09: 14-month retention, filter states and funnel rules verified. O08: booking/enquiry/review receipts confirmed at event-type level; email/map and B-specific provider breakdown remain open. No GA4 settings or OTA facts changed.

## Mobile layout follow-up — 17 October

Owner iPhone screenshot revealed uneven header controls and clipped hero content that earlier overflow/menu checks missed. Local CSS now uses a brand/Menu row and full-width language row, content-sized mobile heroes, and review cards that fit narrow enlarged-text layouts. Browser coverage expanded to four languages, 320/393/430/844px widths, short portrait/landscape viewports and 100%/125% text. See MOBILE_HEADER_2026-10-17.md and qa/mobile-header-2026-10-17.json for completed evidence. Commit/deployment remains the owner step; earlier account-review files were preserved.
