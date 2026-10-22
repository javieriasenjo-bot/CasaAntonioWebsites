import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// 22 October: lodging and apartment JSON-LD gained localized amenities, house rules and Airbnb reserve actions.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-10-22", a: "2026-10-22", b: "2026-10-22",
  neighborhood: "2026-10-16", "day-trips": "2026-10-16", arrival: "2026-10-19",
  access: "2026-10-12", "snow-festival": "2026-10-16", "teine-ski": "2026-10-16",
  "long-stay": "2026-10-20", combo: "2026-10-12", faq: "2026-10-14", privacy: "2026-10-12",
};
