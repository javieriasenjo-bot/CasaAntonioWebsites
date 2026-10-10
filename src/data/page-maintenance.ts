import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// The shared navigation/fallback update on this date affects every page.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-10-11", a: "2026-10-11", b: "2026-10-11",
  neighborhood: "2026-10-11", "day-trips": "2026-10-11", arrival: "2026-10-11",
  access: "2026-10-11", "snow-festival": "2026-10-11", "teine-ski": "2026-10-11",
  "long-stay": "2026-10-11", combo: "2026-10-11", faq: "2026-10-11", privacy: "2026-10-11",
};
