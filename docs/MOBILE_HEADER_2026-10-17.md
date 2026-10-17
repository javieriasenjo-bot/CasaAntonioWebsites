# Mobile header and hero layout — 17 October 2026

The owner's iPhone screenshot showed a tall, uneven header and a partly clipped homepage heading. The header put the logo on its own row, while the menu and language controls competed for the next row. The mobile hero used a viewport-derived fixed height with absolutely positioned content and hidden overflow; when the content needed more room, its beginning could be clipped.

## Changes

- Mobile header uses a two-column grid: brand and Menu on the first row, four equal language links on the second. Controls retain 44-pixel minimum height; the language row no longer wraps unevenly.
- Native details/summary navigation remains usable without JavaScript. Desktop navigation is unchanged.
- Mobile homepage and apartment heroes grow with their content. Photographs fill the background independently, so short browser viewports and enlarged text do not force the heading outside the hero.
- Review cards can shrink below their former 15rem minimum, fixing horizontal overflow at 320px with enlarged text.
- Footer text can wrap long address runs; this fixes a second enlarged-text overflow on the Korean page without hiding content.
- Added browser regression checks for four languages, 320–844 pixel widths, portrait/landscape heights and 100%/125% text sizing. They check hero content bounds, header controls, touch targets and horizontal overflow.

## Validation

Production build, TypeScript and all 15 existing tests passed. Integrated browser checks passed: all 52 routes, no-JavaScript and script-failure fallbacks, plus all 32 language/viewport/text-size combinations. Results are saved to `qa/mobile-header-2026-10-17.json`. Local Chrome screenshots were visually inspected with the menu closed and open. These checks do not claim testing on a physical iPhone or Safari; the owner should reopen Safari after deployment to confirm the original device behavior.

Changes are local only until the owner commits and deploys. Existing account-review documents and photos were left intact.
