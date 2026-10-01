import { reviewReady, reviews, type StayReviews } from "@/data/reviews";

function Block({ stay, title }: { stay: StayReviews; title: string }) {
  if (!reviewReady(stay) || stay.rating == null || stay.count == null) return null;
  return (
    <section className="reviews">
      <h2>
        {title} · {stay.rating} · {stay.count}
      </h2>
      <ul>
        {stay.quotes.map((quote) => (
          <li key={`${quote.name}-${quote.when}`}>
            <blockquote>{quote.text}</blockquote>
            <p>
              {quote.name} · {quote.when} · {quote.country}
            </p>
          </li>
        ))}
      </ul>
      <p>
        <a href={stay.href}>Airbnb</a>
      </p>
    </section>
  );
}

export function Reviews({ which }: { which: "home" | "a" | "b" }) {
  if (which === "home") {
    const ready = (["a", "b"] as const).filter((id) => reviewReady(reviews[id]));
    if (ready.length === 0) return null;
    return (
      <>
        {ready.map((id) => (
          <Block key={id} stay={reviews[id]} title={id === "a" ? "Casa Antonio A" : "Casa Antonio B"} />
        ))}
      </>
    );
  }
  return <Block stay={reviews[which]} title={which === "a" ? "Casa Antonio A" : "Casa Antonio B"} />;
}
