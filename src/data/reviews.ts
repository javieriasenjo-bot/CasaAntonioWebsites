// Real guest reviews, copied verbatim from the two Airbnb listings (checked 2026-10-01).
// Quotes marked `translated: true` are Airbnb's own English translation of the original.
// Update rating/count when they change on Airbnb. Never invent or edit a quote.

export type ReviewQuote = {
  name: string;
  when: string; // month and year as shown on Airbnb
  country: string; // guest location as shown on Airbnb; "" when Airbnb shows none
  text: string;
  translated?: boolean;
};

export type StayReviews = {
  rating: number | null;
  count: number | null;
  guestFavorite?: boolean;
  quotes: ReviewQuote[];
  href: string;
};

export const reviews: { a: StayReviews; b: StayReviews } = {
  a: {
    rating: 4.87,
    count: 30,
    quotes: [
      {
        name: "Kelly",
        when: "December 2025",
        country: "",
        text: "Best stay of my Hokkaido trip! The place was squeaky clean and the interior design is very modern.",
      },
      {
        name: "Yoshef Wisnu",
        when: "May 2025",
        country: "",
        text: "The property we stayed at truly felt like home. The location is extremely strategic—close to restaurants, Aeon supermarket, Asabu Station, and the bus stop.",
      },
      {
        name: "安",
        when: "January 2025",
        country: "Ichikawa, Japan",
        text: "A beautifully designed house that feels just like home. For someone from a place without snow, the most memorable part is how warm the house is.",
      },
      {
        name: "Hiromi O",
        when: "July 2025",
        country: "Hickory, North Carolina",
        text: "All the rooms were beautiful and new, and we had a very pleasant time.",
        translated: true,
      },
    ],
    href: "https://www.airbnb.com/rooms/1248284267045468378",
  },
  b: {
    rating: 4.95,
    count: 20,
    guestFavorite: true,
    quotes: [
      {
        name: "Supattra",
        when: "December 2025",
        country: "",
        text: "The house truly felt brand new and was extremely clean and well-maintained. We were especially impressed by the projector, which was a great touch and made the stay even more enjoyable.",
      },
      {
        name: "Yolanda",
        when: "February 2026",
        country: "",
        text: "A short walk from the station which saves us a lot of hassle dragging our luggage through the snow! The house was comfortable and warm.",
      },
      {
        name: "Yuki",
        when: "August 2025",
        country: "Marina, California",
        text: "It was very cozy and quiet, clean house. Also, very close to subway to get to Sapporo station. Kitchen and washer machine are helpful.",
      },
      {
        name: "Leonard",
        when: "December 2024",
        country: "Singapore",
        text: "We really love the space of the accommodation. There's a dedicated living room, dining area and huge bathroom as well.",
      },
    ],
    href: "https://www.airbnb.com/rooms/1248260873560502499",
  },
};

export function reviewReady(stay: StayReviews) {
  return stay.rating != null && stay.count != null && stay.quotes.length >= 3 && stay.quotes.every((quote) => quote.text && quote.name);
}
