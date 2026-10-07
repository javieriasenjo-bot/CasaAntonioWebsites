import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { PhotoCredit } from "@/components/photo-credit";
import { Shell } from "@/components/chrome";
import { house } from "@/data/active";
import { OFFICIAL, OfficialLinks } from "@/components/official-links";
import { FAQ } from "@/lib/seo";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { airportBoardingText } from "@/data/travel-facts";

export function FaqList() {
  const { lang } = useLang();
  const items = FAQ[lang];
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

const ADDRESS_JP = "〒001-0038 北海道札幌市北区北38条西3丁目1-7";
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_JP)}`;

function AddressActions() {
  const g = house().guides;
  const { lang } = useLang();
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const addressRef = useRef<HTMLParagraphElement>(null);
  const resetRef = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(resetRef.current), []);
  const manual = {
    en: "Automatic copying is unavailable. The address is selected; touch and hold it, or use your browser’s Copy command.",
    ja: "自動コピーができません。住所を選択しました。長押しするか、ブラウザのコピー機能をご利用ください。",
    zh: "无法自动复制。地址已选中，请长按地址或使用浏览器的复制功能。",
    ko: "자동 복사가 불가능합니다. 주소가 선택되었습니다. 길게 누르거나 브라우저의 복사 기능을 사용하세요.",
  }[lang];
  const copy = async () => {
    window.clearTimeout(resetRef.current);
    try {
      await navigator.clipboard.writeText(ADDRESS_JP);
      setStatus("copied");
      resetRef.current = window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      if (addressRef.current) {
        const range = document.createRange();
        range.selectNodeContents(addressRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus("manual");
    }
  };
  return (
    <div className="address-actions">
      <p lang="ja" ref={addressRef}>{ADDRESS_JP}</p>
      <div className="stay-actions">
        <button type="button" className="button button-line copy-address" onClick={copy}>
          {status === "copied" ? g.copied : g.copyAddress}
        </button>
        <a className="button button-line" href={DIRECTIONS} data-map-provider="google" target="_blank" rel="noopener">
          {g.directions} ↗
        </a>
      </div>
      <p aria-live="polite" className={status === "manual" ? "photo-note" : "sr-only"}>
        {status === "copied" ? g.copied : status === "manual" ? manual : ""}
      </p>
    </div>
  );
}

function BookBoth() {
  const { lang } = useLang();
  const g = house().guides;
  return (
    <div className="stay-actions">
      <AirbnbLink cabin="a" location="footer" className="button button-dark">
        {g.bookA}
      </AirbnbLink>
      <AirbnbLink cabin="b" location="footer" className="button button-wood">
        {g.bookB}
      </AirbnbLink>
    </div>
  );
}

export function AccessPage() {
  const { lang } = useLang();
  const page = house().guides.access;
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap">
          <dl className="fact-grid">
            {page.facts.map((item) => (
              <div key={item.k}>
                <dt>{item.k}</dt>
                <dd>{item.v}</dd>
              </div>
            ))}
          </dl>
          <Photo src="/photos/street.jpg" alt={page.title} sizes="(max-width: 900px) 100vw, 1120px" />
          {page.blocks.map((block) => (
            <div className="prose" key={block.h}>
              <h2>{block.h}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <AddressActions />
          <p className="arrival-boarding">{airportBoardingText(lang)}</p>
          <OfficialLinks items={OFFICIAL.access} />
          <BookBoth />
        </div>
      </section>
    </Shell>
  );
}

export function SnowPage() {
  const { lang } = useLang();
  const page = house().guides.snow;
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap prose-page">
          <Photo src="/photos/exterior.jpg" alt="" sizes="(max-width: 900px) 100vw, 1120px" />
          {page.blocks.map((block) => (
            <div className="prose" key={block.h}>
              <h2>{block.h}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            <PageLink page="access" className="text-link">
              {house().guides.footerLinks[0]?.label}
            </PageLink>
          </p>
          <OfficialLinks items={OFFICIAL.snow} />
          <BookBoth />
        </div>
      </section>
    </Shell>
  );
}

export function TeinePage() {
  const { lang } = useLang();
  const page = house().guides.teine;
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap">
          <figure className="ski-figure">
            <Photo src="/photos/teine.jpg" alt={page.title} sizes="(max-width: 900px) 100vw, 1120px" />
            <figcaption><PhotoCredit text={page.credit} src="/photos/teine.jpg" lang={lang} /></figcaption>
          </figure>
          {page.blocks.map((block) => (
            <div className="prose" key={block.h}>
              <h2>{block.h}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            <PageLink page="neighborhood" hash="ski" className="text-link">
              {house().copy.nav.neighborhood}
            </PageLink>
          </p>
          <OfficialLinks items={OFFICIAL.teine} />
          <BookBoth />
        </div>
      </section>
    </Shell>
  );
}

export function LongStayPage() {
  const { lang } = useLang();
  const t = house().copy.longStay;
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
          <div className="stay-actions">
            <AirbnbLink cabin="a" location="long-stay-top" intent="inquiry" className="button button-dark">{t.ctaA}</AirbnbLink>
            <AirbnbLink cabin="b" location="long-stay-top" intent="inquiry" className="button button-wood">{t.ctaB}</AirbnbLink>
          </div>
          <p className="photo-note">{t.note}</p>
          <Photo className="guide-photo" src="/photos/dining-2.jpg" alt={t.title} sizes="(max-width: 900px) 100vw, 1120px" />
        </div>
      </section>
      <section className="long-stay">
        <div className="wrap">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="fact-grid">
            {t.points.map((item) => (
              <div key={item.k}>
                <dt>{item.k}</dt>
                <dd>{item.v}</dd>
              </div>
            ))}
          </dl>
          <p className="photo-note">{t.note}</p>
          <div className="stay-actions">
            <AirbnbLink cabin="a" location="long-stay" intent="inquiry" className="button button-dark">
              {t.ctaA}
            </AirbnbLink>
            <AirbnbLink cabin="b" location="long-stay" intent="inquiry" className="button button-wood">
              {t.ctaB}
            </AirbnbLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}

export function FaqPage() {
  const { lang } = useLang();
  const metaTitle = lang === "ja" ? "泊まる前に" : lang === "zh" ? "预订之前" : lang === "ko" ? "묵기 전에" : "Before you book";
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">Casa Antonio</p>
          <h1>{metaTitle}</h1>
          <Photo className="guide-photo" src="/photos/exterior.jpg" alt={metaTitle} sizes="(max-width: 900px) 100vw, 740px" />
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap narrow">
          <FaqList />
          <BookBoth />
        </div>
      </section>
    </Shell>
  );
}

export function ComboPage() {
  const { lang } = useLang();
  const page = house().guides.combo;
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap prose-page">
          {page.blocks.map((block) => (
            <div className="prose" key={block.h}>
              <h2>{block.h}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            <a className="text-link" href="https://kojohamacabins.jp/">
              Kojohama Cabins
            </a>
          </p>
          <BookBoth />
        </div>
      </section>
    </Shell>
  );
}

export function NotFoundPage() {
  const { lang } = useLang();
  const g = house().guides;
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <h1>{g.notFoundTitle}</h1>
          <p>{g.notFoundBody}</p>
          <p className="footer-links">
            <PageLink page="home">{house().copy.stayShared.back}</PageLink>
            <PageLink page="a">{house().copy.nav.a}</PageLink>
            <PageLink page="b">{house().copy.nav.b}</PageLink>
          </p>
        </div>
      </section>
    </Shell>
  );
}
