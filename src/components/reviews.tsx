import { useState } from "react";
import { bookingReviews, reviewReady, reviews, type BookingReviews, type StayReviews } from "@/data/reviews";
import { useLang, type Lang } from "@/lib/i18n";

const LABEL: Record<Lang, { title: string; reviews: string; favorite: string; translated: string; all: string; bookingAll: string; more: string; less: string; original: string; excerpt: string; ofTen: string }> = {
  en: { title: "What guests say", reviews: "reviews", favorite: "Guest favorite", translated: "Translated by Airbnb", all: "Read all reviews on Airbnb", bookingAll: "Read all reviews on Booking.com", more: "Show more reviews", less: "Show fewer", original: "Original language", excerpt: "opening lines", ofTen: "/10" },
  ja: { title: "ゲストの声", reviews: "件のレビュー", favorite: "ゲストのお気に入り", translated: "Airbnbによる英訳", all: "Airbnbですべてのレビューを見る", bookingAll: "Booking.comですべてのレビューを見る", more: "レビューをもっと見る", less: "閉じる", original: "原文", excerpt: "冒頭のみ", ofTen: "/10" },
  zh: { title: "住客评价", reviews: "条评价", favorite: "房客推荐", translated: "Airbnb 翻译", all: "在 Airbnb 查看全部评价", bookingAll: "在 Booking.com 查看全部评价", more: "查看更多评价", less: "收起", original: "原文", excerpt: "节选", ofTen: "/10" },
  ko: { title: "게스트 후기", reviews: "개의 후기", favorite: "게스트 선호", translated: "Airbnb 번역", all: "Airbnb에서 모든 후기 보기", bookingAll: "Booking.com에서 모든 후기 보기", more: "후기 더 보기", less: "접기", original: "원문", excerpt: "일부 발췌", ofTen: "/10" },
};

const INITIAL = 4;

type Item = { key: string; text: string; meta: string; source: "Airbnb" | "Booking.com"; lang?: string };

function Block({ id, title, lang }: { id: "a" | "b"; title: string; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const air: StayReviews = reviews[id];
  const book: BookingReviews = bookingReviews[id];
  const l = LABEL[lang];
  const airOk = reviewReady(air) && air.rating != null && air.count != null;
  const items: Item[] = [];
  const airQuotes = airOk ? air.quotes : [];
  // Interleave Airbnb and Booking.com so both sources show before "Show more".
  for (let i = 0; i < Math.max(airQuotes.length, book.quotes.length); i++) {
    const q = airQuotes[i];
    if (q)
      items.push({
        key: `a-${q.name}-${q.when}`,
        text: q.text,
        meta: [q.name, q.country, q.when].filter(Boolean).join(" · ") + (q.translated ? ` · ${l.translated}` : ""),
        source: "Airbnb",
      });
    const b = book.quotes[i];
    if (b)
      items.push({
        key: `b-${b.name}`,
        text: b.text,
        meta: [b.name, b.country].filter(Boolean).join(" · ") + (b.lang !== lang ? ` · ${l.original}` : "") + (b.excerpt ? ` · ${l.excerpt}` : ""),
        source: "Booking.com",
        lang: b.lang,
      });
  }
  const shown = open ? items : items.slice(0, INITIAL);
  return (
    <div className="review-block">
      <p className="review-score">
        <strong>{title}</strong>
        {airOk ? (
          <span>
            Airbnb ★ {air.rating!.toFixed(2)} · {air.count}
            {lang === "en" ? " " : ""}
            {l.reviews}
            {air.guestFavorite ? ` · ${l.favorite}` : ""}
          </span>
        ) : null}
        <span>
          Booking.com {book.score.toFixed(1)}
          {l.ofTen} · {book.count}
          {lang === "en" ? " " : ""}
          {l.reviews}
        </span>
      </p>
      <ul className="review-quotes">
        {shown.map((it) => (
          <li key={it.key}>
            <blockquote lang={it.lang}>“{it.text}”</blockquote>
            <p>
              {it.meta} · <span className="review-source">{it.source}</span>
            </p>
          </li>
        ))}
      </ul>
      {items.length > INITIAL ? (
        <p className="gallery-more">
          <button type="button" className="button button-line" onClick={() => setOpen(!open)}>
            {open ? l.less : l.more}
          </button>
        </p>
      ) : null}
      <p className="review-links">
        {airOk ? (
          <a className="text-link" href={air.href} target="_blank" rel="noreferrer">
            {l.all}
          </a>
        ) : null}
        <a className="text-link" href={book.href} target="_blank" rel="noreferrer">
          {l.bookingAll}
        </a>
      </p>
    </div>
  );
}

export function Reviews({ which }: { which: "home" | "a" | "b" }) {
  const { lang } = useLang();
  const ids = which === "home" ? (["a", "b"] as const) : ([which] as const);
  return (
    <section className="reviews">
      <h2>{LABEL[lang].title}</h2>
      {ids.map((id) => (
        <Block key={id} id={id} title={id === "a" ? "Casa Antonio A" : "Casa Antonio B"} lang={lang} />
      ))}
    </section>
  );
}
