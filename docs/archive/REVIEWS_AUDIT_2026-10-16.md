# Casa Antonio reviews and external-listing audit — 16 October 2026

## Method and verified ratings

The public pages were loaded in a fresh headless Chrome session using the installed browser and Playwright. No signed-in hosting account was accessed or changed. Airbnb's full review dialog was opened for each apartment. Booking.com property-page review cards were read after JavaScript loaded. Static web extraction alone was insufficient: it exposed an older Airbnb B count and no usable Booking.com content.

| Source | Apartment | Rating | Reviews | Evidence |
| --- | --- | --- | --- | --- |
| Airbnb | A | 4.87/5 | 30 | Headline and full review dialog agree |
| Airbnb | B | 4.95/5 | 22 | Headline and full review dialog agree; Guest Favorite retained |
| Booking.com | A | 9.0/10 | 24 | Headline and guest-reviews section agree |
| Booking.com | B | 9.7/10 | 26 | Guest-reviews section |

Sources: [Airbnb A](https://www.airbnb.com/rooms/1248284267045468378), [Airbnb B](https://www.airbnb.com/rooms/1248260873560502499), [Booking.com A](https://www.booking.com/hotel/jp/casa-antonio-a.html), [Booking.com B](https://www.booking.com/hotel/jp/casa-antonio-b.html).

These are dated observations, not live counters or booking evidence. The B cached web extract showed 21 reviews; fresh Chrome showed 22, so the source now uses the rendered result.

## Quote corrections

- Airbnb A: Kelly's full December 2025 review now preserves the winter-ice warning; no added terminal punctuation. Yoshef Wisnu's May 2025 excerpt restores the original opening and is labelled an excerpt. Hiromi O's complete July 2025 translated review is used. The earlier 安 quotation was not found in the loaded dialog, so it was replaced with Junko's verified August 2026 translated review, including its upstairs-footsteps observation.
- Airbnb B: Supattra's December 2025 excerpt now includes the intervening sentence, instead of silently joining non-contiguous passages. Yolanda's February 2026 and Yuki's August 2025 reviews use the full verified text. Leonard's full December 2024 review preserves the second-floor stairs qualification.
- Translated Airbnb reviews are labelled. Excerpts are labelled in all four website languages.
- Booking.com: all eleven existing quotations were corroborated in the property-page cards. Their wording is unchanged. Danny and Chia remain labelled excerpts.

The Airbnb dialog did not expose every A review in the initial loaded batch. This is why the unmatched 安 text is not claimed false, but is no longer presented as currently verified. No review date or permanent individual review URL was invented. General property links remain available below the reviews, rather than being disguised as individual-review evidence.

## External contradictions still require listing-owner edits

- Airbnb A still advertises paid parking in its title while its amenities and owner-confirmed facts say free parking. Its description still repeats Bedroom 1 for both rooms, although its sleeping panel correctly shows two rooms and four beds.
- Booking.com A highlights still show one bedroom, two beds and 1,076 square feet (about 100 m²), despite its room type saying Two-Bedroom Apartment. Owner-confirmed website facts remain two bedrooms, four beds and approximately 65 m².
- Booking.com B highlights show 755 square feet (about 70 m²). Owner-confirmed website area remains approximately 65 m²; ask the listing manager to reconcile it.
- Both Booking.com pages currently state damage charges up to ¥15,000. The owner-confirmed website policy uses actual repair costs with a minimum of ¥15,000. Reconcile the platform policy rather than silently treating these as equivalent.
- A's older reviews mention upstairs noise and winter ice; B reviews mention luggage on stairs and occasional map directions to the wrong street. These are guest observations, not a basis to invent current operational rules. Existing stairs and arrival guidance should stay prominent.

No external listing was edited, no review requested, and no new testimonial fabricated during this audit.

## Verification

A second fresh rendered-page pass matched all 19 stored quotation texts (8 Airbnb, 11 Booking.com) against the primary review dialogs/property cards after whitespace normalization. Every match passed. TypeScript checking and whitespace checks also passed. This does not establish missing individual review URLs or Booking.com review dates.
