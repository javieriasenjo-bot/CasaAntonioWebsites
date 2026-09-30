import type { Lang } from "@/lib/paths";
import type { PageId } from "@/lib/paths";

type Block = { h: string; paragraphs: string[] };

export type GuideCopy = {
  menu: string;
  closeMenu: string;
  banner: string;
  bannerOpen: string;
  bannerStay: string;
  footerGuides: string;
  footerLinks: { page: PageId; label: string }[];
  coastTitle: string;
  coastBody: string;
  coastCta: string;
  longCta: string;
  teineMore: string;
  bookA: string;
  bookB: string;
  bNote: string;
  bSlots: string[];
  access: { eyebrow: string; title: string; lede: string; blocks: Block[]; facts: { k: string; v: string }[] };
  snow: { eyebrow: string; title: string; lede: string; blocks: Block[] };
  teine: { eyebrow: string; title: string; lede: string; blocks: Block[]; credit: string };
  notFoundTitle: string;
  notFoundBody: string;
};

const footer = (lang: Lang): GuideCopy["footerLinks"] => [
  { page: "access", label: lang === "ja" ? "空港から" : lang === "zh" ? "从机场" : lang === "ko" ? "공항에서" : "From the airport" },
  { page: "snow-festival", label: lang === "ja" ? "雪まつり" : lang === "zh" ? "雪祭" : lang === "ko" ? "눈축제" : "Snow Festival" },
  { page: "teine-ski", label: lang === "ja" ? "サッポロテイネ" : lang === "zh" ? "札幌手稻" : lang === "ko" ? "삿포로 데이네" : "Sapporo Teine" },
  { page: "long-stay", label: lang === "ja" ? "長期滞在" : lang === "zh" ? "长期住宿" : lang === "ko" ? "장기 숙박" : "Long stays" },
  { page: "faq", label: lang === "ja" ? "質問" : lang === "zh" ? "问题" : lang === "ko" ? "질문" : "Questions" },
  { page: "privacy", label: lang === "ja" ? "プライバシー" : lang === "zh" ? "隐私" : lang === "ko" ? "개인정보" : "Privacy" },
];

export const guides: Record<Lang, GuideCopy> = {
  en: {
    menu: "Menu",
    closeMenu: "Close",
    banner: "You last read this site in",
    bannerOpen: "Open this page in",
    bannerStay: "Stay in this language",
    footerGuides: "Practical notes",
    footerLinks: footer("en"),
    coastTitle: "Combine Sapporo with the Shiraoi coast",
    coastBody: "If the trip continues southwest, the sister house is on the Shiraoi coast.",
    coastCta: "Kojohama Cabins",
    longCta: "Long stays",
    teineMore: "Sapporo Teine, as a ski day",
    bookA: "Reserve Antonio A",
    bookB: "Reserve Antonio B",
    bNote:
      "Interior photographs of Casa Antonio B are not on this page yet. The rooms below are what the listing describes. The pictures of those rooms are on Airbnb.",
    bSlots: ["Living room with a projector", "Bedroom, three twin beds", "Kitchen and dining table", "Bath with a tub"],
    notFoundTitle: "This page is not on the site.",
    notFoundBody: "The apartments are still here.",
    access: {
      eyebrow: "New Chitose Airport",
      title: "From the airport to the door.",
      lede: "Fly into New Chitose Airport (CTS), south of Sapporo. Okadama is a small airport in the city. It is not this trip.",
      facts: [
        { k: "Airport", v: "New Chitose (CTS)" },
        { k: "Not this trip", v: "Okadama" },
        { k: "Train", v: "Airport rapid, about 37–45 min to Sapporo Station" },
        { k: "Then", v: "Namboku line north to Asabu, about 7 min" },
        { k: "Walk", v: "About 5 min from Asabu Station" },
        { k: "Parking", v: "Free, on site" },
      ],
      blocks: [
        {
          h: "By train",
          paragraphs: [
            "From New Chitose Airport Station, take the JR Airport rapid to Sapporo Station. The fastest trains are about 37 minutes. Some take closer to 45. The ordinary ticket is on the order of ¥1,200. Check the fare on the day.",
            "The Sapporo subway is a separate ticket. A JR pass, if you have one, does not cover it. At Sapporo Station, change to the Namboku line and ride north to Asabu, the last station. The host’s timing for that ride is about seven minutes.",
            "The house is about a five-minute walk from Asabu Station, south of the station, in Kita 38-jo Nishi 3-chome.",
          ],
        },
        {
          h: "By bus",
          paragraphs: [
            "Airport buses run between New Chitose and central Sapporo, including Sapporo Station. The ride is often 70 to 90 minutes, depending on traffic and weather. The adult fare to Sapporo Station on the current city timetable is ¥1,500. Check the day.",
            "From Sapporo Station, the Namboku line northbound ends at Asabu.",
          ],
        },
        {
          h: "By car or taxi",
          paragraphs: [
            "A car from the airport takes the expressway toward Sapporo, then north into Kita-ku. Outside rush hour the drive is often under 90 minutes. Snow changes that. Free private parking is on the apron in front of the doors.",
            "A metered taxi to central Sapporo is commonly about ¥10,000–13,000 before expressway tolls. The house is north of Sapporo Station. Confirm the fare to this address, not only to the station.",
          ],
        },
      ],
    },
    snow: {
      eyebrow: "Usually early February",
      title: "A quiet base for the Snow Festival.",
      lede: "The Sapporo Snow Festival is usually held in early February. The main site is Odori Park. Susukino has its own site. The city publishes the dates each year. This page does not invent them.",
      blocks: [
        {
          h: "The ride in",
          paragraphs: [
            "From the house, walk about five minutes to Asabu Station and take the Namboku line south. Odori Station is the stop for the park. Susukino is one station further. You come back the same way, to the north end of the line.",
            "The apartments are the quiet part of the day: cook, sleep, and ride in when you want the snow. Check-in is still 16:00–23:00, and the street is still a residential street.",
          ],
        },
        {
          h: "What this page will not pretend",
          paragraphs: [
            "Sculpture hours, crowd levels, and whether a given year adds a site somewhere else are set by the organizers. Look those up for the year you travel. The subway is the plan that does not change: Asabu, southbound, Odori.",
          ],
        },
      ],
    },
    teine: {
      eyebrow: "West of the house",
      title: "Sapporo Teine, and the same door at the end.",
      lede: "The ski day from this side of the city. A morning in the apartment, an afternoon on the mountain, and the private door when it is over.",
      credit: "Sapporo Teine, looking back toward the city. Photograph by Miki Yoshihito, CC BY 2.0.",
      blocks: [
        {
          h: "The mountain",
          paragraphs: [
            "Sapporo Teine is on the northwest face of Mount Teine, a 1972 Olympic venue. Olympia is the lower, broader zone. Highland is higher, where the old Olympic courses are.",
            "The resort puts central Sapporo at about forty minutes by car. From Kita-ku you drive west on the Sasson Expressway. Parking at the mountain is free, on the order of 2,800 cars. Without a car: JR to Teine Station, then the bus up. That way is slower.",
          ],
        },
        {
          h: "The house as a base",
          paragraphs: [
            "Casa Antonio is not a ski-in lodge. It is a residential apartment with a kitchen, heat, and free parking in front of the doors. Bring the skis in the car, or leave them for the bus day. There is no separate drying room described on this site.",
            "In the evening the Namboku line is still there if the mountain was enough and the city is next. Not both on the same tight schedule.",
          ],
        },
      ],
    },
  },
  ja: {
    menu: "メニュー",
    closeMenu: "閉じる",
    banner: "前回選んだ言語は",
    bannerOpen: "このページを開く",
    bannerStay: "この言語のまま",
    footerGuides: "案内",
    footerLinks: footer("ja"),
    coastTitle: "札幌と、白老の海岸をあわせる",
    coastBody: "旅が南西へ続くなら、姉妹の宿は白老の海岸にあります。",
    coastCta: "Kojohama Cabins",
    longCta: "長期滞在について",
    teineMore: "サッポロテイネの一日",
    bookA: "アントニオ A を予約",
    bookB: "アントニオ B を予約",
    bNote:
      "Casa Antonio Bの室内写真は、まだこのページにありません。下の部屋は、掲載にあるものです。その写真はAirbnbにあります。",
    bSlots: ["プロジェクターのある居間", "ツインベッド3台の寝室", "キッチンとダイニング", "浴槽のある浴室"],
    notFoundTitle: "このページはありません。",
    notFoundBody: "部屋は、ここにあります。",
    access: {
      eyebrow: "新千歳空港",
      title: "空港から、扉まで。",
      lede: "着くのは、札幌の南にある新千歳空港（CTS）です。丘珠は市内の小さな空港で、この旅の空港ではありません。",
      facts: [
        { k: "空港", v: "新千歳（CTS）" },
        { k: "違う空港", v: "丘珠" },
        { k: "列車", v: "快速エアポート、札幌駅までおよそ37–45分" },
        { k: "そのあと", v: "南北線で麻生へ北上、およそ7分" },
        { k: "徒歩", v: "麻生駅からおよそ5分" },
        { k: "駐車", v: "敷地内、無料" },
      ],
      blocks: [
        {
          h: "列車で",
          paragraphs: [
            "新千歳空港駅から、JRの快速エアポートで札幌駅へ。速い列車はおよそ37分、45分に近い便もあります。普通運賃は1,200円前後です。その日の運賃を確認してください。",
            "札幌の地下鉄は別の切符です。JRのパスを持っていても、地下鉄は含まれません。札幌駅で南北線に乗り換え、北へ。終点が麻生です。この区間は、ホストの案内でおよそ7分です。",
            "家は麻生駅の南、北38条西3丁目。駅から徒歩およそ5分です。",
          ],
        },
        {
          h: "バスで",
          paragraphs: [
            "新千歳と札幌都心を結ぶ空港連絡バスがあり、札幌駅も停まります。所要は交通と天候で、70分から90分になることが多いです。札幌駅までの大人運賃は、現行の市内時刻表で1,500円です。当日確認を。",
            "札幌駅から南北線の北行きに乗ると、終点は麻生です。",
          ],
        },
        {
          h: "車、またはタクシー",
          paragraphs: [
            "空港からは高速道路で札幌方面へ、そのあと北区へ北上します。混まない時間なら90分を下回ることが多いです。雪の日は変わります。扉の前の駐車場は、無料の専用です。",
            "札幌都心までのメータータクシーは、高速道路の通行料の前に、1万から1万3千円ほどになることが多いです。家は札幌駅より北です。駅までではなく、この住所までの料金を確認してください。",
          ],
        },
      ],
    },
    snow: {
      eyebrow: "例年2月上旬",
      title: "雪まつりの、静かな拠点。",
      lede: "さっぽろ雪まつりは、例年2月上旬です。主な会場は大通公園。すすき野にも会場があります。会期はその年に市が発表します。このページでは日付を作りません。",
      blocks: [
        {
          h: "行き方",
          paragraphs: [
            "家から麻生駅まで徒歩およそ5分。南北線で南へ。大通公園は大通駅。すすき野はその一つ先です。帰りは同じ線を北へ、終点の麻生です。",
            "アパートメントは、一日の静かな側です。自炊して、寝て、雪を見に行くときに電車に乗ります。チェックインは変わらず16:00–23:00。通りは住宅街のままです。",
          ],
        },
        {
          h: "このページが書かないこと",
          paragraphs: [
            "雪像を見る時間、混み具合、その年に会場が増えるかどうかは、主催が決めます。旅する年の案内を見てください。変わらない行き方は、麻生から南へ、大通です。",
          ],
        },
      ],
    },
    teine: {
      eyebrow: "家の西",
      title: "サッポロテイネ。終わりは同じ扉。",
      lede: "こちら側からのスキーの一日です。午前は部屋、午後は山、終わったら専用の扉です。",
      credit: "札幌市街を振り返るサッポロテイネ。写真: Miki Yoshihito, CC BY 2.0。",
      blocks: [
        {
          h: "山",
          paragraphs: [
            "サッポロテイネは手稲山の北西面にあり、1972年のオリンピック会場です。オリンピアは下の、広いゾーン。ハイランドは上で、昔のオリンピックコースがある側です。",
            "リゾートは、札幌中心部から車でおよそ40分としています。北区からは札樽自動車道を西へ。山の駐車場は無料で、およそ2,800台です。車がないときは、JRで手稲駅へ出て、そこからバスで上ります。そのほうは時間がかかります。",
          ],
        },
        {
          h: "拠点としての家",
          paragraphs: [
            "Casa Antonioは、スキーインのロッジではありません。キッチンと暖房があり、扉の前に無料の駐車場がある住宅です。スキーは車に積むか、バスの日のために置いていくか。専用の乾燥室はこのサイトでは案内していません。",
            "夜、山で足りて、そのあと街へ出るなら南北線があります。同じ日に両方を詰め込む日程にはしていません。",
          ],
        },
      ],
    },
  },
  zh: {
    menu: "菜单",
    closeMenu: "关闭",
    banner: "你上次选择的语言是",
    bannerOpen: "用这个语言打开",
    bannerStay: "留在当前语言",
    footerGuides: "实用说明",
    footerLinks: footer("zh"),
    coastTitle: "把札幌和白老海岸连在一起",
    coastBody: "如果行程继续往西南，姊妹的房子在白老海岸。",
    coastCta: "Kojohama Cabins",
    longCta: "长期住宿",
    teineMore: "札幌手稻的滑雪日",
    bookA: "预订 Antonio A",
    bookB: "预订 Antonio B",
    bNote: "Casa Antonio B 的室内照片还没有放在这一页。下面这些房间是房源里写的。那些照片在 Airbnb 上。",
    bSlots: ["带投影仪的起居室", "三张单人床的卧室", "厨房和餐桌", "带浴缸的浴室"],
    notFoundTitle: "这个页面不在网站上。",
    notFoundBody: "两套公寓还在。",
    access: {
      eyebrow: "新千岁机场",
      title: "从机场到门口。",
      lede: "飞到札幌南边的新千岁机场（CTS）。丘珠是市内的小机场，不是这次行程的机场。",
      facts: [
        { k: "机场", v: "新千岁（CTS）" },
        { k: "不是这里", v: "丘珠" },
        { k: "火车", v: "机场快速，到札幌站约 37–45 分钟" },
        { k: "然后", v: "南北线往北到麻生，约 7 分钟" },
        { k: "步行", v: "麻生站约 5 分钟" },
        { k: "停车", v: "院内，免费" },
      ],
      blocks: [
        {
          h: "火车",
          paragraphs: [
            "从新千岁机场站乘 JR 机场快速到札幌站。最快的大约 37 分钟，有的接近 45 分钟。普通车票大约 1,200 日元。当天再确认票价。",
            "札幌地铁是另一张票。即使有 JR 通票，也不包含地铁。在札幌站换乘南北线，往北坐到终点麻生。房东写的这段大约七分钟。",
            "房子在麻生站南边，北38条西3丁目，从车站步行大约五分钟。",
          ],
        },
        {
          h: "机场巴士",
          paragraphs: [
            "机场巴士往来新千岁和札幌市中心，札幌站也停。路上常常要 70 到 90 分钟，看交通和天气。到札幌站的成人票价，现行市内时刻表是 1,500 日元。请当天确认。",
            "从札幌站乘南北线往北，终点是麻生。",
          ],
        },
        {
          h: "开车或出租车",
          paragraphs: [
            "从机场上高速往札幌，再向北进北区。不堵的时候常常不到 90 分钟。下雪会变。门前的车位是免费的专用车位。",
            "到札幌市中心的计价出租车，在高速费之外，常常大约 10,000 到 13,000 日元。房子在札幌站北边。请确认到这个地址的费用，而不是只到车站。",
          ],
        },
      ],
    },
    snow: {
      eyebrow: "通常在二月上旬",
      title: "雪祭期间，一个安静的落脚处。",
      lede: "札幌雪祭通常在二月上旬。主会场在大通公园。薄野也有会场。具体日期由市政府当年公布。这一页不编日期。",
      blocks: [
        {
          h: "怎么去",
          paragraphs: [
            "从房子步行大约五分钟到麻生站，乘南北线往南。大通公园在大通站。薄野是下一站。回来还是这条线，往北到终点麻生。",
            "公寓是一天里安静的那一半：做饭、睡觉，想看雪的时候再进城。入住仍是 16:00–23:00。街上仍是住宅。",
          ],
        },
        {
          h: "这一页不假装知道的事",
          paragraphs: [
            "雪雕开放时间、人多不多、那一年会不会多一个会场，由主办方决定。去旅行的那一年再查。不变的走法是：麻生，往南，大通。",
          ],
        },
      ],
    },
    teine: {
      eyebrow: "房子的西边",
      title: "札幌手稻。结束时还是同一扇门。",
      lede: "从城市这一侧出发的滑雪日。上午在公寓，下午在山上，结束了走自己的门。",
      credit: "札幌手稻，回头看城市。摄影：Miki Yoshihito，CC BY 2.0。",
      blocks: [
        {
          h: "山",
          paragraphs: [
            "札幌手稻在手稻山的西北坡，是 1972 年的奥运场地。奥林匹亚是下面较宽的区域。高地在上面，旧的奥运赛道在那边。",
            "滑雪场把札幌市中心写成开车大约四十分钟。从北区走札樽自动车道往西。山上的停车场免费，大约 2,800 个车位。没有车的话，JR 到手稻站，再乘巴士上山。那样更慢。",
          ],
        },
        {
          h: "把这栋房子当基地",
          paragraphs: [
            "Casa Antonio 不是滑进滑出的雪场旅馆。它是一套有厨房、有暖气、门前免费停车的住宅。滑雪板放在车里，或者留给坐巴士的那一天。这个网站没有写单独的烘干室。",
            "晚上如果山已经够了、还想进城，南北线还在。不把两件事排进同一个很紧的日子。",
          ],
        },
      ],
    },
  },
  ko: {
    menu: "메뉴",
    closeMenu: "닫기",
    banner: "지난번에 고른 언어는",
    bannerOpen: "이 페이지를 열기",
    bannerStay: "이 언어로 남기",
    footerGuides: "안내",
    footerLinks: footer("ko"),
    coastTitle: "삿포로와 시라오이 해안을 이어서",
    coastBody: "여행이 남서쪽으로 이어지면, 자매 숙소는 시라오이 해안에 있습니다.",
    coastCta: "Kojohama Cabins",
    longCta: "장기 숙박",
    teineMore: "삿포로 데이네의 스키 하루",
    bookA: "Antonio A 예약",
    bookB: "Antonio B 예약",
    bNote:
      "Casa Antonio B의 실내 사진은 아직 이 페이지에 없습니다. 아래 방은 숙소 안내에 있는 것입니다. 그 사진은 Airbnb에 있습니다.",
    bSlots: ["프로젝터가 있는 거실", "싱글 침대 세 개의 침실", "주방과 식탁", "욕조가 있는 욕실"],
    notFoundTitle: "이 페이지는 사이트에 없습니다.",
    notFoundBody: "아파트는 그대로 있습니다.",
    access: {
      eyebrow: "신치토세 공항",
      title: "공항에서 문까지.",
      lede: "도착은 삿포로 남쪽의 신치토세 공항(CTS)입니다. 오카다마는 시내의 작은 공항이라, 이 여행의 공항이 아닙니다.",
      facts: [
        { k: "공항", v: "신치토세 (CTS)" },
        { k: "아닌 공항", v: "오카다마" },
        { k: "열차", v: "공항 쾌속, 삿포로역까지 약 37–45분" },
        { k: "그다음", v: "난보쿠선으로 아사부까지 북상, 약 7분" },
        { k: "도보", v: "아사부역에서 약 5분" },
        { k: "주차", v: "부지 안, 무료" },
      ],
      blocks: [
        {
          h: "열차",
          paragraphs: [
            "신치토세 공항역에서 JR 공항 쾌속으로 삿포로역까지. 빠른 열차는 약 37분, 45분에 가까운 열차도 있습니다. 보통 운임은 1,200엔 안팎입니다. 당일 요금을 확인하세요.",
            "삿포로 지하철은 다른 표입니다. JR 패스가 있어도 지하철은 포함되지 않습니다. 삿포로역에서 난보쿠선으로 갈아타고 북쪽으로. 종점이 아사부입니다. 이 구간은 호스트 안내로 약 7분입니다.",
            "집은 아사부역 남쪽, 기타 38조 니시 3초메. 역에서 도보 약 5분입니다.",
          ],
        },
        {
          h: "버스",
          paragraphs: [
            "신치토세와 삿포로 도심을 잇는 공항 버스가 있고, 삿포로역에도 섭니다. 소요는 교통과 날씨에 따라 70분에서 90분인 경우가 많습니다. 삿포로역까지 어른 요금은 현재 시각표로 1,500엔입니다. 당일 확인을.",
            "삿포로역에서 난보쿠선 북행을 타면 종점은 아사부입니다.",
          ],
        },
        {
          h: "차, 또는 택시",
          paragraphs: [
            "공항에서는 고속도로로 삿포로 방면, 그다음 기타구로 북상합니다. 막히지 않으면 90분 안쪽인 경우가 많습니다. 눈 오는 날은 달라집니다. 문 앞 주차는 무료 전용입니다.",
            "삿포로 도심까지 미터 택시는, 고속도로 통행료 전에, 1만 엔에서 1만 3천 엔 정도인 경우가 많습니다. 집은 삿포로역보다 북쪽입니다. 역까지가 아니라 이 주소까지의 요금을 확인하세요.",
          ],
        },
      ],
    },
    snow: {
      eyebrow: "보통 2월 초",
      title: "눈축제를 위한 조용한 거점.",
      lede: "삿포로 눈축제는 보통 2월 초입니다. 주 회장은 오도리 공원. 스스키노에도 회장이 있습니다. 일정은 그해 시가 발표합니다. 이 페이지에서 날짜를 만들지 않습니다.",
      blocks: [
        {
          h: "가는 방법",
          paragraphs: [
            "집에서 아사부역까지 도보 약 5분. 난보쿠선으로 남쪽. 오도리 공원은 오도리역. 스스키노는 한 역 더 갑니다. 돌아올 때도 같은 선을 북으로, 종점 아사부입니다.",
            "아파트는 하루의 조용한 쪽입니다. 밥을 하고, 자고, 눈을 보러 갈 때 열차를 탑니다. 체크인은 그대로 16:00–23:00. 거리는 주택가 그대로입니다.",
          ],
        },
        {
          h: "이 페이지가 쓰지 않는 것",
          paragraphs: [
            "눈 조각의 관람 시간, 붐빔, 그해에 회장이 더 생기는지는 주최가 정합니다. 여행하는 해의 안내를 보세요. 바뀌지 않는 길은, 아사부에서 남쪽, 오도리입니다.",
          ],
        },
      ],
    },
    teine: {
      eyebrow: "집에서 서쪽",
      title: "삿포로 데이네. 끝은 같은 문.",
      lede: "이쪽에서의 스키 하루입니다. 오전은 방, 오후는 산, 끝나면 전용 문입니다.",
      credit: "삿포로 시내를 돌아본 삿포로 데이네. 사진: Miki Yoshihito, CC BY 2.0.",
      blocks: [
        {
          h: "산",
          paragraphs: [
            "삿포로 데이네는 데이네산 북서쪽 사면에 있고, 1972년 올림픽 장소입니다. 올림피아는 아래의 넓은 구역. 하일랜드는 위쪽이고, 옛 올림픽 코스가 있는 쪽입니다.",
            "리조트는 삿포로 중심부에서 차로 약 40분이라고 합니다. 기타구에서는 삿손 자동차도로를 서쪽으로. 산의 주차장은 무료이고, 약 2,800대입니다. 차가 없으면 JR로 데이네역에 내려 버스로 올라갑니다. 그쪽이 더 느립니다.",
          ],
        },
        {
          h: "거점으로서의 집",
          paragraphs: [
            "Casa Antonio는 스키 인 로지가 아닙니다. 주방과 난방이 있고, 문 앞에 무료 주차장이 있는 주택입니다. 스키는 차에 싣거나, 버스 가는 날을 위해 둡니다. 따로 된 건조실은 이 사이트에서 안내하지 않습니다.",
            "밤에 산으로 충분하고 그다음 시내로 가려면 난보쿠선이 있습니다. 같은 날에 둘 다 밀어 넣지는 않습니다.",
          ],
        },
      ],
    },
  },
};

export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
};
