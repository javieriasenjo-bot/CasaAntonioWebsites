import type { Lang } from "@/lib/paths";

// Single source for the property address and outbound booking / sister-site links.
export const ADDRESS = {
  postalCode: "001-0038",
  region: "北海道",
  locality: "札幌市北区",
  street: "北38条西3丁目1-7",
  full: "〒001-0038 北海道札幌市北区北38条西3丁目1-7",
} as const;

export const GUEST_EMAIL = "admin@kagami-planning.com";

const AIRBNB_ROOM = { a: "1810204332727383544", b: "1810193700504259008" } as const;

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

// Other booking channels. One combined listing per channel covers both apartments (A and B).
// Added 12 Nov 2026. The Chinese page uses Ctrip (Trip.com's mainland site); the other languages use Trip.com.
export const BOOKING_COM = "https://www.booking.com/hotel/jp/casa-antonio.html";

const TRIP_COM: Record<Lang, string> = {
  en: "https://www.trip.com/hotels/detail/?hotelId=136555119",
  ja: "https://www.trip.com/hotels/detail/?hotelId=136555119",
  zh: "https://hotels.ctrip.com/hotels/136555119.html",
  ko: "https://www.trip.com/hotels/detail/?hotelId=136555119",
};

export const TRIP_COM_EN = TRIP_COM.en;

export function tripUrl(lang: Lang) {
  return TRIP_COM[lang];
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
