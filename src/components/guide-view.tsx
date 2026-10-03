import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { Shell } from "@/components/chrome";
import { house } from "@/data/active";
import { FAQ } from "@/lib/seo";
import { useLang } from "@/lib/i18n";

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
            <figcaption>{page.credit}</figcaption>
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
            <AirbnbLink cabin="a" location="long-stay" className="button button-dark">
              {t.ctaA}
            </AirbnbLink>
            <AirbnbLink cabin="b" location="long-stay" className="button button-wood">
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
