# Search Console redirect-validation email — 13 October 2026

The supplied screenshot reports validation failure for the Page with redirect category (started 7 October, failed 10 October), with two failed entries and one pending entry. The supplied Coverage Drilldown ZIP contains three slashless URLs: `/casa-antonio-a`, `/casa-antonio-b`, `/arrival`. Its crawl dates are 8, 8 and 6 October respectively. This report is not the separate Redirect error category.

Fresh HTTP checks and Google URL Inspection establish:

| Short URL | Live response | Destination | Destination status | Google destination status |
| --- | --- | --- | --- | --- |
| `/casa-antonio-a` | 307 | `/casa-antonio-a/` | 200 | PASS: Submitted and indexed |
| `/casa-antonio-b` | 307 | `/casa-antonio-b/` | 200 | PASS: Submitted and indexed |
| `/arrival` | 307 | `/arrival/` | 200 | PASS: Submitted and indexed |

Google-selected and user-declared canonicals agree on each trailing-slash destination. Each slashless inspection is NEUTRAL / Page with redirect and points to that correct destination. B's fresh reported crawl is 13 October; this is not merely relying on the older export.

The live sitemap has none of these three slashless entries. It advertises canonical destinations. No redirect loop, broken destination, indexing exclusion of the destination or sitemap defect was found.

Validation failed because the tested slashless URLs still have the redirect Google was asked to consider fixed. Here the redirect is intentional URL normalization. Do not remove it, create duplicate pages, request indexing for the slashless URLs or restart validation merely to make the category disappear. No code or Cloudflare setting change is required for this notice. Keep monitoring canonical indexing rather than expecting every known URL variant to be indexed.

The ZIP was read as data without executing any content. Browser control was unnecessary; the inspection connector and direct HTTP requests provided the required evidence. No indexing request, account mutation or deployment was performed.

Reference: [Google Page indexing report — Page with redirect and validation](https://support.google.com/webmasters/answer/7440203?hl=en).
