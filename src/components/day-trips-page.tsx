import { Shell } from "@/components/chrome";
import { PageLink } from "@/components/page-link";
import { Photo } from "@/components/photo";
import { house } from "@/data/active";
import { useLang, type Lang } from "@/lib/i18n";

const tripPhotos: Record<string, { src: string; credit: Record<Lang, string> }> = {
  otaru: {
    src: "/photos/otaru.jpg",
    credit: {
      en: "Otaru Canal. Photograph by Suicasmo, CC BY-SA 4.0.",
      ja: "小樽運河。写真: Suicasmo, CC BY-SA 4.0。",
      zh: "小樽运河。摄影：Suicasmo，CC BY-SA 4.0。",
      ko: "오타루 운하. 사진: Suicasmo, CC BY-SA 4.0.",
    },
  },
  noboribetsu: {
    src: "/photos/jigoku.jpg",
    credit: {
      en: "Jigokudani, Noboribetsu. Photograph by Calistemon, CC BY-SA 4.0.",
      ja: "登別・地獄谷。写真: Calistemon, CC BY-SA 4.0。",
      zh: "登别地狱谷。摄影：Calistemon，CC BY-SA 4.0。",
      ko: "노보리베쓰 지고쿠다니. 사진: Calistemon, CC BY-SA 4.0.",
    },
  },
  jozankei: {
    src: "/photos/jozankei.jpg",
    credit: {
      en: "Jozankei in January. Photograph by Miki Yoshihito, CC BY 2.0.",
      ja: "1月の定山渓。写真: Miki Yoshihito, CC BY 2.0。",
      zh: "一月的定山溪。摄影：Miki Yoshihito，CC BY 2.0。",
      ko: "1월의 조잔케이. 사진: Miki Yoshihito, CC BY 2.0.",
    },
  },
  furano: {
    src: "/photos/bluepond.jpg",
    credit: {
      en: "Shirogane Blue Pond, Biei. Photograph by AndyLeungHK, CC0.",
      ja: "美瑛・白金の青い池。写真: AndyLeungHK, CC0。",
      zh: "美瑛白金青池。摄影：AndyLeungHK，CC0。",
      ko: "비에이 시로가네 푸른 연못. 사진: AndyLeungHK, CC0.",
    },
  },
  buddha: {
    src: "/photos/buddha.jpg",
    credit: {
      en: "Hill of the Buddha, Makomanai Takino Cemetery. Photograph by Miki Yoshihito, CC BY 2.0.",
      ja: "真駒内滝野霊園の頭大仏。写真: Miki Yoshihito, CC BY 2.0。",
      zh: "真驹内泷野灵园的头大佛。摄影：Miki Yoshihito，CC BY 2.0。",
      ko: "마코마나이 다키노 영묘의 머리 대불. 사진: Miki Yoshihito, CC BY 2.0.",
    },
  },
  toya: {
    src: "/photos/toya.jpg",
    credit: {
      en: "Lake Toya. Photograph by 663highland, CC BY 2.5.",
      ja: "洞爺湖。写真: 663highland, CC BY 2.5。",
      zh: "洞爷湖。摄影：663highland，CC BY 2.5。",
      ko: "도야호. 사진: 663highland, CC BY 2.5.",
    },
  },
  teine: {
    src: "/photos/teine.jpg",
    credit: {
      en: "Sapporo Teine, looking back toward the city. Photograph by Miki Yoshihito, CC BY 2.0.",
      ja: "サッポロテイネから街を見下ろす。写真: Miki Yoshihito, CC BY 2.0。",
      zh: "札幌手稻，回头望向城市。摄影：Miki Yoshihito，CC BY 2.0。",
      ko: "삿포로 데이네에서 시내를 내려다본 사진. 사진: Miki Yoshihito, CC BY 2.0.",
    },
  },
};

export function DayTrips() {
  const { lang } = useLang();
  const t = house().copy.dayTrips;
  const lead = ["otaru", "noboribetsu", "buddha"] as const;

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
          {lead.map((id) => {
            const idea = t.ideas.find((item) => item.id === id);
            const photo = tripPhotos[id];
            return (
              <figure key={id}>
                <Photo src={photo.src} alt={idea?.title ?? photo.credit[lang]} sizes="(max-width: 800px) 100vw, 34vw" />
              </figure>
            );
          })}
        </div>
      </section>

      {t.ideas.map((idea, index) => {
        const photo = tripPhotos[idea.id];
        return (
          <section key={idea.id} className={index % 2 === 1 ? "card-section card-section-alt" : "card-section"} id={idea.id === "teine" ? "teine" : idea.id}>
            <div className="wrap narrow-guide">
              <p className="eyebrow">{idea.eyebrow}</p>
              <h2 className="block-title">{idea.title}</h2>
              {photo ? (
                <figure className="trip-figure">
                  <Photo src={photo.src} alt={idea.title} sizes="(max-width: 800px) 100vw, 800px" />
                  <figcaption>{photo.credit[lang]}</figcaption>
                </figure>
              ) : null}
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
              {idea.id === "teine" ? (
                <p className="trips-more">
                  <PageLink page="teine-ski">{t.more}</PageLink>
                </p>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className="card-section">
        <div className="wrap narrow-guide">
          <p>{t.note}</p>
        </div>
      </section>
    </Shell>
  );
}
