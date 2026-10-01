import { Shell } from "@/components/chrome";
import { Photo } from "@/components/photo";
import { house } from "@/data/active";
import { MAP } from "@/data/facts";
import { useLang, type Lang } from "@/lib/i18n";
import { trackMapClick } from "@/lib/analytics";

type Shot = { src: string; credit: Record<Lang, string> };

function credit(en: string, ja: string, zh: string, ko: string): Record<Lang, string> {
  return { en, ja, zh, ko };
}

const placeShots: { key: string; shot: Shot }[] = [
  {
    key: "北海道大学",
    shot: {
      src: "/photos/hokudai.jpg",
      credit: credit(
        "Poplar avenue, Hokkaido University. Photograph by 禁樹なずな, CC BY-SA 4.0.",
        "北海道大学のポプラ並木。写真: 禁樹なずな, CC BY-SA 4.0。",
        "北海道大学的白杨林荫道。摄影：禁樹なずな，CC BY-SA 4.0。",
        "홋카이도 대학 포플러 가로수. 사진: 禁樹なずな, CC BY-SA 4.0.",
      ),
    },
  },
  {
    key: "大通公園",
    shot: {
      src: "/photos/odori.jpg",
      credit: credit(
        "Odori Park and the TV tower. Photograph by LR0725, CC BY-SA 4.0.",
        "大通公園とテレビ塔。写真: LR0725, CC BY-SA 4.0。",
        "大通公园与电视塔。摄影：LR0725，CC BY-SA 4.0。",
        "오도리 공원과 TV 타워. 사진: LR0725, CC BY-SA 4.0.",
      ),
    },
  },
  {
    key: "時計台",
    shot: {
      src: "/photos/clock.jpg",
      credit: credit(
        "Sapporo Clock Tower. Photograph by Ninosan, CC0.",
        "札幌市時計台。写真: Ninosan, CC0。",
        "札幌时钟台。摄影：Ninosan，CC0。",
        "삿포로 시계탑. 사진: Ninosan, CC0.",
      ),
    },
  },
  {
    key: "サッポロテイネ",
    shot: {
      src: "/photos/teine.jpg",
      credit: credit(
        "Sapporo Teine, looking back toward the city. Photograph by Miki Yoshihito, CC BY 2.0.",
        "サッポロテイネから街を見下ろす。写真: Miki Yoshihito, CC BY 2.0。",
        "札幌手稻，回头望向城市。摄影：Miki Yoshihito，CC BY 2.0。",
        "삿포로 데이네에서 시내를 내려다본 사진. 사진: Miki Yoshihito, CC BY 2.0.",
      ),
    },
  },
];

function shotFor(map: string | undefined) {
  if (!map) return undefined;
  return placeShots.find((item) => map.includes(item.key))?.shot;
}

export function Neighborhood() {
  const { lang } = useLang();
  const t = house().copy.neighborhood;

  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
        </div>
      </section>

      <section className="card-section">
        <div className="wrap narrow-guide">
          {t.guide.map((group, index) => (
            <div key={group.title} id={index === t.guide.length - 1 ? "ski" : undefined}>
              <h2 className="guide-cat">{group.title}</h2>
              <ul className="guide-list">
                {group.items.map((item) => {
                  const map = "map" in item ? item.map : undefined;
                  const shot = shotFor(map);
                  return (
                    <li key={item.name}>
                      <p className="guide-time">{item.time}</p>
                      <div>
                        <h3>{item.name}</h3>
                        {shot ? (
                          <figure className="place-shot">
                            <Photo src={shot.src} alt={item.name} sizes="(max-width: 800px) 100vw, 720px" />
                            <figcaption>{shot.credit[lang]}</figcaption>
                          </figure>
                        ) : null}
                        <p>{item.body}</p>
                        {map ? (
                          <p className="trips-more">
                            <a href={map} target="_blank" rel="noreferrer" onClick={() => trackMapClick("google")}>
                              {t.mapLabel}
                            </a>
                          </p>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section card-section-alt">
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
            <a className="button button-dark" href={MAP.google} target="_blank" rel="noreferrer" onClick={() => trackMapClick("google")}>
              {t.openMap}
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
