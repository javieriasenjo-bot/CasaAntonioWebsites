# Casa Antonio

Static site for casaantonio.jp. Deploy with `npm run build && npx wrangler deploy`.

Workers Builds is set to run only `npx wrangler deploy`. That command does not create `dist`, which is why deploy failed with "assets.directory does not exist". On that builder (`WORKERS_CI=1`), `postinstall` runs the Vite build and prerender before Wrangler starts. A normal `npm install` on your own machine does not.

Do not also set a dashboard build command unless you remove `postinstall`. Either one is enough. Leave the deploy command as `npx wrangler deploy`.

The build prerenders 52 pages: 13 pages in English, Japanese, Simplified Chinese, and Korean, including `/combo/`. `www` already redirects to the apex in Cloudflare DNS. This assets-only project does not add a second host redirect.

Full-size photo originals live in `photos-src/`, not in `public/photos/`. Keep the `og-*.jpg` files in `public/photos/`. Do not put a `_redirects` file in `public/`.

## Social links

Add these parameters on links you place in a profile or a post. Do not add them to the Airbnb buttons on the site itself.

`?utm_source=instagram&utm_medium=social&utm_campaign=bio`

`?utm_source=tiktok&utm_medium=social&utm_campaign=bio`

`?utm_source=rednote&utm_medium=social&utm_campaign=bio`

## Still needed from the owner

- Interior photographs of Casa Antonio B. Do not generate them. Until they exist, the B page says the interiors are not on this page yet.
- Apartment A: the photographs show one bedroom and three beds. Do not change that until the floor plan is confirmed, including where a fourth guest sleeps.
- Parking: the body copy still says free private parking. The selling-point chips do not say free, because the price is not confirmed. Confirm price, spaces, and winter rules before changing either.
- Real review lines, with a first name, month, and country. The reviews block stays hidden until those exist.
- A nightly price, only if it should be printed.
- Profile URLs for Instagram, TikTok, and RedNote, if they should appear on the page.
- A direct contact for long stays, only if you want one besides Airbnb.

Always Use HTTPS is already on for the zone. Do not add a dashboard build command. Leave the deploy command as `npx wrangler deploy`.
