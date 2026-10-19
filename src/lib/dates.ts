import type { Lang } from "@/lib/paths";

// Deterministic (no Intl) so server-rendered and hydrated text always match.
const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2025-12" → "December 2025" / "2025年12月" / "2025년 12월" */
export function formatMonth(value: string, lang: Lang) {
  const [y, m] = value.split("-").map(Number);
  if (!y || !m) return value;
  if (lang === "en") return `${EN_MONTHS[m - 1]} ${y}`;
  if (lang === "ko") return `${y}년 ${m}월`;
  return `${y}年${m}月`;
}

/** "2026-10-16" → "16 October 2026" / "2026年10月16日" / "2026년 10월 16일" */
export function formatDay(value: string, lang: Lang) {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return value;
  if (lang === "en") return `${d} ${EN_MONTHS[m - 1]} ${y}`;
  if (lang === "ko") return `${y}년 ${m}월 ${d}일`;
  return `${y}年${m}月${d}日`;
}
