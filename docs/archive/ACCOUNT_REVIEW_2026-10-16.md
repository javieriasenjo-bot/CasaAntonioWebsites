# Casa Antonio signed-in account review — 16 October 2026

## Listing access

The signed-in Airbnb account exposes only Ocean Stay and Villa Cangrejo. Javier subsequently confirmed Casa Antonio A/B cannot yet be edited. Management access for Airbnb, Booking.com and Trip.com is expected from **1 November 2026**. No OTA edits were made. A one-time chat reminder is active for 1 November at 09:00 Japan time (`casa-antonio-listing-access-begins`).

Preserve the confirmed A facts: two bedrooms, three singles plus one double, maximum four guests, one free large-car space. Room beside living room: two singles; farther room: one single plus one double. B: one bedroom, three singles, maximum three guests, one free space.

## Google profile

The Kagami Planning account manages existing Casa antonio A, profile ID 16419205910397413440. The personal account separately exposes an existing Casa Antonio B profile; none was created or edited.

- A's website field previously contained the homepage with campaign `gbp`. Submitted an A-specific destination while preserving the existing attribution: `https://casaantonio.jp/casa-antonio-a/?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- Initially pending, then the management editor showed the new URL without a pending label. The public Search Website link still contained the old homepage URL after refresh. Account approval is verified; public propagation remains open.
- Phone is empty; name and categories retained. Primary category is Holiday apartment rental; secondary is Furnished apartment building. The editor provides no description field, so the prepared EN/JA description was not applied.
- A previous address edit adding `-01` is rejected. Current address remains the building address. No address/pin change made.
- Hotel details already show parking Yes / Free Yes. Existing 15 owner photos visually cover both bedrooms, living area, kitchen, entrance and exterior. Uploaded the missing A bathroom image, `../../photos-src/a-bath.jpg`; UI confirmed Upload complete and the new photo is PENDING. No duplicates of existing interior photos were uploaded.
- Direct review-request URL obtained from the profile: https://g.page/r/CdmsYfUwo0NJEBI/review . No guest message sent and no guest guide edited.

Evidence: `qa/google-website-approved-2026-10-16.jpg`, `qa/google-photo-pending-2026-10-16.jpg`.

## GA4 verification

Inspected CasaAntonio property **556764779**, account **410205978**, stream **15889704429**, website `https://casaantonio.jp`, measurement ID **G-3V83R0Z48F**. Stream detail confirms collection active in the past 48 hours.

- Native Search Console link exists for domain `casaantonio.jp` and this same stream, linked 30 September 2026 at 22:40:49.
- Event and user retention are both 14 months; reset on new user activity is enabled.
- Internal Traffic: Exclude / Active. Casa Developer Traffic: Exclude / Testing. No filters changed.
- Seven event-scoped custom dimensions are present: apartment_name, contact_method, intent, link_location, page_language, provider, selected_language.
- Key events: airbnb_click and inquiry_click have recent stream data. contact_click is marked but shows No stream data detected. purchase also has no data; this does not establish completed bookings.
- Recent-events list contains airbnb_click, inquiry_click, review_click, language_change, click, first_visit, page_view, scroll, session_start and user_engagement. map_click and contact_click are absent. Email and map receipts therefore remain unverified. No synthetic conversion clicks sent.
- Home, 9–15 October: 8 active users, 39 events, 14 views, 7 new users; channel table shows 7 Direct sessions and 1 Referral session. Low volume does not support a strong conversion conclusion.
- Existing Funnel / By language, 18 September–15 October: 50 users at Visit site, 4 at View apartment A/B, 2 at Airbnb click. Closed funnel, indirectly followed steps: session_start → Page path and screen class contains `casa-antonio-` → airbnb_click. No additional filter/segment comparison is applied. Breakdown is the standard Language dimension, not the site's custom Page language. Saved By source and default tabs also exist but were not separately audited.

The funnel measures ordered website activity and Airbnb intent, not completed reservations. B-specific review receipts/provider parameters were not independently broken down in account reporting. No GA4/GTM configuration or saved exploration changed.
