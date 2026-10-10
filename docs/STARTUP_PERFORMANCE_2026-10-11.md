# Startup rendering and JavaScript — 11 October 2026

## Current implementation

The server and browser now render the same direct page tree and language provider. `hydrateRoot` attaches to existing prerendered HTML instead of clearing and rebuilding it. Empty development roots use `createRoot`. This replaces the 9 October full client render; it does not restore the failed TanStack Router `router.ssr` workaround. Recoverable hydration errors are logged for diagnosis.

TanStack Router and its generated route files are removed. `load-page.tsx` imports only the requested page, alongside its language pack. Existing ordinary links still navigate by full page loads. Mobile navigation uses native `details`/`summary`, works before JavaScript and when scripts fail, and overlays the page without shifting its content. A menu opened before hydration stays open afterward. Desktop and mobile navigation share link content but have separate HTML controls for their different layouts.

The hero photo and its quality are unchanged. The measured opportunity was startup/rendering work, rather than the already small, eager, high-priority image.

## Measurements

Controlled local mobile Lighthouse 13 tests, three runs per version, gave median LCP of **5.29 seconds before and 3.68 seconds afterward**; median performance scores were **73 and 86**. Both variants had zero measured total blocking time. The old menu produced a layout shift of about 0.30 in one baseline run; all three final runs had CLS zero. Baseline LCP varied substantially, so these are lab evidence, not a production or field guarantee.

The startup split reduced homepage JavaScript by approximately **27%**, and the main minified bundle by approximately **22%**. These byte comparisons use the startup split before the small native-menu adjustment. Local servers do not apply production compression. Full Lighthouse reports are retained in `C:/dev/CasaAntonio_Startup_Baseline_Final_Lighthouse_*.json` and `C:/dev/CasaAntonio_Startup_Final_Lighthouse_*.json`.

After deployment, repeat PageSpeed and check the live console for hydration errors. Do not compare the previous single live score of 79 directly with the local score of 86.

## Validation and reproduction

Run `npm ci`, `npm run check`, then `npm run check:browser`. The browser check uses `playwright-core` with installed Google Chrome; it does not download a browser. Set `CASA_BROWSER_PATH` to a compatible local Chromium executable when Chrome is not installed.

Browser coverage includes all 52 routes at mobile and desktop widths; preserved heading and hero DOM nodes; no console/application errors or horizontal overflow; saved-language startup; menu, reservation and gallery interactions; Escape and focus return; four no-JavaScript homepages; delayed scripts and first-click queueing; and a failed language-pack import. External requests are blocked to avoid recording test traffic. Saved evidence is in `qa/startup-browser-2026-10-11.json`.

Line endings are governed by `.gitattributes` (`text=auto eol=lf`); the touched text files use LF. No whole-repository renormalization is included.

Changes are prepared locally for owner review and commit. No deployment or account-setting changes are included. GA4's native Search Console link and remaining B/contact/map receipts still require account verification; successful click queueing alone does not prove GA4 receipt.
