export type ReviewQuote = {
  name: string;
  when: string;
  country: string;
  text: string;
};

export type StayReviews = {
  rating: number | null;
  count: number | null;
  quotes: ReviewQuote[];
  href: string;
};

export const reviews: { a: StayReviews; b: StayReviews } = {
  a: {
    rating: null,
    count: null,
    quotes: [],
    href: "https://www.airbnb.com/rooms/1248284267045468378",
  },
  b: {
    rating: null,
    count: null,
    quotes: [],
    href: "https://www.airbnb.com/rooms/1248260873560502499",
  },
};

export function reviewReady(stay: StayReviews) {
  return stay.rating != null && stay.count != null && stay.quotes.length >= 3 && stay.quotes.every((quote) => quote.text && quote.name);
}
