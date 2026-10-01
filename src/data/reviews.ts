// Fill these in with real Airbnb data. While rating/count are null and quotes is empty,
// the reviews block stays hidden and no aggregateRating is added to the structured data.
// Never invent values.

export type ReviewQuote = {
  apartment: "a" | "b";
  name: string; // guest first name, as shown on Airbnb
  month: string; // e.g. "2026-02"
  country: string; // e.g. "Hong Kong"
  text: string; // short quote, original language is fine
};

export const ratings: Record<"a" | "b", { rating: number | null; count: number | null }> = {
  a: { rating: null, count: null },
  b: { rating: null, count: null },
};

export const quotes: ReviewQuote[] = [];

export function hasReviews(apartment?: "a" | "b") {
  const ids = apartment ? [apartment] : (["a", "b"] as const);
  return (
    ids.some((id) => ratings[id].rating !== null && ratings[id].count !== null) ||
    quotes.some((q) => !apartment || q.apartment === apartment)
  );
}
