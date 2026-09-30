import { Link } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { Shell } from "@/components/chrome";
import { AIRBNB, apartmentAPhotos, copy, housePhotos, type Photo } from "@/data/content";
import { useLang } from "@/lib/i18n";

export function StayView({ id }: { id: "a" | "b" }) {
  const { lang } = useLang();
  const t = copy[lang];
  const page = id === "a" ? t.aPage : t.bPage;
  const photos: readonly Photo[] = id === "a" ? apartmentAPhotos : housePhotos;
  const airbnb = id === "a" ? AIRBNB.a : AIRBNB.b;
  const note = id === "a" ? t.photoNoteA : t.photoNoteB;

  return (
    <Shell>
      <section className={`page-hero page-hero-${id}`}>
        <img
          src={id === "a" ? "/photos/living.jpg" : "/photos/entry.jpg"}
          alt={page.title}
        />
        <div className="page-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.lede}</p>
        </div>
      </section>

      <section className="stay-body">
        <div className="wrap">
          <dl className="fact-grid fact-grid-tight">
            {page.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="prose">
            <h2>{page.storyTitle}</h2>
            {page.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="stay-actions">
              <a className={id === "a" ? "button button-dark" : "button button-wood"} href={airbnb} target="_blank" rel="noreferrer">
                {t.stayShared.book}
              </a>
              <Link to="/" className="button button-line">
                {t.stayShared.back}
              </Link>
            </div>
          </div>

          <h2 className="block-title">{t.photos}</h2>
          <Gallery photos={photos} lang={lang} labels={t.lightbox} />
          <p className="photo-note">{note}</p>

          <div className="two-col">
            <div>
              <h2>{t.stayShared.amenities}</h2>
              <ul className="plain-list">
                {page.amenities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>{t.stayShared.rules}</h2>
              <ul className="plain-list">
                {t.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
