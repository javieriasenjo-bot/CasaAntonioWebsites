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

## Status (6 Oct 2026)

Owner-confirmed facts are in `src/data/property-facts.ts`: free parking for one car per apartment; approximately 65 m² each; A has three double beds across two bedrooms (2 + 1), maximum four guests; B has three single beds, maximum three guests. Damage charges are actual repair costs with a minimum of ¥15,000. Existing A bedroom photos show an earlier arrangement; all languages disclose this beside the gallery until current photos are supplied.

The site captures clicks immediately in `scripts/analytics-bootstrap.js`. GTM consumes the queue. Do not add a second click listener or React event push. Booking intent remains `airbnb_click` for compatibility, while both platforms' review links use `review_click`, and long-stay requests use `inquiry_click`. These actions are not completed bookings. The bootstrap keeps the legacy listener guard to prevent duplicate events.

Run `npm ci` then `npm run check` before releasing. The check builds all 52 pages, typechecks, tests click classification/queueing, and validates local routes and photo links. Browser checks are documented in `docs/UPDATE_HANDOVER.md`.

See `docs/GTM_SETUP.md` for the outstanding container configuration and verification. See `docs/CONTENT_PROVENANCE.md` for source records still needed. No deployment or authenticated GTM change was performed in this source update.

## Still needed from the owner

- A current photo of the bedroom that now has one double bed. The existing photos remain with a layout-disclosure note.
- Original destination-photo acquisition/source links, and individual Booking.com review dates/source records. The supplied high-quality property-photo folders do not establish these records.
- Reconcile Airbnb/Booking.com listing terms with the approved parking, bed arrangement and damage policy; this source update does not edit those listings.
- Optional nightly rates, social profile URLs, and a direct long-stay contact, only if they should be published. Airbnb messaging remains available meanwhile.
