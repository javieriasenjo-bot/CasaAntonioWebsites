# Remaining account checks — 11 October 2026

Current source of truth: [../OPEN_TRACKER.md](../OPEN_TRACKER.md). This file retains the dated account findings; the tracker incorporates the owner's later social deferral and Claude handover.

**12 October update:** `inquiry_click` is now confirmed as a GA4 key event; its earlier clicks are not retroactively converted. The website has no direct email/phone/LINE/WhatsApp link, so contact receipt is conditional rather than an outstanding guest-journey defect. See `GROWTH_ACTIONS_2026-10-12.md` and `qa/growth-review-2026-10-12.json` for the latest account/search checks. Historical findings below retain their original dates.

**Social-account clarification:** the owner confirmed on 12 October that Casa Antonio has no social accounts. Profile/post publishing is a future task after account creation, not a pending edit to an existing account. Keep Kojohama profiles unchanged. No social account has been created.

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
3. **Long-stay goal (owner authorized):** mark `inquiry_click` as a key event in GA4 Admin → Events. Preserve `airbnb_click` and `contact_click`; describe these as intent actions, not confirmed bookings or delivered messages. `purchase` is currently registered; do not send purchase events or invent transaction values for outbound clicks. Leave its registration unchanged unless an actual ecommerce integration has been ruled out. No new website tracking listener is required.
4. **Test traffic:** Developer Traffic was last owner-confirmed in Testing. Verify matched debug events before activation. Preserve DebugView access and do not treat filtered production reports as the place to confirm debug receipts.
5. **Listing facts:** the earlier review found Airbnb A's paid-parking title/duplicated Bedroom 1 label and Booking.com A's incorrect size/bedroom count. Correct in the respective host accounts if still present. Confirmed facts: free parking for one car, approximately 65 m², two bedrooms, three singles and one double, maximum four guests.
6. **Campaign publishing:** select relevant links from `../CAMPAIGN_LINKS_2026-10-08.md` for Casa-specific profiles/posts. No social-account edits have been made.

No GA4 settings, listings or social profiles were changed during this API verification. No new test traffic was deliberately sent to production analytics.

References: [Google's Search Console integration](https://support.google.com/analytics/answer/10737381?hl=en), [developer-traffic filtering](https://support.google.com/analytics/answer/13296761?hl=en).

## Latest approved priorities

Deployment and live React-console verification are complete. The 11 October live browser checks passed all 52 routes, no-JavaScript navigation, delayed startup and failed-import fallback. No React #418 errors appeared. A single live mobile Lighthouse run scored 91, with LCP 3.22 seconds, TBT 0 and CLS 0.0011. Evidence is retained outside Git at `C:/dev/CasaAntonio_Live_Startup_2026-10-11.json` and `C:/dev/CasaAntonio_Live_New_2026-10-11.json`.

The supplied homepage bounce rate of 80.5% has not been independently reproduced here. Bot traffic is a hypothesis, not a verified cause. Reassess after separating known test traffic and collecting more guest sessions; do not redesign the homepage around this number alone.

Do not automatically create a Google Business Profile for either apartment. Google's eligibility rules exclude individual vacation homes and rental apartments. An independently eligible staffed business would need a separate assessment based on its real operations. A query containing “google business” alone does not demonstrate guest intent or eligibility. [Official eligibility rules](https://support.google.com/business/answer/13763036?hl=en).

Owner clarification: Casa Antonio A already has a Google profile; the owner supplied its Google Search link on 11 October. Do not create a duplicate or delete the existing profile. Review its website destination, address, category, photos and property facts through the owner's management interface. Public search also finds a Casa Antonio A Google Travel entity, but that alone does not establish Business Profile ownership, verification, category or eligibility. The authenticated management view has not been inspected.

### Exact listing edits for an authorized signed-in operator

- Airbnb A: remove the word “paid” from the existing parking title without implying multiple free spaces. Parking is free for one car. Rename the second duplicated “Bedroom 1” label to “Bedroom 2”. Describe the room beside the living room as two single beds (90 cm each); the farther room as one single (90 cm) and one double (130 cm). Maximum occupancy remains four.
- Booking.com A: set apartment area to approximately 65 m² and bedroom count to two, retaining the same confirmed bed arrangement and four-person maximum occupancy. Inspect the public listing afterward; do not change rates, availability or cancellation terms.
- Publish selected campaign links only on identified Casa-specific profiles/posts. Do not replace Kojohama's primary profile destination with Casa Antonio without selecting the correct account and use case.

Plugin discovery found no suitable GA4 key-event administration or Airbnb/Booking.com host-editing integration. The Booking.com plugin is traveler search, not host management. Social publishing integrations may be available, but none is connected for this task. Account edits above remain authorized and pending actual access, not completed.
