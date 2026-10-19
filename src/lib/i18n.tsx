import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ensureFont } from "@/lib/fonts";
import { HTML_LANG, langFromPath, type Lang } from "@/lib/paths";

export type { Lang };

export type LangSuggestion = { lang: Lang; reason: "saved" | "browser" };

type LangContextValue = {
  pathname: string;
  lang: Lang;
  suggestion: LangSuggestion | null;
  dismissSuggestion: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "casa-antonio-lang";
const DISMISS_KEY = "casa-lang-banner-dismissed";

function isLang(value: string | null | undefined): value is Lang {
  return value === "en" || value === "ja" || value === "zh" || value === "ko";
}

// First supported language in the browser's preference list (zh-TW/zh-HK also read Chinese best).
function browserLang(): Lang | null {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of tags) {
    const base = tag?.toLowerCase().split("-")[0];
    if (isLang(base)) return base;
  }
  return null;
}

export function LanguageProvider({ pathname, children }: { pathname: string; children: ReactNode }) {
  const lang = langFromPath(pathname);
  const [suggestion, setSuggestion] = useState<LangSuggestion | null>(null);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
    ensureFont(lang);
    let saved: string | null = null;
    let dismissed = false;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      saved = null;
    }
    if (dismissed) {
      setSuggestion(null);
    } else if (isLang(saved)) {
      // A language the visitor chose before wins over the browser setting.
      setSuggestion(saved !== lang ? { lang: saved, reason: "saved" } : null);
    } else {
      // First visit (often from a social link that lands on English): offer the browser's language.
      const preferred = browserLang();
      setSuggestion(preferred && preferred !== lang ? { lang: preferred, reason: "browser" } : null);
    }
  }, [lang]);

  const dismissSuggestion = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    // "Stay in this language" after a browser-based offer is a choice worth keeping across visits.
    if (suggestion?.reason === "browser") rememberLang(lang);
    setSuggestion(null);
  };

  return (
    <LangContext.Provider value={{ pathname, lang, suggestion, dismissSuggestion }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang must be used within LanguageProvider");
  return value;
}

export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}
