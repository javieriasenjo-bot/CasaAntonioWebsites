# Casa Antonio external listing corrections — 16 October 2026

These are prepared corrections, not saved account edits. The owner has authorized the corrections, but this session has no signed-in Airbnb/Booking/Google management capability. No rates, availability, cancellation terms, bedroom-photo associations or other accommodation profiles were changed.

## Public inspection

| Listing | What was actually checked | Result |
| --- | --- | --- |
| [Airbnb A](https://www.airbnb.com/rooms/1248284267045468378) | Public page returned on 16 October | Title still mentions paid parking while amenities say free parking. Description labels both bed lines Bedroom 1. Structured bed panel already shows two bedrooms/four beds: Bedroom 1 has single+double; Bedroom 2 has two singles. Four-guest maximum is correct. |
| [Booking.com A](https://www.booking.com/hotel/jp/casa-antonio-a.html) | Initial static request blocked; parallel fresh Chrome inspection succeeded | Public summary shows approximately 100 m², one bedroom/two beds despite a Two-Bedroom Apartment room type. Fresh rating 9.0/24. See REVIEWS_AUDIT_2026-10-16.md. |
| [Agoda Sapporo A](https://www.agoda.com/casa-antonio-a/hotel/sapporo-jp.html) | Fresh direct request plus search extraction of this exact URL | Direct response was empty. Search extraction still shows 100 m² and one bedroom/studio; its crawl is three months old, so current account state is unverified. Generic description also places central-city sights within a short walk, inconsistent with an Asabu base. |
| [Existing A Google profile](https://maps.app.goo.gl/xUrVzn4P1eaeBNFu7) | Fresh short-link request | Web reader could not open it. Earlier resolved A identity retained; submitted website approval and description state unverified. |
| gites.fr | Exact-name Sapporo search | No confidently identified property URL obtained; do not request changes to similarly named unrelated properties. |

## Priority 1: Airbnb A

Keep the existing two-bedroom/four-bed structured configuration. Do not blindly rename photo-tour rooms: its bed-panel numbering differs from the prose order. Describe rooms by location unless editing the corresponding numbered panel after checking its photographs.

Proposed English title (48 characters):

Casa Antonio A | 2 bedrooms, free parking, Asabu

Proposed Japanese title:

Casa Antonio A｜麻生駅徒歩約5分・寝室2室・無料駐車場

English replacement for the bedroom and parking paragraphs:

> Two bedrooms accommodate up to four guests. The bedroom next to the living room has two single beds, each 90 cm wide. The farther bedroom has one 90 cm single bed and one 130 cm double bed. One parking space is available free of charge, suitable for a large car. Please let us know when booking if you will use it. The host/property management clears parking snow; guests are not responsible for snow clearing.

Japanese replacement:

> 寝室は2室あり、最大4名まで宿泊できます。リビングに隣接する寝室には幅90cmのシングルベッド2台、奥の寝室には幅90cmのシングルベッド1台と幅130cmのダブルベッド1台があります。大型車も停められる無料駐車場を1台分ご用意しています。ご利用の場合は予約時にお知らせください。駐車場の除雪はホスト・管理会社が行います。ゲストの方に除雪をお願いすることはありません。

Optional supporting amenity paragraph, based on 14 October owner confirmation:

English: Neither apartment provides a cot or high chair. Oil, salt and pepper are usually removed between stays for hygiene. Please bring the seasonings you need.

Japanese: A・Bともにベビーベッドとハイチェアはご用意していません。衛生上の理由により、油・塩・こしょうは通常、滞在ごとに撤去しています。必要な調味料はご持参ください。

After saving, reopen the public listing in English and Japanese. Verify title, prose, photo-tour room associations, free parking and four-person maximum. A pending platform review is not the same as public publication. No change is needed to the bed panel simply to make its numbers match prose order.

## Priority 2: Booking.com and Agoda

In the existing Apartment A unit configuration, verify and correct these fields where necessary:

- Approximate apartment area: 65 m².
- Bedrooms: two.
- Beds: three singles and one double, with the room split above.
- Maximum guests: four, despite the total theoretical bed capacity.
- Parking: free for one car.

If Agoda uses a third-party supply feed, identify that feed in the operator dashboard/support response. Correct the authoritative unit data there, then ask Agoda to refresh. Do not assume Booking.com supplies it, create a duplicate listing or alter pricing to compensate. Ask for removal/correction of inaccurate generic central-city walking claims; the verified local landmark is Asabu Station, about five minutes on foot. Reopen the public listing after propagation and record the inspection date.

Support request, English:

> Please correct Casa Antonio A in Sapporo. The apartment is approximately 65 m² with two bedrooms, three single beds and one double bed, for a maximum of four guests. One bedroom has two singles; the other has one single and one double. Parking is free for one car. Please confirm the source of the displayed property data and refresh any downstream listings after correcting it. Do not change rates, availability or cancellation terms.

Support request, Japanese:

> 札幌のCasa Antonio Aの施設情報をご確認ください。正しい情報は、広さ約65㎡、寝室2室、シングルベッド3台とダブルベッド1台、定員4名です。一方の寝室にシングル2台、もう一方にシングル1台とダブル1台があります。駐車場は1台分無料です。掲載情報の取得元をご確認のうえ、必要な訂正と連携先への情報更新をお願いします。料金・空室・キャンセル条件の変更は不要です。

### Booking B and platform damage terms

The parallel public Chrome review audit also found B listed at approximately 70 m² (owner-confirmed approximately 65 m²). Both Booking pages state damage charges **up to ¥15,000**, whereas the owner-confirmed website wording says actual repair costs with a **minimum of ¥15,000**. These are materially different terms, not alternative translations of the same policy.

Owner/account operator: reconcile each platform policy and supported configuration before changing the published terms. Do not claim that the existing Booking terms already permit the owner's minimum-charge wording, silently overwrite website facts, or change existing booking conditions under this copy-correction task. No platform policy was modified here. See `REVIEWS_AUDIT_2026-10-16.md` for the public audit method and sources.

## Priority 3: existing Google profile and guest guide

Use the refreshed [Google profile draft](GOOGLE_BUSINESS_PROFILE_DRAFT.md), retaining the existing real-world name/category, an empty phone field, no advertised prices and no social accounts. Check the previously submitted website link before replacing it. Prepared English/Japanese descriptions are under 750 characters and contain no contact links.

A guest-review shortcut is blocked only by the actual Casa guest-guide location and a verified direct Google review-request URL. The repository has public arrival and FAQ information but no identified private Casa guest guide. Keep the supplied Maps profile URL distinct from the write-review URL. Do not add invented links or substitute the Kojohama guide.
