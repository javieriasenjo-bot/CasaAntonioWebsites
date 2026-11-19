import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// 16 November: monthly-stay route, guide booking blocks and monthly enquiry link in every footer.
// 12 November: outbound booking links sat in every footer, so every page changed. Home seasons, Teine, Snow Festival, review scores and TripAdvisor figures updated.
// 4 November: Upopoy winter hours/closures and the airport-bus timetable re-checked (day-trips, access).
// 22 October: lodging and apartment JSON-LD gained localized amenities, house rules and reserve actions.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-11-16", a: "2026-11-16", b: "2026-11-16",
  neighborhood: "2026-11-16", "day-trips": "2026-11-16", arrival: "2026-11-16",
  access: "2026-11-16", "snow-festival": "2026-11-16", "teine-ski": "2026-11-16",
  "monthly-stay": "2026-11-16", "long-stay": "2026-11-16", combo: "2026-11-16", faq: "2026-11-16", privacy: "2026-11-16",
};
