import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { AIRBNB, copy } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function Shell({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLang();
  const t = copy[lang];
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#content">
        {lang === "ja" ? "本文へ" : "Skip to content"}
      </a>
      <header className="site-header">
        <div className="nav-inner">
          <Link to="/" className="logo">
            Casa Antonio <span>Sapporo</span>
          </Link>
          <div className="header-tools">
            <nav aria-label={lang === "ja" ? "主要" : "Primary"}>
              <Link to="/casa-antonio-a" data-active={path === "/casa-antonio-a" ? "true" : undefined}>
                {t.nav.a}
              </Link>
              <Link to="/casa-antonio-b" data-active={path === "/casa-antonio-b" ? "true" : undefined}>
                {t.nav.b}
              </Link>
              <Link to="/neighborhood" data-active={path === "/neighborhood" ? "true" : undefined}>
                {t.nav.neighborhood}
              </Link>
              <Link to="/arrival" data-active={path === "/arrival" ? "true" : undefined}>
                {t.nav.arrival}
              </Link>
            </nav>
            <div className="language-switcher" role="group" aria-label={lang === "ja" ? "言語" : "Language"}>
              <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
                EN
              </button>
              <button type="button" className={lang === "ja" ? "active" : ""} onClick={() => setLang("ja")}>
                日本語
              </button>
            </div>
          </div>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer className="site-footer">
        <div className="wrap">
          <p className="footer-brand">Casa Antonio</p>
          <p>{t.footer.line}</p>
          <p>{t.footer.address}</p>
          <p className="small">{t.footer.licenses}</p>
          <p className="footer-links">
            <a href={AIRBNB.a} target="_blank" rel="noreferrer">
              Airbnb · A
            </a>
            <a href={AIRBNB.b} target="_blank" rel="noreferrer">
              Airbnb · B
            </a>
            <Link to="/arrival">{t.nav.arrival}</Link>
          </p>
          <p className="small credit">{t.footer.photo}</p>
        </div>
      </footer>
      <div className="quick-reserve">
        {open ? (
          <div className="quick-reserve-menu">
            <div className="quick-reserve-menu-head">
              <strong>{t.reserve.title}</strong>
              <button type="button" className="quick-reserve-close" onClick={() => setOpen(false)} aria-label={t.reserve.close}>
                ×
              </button>
            </div>
            <a href={AIRBNB.a} target="_blank" rel="noreferrer">
              {t.reserve.a}
            </a>
            <a href={AIRBNB.b} target="_blank" rel="noreferrer">
              {t.reserve.b}
            </a>
          </div>
        ) : null}
        <button type="button" className="quick-reserve-trigger" onClick={() => setOpen((value) => !value)}>
          {t.reserve.label}
        </button>
      </div>
    </>
  );
}
