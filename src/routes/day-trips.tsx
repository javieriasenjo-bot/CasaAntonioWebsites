import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { copy } from "@/data/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/day-trips")({
  head: () => ({
    meta: [
      { title: "Day trips · Casa Antonio Sapporo" },
      {
        name: "description",
        content:
          "One-day ideas from Casa Antonio in Kita-ku: Otaru by train, Biei or Furano by car, and Sapporo Teine when the day should stay short.",
      },
    ],
  }),
  component: DayTrips,
});

function DayTrips() {
  const { lang } = useLang();
  const t = copy[lang].dayTrips;
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
          </figure>
          <figure>
            <img src="/photos/entry.jpg" alt={c.parking} />
          </figure>
          <figure>
            <img src="/photos/teine.jpg" alt={t.ideas[3].title} />
          </figure>
        </div>
      </section>

      {t.ideas.map((idea, index) => (
        <section key={idea.title} className={index % 2 === 1 ? "card-section card-section-alt" : "card-section"} id={index === 3 ? "teine" : undefined}>
          <div className="wrap narrow-guide">
            <p className="eyebrow">{idea.eyebrow}</p>
            <h2 className="block-title">{idea.title}</h2>
            <p className="lede">{idea.lede}</p>
            <ul className="guide-list">
              {idea.steps.map((step) => (
                <li key={step.title}>
                  <p className="guide-time">{step.time}</p>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            {index === 3 ? (
              <p className="trips-more">
                <Link to="/neighborhood" hash="ski">
                  {t.more}
                </Link>
              </p>
            ) : null}
          </div>
        </section>
      ))}

      <section className="card-section">
        <div className="wrap narrow-guide">
          <p>{t.note}</p>
        </div>
      </section>
    </Shell>
  );
}
