# Casa Antonio

Static site for casaantonio.jp. Deploy with `npm run build && npx wrangler deploy`.

Workers Builds is set to run only `npx wrangler deploy`. That command does not create `dist`, which is why deploy failed with "assets.directory does not exist". On that builder (`WORKERS_CI=1`), `postinstall` runs the Vite build and prerender before Wrangler starts. A normal `npm install` on your own machine does not.

Do not also set a dashboard build command unless you remove `postinstall`. Either one is enough. Leave the deploy command as `npx wrangler deploy`.

The build prerenders 52 pages: 13 pages in English, Japanese, Simplified Chinese, and Korean, including `/combo/`. `www` already redirects to the apex in Cloudflare DNS. This assets-only project does not add a second host redirect.

Full-size photo originals live in `photos-src/`, not in `public/photos/`. Keep the `og-*.jpg` files in `public/photos/`. Do not put a `_redirects` file in `public/`.

Photos use a seven-day browser cache with one day of stale-while-revalidate. When replacing a photo, use a new filename/stem, regenerate all AVIF/WebP sizes and update the photo manifest and source references. Version replacement `og-*.jpg` files too and update their SEO references. Overwriting a URL can leave returning guests seeing the old photo for up to a week. Keep originals in the repository while generation and attribution checks depend on them.

## Social links

Prepared Casa Antonio links for Instagram, TikTok, Rednote and YouTube, in all four languages and with matching apartment/long-stay destinations, are in `docs/CAMPAIGN_LINKS_2026-10-08.md`. These are not published profile edits. Generate a single post link with `npm run campaign-links -- --campaign casa_antonio_2026_10 --content bedroom_a_2026_10_08 --source instagram --lang ja --page a`. Use `--out filename.md` to save a reusable table. See `docs/GROWTH_2026-10-08.md` for the Casa-only measurement baseline and remaining account steps.

Add these parameters on links you place in a profile or a post. Do not add them to the Airbnb buttons on the site itself.

`?utm_source=instagram&utm_medium=social&utm_campaign=bio`

`?utm_source=tiktok&utm_medium=social&utm_campaign=bio`

`?utm_source=rednote&utm_medium=social&utm_campaign=bio`

## Status (6 Oct 2026)

Current property facts are in `src/data/property-facts.ts`: free parking for one large car per apartment; approximately 65 m² each; A has three singles and one double across two bedrooms (two singles beside the living room; one single and one double farther away), maximum four guests; B has three singles, maximum three guests. Singles are 90 cm wide; the double is 130 cm. B is on the second floor, reached by approximately 25 steps with a handrail, and has laundry-room hanging/drying space. A lists a drying rack on Airbnb. Damage charges follow actual repair costs with a minimum of ¥15,000. The owner confirmed that A’s existing photos show the current layout. See `docs/OCTOBER_IMPROVEMENTS.md` for the latest changes and checks.

The site captures clicks immediately in `scripts/analytics-bootstrap.js`. GTM consumes the queue. Do not add a second click listener or React event push. Booking intent remains `airbnb_click` for compatibility, while both platforms' review links use `review_click`, and long-stay requests use `inquiry_click`. These actions are not completed bookings. The bootstrap keeps the legacy listener guard to prevent duplicate events.

Run `npm ci` then `npm run check` before releasing. The check builds all 52 pages, typechecks, tests click classification/queueing, and validates local routes and photo links. Browser checks are documented in `docs/UPDATE_HANDOVER.md`.

The owner published the GTM update and confirmed the A long-stay event in GA4. No further container import is required. See `docs/SEARCH_ANALYTICS_2026-10-07.md` for optional account reporting setup and `docs/CONTENT_PROVENANCE.md` for source records still needed. See `docs/CLAUDE_REVIEW_2026-10-07.md` for the source review, cleanup, photo caching and official day-trip links.

## Still needed from the owner

- No replacement bedroom photo is required: the owner confirmed that A's current photos show the approved bed arrangement.
- Historical destination-photo acquisition records, and individual Booking.com review dates/source records. Exact public originals for all 16 destination photos are now linked and documented in `docs/qa/photo-attribution.json`; acquisition dates remain unknown.
- Reconcile Airbnb/Booking.com listing terms with the approved parking, bed arrangement and damage policy; this source update does not edit those listings.
- Optional nightly rates, social profile URLs, and a direct long-stay contact, only if they should be published. Airbnb messaging remains available meanwhile.
