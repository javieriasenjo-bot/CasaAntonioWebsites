# Casa Antonio GTM changes — 6 October 2026

## Status

The source integration is implemented and tested against the current public container. Authenticated account edits and publication have **not** been performed: this session has no browser-control runtime or GTM connector. Owner authorization to update GTM was received. This file is the exact remaining configuration handoff.

Container: `GTM-T8TLRH4L`. Existing GA4 destination: `G-3V83R0Z48F`, verified from the public container on 6 October. Public booking tag ID 14 consumes `airbnb_click`, with apartment_name, destination_url, page_language and link_location. The current container also handles contact_click and language_change. It has no review_click, inquiry_click or map_click tag.

## Source contract

`scripts/analytics-bootstrap.js` runs before the app, queues the GTM startup event first and captures each click once. It sets `window.__caClickListener`, the same guard used by the legacy Custom HTML listener. On updated pages the legacy listener therefore exits without registering a duplicate producer. On older deployed pages the legacy listener remains the fallback.

Do not add click triggers based on link URLs, a second Custom HTML listener, or React dataLayer pushes. Use Custom Event triggers on the existing dataLayer events. Keep all GA4 event tags firing once per event. Do not classify review links as booking intent or mark clicks as completed bookings.

## Exact changes

1. Reuse existing Data Layer Variables, version 2: apartment_name, destination_url, page_language, link_location, selected_language, source_url and contact_method.
2. Add version-2 Data Layer Variables named `DLV - provider`, `DLV - intent`, `DLV - property`, `DLV - map_provider` and `DLV - page_path`, with data-layer names provider, intent, property, map_provider and page_path respectively. No default values.
3. Add Custom Event triggers, each with an exact event name, firing on all matching custom events: `CE - review_click`, `CE - inquiry_click`, `CE - map_click`.
4. Add three GA4 Event tags using the existing Google tag/destination `G-3V83R0Z48F`:

| Tag | Event name | Trigger | Event parameters (name maps to matching DLV) |
| --- | --- | --- | --- |
| GA4 - review_click | review_click | CE - review_click | apartment_name, destination_url, page_language, link_location, source_url, provider, intent, property |
| GA4 - inquiry_click | inquiry_click | CE - inquiry_click | apartment_name, destination_url, page_language, link_location, source_url, provider, intent, property |
| GA4 - map_click | map_click | CE - map_click | map_provider, page_path, page_language, source_url, destination_url |

5. Extend the existing GA4 airbnb_click tag with source_url, provider, intent and property. Retain its original four parameters and exact trigger. Keep the established event name for historical continuity.
6. Ensure the existing language_change tag also passes page_language in addition to selected_language, source_url and destination_url. Keep contact_click and the Google tag.
7. Retain the guarded legacy Custom HTML listener while the old site remains deployed. New pages suppress it themselves. Remove that fallback only after the updated source is live and old pages no longer depend on it; its removal is optional. Disabling it before deployment would remove tracking from the old site.
8. Preview first, then publish the additive container configuration when the test below passes. Suggested version name: `Casa Antonio - separate review enquiry map intent`.

## Verification before and after release

Use GTM Preview and GA4 DebugView against the updated deployment. Test A and B booking buttons; Airbnb and Booking.com review links; long-stay enquiry buttons; map links; and a switch to another language. Each user action must produce one appropriate custom event and one matching GA4 event-tag firing. A review action must not fire airbnb_click. Same-language selections must not produce language_change.

Test a booking click with GTM delayed and before hydration. In the local controlled test the early click queued once, then the real current container attempted one GA4 airbnb_click request after loading. A second click attempted one additional request. Requests were intercepted to avoid writing test visits into production analytics. This proves the current source/container integration and attempted delivery, **not** receipt in the signed-in GA4 account.

Register event-scoped GA4 custom dimensions if reporting needs them: apartment_name, provider, intent, link_location, page_language, selected_language and map_provider. Reuse existing definitions. Avoid adding URL dimensions with high cardinality. Existing generic GA4 enhanced-measurement click events can coexist; do not add those and airbnb_click together as if they were distinct bookings.

Queues do not guarantee delivery after a page is closed or a same-tab page departure before Google loads. The existing booking links open another tab and keep the originating page available. Account DebugView verification remains required.
