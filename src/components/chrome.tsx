import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { house } from "@/data/active";
import { LANG_NAME } from "@/data/lang-name";
import { rememberLang, useLang, type Lang } from "@/lib/i18n";
import { HTML_LANG, pagePath, parsePath, type PageId } from "@/lib/paths";

const LANGS: Lang[] = ["en", "ja", "zh", "ko"];

const NAV: { page: PageId; key: "a" | "b" | "neighborhood" | "trips" | "arrival" }[] = [
  { page: "a", key: "a" },
  { page: "b", key: "b" },
  { page: "neighborhood", key: "neighborhood" },
  { page: "day-trips", key: "trips" },
  { page: "arrival", key: "arrival" },
];

export function Shell({ children }: { children: ReactNode }) {
  const { lang, suggestion, dismissSuggestion } = useLang();
  const t = house().copy;
  const g = house().guides;
  const path = useRouterState({ select: (state) => state.location.pathname });
  const page = parsePath(path)?.page ?? "home";
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setReserveOpen(false);
  }, [path]);

  useEffect(() => {
    if (!menuOpen && !reserveOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const trigger = document.querySelector<HTMLElement>(menuOpen ? ".menu-toggle" : ".quick-reserve-trigger");
      setMenuOpen(false);
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
      <header className="site-header" data-hidden={headerHidden ? "true" : "false"}>
        <div className="nav-inner">
          <PageLink page="home" className="logo">
            Casa Antonio <span>Sapporo</span>
          </PageLink>
          <div className="header-tools">
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? g.closeMenu : g.menu}
            </button>
            <nav id="site-nav" aria-label={t.chrome.nav} data-open={menuOpen ? "true" : "false"}>
              {NAV.map((item) => (
                <PageLink
                  key={item.page}
                  page={item.page}
                  data-active={page === item.page ? "true" : undefined}
                  aria-current={page === item.page ? "page" : undefined}
                >
                  {t.nav[item.key]}
                </PageLink>
              ))}
            </nav>
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
          </div>
        </div>
        {suggestion ? (
          <div className="lang-banner">
            <p>
              {g.banner} {LANG_NAME[suggestion]}.
            </p>
            <a
              href={pagePath(page, suggestion)}
              data-language={suggestion}
              hrefLang={HTML_LANG[suggestion]}
              onClick={() => {
                rememberLang(suggestion);
              }}
            >
              {g.bannerOpen} {LANG_NAME[suggestion]}
            </a>
            <button type="button" onClick={dismissSuggestion}>
              {g.bannerStay}
            </button>
          </div>
        ) : null}
      </header>
      <main id="content">{children}</main>
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
            <a href="https://kojohamacabins.jp/" rel="noopener noreferrer">
              {g.coastCta}
            </a>
          </p>
          <p className="small credit">{t.footer.photo}</p>
        </div>
      </footer>
      <div className="quick-reserve">
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
            {reserveOpen ? (
              <div className="quick-reserve-menu" id="reserve-menu">
                <div className="quick-reserve-menu-head">
                  <strong>{t.reserve.title}</strong>
                  <button type="button" className="quick-reserve-close" onClick={() => setReserveOpen(false)} aria-label={t.reserve.close}>
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
