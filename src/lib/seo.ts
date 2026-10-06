import { AIRBNB, MAP } from "@/data/facts";
import { DAMAGE_POLICY, PROPERTY_FACTS } from "@/data/property-facts";
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

import { PAGE_MODIFIED } from "@/data/page-maintenance";

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
        "札幌・麻生駅から徒歩約5分。専用入口のある貸切アパート2室を比較できます。各約65㎡、Aは4名、Bは3名まで。各室1台の無料駐車場があり、予約はAirbnbで受け付けています。",
    },
    zh: {
      title: "札幌整套公寓民宿 · 麻生站步行5分钟｜Casa Antonio",
      description:
        "比较札幌麻生站附近的两套独立公寓：每套约65平方米，A最多住4人，B最多住3人。步行约5分钟到地铁站，每套可免费停一辆车，通过Airbnb预订。",
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
        "札幌・麻生駅徒歩約5分の1階貸切アパート。約65㎡、寝室2室、シングル3台とダブル1台で4名まで。キッチン、洗濯機、専用入口、1台分の無料駐車場があります。",
    },
    zh: {
      title: "Casa Antonio A｜札幌约65㎡公寓，可住4人，可停车",
      description:
        "札幌麻生站步行约5分钟的一楼独立公寓，约65平方米。两间卧室共3张单人床和1张双人床，最多4人；配有厨房、洗衣机和独立入口，可免费停一辆车。",
    },
    ko: {
      title: "Casa Antonio A｜삿포로 약 65㎡·4명·주차",
      description:
        "기타구 1층, 약 65㎡, 침실 둘과 거실, 최대 네 명. 싱글 침대 세 개와 더블 침대 한 개입니다. 전용 출입구와 무료 주차 한 대가 있습니다.",
    },
  },
  b: {
    en: {
      title: "Casa Antonio B · Wood-Style Sapporo Apartment with Projector",
      description:
        "Second-floor apartment in the same Kita-ku house. About 65 m², three single beds, up to three guests, a wood interior, and a projector. Free parking.",
    },
    ja: {
      title: "Casa Antonio B｜木の内装とプロジェクターの札幌アパート",
      description:
        "木の内装とプロジェクターがある約65㎡の貸切アパート。シングル3台で3名まで。2階へは手すり付きの階段約25段。洗濯機、室内物干しスペース、1台分の無料駐車場があります。",
    },
    zh: {
      title: "Casa Antonio B｜木质公寓，客厅有投影仪",
      description:
        "约65平方米的二楼独立公寓，木质内饰、客厅投影仪和3张单人床，最多3人。需走约25级带扶手的台阶；洗衣房可晾衣，每套可免费停一辆车。",
    },
    ko: {
      title: "Casa Antonio B｜나무 인테리어와 프로젝터 아파트",
      description:
        "같은 집 2층. 약 65㎡, 싱글 침대 세 개, 최대 세 명. 나무 실내와 거실 프로젝터. 전용 출입구와 무료 주차가 있습니다.",
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
        "Casa Antonio周辺の麻生駅、スーパー、飲食店、公園を紹介。徒歩での目安と地図リンクをまとめ、滞在中の買い物や食事選びに役立てられます。営業時間は各店舗でご確認ください。",
    },
    zh: {
      title: "麻生·北区指南｜地铁、永旺、用餐｜Casa Antonio",
      description:
        "查看Casa Antonio附近的麻生站、超市、餐厅和公园。页面提供步行时间参考及地图链接，方便安排买菜、用餐和散步；出发前请向各店确认营业时间。",
    },
    ko: {
      title: "아사부·기타구 안내｜지하철, 이온, 식사｜Casa Antonio",
      description:
        "집 근처. 아사부역, 이온, calma, 라멘, 공원, 바디 케어 시설. 시내로 갈 때는 지하철로 남쪽. 영업시간은 당일에 확인하세요.",
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
        "札幌のCasa Antonioを拠点に、小樽、定山渓、登別、富良野・美瑛、洞爺湖、白老ウポポイなどへ。行き先ごとの見どころと移動の目安を紹介します。運行時刻・料金は出発前に確認を。",
    },
    zh: {
      title: "札幌一日游｜小樽、富良野、手稻｜Casa Antonio",
      description:
        "从札幌Casa Antonio出发，规划小樽、定山溪、登别、富良野与美瑛、洞爷湖或白老Upopoy一日游。比较各地看点和交通参考，出行前确认班次与费用。",
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
        "セルフチェックインは16:00–23:00、チェックアウトは10:00まで。各室1台の無料駐車場と、到着前に確認したい入室方法・ハウスルールをご案内します。",
    },
    zh: {
      title: "入住、停车与到达｜Casa Antonio 札幌",
      description:
        "自助入住时间为16:00–23:00，退房不晚于10:00。查看每套一辆车的免费停车安排、入住前须知及禁烟、禁止宠物和聚会等房屋规则。",
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
        "新千歳空港からCasa Antonioへのアクセス案内。JR快速エアポートと地下鉄南北線で麻生駅へ、または空港バスを利用。駅から徒歩約5分の道順と交通リンクを確認できます。",
    },
    zh: {
      title: "从新千岁机场到麻生｜Casa Antonio",
      description:
        "了解从新千岁机场前往Casa Antonio的方法：乘JR机场快速转地铁南北线到麻生站，或选择机场巴士。查看交通链接及从车站步行约5分钟的到达指引。",
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
        "麻生駅近くのCasa Antonioからさっぽろ雪まつりへ。地下鉄南北線で大通・すすきの方面に移動できます。冬の滞在準備と会場へのアクセスを確認し、会期は公式情報でご確認ください。",
    },
    zh: {
      title: "札幌雪祭住宿｜Casa Antonio",
      description:
        "住在麻生站附近的Casa Antonio，乘地铁南北线前往大通和薄野的札幌雪祭会场。查看冬季住宿与出行建议，具体会期请以官方公布为准。",
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
        "Work in the morning, ski Sapporo Teine in the afternoon, and come back to the same door. Olympia and Highland. Free parking at the house. Check the day.",
    },
    ja: {
      title: "サッポロテイネの拠点｜Casa Antonio",
      description:
        "札幌のCasa Antonioを拠点にサッポロテイネでスキー。オリンピア・ハイランドの公式案内と移動の目安を紹介します。宿泊施設には無料駐車場があり、営業状況はスキー場でご確認ください。",
    },
    zh: {
      title: "札幌手稻滑雪的住处｜Casa Antonio",
      description:
        "以札幌Casa Antonio为住宿基地，前往札幌手稻滑雪场的奥林匹亚与高地区域。查看官方信息和交通参考；住宿提供免费停车，营业情况请向雪场确认。",
    },
    ko: {
      title: "삿포로 데이네 스키 베이스｜Casa Antonio",
      description:
        "오전에는 방에서 일하고, 오후에 삿포로 데이네, 밤에는 같은 문. 올림피아와 하일랜드. 집 앞 주차는 무료입니다. 주방이 있습니다.",
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
        "札幌で数週間から数か月滞在したい方へ。Casa Antonio A・Bのキッチンや洗濯機、交通アクセスを確認し、Airbnbから長期滞在料金を相談できます。料金は支払い前に文面で確認します。",
    },
    zh: {
      title: "在札幌住几周或几个月｜Casa Antonio",
      description:
        "计划在札幌住几周或几个月？了解Casa Antonio A和B的厨房、洗衣机及地铁交通，通过Airbnb咨询长期住宿价格，并在付款前书面确认费用。",
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
        "Check-in 16:00–23:00, check-out by 10:00, self check-in, free parking, Asabu Station, New Chitose Airport, and the house rules. Read the practical details before booking.",
    },
    ja: {
      title: "泊まる前の質問｜Casa Antonio",
      description:
        "Casa Antonioの予約前によくある質問。A・Bの定員とベッド、無料駐車場、チェックイン、階段、交通アクセス、破損時の費用など、滞在の実用情報を確認できます。",
    },
    zh: {
      title: "预订前的问题｜Casa Antonio",
      description:
        "预订Casa Antonio前的常见问题：比较A和B的人数与床位，了解免费停车、入住时间、楼梯、交通和损坏收费等实用信息。",
    },
    ko: {
      title: "예약 전에 묻는 것｜Casa Antonio",
      description:
        "체크인 16:00–23:00, 체크아웃 10:00까지, 셀프 체크인, 무료 주차, 아사부역, 신치토세 공항, 하우스 룰. 예약 전에 확인해 주세요.",
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
        "札幌のCasa Antonioと白老の海岸にあるKojohama Cabinsを組み合わせる旅。街と海辺の滞在を計画し、移動の目安をご確認ください。各宿泊施設は別々に予約します。",
    },
    zh: {
      title: "札幌与白老海岸｜Casa Antonio",
      description:
        "把札幌Casa Antonio与白老海岸的Kojohama Cabins安排在同一趟北海道旅程中。查看城市与海边住宿的组合建议和交通参考；两处住宿分别预订。",
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
        "How Casa Antonio uses language storage and Google Analytics, including booking, Airbnb and Booking.com review links, long-stay enquiries and maps.",
    },
    ja: {
      title: "プライバシー｜Casa Antonio",
      description:
        "言語設定の保存とGoogleアナリティクスの利用について。予約、Airbnb・Booking.comのレビュー、長期滞在の問い合わせ、地図などのクリック計測をご説明します。",
    },
    zh: {
      title: "隐私｜Casa Antonio",
      description: "了解Casa Antonio如何保存语言设置并使用Google Analytics，统计预订、Airbnb和Booking.com评价、长住咨询及地图链接的点击。",
    },
    ko: {
      title: "개인정보｜Casa Antonio",
      description:
        "언어 설정 저장과 Google 애널리틱스 이용 안내. 예약, Airbnb·Booking.com 후기, 장기 숙박 문의와 지도 링크의 클릭 측정을 설명합니다.",
    },
  },
};

const HERO: Partial<Record<PageId, string>> = {
  home: "exterior",
  a: "living",
  b: "b-living",
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
    "@id": `${ORIGIN}/#business`,
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
    "@id": `${ORIGIN}/#apartment-${id}`,
    name: isA ? "Casa Antonio A" : "Casa Antonio B",
    url: absolutePage(page, lang),
    image: isA
      ? [`${ORIGIN}/photos/living-2000.webp`, `${ORIGIN}/photos/bedroom-1800.webp`, `${ORIGIN}/photos/kitchen-1800.webp`]
      : [`${ORIGIN}/photos/b-living-2000.webp`, `${ORIGIN}/photos/b-bedroom-2000.webp`, `${ORIGIN}/photos/b-kitchen-2000.webp`, `${ORIGIN}/photos/b-dining-2000.webp`, `${ORIGIN}/photos/b-bath-1333.webp`],
    floorSize: {
      "@type": "QuantitativeValue",
      value: PROPERTY_FACTS[id].areaM2,
      unitCode: "MTK",
    },
    numberOfBedrooms: PROPERTY_FACTS[id].bedrooms,
    numberOfBathroomsTotal: 1,
    occupancy: { "@type": "QuantitativeValue", maxValue: PROPERTY_FACTS[id].maxGuests },
    bed: PROPERTY_FACTS[id].beds.map(bed => ({ "@type": "BedDetails", typeOfBed: bed.type, numberOfBeds: bed.count })),
    containedInPlace: { "@id": `${ORIGIN}/#business` },
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
      a: DAMAGE_POLICY.en,
    },
    {
      q: "How many people can stay?",
      a: "Casa Antonio A sleeps up to four guests: two separate bedrooms, three single beds and one double bed, and one living room. Casa Antonio B sleeps up to three guests, with three single beds in one bedroom. The guest checking in should be 18 or older. Children are welcome. Only people named on the booking stay here.",
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
      a: DAMAGE_POLICY.ja,
    },
    {
      q: "何名まで泊まれますか？",
      a: "Casa Antonio Aの定員は4名です。寝室は2つで、シングルベッド3台とダブルベッド1台、居間が1つです。Bはシングルベッド3台、定員3名です。チェックインする方は18歳以上。お子さまは歓迎します。泊まれるのは予約に名前のある人だけです。",
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
      q: "损坏费用如何收取？",
      a: DAMAGE_POLICY.zh,
    },
    {
      q: "可以住几个人？",
      a: "Casa Antonio A 最多四位客人：两间分开的卧室，共有三张单人床和一张双人床，另有一间起居室。B 是一间卧室、三张单人床，最多三位客人。办理入住的客人须年满 18 岁。欢迎孩子。只有预订上的人可以住。",
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
      q: "파손 비용은 어떻게 청구되나요?",
      a: DAMAGE_POLICY.ko,
    },
    {
      q: "몇 명까지 묵나요?",
      a: "Casa Antonio A는 최대 네 명입니다. 침실이 둘이고, 싱글 침대 세 개와 더블 침대 한 개, 거실은 하나입니다. B는 싱글 침대 세 개, 최대 세 명입니다. 체크인하는 분은 18세 이상. 어린이는 환영합니다. 예약에 이름이 있는 사람만 묵습니다.",
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
    dateModified: PAGE_MODIFIED[page],
    author: { "@type": "Organization", name: "Casa Antonio", url: `${ORIGIN}/` },
    publisher: { "@type": "Organization", name: "Casa Antonio", url: `${ORIGIN}/` },
    mainEntityOfPage: absolutePage(page, lang),
  };
}

export function jsonLd(page: PageId, lang: Lang) {
  const graph: object[] = [breadcrumb(page, lang), {
    "@type": "WebPage",
    "@id": `${absolutePage(page, lang)}#webpage`,
    url: absolutePage(page, lang),
    name: pageMeta(page, lang).title,
    inLanguage: HTML_LANG[lang],
    dateModified: PAGE_MODIFIED[page],
  }];
  if (page === "home") {
    graph.push(lodging(), {
      "@type": "WebSite",
      name: "Casa Antonio",
      url: `${ORIGIN}/`,
      inLanguage: ["en", "ja", "zh-Hans", "ko"],
    });
  }
  if (page === "a" || page === "b") graph.push(lodging(), apartment(page, lang));
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
      return `  <url>\n    <loc>${absolutePage(page, lang)}</loc>\n    <lastmod>${PAGE_MODIFIED[page]}</lastmod>\n${links}\n  </url>`;
    }),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
}
