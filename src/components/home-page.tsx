import { Shell } from "@/components/chrome";
import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { Reviews } from "@/components/reviews";
import { SellingPoints } from "@/components/selling-points";
import { house } from "@/data/active";
import { useLang } from "@/lib/i18n";

export function Home() {
  const { lang } = useLang();
  const t = house().copy;
  const g = house().guides;
  const c = t.captions;

  return (
    <Shell>
      <section className="hero">
        <Photo className="hero-img" src="/photos/living.jpg" alt={t.hero.title} priority sizes="100vw" />
        <div className="hero-overlay">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.lede}</p>
          <SellingPoints items={g.points.home} />
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

      <section className="intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.intro.eyebrow}</p>
          <h2>{t.intro.title}</h2>
          {t.intro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="choices-section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.choicesTitle}</h2>
            <p>{t.choicesLede}</p>
          </div>
          <div className="choices">
            <PageLink page="a" className="choice choice-a">
              <span className="choice-kicker">A</span>
              <span className="choice-name">{t.aCard.name}</span>
              <span className="choice-line">{t.aCard.line}</span>
              <span className="choice-link">{t.aCard.cta}</span>
            </PageLink>
            <PageLink page="b" className="choice choice-b">
              <span className="choice-kicker">B</span>
              <span className="choice-name">{t.bCard.name}</span>
              <span className="choice-line">{t.bCard.line}</span>
              <span className="choice-link">{t.bCard.cta}</span>
            </PageLink>
          </div>
        </div>
      </section>

      <section className="mosaic-section">
        <div className="wrap">
          <div className="mosaic">
            <figure>
              <Photo src="/photos/entry.jpg" alt={c.doors} sizes="(max-width: 900px) 100vw, 46vw" />
              <figcaption>{c.doors}</figcaption>
            </figure>
            <figure>
              <Photo src="/photos/kitchen-living.jpg" alt={c.living} sizes="(max-width: 900px) 100vw, 27vw" />
              <figcaption>Antonio A</figcaption>
            </figure>
            <figure>
              <Photo src="/photos/bedroom.jpg" alt={c.bedroom} sizes="(max-width: 900px) 100vw, 27vw" />
              <figcaption>{c.bedroom}</figcaption>
            </figure>
            <figure>
              <Photo src="/photos/kitchen.jpg" alt={c.kitchen} sizes="(max-width: 900px) 100vw, 27vw" />
              <figcaption>{c.kitchen}</figcaption>
            </figure>
            <figure>
              <Photo src="/photos/dining.jpg" alt={c.table} sizes="(max-width: 900px) 100vw, 27vw" />
              <figcaption>{c.table}</figcaption>
            </figure>
          </div>
          <p className="photo-note">{t.mosaicCaption}</p>
        </div>
      </section>

      <section className="home-stay home-stay-a">
        <div className="wrap stay-split">
          <div>
            <p className="eyebrow">{t.aHome.eyebrow}</p>
            <h2>{t.aHome.title}</h2>
            <p className="tagline">{t.aHome.tag}</p>
            <p>{t.aHome.body}</p>
            <div className="stay-actions">
              <PageLink page="a" className="button button-dark">
                {t.aCard.cta}
              </PageLink>
              <AirbnbLink cabin="a" location="home-a" className="button button-line">
                {t.bookA}
              </AirbnbLink>
            </div>
          </div>
          <Photo src="/photos/sofa.jpg" alt={c.livingAlt} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="home-stay home-stay-b">
        <div className="wrap stay-split stay-split-flip">
          <div>
            <p className="eyebrow">{t.bHome.eyebrow}</p>
            <h2>{t.bHome.title}</h2>
            <p className="tagline">{t.bHome.tag}</p>
            <p>{t.bHome.body}</p>
            <div className="stay-actions">
              <PageLink page="b" className="button button-wood">
                {t.bCard.cta}
              </PageLink>
              <AirbnbLink cabin="b" location="home-b" className="button button-line">
                {t.bookB}
              </AirbnbLink>
            </div>
          </div>
          <Photo src="/photos/exterior.jpg" alt={c.woodDoors} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="home-nomad">
        <div className="wrap stay-split">
          <div>
            <p className="eyebrow">{t.nomad.eyebrow}</p>
            <h2>{t.nomad.title}</h2>
            <p className="lede">{t.nomad.lede}</p>
            {t.nomad.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <PageLink page="teine-ski" className="button button-dark">
              {t.nomad.cta}
            </PageLink>
          </div>
          <Photo src="/photos/dining-2.jpg" alt={c.workTable} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="long-stay" id="long-stay">
        <div className="wrap">
          <p className="eyebrow">{t.longStay.eyebrow}</p>
          <h2>{t.longStay.title}</h2>
          <p className="lede">{t.longStay.lede}</p>
          <p>{t.longStay.body[0]}</p>
          <PageLink page="long-stay" className="button button-dark">
            {g.longCta}
          </PageLink>
        </div>
      </section>

      <section className="ambient">
        <Photo src="/photos/street.jpg" alt="" sizes="100vw" />
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
      <Reviews which="home" />
    </Shell>
  );
}
