import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { copy } from "@/data/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <Shell>
      <section className="hero">
        <img className="hero-img" src="/photos/exterior.jpg" alt={t.intro.title} />
        <div className="hero-overlay">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.lede}</p>
          <div className="hero-actions">
            <Link to="/casa-antonio-a" className="button button-light">
              {t.hero.a}
            </Link>
            <Link to="/casa-antonio-b" className="button button-quiet">
              {t.hero.b}
            </Link>
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

      <section className="mosaic-section">
        <div className="wrap">
          <div className="mosaic">
            <figure>
              <img src="/photos/entry.jpg" alt={lang === "ja" ? "ふたつの専用入口" : "Two private entrances"} />
              <figcaption>{lang === "ja" ? "専用の扉がふたつ" : "Two private doors"}</figcaption>
            </figure>
            <figure>
              <img src="/photos/living.jpg" alt={lang === "ja" ? "アントニオAの居間" : "Living room in Antonio A"} />
              <figcaption>Antonio A</figcaption>
            </figure>
            <figure>
              <img src="/photos/bedroom.jpg" alt={lang === "ja" ? "寝室" : "Bedroom"} />
              <figcaption>{lang === "ja" ? "寝室" : "Bedroom"}</figcaption>
            </figure>
            <figure>
              <img src="/photos/kitchen.jpg" alt={lang === "ja" ? "キッチン" : "Kitchen"} />
              <figcaption>{lang === "ja" ? "キッチン" : "Kitchen"}</figcaption>
            </figure>
            <figure>
              <img src="/photos/genkan.jpg" alt={lang === "ja" ? "玄関" : "Entrance hall"} />
              <figcaption>{lang === "ja" ? "玄関" : "Genkan"}</figcaption>
            </figure>
          </div>
          <p className="photo-note">{t.mosaicCaption}</p>
        </div>
      </section>

      <section className="choices-section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.choicesTitle}</h2>
            <p>{t.choicesLede}</p>
          </div>
          <div className="choices">
            <Link to="/casa-antonio-a" className="choice choice-a">
              <span className="choice-kicker">A</span>
              <span className="choice-name">{t.aCard.name}</span>
              <span className="choice-line">{t.aCard.line}</span>
              <span className="choice-link">{t.aCard.cta}</span>
            </Link>
            <Link to="/casa-antonio-b" className="choice choice-b">
              <span className="choice-kicker">B</span>
              <span className="choice-name">{t.bCard.name}</span>
              <span className="choice-line">{t.bCard.line}</span>
              <span className="choice-link">{t.bCard.cta}</span>
            </Link>
          </div>
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
              <Link to="/casa-antonio-a" className="button button-dark">
                {t.aCard.cta}
              </Link>
              <a className="button button-line" href="https://www.airbnb.com/rooms/1248284267045468378" target="_blank" rel="noreferrer">
                Airbnb
              </a>
            </div>
          </div>
          <img src="/photos/living.jpg" alt={lang === "ja" ? "アントニオAの居間" : "Living room, Casa Antonio A"} />
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
              <Link to="/casa-antonio-b" className="button button-wood">
                {t.bCard.cta}
              </Link>
              <a className="button button-line" href="https://www.airbnb.com/rooms/1248260873560502499" target="_blank" rel="noreferrer">
                Airbnb
              </a>
            </div>
          </div>
          <img src="/photos/doors.jpg" alt={lang === "ja" ? "木の専用入口" : "Wooden private entrances"} />
        </div>
      </section>

      <section className="ambient">
        <img src="/photos/entry.jpg" alt="" />
        <div className="ambient-copy">
          <p className="eyebrow">{t.neighborhoodTeaser.eyebrow}</p>
          <h2>{t.neighborhoodTeaser.title}</h2>
          <p>{t.neighborhoodTeaser.body}</p>
          <Link to="/neighborhood" className="button button-light">
            {t.neighborhoodTeaser.cta}
          </Link>
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
          <Link to="/arrival" className="text-link">
            {t.practical.cta}
          </Link>
        </div>
      </section>
    </Shell>
  );
}
