import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ensureFont } from "@/lib/fonts";
import { HTML_LANG, langFromPath, type Lang } from "@/lib/paths";

export type { Lang };

type LangContextValue = {
  lang: Lang;
  suggestion: Lang | null;
  dismissSuggestion: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "casa-antonio-lang";
const DISMISS_KEY = "casa-lang-banner-dismissed";

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "ja" || value === "zh" || value === "ko";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const lang = langFromPath(pathname);
  const [suggestion, setSuggestion] = useState<Lang | null>(null);

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
    setSuggestion(!dismissed && isLang(saved) && saved !== lang ? saved : null);
  }, [lang]);

  const dismissSuggestion = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setSuggestion(null);
  };

  return (
    <LangContext.Provider value={{ lang, suggestion, dismissSuggestion }}>{children}</LangContext.Provider>
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
