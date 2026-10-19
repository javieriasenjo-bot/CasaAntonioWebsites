import type { Lang } from "@/lib/paths";

// Single source for the property address and outbound booking / sister-site links.
export const ADDRESS = {
  postalCode: "001-0038",
  region: "北海道",
  locality: "札幌市北区",
  street: "北38条西3丁目1-7",
  full: "〒001-0038 北海道札幌市北区北38条西3丁目1-7",
} as const;

const AIRBNB_ROOM = { a: "1248284267045468378", b: "1248260873560502499" } as const;

// Canonical listing URLs (structured data, documentation).
export const AIRBNB = {
  a: `https://www.airbnb.com/rooms/${AIRBNB_ROOM.a}`,
  b: `https://www.airbnb.com/rooms/${AIRBNB_ROOM.b}`,
} as const;

// Airbnb's own language sites, so logged-out guests land on the listing in the page's language.
// Checked 19 Oct 2026: each host opens both listings in the expected language.
const AIRBNB_HOST: Record<Lang, string> = {
  en: "https://www.airbnb.com",
  ja: "https://www.airbnb.jp",
  zh: "https://zh.airbnb.com",
  ko: "https://www.airbnb.co.kr",
};

export function airbnbUrl(cabin: "a" | "b", lang: Lang) {
  return `${AIRBNB_HOST[lang]}/rooms/${AIRBNB_ROOM[cabin]}`;
}

const KOJOHAMA_SITE: Record<Lang, string> = {
  en: "https://kojohamacabins.jp/",
  ja: "https://kojohamacabins.jp/ja/",
  zh: "https://kojohamacabins.jp/zh-cn/",
  ko: "https://kojohamacabins.jp/ko/",
};

// Sister-site links keep the referrer and carry UTM tags so Kojohama's analytics can attribute them.
export function kojohamaUrl(lang: Lang, from: string) {
  return `${KOJOHAMA_SITE[lang]}?utm_source=casaantonio.jp&utm_medium=referral&utm_campaign=crosslink&utm_content=${from}`;
}
