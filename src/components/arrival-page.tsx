import { Shell } from "@/components/chrome";
import { AirbnbLink } from "@/components/airbnb-link";
import { FaqList } from "@/components/guide-view";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { house } from "@/data/active";
import { useLang } from "@/lib/i18n";

export function Arrival() {
  const { lang } = useLang();
  const t = house().copy;
  const page = t.arrival;

  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
          <Photo className="guide-photo" src="/photos/genkan.jpg" alt={page.title} sizes="(max-width: 900px) 100vw, 740px" />
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
                  <AirbnbLink cabin="a" location="arrival" className="button button-dark">
                    {t.bookA}
                  </AirbnbLink>
                  <AirbnbLink cabin="b" location="arrival" className="button button-wood">
                    {t.bookB}
                  </AirbnbLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap narrow">
          <FaqList />
          <p>
            <PageLink page="access" className="text-link">
              {house().guides.footerLinks[0]?.label}
            </PageLink>
          </p>
        </div>
      </section>
    </Shell>
  );
}
