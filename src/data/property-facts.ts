import type { Lang } from "@/lib/paths";

// Owner-confirmed on 6 October 2026. Change these values before changing translated copy.
export const PROPERTY_FACTS = {
  confirmedOn: "2026-10-06",
  parking: { carsPerApartment: 1, free: true },
  damage: { minimumJPY: 15000, basis: "actual repair costs" },
  a: { areaM2: 65, bedrooms: 2, beds: 3, bedsPerBedroom: [2, 1], bedType: "Double", maxGuests: 4, floor: 1 },
  b: { areaM2: 65, bedrooms: 1, beds: 3, bedType: "Single", maxGuests: 3, floor: 2 },
} as const;

export const DAMAGE_POLICY: Record<Lang, string> = {
  en: `Damage is charged at actual repair cost, with a minimum charge of ¥${PROPERTY_FACTS.damage.minimumJPY.toLocaleString("en-US")}.`,
  ja: `破損時は実際の修理費を請求します。最低請求額は${PROPERTY_FACTS.damage.minimumJPY.toLocaleString("en-US")}円です。`,
  zh: `损坏费用按实际维修成本收取，最低收费为 ${PROPERTY_FACTS.damage.minimumJPY.toLocaleString("en-US")} 日元。`,
  ko: `파손 시 실제 수리 비용을 청구하며, 최소 청구액은 ${PROPERTY_FACTS.damage.minimumJPY.toLocaleString("en-US")}엔입니다.`,
};

export function apartmentSummary(id: "a" | "b", lang: Lang) {
  const p = PROPERTY_FACTS[id];
  const labels = {
    en: ["Guests", "Bedrooms", "Beds", "Size", "Floor", "Parking"],
    ja: ["定員", "寝室", "ベッド", "広さ", "階", "駐車場"],
    zh: ["人数", "卧室", "床", "面积", "楼层", "停车"],
    ko: ["정원", "침실", "침대", "면적", "층", "주차"],
  }[lang];
  const values = {
    en: [`Up to ${p.maxGuests}`, `${p.bedrooms}`, `${p.beds} ${id === "a" ? "double" : "single"} beds`, `About ${p.areaM2} m²`, id === "a" ? "Ground floor" : "Second floor · stairs", "Free · one car"],
    ja: [`${p.maxGuests}名まで`, `${p.bedrooms}室`, `${id === "a" ? "ダブル" : "シングル"}${p.beds}台`, `約${p.areaM2}㎡`, id === "a" ? "1階" : "2階・階段あり", "無料・1台"],
    zh: [`最多${p.maxGuests}人`, `${p.bedrooms}间`, `${p.beds}张${id === "a" ? "双人床" : "单人床"}`, `约${p.areaM2}㎡`, id === "a" ? "一楼" : "二楼・需走楼梯", "免费・一辆"],
    ko: [`최대 ${p.maxGuests}명`, `${p.bedrooms}개`, `${id === "a" ? "더블" : "싱글"} ${p.beds}개`, `약 ${p.areaM2}㎡`, id === "a" ? "1층" : "2층 · 계단", "무료 · 1대"],
  }[lang];
  return labels.map((label, i) => [label, values[i]] as [string, string]);
}

export const A_BED_LAYOUT: Record<Lang, string> = {
  en: "Two double beds in one bedroom; one double bed in the other. Maximum four guests.",
  ja: "ひとつの寝室にダブルベッド2台、もうひとつに1台。定員は4名です。",
  zh: "一间卧室有两张双人床，另一间有一张双人床。最多入住四人。",
  ko: "한 침실에는 더블 침대 2개, 다른 침실에는 1개가 있습니다. 최대 4명입니다.",
};

// Existing bedroom photographs predate the owner's current bed-layout confirmation.
export const A_PHOTO_LAYOUT_NOTE: Record<Lang, string> = {
  en: "Some bedroom photos show an earlier bed arrangement. The current setup is three double beds: two in one bedroom and one in the other, for a maximum of four guests.",
  ja: "一部の寝室写真は以前のベッド配置です。現在はダブルベッドが合計3台（ひとつの寝室に2台、もうひとつに1台）で、定員は4名です。",
  zh: "部分卧室照片显示的是以前的床位安排。目前共有三张双人床（一间卧室两张，另一间一张），最多入住四人。",
  ko: "일부 침실 사진은 이전 침대 배치를 보여 줍니다. 현재 더블 침대는 총 3개(한 침실에 2개, 다른 침실에 1개)이며 최대 4명입니다.",
};
