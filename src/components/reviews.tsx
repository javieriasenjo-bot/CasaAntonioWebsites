import { useState } from "react";
import { house } from "@/data/active";
import { airbnbUrl } from "@/data/links";
import { bookingReviews, reviewReady, reviews, type BookingReviews, type StayReviews } from "@/data/reviews";
import { formatDay, formatMonth } from "@/lib/dates";
import { useLang, type Lang } from "@/lib/i18n";

const INITIAL = 4;
const INITIAL_HOME = 2;

type Item = { key: string; text: string; meta: string; source: "Airbnb" | "Booking.com"; sourceUrl?: string; lang?: string };

function Block({ id, title, lang, initial }: { id: "a" | "b"; title: string; lang: Lang; initial: number }) {
  const [open, setOpen] = useState(false);
  const air: StayReviews = reviews[id];
  const book: BookingReviews = bookingReviews[id];
  const l = house().copy.ui.reviews;
  const airOk = reviewReady(air) && air.rating != null && air.count != null;
  const interleaved: Item[] = [];
  const airQuotes = airOk ? air.quotes : [];
  // Interleave Airbnb and Booking.com so both sources show before "Show more".
  for (let i = 0; i < Math.max(airQuotes.length, book.quotes.length); i++) {
    const q = airQuotes[i];
    if (q)
      interleaved.push({
        key: `a-${q.name}-${q.when}`,
        text: q.text,
        meta: [q.name, q.country, formatMonth(q.when, lang)].filter(Boolean).join(" · ") + (q.translated ? ` · ${l.translated}` : "") + (q.excerpt ? ` · ${l.excerpt}` : ""),
        source: "Airbnb",
        sourceUrl: q.sourceUrl,
        lang: "en",
      });
    const b = book.quotes[i];
    if (b)
      interleaved.push({
        key: `b-${b.name}`,
        text: b.text,
        meta: [b.name, b.country, b.reviewDate ? formatDay(b.reviewDate, lang) : ""].filter(Boolean).join(" · ") + (b.lang !== lang ? ` · ${l.original}` : "") + (b.excerpt ? ` · ${l.excerpt}` : ""),
        source: "Booking.com",
        sourceUrl: b.sourceUrl,
        lang: b.lang === "zh" ? "zh-Hant" : b.lang,
      });
  }
  // Guests reading in their own language come first (stable, so source interleaving is kept otherwise).
  const items = [...interleaved].sort((x, y) => Number(!x.lang?.startsWith(lang)) - Number(!y.lang?.startsWith(lang)));
  const shown = open ? items : items.slice(0, initial);
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
      <p className="review-checked">
        {l.recorded}:
        {" "}Airbnb <time dateTime={air.recordedOn}>{formatDay(air.recordedOn, lang)}</time>
        {" · "}Booking.com <time dateTime={book.recordedOn}>{formatDay(book.recordedOn, lang)}</time>
      </p>
      <ul className="review-quotes" id={`reviews-${id}`}>
        {shown.map((it) => (
          <li key={it.key}>
            <blockquote lang={it.lang}>“{it.text}”</blockquote>
            <p>
              {it.meta} · {it.sourceUrl ? (
                <a className="review-source" href={it.sourceUrl} target="_blank" rel="noreferrer" data-intent="reviews" data-property={id} data-placement="review-excerpt">{it.source}</a>
              ) : <span className="review-source">{it.source}</span>}
            </p>
          </li>
        ))}
      </ul>
      {items.length > initial ? (
        <p className="gallery-more">
          <button type="button" className="button button-line" aria-expanded={open} aria-controls={`reviews-${id}`} onClick={() => setOpen(!open)}>
            {open ? l.less : l.more}
          </button>
        </p>
      ) : null}
      <p className="review-links">
        {airOk ? (
          <a className="text-link" href={airbnbUrl(id, lang)} target="_blank" rel="noreferrer" data-intent="reviews" data-property={id} data-placement="reviews">
            {l.all}
          </a>
        ) : null}
        <a className="text-link" href={book.href} target="_blank" rel="noreferrer" data-intent="reviews" data-property={id} data-placement="reviews">
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
      <h2>{house().copy.ui.reviews.title}</h2>
      {ids.map((id) => (
        <Block key={id} id={id} title={id === "a" ? "Casa Antonio A" : "Casa Antonio B"} lang={lang} initial={which === "home" ? INITIAL_HOME : INITIAL} />
      ))}
    </section>
  );
}
