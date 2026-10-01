import { AIRBNB, MAP } from "@/data/content";
import { ratings } from "@/data/reviews";
import { FONT_STYLESHEET } from "@/lib/fonts";
import {
  HTML_LANG,
  OG_LOCALE,
  ORIGIN,
  absolutePage,
  pagePath,
  type Lang,
  type PageId,
} from "@/lib/paths";

const LASTMOD = "2026-10-01";

type Meta = { title: string; description: string };

const META: Record<PageId, Record<Lang, Meta>> = {
  home: {
    en: {
      title: "Sapporo Apartments near Asabu Station · Casa Antonio",
      description:
        "Two private apartments in one Kita-ku house, about five minutes on foot from Asabu Station, with free parking. Book Casa Antonio A or B on Airbnb.",
    },
    ja: {
      title: "札幌・麻生駅徒歩5分の貸切アパートメント｜Casa Antonio",
      description:
        "札幌市北区の一軒家に、専用入口のアパートメントが二つ。麻生駅から徒歩およそ5分、駐車場は無料です。AirbnbでCasa Antonio AまたはBを予約できます。",
    },
    zh: {
      title: "札幌整套公寓民宿 · 麻生站步行5分钟｜Casa Antonio",
      description:
        "札幌市北区一栋住宅里的两套独立公寓，离麻生站步行约五分钟，门前免费停车。在 Airbnb 预订 Casa Antonio A 或 B。",
    },
    ko: {
      title: "삿포로 아파트 숙소 · 아사부역 도보 5분｜Casa Antonio",
      description:
        "삿포로 기타구의 한 집에 전용 출입구가 있는 아파트가 둘입니다. 아사부역에서 도보 약 5분, 주차는 무료. Airbnb에서 Casa Antonio A 또는 B를 예약하세요.",
    },
  },
  a: {
    en: {
      title: "Casa Antonio A · 100 m² Sapporo Apartment, 4 Guests, Parking",
      description:
        "Ground-floor apartment in Kita-ku, about 100 m², one bedroom and one bath, up to four guests. Three beds in the photos. Private door and free parking.",
    },
    ja: {
      title: "Casa Antonio A｜札幌・約100㎡・4名まで・駐車場付き",
      description:
        "札幌市北区、麻生駅から徒歩約5分の1階アパートメント。約100㎡、寝室1・浴室1、定員4名。明るい居間とキッチン、専用入口、敷地内の無料駐車場。Airbnbで予約できます。",
    },
    zh: {
      title: "Casa Antonio A｜札幌约100㎡公寓，可住4人，可停车",
      description:
        "札幌市北区一楼整套公寓，离地铁麻生站步行约五分钟。约100平方米，一间卧室、一间浴室，最多四位客人。明亮客厅与开放式厨房，独立入口，院内免费停车。可在 Airbnb 预订。",
    },
    ko: {
      title: "Casa Antonio A｜삿포로 약 100㎡·4명·주차",
      description:
        "기타구 1층, 약 100㎡, 침실 하나, 욕실 하나, 최대 네 명. 사진의 침대는 세 개입니다. 전용 출입구와 무료 주차가 있습니다.",
    },
  },
  b: {
    en: {
      title: "Casa Antonio B · Wood-Style Sapporo Apartment with Projector",
      description:
        "Second-floor apartment in the same Kita-ku house. About 70 m², three twin beds, up to three guests, a wood interior, and a projector. Free parking.",
    },
    ja: {
      title: "Casa Antonio B｜木の内装とプロジェクターの札幌アパート",
      description:
        "札幌市北区、麻生駅から徒歩約5分の2階アパートメント。約70㎡、ツインベッド3台、定員3名。木の温もりのある内装と居間のプロジェクター、専用入口と無料駐車場。Airbnbで予約できます。",
    },
    zh: {
      title: "Casa Antonio B｜木质公寓，客厅有投影仪",
      description:
        "札幌市北区二楼整套公寓，离地铁麻生站步行约五分钟。约70平方米，三张单人床，最多三位客人。木质暖调室内，客厅有投影仪，独立入口，门前免费停车。可在 Airbnb 预订。",
    },
    ko: {
      title: "Casa Antonio B｜나무 인테리어와 프로젝터 아파트",
      description:
        "같은 집 2층. 약 70㎡, 싱글 침대 세 개, 최대 세 명. 나무 실내와 거실 프로젝터. 전용 출입구와 무료 주차가 있습니다.",
    },
  },
  neighborhood: {
    en: {
      title: "Asabu, Kita-ku Guide · Subway, AEON, Food · Casa Antonio",
      description:
        "A walk from the house: Asabu Station, AEON, calma, ramen, parks, and a seitai clinic. South on the subway when you want the city.",
    },
    ja: {
      title: "麻生・北区の案内｜地下鉄、イオン、食事｜Casa Antonio",
      description:
        "札幌市北区・麻生の暮らしガイド。麻生駅とイオン札幌麻生店、イタリアンのcalma、ラーメン、公園、整体まで、Casa Antonioから歩ける店と場所。大通・すすき野へは南北線で南へ。",
    },
    zh: {
      title: "麻生·北区指南｜地铁、永旺、用餐｜Casa Antonio",
      description:
        "札幌北区麻生生活指南：从 Casa Antonio 步行可到的麻生站、永旺超市、意大利餐厅 calma、拉面、公园和整体按摩。想去大通和薄野，坐南北线往南几站就到。",
    },
    ko: {
      title: "아사부·기타구 안내｜지하철, 이온, 식사｜Casa Antonio",
      description:
        "집 근처. 아사부역, 이온, calma, 라멘, 공원, 정체. 시내로 갈 때는 지하철로 남쪽. 영업시간은 당일에 확인하세요.",
    },
  },
  "day-trips": {
    en: {
      title: "Day Trips from Sapporo: Otaru, Furano, Teine · Casa Antonio",
      description:
        "One direction, then home: Otaru, Noboribetsu, Jozankei, Furano and Biei, the Hill of the Buddha, Lake Toya, or Sapporo Teine. Check the day.",
    },
    ja: {
      title: "札幌からの日帰り｜小樽、富良野、手稲｜Casa Antonio",
      description:
        "行き先は一つにして、同じ扉に戻る。小樽、登別、定山渓、富良野と美瑛、頭大仏、洞爺湖、サッポロテイネ。時刻と運賃はその日に確認を。",
    },
    zh: {
      title: "札幌一日游｜小樽、富良野、手稻｜Casa Antonio",
      description:
        "选一个方向，再回到同一扇门。小樽、登别、定山溪、富良野与美瑛、头大佛、洞爷湖，或札幌手稻。时刻和票价请当天确认。",
    },
    ko: {
      title: "삿포로 당일치기｜오타루, 후라노, 데이네｜Casa Antonio",
      description:
        "방향은 하나, 그리고 같은 문으로. 오타루, 노보리베쓰, 조잔케이, 후라노와 비에이, 머리 대불, 도야호, 삿포로 데이네. 시간과 요금은 당일 확인.",
    },
  },
  arrival: {
    en: {
      title: "Check-in, Parking & Arrival · Casa Antonio Sapporo",
      description:
        "Check-in 16:00–23:00, self check-in. Check-out by 10:00. Free private parking. No smoking, no pets, no parties. Licenses M010045173 and M010045174.",
    },
    ja: {
      title: "チェックイン・駐車場・到着｜Casa Antonio 札幌",
      description:
        "チェックインは16:00–23:00、セルフチェックイン。チェックアウトは10:00まで。駐車場は無料。禁煙、ペット不可、パーティー不可。届出番号はAがM010045173、BがM010045174。",
    },
    zh: {
      title: "入住、停车与到达｜Casa Antonio 札幌",
      description:
        "入住 16:00–23:00，自助入住。退房不晚于 10:00。院内免费停车。禁烟、不可带宠物、不可开派对。备案号 A 为 M010045173，B 为 M010045174。",
    },
    ko: {
      title: "체크인·주차·도착｜Casa Antonio 삿포로",
      description:
        "체크인 16:00–23:00, 셀프 체크인. 체크아웃은 10:00까지. 주차는 무료. 금연, 반려동물 불가, 파티 불가. 신고 번호 A M010045173, B M010045174.",
    },
  },
  access: {
    en: {
      title: "New Chitose Airport to Asabu · Casa Antonio",
      description:
        "Fly into New Chitose, not Okadama. Airport rapid to Sapporo Station, then the Namboku line north to Asabu, about five minutes on foot to the door.",
    },
    ja: {
      title: "新千歳空港から麻生へ｜Casa Antonio",
      description:
        "新千歳空港から札幌・麻生のCasa Antonioへの行き方。快速エアポートで札幌駅、南北線に乗り換えて終点の麻生まで約7分、駅から徒歩約5分。車で来る場合の道順と駐車も。",
    },
    zh: {
      title: "从新千岁机场到麻生｜Casa Antonio",
      description:
        "从新千岁机场到札幌麻生 Casa Antonio 的交通方式：乘 JR 快速机场线到札幌站，换乘地铁南北线到终点麻生约七分钟，出站步行约五分钟。也包括自驾路线与停车。",
    },
    ko: {
      title: "신치토세 공항에서 아사부까지｜Casa Antonio",
      description:
        "도착 공항은 신치토세입니다. 오카다마가 아닙니다. 공항 쾌속으로 삿포로역, 난보쿠선으로 아사부까지 북상한 뒤 도보 약 5분입니다.",
    },
  },
  "snow-festival": {
    en: {
      title: "Sapporo Snow Festival Stay · Casa Antonio",
      description:
        "A quiet Kita-ku base for the Snow Festival. Namboku line from Asabu south to Odori and Susukino. The city sets the February dates each year.",
    },
    ja: {
      title: "さっぽろ雪まつりへ泊まる｜Casa Antonio",
      description:
        "さっぽろ雪まつりの宿に、静かな北区の一軒家。麻生駅から南北線一本で大通会場とすすきの会場へ。混雑する中心部を避けて、キッチン付きの部屋で過ごす2月の札幌。",
    },
    zh: {
      title: "札幌雪祭住宿｜Casa Antonio",
      description:
        "札幌雪祭住哪里？安静的北区整套公寓，从麻生站乘南北线一条线直达大通会场和薄野会场。避开市中心的拥挤，二月的札幌住在带厨房的家里。会期由札幌市每年公布。",
    },
    ko: {
      title: "삿포로 눈축제에 머무르기｜Casa Antonio",
      description:
        "눈축제의 기점은 조용한 기타구의 집. 아사부에서 난보쿠선으로 남쪽, 오도리와 스스키노. 2월 일정은 시가 그해 발표합니다.",
    },
  },
  "teine-ski": {
    en: {
      title: "Sapporo Teine Ski Base · Casa Antonio",
      description:
        "Work in the morning, ski Sapporo Teine in the afternoon, and come back to the same door. Olympia and Highland. Free parking at the house.",
    },
    ja: {
      title: "サッポロテイネの拠点｜Casa Antonio",
      description:
        "サッポロテイネへ通うスキー拠点。札幌市北区から車で西へ、オリンピアゾーンとハイランドゾーン。午前は部屋で仕事、午後は滑走、夜は同じ扉へ。家の前の駐車場は無料です。",
    },
    zh: {
      title: "札幌手稻滑雪的住处｜Casa Antonio",
      description:
        "札幌手稻滑雪场的住宿基地：从札幌北区开车往西，奥林匹亚区与高地区都方便。上午在房间工作，下午去滑雪，晚上回到同一个家。门前停车免费，带厨房与洗衣机。",
    },
    ko: {
      title: "삿포로 데이네 스키 베이스｜Casa Antonio",
      description:
        "오전에는 방에서 일하고, 오후에 삿포로 데이네, 밤에는 같은 문. 올림피아와 하일랜드. 집 앞 주차는 무료입니다.",
    },
  },
  "long-stay": {
    en: {
      title: "Long Stays in Sapporo · Casa Antonio",
      description:
        "Weeks or months in Casa Antonio A or B, at a rate below stacked nightly prices. Write through Airbnb. The rate is agreed in writing before you pay.",
    },
    ja: {
      title: "札幌の長期滞在｜Casa Antonio",
      description:
        "札幌でマンスリー・長期滞在。Casa Antonio AまたはBに数週間から数ヶ月、一泊料金を積み上げるより低い特別料金で。キッチン、洗濯機、無料駐車場付き。Airbnbからご相談ください。",
    },
    zh: {
      title: "在札幌住几周或几个月｜Casa Antonio",
      description:
        "札幌长住、月租公寓：Casa Antonio A 或 B 可按周、按月入住，价格低于每晚房价相加。带厨房、洗衣机和免费停车，适合工作、留学或家人探访。通过 Airbnb 联系，付款前书面确认费用。",
    },
    ko: {
      title: "삿포로 장기 숙박｜Casa Antonio",
      description:
        "몇 주, 또는 몇 달. A도 B도, 1박 요금을 쌓은 금액보다 낮습니다. Airbnb로 문의하세요. 내기 전에 요금을 글로 정합니다.",
    },
  },
  faq: {
    en: {
      title: "Questions before You Book · Casa Antonio",
      description:
        "Check-in 16:00–23:00, check-out by 10:00, self check-in, free parking, Asabu Station, New Chitose Airport, and the house rules. No invented extras.",
    },
    ja: {
      title: "泊まる前の質問｜Casa Antonio",
      description:
        "チェックイン16:00–23:00、チェックアウト10:00まで、セルフチェックイン、無料駐車場、麻生駅、新千歳空港、ハウスルール。ここにないことは書きません。",
    },
    zh: {
      title: "预订前的问题｜Casa Antonio",
      description:
        "入住 16:00–23:00，退房不晚于 10:00，自助入住，免费停车，麻生站，新千岁机场，以及房屋规则。没有的事情，这里不写。",
    },
    ko: {
      title: "예약 전에 묻는 것｜Casa Antonio",
      description:
        "체크인 16:00–23:00, 체크아웃 10:00까지, 셀프 체크인, 무료 주차, 아사부역, 신치토세 공항, 하우스 룰. 없는 일은 적지 않습니다.",
    },
  },
  privacy: {
    en: {
      title: "Privacy · Casa Antonio",
      description:
        "What this site stores: a language preference, and analytics through Google Tag Manager. Bookings stay on Airbnb. No account on this site.",
    },
    ja: {
      title: "プライバシー｜Casa Antonio",
      description:
        "このサイトが覚えるのは言語の選択と、Googleタグマネージャーによる計測です。予約はAirbnbです。このサイトにアカウントはありません。",
    },
    zh: {
      title: "隐私｜Casa Antonio",
      description: "本站只记住语言选择，并通过 Google Tag Manager 做统计。预订在 Airbnb。本站没有账户。",
    },
    ko: {
      title: "개인정보｜Casa Antonio",
      description:
        "이 사이트가 기억하는 것은 언어 선택과 Google 태그 매니저 측정입니다. 예약은 Airbnb입니다. 이 사이트에 계정은 없습니다.",
    },
  },
};

const HERO: Partial<Record<PageId, string>> = {
  home: "living",
  a: "living",
  b: "entry",
};

export const OG_IMAGE: Record<PageId, string> = {
  home: "/photos/og-home.jpg",
  a: "/photos/og-a.jpg",
  b: "/photos/og-b.jpg",
  neighborhood: "/photos/og-neighborhood.jpg",
  "day-trips": "/photos/og-day-trips.jpg",
  arrival: "/photos/og-arrival.jpg",
  access: "/photos/og-access.jpg",
  "snow-festival": "/photos/og-snow.jpg",
  "teine-ski": "/photos/og-teine.jpg",
  "long-stay": "/photos/og-long-stay.jpg",
  faq: "/photos/og-faq.jpg",
  privacy: "/photos/og-home.jpg",
};

export function pageMeta(page: PageId, lang: Lang): Meta {
  return META[page][lang];
}

export function alternates(page: PageId) {
  const langs: { hreflang: string; href: string }[] = [
    { hreflang: "en", href: absolutePage(page, "en") },
    { hreflang: "ja", href: absolutePage(page, "ja") },
    { hreflang: "zh-Hans", href: absolutePage(page, "zh") },
    { hreflang: "ko", href: absolutePage(page, "ko") },
    { hreflang: "x-default", href: absolutePage(page, "en") },
  ];
  return langs;
}

const CRUMB: Record<Lang, Record<PageId, string>> = {
  en: {
    home: "Home",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "Near our home",
    "day-trips": "Day trips",
    arrival: "Arrival",
    access: "From the airport",
    "snow-festival": "Snow Festival",
    "teine-ski": "Sapporo Teine",
    "long-stay": "Long stays",
    faq: "Questions",
    privacy: "Privacy",
  },
  ja: {
    home: "ホーム",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "家の近く",
    "day-trips": "日帰り",
    arrival: "到着",
    access: "空港から",
    "snow-festival": "雪まつり",
    "teine-ski": "サッポロテイネ",
    "long-stay": "長期滞在",
    faq: "質問",
    privacy: "プライバシー",
  },
  zh: {
    home: "首页",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "家附近",
    "day-trips": "一日游",
    arrival: "入住",
    access: "从机场",
    "snow-festival": "雪祭",
    "teine-ski": "札幌手稻",
    "long-stay": "长期住宿",
    faq: "问题",
    privacy: "隐私",
  },
  ko: {
    home: "홈",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "집 근처",
    "day-trips": "당일치기",
    arrival: "도착",
    access: "공항에서",
    "snow-festival": "눈축제",
    "teine-ski": "삿포로 데이네",
    "long-stay": "장기 숙박",
    faq: "질문",
    privacy: "개인정보",
  },
};

export function crumbLabel(page: PageId, lang: Lang) {
  return CRUMB[lang][page];
}

function aggregateRating(ids: readonly ("a" | "b")[]) {
  const rated = ids.map((id) => ratings[id]).filter((r) => r.rating !== null && r.count !== null) as { rating: number; count: number }[];
  if (!rated.length) return {};
  const count = rated.reduce((sum, r) => sum + r.count, 0);
  const value = rated.reduce((sum, r) => sum + r.rating * r.count, 0) / count;
  return {
    aggregateRating: { "@type": "AggregateRating", ratingValue: Number(value.toFixed(2)), reviewCount: count, bestRating: 5 },
  };
}

const ARTICLE_PAGES: PageId[] = ["neighborhood", "day-trips", "access", "snow-festival", "teine-ski", "long-stay"];

function article(page: PageId, lang: Lang) {
  const meta = pageMeta(page, lang);
  return {
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: `${ORIGIN}${OG_IMAGE[page]}`,
    inLanguage: HTML_LANG[lang],
    url: absolutePage(page, lang),
    dateModified: LASTMOD,
    author: { "@type": "Organization", name: "Casa Antonio", url: `${ORIGIN}/` },
    publisher: { "@type": "Organization", name: "Casa Antonio", url: `${ORIGIN}/` },
    mainEntityOfPage: absolutePage(page, lang),
  };
}

function lodging() {
  return {
    "@type": "LodgingBusiness",
    name: "Casa Antonio",
    url: `${ORIGIN}/`,
    image: `${ORIGIN}${OG_IMAGE.home}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "北38条西3丁目1-7",
      addressLocality: "札幌市北区",
      addressRegion: "北海道",
      postalCode: "001-0038",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAP.lat,
      longitude: MAP.lng,
    },
    checkinTime: "16:00",
    checkoutTime: "10:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free private parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self check-in", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Non-smoking", value: true },
    ],
    sameAs: [AIRBNB.a, AIRBNB.b],
    ...aggregateRating(["a", "b"]),
  };
}

function breadcrumb(page: PageId, lang: Lang) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: CRUMB[lang].home,
      item: absolutePage("home", lang),
    },
  ];
  if (page !== "home") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: CRUMB[lang][page],
      item: absolutePage(page, lang),
    });
  }
  return { "@type": "BreadcrumbList", itemListElement: items };
}

function apartment(id: "a" | "b", lang: Lang) {
  const page: PageId = id;
  const isA = id === "a";
  return {
    "@type": "Apartment",
    name: isA ? "Casa Antonio A" : "Casa Antonio B",
    url: absolutePage(page, lang),
    image: isA
      ? [`${ORIGIN}/photos/living.jpg`, `${ORIGIN}/photos/bedroom.jpg`, `${ORIGIN}/photos/kitchen.jpg`]
      : [`${ORIGIN}/photos/exterior.jpg`, `${ORIGIN}/photos/entry.jpg`, `${ORIGIN}/photos/street.jpg`],
    floorSize: {
      "@type": "QuantitativeValue",
      value: isA ? 100 : 70,
      unitCode: "MTK",
    },
    numberOfBedrooms: 1,
    numberOfBathroomsTotal: 1,
    occupancy: { "@type": "QuantitativeValue", maxValue: isA ? 4 : 3 },
    bed: isA
      ? [{ "@type": "BedDetails", numberOfBeds: 3 }]
      : [{ "@type": "BedDetails", typeOfBed: "Twin", numberOfBeds: 3 }],
    containedInPlace: { "@type": "LodgingBusiness", name: "Casa Antonio", url: `${ORIGIN}/` },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free private parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      ...(isA ? [] : [{ "@type": "LocationFeatureSpecification", name: "Projector", value: true }]),
    ],
    ...aggregateRating([id]),
  };
}

export function faqEntities(lang: Lang) {
  const q = FAQ[lang];
  return q.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  }));
}

export const FAQ: Record<Lang, { q: string; a: string }[]> = {
  en: [
    {
      q: "What time is check-in?",
      a: "16:00 to 23:00. It is self check-in. Airbnb sends the lock instructions after you book. They are not posted on this site.",
    },
    {
      q: "What time is check-out?",
      a: "By 10:00. You may leave from 06:00.",
    },
    {
      q: "Is parking available?",
      a: "Yes. Free, private, on site, on the apron in front of the doors.",
    },
    {
      q: "Which station is nearest?",
      a: "Asabu Station on the Namboku subway line, about a five-minute walk. It is the north end of the line.",
    },
    {
      q: "Which airport do I fly into?",
      a: "New Chitose Airport. Okadama, in the city, is not the airport for this stay. From New Chitose, take the JR Airport rapid to Sapporo Station, then the Namboku line north to Asabu.",
    },
    {
      q: "Can I smoke, bring a pet, or have a party?",
      a: "No smoking anywhere on the property, including the entrances and the parking area. No pets. No parties.",
    },
    {
      q: "Is there a damage deposit?",
      a: "A damage deposit of up to ¥15,000 may be charged if something is broken.",
    },
    {
      q: "How many people can stay?",
      a: "Casa Antonio A is listed for up to four guests. The photographs show three beds. Casa Antonio B has three twin beds and is listed for up to three guests. The guest checking in should be 18 or older. Children are welcome. Only people named on the booking stay here.",
    },
    {
      q: "How do long stays work?",
      a: "Write through Airbnb with your dates. A stay of weeks or months is priced below stacked nightly rates. The rate is agreed in writing before you pay. This site does not take the booking.",
    },
    {
      q: "Is there Wi-Fi?",
      a: "Yes. The apartment has Wi-Fi. This site does not publish a speed.",
    },
  ],
  ja: [
    {
      q: "チェックインは何時ですか？",
      a: "16:00から23:00です。セルフチェックインです。予約のあと、Airbnbに解錠の手順が届きます。このサイトには載せません。",
    },
    {
      q: "チェックアウトは何時ですか？",
      a: "10:00までです。06:00から出発できます。",
    },
    {
      q: "駐車場はありますか？",
      a: "あります。無料で、専用、敷地内です。扉の前のスペースです。",
    },
    {
      q: "最寄り駅はどこですか？",
      a: "地下鉄南北線・麻生駅。徒歩およそ5分です。南北線の北の終点です。",
    },
    {
      q: "どの空港に着きますか？",
      a: "新千歳空港です。市内の丘珠空港は、この滞在の空港ではありません。新千歳から快速エアポートで札幌駅へ、南北線で麻生まで北上します。",
    },
    {
      q: "喫煙、ペット、パーティーはできますか？",
      a: "入口も駐車場も含め、敷地内は禁煙です。ペットは不可。パーティーも不可です。",
    },
    {
      q: "損害金はありますか？",
      a: "壊したものがある場合、最大15,000円の損害金をいただくことがあります。",
    },
    {
      q: "何名まで泊まれますか？",
      a: "Casa Antonio Aの定員は4名です。写真のベッドは3台です。Bはツインベッド3台、定員3名です。チェックインする方は18歳以上。お子さまは歓迎します。泊まれるのは予約に名前のある人だけです。",
    },
    {
      q: "長期滞在はどうしますか？",
      a: "日程を添えてAirbnbから連絡してください。数週間や数ヶ月は、一泊料金を積み上げた額より低い料金です。支払う前に文面で決めます。このサイトでは予約を受けません。",
    },
    {
      q: "Wi-Fiはありますか？",
      a: "あります。速度の数字は公表していません。",
    },
  ],
  zh: [
    {
      q: "几点入住？",
      a: "16:00 到 23:00，自助入住。预订之后，开锁方式通过 Airbnb 发送，不印在这个网站上。",
    },
    {
      q: "几点退房？",
      a: "不晚于 10:00。早上 06:00 起可以离开。",
    },
    {
      q: "有停车位吗？",
      a: "有。免费、专用、在院内，就在门前。",
    },
    {
      q: "最近的车站是哪一站？",
      a: "南北线麻生站，步行大约五分钟。这是南北线最北的一站。",
    },
    {
      q: "飞到哪个机场？",
      a: "新千岁机场。市内的丘珠机场不是这次住宿的机场。从新千岁乘机场快速到札幌站，再乘南北线往北到麻生。",
    },
    {
      q: "可以吸烟、带宠物或办派对吗？",
      a: "包括入口和停车场在内，整栋房子禁烟。不可带宠物。不可办派对。",
    },
    {
      q: "有损坏押金吗？",
      a: "如果有东西损坏，可能会收取最高 15,000 日元的赔偿。",
    },
    {
      q: "可以住几个人？",
      a: "Casa Antonio A 最多四位客人。照片里是三张床。B 有三张单人床，最多三位客人。办理入住的客人须年满 18 岁。欢迎孩子。只有预订上的人可以住。",
    },
    {
      q: "长期住怎么订？",
      a: "带着日期，通过 Airbnb 联系。住几周或几个月，价格低于把每晚房价加在一起。付款前用书面确认。这个网站不收款。",
    },
    {
      q: "有 Wi-Fi 吗？",
      a: "有。这里不公布速度。",
    },
  ],
  ko: [
    {
      q: "체크인은 몇 시인가요?",
      a: "16:00부터 23:00까지. 셀프 체크인입니다. 예약 뒤, 문 여는 방법은 Airbnb로 옵니다. 이 사이트에는 적지 않습니다.",
    },
    {
      q: "체크아웃은 몇 시인가요?",
      a: "10:00까지입니다. 06:00부터 나갈 수 있습니다.",
    },
    {
      q: "주차가 되나요?",
      a: "됩니다. 무료이고, 전용이며, 부지 안입니다. 문 앞 공간입니다.",
    },
    {
      q: "가장 가까운 역은 어디인가요?",
      a: "지하철 난보쿠선 아사부역. 도보 약 5분입니다. 난보쿠선의 북쪽 끝입니다.",
    },
    {
      q: "어느 공항에 내리나요?",
      a: "신치토세 공항입니다. 시내의 오카다마 공항은 이 숙박의 공항이 아닙니다. 신치토세에서 공항 쾌속으로 삿포로역, 난보쿠선으로 아사부까지 북상합니다.",
    },
    {
      q: "흡연, 반려동물, 파티가 되나요?",
      a: "입구와 주차장을 포함해 부지 안은 금연입니다. 반려동물은 안 됩니다. 파티도 안 됩니다.",
    },
    {
      q: "손해 보증금이 있나요?",
      a: "파손된 것이 있으면 최대 15,000엔의 손해금을 받을 수 있습니다.",
    },
    {
      q: "몇 명까지 묵나요?",
      a: "Casa Antonio A는 최대 네 명입니다. 사진의 침대는 세 개입니다. B는 싱글 침대 세 개, 최대 세 명입니다. 체크인하는 분은 18세 이상. 어린이는 환영합니다. 예약에 이름이 있는 사람만 묵습니다.",
    },
    {
      q: "장기 숙박은 어떻게 하나요?",
      a: "날짜를 적어 Airbnb로 연락하세요. 몇 주나 몇 달은, 1박 요금을 쌓은 금액보다 낮습니다. 내기 전에 글로 정합니다. 이 사이트에서는 예약을 받지 않습니다.",
    },
    {
      q: "Wi-Fi가 있나요?",
      a: "있습니다. 속도는 적지 않습니다.",
    },
  ],
};

export function jsonLd(page: PageId, lang: Lang) {
  const graph: object[] = [breadcrumb(page, lang)];
  if (page === "home") {
    graph.push(lodging(), {
      "@type": "WebSite",
      name: "Casa Antonio",
      url: `${ORIGIN}/`,
      inLanguage: ["en", "ja", "zh-Hans", "ko"],
    });
  }
  if (page === "a" || page === "b") graph.push(apartment(page, lang));
  if (ARTICLE_PAGES.includes(page)) graph.push(article(page, lang));
  if (page === "faq" || page === "arrival") {
    graph.push({ "@type": "FAQPage", mainEntity: faqEntities(lang) });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function headFor(page: PageId, lang: Lang) {
  const meta = pageMeta(page, lang);
  const canonical = absolutePage(page, lang);
  const image = `${ORIGIN}${OG_IMAGE[page]}`;
  const hero = HERO[page];
  const links: Record<string, string>[] = [
    { rel: "canonical", href: canonical },
    ...alternates(page).map((item) => ({ rel: "alternate", hrefLang: item.hreflang, href: item.href })),
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  ];
  if (hero) {
    links.push({
      rel: "preload",
      as: "image",
      type: "image/avif",
      href: `/photos/${hero}-800.avif`,
      imageSrcSet: `/photos/${hero}-800.avif 800w, /photos/${hero}-1600.avif 1600w`,
      imageSizes: "100vw",
      fetchPriority: "high",
    });
  }
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: OG_LOCALE[lang] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
      { name: "twitter:image", content: image },
    ],
    links,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd(page, lang)) }],
  };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u0026lt;")
    .replace(/>/g, "\u0026gt;")
    .replace(/"/g, "\u0026quot;");
}

export function headTags(page: PageId, lang: Lang) {
  const built = headFor(page, lang);
  const meta = built.meta
    .map((tag) => {
      if ("title" in tag && tag.title) return `<title>${escapeHtml(tag.title)}</title>`;
      if ("name" in tag && tag.name) return `<meta name="${tag.name}" content="${escapeHtml(String(tag.content))}" />`;
      if ("property" in tag && tag.property) {
        return `<meta property="${tag.property}" content="${escapeHtml(String(tag.content))}" />`;
      }
      return "";
    })
    .join("\n");
  const links = built.links
    .map((link) => {
      const attrs = Object.entries(link)
        .map(([key, value]) => {
          const attr =
            key === "hrefLang"
              ? "hreflang"
              : key === "imageSrcSet"
                ? "imagesrcset"
                : key === "imageSizes"
                  ? "imagesizes"
                  : key === "fetchPriority"
                    ? "fetchpriority"
                    : key === "crossOrigin"
                      ? "crossorigin"
                      : key;
          return `${attr}="${escapeHtml(String(value))}"`;
        })
        .join(" ");
      return `<link ${attrs} />`;
    })
    .join("\n");
  const font = FONT_STYLESHEET[lang];
  const fontLink = `<link id="casa-font" rel="stylesheet" href="${font}" media="print" data-lang="${lang}" onload="this.media='all'" />\n<noscript><link rel="stylesheet" href="${font}" /></noscript>`;
  const ld = built.scripts
    .map((script) => `<script type="application/ld+json">${script.children}</script>`)
    .join("\n");
  return { htmlLang: HTML_LANG[lang], meta, links, fontLink, ld, path: pagePath(page, lang) };
}

export function sitemapXml() {
  const pages = Object.keys(META) as PageId[];
  const urls = pages.flatMap((page) =>
    (["en", "ja", "zh", "ko"] as Lang[]).map((lang) => {
      const links = alternates(page)
        .map((item) => `    <xhtml:link rel="alternate" hreflang="${item.hreflang}" href="${item.href}" />`)
        .join("\n");
      return `  <url>\n    <loc>${absolutePage(page, lang)}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n${links}\n  </url>`;
    }),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
}
