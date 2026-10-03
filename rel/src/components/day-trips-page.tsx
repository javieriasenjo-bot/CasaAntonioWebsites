import { Shell } from "@/components/chrome";
import { PageLink } from "@/components/page-link";
import { OFFICIAL, OfficialLinks } from "@/components/official-links";
import { Photo } from "@/components/photo";
import { house } from "@/data/active";
import { useLang, type Lang } from "@/lib/i18n";

type Shot = { src: string; credit: Record<Lang, string> };

function credit(en: string, ja: string, zh: string, ko: string): Record<Lang, string> {
  return { en, ja, zh, ko };
}

const tripPhotos: Record<string, Shot[]> = {
  otaru: [
    {
      src: "/photos/otaru.jpg",
      credit: credit(
        "Otaru Canal. Photograph by Suicasmo, CC BY-SA 4.0.",
        "小樽運河。写真: Suicasmo, CC BY-SA 4.0。",
        "小樽运河。摄影：Suicasmo，CC BY-SA 4.0。",
        "오타루 운하. 사진: Suicasmo, CC BY-SA 4.0.",
      ),
    },
    {
      src: "/photos/sakaimachi.jpg",
      credit: credit(
        "Sakaimachi Street. Photograph by 663highland, CC BY 2.5.",
        "堺町通り。写真: 663highland, CC BY 2.5。",
        "堺町通。摄影：663highland，CC BY 2.5。",
        "사카이마치 거리. 사진: 663highland, CC BY 2.5.",
      ),
    },
    {
      src: "/photos/otaru-aqua.jpg",
      credit: credit(
        "Inside Otaru Aquarium. Photograph by YockeyT, CC BY-SA 4.0.",
        "おたる水族館の水槽。写真: YockeyT, CC BY-SA 4.0。",
        "小樽水族馆的水箱。摄影：YockeyT，CC BY-SA 4.0。",
        "오타루 수족관 수조. 사진: YockeyT, CC BY-SA 4.0.",
      ),
    },
    {
      src: "/photos/shukutsu.jpg",
      credit: credit(
        "The Shukutsu coast, where the aquarium sits. Photograph by 皓月旗, CC BY-SA 4.0.",
        "水族館のある祝津の海岸。写真: 皓月旗, CC BY-SA 4.0。",
        "水族馆所在的祝津海岸。摄影：皓月旗，CC BY-SA 4.0。",
        "수족관이 있는 슈쿠쓰 해안. 사진: 皓月旗, CC BY-SA 4.0.",
      ),
    },
  ],
  noboribetsu: [
    {
      src: "/photos/jigoku.jpg",
      credit: credit(
        "Jigokudani, Noboribetsu. Photograph by Calistemon, CC BY-SA 4.0.",
        "登別・地獄谷。写真: Calistemon, CC BY-SA 4.0。",
        "登别地狱谷。摄影：Calistemon，CC BY-SA 4.0。",
        "노보리베쓰 지고쿠다니. 사진: Calistemon, CC BY-SA 4.0.",
      ),
    },
  ],
  jozankei: [
    {
      src: "/photos/jozankei.jpg",
      credit: credit(
        "The open-air bath at Hoheikyo, in the Jozankei valley. Photograph by Soica2001, public domain.",
        "定山渓のほうへ、豊平峡の露天風呂。写真: Soica2001、パブリックドメイン。",
        "定山溪一带的丰平峡露天温泉。摄影：Soica2001，公有领域。",
        "조잔케이 쪽, 호헤이쿄 노천탕. 사진: Soica2001, 퍼블릭 도메인.",
      ),
    },
  ],
  furano: [
    {
      src: "/photos/bluepond.jpg",
      credit: credit(
        "Shirogane Blue Pond, Biei. Photograph by AndyLeungHK, CC0.",
        "美瑛・白金の青い池。写真: AndyLeungHK, CC0。",
        "美瑛白金青池。摄影：AndyLeungHK，CC0。",
        "비에이 시로가네 푸른 연못. 사진: AndyLeungHK, CC0.",
      ),
    },
    {
      src: "/photos/furano.jpg",
      credit: credit(
        "Lavender at Farm Tomita, Furano. Photograph by Kentagon, CC BY-SA 4.0.",
        "富良野・ファーム富田のラベンダー。写真: Kentagon, CC BY-SA 4.0。",
        "富良野 Farm Tomita 的薰衣草。摄影：Kentagon，CC BY-SA 4.0。",
        "후라노 팜 도미타의 라벤더. 사진: Kentagon, CC BY-SA 4.0.",
      ),
    },
    {
      src: "/photos/biei.jpg",
      credit: credit(
        "The patchwork fields of Biei. Photograph by 663highland, CC BY 2.5.",
        "美瑛のパッチワークの畑。写真: 663highland, CC BY 2.5。",
        "美瑛的拼布田野。摄影：663highland，CC BY 2.5。",
        "비에이의 조각보 들판. 사진: 663highland, CC BY 2.5.",
      ),
    },
  ],
  buddha: [
    {
      src: "/photos/buddha.jpg",
      credit: credit(
        "Hill of the Buddha, Makomanai Takino Cemetery. Photograph by Miki Yoshihito, CC BY 2.0.",
        "真駒内滝野霊園の頭大仏。写真: Miki Yoshihito, CC BY 2.0。",
        "真驹内泷野灵园的头大佛。摄影：Miki Yoshihito，CC BY 2.0。",
        "마코마나이 다키노 영묘의 머리 대불. 사진: Miki Yoshihito, CC BY 2.0.",
      ),
    },
  ],
  toya: [
    {
      src: "/photos/toya.jpg",
      credit: credit(
        "Lake Toya. Photograph by 663highland, CC BY 2.5.",
        "洞爺湖。写真: 663highland, CC BY 2.5。",
        "洞爷湖。摄影：663highland，CC BY 2.5。",
        "도야호. 사진: 663highland, CC BY 2.5.",
      ),
    },
  ],
  teine: [
    {
      src: "/photos/teine.jpg",
      credit: credit(
        "Sapporo Teine, looking back toward the city. Photograph by Miki Yoshihito, CC BY 2.0.",
        "サッポロテイネから街を見下ろす。写真: Miki Yoshihito, CC BY 2.0。",
        "札幌手稻，回头望向城市。摄影：Miki Yoshihito，CC BY 2.0。",
        "삿포로 데이네에서 시내를 내려다본 사진. 사진: Miki Yoshihito, CC BY 2.0.",
      ),
    },
  ],
  shiraoi: [
    {
      src: "/photos/upopoy.jpg",
      credit: credit(
        "Upopoy, the National Ainu Museum and Park in Shiraoi. Photograph by 掬茶, CC BY-SA 4.0.",
        "白老のウポポイ（民族共生象徴空間）。写真: 掬茶, CC BY-SA 4.0。",
        "白老的 Upopoy，国立阿伊努民族博物馆与公园。摄影：掬茶，CC BY-SA 4.0。",
        "시라오이 우포포이, 국립 아이누 박물관과 공원. 사진: 掬茶, CC BY-SA 4.0.",
      ),
    },
  ],
};

export function DayTrips() {
  const { lang } = useLang();
  const t = house().copy.dayTrips;

  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
        </div>
      </section>

      <section className="trip-index">
        <div className="wrap trip-cards">
          {t.ideas.map((idea) => {
            const photo = tripPhotos[idea.id]?.[0];
            if (!photo) return null;
            return (
              <a key={idea.id} className="trip-card" href={`#${idea.id}`}>
                <Photo src={photo.src} alt={idea.title} sizes="(max-width: 700px) 100vw, 33vw" />
                <span>{idea.title}</span>
              </a>
            );
          })}
        </div>
      </section>

      {t.ideas.map((idea, index) => {
        const photos = tripPhotos[idea.id] ?? [];
        return (
          <section key={idea.id} className={index % 2 === 1 ? "card-section card-section-alt" : "card-section"} id={idea.id}>
            <div className="wrap narrow-guide">
              <p className="eyebrow">{idea.eyebrow}</p>
              <h2 className="block-title">{idea.title}</h2>
              {photos.length ? (
                <div className={photos.length > 1 ? "trip-gallery" : "trip-gallery trip-gallery-one"}>
                  {photos.map((photo) => (
                    <figure key={photo.src} className="trip-figure">
                      <Photo src={photo.src} alt={idea.title} sizes={photos.length > 1 ? "(max-width: 800px) 100vw, 26vw" : "(max-width: 800px) 100vw, 800px"} />
                      <figcaption>{photo.credit[lang]}</figcaption>
                    </figure>
                  ))}
                </div>
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
              {idea.id === "shiraoi" || idea.id === "teine" ? <OfficialLinks items={OFFICIAL[idea.id]} /> : null}
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
