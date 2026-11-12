import { Shell } from "@/components/chrome";
import { OtherChannels } from "@/components/other-channels";
import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { PhotoCredit } from "@/components/photo-credit";
import { Reviews } from "@/components/reviews";
import { SellingPoints } from "@/components/selling-points";
import { KojohamaPromo } from "@/components/kojohama-promo";
import { house } from "@/data/active";
import { photoAlt } from "@/data/facts";
import { useLang } from "@/lib/i18n";
import { apartmentSummary } from "@/data/property-facts";
import { AVAILABILITY_NOTE } from "@/data/availability";

export function Home() {
  const { lang } = useLang();
  const t = house().copy;
  const g = house().guides;
  const c = t.captions;

  return (
    <Shell>
      <section className="hero">
        {/* Interiors sell short stays; the exterior keeps its place in "the house" section below. */}
        <Photo className="hero-img" src="/photos/b-living.jpg" alt={c.bLiving} priority sizes="100vw" />
        <div className="hero-overlay">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.lede}</p>
          <SellingPoints items={g.points.home} />
          {AVAILABILITY_NOTE[lang] ? <p className="hero-note">{AVAILABILITY_NOTE[lang]}</p> : null}
          <div className="hero-actions">
            <PageLink page="a" className="button button-light">
              {t.hero.a}
            </PageLink>
            <PageLink page="b" className="button button-quiet">
              {t.hero.b}
            </PageLink>
          </div>
        </div>
      </section>

      <section className="choices-section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.choicesTitle}</h2>
            <p>{t.choicesLede}</p>
          </div>
          <div className="choices">
            <article className="choice choice-a">
              <Photo className="choice-photo" src="/photos/open.jpg" alt={photoAlt("/photos/open.jpg", lang)} sizes="(max-width: 860px) calc(100vw - 1.6rem), (max-width: 1160px) 48vw, 554px" />
              <span className="choice-kicker" aria-hidden="true">A</span>
              <h3 className="choice-name">
                {/* Stretched link: the whole card opens the apartment page. */}
                <PageLink page="a">{t.aCard.name}</PageLink>
              </h3>
              <p className="choice-line">{t.aCard.line}</p>
              <dl className="choice-facts">
                {apartmentSummary("a", lang).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
              <div className="choice-actions">
                <PageLink page="a" className="choice-link">{t.aCard.cta}</PageLink>
                <AirbnbLink cabin="a" location="home-a" className="choice-book">
                  {t.bookA}
                </AirbnbLink>
              </div>
            </article>
            <article className="choice choice-b">
              <Photo className="choice-photo" src="/photos/b-dining.jpg" alt={photoAlt("/photos/b-dining.jpg", lang)} sizes="(max-width: 860px) calc(100vw - 1.6rem), (max-width: 1160px) 48vw, 554px" />
              <span className="choice-kicker" aria-hidden="true">B</span>
              <h3 className="choice-name">
                {/* Stretched link: the whole card opens the apartment page. */}
                <PageLink page="b">{t.bCard.name}</PageLink>
              </h3>
              <p className="choice-line">{t.bCard.line}</p>
              <dl className="choice-facts">
                {apartmentSummary("b", lang).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
              <div className="choice-actions">
                <PageLink page="b" className="choice-link">{t.bCard.cta}</PageLink>
                <AirbnbLink cabin="b" location="home-b" className="choice-book">
                  {t.bookB}
                </AirbnbLink>
              </div>
            </article>
          </div>
          <OtherChannels location="home" />
        </div>
      </section>

      <Reviews which="home" />

      <section className="intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.intro.eyebrow}</p>
          <h2>{t.intro.title}</h2>
          {t.intro.body.slice(0, 1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="practical">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t.practical.eyebrow}</p>
            <h2>{t.practical.title}</h2>
          </div>
          <dl className="fact-grid">
            {t.practical.items.map((item) => (
              <div key={item.k}>
                <dt>{item.k}</dt>
                <dd>{item.v}</dd>
              </div>
            ))}
          </dl>
          <PageLink page="arrival" className="text-link">
            {t.practical.cta}
          </PageLink>
        </div>
      </section>
      <section className="seasons" id="seasons">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t.seasons.eyebrow}</p>
            <h2>{t.seasons.title}</h2>
          </div>
          <div className="season-grid">
            <article className="season">
              <figure>
                <Photo src="/photos/teine.jpg" alt={t.seasons.winter.alt} sizes="(max-width: 860px) 100vw, 554px" />
                <figcaption><PhotoCredit text={t.seasons.winter.credit} src="/photos/teine.jpg" lang={lang} /></figcaption>
              </figure>
              <p className="eyebrow">{t.seasons.winter.label}</p>
              <h3>{t.seasons.winter.title}</h3>
              {t.seasons.winter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="season-links">
                <PageLink page="teine-ski" className="text-link">{t.seasons.winter.teine}</PageLink>
                <PageLink page="snow-festival" className="text-link">{t.seasons.winter.snow}</PageLink>
              </p>
            </article>
            <article className="season">
              <figure>
                <Photo src="/photos/furano.jpg" alt={t.seasons.summer.alt} sizes="(max-width: 860px) 100vw, 554px" />
                <figcaption><PhotoCredit text={t.seasons.summer.credit} src="/photos/furano.jpg" lang={lang} /></figcaption>
              </figure>
              <p className="eyebrow">{t.seasons.summer.label}</p>
              <h3>{t.seasons.summer.title}</h3>
              {t.seasons.summer.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="season-links">
                <PageLink page="day-trips" className="text-link">{t.seasons.summer.trips}</PageLink>
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="home-nomad" id="long-stay">
        <div className="wrap stay-split">
          <div>
            <p className="eyebrow">{t.nomad.eyebrow}</p>
            <h2>{t.nomad.title}</h2>
            <p className="lede">{t.nomad.lede}</p>
            {t.nomad.body.slice(0, 1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <PageLink page="long-stay" className="button button-dark">
              {g.longCta}
            </PageLink>
            <PageLink page="teine-ski" className="text-link">{g.teineMore}</PageLink>
            <PageLink page="neighborhood" className="text-link">{t.nav.neighborhood}</PageLink>
          </div>
          <Photo src="/photos/dining-2.jpg" alt={c.workTable} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="ambient">
        <Photo src="/photos/street.jpg" alt={photoAlt("/photos/street.jpg", lang)} sizes="100vw" />
        <div className="ambient-copy">
          <p className="eyebrow">{t.neighborhoodTeaser.eyebrow}</p>
          <h2>{t.neighborhoodTeaser.title}</h2>
          <p>{t.neighborhoodTeaser.body}</p>
          <PageLink page="neighborhood" className="button button-light">
            {t.neighborhoodTeaser.cta}
          </PageLink>
        </div>
      </section>

      <section className="card-section">
        <div className="wrap narrow">
          <p className="eyebrow">{t.dayTrips.eyebrow}</p>
          <h2>{t.dayTrips.homeTitle}</h2>
          <p>{t.dayTrips.homeBody}</p>
          <PageLink page="day-trips" className="button button-dark">
            {t.dayTrips.homeCta}
          </PageLink>
        </div>
      </section>

      <KojohamaPromo from="home" />
    </Shell>
  );
}
