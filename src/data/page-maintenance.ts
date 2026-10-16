import type { PageId } from "@/lib/paths";

// Update only pages whose visible content or meaningful metadata changed.
// 16 October: review provenance/ratings and multilingual destination guidance refreshed.
export const PAGE_MODIFIED: Record<PageId, string> = {
  home: "2026-10-16", a: "2026-10-16", b: "2026-10-16",
  neighborhood: "2026-10-16", "day-trips": "2026-10-16", arrival: "2026-10-14",
  access: "2026-10-12", "snow-festival": "2026-10-16", "teine-ski": "2026-10-16",
  "long-stay": "2026-10-13", combo: "2026-10-12", faq: "2026-10-14", privacy: "2026-10-12",
};
