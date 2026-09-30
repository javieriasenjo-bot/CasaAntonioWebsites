import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { copy, MAP } from "@/data/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/neighborhood")({
  head: () => ({
    meta: [
      { title: "Neighborhood · Casa Antonio Sapporo" },
      {
        name: "description",
        content:
          "Casa Antonio is in Kita 38-jo, Kita-ku, Sapporo, a short walk from Asabu Station on the Namboku line.",
      },
    ],
  }),
  component: Neighborhood,
});

function Neighborhood() {
  const { lang } = useLang();
  const t = copy[lang].neighborhood;

  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
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

      <section className="card-section">
        <div className="wrap">
          <h2 className="block-title">{t.aroundTitle}</h2>
          <div className="cards">
            {t.around.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="card-section card-section-alt">
        <div className="wrap">
          <h2 className="block-title">{t.dayTitle}</h2>
          <div className="cards">
            {t.day.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="distance-panel">
            <h2>{t.distancesTitle}</h2>
            <ul>
              {t.distances.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Shell>
  );
}
