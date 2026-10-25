import type { Lang } from "@/lib/paths";

// An optional, owner-maintained line shown under the hero buttons.
//
// Why: every route to a booking is a blind click through to Airbnb. A short,
// true sentence about what is still open gives a visitor a reason to click now
// rather than later. Leave the strings empty and nothing renders — there is no
// placeholder and no invented availability. Write it in all four languages, or
// in none; a language left empty simply shows nothing on that page.
//
// Example: "Some dates are still open for Snow Festival week, 4–11 February."
// Clear it again once the dates have gone.
export const AVAILABILITY_NOTE: Record<Lang, string> = {
  en: "",
  ja: "",
  zh: "",
  ko: "",
};
