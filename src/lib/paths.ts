export type Lang = "en" | "ja" | "zh" | "ko";

export const LANGS: Lang[] = ["en", "ja", "zh", "ko"];

export const HTML_LANG: Record<Lang, string> = {
  en: "en",
  ja: "ja",
  zh: "zh-Hans",
  ko: "ko",
};

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_CN",
  ko: "ko_KR",
};

export const LANG_PREFIX: Record<Lang, string> = {
  en: "",
  ja: "/ja",
  zh: "/zh-cn",
  ko: "/ko",
};

const PREFIX_LANG: Record<string, Lang> = {
  ja: "ja",
  "zh-cn": "zh",
  ko: "ko",
};

export const PAGE_IDS = [
  "home",
  "a",
  "b",
  "neighborhood",
  "day-trips",
  "arrival",
  "access",
  "snow-festival",
  "teine-ski",
  "long-stay",
  "combo",
  "faq",
  "privacy",
] as const;

export type PageId = (typeof PAGE_IDS)[number];

export const PAGE_SLUG: Record<PageId, string> = {
  home: "",
  a: "casa-antonio-a",
  b: "casa-antonio-b",
  neighborhood: "neighborhood",
  "day-trips": "day-trips",
  arrival: "arrival",
  access: "access",
  "snow-festival": "snow-festival",
  "teine-ski": "teine-ski",
  "long-stay": "long-stay",
  combo: "combo",
  faq: "faq",
  privacy: "privacy",
};

const SLUG_PAGE: Record<string, PageId> = {
  "casa-antonio-a": "a",
  "casa-antonio-b": "b",
  neighborhood: "neighborhood",
  "day-trips": "day-trips",
  arrival: "arrival",
  access: "access",
  "snow-festival": "snow-festival",
  "teine-ski": "teine-ski",
  "long-stay": "long-stay",
  combo: "combo",
  faq: "faq",
  privacy: "privacy",
};

export const ORIGIN = "https://casaantonio.jp";

export function pagePath(page: PageId, lang: Lang): string {
  const prefix = LANG_PREFIX[lang];
  const slug = PAGE_SLUG[page];
  if (!slug) return prefix ? `${prefix}/` : "/";
  return `${prefix}/${slug}/`;
}

export function absolutePage(page: PageId, lang: Lang): string {
  const path = pagePath(page, lang);
  return path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;
}

export function parsePath(pathname: string): { lang: Lang; page: PageId } | null {
  let path = pathname.trim();
  if (!path.startsWith("/")) path = `/${path}`;
  path = path.split("?")[0]?.split("#")[0] ?? path;
  path = path.replace(/\/+$/, "");
  if (path === "") return { lang: "en", page: "home" };

  const parts = path.split("/").filter(Boolean);
  const prefixed = PREFIX_LANG[parts[0] ?? ""];
  if (prefixed) {
    const rest = parts.slice(1);
    if (rest.length === 0) return { lang: prefixed, page: "home" };
    if (rest.length !== 1) return null;
    const page = SLUG_PAGE[rest[0] ?? ""];
    return page ? { lang: prefixed, page } : null;
  }
  if (parts.length !== 1) return null;
  const page = SLUG_PAGE[parts[0] ?? ""];
  return page ? { lang: "en", page } : null;
}

export function langFromPath(pathname: string): Lang {
  return parsePath(pathname)?.lang ?? "en";
}
