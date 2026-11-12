import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// 12 November: Booking.com and Trip.com links sit in every footer, so every page changed. Home seasons, Teine, Snow Festival, review scores and TripAdvisor figures updated.
// 4 November: Upopoy winter hours/closures and the airport-bus timetable re-checked (day-trips, access).
// 22 October: lodging and apartment JSON-LD gained localized amenities, house rules and Airbnb reserve actions.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-11-12", a: "2026-11-12", b: "2026-11-12",
  neighborhood: "2026-11-12", "day-trips": "2026-11-12", arrival: "2026-11-12",
  access: "2026-11-12", "snow-festival": "2026-11-12", "teine-ski": "2026-11-12",
  "long-stay": "2026-11-12", combo: "2026-11-12", faq: "2026-11-12", privacy: "2026-11-12",
};
