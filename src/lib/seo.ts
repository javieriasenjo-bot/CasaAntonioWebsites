import { AIRBNB, MAP } from "@/data/facts";
import { photoFile, photoMeta } from "@/lib/photo-manifest";
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
        "Two private apartments in one Kita-ku house, about five minutes on foot from Asabu Station. Free parking, one car each. Book A or B on Airbnb.",
    },
    ja: {
      title: "札幌・麻生駅徒歩5分の貸切アパートメント｜Casa Antonio",
      description:
        "札幌市北区の一軒家に、専用入口のアパートが二つ。麻生駅から徒歩約5分。各約65㎡、キッチン付きの静かな住宅街です。AirbnbでAまたはBを予約できます。",
    },
    zh: {
      title: "札幌整套公寓民宿 · 麻生站步行5分钟｜Casa Antonio",
      description:
        "札幌市北区一栋住宅里的两套独立公寓，离麻生站步行约五分钟，每套约65平方米，有厨房，门前可停车。在 Airbnb 预订 Casa Antonio A 或 B。",
    },
    ko: {
      title: "삿포로 아파트 숙소 · 아사부역 도보 5분｜Casa Antonio",
      description:
        "삿포로 기타구의 한 집에 전용 출입구가 있는 아파트가 둘입니다. 아사부역에서 도보 약 5분, 주차는 무료. Airbnb에서 Casa Antonio A 또는 B를 예약하세요.",
    },
  },
  a: {
    en: {
      title: "Casa Antonio A · 65 m² Sapporo Apartment, 4 Guests, Parking",
      description:
        "Ground-floor apartment in Kita-ku, about 65 m², two bedrooms and one living room, up to four guests. One free parking space. Private door.",
    },
    ja: {
      title: "Casa Antonio A｜札幌・約65㎡・4名まで・駐車場付き",
      description:
        "北区の1階、約65㎡。寝室2、居間1、浴室1、定員4名。ベッドは各寝室に2台です。麻生駅から徒歩約5分。専用入口と、無料の駐車場が1台あります。",
    },
    zh: {
      title: "Casa Antonio A｜札幌约65㎡公寓，可住4人，可停车",
      description:
        "北区一楼，约65平方米，两间卧室、一间起居室、一间浴室，最多四位客人。每间卧室两张床。离麻生站步行约五分钟。独立入口，每套公寓免费停车一位。",
    },
    ko: {
      title: "Casa Antonio A｜삿포로 약 65㎡·4명·주차",
      description:
        "기타구 1층, 약 65㎡, 침실 둘과 거실, 최대 네 명. 침실마다 침대 두 개입니다. 전용 출입구와 무료 주차 한 대가 있습니다. 조용한 주택가입니다.",
    },
  },
  b: {
    en: {
      title: "Casa Antonio B · Wood-Style Sapporo Apartment with Projector",
      description:
        "Second-floor apartment in the same Kita-ku house. About 65 m², three twin beds, up to three guests, a wood interior, and a projector. Free parking.",
    },
    ja: {
      title: "Casa Antonio B｜木の内装とプロジェクターの札幌アパート",
      description:
        "同じ家の2階、階段で上がります。約65㎡、ツインベッド3台、定員3名。木の内装と居間のプロジェクター。麻生駅から徒歩約5分、無料駐車場があります。 麻生の住宅街です。",
    },
    zh: {
      title: "Casa Antonio B｜木质公寓，客厅有投影仪",
      description:
        "同一栋房子的二楼，走楼梯上去。约65平方米，三张单人床，最多三位客人。木质室内，起居室有投影仪。离麻生站步行约五分钟，免费停车。 这是安静的住宅街。 厨房可以自己做饭。",
    },
    ko: {
      title: "Casa Antonio B｜나무 인테리어와 프로젝터 아파트",
      description:
        "같은 집 2층. 약 65㎡, 싱글 침대 세 개, 최대 세 명. 나무 실내와 거실 프로젝터. 전용 출입구와 무료 주차가 있습니다. 조용한 주택가입니다.",
    },
  },
  neighborhood: {
    en: {
      title: "Nearby in Asabu · Food, Parks, Teine · Casa Antonio",
      description:
        "Places worth naming from the house: meals, a supermarket, parks, a clinic, and the subway south. Map links open Google Maps. Check the day’s hours.",
    },
    ja: {
      title: "麻生・北区の案内｜地下鉄、イオン、食事｜Casa Antonio",
      description:
        "家のまわり。麻生駅、イオン、calma、ラーメン、公園、整体。街へ出るときは地下鉄で南へ。営業時間はその日に確認してください。徒歩で足りる用事をまとめています。",
    },
    zh: {
      title: "麻生·北区指南｜地铁、永旺、用餐｜Casa Antonio",
      description:
        "房子附近：麻生站、永旺、calma、拉面、公园和整体。想进城就坐地铁往南。营业时间请当天确认。把从这栋房子步行能到的事情写在这一页。 这是安静的住宅街。 厨房可以自己做饭。",
    },
    ko: {
      title: "아사부·기타구 안내｜지하철, 이온, 식사｜Casa Antonio",
      description:
        "집 근처. 아사부역, 이온, calma, 라멘, 공원, 정체. 시내로 갈 때는 지하철로 남쪽. 영업시간은 당일에 확인하세요. 조용한 주택가입니다.",
    },
  },
  "day-trips": {
    en: {
      title: "Day Trips from Sapporo: Otaru, Furano, Teine · Casa Antonio",
      description:
        "One direction, then home: Otaru, Noboribetsu, Jozankei, Furano and Biei, Lake Toya, Teine, Upopoy in Shiraoi, or the Hill of the Buddha. Check the day.",
    },
    ja: {
      title: "札幌からの日帰り｜小樽、富良野、手稲｜Casa Antonio",
      description:
        "行き先は一つにして、同じ扉に戻る。小樽、登別、定山渓、富良野と美瑛、洞爺湖、手稲、白老のウポポイ、頭大仏。北区の家から出る一日です。時刻と運賃はその日に確認を。",
    },
    zh: {
      title: "札幌一日游｜小樽、富良野、手稻｜Casa Antonio",
      description:
        "选一个方向，再回到同一扇门。小樽、登别、定山溪、富良野与美瑛、洞爷湖、手稻、白老的 Upopoy，或头大佛。时刻和票价请当天确认。",
    },
    ko: {
      title: "삿포로 당일치기｜오타루, 후라노, 데이네｜Casa Antonio",
      description:
        "방향은 하나, 그리고 같은 문으로. 오타루, 노보리베쓰, 조잔케이, 후라노와 비에이, 도야호, 데이네, 시라오이 우포포이, 머리 대불. 시간과 요금은 당일 확인.",
    },
  },
  arrival: {
    en: {
      title: "Check-in, Parking & Arrival · Casa Antonio Sapporo",
      description:
        "Check-in 16:00–23:00, self check-in. Leave any time until 10:00. Free parking, one car per apartment. No smoking, no pets, no parties.",
    },
    ja: {
      title: "チェックイン・駐車場・到着｜Casa Antonio 札幌",
      description:
        "チェックインは16:00–23:00、セルフチェックイン。出発は10:00まで、それより前でもかまいません。駐車場は無料で各室1台。禁煙、ペット不可、パーティー不可。",
    },
    zh: {
      title: "入住、停车与到达｜Casa Antonio 札幌",
      description:
        "入住 16:00–23:00，自助入住。10:00 前随时可离开。每套公寓免费停车一辆。禁烟、不可带宠物、不可开派对。备案号仍是 A M010045173、B M010045174。",
    },
    ko: {
      title: "체크인·주차·도착｜Casa Antonio 삿포로",
      description:
        "체크인 16:00–23:00, 셀프 체크인. 10:00 전이라면 언제든 퇴실. 주차는 무료, 아파트마다 한 대. 금연, 반려동물 불가, 파티 불가.",
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
        "着くのは新千歳空港です。丘珠ではありません。快速エアポートで札幌駅へ、南北線で麻生まで北上し、駅から徒歩およそ5分です。運賃はその日に確認してください。 麻生の住宅街です。",
    },
    zh: {
      title: "从新千岁机场到麻生｜Casa Antonio",
      description:
        "国际航班到新千岁机场，不是市内的丘珠。机场快速到札幌站，再乘南北线往北到终点麻生，步行约五分钟到门口。票价请当天确认。 这是安静的住宅街。 厨房可以自己做饭。 预订只在 Airbnb。",
    },
    ko: {
      title: "신치토세 공항에서 아사부까지｜Casa Antonio",
      description:
        "도착 공항은 신치토세입니다. 오카다마가 아닙니다. 공항 쾌속으로 삿포로역, 난보쿠선으로 아사부까지 북상한 뒤 도보 약 5분입니다. 조용한 주택가입니다.",
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
        "雪まつりの拠点は、静かな北区の家。麻生から南北線で南へ、大通とすすき野です。2月の会期は市がその年に発表します。終われば同じ扉に戻ります。 麻生の住宅街です。 キッチンがあります。",
    },
    zh: {
      title: "札幌雪祭住宿｜Casa Antonio",
      description:
        "把安静的北区当作雪祭的基地。从麻生乘南北线往南，到大通和薄野。二月的会期由市政府当年公布。结束后回到离车站步行约五分钟的家。 这是安静的住宅街。 厨房可以自己做饭。",
    },
    ko: {
      title: "삿포로 눈축제에 머무르기｜Casa Antonio",
      description:
        "눈축제의 기점은 조용한 기타구의 집. 아사부에서 난보쿠선으로 남쪽, 오도리와 스스키노. 2월 일정은 시가 그해 발표합니다. 조용한 주택가입니다.",
    },
  },
  "teine-ski": {
    en: {
      title: "Sapporo Teine Ski Base · Casa Antonio",
      description:
        "Work in the morning, ski Sapporo Teine in the afternoon, and come back to the same door. Olympia and Highland. Free parking at the house. Check the day.",
    },
    ja: {
      title: "サッポロテイネの拠点｜Casa Antonio",
      description:
        "午前は部屋で仕事、午後はサッポロテイネ、夜は同じ扉。オリンピアとハイランド。家は麻生駅から徒歩約5分で、家の前の駐車場は無料です。 麻生の住宅街です。 キッチンがあります。",
    },
    zh: {
      title: "札幌手稻滑雪的住处｜Casa Antonio",
      description:
        "上午在房间工作，下午去札幌手稻，晚上回到同一扇门。奥林匹亚与高地。家离麻生站步行约五分钟。门前停车免费，厨房可以自己做晚饭。 这是安静的住宅街。 厨房可以自己做饭。",
    },
    ko: {
      title: "삿포로 데이네 스키 베이스｜Casa Antonio",
      description:
        "오전에는 방에서 일하고, 오후에 삿포로 데이네, 밤에는 같은 문. 올림피아와 하일랜드. 집 앞 주차는 무료입니다. 조용한 주택가입니다. 주방이 있습니다.",
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
        "数週間、または数ヶ月。AでもBでも、一泊を積み上げた額より低い料金です。麻生駅から徒歩約5分、キッチン付き。Airbnbから連絡し、支払う前に文面で決めます。 麻生の住宅街です。",
    },
    zh: {
      title: "在札幌住几周或几个月｜Casa Antonio",
      description:
        "A 或 B 都可以按周、按月住，价格低于把每晚房价加在一起。离麻生站步行约五分钟，有厨房。通过 Airbnb 联系。付款前，费用用书面确认。 这是安静的住宅街。",
    },
    ko: {
      title: "삿포로 장기 숙박｜Casa Antonio",
      description:
        "몇 주, 또는 몇 달. A도 B도, 1박 요금을 쌓은 금액보다 낮습니다. Airbnb로 문의하세요. 내기 전에 요금을 글로 정합니다. 조용한 주택가입니다.",
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
        "入住 16:00–23:00，退房不晚于 10:00，自助入住，免费停车，麻生站步行约五分钟，新千岁机场，以及房屋规则。没有的事情，这里不写。 这是安静的住宅街。",
    },
    ko: {
      title: "예약 전에 묻는 것｜Casa Antonio",
      description:
        "체크인 16:00–23:00, 체크아웃 10:00까지, 셀프 체크인, 무료 주차, 아사부역, 신치토세 공항, 하우스 룰. 없는 일은 적지 않습니다.",
    },
  },
  combo: {
    en: {
      title: "Sapporo and the Shiraoi Coast · Casa Antonio",
      description:
        "Two or three nights: Casa Antonio in Kita-ku, then Kojohama Cabins on the Shiraoi coast. About an hour and fifteen minutes by car, or JR toward Tomakomai.",
    },
    ja: {
      title: "札幌と白老の海岸｜Casa Antonio",
      description:
        "北区の Casa Antonio に泊まってから、白老の海岸にある Kojohama Cabins へ。車でおよそ1時間15分。JRは苫小牧方面です。それぞれ別に予約します。",
    },
    zh: {
      title: "札幌与白老海岸｜Casa Antonio",
      description:
        "先住札幌北区的 Casa Antonio，再到白老海岸的 Kojohama Cabins。开车大约一小时十五分钟。JR 往苫小牧方向。两栋房子各自预订，没有套餐价。",
    },
    ko: {
      title: "삿포로와 시라오이 해안｜Casa Antonio",
      description:
        "기타구의 Casa Antonio에 머문 뒤, 시라오이 해안의 Kojohama Cabins로. 차로 약 1시간 15분. JR은 도마코마이 방면. 집은 각각 예약합니다.",
    },
  },
  privacy: {
    en: {
      title: "Privacy · Casa Antonio",
      description:
        "What this site stores: a language preference, and analytics through Google Tag Manager. Bookings stay on Airbnb. No account on this site. No booking form here.",
    },
    ja: {
      title: "プライバシー｜Casa Antonio",
      description:
        "このサイトが覚えるのは言語の選択と、Googleタグマネージャーによる計測です。予約はAirbnbです。このサイトにアカウントはありません。 麻生の住宅街です。",
    },
    zh: {
      title: "隐私｜Casa Antonio",
      description: "本站只记住语言选择，并通过 Google Tag Manager 做统计。预订在 Airbnb。房子离麻生站步行约五分钟。本站没有账户，也不直接收款。 这是安静的住宅街。",
    },
    ko: {
      title: "개인정보｜Casa Antonio",
      description:
        "이 사이트가 기억하는 것은 언어 선택과 Google 태그 매니저 측정입니다. 예약은 Airbnb입니다. 이 사이트에 계정은 없습니다. 조용한 주택가입니다.",
    },
  },
};

const HERO: Partial<Record<PageId, string>> = {
  home: "exterior",
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
  combo: "/photos/og-day-trips.jpg",
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
    neighborhood: "Nearby",
    "day-trips": "Day trips",
    arrival: "Arrival",
    access: "From the airport",
    "snow-festival": "Snow Festival",
    "teine-ski": "Sapporo Teine",
    "long-stay": "Long stays",
    combo: "Sapporo and the coast",
    faq: "Questions",
    privacy: "Privacy",
  },
  ja: {
    home: "ホーム",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "周辺",
    "day-trips": "日帰り",
    arrival: "到着",
    access: "空港から",
    "snow-festival": "雪まつり",
    "teine-ski": "サッポロテイネ",
    "long-stay": "長期滞在",
    combo: "札幌と白老",
    faq: "質問",
    privacy: "プライバシー",
  },
  zh: {
    home: "首页",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "附近",
    "day-trips": "一日游",
    arrival: "入住",
    access: "从机场",
    "snow-festival": "雪祭",
    "teine-ski": "札幌手稻",
    "long-stay": "长期住宿",
    combo: "札幌与白老",
    faq: "问题",
    privacy: "隐私",
  },
  ko: {
    home: "홈",
    a: "Casa Antonio A",
    b: "Casa Antonio B",
    neighborhood: "근처",
    "day-trips": "당일치기",
    arrival: "도착",
    access: "공항에서",
    "snow-festival": "눈축제",
    "teine-ski": "삿포로 데이네",
    "long-stay": "장기 숙박",
    combo: "삿포로와 시라오이",
    faq: "질문",
    privacy: "개인정보",
  },
};

export function crumbLabel(page: PageId, lang: Lang) {
  return CRUMB[lang][page];
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
      { "@type": "LocationFeatureSpecification", name: "Free parking, one car per apartment", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self check-in", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Non-smoking", value: true },
    ],
    sameAs: [AIRBNB.a, AIRBNB.b],
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
      ? [`${ORIGIN}/photos/living-2000.webp`, `${ORIGIN}/photos/bedroom-1800.webp`, `${ORIGIN}/photos/kitchen-1800.webp`]
      : [`${ORIGIN}/photos/exterior-1333.webp`, `${ORIGIN}/photos/entry-1800.webp`, `${ORIGIN}/photos/street-1067.webp`],
    floorSize: {
      "@type": "QuantitativeValue",
      value: 65,
      unitCode: "MTK",
    },
    numberOfBedrooms: isA ? 2 : 1,
    numberOfBathroomsTotal: 1,
    occupancy: { "@type": "QuantitativeValue", maxValue: isA ? 4 : 3 },
    bed: isA
      ? [{ "@type": "BedDetails", numberOfBeds: 4 }]
      : [{ "@type": "BedDetails", typeOfBed: "Twin", numberOfBeds: 3 }],
    containedInPlace: { "@type": "LodgingBusiness", name: "Casa Antonio", url: `${ORIGIN}/` },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free parking, one car per apartment", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      ...(isA ? [] : [{ "@type": "LocationFeatureSpecification", name: "Projector", value: true }]),
    ],
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
      a: "By 10:00. You may leave any time before that.",
    },
    {
      q: "Is parking available?",
      a: "Yes. Free, one car per apartment, on the apron in front of the doors.",
    },
    {
      q: "Which station is nearest?",
      a: "Asabu Station on the Namboku subway line, about a five-minute walk. It is the north end of the line.",
    },
    {
      q: "Which airport do I fly into?",
      a: "New Chitose Airport (CTS) is the airport this guide is written for. A direct Chuo Bus runs to Asabu Station. The other usual way is the JR Airport rapid to Sapporo Station, then the Namboku line north. Okadama is a smaller city airport; use it only if your ticket actually lands there.",
    },
    {
      q: "Can I smoke, bring a pet, or have a party?",
      a: "No smoking anywhere on the property, including the entrances and the parking area. No pets. No parties.",
    },
    {
      q: "What if something is damaged?",
      a: "The damage charge is at least ¥15,000.",
    },
    {
      q: "How many people can stay?",
      a: "Casa Antonio A sleeps up to four guests: two separate bedrooms, two beds in each, and one living room. Casa Antonio B sleeps up to three guests, with three single beds in one bedroom. The guest checking in should be 18 or older. Children are welcome. Only people named on the booking stay here.",
    },
    {
      q: "How do long stays work?",
      a: "Write through Airbnb with your dates and ask for a rate. The rate for a stay of weeks or months is agreed in writing before you pay. This site does not take the booking and does not promise a discount.",
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
      a: "10:00までです。それより前なら、いつ出発してもかまいません。",
    },
    {
      q: "駐車場はありますか？",
      a: "あります。無料で、各アパートメントに1台、扉の前です。",
    },
    {
      q: "最寄り駅はどこですか？",
      a: "地下鉄南北線・麻生駅。徒歩およそ5分です。南北線の北の終点です。",
    },
    {
      q: "どの空港に着きますか？",
      a: "新千歳空港（CTS）が、この案内の空港です。麻生駅までの直行バスがあります。もう一つの普通の行き方は、快速エアポートで札幌駅、南北線で北上です。丘珠は市内の小さな空港で、チケットがそこに着くときだけ使います。",
    },
    {
      q: "喫煙、ペット、パーティーはできますか？",
      a: "入口も駐車場も含め、敷地内は禁煙です。ペットは不可。パーティーも不可です。",
    },
    {
      q: "損害金はありますか？",
      a: "破損がある場合、損害金は15,000円からです。",
    },
    {
      q: "何名まで泊まれますか？",
      a: "Casa Antonio Aの定員は4名です。寝室は2つで、それぞれベッドが2台、居間が1つです。Bはシングルベッド3台、定員3名です。チェックインする方は18歳以上。お子さまは歓迎します。泊まれるのは予約に名前のある人だけです。",
    },
    {
      q: "長期滞在はどうしますか？",
      a: "日程を添えてAirbnbから料金を尋ねてください。数週間や数ヶ月の料金は、支払う前に文面で決めます。このサイトでは予約を受けず、割引を約束しません。",
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
      a: "不晚于 10:00。在那之前，随时可以离开。",
    },
    {
      q: "有停车位吗？",
      a: "有。免费，每套公寓一辆，就在门前。",
    },
    {
      q: "最近的车站是哪一站？",
      a: "南北线麻生站，步行大约五分钟。这是南北线最北的一站。",
    },
    {
      q: "飞到哪个机场？",
      a: "这份指南写的是新千岁机场（CTS）。有直达麻生站的中央巴士。另一条常用路是机场快速到札幌站，再乘南北线往北。丘珠是市内的小机场，只有机票降落在那里时才用。",
    },
    {
      q: "可以吸烟、带宠物或办派对吗？",
      a: "包括入口和停车场在内，整栋房子禁烟。不可带宠物。不可办派对。",
    },
    {
      q: "有损坏押金吗？",
      a: "如果有东西损坏，赔偿从 15,000 日元起。",
    },
    {
      q: "可以住几个人？",
      a: "Casa Antonio A 最多四位客人：两间分开的卧室，每间两张床，另有一间起居室。B 是一间卧室、三张单人床，最多三位客人。办理入住的客人须年满 18 岁。欢迎孩子。只有预订上的人可以住。",
    },
    {
      q: "长期住怎么订？",
      a: "带着日期，通过 Airbnb 询问价格。住几周或几个月的价格，付款前用书面确认。这个网站不收款，也不承诺折扣。",
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
      a: "10:00까지입니다. 그 전이라면 언제든 나갈 수 있습니다.",
    },
    {
      q: "주차가 되나요?",
      a: "됩니다. 무료이고, 아파트마다 한 대, 문 앞입니다.",
    },
    {
      q: "가장 가까운 역은 어디인가요?",
      a: "지하철 난보쿠선 아사부역. 도보 약 5분입니다. 난보쿠선의 북쪽 끝입니다.",
    },
    {
      q: "어느 공항에 내리나요?",
      a: "이 안내의 공항은 신치토세(CTS)입니다. 아사부역까지 직행 버스가 있습니다. 다른 보통의 길은 공항 쾌속으로 삿포로역, 그다음 난보쿠선으로 북상입니다. 오카다마는 시내의 작은 공항이고, 표가 거기에 내릴 때만 씁니다.",
    },
    {
      q: "흡연, 반려동물, 파티가 되나요?",
      a: "입구와 주차장을 포함해 부지 안은 금연입니다. 반려동물은 안 됩니다. 파티도 안 됩니다.",
    },
    {
      q: "손해 보증금이 있나요?",
      a: "파손된 것이 있으면 손해금은 15,000엔부터입니다.",
    },
    {
      q: "몇 명까지 묵나요?",
      a: "Casa Antonio A는 최대 네 명입니다. 침실이 둘이고, 각각 침대가 두 개, 거실은 하나입니다. B는 싱글 침대 세 개, 최대 세 명입니다. 체크인하는 분은 18세 이상. 어린이는 환영합니다. 예약에 이름이 있는 사람만 묵습니다.",
    },
    {
      q: "장기 숙박은 어떻게 하나요?",
      a: "날짜를 적어 Airbnb로 요금을 물어보세요. 몇 주나 몇 달의 요금은 내기 전에 글로 정합니다. 이 사이트는 예약을 받지 않고, 할인을 약속하지 않습니다.",
    },
    {
      q: "Wi-Fi가 있나요?",
      a: "있습니다. 속도는 적지 않습니다.",
    },
  ],
};

function article(page: PageId, lang: Lang) {
  const meta = pageMeta(page, lang);
  return {
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: `${ORIGIN}${OG_IMAGE[page]}`,
    inLanguage: HTML_LANG[lang],
    datePublished: "2026-09-30",
    dateModified: LASTMOD,
    author: { "@type": "Organization", name: "Casa Antonio", url: `${ORIGIN}/` },
    publisher: { "@type": "Organization", name: "Casa Antonio", url: `${ORIGIN}/` },
    mainEntityOfPage: absolutePage(page, lang),
  };
}

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
  if (page === "faq" || page === "arrival") {
    graph.push({ "@type": "FAQPage", mainEntity: faqEntities(lang) });
  }
  if (
    page === "access" ||
    page === "snow-festival" ||
    page === "teine-ski" ||
    page === "long-stay" ||
    page === "neighborhood" ||
    page === "day-trips" ||
    page === "combo"
  ) {
    graph.push(article(page, lang));
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
    const widths = photoMeta[hero]?.widths ?? [800];
    links.push({
      rel: "preload",
      as: "image",
      type: "image/avif",
      href: photoFile(hero, widths[widths.length - 1], "avif"),
      imageSrcSet: widths.map((width) => `${photoFile(hero, width, "avif")} ${width}w`).join(", "),
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
