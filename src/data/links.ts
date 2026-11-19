import type { Lang } from "@/lib/paths";

// Single source for the property address, the booking link and sister-site links.
export const ADDRESS = {
  postalCode: "001-0038",
  region: "北海道",
  locality: "札幌市北区",
  street: "北38条西3丁目1-7",
  full: "〒001-0038 北海道札幌市北区北38条西3丁目1-7",
} as const;

export const GUEST_EMAIL = "admin@kagami-planning.com";

// The one booking link: Airhost's booking engine (the same link on every page and language).
const AIRHOST_URL = "https://kagamiplanning.airhost.co/";

export function airhostUrl(_lang?: Lang) {
  return AIRHOST_URL;
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
