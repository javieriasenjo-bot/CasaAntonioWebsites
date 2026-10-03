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

## Status (4 Oct 2026)

Done: B has 50 interior photos (first 12 curated for booking questions); A has 57 photos (bedrooms, bath, washroom, exterior early). Both apartments are ~65 m² and A is two bedrooms / four beds, matching the Airbnb listing. Real Airbnb and Booking.com reviews are on the site (scores: Airbnb /5, Booking.com /10, never merged; source in `src/data/reviews.ts`). Airbnb clicks are tracked ONLY by the GTM listener; links carry `data-intent` (booking | reviews), `data-property`, `data-placement`. Do not add a site-side push.

## Still needed from the owner

- Confirm the parking policy (free vs paid). Airbnb A's title says paid parking; the site says free.
- Confirm the damage-charge wording. The site says "at least ¥15,000"; the Booking.com house rules say "up to ¥15,000".
- Bed types per room for A, and a floor plan if one exists.
- A nightly price, only if it should be printed.
- Profile URLs for Instagram, TikTok, and RedNote, if they should appear on the page.
- A direct contact for long stays, only if you want one besides Airbnb.
