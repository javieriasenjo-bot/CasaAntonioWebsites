import type { Lang } from "@/lib/paths";

// Owner-confirmed on 6 October 2026. Change these values before changing translated copy.
export const PROPERTY_FACTS = {
  confirmedOn: "2026-10-06",
  parking: { carsPerApartment: 1, free: true },
  damage: { minimumJPY: 15000, basis: "actual repair costs" },
  bedWidthsCM: { Single: 90, Double: 130 },
  arrival: { checkin: "16:00–23:00", checkout: "10:00" },
  bStairs: { approximateSteps: 25, handrail: true },
  a: { areaM2: 65, bedrooms: 2, beds: [{ type: "Single", count: 3 }, { type: "Double", count: 1 }], maxGuests: 4, floor: 1 },
  b: { areaM2: 65, bedrooms: 1, beds: [{ type: "Single", count: 3 }], maxGuests: 3, floor: 2 },
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
    en: [`Up to ${p.maxGuests}`, `${p.bedrooms}`, bedSummary(id, lang), `About ${p.areaM2} m²`, id === "a" ? "Ground floor" : "Second floor · stairs", "Free · one car"],
    ja: [`${p.maxGuests}名まで`, `${p.bedrooms}室`, bedSummary(id, lang), `約${p.areaM2}㎡`, id === "a" ? "1階" : "2階・階段あり", "無料・1台"],
    zh: [`最多${p.maxGuests}人`, `${p.bedrooms}间`, bedSummary(id, lang), `约${p.areaM2}㎡`, id === "a" ? "一楼" : "二楼・需走楼梯", "免费・一辆"],
    ko: [`최대 ${p.maxGuests}명`, `${p.bedrooms}개`, bedSummary(id, lang), `약 ${p.areaM2}㎡`, id === "a" ? "1층" : "2층 · 계단", "무료 · 1대"],
  }[lang];
  return labels.map((label, i) => [label, values[i]] as [string, string]);
}

export function bedSummary(id: "a" | "b", lang: Lang) {
  const labels = { en: { Single: "single beds", Double: "double bed" }, ja: { Single: "シングル", Double: "ダブル" }, zh: { Single: "单人床", Double: "双人床" }, ko: { Single: "싱글", Double: "더블" } }[lang];
  return PROPERTY_FACTS[id].beds.map(b => lang === "ja" ? `${labels[b.type]}${b.count}台` : lang === "zh" ? `${b.count}张${labels[b.type]}` : lang === "ko" ? `${labels[b.type]} ${b.count}개` : `${b.count} ${labels[b.type]}`).join(" + ");
}

export const A_BED_LAYOUT: Record<Lang, string> = {
  en: "The bedroom beside the living room has two single beds. The bedroom farther from the living room has one single and one double bed. Maximum four guests.",
  ja: "居間の隣の寝室はシングルベッド2台。居間から離れた寝室はシングル1台とダブル1台です。定員は4名です。",
  zh: "客厅旁的卧室有两张单人床，离客厅较远的卧室有一张单人床和一张双人床。最多入住四人。",
  ko: "거실 옆 침실에는 싱글 침대 2개, 거실에서 더 먼 침실에는 싱글 1개와 더블 1개가 있습니다. 최대 4명입니다.",
};

// The owner confirmed that the existing photographs show this arrangement.
export const A_PHOTO_LAYOUT_NOTE: Record<Lang, string> = {
  en: "Bedroom photos show the current setup: three single beds and one double bed across two rooms, maximum four guests.",
  ja: "寝室写真は現在の配置です。2室にシングルベッド3台とダブルベッド1台、定員4名です。",
  zh: "卧室照片展示当前床位安排：两间卧室共有三张单人床和一张双人床，最多四人。",
  ko: "침실 사진은 현재 배치입니다. 두 침실에 싱글 침대 3개와 더블 침대 1개, 최대 4명입니다.",
};

export function practicalGuestFacts(id: "a" | "b", lang: Lang): [string, string][] {
  const labels = {
    en: ["Bed widths", "Arrival / departure", "Parking", "Laundry", "Access"],
    ja: ["ベッド幅", "チェックイン・アウト", "駐車場", "洗濯", "アクセス"],
    zh: ["床宽", "入住与退房", "停车", "洗衣", "进出"],
    ko: ["침대 폭", "체크인·체크아웃", "주차", "세탁", "출입"],
  }[lang];
  const widths = PROPERTY_FACTS.bedWidthsCM;
  const steps = PROPERTY_FACTS.bStairs.approximateSteps;
  const { checkin, checkout } = PROPERTY_FACTS.arrival;
  const values = {
    en: [`Singles ${widths.Single} cm${id === "a" ? ` · double ${widths.Double} cm` : ""}`, `Self check-in ${checkin} · check-out by ${checkout}`, "One free space per apartment, suitable for a large car. Tell the host when booking.", id === "b" ? "Washing machine and space to hang and dry clothes in the laundry room" : "Washing machine and drying rack for clothes", id === "b" ? `Second floor · approximately ${steps} steps with a handrail` : "Ground floor"],
    ja: [`シングル${widths.Single}cm${id === "a" ? `・ダブル${widths.Double}cm` : ""}`, `セルフチェックイン${checkin}・チェックアウト${checkout}まで`, "各部屋1台無料。大型車も駐車可能。利用する場合は予約時にお知らせください", id === "b" ? "洗濯機と、洗濯室内の物干しスペース" : "洗濯機と物干しラック", id === "b" ? `2階・約${steps}段の階段（手すりあり）` : "1階"],
    zh: [`单人床${widths.Single}厘米${id === "a" ? `・双人床${widths.Double}厘米` : ""}`, `自助入住${checkin}・${checkout}前退房`, "每套公寓免费停一辆车，可停大型汽车。使用车位请在预订时告知房东", id === "b" ? "洗衣机及洗衣房内的晾衣空间" : "洗衣机及晾衣架", id === "b" ? `二楼・约${steps}级台阶，设有扶手` : "一楼"],
    ko: [`싱글 ${widths.Single}cm${id === "a" ? ` · 더블 ${widths.Double}cm` : ""}`, `셀프 체크인 ${checkin} · 체크아웃 ${checkout}까지`, "아파트당 무료 주차 1대, 대형 차량도 주차 가능. 이용 시 예약할 때 호스트에게 알려 주세요", id === "b" ? "세탁기와 세탁실 안의 빨래 건조 공간" : "세탁기와 빨래 건조대", id === "b" ? `2층 · 약 ${steps}개 계단, 손잡이 있음` : "1층"],
  }[lang];
  return labels.map((label, i) => [label, values[i]]);
}
