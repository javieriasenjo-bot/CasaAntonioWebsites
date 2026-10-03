import { Photo } from "@/components/photo";
import { useLang, type Lang } from "@/lib/i18n";

// Cross-link to the sister property, Kojohama Cabins (kojohamacabins.jp), in the visitor's language.
const SITE: Record<Lang, string> = {
  en: "https://kojohamacabins.jp/",
  ja: "https://kojohamacabins.jp/ja/",
  zh: "https://kojohamacabins.jp/zh-cn/",
  ko: "https://kojohamacabins.jp/ko/",
};

const COPY: Record<Lang, { eyebrow: string; title: string; body: string; cta: string; alt: string }> = {
  en: {
    eyebrow: "Our other place",
    title: "Three more beautiful cabins in Kojohama",
    body: "We also host three oceanfront cabins in Kojohama, Shiraoi, about 1 hour 15 minutes from Sapporo by car. Close to Upopoy and the Noboribetsu hot springs. Pair them with Casa Antonio for a city-and-sea trip.",
    cta: "Visit kojohamacabins.jp",
    alt: "Kojohama Cabins by the sea at sunset",
  },
  ja: {
    eyebrow: "姉妹の宿",
    title: "虎杖浜に、もう3棟の素敵なキャビン",
    body: "白老町・虎杖浜の海沿いにある一棟貸しキャビンも3棟運営しています。札幌から車で約1時間15分、ウポポイや登別温泉の近くです。Casa Antonio と組み合わせて、街と海の旅をどうぞ。",
    cta: "kojohamacabins.jp を見る",
    alt: "夕暮れの海辺に建つ Kojohama Cabins",
  },
  zh: {
    eyebrow: "我们的另一处住宿",
    title: "虎杖浜还有三栋美丽的小屋",
    body: "我们在白老町虎杖浜的海边还有三栋整栋出租的小屋，从札幌开车约1小时15分钟，靠近 Upopoy 民族共生象征空间和登别温泉。可与 Casa Antonio 组合，城市与海边一次玩到。",
    cta: "访问 kojohamacabins.jp",
    alt: "夕阳下海边的 Kojohama Cabins",
  },
  ko: {
    eyebrow: "또 다른 숙소",
    title: "고조하마의 아름다운 캐빈 3채",
    body: "시라오이 고조하마 바닷가에 독채 캐빈 3채도 운영하고 있습니다. 삿포로에서 차로 약 1시간 15분, 우포포이와 노보리베쓰 온천 근처입니다. Casa Antonio와 함께 도시와 바다 여행을 즐겨 보세요.",
    cta: "kojohamacabins.jp 방문하기",
    alt: "노을 진 바닷가의 Kojohama Cabins",
  },
};

export function KojohamaPromo({ from }: { from: "home" | "a" | "b" }) {
  const { lang } = useLang();
  const c = COPY[lang];
  const href = `${SITE[lang]}?utm_source=casaantonio.jp&utm_medium=referral&utm_campaign=crosslink&utm_content=${from}`;
  return (
    <section className="kojohama-promo" aria-label={c.title}>
      <div className="wrap kojohama-inner">
        <a className="kojohama-photo" href={href} target="_blank" rel="noopener">
          <Photo src="/photos/kojohama.jpg" alt={c.alt} sizes="(max-width: 900px) 100vw, 50vw" />
        </a>
        <div className="kojohama-copy">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
          <a className="button button-dark" href={href} target="_blank" rel="noopener">
            {c.cta} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
