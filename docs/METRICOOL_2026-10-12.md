# Metricool visit tracking — 12 October 2026

The owner's supplied tracking hash is installed once in all 52 generated pages. `scripts/metricool-bootstrap.js` loads Metricool's official `be.js` asynchronously after DOM readiness, using an idle callback with a two-second timeout where supported. Only `casaantonio.jp` and `www.casaantonio.jp` activate it; localhost/development previews do not record visits. An initialization guard and one onload handler avoid duplicate visit calls. Failed/blocked tracking does not stop the application.

The production security policy allows `https://tracker.metricool.com` under script-src and img-src. The current official tracker loads a tracking image at `/c3po.jpg`; no wildcard domain permission or extra connect-src permission is added.

All four privacy pages disclose Metricool and the page URL, referring page and browser window size sent by the current tracker. Metricool documents its website visit tracker as cookie-free. GA4 click tracking remains separate. Visit counts are not completed reservations and may differ between platforms. GA4's internal/developer filters do not automatically filter Metricool.

No social accounts or posts are created by this integration. The owner has deferred Casa social accounts. No dependency or GTM tag was added.

Validation passed: 14 automated tests, the 52-page build, and all 52 mobile/desktop startup checks. Browser tests using the generated site's real security policy and the retrieved official tracker verified one script/visit request, correct hash and URL, no policy violations, duplicate initialization protection, and continued app startup when Metricool is blocked. The beacon was intercepted; no test visit was recorded. Evidence: `qa/metricool-browser-2026-10-12.json`.

Commit and deploy these source changes, then open the public site and check Metricool's website connection/realtime visits. Metricool says historical data is not backfilled and aggregated analytics can take 24 hours. Local request tests must intercept the tracking image so they do not pollute the account. An intercepted request proves integration, not account receipt.

References: [Metricool website setup](https://help.metricool.com/how-to-connect-your-website-or-blog-to-metricool-ejuy1), [Metricool visit tracker and cookies](https://help.metricool.com/use-of-cookies-in-metricool-v5dg7).
