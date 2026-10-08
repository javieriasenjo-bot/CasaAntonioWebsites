import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// The shared navigation/fallback update on this date affects every page.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-10-08", a: "2026-10-07", b: "2026-10-07",
  neighborhood: "2026-10-07", "day-trips": "2026-10-07", arrival: "2026-10-07",
  access: "2026-10-07", "snow-festival": "2026-10-07", "teine-ski": "2026-10-07",
  "long-stay": "2026-10-07", combo: "2026-10-07", faq: "2026-10-07", privacy: "2026-10-07",
};
