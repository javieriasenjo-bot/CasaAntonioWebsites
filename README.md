# Casa Antonio

Static site for casaantonio.jp. Deploy with `npm run build && npx wrangler deploy`.

Workers Builds is set to run only `npx wrangler deploy`. That command does not create `dist`, which is why deploy failed with "assets.directory does not exist". On that builder (`WORKERS_CI=1`), `postinstall` runs the Vite build and prerender before Wrangler starts. A normal `npm install` on your own machine does not.

Do not also set a dashboard build command unless you remove `postinstall`. Either one is enough. Leave the deploy command as `npx wrangler deploy`.

The build prerenders every page in English, Japanese, Simplified Chinese, and Korean. `www` already redirects to the apex in Cloudflare DNS. This assets-only project does not add a second host redirect.

## Social links

Add these parameters on links you place in a profile or a post. Do not add them to the Airbnb buttons on the site itself.

`?utm_source=instagram&utm_medium=social&utm_campaign=bio`

`?utm_source=tiktok&utm_medium=social&utm_campaign=bio`

`?utm_source=rednote&utm_medium=social&utm_campaign=bio`

`utm_source` is `instagram`, `tiktok`, or `rednote`.

## Still needed from the owner

- Interior photographs of Casa Antonio B, saved as files the site can publish. Do not generate them.
- Where the fourth guest sleeps in Casa Antonio A. The photos show three beds. The listing allows four.
- A nightly price, only if it should be printed. Until then the site does not show one.
- Real review lines, with a first name, month, and country. The old one-word line has been removed.
- A direct contact for long stays, if you want one besides Airbnb. Long stays are “write through Airbnb; the rate is agreed in writing.”
- Profile URLs for Instagram, TikTok, and RedNote, if they should appear on the page.
- A measured Wi-Fi speed, if you want a number. The site only says the apartment has Wi-Fi.

## Still needs the owner

- Apartment A: the photographs show one bedroom and three beds. The Airbnb listing has been reported as two bedrooms and four beds. Do not change the public count until the floor plan is confirmed.
- Parking: this site says free private parking. Airbnb A has been reported with a title that says paid parking and amenities that say free. Confirm price, spaces, and winter rules before changing either site.
- Apartment B interior photographs.
- Where a fourth guest sleeps, if four is correct.
- Real review lines, a printed nightly price, and any contact besides Airbnb, only if you want them on the site.

## Cloudflare switches this zip cannot set

Turn on **Always Use HTTPS** for the casaantonio.jp zone. HTTP was observed returning the page without upgrading. www already redirects to the apex. Do not add a `_redirects` file.
