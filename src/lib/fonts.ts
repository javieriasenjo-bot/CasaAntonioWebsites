type FontLang = "en" | "ja" | "zh" | "ko";

export const FONT_STYLESHEET: Record<FontLang, string> = {
  en: "https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600&display=swap",
  ja: "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600&display=swap",
  zh: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;600&display=swap",
  ko: "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;600&display=swap",
};

export function ensureFont(lang: FontLang) {
  const id = "casa-font";
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (link?.dataset.lang === lang && link.href) return;
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.media = "print";
  link.onload = () => {
    link.media = "all";
  };
  link.dataset.lang = lang;
  link.href = FONT_STYLESHEET[lang];
}
