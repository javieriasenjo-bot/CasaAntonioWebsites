import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { AIRBNB, copy } from "@/data/content";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/arrival")({
  head: () => ({
    meta: [
      { title: "Arrival · Casa Antonio Sapporo" },
      {
        name: "description",
        content:
          "Check-in 16:00–23:00, check-out by 10:00. House rules, parking, and notification numbers for Casa Antonio A and B in Sapporo.",
      },
    ],
  }),
  component: Arrival,
});

function Arrival() {
  const { lang } = useLang();
  const t = copy[lang];
  const page = t.arrival;

  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>

      <section className="card-section">
        <div className="wrap">
          <h2 className="block-title">{page.hoursTitle}</h2>
          <dl className="fact-grid">
            {t.practical.items.map((item) => (
              <div key={item.k}>
                <dt>{item.k}</dt>
                <dd>{item.v}</dd>
              </div>
            ))}
          </dl>
          <div className="two-col arrival-cols">
            <div>
              <h2>{t.stayShared.rules}</h2>
              <ul className="plain-list">
                {t.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className="stack">
              <div>
                <h2>{page.includedTitle}</h2>
                <ul className="plain-list">
                  {page.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="note-card">
                <h2>{page.languagesTitle}</h2>
                <p>{page.languages}</p>
                <h2>{page.licenseTitle}</h2>
                <p>{page.licenseBody}</p>
                <h2>{page.payTitle}</h2>
                <p>{page.payBody}</p>
                <div className="stay-actions">
                  <a className="button button-dark" href={AIRBNB.a} target="_blank" rel="noreferrer">
                    {t.bookA}
                  </a>
                  <a className="button button-wood" href={AIRBNB.b} target="_blank" rel="noreferrer">
                    {t.bookB}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
