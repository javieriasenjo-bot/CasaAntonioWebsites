import { MAP } from "@/data/facts";
import { ADDRESS, AIRBNB, BOOKING_COM, GUEST_EMAIL, TRIP_COM_EN, airhostUrl } from "@/data/links";
import { DAMAGE_POLICY, PROPERTY_FACTS, preparationFaq } from "@/data/property-facts";
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
        "Two private apartments in one Kita-ku house, about five minutes on foot from Asabu Station. Free parking, one car each. Book A or B on our booking page.",
    },
    ja: {
      title: "札幌・麻生駅徒歩5分の貸切アパートメント｜Casa Antonio",
      description:
        "札幌・麻生駅から徒歩約5分。専用入口のある貸切アパート2室を比較できます。各約67㎡、Aは5名、Bは3名まで。各室1台の無料駐車場があり、ご予約は公式の予約ページで受け付けています。",
    },
    zh: {
      title: "札幌整套公寓民宿 · 麻生站步行5分钟｜Casa Antonio",
      description:
        "比较札幌麻生站附近的两套独立公寓：每套约67平方米，A最多住5人，B最多住3人。步行约5分钟到地铁站，每套可免费停一辆车，可在官方预订页面预订。",
    },
    ko: {
      title: "삿포로 아파트 숙소 · 아사부역 도보 5분｜Casa Antonio",
      description:
        "삿포로 기타구의 한 집에 전용 출입구가 따로 있는 아파트가 두 채 있습니다. 아사부역에서 걸어서 약 5분, 주차는 무료입니다. 공식 예약 페이지에서 Casa Antonio A와 B를 예약하실 수 있습니다.",
    },
  },
  a: {
    en: {
      title: "Casa Antonio A · 67 m² Sapporo Apartment, 5 Guests, Parking",
      description:
        "Ground-floor apartment in Kita-ku, about 67 m², two bedrooms and one living room, up to five guests. One free parking space. Private door.",
    },
    ja: {
      title: "Casa Antonio A｜札幌・約67㎡・5名まで・駐車場付き",
      description:
        "札幌・麻生駅徒歩約5分の1階貸切アパート。約67㎡、寝室2室、シングル3台とダブル1台、最大5名。キッチン、洗濯機、専用入口、1台分の無料駐車場があります。",
    },
    zh: {
      title: "Casa Antonio A｜札幌约67㎡公寓，可住5人，可停车",
      description:
        "札幌麻生站步行约5分钟的一楼独立公寓，约67平方米。两间卧室共3张单人床和1张双人床，最多5人；配有厨房、洗衣机和独立入口，可免费停一辆车。",
    },
    ko: {
      title: "Casa Antonio A｜삿포로 약 67㎡·5명·주차",
      description:
        "기타구 1층, 약 67㎡. 침실 2개와 거실이 있고 최대 5명이 묵을 수 있습니다. 싱글 침대 3개와 더블 침대 1개, 전용 출입구, 무료 주차 1대분.",
    },
  },
  b: {
    en: {
      title: "Casa Antonio B · Wood-Style Sapporo Apartment with Projector",
      description:
        "Second-floor apartment in the same Kita-ku house. About 67 m², three single beds, up to three guests, a wood interior, and a projector. Free parking.",
    },
    ja: {
      title: "Casa Antonio B｜木の内装とプロジェクターの札幌アパート",
      description:
        "木の内装とプロジェクターがある約67㎡の貸切アパート。シングル3台で3名まで。2階へは手すり付きの階段約25段。洗濯機、室内物干しスペース、1台分の無料駐車場があります。",
    },
    zh: {
      title: "Casa Antonio B｜木质公寓，客厅有投影仪",
      description:
        "约67平方米的二楼独立公寓，木质内饰、客厅投影仪和3张单人床，最多3人。需走约25级带扶手的台阶；洗衣房可晾衣，每套可免费停一辆车。",
    },
    ko: {
      title: "Casa Antonio B｜나무 인테리어와 프로젝터 아파트",
      description:
        "같은 집 2층, 약 67㎡. 싱글 침대 3개, 최대 3명. 나무 인테리어에 거실 프로젝터가 있고, 전용 출입구와 무료 주차가 있습니다.",
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
        "집 주변 안내입니다. 아사부역, 이온, calma, 라멘집, 공원, 바디 케어 시설이 가까이 있고, 시내까지는 지하철로 남쪽으로 이동합니다. 영업시간은 가시는 날 확인해 주세요.",
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
      title: "삿포로 당일치기｜오타루, 후라노, 테이네｜Casa Antonio",
      description:
        "하루 다녀와서 같은 문으로 돌아오는 여행. 오타루, 노보리베쓰, 조잔케이, 후라노와 비에이, 도야호, 테이네, 시라오이 우포포이, 머리 대불을 소개합니다. 시간과 요금은 출발 전에 확인하세요.",
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
        "체크인은 16:00~23:00 셀프 체크인, 체크아웃은 10:00까지입니다. 주차는 아파트마다 1대분이 무료입니다. 금연이며 반려동물과 파티는 받지 않습니다.",
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
        "신치토세공항에서 아사부까지 가는 방법입니다. 오카다마공항이 아니라 신치토세 기준입니다. 공항 쾌속으로 삿포로역까지 간 뒤 난보쿠선으로 아사부역에서 내리면, 걸어서 약 5분입니다.",
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
        "눈축제를 보러 갈 때 조용한 기타구의 집을 거점으로 삼을 수 있습니다. 아사부에서 난보쿠선으로 남쪽의 오도리와 스스키노까지 갈 수 있습니다. 2027년은 2월 4~11일입니다.",
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
      title: "삿포로 테이네 스키 베이스｜Casa Antonio",
      description:
        "삿포로 테이네 스키장에 다녀오는 하루. 시즌 일정, 리프트 시간, 요금, 가는 방법을 정리했습니다. 올림피아와 하이랜드 구역 안내. 집 앞 주차는 무료이고 주방이 있습니다.",
    },
  },
  "long-stay": {
    en: {
      title: "Long Stays in Sapporo · Casa Antonio",
      description:
        "Planning weeks or months in Sapporo? Contact Casa Antonio A or B through our booking page or email with your dates and guest count to discuss availability and terms.",
    },
    ja: {
      title: "札幌の長期滞在｜Casa Antonio",
      description:
        "札幌で数週間から数か月滞在したい方へ。Casa Antonio A・Bのキッチン、洗濯機、交通アクセスをご紹介。予約ページまたはメールで日程・人数をお知らせいただき、空室状況や条件をご相談ください。",
    },
    zh: {
      title: "在札幌住几周或几个月｜Casa Antonio",
      description:
        "计划在札幌住几周或几个月？了解Casa Antonio A和B的厨房、洗衣机及地铁交通，通过预订页面或邮件发送入住日期和人数，咨询空房及入住条件。",
    },
    ko: {
      title: "삿포로 장기 숙박｜Casa Antonio",
      description:
        "삿포로에서 몇 주, 몇 달 머물 계획이라면 예약 페이지 또는 이메일로 Casa Antonio A·B에 문의하세요. 숙박 날짜와 인원을 알려 주시면 예약 가능 여부와 조건을 확인해 드립니다.",
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
        "체크인 16:00~23:00 셀프 체크인, 체크아웃 10:00까지. 무료 주차, 아사부역, 신치토세공항 이동, 하우스 룰까지 예약 전에 자주 묻는 질문을 모았습니다.",
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
        "기타구의 Casa Antonio에 묵은 뒤 시라오이 해안의 Kojohama Cabins로 이어 가는 여행. 차로 약 1시간 15분, JR은 도마코마이 방면입니다. 숙소는 각각 따로 예약합니다.",
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
        "언어 설정 저장과 Google 애널리틱스 이용 안내입니다. 예약 링크, Airbnb·Booking.com 후기 링크 클릭, 장기 숙박 문의와 지도 링크의 클릭 측정을 설명합니다.",
    },
  },
};

const HERO: Partial<Record<PageId, string>> = {
  home: "b-living",
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
    "teine-ski": "삿포로 테이네",
    "long-stay": "장기 숙박",
    combo: "삿포로와 시라오이",
    faq: "질문",
    privacy: "개인정보",
  },
};

export function crumbLabel(page: PageId, lang: Lang) {
  return CRUMB[lang][page];
}

type SchemaCopy = {
  house: [string, boolean][];
  seasoningName: string;
  seasoningValue: string;
  reserve: Record<"a" | "b", string>;
  privateDoor: string;
  kitchen: string;
  aLaundry: string;
  bLaundry: string;
  ground: string;
  projector: string;
  stairsName: string;
  stairsValue: string;
};

const SCHEMA_COPY: Record<Lang, SchemaCopy> = {
  en: {
    house: [
      ["Free parking, one large car per apartment", true],
      ["Parking snow cleared by the host or property management", true],
      ["Self check-in", true],
      ["Wi-Fi", true],
      ["Kitchen", true],
      ["Washing machine", true],
      ["Smoking allowed", false],
      ["Parties allowed", false],
      ["Cot available", false],
      ["High chair available", false],
    ],
    seasoningName: "Seasonings",
    seasoningValue: "Oil, salt and pepper are usually removed between stays for hygiene",
    reserve: { a: "Book Casa Antonio A", b: "Book Casa Antonio B" },
    privateDoor: "Private entrance",
    kitchen: "Kitchen",
    aLaundry: "Washing machine and drying rack",
    bLaundry: "Washing machine and space to hang clothes",
    ground: "Ground floor",
    projector: "Projector",
    stairsName: "Stairs to the apartment",
    stairsValue: "Second floor, about 25 steps with a handrail",
  },
  ja: {
    house: [
      ["無料駐車場（各室、大型車1台）", true],
      ["駐車場の除雪はホストまたは管理会社", true],
      ["セルフチェックイン", true],
      ["Wi-Fi", true],
      ["キッチン", true],
      ["洗濯機", true],
      ["喫煙可", false],
      ["パーティー可", false],
      ["ベビーベッドあり", false],
      ["ハイチェアあり", false],
    ],
    seasoningName: "調味料",
    seasoningValue: "油・塩・こしょうは衛生のため、通常は滞在ごとに撤去",
    reserve: { a: "Casa Antonio Aを予約", b: "Casa Antonio Bを予約" },
    privateDoor: "専用入口",
    kitchen: "キッチン",
    aLaundry: "洗濯機と物干しラック",
    bLaundry: "洗濯機と室内の物干しスペース",
    ground: "1階",
    projector: "プロジェクター",
    stairsName: "お部屋までの階段",
    stairsValue: "2階、手すり付きの階段約25段",
  },
  zh: {
    house: [
      ["免费停车（每套可停一辆大型车）", true],
      ["停车位积雪由房东或物业清理", true],
      ["自助入住", true],
      ["Wi-Fi", true],
      ["厨房", true],
      ["洗衣机", true],
      ["允许吸烟", false],
      ["允许聚会", false],
      ["提供婴儿床", false],
      ["提供儿童高脚椅", false],
    ],
    seasoningName: "调味料",
    seasoningValue: "出于卫生考虑，油、盐和胡椒通常会在每次入住之间移除",
    reserve: { a: "预订Casa Antonio A", b: "预订Casa Antonio B" },
    privateDoor: "独立入口",
    kitchen: "厨房",
    aLaundry: "洗衣机和晾衣架",
    bLaundry: "洗衣机及洗衣房内的晾衣空间",
    ground: "一楼",
    projector: "投影仪",
    stairsName: "到达公寓的台阶",
    stairsValue: "二楼，约25级带扶手的台阶",
  },
  ko: {
    house: [
      ["무료 주차 (아파트당 대형차 1대)", true],
      ["주차장 눈은 호스트 또는 관리 회사가 치움", true],
      ["셀프 체크인", true],
      ["Wi-Fi", true],
      ["주방", true],
      ["세탁기", true],
      ["흡연 가능", false],
      ["파티 가능", false],
      ["아기 침대 제공", false],
      ["유아용 식탁 의자 제공", false],
    ],
    seasoningName: "조미료",
    seasoningValue: "위생을 위해 식용유, 소금, 후추는 보통 숙박 사이에 치움",
    reserve: { a: "Casa Antonio A 예약", b: "Casa Antonio B 예약" },
    privateDoor: "전용 출입구",
    kitchen: "주방",
    aLaundry: "세탁기와 빨래 건조대",
    bLaundry: "세탁기와 세탁실 안 빨래 건조 공간",
    ground: "1층",
    projector: "프로젝터",
    stairsName: "아파트까지 계단",
    stairsValue: "2층, 손잡이 있는 계단 약 25개",
  },
};

function feature(name: string, value: boolean) {
  return { "@type": "LocationFeatureSpecification", name, value };
}

function reserveAction(id: "a" | "b", lang: Lang) {
  return {
    "@type": "ReserveAction",
    name: SCHEMA_COPY[lang].reserve[id],
    target: {
      "@type": "EntryPoint",
      urlTemplate: airhostUrl(lang),
      inLanguage: HTML_LANG[lang],
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
  };
}

function lodging(lang: Lang) {
  const copy = SCHEMA_COPY[lang];
  return {
    "@type": "LodgingBusiness",
    "@id": `${ORIGIN}/#business`,
    name: "Casa Antonio",
    url: `${ORIGIN}/`,
    image: `${ORIGIN}${OG_IMAGE.home}`,
    email: GUEST_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAP.lat,
      longitude: MAP.lng,
    },
    checkinTime: "16:00",
    checkoutTime: "10:00",
    knowsLanguage: ["en", "ja", "zh-Hans", "ko"],
    smokingAllowed: false,
    petsAllowed: false,
    amenityFeature: copy.house.map(([name, value]) => feature(name, value)),
    additionalProperty: {
      "@type": "PropertyValue",
      name: copy.seasoningName,
      value: copy.seasoningValue,
    },
    potentialAction: [reserveAction("a", lang), reserveAction("b", lang)],
    containsPlace: [{ "@id": `${ORIGIN}/#apartment-a` }, { "@id": `${ORIGIN}/#apartment-b` }],
    sameAs: [AIRBNB.a, AIRBNB.b, BOOKING_COM, TRIP_COM_EN],
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
  const copy = SCHEMA_COPY[lang];
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
    floorLevel: isA ? "1" : "2",
    amenityFeature: [
      feature(copy.privateDoor, true),
      feature(copy.kitchen, true),
      feature(isA ? copy.aLaundry : copy.bLaundry, true),
      feature(isA ? copy.ground : copy.projector, true),
    ],
    ...(isA ? {} : {
      additionalProperty: { "@type": "PropertyValue", name: copy.stairsName, value: copy.stairsValue },
    }),
    potentialAction: reserveAction(id, lang),
  };
}

export function faqEntities(lang: Lang) {
  const q = faqItems(lang);
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
      a: "16:00 to 23:00. It is self check-in. The lock instructions are sent after you book. They are not posted on this site.",
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
      a: "Casa Antonio A sleeps up to five guests: two separate bedrooms, three single beds and one double bed, and one living room. Casa Antonio B sleeps up to three guests, with three single beds in one bedroom. The guest checking in should be 18 or older. Children are welcome. Only people named on the booking stay here.",
    },
    {
      q: "How do long stays work?",
      a: "Contact us through our booking page (kagamiplanning.airhost.co/en) or at admin@kagami-planning.com with your dates, preferred apartment and guest count. Confirm availability, terms and the total before paying. This website does not take reservations or payments.",
    },
    {
      q: "Is there Wi-Fi?",
      a: "Yes, free Wi-Fi in both apartments. Measured in October 2026: about 180 Mbps in Casa Antonio B and about 75 Mbps in Casa Antonio A. Either is enough for video calls and streaming.",
    },
  ],
  ja: [
    {
      q: "チェックインは何時ですか？",
      a: "16:00から23:00です。セルフチェックインです。解錠の手順は予約後にお届けします。このサイトには載せません。",
    },
    {
      q: "チェックアウトは何時ですか？",
      a: "10:00までにご出発ください。それより早い時間なら、いつでも構いません。",
    },
    {
      q: "駐車場はありますか？",
      a: "はい。各アパートメントに1台分、扉の前に無料の駐車スペースがあります。",
    },
    {
      q: "最寄り駅はどこですか？",
      a: "地下鉄南北線の麻生（あさぶ）駅です。歩いて5分ほど。南北線の北の終点になります。",
    },
    {
      q: "どの空港に着きますか？",
      a: "新千歳空港（CTS）に着く前提でご案内しています。麻生駅まで直行する中央バスがあります。電車なら、快速エアポートで札幌駅へ出て、地下鉄南北線で北へ向かいます。丘珠空港は市内の小さな空港です。お持ちのチケットが丘珠着のときだけ、こちらをご利用ください。",
    },
    {
      q: "喫煙、ペット、パーティーはできますか？",
      a: "玄関や駐車場を含め、敷地内はすべて禁煙です。ペットの同伴とパーティーもお断りしています。",
    },
    {
      q: "損害金はありますか？",
      a: DAMAGE_POLICY.ja,
    },
    {
      q: "何名まで泊まれますか？",
      a: "Casa Antonio Aは最大5名です。寝室が2つあり、シングルベッド3台とダブルベッド1台、ほかに居間があります。Bはシングルベッド3台で、最大3名です。チェックインされる方は18歳以上である必要があります。お子さまも歓迎します。宿泊できるのは、予約に名前のある方だけです。",
    },
    {
      q: "長期滞在はどうしますか？",
      a: "ご希望の日程、お部屋、人数を添えて、予約ページ（kagamiplanning.airhost.co/ja）またはadmin@kagami-planning.comまでご連絡ください。空室、条件、合計金額は、お支払いの前にご確認ください。このサイトでは予約や決済は行っていません。",
    },
    {
      q: "Wi-Fiはありますか？",
      a: "はい、どちらのお部屋でも無料のWi-Fiをお使いいただけます。2026年10月に測ったところ、Bは約180Mbps、Aは約75Mbpsでした。ビデオ通話や動画の視聴には十分です。",
    },
  ],
  zh: [
    {
      q: "几点入住？",
      a: "16:00 到 23:00，自助入住。开锁方式在预订后发送，不印在这个网站上。",
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
      a: "Casa Antonio A 最多五位客人：两间分开的卧室，共有三张单人床和一张双人床，另有一间起居室。B 是一间卧室、三张单人床，最多三位客人。办理入住的客人须年满 18 岁。欢迎孩子。只有预订上的人可以住。",
    },
    {
      q: "长期住怎么订？",
      a: "请通过预订页面（kagamiplanning.airhost.co/zh）或admin@kagami-planning.com联系我们，并提供入住日期、希望入住的公寓和人数。付款前请确认空房、入住条件和总金额。本站不接受预订或付款。",
    },
    {
      q: "有 Wi-Fi 吗？",
      a: "有。两套公寓都有免费 Wi-Fi。2026 年 10 月实测：B 约 180 Mbps，A 约 75 Mbps。视频通话和在线观看都够用。",
    },
  ],
  ko: [
    {
      q: "체크인은 몇 시인가요?",
      a: "16:00부터 23:00까지이며, 셀프 체크인입니다. 예약하시면 문 여는 방법을 보내 드립니다. 이 사이트에는 적어 두지 않습니다.",
    },
    {
      q: "체크아웃은 몇 시인가요?",
      a: "10:00까지 나가 주시면 됩니다. 그 전에는 언제 떠나셔도 괜찮습니다.",
    },
    {
      q: "주차가 되나요?",
      a: "네. 아파트마다 1대분의 무료 주차 공간이 문 앞에 있습니다.",
    },
    {
      q: "가장 가까운 역은 어디인가요?",
      a: "지하철 난보쿠선 아사부역입니다. 걸어서 약 5분이고, 난보쿠선의 북쪽 종점입니다.",
    },
    {
      q: "어느 공항에 내리나요?",
      a: "신치토세공항(CTS)에 도착하는 것을 기준으로 안내합니다. 아사부역까지 가는 직행 버스(주오버스)가 있습니다. 전철을 타신다면 공항 쾌속으로 삿포로역까지 간 뒤 난보쿠선을 타고 북쪽으로 가시면 됩니다. 오카다마는 시내의 작은 공항으로, 항공권이 오카다마 도착일 때만 해당합니다.",
    },
    {
      q: "흡연, 반려동물, 파티가 되나요?",
      a: "입구와 주차장을 포함해 부지 안은 모두 금연입니다. 반려동물 동반과 파티는 받지 않습니다.",
    },
    {
      q: "파손 비용은 어떻게 청구되나요?",
      a: DAMAGE_POLICY.ko,
    },
    {
      q: "몇 명까지 묵나요?",
      a: "Casa Antonio A는 최대 5명입니다. 침실이 2개이고 싱글 침대 3개와 더블 침대 1개, 거실이 1개 있습니다. B는 싱글 침대 3개에 최대 3명입니다. 체크인하시는 분은 18세 이상이어야 합니다. 어린이도 환영합니다. 예약에 이름이 있는 분만 묵을 수 있습니다.",
    },
    {
      q: "장기 숙박은 어떻게 하나요?",
      a: "숙박 날짜, 원하는 아파트, 인원을 적어 예약 페이지(kagamiplanning.airhost.co/en) 또는 admin@kagami-planning.com으로 문의해 주세요. 결제하기 전에 예약 가능 여부, 숙박 조건, 총금액을 꼭 확인하세요. 이 사이트에서는 예약이나 결제를 받지 않습니다.",
    },
    {
      q: "Wi-Fi가 있나요?",
      a: "네, 두 아파트 모두 무료 Wi-Fi를 쓰실 수 있습니다. 2026년 10월에 측정했더니 B는 약 180Mbps, A는 약 75Mbps였습니다. 영상 통화와 스트리밍에는 충분합니다.",
    },
  ],
};

export function faqItems(lang: Lang) {
  return [...FAQ[lang], ...preparationFaq(lang)];
}

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
    graph.push(lodging(lang), apartment("a", lang), apartment("b", lang), {
      "@type": "WebSite",
      name: "Casa Antonio",
      url: `${ORIGIN}/`,
      inLanguage: ["en", "ja", "zh-Hans", "ko"],
    });
  }
  if (page === "a" || page === "b") graph.push(lodging(lang), apartment(page, lang));
  // One FAQPage per question set: /arrival/ shows the same list but only /faq/ marks it up.
  if (page === "faq") {
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
      { property: "og:image:alt", content: meta.title },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Casa Antonio" },
      { property: "og:locale", content: OG_LOCALE[lang] },
      ...(Object.keys(OG_LOCALE) as Lang[])
        .filter((other) => other !== lang)
        .map((other) => ({ property: "og:locale:alternate", content: OG_LOCALE[other] })),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: meta.title },
    ],
    links,
    // Escape "<" so no string can close the script element early.
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd(page, lang)).replace(/</g, "\\u003c") }],
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
