import { BookLink } from "@/components/book-link";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { STAY_DISCOVERY } from "@/data/stay-discovery";
import { apartmentSummary } from "@/data/property-facts";
import { useLang } from "@/lib/i18n";

export function StayDiscovery({ context }: { context: "access" | "snow" | "teine" | "long-stay" | "monthly-stay" }) {
  const { lang } = useLang();
  const t = STAY_DISCOVERY[lang];
  const title = context === "access" ? t.accessTitle : context === "snow" ? t.snowTitle : context === "teine" ? t.teineTitle : t.compareTitle;
  const intro = context === "snow" ? t.snowIntro : context === "teine" ? t.teineIntro : t.intro;
  if (context === "access") return (
    <section className="stay-discovery" aria-labelledby="access-stay-title">
      <p className="eyebrow">{t.eyebrow}</p>
      <h2 id="access-stay-title">{t.accessTitle}</h2>
      <p className="discovery-intro">{t.intro}</p>
      <div className="stay-actions">
        {(["a", "b"] as const).map(id => <PageLink key={id} page={id} className="button button-line" data-property={id} data-placement="access-apartment" data-intent="apartment">Casa Antonio {id.toUpperCase()} →</PageLink>)}
        <BookLink location="access-discovery" className="button button-dark">{t.dates} ↗</BookLink>
      </div>
      <PageLink page="monthly-stay" className="text-link">{t.monthlyLink}</PageLink>
    </section>
  );
  return (
    <section className="stay-discovery" aria-labelledby={`${context}-stay-title`}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h2 id={`${context}-stay-title`}>{title}</h2>
      <p className="discovery-intro">{intro}</p>
      <div className="discovery-grid">
        {(["a", "b"] as const).map(id => (
          <article className="discovery-card" key={id}>
            <Photo src={id === "a" ? "/photos/living.jpg" : "/photos/b-living.jpg"} alt={`Casa Antonio ${id.toUpperCase()}`} sizes="(min-width: 760px) 480px, 100vw" />
            <div className="discovery-card-body">
              <h3>Casa Antonio {id.toUpperCase()}</h3>
              <dl className="choice-facts">
                {apartmentSummary(id, lang).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
              <PageLink page={id} className="text-link" data-property={id} data-placement={`${context}-apartment`} data-intent="apartment">{t.view} →</PageLink>
            </div>
          </article>
        ))}
      </div>
      <div className="stay-actions">
        <BookLink location={`${context}-discovery`} className="button button-dark">{t.dates} ↗</BookLink>
        <PageLink page={context === "monthly-stay" ? "long-stay" : "monthly-stay"} className="text-link">{context === "monthly-stay" ? t.longLink : t.monthlyLink}</PageLink>
      </div>
    </section>
  );
}
