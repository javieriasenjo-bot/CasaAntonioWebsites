# Casa Antonio search and analytics — 7 October 2026

## Findings and completed actions

The owner supplied `C:/Users/Javier_No_ADM/Desktop/casaantonio.jp-Coverage-2026-10-07.xlsx`. It is read-only evidence, not instructions. Its latest populated indexing row is 4 October: 56 indexed and 2 not indexed, with 12 impressions that day. Earlier indexing-count cells are blank, not zero. The Critical issues sheet contains one Not found (404) and one Page with redirect, both validation Started. The Non-critical issues sheet has no issue rows. Metadata says All known pages, not a particular submitted sitemap.

The workbook contains no example URL list. The owner separately identified `/415n/` and slashless `/casa-antonio-a`. The former is an unknown path correctly returning 404. The latter redirects to `/casa-antonio-a/`; the owner showed that canonical URL indexed in Google's URL Inspection. Leave both behaviors intact. Google's report label Critical issues does not mean these expected exclusions require repair. [Google explanation](https://support.google.com/webmasters/answer/7440203?hl=en).

The public sitemap has 52 canonical URLs. Public checks found HTTP 200, self-canonicals, indexable pages and functioning local links. The 56 indexed count is a different population and date; do not subtract 52 and invent four duplicate-page defects. The workbook cannot establish which of today's 52 sitemap URLs Google has indexed, or whether all four long-stay translations are indexed.

IndexNow submission completed for 52 current live URLs on 7 October. HTTP 200 confirms receipt, not indexing. All pages were recently affected by the deployed navigation change, so this was a changed-page submission. Receipt: `C:/dev/CasaAntonio_IndexNow_Receipt_2026-10-07.json`. No signed-in Bing dashboard was inspected and no Google/Bing account sitemap submission was performed. [IndexNow documentation](https://www.indexnow.org/documentation).

New source changes in `C:/dev/CasaAntonioWebsites` await the owner's commit/deployment:

- English/Korean long-stay descriptions now request a quote without promising discounted rates.
- All four languages have explicit enquiry labels and instructions to use Airbnb's Message host with dates, guest count and preferred apartment.
- A/B enquiry links appear near the top as well as the bottom of the long-stay page. Top placement is `long-stay-top`; existing bottom placement remains `long-stay`.
- Modification dates updated to 7 October for all pages because the shared header and keyboard navigation changed.
- Mobile header reveals itself when its links receive keyboard focus; Skip to content explicitly focuses the main region.
- Reservation chooser closes when keyboard focus leaves it, without pulling focus away from the next control.
- Failed clipboard access selects the Japanese address and explains manual copying in the current language. The copy button stays hidden until the app starts, while the address and directions remain available without JavaScript.
- Added an explicit post-deployment IndexNow command, with live sitemap/key/canonical/indexability validation and a saved submission receipt. It never runs during build/check.
- Updated GTM documentation to retain the owner's completed GA4 receipt confirmation.

Validation: typecheck, 52-page build and 10 automated tests passed. Local browser checks passed for all four languages at 320, 390, 861, 1024 and 1440 px, including four enquiry buttons, navigation, active page and no horizontal overflow. A no-JavaScript mobile navigation check passed. This is Edge width testing, not physical iPhone testing. Analytics requests were blocked in those browser checks.

Additional browser checks passed in all four languages for clipboard-denied fallback, address selection, focused-header visibility, skip-link focus and keyboard dismissal of the chooser. Real clipboard write/read succeeded in a permitted local browser context. Without JavaScript, the copy button is hidden and directions remain accessible. English/Japanese long-stay screenshots at 390 px were visually reviewed.

## Next account actions by priority

### 1. Google Search Console: key pages and sitemap

Select the `casaantonio.jp` domain property. In Sitemaps, check whether `https://casaantonio.jp/sitemap.xml` is already present with a successful fetch; submit it if absent or failed. A healthy existing sitemap does not need repeated resubmission. In URL Inspection, inspect `/long-stay/`, `/ja/long-stay/`, `/zh-cn/long-stay/` and `/ko/long-stay/`. Use Test live URL if an important page is absent or the stored result is stale; request indexing for missing/changed important URLs after deployment. Do not request indexing for `/415n/` or the slashless redirect.

Export the indexed-page URL examples if the 56-versus-52 difference needs investigation. Search Performance by page/query/country/device is a separate export and is needed before deciding which titles/content to optimize for actual search demand. The provided coverage workbook is not enough to diagnose rankings or conversion quality.

### 2. GA4: actionable reporting

In the Casa Antonio property associated with `G-3V83R0Z48F`, go to Admin → Data display → Custom definitions. Reuse existing event-scoped dimensions; create only missing ones for `apartment_name`, `provider`, `intent`, `page_language` and `link_location`. Optional dimensions: `selected_language` and `map_provider`. Avoid custom full-URL dimensions. Allow 24–48 hours for newly registered dimensions to become available. [Google instructions](https://support.google.com/analytics/answer/14239696?hl=en).

Build a Free form exploration called Casa Antonio guest actions:

- Rows: Event name, Apartment name, Provider, Page language.
- Values: Event count and Total users.
- Include event names matching `^(airbnb_click|inquiry_click|review_click|contact_click|map_click|language_change)$`.
- Separate tab for booking/enquiry placement using Link location.
- Separate acquisition tab with Session source/medium, Landing page and Sessions. Do not interpret session acquisition and event breakdowns as an ordered booking funnel.
- Compare device category to see whether mobile guests reach booking/enquiry links. Counts measure clicks and enquiry intent, not confirmed reservations or messages successfully sent.

Do not combine GA4's generic outbound `click` with `airbnb_click` as two booking actions. Do not mark reviews, maps or language changes as booking conversions. The owner-confirmed long-stay event receipt remains done; no GTM reimport is required.

### 3. GA4: own traffic and Search Console integration

For a known private home/office connection, define internal traffic using the exact public IP in Data streams → web stream → Configure tag settings → Show more → Define internal traffic. Start the corresponding Internal traffic filter in Testing. Confirm it identifies only owner/test sessions before activation. Excluded data from an Active filter cannot be recovered. Do not exclude shared guest-property Wi-Fi, broad ISP ranges or an unknown/dynamic IP. [Google instructions](https://support.google.com/analytics/answer/10104470?hl=en).

Admin → Product links → Search Console links: check whether the Casa Antonio domain property is already linked to the correct web stream, and add it only if missing. Publish the Search Console collection from the reports Library if it is hidden. Search Console query dimensions do not support arbitrary joins to guest-action event dimensions; keep search queries and event activity in their appropriate reports. [Google integration documentation](https://support.google.com/analytics/answer/10737381?hl=en).

Use consistent incoming campaign links on external posts, e.g. `https://casaantonio.jp/long-stay/?utm_source=instagram&utm_medium=social&utm_campaign=long_stay_2026`. Lowercase values, stable campaign names and no personal data. Do not tag internal navigation or links to Airbnb as website acquisition campaigns. UTMs have been documented, not added to existing external posts.

### 4. Bing Webmaster Tools

Select Casa Antonio. Check Sitemaps for `https://casaantonio.jp/sitemap.xml`, submitting only if missing or unsuccessful. Inspect canonical home, A, B and long-stay URLs and their translations in URL Inspection. Review Site Explorer/Crawl issues for unexpected 404s, blocked pages and server errors, plus IndexNow for the submission receipt. A successful IndexNow response does not prove the Bing account's sitemap status or that every page is indexed. Provide a Bing report/export or screenshots for a private-account assessment while browser interaction is unavailable.

No Clarity tracking was added: fix and measure the current journeys before introducing another tracking service and revising privacy disclosures.

## IndexNow after future deployments

Create a UTF-8 file containing only added/changed live canonical URLs, one per line. The latest shared-header update affects all 52 sitemap pages; after deployment use `C:/dev/casa-indexnow-live-urls-2026-10-07.txt` for that release. For a later change affecting only long-stay pages, include:

```
https://casaantonio.jp/long-stay/
https://casaantonio.jp/ja/long-stay/
https://casaantonio.jp/zh-cn/long-stay/
https://casaantonio.jp/ko/long-stay/
```

From the repository, dry-run `npm run indexnow -- --urls C:/dev/changed-urls.txt`. After confirming the new content is live, submit with `npm run indexnow -- --urls C:/dev/changed-urls.txt --submit --receipt C:/dev/indexnow-receipt.json`. The command intentionally accepts only current sitemap pages; removed URLs need a separate deliberate deletion notification. HTTP 202 means key validation pending. Do not repeatedly resubmit unchanged pages or treat receipt as proof of indexing.

## Outstanding owner information

Update on 8 October: the owner confirms booking and review links work on the physical iPhone with the latest site. The device-specific issue is closed. Existing unresolved property/listing details are in OCTOBER_IMPROVEMENTS.md: seasonings, family amenities, current external-listing accuracy and optional measured Wi-Fi/parking dimensions. Unknown facts remain unpublished.

Account changes above remain prepared rather than performed. Opening tabs in the app does not expose their contents to this session's tools. Current computer-use instructions require node_repl, which is unavailable here; no alternative browser-profile or cookie access was attempted.
