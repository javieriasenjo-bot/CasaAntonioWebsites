import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// Japanese shared labels were polished on this date; B review counts were refreshed.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-10-13", a: "2026-10-12", b: "2026-10-12",
  neighborhood: "2026-10-12", "day-trips": "2026-10-12", arrival: "2026-10-12",
  access: "2026-10-12", "snow-festival": "2026-10-12", "teine-ski": "2026-10-12",
  "long-stay": "2026-10-13", combo: "2026-10-12", faq: "2026-10-13", privacy: "2026-10-12",
};
