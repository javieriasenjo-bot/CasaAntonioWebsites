import { AirbnbLink } from "@/components/airbnb-link";
import { reviewLabels } from "@/data/highlights";
import { hasReviews, quotes, ratings } from "@/data/reviews";
import { useLang } from "@/lib/i18n";

// Renders nothing until real Airbnb data is filled in src/data/reviews.ts.
export function Reviews({ apartment }: { apartment?: "a" | "b" }) {
  const { lang } = useLang();
  if (!hasReviews(apartment)) return null;
  const l = reviewLabels[lang];
  const ids = apartment ? [apartment] : (["a", "b"] as const);
  const shown = quotes.filter((q) => !apartment || q.apartment === apartment).slice(0, 4);

  return (
    <section className="reviews-section">
      <div className="wrap">
        <h2>{l.title}</h2>
        <div className="review-scores">
          {ids.map((id) => {
            const r = ratings[id];
            if (r.rating === null || r.count === null) return null;
            return (
              <AirbnbLink key={id} cabin={id} location="reviews" className="review-score">
                <strong>★ {r.rating.toFixed(2)}</strong>
                <span>
                  Casa Antonio {id.toUpperCase()} · {l.on} · {r.count} {l.reviews}
                </span>
              </AirbnbLink>
            );
          })}
        </div>
        {shown.length ? (
          <ul className="review-quotes">
            {shown.map((q) => (
              <li key={`${q.name}-${q.month}`}>
                <blockquote>“{q.text}”</blockquote>
                <p>
                  {q.name}, {q.country} · {q.month} · Casa Antonio {q.apartment.toUpperCase()}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
