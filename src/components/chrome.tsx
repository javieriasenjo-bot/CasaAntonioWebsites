import { useEffect, useRef, useState, type ReactNode } from "react";
import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { EmailLink } from "@/components/email-link";
import { kojohamaUrl } from "@/data/links";
import { house } from "@/data/active";
import { LANG_NAME } from "@/data/lang-name";
import { rememberLang, useLang, type Lang } from "@/lib/i18n";
import { HTML_LANG, pagePath, parsePath, type PageId } from "@/lib/paths";

const LANGS: Lang[] = ["en", "ja", "zh", "ko"];

// Shown in the suggested language itself, because the visitor may not read the current page's language.
const ALSO_IN: Record<Lang, { line: string; open: string }> = {
  en: { line: "This page is also available in English.", open: "View in English" },
  ja: { line: "このページは日本語でもご覧いただけます。", open: "日本語で見る" },
  zh: { line: "本页面也有中文版。", open: "查看中文版" },
  ko: { line: "이 페이지는 한국어로도 볼 수 있습니다.", open: "한국어로 보기" },
};

const NAV: { page: PageId; key: "a" | "b" | "longStay" | "neighborhood" | "trips" | "arrival" }[] = [
  { page: "a", key: "a" },
  { page: "b", key: "b" },
  { page: "long-stay", key: "longStay" },
  { page: "neighborhood", key: "neighborhood" },
  { page: "day-trips", key: "trips" },
  { page: "arrival", key: "arrival" },
];

export function Shell({ children }: { children: ReactNode }) {
  const { lang, pathname: path, suggestion, dismissSuggestion } = useLang();
  const t = house().copy;
  const g = house().guides;
  const page = parsePath(path)?.page ?? "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const closeReserve = () => {
    setReserveOpen(false);
    reserveRef.current?.querySelector<HTMLElement>(".quick-reserve-trigger")?.focus();
  };

  useEffect(() => {
    document.documentElement.classList.add("app-ready");
    // Respect a native menu opened before the page's JavaScript arrived.
    setMenuOpen(menuRef.current?.open ?? false);
    return () => document.documentElement.classList.remove("app-ready");
  }, []);

  useEffect(() => {
    if (!reserveOpen) return;
    reserveRef.current?.querySelector<HTMLElement>(".quick-reserve-menu a")?.focus();
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Element && !reserveRef.current?.contains(event.target)) {
        setReserveOpen(false);
        // Let a clicked link/control receive focus; otherwise return it after
        // the pointer's default action (which would undo immediate focus).
        if (!event.target.closest("a, button, input, select, textarea, [tabindex]")) {
          requestAnimationFrame(() => reserveRef.current?.querySelector<HTMLElement>(".quick-reserve-trigger")?.focus());
        }
      }
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [reserveOpen]);

  useEffect(() => {
    if (!menuOpen && !reserveOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const trigger = document.querySelector<HTMLElement>(menuOpen ? ".menu-toggle" : ".quick-reserve-trigger");
      setMenuOpen(false);
      if (menuRef.current) menuRef.current.open = false;
      setReserveOpen(false);
      trigger?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, reserveOpen]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let last = window.scrollY;
    const onScroll = () => {
      if (menuOpen) {
        setHeaderHidden(false);
        last = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const delta = y - last;
      if (y < 40) setHeaderHidden(false);
      else if (delta > 8) setHeaderHidden(true);
      else if (delta < -8) setHeaderHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const directCabin = page === "a" || page === "b" ? page : null;

  return (
    <>
      <a className="skip-link" href="#content">
        {t.chrome.skip}
      </a>
      <header className="site-header" data-hidden={headerHidden ? "true" : "false"} onFocusCapture={() => setHeaderHidden(false)}>
        <div className="nav-inner">
          <PageLink page="home" className="logo">
            Casa Antonio <span>Sapporo</span>
          </PageLink>
          <div className="header-tools">
            <details className="mobile-nav" ref={menuRef} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
              <summary className="menu-toggle">{g.menu}</summary>
              <nav id="site-nav" aria-label={t.chrome.nav} data-open={menuOpen ? "true" : "false"}>
                {NAV.map((item) => (
                  <PageLink
                    key={item.page}
                    page={item.page}
                    data-active={page === item.page ? "true" : undefined}
                    aria-current={page === item.page ? "page" : undefined}
                  >
                    {item.key === "longStay" ? g.longCta : t.nav[item.key]}
                  </PageLink>
                ))}
              </nav>
            </details>
            <nav className="desktop-nav" aria-label={t.chrome.nav}>
              {NAV.map((item) => (
                <PageLink
                  key={item.page}
                  page={item.page}
                  data-active={page === item.page ? "true" : undefined}
                  aria-current={page === item.page ? "page" : undefined}
                >
                  {item.key === "longStay" ? g.longCta : t.nav[item.key]}
                </PageLink>
              ))}
            </nav>
            <details className="language-menu">
              <summary className="language-toggle" aria-label={t.chrome.language}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
                </svg>
                <span>{LANG_NAME[lang]}</span>
              </summary>
              <div className="language-switcher" role="navigation" aria-label={t.chrome.language}>
              {LANGS.map((id) => {
                const href = pagePath(page, id);
                return (
                  <a
                    key={id}
                    href={href}
                    data-language={id}
                    hrefLang={HTML_LANG[id]}
                    lang={HTML_LANG[id]}
                    className={lang === id ? "active" : undefined}
                    aria-current={lang === id ? "true" : undefined}
                    onClick={() => {
                      rememberLang(id);
                    }}
                  >
                    {LANG_NAME[id]}
                  </a>
                );
              })}
              </div>
            </details>
          </div>
        </div>
        {suggestion ? (
          <div className="lang-banner">
            {suggestion.reason === "browser" ? (
              <p lang={HTML_LANG[suggestion.lang]}>{ALSO_IN[suggestion.lang].line}</p>
            ) : (
              <p>
                {g.banner} {LANG_NAME[suggestion.lang]}.
              </p>
            )}
            <a
              href={pagePath(page, suggestion.lang)}
              data-language={suggestion.lang}
              hrefLang={HTML_LANG[suggestion.lang]}
              lang={suggestion.reason === "browser" ? HTML_LANG[suggestion.lang] : undefined}
              onClick={() => {
                rememberLang(suggestion.lang);
              }}
            >
              {suggestion.reason === "browser" ? ALSO_IN[suggestion.lang].open : `${g.bannerOpen} ${LANG_NAME[suggestion.lang]}`}
            </a>
            <button type="button" onClick={dismissSuggestion}>
              {g.bannerStay}
            </button>
          </div>
        ) : null}
      </header>
      <main id="content" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="wrap">
          <p className="footer-brand">Casa Antonio</p>
          <p>{t.footer.line}</p>
          <p>{t.footer.address}</p>
          <p className="small">{t.footer.licenses}</p>
          <p className="footer-links">
            <AirbnbLink cabin="a" location="footer">
              Airbnb · A
            </AirbnbLink>
            <AirbnbLink cabin="b" location="footer">
              Airbnb · B
            </AirbnbLink>
            <PageLink page="arrival">{t.nav.arrival}</PageLink>
          </p>
          <p className="footer-links"><EmailLink placement="footer-email" /></p>
          <p className="footer-label">{g.footerGuides}</p>
          <p className="footer-links">
            {g.footerLinks.map((item) => (
              <PageLink key={item.page} page={item.page}>
                {item.label}
              </PageLink>
            ))}
          </p>
          <p className="coast-line">
            <strong>{g.coastTitle}.</strong> {g.coastBody}{" "}
            <a href={kojohamaUrl(lang, "footer")}>
              {g.coastCta}
            </a>
          </p>
          <p className="small credit">{t.footer.photo}</p>
        </div>
      </footer>
      <div className="quick-reserve" ref={reserveRef} onBlurCapture={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setReserveOpen(false);
      }}>
        {directCabin ? (
          <AirbnbLink
            cabin={directCabin}
            location={directCabin === "a" ? "stay-a" : "stay-b"}
            className="quick-reserve-trigger"
          >
            {t.reserve.label}
          </AirbnbLink>
        ) : (
          <>
            <div className="quick-reserve-fallback">
              <AirbnbLink cabin="a" location="reserve-fallback">{t.reserve.a}</AirbnbLink>
              <AirbnbLink cabin="b" location="reserve-fallback">{t.reserve.b}</AirbnbLink>
            </div>
            {reserveOpen ? (
              <div className="quick-reserve-menu" id="reserve-menu">
                <div className="quick-reserve-menu-head">
                  <strong>{t.reserve.title}</strong>
                  <button type="button" className="quick-reserve-close" onClick={closeReserve} aria-label={t.reserve.close}>
                    ×
                  </button>
                </div>
                <AirbnbLink cabin="a" location="quick-reserve">
                  {t.reserve.a}
                </AirbnbLink>
                <AirbnbLink cabin="b" location="quick-reserve">
                  {t.reserve.b}
                </AirbnbLink>
              </div>
            ) : null}
            <button
              type="button"
              className="quick-reserve-trigger"
              aria-expanded={reserveOpen}
              aria-controls="reserve-menu"
              onClick={() => setReserveOpen((value) => !value)}
            >
              {t.reserve.label}
            </button>
          </>
        )}
      </div>
    </>
  );
}
