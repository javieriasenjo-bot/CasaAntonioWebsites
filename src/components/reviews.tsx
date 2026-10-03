import { reviewReady, reviews, type StayReviews } from "@/data/reviews";
import { useLang, type Lang } from "@/lib/i18n";

const LABEL: Record<Lang, { title: string; reviews: string; favorite: string; translated: string; all: string }> = {
  en: { title: "What guests say", reviews: "reviews", favorite: "Guest favorite", translated: "Translated by Airbnb", all: "Read all reviews on Airbnb" },
  ja: { title: "ゲストの声", reviews: "件のレビュー", favorite: "ゲストのお気に入り", translated: "Airbnbによる英訳", all: "Airbnbですべてのレビューを見る" },
  zh: { title: "住客评价", reviews: "条评价", favorite: "房客推荐", translated: "Airbnb 翻译", all: "在 Airbnb 查看全部评价" },
  ko: { title: "게스트 후기", reviews: "개의 후기", favorite: "게스트 선호", translated: "Airbnb 번역", all: "Airbnb에서 모든 후기 보기" },
};

function Block({ stay, title, lang }: { stay: StayReviews; title: string; lang: Lang }) {
  if (!reviewReady(stay) || stay.rating == null || stay.count == null) return null;
  const l = LABEL[lang];
  return (
    <div className="review-block">
      <p className="review-score">
        <strong>{title}</strong>
        <span>
          ★ {stay.rating.toFixed(2)} · {stay.count}
          {lang === "en" ? " " : ""}
          {l.reviews}
          {stay.guestFavorite ? ` · ${l.favorite}` : ""}
        </span>
      </p>
      <ul className="review-quotes">
        {stay.quotes.map((quote) => (
          <li key={`${quote.name}-${quote.when}`}>
            <blockquote>“{quote.text}”</blockquote>
            <p>
              {[quote.name, quote.country, quote.when].filter(Boolean).join(" · ")}
              {quote.translated ? ` · ${l.translated}` : ""}
            </p>
          </li>
        ))}
      </ul>
      <p>
        <a className="text-link" href={stay.href} target="_blank" rel="noreferrer">
          {l.all}
        </a>
      </p>
    </div>
  );
}

export function Reviews({ which }: { which: "home" | "a" | "b" }) {
  const { lang } = useLang();
  const ids = which === "home" ? (["a", "b"] as const) : ([which] as const);
  const ready = ids.filter((id) => reviewReady(reviews[id]));
  if (ready.length === 0) return null;
  return (
    <section className="reviews">
      <h2>{LABEL[lang].title}</h2>
      {ready.map((id) => (
        <Block key={id} stay={reviews[id]} title={id === "a" ? "Casa Antonio A" : "Casa Antonio B"} lang={lang} />
      ))}
    </section>
  );
}
