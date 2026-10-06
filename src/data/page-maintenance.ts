import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// The shared navigation/fallback update on this date affects every page.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-10-06", a: "2026-10-06", b: "2026-10-06",
  neighborhood: "2026-10-06", "day-trips": "2026-10-06", arrival: "2026-10-06",
  access: "2026-10-06", "snow-festival": "2026-10-06", "teine-ski": "2026-10-06",
  "long-stay": "2026-10-06", combo: "2026-10-06", faq: "2026-10-06", privacy: "2026-10-06",
};
