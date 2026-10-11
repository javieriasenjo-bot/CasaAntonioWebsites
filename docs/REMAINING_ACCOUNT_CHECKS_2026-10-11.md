# Remaining account checks — 11 October 2026

## Verified directly through GSC Wizard / GA4 APIs

Property: `properties/556764779` (CasaAntonio). Reporting timezone: `Asia/Tokyo`. All seven custom dimensions are registered and queryable: apartment_name, contact_method, intent, link_location, page_language, provider, selected_language.

GA4 reports queried for 1–10 October 2026 (recent dates may still process):

| Event | Recorded count | Apartment breakdown | Status |
| --- | ---: | --- | --- |
| airbnb_click | 14 | B 8; A 6 | B booking receipt confirmed; counts measure clicks, not bookings |
| review_click | 5 | A 5 | B review receipt still unconfirmed |
| inquiry_click | 2 | A 2 | A long-stay receipt confirmed |
| contact_click | 0 | — | Receipt unconfirmed; zero does not establish a defect |
| map_click | 0 | — | Receipt unconfirmed; zero does not establish a defect |

Twelve of fourteen booking events were attributed to `tagassistant.google.com / referral`; two to Direct. These results are predominantly test evidence, not a reliable conversion baseline. Developer filtering should be verified in Testing before activation. Historical test events will not be removed by a newly activated filter.

The registered Provider dimension is `(not set)` for all returned booking, review and enquiry rows. This may reflect historical events before the parameter was configured, processing delay, or a GTM parameter mapping gap. The current source does queue `provider` for all these events. Verify a NEW DebugView event's provider before changing GTM; the historical rows alone cannot identify the cause. Retain the existing event listener and avoid adding duplicate tracking.

## Account work still requiring signed-in UI

The available connector reads GA4 reports and custom definitions but cannot inspect or change GA4's native Search Console product link, data filters, or key-event configuration. There is no exposed Computer Use `node_repl` runtime, and no signed-in browser-control tool. A fresh automated browser can verify public pages but cannot access the owner's signed-in account sessions.

1. **Native Search Console link:** GA4 → Admin → Product links → Search Console links. Verify the Casa Antonio domain property and correct Casa web stream. If missing, create the link. GSC Wizard's connection does not prove this native link exists.
2. **DebugView test:** open the live site through GTM Preview; use B's booking button, B's Airbnb and Booking.com review links, a contact link and a map link. Each click must produce one event, with B's apartment name where applicable and the expected provider/contact parameter. Review and map clicks should remain engagement events, not booking conversions. Confirm new provider values are populated.
3. **Long-stay goal:** `inquiry_click` has recorded receipts but is not currently a key event. Mark it as a key event if enquiry intent is a business goal; describe it as an enquiry-link click, not a delivered message.
4. **Test traffic:** Developer Traffic was last owner-confirmed in Testing. Verify matched debug events before activation. Preserve DebugView access and do not treat filtered production reports as the place to confirm debug receipts.
5. **Listing facts:** the earlier review found Airbnb A's paid-parking title/duplicated Bedroom 1 label and Booking.com A's incorrect size/bedroom count. Correct in the respective host accounts if still present. Confirmed facts: free parking for one car, approximately 65 m², two bedrooms, three singles and one double, maximum four guests.
6. **Campaign publishing:** select relevant links from `CAMPAIGN_LINKS_2026-10-08.md` for Casa-specific profiles/posts. No social-account edits have been made.

No GA4 settings, listings or social profiles were changed during this API verification. No new test traffic was deliberately sent to production analytics.

References: [Google's Search Console integration](https://support.google.com/analytics/answer/10737381?hl=en), [developer-traffic filtering](https://support.google.com/analytics/answer/13296761?hl=en).
