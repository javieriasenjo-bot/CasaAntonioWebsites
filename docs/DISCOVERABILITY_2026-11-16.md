# Casa Antonio: discoverability implementation and remaining account work

Prepared 16 November 2026. Source changes are local and uncommitted; no deployment, account changes, subscription purchases, directory submissions or outreach were performed. The owner confirmed enquiry-only long stays, with dates and terms individually confirmed.

## What changed

- Retained /access/ and its official transport information. Added a compact lodging block after the transport facts: five-minute walk from Asabu, canonical A/B apartment links and the existing AirHost availability link. Transport details remain easy to reach; fuller photo comparisons are on the stay and seasonal pages.
- Added /monthly-stay/, /ja/monthly-stay/, /zh-cn/monthly-stay/ and /ko/monthly-stay/. Japanese copy addresses 札幌 マンスリーマンション / 麻生 マンスリー as an accommodation comparison, without claiming a fixed monthly tariff or rental contract. Korean targets 삿포로 한 달 살기 / 아사부 장기 숙소. The separate /long-stay/ pages address general long-stay enquiries. Avoid three near-duplicate keyword pages.
- Added apartment comparisons to the two winter guides and long-stay pages. Winter guide titles now identify 2026–27 / Snow Festival 2027. Existing detailed travel claims retain their earlier verification dates; this pass rechecked opening plans and festival dates only.
- Updated route loading, metadata, breadcrumb labels, canonical/hreflang, footer navigation, sitemap and monthly campaign-link support. There are now 14 routes × 4 locales = 56 pages. Lastmod changed on all pages because footer navigation and image-preview metadata changed everywhere.
- Added max-image-preview:large. This permits larger previews; it does not guarantee Google will display them.
- Added apartment_click to the existing sole click producer. No extra analytics loader or duplicate GA4 tag.

Current source property facts are 67 m² each; A: 2 bedrooms, 3 singles + 1 double, up to 5; B: 1 bedroom, 3 singles, up to 3, second floor with stairs. Some October documents still say 65 m² / four guests. Do not reuse those stale listing drafts without reconciliation.

## Measurement: installed versus verified

The live public GTM script was fetched on 16 November and contains G-3V83R0Z48F, plus airbnb_click, inquiry_click, contact_click, review_click and map_click. Metricool is also in the source. The audit claim of no GA4 is stale. Fetching a public container does not prove report receipt.

GSC Wizard returned payment_required. Do not assume zero traffic, buy a subscription, or create another GA4 property. Native GA4 and Search Console can complete the checks below without that connector.

The new apartment_click event is **dataLayer-only until configured in the existing GTM container**. The public container does not yet contain this event. In GTM-T8TLRH4L:

1. Reuse the existing Google tag / measurement ID G-3V83R0Z48F.
2. Create a Custom Event trigger whose event name equals apartment_click.
3. Add one GA4 Event tag, event name apartment_click, using that trigger.
4. Use version-2 data-layer variables for property, page_language, link_location, source_url and destination_url. Reuse existing variables where present.
5. Register property and link_location as event-scoped custom dimensions only if not already present; check existing names first.
6. Preview a guide link to A and B, confirm one apartment_click and no airbnb_click, then publish the reviewed workspace. Verify receipt in GA4 DebugView. It is a navigation event, not a key event or reservation.

Existing availability links retain the legacy event name airbnb_click with provider=airhost. Do not rename it without migrating the GTM tags and reports. inquiry_click means an enquiry/availability action and contact_click means opening an email app, not delivery or a completed booking.

Use GA4 Traffic acquisition with Session source / medium and campaign; use Landing page with session source/medium for /access/, /monthly-stay/, /long-stay/, /teine-ski/ and /snow-festival/ in every locale. Build an exploration: guide landing → A/B page view → airbnb_click with provider=airhost, plus enquiry/email actions. Page-view steps already work without the new custom tag. Report visits and booking intent separately from paid reservations. To measure completed bookings, verify AirHost's supported GA4 integration, same stream/cross-domain setup and confirmation event; do not infer bookings from outbound clicks.

External campaign links only (never put UTMs on internal navigation):

| Placement | Suggested destination |
| --- | --- |
| Existing A Google profile | https://casaantonio.jp/casa-antonio-a/?utm_source=google&utm_medium=organic&utm_campaign=gbp |
| Instagram Japanese bio | https://casaantonio.jp/ja/?utm_source=instagram&utm_medium=social&utm_campaign=bio |
| TikTok Korean winter post | https://casaantonio.jp/ko/teine-ski/?utm_source=tiktok&utm_medium=social&utm_campaign=winter_2026_27&utm_content=teine_01 |
| RedNote winter profile | https://casaantonio.jp/zh-cn/snow-festival/?utm_source=rednote&utm_medium=social&utm_campaign=winter_2026_27&utm_content=profile |
| Prospective local tourism referral | https://casaantonio.jp/ja/monthly-stay/?utm_source=sapporo_tourism&utm_medium=referral&utm_campaign=local_partners |

These are prepared destinations, not published social accounts. Existing owner preference deferred social publishing. Direct traffic includes visits with missing referrer/campaign information; UTMs help but do not recover all attribution or identify individual unlinked video views.

## Off-site actions: concrete next steps

| Priority / destination | Action and destination to supply | Current status |
| --- | --- | --- |
| Existing Google profile A | Inspect current category, address, photo approval and A website destination above. Reconcile facts with the current source. | Historical public website approval exists; fresh signed-in profile review remains. Do not create another profile automatically. |
| [Sapporo Tourism Association](https://association.sapporo.travel/joining/) | Ask whether this registered accommodation/operator qualifies for membership and an accommodation/member listing; ask about costs and editorial link rules. Supply /ja/ plus the correct A/B pages. | Membership route and member directory exist; acceptance and backlink are unconfirmed. |
| [Asabu shopping district](https://www.asabu.or.jp/) | Ask about geographic eligibility and member-directory inclusion for the Kita 38-jo property. Supply /ja/ and the neighbourhood guide as a useful visitor resource. | Real local member directory; no confirmed eligibility or submission. |
| [Sapporo Chamber](https://www.sapporo-cci.or.jp/web/webentry/) | Check business membership and whether a public operator listing is included. | Application route exists; no purchase/submission. |
| [Sapporo Teine](https://sapporo-teine.com/snow/lang/en/access/) | Propose a factual accommodation referral only after discussing a real guest service or partnership. Link to /teine-ski/. Confirm pickup points; do not imply a direct Asabu shuttle or an existing partnership. | Prospect, not a promised directory or acquired backlink. |

Google's [eligibility rules](https://support.google.com/business/answer/13763036?hl=en) exclude rental properties such as vacation homes. An existing listing alone does not establish eligibility. Confirm the actual lodging business classification before adding profiles or changing categories; do not delete the current profile on the basis of this research. Google Vacation Rentals through the booking provider is a separate channel.

## Astra's additional priorities beyond the original five

1. **Audit AirHost Google Travel distribution now.** [AirHost's official notice](https://support.airhost.co/en/articles/8659998-booking-engine-how-to-list-your-property-on-google-hotels-vacation-rentals) says the trial ended October 2026 and the paid add-on began 2 November. Check A/B publication, subscription/license count, activation and listing status; test real date searches. The account's current status is unknown. Do not purchase merely for a backlink or assume Maps hotel buttons apply to vacation rentals.
2. **Align platform identities and property facts.** Search snapshots still show A at four guests and older 65 m² pages; live A is 67 m² / five guests. Verify current Airbnb, Booking.com and AirHost extranet facts and exact A/B listing URLs before changing descriptions or schema identity links. Search snapshots alone are not current account evidence.
3. **Check fresh Google crawling.** In native Search Console inspect A, arrival, FAQ and the new monthly pages after deployment. Compare selected canonical and crawl date, request recrawl of meaningful changes, then monitor impressions. Existing IndexNow script supports Bing submissions after publication. [Google guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
4. **Use the actual rooms for visual discovery.** Larger previews are implemented. Next obtain verified floor plans and add useful room captions. Do not invent room dimensions or create misleading property images. [Google image guidance](https://developers.google.com/search/docs/appearance/google-images).
5. **Verify Naver distribution for Korean guests.** Check whether Search Advisor is already verified through another method; submit sitemap and inspect Korean URL collection and Yeti access. No verification markup in code is not proof of an unverified account. [Naver verification](https://searchadvisor.naver.com/guide/faq-start-register), [sitemaps](https://searchadvisor.naver.com/guide/request-feed).
6. **Record A/B walkthrough videos if publishing becomes a priority.** Show actual beds, entrance, kitchen, bathroom and B stairs; subtitle and link each unit. For video search, useful dedicated watch pages need the video as the main content. [Google video guidance](https://developers.google.com/search/docs/appearance/video).
7. **Consider Traditional Chinese only if guest demand supports it.** Current Chinese is Simplified (zh-Hans). A maintained zh-Hant edition could serve Taiwan/Hong Kong, but no demand evidence is available from the blocked connector. [Language annotations](https://developers.google.com/search/docs/specialty/international/localized-versions).

No new generic schema or llms.txt project is needed: prerendering, language annotations, structured data, photo optimization and llms.txt already exist. Google vacation-rental rich results require eligible integration; markup alone is not a substitute for the provider feed.

## Release and follow-up

Run npm run check and npm run check:browser. Inspect the changed pages on mobile/desktop. Commit/release using the owner's existing workflow; after release confirm all four monthly routes return 200 with their self-canonical, reciprocal hreflang and new sitemap entry. Check the bus content and direct apartment links. Publish/verify the GTM event separately. No indexing request has been submitted for unpublished routes.

For the next 28 settled days compare each guide's organic landings, onward A/B visits and booking/enquiry clicks against the previous 28 days. Separate language and traffic source; annotate release date. Seasonal demand can change independently of the code, so a before/after increase alone does not establish causation.

Official season checks: [Snow Festival 4–11 February 2027](https://www.snowfes.com/news/948.html); [Teine planned opening 21 November 2026](https://sapporo-teine.com/snow/lang/en/trailstatus/). Opening remains weather-dependent. Recheck winter schedules when they change and refresh 2027 titles after the season.

Validation: TypeScript, all 56 prerendered routes, 24 automated tests and the browser suite passed. Browser evidence is in docs/qa/discovery-browser-2026-11-16.json; external analytics were blocked during browser tests. Checks cover mobile/desktop overflow, no-JavaScript navigation, preserved hydration, apartment clicks and existing booking/email controls.

## Smartphone verification — 16 November 2026

The focused mobile suite passed 480 layout scenarios: five updated route types in four languages, widths 320/375/390/412/430 and landscape 844×390, at 100%, 125%, 150% and 200% root text size. Touch tests passed for menus, apartment navigation, inline and fixed booking links, and monthly email enquiries. Third-party requests were blocked. Evidence: docs/qa/smartphones-2026-11-16.json. Repeat with npm run build followed by npm run check:phones.

This pass fixed large-text overflow by allowing the phone header to wrap, making fact grids adapt to available width, and wrapping long URLs and the Japanese address on the Korean airport page. The existing 56-route browser suite passed after the header/grid fixes; the final address-wrapping addition passed the complete 480-scenario phone suite. Testing used Chromium mobile/touch emulation, not a physical phone or Safari/WebKit (not installed here).
