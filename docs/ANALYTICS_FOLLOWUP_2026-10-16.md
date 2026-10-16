# Analytics and search follow-up — 16 October 2026

## Fresh account-access result

Four independent GSC Wizard calls were attempted: registered GA4 dimensions, GA4 event/date reporting for 8–13 October, Google sitemap status and Bing sitemap status. All returned `payment_required`: the trial has ended or there is no active subscription. No account data was returned, no subscription was changed and no configuration was modified.

Earlier successful checks remain dated historical evidence. They must not be described as fresh verification on 16 October. Re-submitting a successful sitemap or adding another click listener will not solve this access restriction.

## Work that still requires account access

1. GA4 → Admin → Product links → Search Console links: confirm the Casa domain property is linked to the correct Casa web stream. A GSC Wizard connection alone does not prove this native product link.
2. GA4 reporting: verify `contact_click` with `contact_method=email`, `map_click`, and B-specific `review_click` receipts. Confirm apartment/provider where those parameters apply. An intercepted request is not a GA4 reporting receipt, a mailto click is not a delivered enquiry, and a booking-link click is not a booking.
3. Confirm current retention, internal/developer filter states and the reported funnel in GA4 Admin/Explore. Do not activate untested exclusion filters merely to clear a checklist; excluded data is not recoverable.
4. Check Google/Bing sitemap status and the previously reported indexing exclusions through their native consoles or restored connected access. Keep intentional canonical redirects and legitimate unknown-page 404s.

These checks can be completed in the native Google/Bing interfaces without buying a GSC Wizard subscription. This session has no callable signed-in browser-control runtime, so an open Chrome tab does not provide account access here.

## Public runtime verification

See `qa/live-events-2026-10-16.json` for a fresh public-container test. All GA4 collection requests are intercepted and aborted to avoid deliberately adding test conversions. All six controlled actions produced exactly one GA4 collection request: B booking, B Airbnb review, B Booking.com review, B long-stay enquiry, Google map and email contact. The review/map requests required a longer observation window; a short initial window missed them. This confirms public request generation, not account receipt.

## Scope kept unchanged

No Google Ads are running or planned. No advertising tags, social accounts or social posts were added. Metricool website tracking remains separate from the owner's deferred social accounts. Consent settings are not declared correct merely because advertising is absent.
