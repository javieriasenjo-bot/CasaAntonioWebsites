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

// Booking.com: real scores and guest comments copied from the two Booking.com listings (checked 2026-10-04).
// Scores are out of 10. Comments are shown in the guest's own language (`lang`); some are the opening lines of
// a longer review (Booking.com truncates them) and are marked `excerpt`. Never invent or edit a quote.
export type BookingQuote = { name: string; country: string; lang: "en" | "ja" | "zh"; text: string; excerpt?: boolean };
export type BookingReviews = { score: number; count: number; label: string; quotes: BookingQuote[]; href: string };

export const bookingReviews: { a: BookingReviews; b: BookingReviews } = {
  a: {
    score: 8.9,
    count: 23,
    label: "Fabulous",
    href: "https://www.booking.com/hotel/jp/casa-antonio-a.html",
    quotes: [
      { name: "Aloysius", country: "Singapore", lang: "en", text: "Really comfortable and nice space. Message and concerns were addressed fast" },
      { name: "Danny", country: "Hong Kong", lang: "en", excerpt: true, text: "The apartment is very clean and tidy. It appears to us a newly renovated and equipped apartment, great value for money." },
      { name: "T", country: "Japan", lang: "ja", text: "とても綺麗で清潔感もあり、我が家のように過ごしてしまいました。外も静かでとても快適でした。すぐ近くにつぼ八もあり歩いて行けました。家族4人でこの金額でしたら本当にお得です！お世話になりました" },
      { name: "藤沢", country: "Japan", lang: "ja", text: "何より高速道路インターのすぐ近くというのがすごく便利でした。イオンのスーパーも徒歩で行けるので助かりました。２泊しましたが室内も清潔で拠点として素晴らしい" },
      { name: "Chia", country: "Taiwan", lang: "zh", excerpt: true, text: "房東提供的入住指令很清楚，回復BOOKING的留言速度很快\n住宅附近臨近地鐵、超市(兩者共構)與往返新千歲機場巴士站\n設備應有盡有，也有提供洗衣機與洗衣液，不過沒有烘乾機" },
    ],
  },
  b: {
    score: 9.7,
    count: 26,
    label: "Exceptional",
    href: "https://www.booking.com/hotel/jp/casa-antonio-b.html",
    quotes: [
      { name: "Fletcher", country: "Australia", lang: "en", text: "Very clean, has a fantastic projector and close enough to everything you need" },
      { name: "Katerina", country: "Singapore", lang: "en", text: "The house is tidy and spacious. the kitchen is well equipped. it is located 7 minutes walk from asabu station and aeon mall.\nthere is a direct bus to new chitose airport at asabu station." },
      { name: "Kuanyi", country: "Taiwan", lang: "zh", text: "非常乾淨、空間大，適合家庭一起入住，一天的旅途結束後，小朋友可以在裡面活動。有洗衣機，冬天的衣服很厚重，每天洗的話就不用帶那麼多。有廚房，可以簡單煮一些料理或泡麵當宵夜。整體來說覺得非常棒。有停車位，對於自駕非常友善，也省了一些停車費。" },
      { name: "レオパ", country: "Japan", lang: "ja", text: "施設が非常に清潔で、設備も充実していて、空間も広くゆとりがあり、外観・内観共に綺麗でした。\n駅近で飲食店やスーパーも近くに豊富、周辺の至近は住宅が多く閑静で深夜の騒音もなく、\n総じて、文句の付け所がほとんどないくらい、非常に良い体験になりました。" },
      { name: "みず", country: "Japan", lang: "ja", text: "無料の駐車場があり出入りも自由なので便利。大きめなワンボックスも大丈夫。\nホテルよりも間取りが広いので家族とゆっくりとくつろぐことが出来た。\n徒歩圏内にイオンや飲食店もあり便利。\n備品類も新しく清潔な感じで良い。\nお風呂があるので旅の疲れをとる事が出来た。" },
      { name: "むろふし", country: "Japan", lang: "ja", text: "清潔で何も不便なく3泊4日、自宅のように快適に過ごすことができました。最寄駅やイオンも近く便利です。マンションの駐車場が無料で使用できるので、とてもありがたかったです。" },
    ],
  },
};
