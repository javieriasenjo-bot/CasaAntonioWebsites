import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { copy, MAP } from "@/data/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/neighborhood")({
  head: () => ({
    meta: [
      { title: "Around · Casa Antonio Sapporo" },
      {
        name: "description",
        content:
          "A day in Asabu, then one direction: the subway south, or Sapporo Teine by car. Places from Casa Antonio in Kita 38-jo.",
      },
    ],
  }),
  component: Neighborhood,
});

function Neighborhood() {
  const { lang } = useLang();
  const t = copy[lang].neighborhood;
  const c = copy[lang].captions;

  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
        </div>
      </section>

      <section className="place-photos">
        <div className="wrap place-photo-row">
          <figure>
            <img src="/photos/street.jpg" alt={c.fromStreet} />
            <figcaption>{c.fromStreet}</figcaption>
          </figure>
          <figure>
            <img src="/photos/dining.jpg" alt={c.table} />
            <figcaption>{c.table}</figcaption>
          </figure>
          <figure>
            <img src="/photos/teine.jpg" alt={t.trips[2].title} />
            <figcaption>{t.trips[2].title}</figcaption>
          </figure>
        </div>
      </section>

      <section className="card-section">
        <div className="wrap narrow-guide">
          <p className="eyebrow">{t.localEyebrow}</p>
          <h2 className="block-title">{t.localTitle}</h2>
          <p className="lede">{t.localLede}</p>
          <ul className="guide-list">
            {t.local.map((item) => (
              <li key={item.title}>
                <p className="guide-time">{item.time}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ski-section" id="ski">
        <div className="wrap">
          <p className="eyebrow">{t.tripsEyebrow}</p>
          <h2>{t.tripsTitle}</h2>
          <p className="lede">{t.tripsLede}</p>
          <figure className="ski-figure">
            <img src="/photos/teine.jpg" alt={t.trips[2].title} />
            <figcaption>{t.skiPhoto}</figcaption>
          </figure>
          <div className="cards">
            {t.trips.map((item) => (
              <article key={item.title} className="info-card">
                <p className="guide-time">{item.time}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="card-section">
        <div className="wrap narrow-guide">
          <p className="eyebrow">{t.planEyebrow}</p>
          <h2 className="block-title">{t.planTitle}</h2>
          <div className="plan-list">
            {t.plan.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="card-section card-section-alt">
        <div className="wrap narrow-guide">
          <p className="eyebrow">{t.guideEyebrow}</p>
          <h2 className="block-title">{t.guideTitle}</h2>
          <p className="lede">{t.guideLede}</p>
          {t.guide.map((group) => (
            <div key={group.title}>
              <h3 className="guide-cat">{group.title}</h3>
              <ul className="guide-list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="guide-time">{item.time}</p>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section">
        <div className="wrap narrow-guide">
          <p className="eyebrow">{t.seasonEyebrow}</p>
          <h2 className="block-title">{t.seasonTitle}</h2>
          <p>{t.seasonBody}</p>
        </div>
      </section>

      <section className="map-section">
        <div className="wrap">
          <div className="map-frame">
            <iframe title={t.mapTitle} src={MAP.embed} loading="lazy" />
          </div>
          <div className="map-caption">
            <div>
              <h2>{t.mapTitle}</h2>
              <p>{t.mapNote}</p>
            </div>
            <a className="button button-dark" href={MAP.google} target="_blank" rel="noreferrer">
              {t.openMap}
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
