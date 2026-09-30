import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ja" | "zh" | "ko";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "casa-antonio-lang";
const LANGS: Lang[] = ["en", "ja", "zh", "ko"];

const HTML_LANG: Record<Lang, string> = {
  en: "en",
  ja: "ja",
  zh: "zh-Hans",
  ko: "ko",
};

function isLang(value: string | null): value is Lang {
  return value !== null && LANGS.includes(value as Lang);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = HTML_LANG[next];
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error("useLang must be used within LanguageProvider");
  return value;
}
