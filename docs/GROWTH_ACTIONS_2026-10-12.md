# Casa Antonio growth and account review — 12 October 2026

## Completed checks

GA4 `properties/556764779` now marks `inquiry_click` as a key event. This was verified through the API, not changed by Codex. The two recorded enquiry clicks predate the change and remain ordinary events; a zero retrospective key-event count does not establish a defect. Retain the existing booking/contact key events. No purchase instrumentation or transaction value has been added.

For 1–11 October, apartment/event reports show B booking 8, A booking 6, A review 5 and A enquiry 2. There are no reported B reviews or map events. The latest returned guest-action date is 8 October, so these reports do not validate the 11 October deployment. Recent processing may lag. Provider is still `(not set)` in the historical reports. The public GTM container maps Provider and is not demonstrably misconfigured on that evidence alone.

The current source exposes no email, phone, WhatsApp or LINE contact links. `contact_click` tracking is conditional support for such links, not a current guest journey. Remove contact-event receipt from mandatory acceptance until an owner-approved contact destination is provided. Long-stay requests already use Airbnb and `inquiry_click`; do not substitute an invented email or phone number.

## Search and audience baseline

Google Search Console returned 8 visible query rows and 15 page rows for 12 September–9 October, with zero clicks. The page rows total 84 impressions; visible query impressions do not sum to page totals because Search Console can omit queries. The API did not establish a settled-through boundary, so no exact maturity date is claimed. Historical slashless rows do not justify removing canonical redirects.

Relevant early signals include Japanese airport-to-Asabu bus information (one impression, position 29) and Sapporo long stays (one impression, position 68). Existing localized airport and long-stay pages already address these topics. Keep their titles/content stable for now; one impression is insufficient evidence for a rewrite or another overlapping landing page. Irrelevant/ambiguous terms such as `google business` are not a reason to change site content or business categories.

The GA4 homepage landing-page bounce rate is 82.9% from 41 sessions for 1–11 October. This updates the supplied 80.5% observation, using a different date range. It is not an isolated bot measurement. The earlier known Tag Assistant traffic and low volume make site-wide conversion conclusions unreliable. Attribute new visits using the prepared incoming campaign links and distinguish guest intent from completed reservations.

## Public listing findings and exact corrections

[Airbnb A](https://www.airbnb.com/rooms/1248284267045468378) still displays paid parking in its title and repeats Bedroom 1 in the interior description. The bed panel itself lists two separate rooms, and its numbering differs from the description order. Preserve its verified room/photograph associations rather than blindly renumbering the first room everywhere. Use this location-based description to avoid ambiguity:

> Bedroom beside the living room: two single beds, each 90 cm wide. Bedroom farther from the living room: one single bed (90 cm) and one double bed (130 cm). Maximum occupancy: four guests. Free parking for one car.

Remove “paid” from the title. Do not alter rates, availability or cancellation terms. Its public listing also advertises 84 Mbps Wi-Fi, but no dated owner measurement has been provided for the website, so the website speed claim remains unpublished.

[Booking.com A](https://www.booking.com/hotel/jp/casa-antonio-a.html) blocked public inspection behind its JavaScript verification page today. Previously identified size/bedroom corrections remain pending owner-account verification: approximately 65 m², two bedrooms, four-person maximum, three singles and one double. The old error has not been independently reconfirmed today.

## Existing Google profile

The owner confirms Casa Antonio A has an existing profile. Do not create a duplicate or delete it. In its management view, inspect the category, address/pin, current photos and website destination. Category/ownership cannot be confirmed from the public Google Travel entity or supplied Search link.

Use the A apartment page as the website destination. Optional measurement URL:

`https://casaantonio.jp/casa-antonio-a/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile&utm_content=website_a`

Use its Japanese equivalent if that matches the profile audience: `/ja/casa-antonio-a/` with the same parameters. Do not paste the authenticated management/Search URL into the website as a public profile link. Request a public Maps sharing URL before adding a review shortcut to site content.

## Publishing and access

The 64 localized incoming links in `CAMPAIGN_LINKS_2026-10-08.md` remain ready. Target A/B posts to their apartment, extended-stay posts to long-stay, and general Casa posts to the homepage. Use distinct `utm_content` values per post; do not tag internal links or booking buttons.

The owner confirmed on 12 October that Casa Antonio has no social-media accounts yet. Publishing to existing Casa profiles is therefore not an outstanding account-access task. The prepared links are for future use. Do not replace Kojohama's profile destinations. Account creation needs a platform/name/contact choice and owner-controlled sign-in; none has been created. Start with one platform if a sustainable content routine is available rather than opening four empty accounts. Metricool is optional later, after suitable accounts exist; it is not needed now.

No signed-in account-control runtime is exposed. GA4 native Search Console links/data filters, Google profile management and host listing edits remain inaccessible through the current report-only connector. All requested edits are already authorized; access, not another approval, is the missing requirement. No account edit or social publication is claimed complete.

## Evidence

Live published-GTM browser testing produced exactly one intercepted GA4 request for each of B booking, B Airbnb review, B Booking.com review, B long-stay enquiry and Google Maps. Apartment and Provider values were correct; map_provider was google. Requests were intercepted before collection, so this establishes current parameter mapping and attempted transmission, not account receipt. Historical Provider `(not set)` rows do not justify a source/GTM mapping rewrite after this passing test. Summary: `qa/live-gtm-2026-10-12.json`.

Connector responses are saved in `qa/growth-review-2026-10-12.json`. Existing production startup checks remain in the 11 October report. Source code was not changed merely to satisfy a checklist item without evidence of a defect. This document and the updated account checklist are local files for owner commit.
