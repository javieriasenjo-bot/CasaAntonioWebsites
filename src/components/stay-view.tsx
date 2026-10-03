import { Gallery } from "@/components/gallery";
import { Shell } from "@/components/chrome";
import { AirbnbLink } from "@/components/airbnb-link";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { KojohamaPromo } from "@/components/kojohama-promo";
import { Reviews } from "@/components/reviews";
import { SellingPoints } from "@/components/selling-points";
import { house } from "@/data/active";
import { apartmentAPhotos, apartmentBPhotos, type Photo as HousePhoto } from "@/data/facts";
import { useLang } from "@/lib/i18n";

export function StayView({ id }: { id: "a" | "b" }) {
  const { lang } = useLang();
  const t = house().copy;
  const page = id === "a" ? t.aPage : t.bPage;
  const hero = id === "a" ? "/photos/living.jpg" : "/photos/b-living.jpg";
  const photos: readonly HousePhoto[] = (id === "a" ? apartmentAPhotos : apartmentBPhotos).filter((photo) => photo.src !== hero);
  const note = id === "a" ? t.photoNoteA : t.photoNoteB;
  const g = house().guides;

  return (
    <Shell>
      <section className={`page-hero page-hero-${id}`}>
        <Photo
          src={hero}
          alt={page.title}
          priority
          sizes="100vw"
        />
        <div className="page-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.lede}</p>
          <SellingPoints items={g.points[id]} />
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
              <AirbnbLink cabin={id} location={id === "a" ? "stay-a" : "stay-b"} className={id === "a" ? "button button-dark" : "button button-wood"}>
                {t.stayShared.book}
              </AirbnbLink>
              <PageLink page="home" className="button button-line">
                {t.stayShared.back}
              </PageLink>
            </div>
          </div>

          <h2 className="block-title">{t.photos}</h2>
          <Gallery photos={photos} lang={lang} labels={t.lightbox} />
          <p className="photo-note">{note}</p>
          <Reviews which={id} />

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
      <KojohamaPromo from={id} />
    </Shell>
  );
}
