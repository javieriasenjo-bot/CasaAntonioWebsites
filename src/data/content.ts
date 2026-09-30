import type { Lang } from "@/lib/i18n";
import { ko } from "./copy-ko";
import { zh } from "./copy-zh";

export const AIRBNB = {
  a: "https://www.airbnb.com/rooms/1248284267045468378",
  b: "https://www.airbnb.com/rooms/1248260873560502499",
} as const;

export const MAP = {
  lat: 43.105783,
  lng: 141.341362,
  embed:
    "https://www.openstreetmap.org/export/embed.html?bbox=141.326%2C43.097%2C141.357%2C43.115&layer=mapnik&marker=43.105783%2C141.341362",
  google: "https://www.google.com/maps/search/?api=1&query=43.105783,141.341362",
};

type L = Record<Lang, string>;

export type Photo = { src: string; alt: L };

const p = (src: string, en: string, ja: string, zh: string, ko: string): Photo => ({
  src,
  alt: { en, ja, zh, ko },
});

export const housePhotos: Photo[] = [
  p("/photos/exterior.jpg", "The two wooden doors under the brick porch", "レンガのポーチに並ぶ木の扉", "砖门廊下并排的两扇木门", "벽돌 포치 아래 나란히 선 나무 문 두 짝"),
  p("/photos/entry.jpg", "Private entrances and the parking apron", "専用入口と駐車場", "独立入口与门前停车位", "전용 입구와 앞쪽 주차 공간"),
  p("/photos/street.jpg", "The house from the street", "通りから見た家", "从街道看这栋房子", "길에서 본 집"),
];

export const apartmentAPhotos: Photo[] = [
  p("/photos/living.jpg", "Living room, sofa, and kitchen counter in Casa Antonio A", "Casa Antonio Aの居間。ソファとキッチンカウンター", "Casa Antonio A 的起居室、沙发与厨房台面", "Casa Antonio A의 거실. 소파와 주방 카운터"),
  p("/photos/kitchen-living.jpg", "Sofa, coffee table, and the open kitchen", "ソファとテーブル、オープンキッチン", "沙发、茶几与开放式厨房", "소파, 테이블, 오픈 키친"),
  p("/photos/dining.jpg", "Window-side dining table, long enough for a laptop", "窓際のダイニング。作業にも使えるテーブル", "靠窗的餐桌，放得下一台电脑", "창가 식탁. 노트북을 두기에도 충분한 테이블"),
  p("/photos/dining-2.jpg", "The dining bench and the kitchen pass", "ダイニングのベンチとキッチン", "餐桌长椅与厨房", "식탁 벤치와 주방"),
  p("/photos/kitchen.jpg", "Kitchen sink, cooktop, and refrigerator", "シンク、コンロ、冷蔵庫", "厨房水槽、炉灶与冰箱", "싱크, 가스레인지, 냉장고"),
  p("/photos/open.jpg", "Looking from the living room toward the kitchen and hall", "居間からキッチンと廊下を見る", "从起居室望向厨房和走廊", "거실에서 주방과 복도를 바라본 모습"),
  p("/photos/sofa.jpg", "The grey sofa under the high window", "高窓の下のグレーのソファ", "高窗下的灰色沙发", "높은 창 아래의 회색 소파"),
  p("/photos/bedroom.jpg", "Bedroom with three beds", "ベッド3台の寝室", "三张床的卧室", "침대 세 개의 침실"),
  p("/photos/bedroom-2.jpg", "The three beds from the window side", "窓側から見た3台のベッド", "从窗边看三张床", "창가에서 본 침대 세 개"),
  p("/photos/bedroom-3.jpg", "Beds, closet, and the bedroom window", "ベッドとクローゼット、寝室の窓", "床、衣柜与卧室的窗", "침대, 옷장, 침실 창"),
  p("/photos/hall.jpg", "Hall closet and the way through the apartment", "廊下の収納と部屋の奥", "走廊储物与房间深处", "복도 수납과 집 안쪽"),
  ...housePhotos,
];

export const copy = {
  en: {
    chrome: {
      skip: "Skip to content",
      nav: "Primary",
      language: "Language",
    },
    captions: {
      doors: "Two private doors",
      living: "Living room in Antonio A",
      bedroom: "Bedroom",
      kitchen: "Kitchen",
      table: "The table",
      livingAlt: "Living room, Casa Antonio A",
      woodDoors: "Wooden private entrances",
      workTable: "Window-side table for a working day",
      privateDoors: "The private doors",
      houseOnStreet: "The house on Kita 38-jo",
      fromStreet: "The house from the street",
      residential: "A residential street",
      parking: "Parking in front of the doors",
      parkingCaption: "Parking at the door",
    },
    nav: {
      a: "Antonio A",
      b: "Antonio B",
      neighborhood: "Near our home",
      trips: "Day trips",
      arrival: "Arrival",
      book: "Book",
    },
    hero: {
      eyebrow: "Kita-ku · Asabu · Sapporo",
      title: "Two apartments, one quiet house.",
      lede: "Casa Antonio A is the modern floor. Casa Antonio B, upstairs, is the warmth of wood. About five minutes on foot from Asabu Station.",
      a: "See Antonio A",
      b: "See Antonio B",
    },
    intro: {
      eyebrow: "The house",
      title: "A residential street in the north of the city.",
      body: [
        "Casa Antonio is a private house in Kita 38-jo, Kita-ku. Two apartments share the building and keep separate entrances: a pair of wooden doors under a brick porch, with parking on the asphalt in front.",
        "It is not a hotel lobby. You let yourself in, cook if you want to, and ride the subway south when the city is the plan. Asabu Station, on the Namboku line, is the walk the host describes as about five minutes.",
      ],
    },
    mosaicCaption: "The house, and Casa Antonio A",
    choicesTitle: "Choose a floor",
    choicesLede: "Same address, two different stays. Both are booked on Airbnb.",
    aCard: {
      name: "Casa Antonio A",
      line: "Modern space · about 100 m² · up to 4 guests",
      cta: "View the apartment",
    },
    bCard: {
      name: "Casa Antonio B",
      line: "Warmth of wood · second floor · about 70 m² · up to 3 guests",
      cta: "View the apartment",
    },
    aHome: {
      eyebrow: "Ground-floor apartment",
      title: "Casa Antonio A",
      tag: "A pale, modern room for coming back to.",
      body: "Grey sofa, wood floor, a window-side table, and a kitchen in the same room. The bedroom down the hall has three beds. The apartment is about 100 square meters, one bedroom and one bath, for up to four guests. The photographs show three beds.",
    },
    bHome: {
      eyebrow: "Second floor",
      title: "Casa Antonio B",
      tag: "Wood, a projector, and a private door.",
      body: "The host lists B as the warmth of wood: a simple modern interior with a projector in the living room. About 70 square meters, one bedroom with three twin beds, for up to three guests. It is the upstairs apartment in the same house, with its own entrance.",
    },
    bookA: "Book Antonio A on Airbnb",
    bookB: "Book Antonio B on Airbnb",
    photos: "All photographs",
    photoNoteA: "Photographs of Casa Antonio A, taken in the apartment, plus the shared house outside.",
    photoNoteB: "These photographs are of the house.",
    neighborhoodTeaser: {
      eyebrow: "Asabu",
      title: "South to the city when you want it.",
      body: "The Namboku line runs from Asabu through Sapporo Station to Odori and Susukino. Day to day, the useful places are closer: AEON over the station, and calma a few blocks south.",
      cta: "Near our home",
    },
    nomad: {
      eyebrow: "Working from Sapporo",
      title: "A quiet room for a real work day.",
      lede: "Casa Antonio A is a residential apartment with a table by the window, a kitchen, and heat. It is a base for working in the city, not a coworking lobby.",
      body: [
        "The day can stay inside. Wi-Fi runs through the apartment, the dining table has chairs and daylight, and the sofa is there when the afternoon is calls rather than typing. The street is houses, not a reception desk. In winter the heating is the point: you can work through a snowfall without negotiating a cafe for a seat.",
        "When the apartment feels too quiet, Asabu Station is about a five-minute walk. Sapporo Station is a short ride south, and that is where the larger cafes are. AEON, over Asabu Station, has a Tully’s if all you want is coffee. Japan and South Korea use the same clock. China is one hour behind Japan. Europe is usually the afternoon, and the American West is usually late at night. Those two shift when those places change their clocks.",
        "In ski season the rhythm that suits this house is a morning of work and an afternoon at Sapporo Teine, then the same door at the end of it. The kitchen means you are not buying every meal out. Bring the charger you actually use. There is no separate office and no second monitor. The apartment has Wi-Fi.",
      ],
      cta: "Teine and the neighborhood",
    },
    longStay: {
      eyebrow: "Long-term rentals",
      title: "Weeks and months, at a special rate.",
      lede: "Both apartments can be taken for longer than a holiday. A stay of several weeks, or a few months, is priced below what those nights would cost one by one.",
      body: [
        "Casa Antonio A and Casa Antonio B are the same house, with separate doors. A long stay uses one of them as a home: cook, work, keep the car in the free space out front, and ride the subway when the city is the plan. It suits a work season in Sapporo, a university term, a family visit that runs long, or a winter built around Teine.",
        "The discount is real, and it is not a figure printed on this page. Nightly prices on Airbnb are for shorter bookings. For a block of weeks or months, the host sets a special rate for those exact dates — lower than stacking the nightly price. What is included, and the total, are confirmed in writing before you pay. This site does not take the booking.",
        "The house rules do not relax because the stay is long. No smoking, no pets, no parties, and a quiet street after dark. Check-in and check-out still apply at each end. Only the people on the booking live there.",
      ],
      points: [
        { k: "Length", v: "Several weeks, or a number of months" },
        { k: "Rate", v: "A special price, below stacked nightly rates" },
        { k: "Which", v: "Antonio A, Antonio B, or one after the other" },
        { k: "How", v: "Message the host on Airbnb with your dates" },
      ],
      ctaA: "Ask about Antonio A",
      ctaB: "Ask about Antonio B",
      note: "Write the dates, how many people, and which apartment. The host replies with the long-stay rate for that period.",
    },
    practical: {
      eyebrow: "Before you arrive",
      title: "The same house rules, on both floors.",
      items: [
        { k: "Check-in", v: "16:00–23:00, self check-in" },
        { k: "Check-out", v: "by 10:00" },
        { k: "Parking", v: "Free, on site, private" },
        { k: "Smoking", v: "Nowhere on the property" },
        { k: "Pets", v: "Not allowed" },
        { k: "Parties", v: "Not allowed" },
      ],
      cta: "Arrival notes",
    },
    footer: {
      line: "Two apartments in one house. Kita 38-jo Nishi 3-chome, Kita-ku, Sapporo.",
      address: "〒001-0038 北海道札幌市北区北38条西3丁目1-7",
      licenses: "Minpaku notification  M010045173 · A     M010045174 · B",
      photo: "Interior photographs are of Casa Antonio A.",
    },
    reserve: {
      label: "Reserve",
      title: "Book on Airbnb",
      a: "Casa Antonio A",
      b: "Casa Antonio B",
      close: "Close",
    },
    stayShared: {
      book: "Check dates on Airbnb",
      amenities: "In the apartment",
      rules: "House rules",
      facts: "At a glance",
      back: "Both apartments",
    },
    aPage: {
      eyebrow: "Casa Antonio A · modern space",
      title: "A modern apartment, with its own door.",
      lede: "Pale walls, a long sofa, and a kitchen open to the living room. The bedroom sits just through the hall.",
      facts: [
        ["Guests", "Up to 4"],
        ["Layout", "1 bedroom, 1 bath"],
        ["Size", "About 100 m²"],
        ["Beds in photos", "Three"],
        ["Entrance", "Private"],
        ["License", "M010045173"],
      ],
      storyTitle: "What the room is like",
      story: [
        "Casa Antonio A is the modern one. The living room is a soft grey-blue, with a sofa facing the window and a pale table in the middle. The kitchen is part of the same room: a counter, a refrigerator, a cooktop under a hood, a microwave, and a toaster oven. There is also an oven.",
        "The bedroom has three beds dressed in white, a closet, and a dresser. A short hall joins it to the living room. Heating and air conditioning are in the rooms you actually sit in, which is what makes a long winter day possible.",
        "You come in through your own door. Check-in is private and contactless; the timing and the lock instructions are sent on Airbnb, not posted here. Towels, linen, and basic toiletries are provided, along with a washer, heating, air conditioning, and Wi-Fi.",
      ],
      amenities: [
        "Free Wi-Fi throughout",
        "Heating and air conditioning",
        "Kitchen with cooktop, microwave, and refrigerator",
        "Oven",
        "Toaster oven",
        "Washing machine",
        "Flat-screen TV",
        "Unit bath with tub",
        "Hairdryer and free toiletries",
        "Towels and bed linen",
        "Free private parking on site",
        "Smoke alarm and fire extinguisher",
      ],
    },
    bPage: {
      eyebrow: "Casa Antonio B · warmth of wood",
      title: "Upstairs, with a projector and a quiet street.",
      lede: "The second floor of the same house, reached by stairs. A wood interior, and a projector in the living room.",
      facts: [
        ["Guests", "Up to 3"],
        ["Layout", "1 bedroom, 1 bath"],
        ["Size", "About 70 m²"],
        ["Beds", "3 twins"],
        ["Floor", "Second, by stairs"],
        ["License", "M010045174"],
      ],
      storyTitle: "What the host describes",
      story: [
        "Casa Antonio B is the upstairs apartment. On Airbnb the host describes a simple, finished modern interior, and a living room with a projector — a night in, rather than a night out. The nearest station named in that listing is Asabu, on the Namboku line, about a five-minute walk. Sapporo Station, Odori, and Susukino are a short ride south.",
        "It is about 70 square meters: one bedroom, three twin beds, up to three guests, and one bathroom with a tub, shower, bidet, and hairdryer. The kitchen has a stovetop, refrigerator, microwave, kitchenware, a dining table, and wine glasses. There is a sofa, a washer, slippers, towels, and linen.",
        "It has a private entrance, free on-site parking, free Wi-Fi, heating, air conditioning, and self check-in. Non-smoking, on a quiet residential street.",
      ],
      amenities: [
        "Projector in the living room",
        "Three twin beds",
        "Free Wi-Fi throughout",
        "Heating and air conditioning",
        "Kitchen with stovetop, microwave, and refrigerator",
        "Dining table and wine glasses",
        "Washing machine",
        "Sofa",
        "Bathtub, shower, and bidet",
        "Hairdryer, slippers, and toiletries",
        "Towels and bed linen",
        "Free private parking on site",
        "Smoke alarm, fire extinguisher, and CO detector",
      ],
    },
    rules: [
      "Check-in from 16:00 until 23:00. Check-out from 06:00, and by 10:00.",
      "Self check-in. Instructions arrive through Airbnb after booking.",
      "The whole property is non-smoking, including entrances and the parking area.",
      "No pets.",
      "No parties, and the apartments are not for stag or hen events.",
      "The guest checking in should be 18 or older. Children are welcome.",
      "Only registered guests. Please don’t hand the door to anyone who isn’t on the booking.",
      "A damage deposit of up to ¥15,000 may be charged if something is broken.",
      "Quiet residential street — keep voices and music down, especially after dark.",
    ],
    neighborhood: {
      eyebrow: "Kita 38-jo",
      title: "Near our home.",
      lede: "The house is a few minutes south of Asabu Station. The useful cluster is that station: food, a supermarket, a couple of small parks, and places to get a shoulder looked at. A few of the restaurants sit just past the station, so allow five to ten minutes on foot, not a strict five.",
      localEyebrow: "Stay local",
      localTitle: "A day in Asabu",
      localLede: "The street, the station, and the rooms past the station for dinner. That is the neighborhood. It is enough for a day that does not need a plan.",
      local: [
        {
          title: "The house",
          time: "The door",
          body: "Two wooden doors under a brick porch, and free parking on the apron in front. The street is houses. Come back here between the station and a longer outing.",
        },
        {
          title: "Asabu Station",
          time: "About 5 min",
          body: "Namboku line, the north end. Southbound trains go through Kita 24-jo and Sapporo Station toward Odori and Susukino. The host’s timing is about five minutes on foot.",
        },
        {
          title: "AEON Sapporo Asabu",
          time: "A short walk",
          body: "Built on top of the station, Kita 39-jo Nishi 4. Groceries are on the food floor, which stays open later than the rest. Saizeriya, Tully’s Coffee, and McDonald’s are inside. Not a destination mall. Hours differ by floor. About 570 parking spaces if you drive the last block.",
        },
        {
          title: "calma",
          time: "A few blocks",
          body: "A small Italian counter, eleven seats, on the ground floor of Sepia 35 at Kita 35-jo Nishi 3. Lunch 11:00–13:30, dinner 17:00–21:00, closed Sunday, with the occasional extra closure. Call before you count on it. Close enough to walk home.",
        },
      ],
      tripsEyebrow: "Easy day trips",
      tripsTitle: "One direction, then home.",
      tripsLede: "South is the subway. West is the car, with skis in the back. Pick one.",
      trips: [
        {
          title: "Sapporo Station and Odori",
          time: "Subway",
          body: "Sapporo Station is about 4.9 km by road. The listing says about seven minutes on the train. Odori is the long park further down the same line: the snow festival in February, beer gardens in summer, the TV tower at the east end. Susukino is the late night, if you want one.",
        },
        {
          title: "Hokkaido University",
          time: "About 4.7 km",
          body: "The campus is south of here. A good hour on foot when the ginkgo or the snow is the reason for going. Sapporo Clock Tower is about 5.5 km, on the same general ride.",
        },
        {
          title: "Sapporo Teine",
          time: "By car",
          body: "The ski day from this side of the city. Northwest face of Mount Teine, a 1972 Olympic venue. Olympia is the lower, broader zone. Highland is higher, where the old Olympic courses are. The resort puts central Sapporo at about forty minutes by car. From Kita-ku you drive west on the Sasson Expressway. Parking at the mountain is free, on the order of 2,800 cars. Without a car: JR to Teine Station, then the bus up. Slower.",
        },
      ],
      skiPhoto: "Sapporo Teine, looking back toward the city. Photograph by Miki Yoshihito, CC BY 2.0.",
      planEyebrow: "A simple two-day plan",
      planTitle: "Keep the itinerary spacious.",
      plan: [
        {
          title: "Day one: stay near the house",
          body: "Walk to AEON for coffee and groceries. Lunch at calma if it is open. Work at the window table, or do nothing. The kitchen means dinner does not have to be a trip.",
        },
        {
          title: "Day two: choose one direction",
          body: "South on the subway for Odori, the university, or a longer dinner. Or west by car for Teine, and the same door at the end of it. Not both.",
        },
      ],
      guideEyebrow: "From the house",
      guideTitle: "Places worth naming.",
      guideLede: "Times are from this house, on foot unless the line says otherwise. Hours change. Check the day you go. A map link opens the listing, including its photos. Those pictures stay on Google.",
      guide: [
        {
          title: "Eat and drink",
          items: [
            {
              name: "Hokuzanryu",
              time: "Past the station",
              body: "Ramen at Asabu-cho 2-4-8, about 140 meters from Asabu Station. Tabelog named it one of Hokkaido’s hundred ramen shops in 2025. Closed Tuesdays. The ginger-salt bowl is the one people queue for.",
              map: "https://www.google.com/maps/search/?api=1&query=北山龍+札幌市北区麻生町2-4-8",
            },
            {
              name: "Marseille",
              time: "Past the station",
              body: "A small cafe for hamburg steak, at Asabu-cho 3-9-8, about 150 meters from the station. Quieter than the izakaya strip.",
              map: "https://www.google.com/maps/search/?api=1&query=マルセイユ+札幌市北区麻生町3-9-8",
            },
            {
              name: "Kushidori, Asabu ekimae",
              time: "Past the station",
              body: "The Hokkaido yakitori chain, at Asabu-cho 4-12-6. Charcoal skewers, a few minutes past the station. Useful when you want dinner without Susukino.",
              map: "https://www.google.com/maps/search/?api=1&query=串鳥+麻生駅前店",
            },
            {
              name: "goody goody",
              time: "Past the station",
              body: "Omurice, doria, and waffles at Asabu-cho 4-9-14, in Frontier Asabu. Open 11:00–22:00, no weekly closing day except New Year. About a minute from the station, so a little farther from the house.",
              map: "https://www.google.com/maps/search/?api=1&query=goody+goody+麻生店+麻生町4-9-14",
            },
            {
              name: "Masaya",
              time: "Past the station",
              body: "An izakaya for motsu nabe and seafood, Asabu-cho 3-10-22, just off exit 3 of the station. A night meal, not a lunch.",
              map: "https://www.google.com/maps/search/?api=1&query=まさや+札幌麻生店+麻生町3-10-22",
            },
            {
              name: "calma",
              time: "A few blocks south",
              body: "Eleven-seat Italian at Kita 35-jo. Lunch and dinner, closed Sunday. Farther than the station cluster, and still a walk home.",
              map: "https://www.google.com/maps/search/?api=1&query=calma+札幌+北35条+セピア35",
            },
            {
              name: "Saizeriya",
              time: "Inside AEON",
              body: "The ordinary family Italian in the station building. Useful when the smaller rooms are closed.",
              map: "https://www.google.com/maps/search/?api=1&query=サイゼリヤ+イオン札幌麻生店",
            },
            {
              name: "Tully’s Coffee",
              time: "Inside AEON",
              body: "Coffee without going into the city. Enough for a work morning.",
              map: "https://www.google.com/maps/search/?api=1&query=タリーズコーヒー+イオン札幌麻生店",
            },
            {
              name: "McDonald’s",
              time: "Inside AEON",
              body: "In the same building as the supermarket, over Asabu Station.",
              map: "https://www.google.com/maps/search/?api=1&query=マクドナルド+イオン札幌麻生店",
            },
          ],
        },
        {
          title: "A sore shoulder",
          items: [
            {
              name: "Suzuran Seitai, Asabu",
              time: "By the station",
              body: "A seitai clinic about 120 meters from Asabu Station. Listed hours 10:00–21:00. This is treatment, not a hotel spa. Call before you count on a slot.",
              map: "https://www.google.com/maps/search/?api=1&query=スズラン整体+麻生",
            },
            {
              name: "MILGRAIN",
              time: "About 5 min from the station",
              body: "A small relaxation room, about 350 meters from Asabu Station. Listed hours 11:00–20:00. Book ahead on a weekend.",
              map: "https://www.google.com/maps/search/?api=1&query=MILGRAIN+麻生+マッサージ",
            },
            {
              name: "Bonzyu",
              time: "A few minutes past the station",
              body: "Relaxation massage about 300 meters from the station. Hours move. Check the day.",
              map: "https://www.google.com/maps/search/?api=1&query=梵珠+bonzyu+麻生",
            },
          ],
        },
        {
          title: "Parks",
          items: [
            {
              name: "Kita 38-jo Sazanka Park",
              time: "On this jo",
              body: "A small neighborhood park on Kita 38-jo, the same east-west street as the house. Benches and a short walk, not a destination.",
              map: "https://www.google.com/maps/search/?api=1&query=北38条さざんか公園+札幌",
            },
            {
              name: "Asabu Green Space",
              time: "Near the station",
              body: "麻生緑地, at Kita 39-jo Nishi 5, about 170 meters from the station. Trees between the houses.",
              map: "https://www.google.com/maps/search/?api=1&query=麻生緑地+札幌市北区",
            },
            {
              name: "Asabu Minami Park",
              time: "Near the station",
              body: "A local park just south of the station cluster, about 280 meters from Asabu Station. Fine for a loop after dinner.",
              map: "https://www.google.com/maps/search/?api=1&query=麻生南公園+札幌",
            },
          ],
        },
        {
          title: "Everyday shopping",
          items: [
            {
              name: "AEON Sapporo Asabu, food floor",
              time: "A short walk north",
              body: "The supermarket for a stay, built on top of Asabu Station. This is the floor that stays open later. Check the day’s hours. The map listing has the current floor guide.",
              map: "https://www.google.com/maps/search/?api=1&query=イオン札幌麻生店",
            },
            {
              name: "AEON parking",
              time: "Same building",
              body: "About 570 spaces if the last block is easier by car. The house also has its own free space out front.",
            },
          ],
        },
        {
          title: "Sights",
          items: [
            {
              name: "Asabu Station",
              time: "About 5 min on foot",
              body: "North end of the Namboku line. The useful walk.",
            },
            {
              name: "Hokkaido University",
              time: "About 4.7 km",
              body: "Campus to the south. Worth the hour if the trees or the snow are the point.",
            },
            {
              name: "Odori Park",
              time: "Same subway line",
              body: "Snow festival in February. Beer gardens in summer. TV tower at the east end.",
            },
            {
              name: "Sapporo Clock Tower",
              time: "About 5.5 km",
              body: "The small wooden clock in the center. A stop, not a day.",
            },
            {
              name: "Sapporo Station",
              time: "About 4.9 km",
              body: "The listing’s train time is about seven minutes. Larger cafes are here, not in Asabu.",
            },
          ],
        },
        {
          title: "Ski",
          items: [
            {
              name: "Sapporo Teine",
              time: "West by car",
              body: "Olympia and Highland. Often under 40 minutes in clear conditions. Free parking at the mountain.",
            },
            {
              name: "Sapporo Bankei",
              time: "Southwest of the center",
              body: "A smaller city hill. Often a short family session. Closer to central Sapporo than to this house.",
            },
            {
              name: "Fu’s Snow Area",
              time: "Teine side",
              body: "A local hill, for turns without giving the whole day to a large resort.",
            },
            {
              name: "Sapporo Kokusai",
              time: "About an hour",
              body: "Further northwest. A longer ski day if Teine feels too close.",
            },
            {
              name: "Niseko or Kiroro",
              time: "A trip",
              body: "Not an errand. If that is the week, leave early. This house is the quiet night afterward.",
            },
          ],
        },
      ],
      seasonEyebrow: "October to March",
      seasonTitle: "Visiting in the snow.",
      seasonBody:
        "Both apartments have heating. The subway does not care about the snowfall. Side streets are plowed, then they ice, and shoes with a grip matter more than a new jacket. The parking apron in front of the doors is slower when it glazes. Teine is the afternoon that suits this house. Restaurant and shop hours move in winter, so check before you go.",
      mapTitle: "The house",
      mapNote: "Pin is the published coordinate for Kita 38-jo Nishi 3-chome 1-7. Open it in Google Maps if you are navigating in. Shop photos are on each listing, not copied here.",
      mapLabel: "Map and photos",
      openMap: "Open in Google Maps",
    },
    dayTrips: {
      eyebrow: "From the house",
      title: "One day, one direction.",
      lede: "These are days out from Kita 38-jo, not a tour of Hokkaido. Leave after breakfast. Be home for a late dinner, unless the page says the day is long.",
      homeTitle: "A day away, then the same door.",
      homeBody: "Otaru by train. Noboribetsu or Jozankei for steam. Furano and Biei only if the day is long. The Buddha is south, on this subway line. Teine when you want to be home early.",
      homeCta: "Day trips",
      note: "Times are in clear weather, from central Sapporo, plus the walk from this house to Asabu and the subway. Snow, flower season, and road closures change the day. Check that morning. This page does not sell tickets or hold a table.",
      ideas: [
        {
          id: "otaru",
          eyebrow: "No car · about 35–45 minutes from Sapporo Station",
          title: "Otaru, and back for dinner.",
          lede: "The easy day, and the one most people take. A canal town and one seafood lunch.",
          steps: [
            {
              time: "Morning",
              title: "Asabu, then the train",
              body: "Walk to Asabu and take the subway to Sapporo Station, about the seven minutes in the listing. From there the JR Hakodate line runs to Otaru. The faster trains take about 35 to 45 minutes.",
            },
            {
              time: "Late morning",
              title: "Canal, then Sakaimachi",
              body: "Walk the canal and the stone warehouses. Sakaimachi Street is the next lane if you want glass and music boxes. One street is enough. Tenguyama ropeway is the view over the port, if the cabin is running that day. Check before you climb.",
            },
            {
              time: "Lunch",
              title: "Sankaku Market",
              body: "Sankaku Market, a short walk from Otaru Station, is the seafood lunch: kaisendon and the stalls. Go before the tour groups fill it. This page does not hold a table.",
            },
            {
              time: "Afternoon",
              title: "The same trains back",
              body: "You can be at the house in time to cook. The car can stay in front of the doors.",
            },
          ],
        },
        {
          id: "noboribetsu",
          eyebrow: "Car or train · about 75–90 minutes",
          title: "Noboribetsu. Hell Valley.",
          lede: "Steam, not a city. One volcanic walk and a foot bath, then home.",
          steps: [
            {
              time: "Morning",
              title: "South, then the valley",
              body: "By car, allow about an hour and a half in clear weather. Without a car, the train toward Noboribetsu and the bus up to Jigokudani take a similar stretch of the day, sometimes longer. Leave after breakfast.",
            },
            {
              time: "The walk",
              title: "Jigokudani",
              body: "Hell Valley is a crater you can walk: vents, sulphur, and a boardwalk. Oyunuma pond is the next short walk. There is a natural foot bath near the entrance. The valley itself is a walk, not a ticketed show. Some paths close in bad weather.",
            },
            {
              time: "Afternoon",
              title: "One soak, then back",
              body: "A day bath in Noboribetsu Onsen if you want the full soak. Do not add Lake Toya. You would be driving home in the dark.",
            },
          ],
        },
        {
          id: "jozankei",
          eyebrow: "Bus or car · about an hour from Sapporo Station",
          title: "Jozankei. The closest onsen.",
          lede: "A valley of hot water on the south side of the city. Autumn color is the famous week. A soak is the ordinary reason.",
          steps: [
            {
              time: "From this house",
              title: "Subway, then the direct bus",
              body: "Jozankei is not on the subway. From Asabu ride to Sapporo Station, then the Jotetsu Kappa Liner from stand 27. The company puts the ride at about 60 minutes. It is a reserved bus, and the booking window closes the day before. A one-way fare is on the order of ¥1,700. An ordinary Jotetsu bus also runs to the valley and costs less. Check that morning. By car, allow about an hour.",
            },
            {
              time: "There",
              title: "The valley, not a checklist",
              body: "Walk the river, look at Futami suspension bridge if you want one view, and take one bath. Jozan Gensen Park is the outdoor source. Hotels sell day baths. Pick one and ask the price at the door.",
            },
            {
              time: "Back",
              title: "The last bus matters",
              body: "The liner back to Sapporo Station is a few departures, not every ten minutes, and those seats are reserved. Note the return before you get in a bath. The ordinary bus is the other way home.",
            },
          ],
        },
        {
          id: "furano",
          eyebrow: "Car · a full day, about 2 to 2.5 hours each way",
          title: "Furano and Biei, if you leave early.",
          lede: "These two valleys are the summer photograph. Together they are one long day, not two strolls. Leave after breakfast. Be home late.",
          steps: [
            {
              time: "The drive",
              title: "One expressway, then a choice",
              body: "Furano is about two hours and ten minutes in ordinary conditions, via Takikawa. Biei is closer to two and a half, via Asahikawa. Tolls are a few thousand yen each way. In winter both are slower, and some hill roads close.",
            },
            {
              time: "Biei",
              title: "The Blue Pond, then one hill",
              body: "Shirogane Blue Pond is toward Tokachidake, not in the middle of Biei town. In summer the patchwork fields are the other stop. Do not try to walk every hill.",
            },
            {
              time: "Furano",
              title: "Flowers, or the woods",
              body: "Mid-July is the lavender at Farm Tomita, and it is crowded. Go early or skip it. Outside that window the town is cheese and the station street. Ningle Terrace, in the trees by the Prince Hotel, is the craft stop if you still have daylight. Check that it is open.",
            },
          ],
        },
        {
          id: "buddha",
          eyebrow: "This subway line, then a bus · or about 40 minutes by car from central Sapporo",
          title: "The Hill of the Buddha.",
          lede: "Tadao Ando’s Buddha at Makomanai Takino Cemetery, in the south of Sapporo. It is not at Lake Toya. Tours sometimes glue the two together. They are different days.",
          steps: [
            {
              time: "Without a car",
              title: "Namboku line to the end, then the bus",
              body: "From Asabu the subway runs south to Makomanai, the last stop. From there, Hokkaido Chuo Bus Shin 108 (Takino line), stand 2, is the direct bus, about 20 to 25 minutes, to Makomanai Takino Cemetery. The cemetery’s own sheet has listed that ride at ¥500. Buses are not frequent, and the last one home can be early, especially in winter. Read the return before you leave the cemetery.",
            },
            {
              time: "The visit",
              title: "The hill, then the moai",
              body: "The Buddha is buried to the chin in a lavender hill, with a long approach and a water garden. Since April 2026 the cemetery lists adult admission at ¥1,000. Ask at the gate about children. The moai and a stone circle are on the same grounds. The cemetery can close the Buddha in bad weather or for maintenance.",
            },
            {
              time: "By car",
              title: "About forty minutes from the center",
              body: "Cars have parked on the grounds without a fee, and the lot is large. Coach parking is charged separately, and that fee went up in April 2026. Read the board. From this house you drive south. It is a morning, not a tour of Hokkaido.",
            },
          ],
        },
        {
          id: "toya",
          eyebrow: "Car · about 2 hours",
          title: "Lake Toya, on its own.",
          lede: "A caldera, Mount Usu, and a long way home. Do not add the Buddha or Noboribetsu.",
          steps: [
            {
              time: "Morning",
              title: "Leave early",
              body: "Allow about two hours by car in clear weather. The Donan bus from Sapporo toward Toyako also exists and passes through the Jozankei side of the city. It is a bus day, not a flexible one. Check the return before you go.",
            },
            {
              time: "There",
              title: "The lake, or the volcano",
              body: "The view is the caldera. Mount Usu is the volcanic walk if the paths are open. One of those is the day. A lakeside lunch, then turn around.",
            },
          ],
        },
        {
          id: "teine",
          eyebrow: "Car · often under 40 minutes",
          title: "The short day is Teine.",
          lede: "When the valleys are too far, the mountain to the west is already enough.",
          steps: [
            {
              time: "Morning",
              title: "Stay in",
              body: "Work at the table, or don’t. The kitchen is there. Leave after lunch.",
            },
            {
              time: "Afternoon",
              title: "Olympia or Highland",
              body: "Sapporo Teine is the 1972 Olympic hill. Olympia is the lower, easier area. Highland is higher, where the old courses are. Parking at the mountain is free.",
            },
            {
              time: "Evening",
              title: "The same door",
              body: "This is the day the space in front of the house is for. Dinner does not have to be in the city.",
            },
          ],
        },
      ],
      more: "Teine, in more detail",
    },
    arrival: {
      eyebrow: "Good to know",
      title: "Arrive after four. Leave by ten.",
      lede: "Both apartments follow the same hours and the same house rules. The door code, or the key steps, are sent on Airbnb — they are not printed on this site.",
      hoursTitle: "Hours",
      includedTitle: "Already in the apartment",
      included: [
        "Towels and bed linen",
        "Basic toiletries",
        "An equipped kitchen and a washing machine",
        "Heating, air conditioning, and Wi-Fi",
        "Slippers are listed for Casa Antonio B",
        "A hairdryer",
      ],
      languagesTitle: "Languages",
      languages: "The host is listed as speaking English, Japanese, Korean, and Chinese. This site is written in those four languages.",
      licenseTitle: "Notification numbers",
      licenseBody:
        "These are private lodgings under Japan’s housing accommodation business. Casa Antonio A is M010045173. Casa Antonio B is M010045174.",
      payTitle: "How booking works",
      payBody:
        "Dates, price, and availability live on Airbnb. This site does not take payment. A damage deposit of up to ¥15,000 may be requested if something in the apartment is damaged.",
    },
    lightbox: { close: "Close", prev: "Previous photograph", next: "Next photograph" },
  },
  ja: {
    chrome: {
      skip: "本文へ",
      nav: "主要",
      language: "言語",
    },
    captions: {
      doors: "専用の扉がふたつ",
      living: "アントニオAの居間",
      bedroom: "寝室",
      kitchen: "キッチン",
      table: "窓際のテーブル",
      livingAlt: "アントニオAの居間",
      woodDoors: "木の専用入口",
      workTable: "仕事にも使える窓際のテーブル",
      privateDoors: "専用の扉",
      houseOnStreet: "北38条の家",
      fromStreet: "通りからの家",
      residential: "住宅街",
      parking: "駐車場",
      parkingCaption: "扉の前の駐車",
    },
    nav: {
      a: "アントニオ A",
      b: "アントニオ B",
      neighborhood: "家の近く",
      trips: "日帰り",
      arrival: "ご案内",
      book: "予約",
    },
    hero: {
      eyebrow: "札幌・北区・麻生",
      title: "一軒家に、ふたつの住まい。",
      lede: "Casa Antonio Aはモダンな空間。2階のCasa Antonio Bは木の温もり。麻生駅から徒歩およそ5分です。",
      a: "アントニオ A を見る",
      b: "アントニオ B を見る",
    },
    intro: {
      eyebrow: "この家",
      title: "札幌の北、住宅街の一軒家。",
      body: [
        "Casa Antonioは、北区北38条の住まいです。ひとつの建物にアパートメントがふたつ。入口は別々で、レンガのポーチに木の扉が並び、手前に駐車場があります。",
        "ホテルのロビーはありません。自分の扉から入り、作りたければキッチンを使い、街へ出るときは地下鉄で南へ。南北線・麻生駅まで、ホストの案内では徒歩およそ5分です。",
      ],
    },
    mosaicCaption: "家と、Casa Antonio A",
    choicesTitle: "フロアを選ぶ",
    choicesLede: "住所は同じ、滞在の雰囲気は違います。予約はAirbnbです。",
    aCard: {
      name: "Casa Antonio A",
      line: "モダン空間 · 約100㎡ · 定員4名",
      cta: "部屋を見る",
    },
    bCard: {
      name: "Casa Antonio B",
      line: "木の温もり · 2階 · 約70㎡ · 定員3名",
      cta: "部屋を見る",
    },
    aHome: {
      eyebrow: "下の階",
      title: "Casa Antonio A",
      tag: "戻ってきたくなる、明るいモダンな部屋。",
      body: "グレーのソファ、木の床、窓際のテーブル、同じ部屋のキッチン。廊下の先の寝室にはベッドが3台あります。約100㎡、寝室1・浴室1、定員4名。写真に写っているベッドは3台です。",
    },
    bHome: {
      eyebrow: "2階",
      title: "Casa Antonio B",
      tag: "木の温もりと、プロジェクター。",
      body: "ホストはBを「木の温もり」と紹介しています。シンプルな現代的な内装で、居間にプロジェクターがあります。約70㎡、寝室1、ツインベッド3台、定員3名。同じ家の2階で、入口は専用です。",
    },
    bookA: "Airbnbでアントニオ A を予約",
    bookB: "Airbnbでアントニオ B を予約",
    photos: "写真をすべて見る",
    photoNoteA: "写真は Casa Antonio A の室内と、共用の建物の外観です。",
    photoNoteB: "ここに並んでいるのは建物の写真です。",
    neighborhoodTeaser: {
      eyebrow: "麻生",
      title: "街へ出たくなったら、南へ。",
      body: "南北線は麻生から札幌駅、大通、すすき野へ続きます。日常の用事はもっと近くです。駅の上のイオンと、南へ数ブロックの calma。",
      cta: "周辺を見る",
    },
    nomad: {
      eyebrow: "札幌で働く",
      title: "静かな部屋で、一日仕事ができる。",
      lede: "Casa Antonio Aは、窓際にテーブルがあり、キッチンと暖房がある住宅です。コワーキングのロビーではなく、札幌で働くための拠点です。",
      body: [
        "一日、部屋の中で過ごせます。Wi-Fiは部屋全体にあり、ダイニングのテーブルは椅子と日当たりがあって、午後が通話ならソファもあります。通りは住宅街で、フロントはありません。冬は、暖房の効いた部屋で仕事ができます。雪の日に、席を探すためにカフェへ出なくてよい。",
        "静かに過ぎるときは、ホストの案内どおり麻生駅まで徒歩およそ5分。札幌駅は南へ短い乗車で、大きなカフェがあるのはそちらです。駅の上のイオン札幌麻生店にはタリーズもあります。日本時間は韓国、中国、東南アジアの多くと合いやすい。ヨーロッパは午後、アメリカ西海岸は夜遅くです。",
        "スキーの季節にこの家が合いやすいのは、午前に仕事をして、午後にサッポロテイネへ行き、同じ扉に戻る一日です。キッチンがあるので、毎食外で買わなくてよい。普段使う充電器を持ってきてください。専用の仕事部屋も、サブモニターもありません。部屋にはWi-Fiがあります。",
      ],
      cta: "手稲と、周辺",
    },
    longStay: {
      eyebrow: "長期滞在",
      title: "数週間、数ヶ月。特別な料金で。",
      lede: "どちらの部屋も、休暇より長い滞在ができます。数週間、あるいは数ヶ月の場合は、一泊料金を積み上げた額より低い料金になります。",
      body: [
        "Casa Antonio A と B は同じ家で、扉は別です。長い滞在は、そのどちらかを住まいとして使います。自炊し、仕事をし、扉の前の無料駐車場に車を置き、街へ出るときは地下鉄です。札幌での仕事の季節、学期、長めの家族の滞在、手稲を軸にした冬に向いています。",
        "割引はあります。ただし、このページに数字は書きません。Airbnbの一泊料金は、短い予約のためのものです。数週間や数ヶ月のまとまった日程には、その期間だけの特別料金をホストが決めます。一泊ずつ足した額より低くなります。含まれるものと合計額は、支払う前に文面で確認します。このサイトでは予約を受け付けません。",
        "滞在が長くても、ハウスルールはゆるみません。禁煙、ペット不可、パーティー不可。夜の通りは静かにしてください。始まりと終わりには、いつものチェックインとチェックアウトの時間が適用されます。泊まれるのは、予約に名前のある人だけです。",
      ],
      points: [
        { k: "期間", v: "数週間、または数ヶ月" },
        { k: "料金", v: "一泊料金の積み上げより低い特別料金" },
        { k: "部屋", v: "アントニオ A、B、または続けて両方" },
        { k: "申し込み", v: "Airbnbでホストに日程を送る" },
      ],
      ctaA: "アントニオ A を問い合わせる",
      ctaB: "アントニオ B を問い合わせる",
      note: "日程、人数、どちらの部屋かを書いてください。その期間の長期料金をホストが返します。",
    },
    practical: {
      eyebrow: "到着の前に",
      title: "ハウスルールは、どちらの階も同じです。",
      items: [
        { k: "チェックイン", v: "16:00–23:00、セルフ" },
        { k: "チェックアウト", v: "10:00まで" },
        { k: "駐車場", v: "敷地内、無料、専用" },
        { k: "喫煙", v: "建物全体で禁止" },
        { k: "ペット", v: "不可" },
        { k: "パーティー", v: "不可" },
      ],
      cta: "ご案内を読む",
    },
    footer: {
      line: "一軒家に、ふたつのアパートメント。札幌市北区北38条西3丁目。",
      address: "〒001-0038 北海道札幌市北区北38条西3丁目1-7",
      licenses: "住宅宿泊事業の届出番号　A · M010045173　　B · M010045174",
      photo: "室内写真は Casa Antonio A のものです。",
    },
    reserve: {
      label: "予約する",
      title: "Airbnbで予約",
      a: "Casa Antonio A",
      b: "Casa Antonio B",
      close: "閉じる",
    },
    stayShared: {
      book: "Airbnbで空室を見る",
      amenities: "部屋にあるもの",
      rules: "ハウスルール",
      facts: "概要",
      back: "ふたつの部屋",
    },
    aPage: {
      eyebrow: "Casa Antonio A · モダン空間",
      title: "専用の扉がある、モダンなアパートメント。",
      lede: "明るい壁、長いソファ、居間とつながるキッチン。寝室はその廊下の先です。",
      facts: [
        ["定員", "最大4名"],
        ["間取り", "寝室1、浴室1"],
        ["広さ", "約100㎡"],
        ["写真のベッド", "3台"],
        ["入口", "専用"],
        ["届出番号", "M010045173"],
      ],
      storyTitle: "部屋のようす",
      story: [
        "Casa Antonio Aは、モダンな方の部屋です。居間は淡いグレーブルー。窓に向けたソファと、中央の明るいテーブル。キッチンは同じ空間にあり、カウンター、冷蔵庫、フードの下のコンロ、電子レンジ、オーブントースターがあります。オーブンもあります。",
        "寝室は白い寝具のベッドが3台。クローゼットとチェストがあります。短い廊下で居間とつながります。長く座る部屋に冷暖房があるので、冬の長い一日が成り立ちます。",
        "入口は専用です。チェックインはプライベートで、非対面。時刻と解錠の手順はAirbnbで届きます。このサイトには載せません。タオル、リネン、基本的なアメニティ、洗濯機、冷暖房、Wi-Fiがあります。",
      ],
      amenities: [
        "全域で無料Wi-Fi",
        "暖房とエアコン",
        "コンロ、電子レンジ、冷蔵庫のあるキッチン",
        "オーブン",
        "オーブントースター",
        "洗濯機",
        "薄型テレビ",
        "浴槽つきユニットバス",
        "ドライヤーと無料アメニティ",
        "タオルとベッドリネン",
        "敷地内の無料専用駐車場",
        "煙感知器と消火器",
      ],
    },
    bPage: {
      eyebrow: "Casa Antonio B · 木の温もり",
      title: "2階。プロジェクターと、静かな通り。",
      lede: "同じ家の2階で、階段を上ります。木の内装で、居間にプロジェクターがあります。",
      facts: [
        ["定員", "最大3名"],
        ["間取り", "寝室1、浴室1"],
        ["広さ", "約70㎡"],
        ["ベッド", "ツイン3台"],
        ["階", "2階、階段"],
        ["届出番号", "M010045174"],
      ],
      storyTitle: "ホストの紹介",
      story: [
        "Casa Antonio Bは上の階です。Airbnbでは、シンプルで整った現代的な内装と、居間のプロジェクターを案内しています。外に出る夜ではなく、部屋で過ごす夜のためのものです。最寄りは南北線・麻生駅で、徒歩およそ5分。札幌駅、大通、すすき野へは南へ短い乗車です。",
        "約70㎡。寝室1、ツインベッド3台、定員3名。浴室は浴槽、シャワー、ビデ、ドライヤーつき。キッチンにはコンロ、冷蔵庫、電子レンジ、調理器具、ダイニングテーブル、ワイングラスがあります。ソファ、洗濯機、スリッパ、タオル、リネンもあります。",
        "専用入口、敷地内の無料駐車場、無料Wi-Fi、冷暖房、セルフチェックインです。静かな住宅街の禁煙の部屋です。",
      ],
      amenities: [
        "居間のプロジェクター",
        "ツインベッド3台",
        "全域で無料Wi-Fi",
        "暖房とエアコン",
        "コンロ、電子レンジ、冷蔵庫のあるキッチン",
        "ダイニングテーブルとワイングラス",
        "洗濯機",
        "ソファ",
        "浴槽、シャワー、ビデ",
        "ドライヤー、スリッパ、アメニティ",
        "タオルとベッドリネン",
        "敷地内の無料専用駐車場",
        "煙感知器、消火器、一酸化炭素検知器",
      ],
    },
    rules: [
      "チェックインは16:00から23:00まで。チェックアウトは6:00以降、10:00まで。",
      "セルフチェックインです。手順は予約後にAirbnbで届きます。",
      "建物全体が禁煙です。入口も駐車場も含まれます。",
      "ペットは不可。",
      "パーティー不可。新婚旅行以外のいわゆる独身パーティー等もお受けできません。",
      "チェックインされる方は18歳以上。お子さまは歓迎します。",
      "登録されたゲストのみ。予約にない方へ扉を渡さないでください。",
      "備品を破損された場合、最大15,000円の損害金をお願いすることがあります。",
      "静かな住宅街です。夜は声と音楽をおさえてください。",
    ],
    neighborhood: {
      eyebrow: "北38条",
      title: "家の近く。",
      lede: "家は麻生駅の南、歩いて数分です。役に立つのはその駅のまわりです。食事、スーパー、小さな公園、肩をほぐす店。駅の先の店は、家から徒歩5分ぴったりではなく、5分から10分見てください。",
      localEyebrow: "近くで過ごす",
      localTitle: "麻生の一日",
      localLede: "通りと、駅の上の店と、駅の先の食事。それが近所です。計画がなくても一日は足ります。",
      local: [
        {
          title: "この家",
          time: "扉の前",
          body: "レンガのポーチの下に木の扉がふたつ。前の空地は無料の駐車場です。通りは住宅です。駅と、少し遠い用事とのあいだに、ここに戻ってきます。",
        },
        {
          title: "麻生駅",
          time: "およそ5分",
          body: "南北線の北の端です。南行きは北24条、札幌駅を経て大通、すすき野へ。ホストの案内は徒歩およそ5分です。",
        },
        {
          title: "イオン札幌麻生店",
          time: "短い歩き",
          body: "駅の上、北39条西4丁目。買い出しは食品フロアで、ほかの階より遅くまで開いています。中にサイゼリヤ、タリーズコーヒー、マクドナルドがあります。目的地のモールではありません。階で時間が違います。最後の一ブロックを車にするなら、駐車場は約570台です。",
        },
        {
          title: "calma",
          time: "数ブロック",
          body: "北35条西3丁目、セピア35の1階。11席の小さなイタリアンです。ランチ11:00–13:30、ディナー17:00–21:00、日曜定休。ほかに休む日もあります。行く前に確認してください。歩いて帰れる距離です。",
        },
      ],
      tripsEyebrow: "気軽な遠出",
      tripsTitle: "行き先は、ひとつ。それから家へ。",
      tripsLede: "南は地下鉄です。西は、スキーを積んだ車です。どちらかを選んでください。",
      trips: [
        {
          title: "札幌駅と大通",
          time: "地下鉄",
          body: "札幌駅までは道路で約4.9km。掲載の乗車時間はおよそ7分です。大通はその先の長い公園です。2月は雪まつり、夏はビアガーデン、東端にテレビ塔。遅い夜が欲しければ、すすき野です。",
        },
        {
          title: "北海道大学",
          time: "約4.7km",
          body: "キャンパスは南にあります。いちょうや雪が目的なら、歩いて一時間でもよい距離です。札幌時計台は約5.5km。同じあたりの乗車です。",
        },
        {
          title: "サッポロテイネ",
          time: "車",
          body: "こちら側からのスキーの一日です。手稲山の北西斜面、1972年のオリンピック会場。オリンピアは低くて広いゾーン。ハイランドは高く、当時のコースがあります。公式の案内では札幌中心部から約40分。北区からは札樽自動車道を西へ。ゲレンデの駐車場は無料で、およそ2,800台。車がなければJRで手稲駅、そこからバス。その方が遅いです。",
        },
      ],
      skiPhoto: "サッポロテイネから街を見下ろす。写真: Miki Yoshihito, CC BY 2.0。",
      planEyebrow: "二日の、簡単な計画",
      planTitle: "予定は、詰めたくない。",
      plan: [
        {
          title: "一日目: 家の近く",
          body: "イオンまで歩いて、コーヒーと買い出し。開いていればcalmaで昼。窓際のテーブルで仕事をするか、何もしない。キッチンがあるので、夕食は遠出しなくてよい。",
        },
        {
          title: "二日目: 方角をひとつ",
          body: "南へ地下鉄で、大通か大学か、長い夕食。あるいは西へ車で手稲へ行き、終わりは同じ扉です。両方ではありません。",
        },
      ],
      guideEyebrow: "家から",
      guideTitle: "名前を挙げる場所。",
      guideLede: "時間は、この家からです。徒歩と書いていないものは、その行の通りです。営業時間は変わります。行く日に確認してください。地図のリンクを開くと、その店の写真も見られます。写真はこのページには載せていません。",
      guide: [
        {
          title: "食べる、飲む",
          items: [
            { name: "北山龍", time: "駅の先", body: "麻生町2丁目4-8。麻生駅から約140mのラーメンです。2025年の食べログ北海道百名店。火曜休み。ジンジャーソルトを目当てに並びます。", map: "https://www.google.com/maps/search/?api=1&query=北山龍+札幌市北区麻生町2-4-8" },
            { name: "マルセイユ", time: "駅の先", body: "麻生町3丁目9-8。ハンバーグの小さな店で、駅から約150m。居酒屋の通りより静かです。", map: "https://www.google.com/maps/search/?api=1&query=マルセイユ+札幌市北区麻生町3-9-8" },
            { name: "串鳥 麻生駅前店", time: "駅の先", body: "麻生町4丁目12-6。北海道の焼き鳥です。すすき野まで出ない夜に足ります。", map: "https://www.google.com/maps/search/?api=1&query=串鳥+麻生駅前店" },
            { name: "goody goody 麻生店", time: "駅の先", body: "麻生町4丁目9-14、フロンティア麻生。オムライスとワッフル。11:00–22:00、年末年始以外は週の定休なし。駅からは近いですが、家からはもう少し歩きます。", map: "https://www.google.com/maps/search/?api=1&query=goody+goody+麻生店+麻生町4-9-14" },
            { name: "まさや 札幌麻生店", time: "駅の先", body: "麻生町3丁目10-22。3番出口の近くの居酒屋で、もつ鍋と海鮮。昼ではなく夜です。", map: "https://www.google.com/maps/search/?api=1&query=まさや+札幌麻生店+麻生町3-10-22" },
            { name: "calma", time: "南へ数ブロック", body: "北35条の、11席のイタリアン。昼と夜。日曜は休み。駅の集まりよりは遠く、それでも歩いて帰れます。", map: "https://www.google.com/maps/search/?api=1&query=calma+札幌+北35条+セピア35" },
            { name: "サイゼリヤ", time: "イオンの中", body: "駅ビルの、普通のファミリー向けイタリアン。calmaが休みのときに役立ちます。", map: "https://www.google.com/maps/search/?api=1&query=サイゼリヤ+イオン札幌麻生店" },
            { name: "タリーズコーヒー", time: "イオンの中", body: "都心へ出ずにコーヒー。仕事の朝には足ります。", map: "https://www.google.com/maps/search/?api=1&query=タリーズコーヒー+イオン札幌麻生店" },
            { name: "マクドナルド", time: "イオンの中", body: "麻生駅の上、スーパーと同じ建物です。", map: "https://www.google.com/maps/search/?api=1&query=マクドナルド+イオン札幌麻生店" },
            { name: "すすき野", time: "地下鉄で南", body: "遅い夕食と夜の街。南北線の反対側です。近所ではありません。" },
          ],
        },
        {
          title: "肩がこったとき",
          items: [
            { name: "スズラン整体・麻生", time: "駅のそば", body: "麻生駅から約120mの整体です。案内の時間は10:00–21:00。ホテルのスパではありません。行く前に空いているか確認してください。", map: "https://www.google.com/maps/search/?api=1&query=スズラン整体+麻生" },
            { name: "MILGRAIN", time: "駅から約5分", body: "駅から約350mの、小さなリラクゼーションです。案内は11:00–20:00。週末は先に予約を。", map: "https://www.google.com/maps/search/?api=1&query=MILGRAIN+麻生+マッサージ" },
            { name: "梵珠 bonzyu", time: "駅の先", body: "駅から約300mのリラクゼーションです。時間は動きます。その日に確認してください。", map: "https://www.google.com/maps/search/?api=1&query=梵珠+bonzyu+麻生" },
          ],
        },
        {
          title: "公園",
          items: [
            { name: "北38条さざんか公園", time: "この条", body: "北38条の小さな公園です。家と同じ東西の通り。ベンチがある程度で、目的地ではありません。", map: "https://www.google.com/maps/search/?api=1&query=北38条さざんか公園+札幌" },
            { name: "麻生緑地", time: "駅の近く", body: "北39条西5丁目。駅から約170m。家と家のあいだの木です。", map: "https://www.google.com/maps/search/?api=1&query=麻生緑地+札幌市北区" },
            { name: "麻生南公園", time: "駅の近く", body: "駅から約280m、駅の集まりの南にある地元の公園です。夕食のあとの一周に足ります。", map: "https://www.google.com/maps/search/?api=1&query=麻生南公園+札幌" },
          ],
        },
        {
          title: "日常の買い物",
          items: [
            { name: "イオン札幌麻生店の食品フロア", time: "北へ短い歩き", body: "滞在のスーパーです。遅くまで開いているのはこの階です。その日の時間を確認してください。フロア案内は地図の掲載にあります。", map: "https://www.google.com/maps/search/?api=1&query=イオン札幌麻生店" },
            { name: "イオンの駐車場", time: "同じ建物", body: "約570台。最後の一ブロックを車にするとき。家の前にも、無料の場所があります。" },
          ],
        },
        {
          title: "見るところ",
          items: [
            { name: "麻生駅", time: "徒歩およそ5分", body: "南北線の北の端。役に立つ歩きです。" },
            { name: "北海道大学", time: "約4.7km", body: "南のキャンパス。木や雪が目的なら、一時間歩いてもよい場所です。" },
            { name: "大通公園", time: "同じ地下鉄", body: "2月は雪まつり。夏はビアガーデン。東端にテレビ塔。" },
            { name: "札幌時計台", time: "約5.5km", body: "都心の、小さな木の時計。立ち寄りであって、一日ではありません。" },
            { name: "札幌駅", time: "約4.9km", body: "掲載の乗車はおよそ7分。大きなカフェは麻生ではなく、こちらです。" },
          ],
        },
        {
          title: "スキー",
          items: [
            { name: "サッポロテイネ", time: "西へ車", body: "オリンピアとハイランド。道が乾いていれば、40分以内が多いです。ゲレンデの駐車は無料。" },
            { name: "札幌ばんけい", time: "都心の南西", body: "小さめの市民ゲレンデ。短い家族の滑りによく使われます。この家より都心に近いです。" },
            { name: "Fu's Snow Area", time: "手稲側", body: "大きなリゾートに一日を預けずに滑る、地元の丘です。" },
            { name: "札幌国際スキー場", time: "およそ1時間", body: "さらに北西。手稲では近く感じる日の、長いスキーです。" },
            { name: "ニセコ、またはキロロ", time: "旅", body: "用事ではありません。その週にするなら、早く出てください。この家は、戻ったあとの静かな夜です。" },
          ],
        },
      ],
      seasonEyebrow: "10月から3月",
      seasonTitle: "雪の季節に来るとき。",
      seasonBody:
        "どちらの部屋にも暖房があります。地下鉄は雪を気にしません。脇道は除雪されたあと凍ります。新しい上着より、滑りにくい靴です。扉の前の駐車場は、凍結すると遅くなります。この家に合う午後は手稲です。冬は店の時間も動くので、行く前に確認してください。",
      mapTitle: "家の位置",
      mapNote: "ピンは、北38条西3丁目1-7として公開されている座標です。ナビにはGoogleマップを開いてください。店の写真は、各リンク先の地図にあります。",
      mapLabel: "地図と写真",
      openMap: "Googleマップで開く",
    },
    dayTrips: {
      eyebrow: "この家から",
      title: "一日に、行き先は一つ。",
      lede: "北38条から出かける日帰りです。北海道を回る旅ではありません。朝食のあとに出る。このページが長い一日と書いていなければ、遅い夕食には戻ってください。",
      homeTitle: "出かけて、同じ扉に戻る。",
      homeBody: "小樽は列車。登別か定山渓は湯。富良野と美瑛は、早く出る長い一日。頭大仏は南、この地下鉄の先。早く帰る日は手稲。",
      homeCta: "日帰り",
      note: "時間は、道が乾いているときの札幌中心部からの目安に、この家から駅か高速までの数分を足したものです。雪、花の季節、通行止めで一日は変わります。その朝に確認してください。このページでは切符を売りません。",
      ideas: [
        {
          id: "otaru",
          eyebrow: "車なし · 札幌駅からおよそ35–45分",
          title: "小樽へ。夕食には戻る。",
          lede: "いちばん楽な日です。運河の町と、海鮮の昼ごはん。",
          steps: [
            {
              time: "朝",
              title: "麻生から、列車",
              body: "麻生まで歩いて、地下鉄で札幌駅。掲載どおりおよそ7分です。そこからJR函館本線で小樽。速い列車でおよそ35分から45分。",
            },
            {
              time: "昼前",
              title: "運河、それから堺町",
              body: "運河と石の倉庫を歩きます。ガラスやオルゴールなら、次の堺町通りを一本。天狗山ロープウェイは港を見下ろす席で、その日動いていれば。上る前に確認してください。",
            },
            {
              time: "昼",
              title: "三角市場",
              body: "小樽駅から歩ける三角市場が、海鮮の昼です。海鮮丼と店先。団体で埋まる前に。このページでは席を取りません。",
            },
            {
              time: "午後",
              title: "引き返す",
              body: "行きと同じ列車で戻ってこられます。自分で夕食を作れる時間に、家に着きます。車は扉の前に置いたままで構いません。",
            },
          ],
        },
        {
          id: "noboribetsu",
          eyebrow: "車か列車 · およそ75–90分",
          title: "登別。地獄谷。",
          lede: "街ではなく、湯気です。火口を歩いて、足湯をして、戻る。",
          steps: [
            {
              time: "朝",
              title: "南へ、それから谷へ",
              body: "車なら、道が乾いている日でおよそ1時間半。車がなければ、登別方面の列車と地獄谷へのバスで、同じくらい、ときにはそれ以上です。朝食のあとに出てください。",
            },
            {
              time: "歩く",
              title: "地獄谷",
              body: "地獄谷は歩ける火口です。噴気と硫黄と、遊歩道。大湯沼はその先の短い歩きです。入口の近くに天然の足湯があります。谷そのものは見物であって、チケットのショーではありません。荒天では道が閉まります。",
            },
            {
              time: "午後",
              title: "一度入って、戻る",
              body: "しっかり浸かるなら、登別温泉の日帰り入浴をひとつ。洞爺湖は足さないでください。帰りが暗くなります。",
            },
          ],
        },
        {
          id: "jozankei",
          eyebrow: "バスか車 · 札幌駅からおよそ1時間",
          title: "定山渓。いちばん近い温泉。",
          lede: "札幌の南の谷です。紅葉の週が有名で、普通の理由は湯です。",
          steps: [
            {
              time: "この家から",
              title: "地下鉄、それから直行バス",
              body: "定山渓は地下鉄では行けません。麻生から札幌駅へ出て、じょうてつのカッパライナー、27番のりばです。会社の案内はおよそ60分。予約のバスで、受付は前日に閉まります。片道は1,700円前後です。普通のじょうてつバスも谷まで出ていて、ライナーより安い。その朝に確認してください。車ならおよそ1時間。",
            },
            {
              time: "現地",
              title: "谷を、ひとつ",
              body: "川沿いを歩き、見晴らしが欲しければ二見吊橋をひとつ。湯は一軒だけ。定山源泉公園が屋外の源泉です。ホテルは日帰り入浴を売っています。一軒決めて、料金は入口で聞いてください。",
            },
            {
              time: "帰り",
              title: "終バスが先",
              body: "札幌駅へ戻るライナーは数本で、10分おきではありません。席は予約です。湯に入る前に、帰りの時刻を見てください。普通バスも、もう一つの帰りです。",
            },
          ],
        },
        {
          id: "furano",
          eyebrow: "車 · 片道およそ2時間から2時間半の、丸一日",
          title: "富良野と美瑛。早く出る日だけ。",
          lede: "夏の写真はこの二つの谷です。まとめると長い一日で、散歩を二度ではありません。朝食のあとに出て、帰りは遅くなります。",
          steps: [
            {
              time: "道",
              title: "高速を出て、どちらか先に",
              body: "富良野は滝川経由で、普通の日ならおよそ2時間10分。美瑛は旭川経由で、2時間半に近いです。高速料金は片道で数千円。冬はどちらも遅く、丘の道は閉まることがあります。",
            },
            {
              time: "美瑛",
              title: "青い池、それから丘をひとつ",
              body: "白金の青い池は美瑛の町なかではなく、十勝岳のほうです。夏はパッチワークの丘がもう一か所。すべての丘は歩かないでください。",
            },
            {
              time: "富良野",
              title: "花か、森か",
              body: "7月中旬はファーム富田のラベンダーで、混みます。早く着くか、やめるか。その時期を外すと、町はチーズと駅前です。まだ明るさが残っていれば、プリンスホテルの森にあるニングルテラスが工芸の立ち寄りです。開いているか確認してください。",
            },
          ],
        },
        {
          id: "buddha",
          eyebrow: "この地下鉄の先、バス · または札幌中心部から車でおよそ40分",
          title: "頭大仏。",
          lede: "真駒内滝野霊園の、安藤忠雄による大仏です。札幌の南にあります。洞爺湖ではありません。ツアーは二つを貼り合わせますが、別の日です。",
          steps: [
            {
              time: "車なし",
              title: "南北線の終点、それからバス",
              body: "麻生から地下鉄で南へ、終点の真駒内まで。そこから北海道中央バスの真108（滝野線）、2番のりばが直行で、およそ20分から25分、真駒内滝野霊園です。霊園の案内ではそのバスは500円になっていました。本数は多くなく、帰りの最終は早いことがあります。とくに冬。霊園を離れる前に、帰りの時刻を読んでください。",
            },
            {
              time: "境内",
              title: "丘、それからモアイ",
              body: "大仏はラベンダーの丘に、あごまで埋まっています。長いアプローチと、水庭。2026年4月から、霊園の掲載では大人の拝観料が1,000円です。子どもの料金は入口で聞いてください。モアイとストーンサークルは同じ敷地です。荒天や整備で、大仏を閉じることがあります。",
            },
            {
              time: "車",
              title: "都心からおよそ40分",
              body: "乗用車は敷地に無料で止められたことがあります。広いです。バスの駐車は別料金で、2026年4月に上がりました。看板を見てください。この家からは南へ。午前で足ります。北海道一周ではありません。",
            },
          ],
        },
        {
          id: "toya",
          eyebrow: "車 · およそ2時間",
          title: "洞爺湖。それだけで。",
          lede: "カルデラと有珠山と、長い帰り道です。頭大仏も登別も足さないでください。",
          steps: [
            {
              time: "朝",
              title: "早く出る",
              body: "道が乾いていれば、車でおよそ2時間。札幌から洞爺湖温泉へ向かう道南バスもあり、定山渓側を通ります。バスの一日であって、自由な一日ではありません。行く前に帰りを確認してください。",
            },
            {
              time: "現地",
              title: "湖か、火山か",
              body: "景色はカルデラです。道が開いていれば、有珠山が火山の歩きです。どちらかひとつが、その日です。湖畔で昼を食べたら、引き返します。",
            },
          ],
        },
        {
          id: "teine",
          eyebrow: "車 · 晴れれば40分以内が多い",
          title: "短い日は、手稲。",
          lede: "谷が遠すぎる日は、西の山で足ります。",
          steps: [
            {
              time: "朝",
              title: "家にいる",
              body: "テーブルで仕事をするか、しない。キッチンはある。昼のあと出ます。",
            },
            {
              time: "午後",
              title: "オリンピアか、ハイランド",
              body: "サッポロテイネは1972年のオリンピックの山です。オリンピアは低くて易しい。ハイランドは高く、当時のコースがあります。ゲレンデの駐車は無料です。",
            },
            {
              time: "夜",
              title: "同じ扉",
              body: "扉の前の場所は、この日のためのものです。夕食は都心でなくてよい。",
            },
          ],
        },
      ],
      more: "手稲の詳細",
    },
    arrival: {
      eyebrow: "ご案内",
      title: "4時以降に到着。10時までに出発。",
      lede: "どちらのアパートメントも、時間とハウスルールは同じです。扉の番号や鍵の手順はAirbnbで届きます。このサイトには書きません。",
      hoursTitle: "時間",
      includedTitle: "最初から部屋にあるもの",
      included: [
        "タオルとベッドリネン",
        "基本的なアメニティ",
        "使えるキッチンと洗濯機",
        "冷暖房とWi-Fi",
        "スリッパは Casa Antonio B の掲載にあります",
        "ドライヤー",
      ],
      languagesTitle: "対応言語",
      languages: "ホストの対応言語として、英語、日本語、韓国語、中国語が掲載されています。このサイトもその4言語です。",
      licenseTitle: "届出番号",
      licenseBody:
        "住宅宿泊事業の届出住宅です。Casa Antonio A は M010045173。Casa Antonio B は M010045174。",
      payTitle: "予約のしかた",
      payBody:
        "日程、料金、空室はAirbnbにあります。このサイトでは代金を受け取りません。室内を破損された場合、最大15,000円の損害金をお願いすることがあります。",
    },
    lightbox: { close: "閉じる", prev: "前の写真", next: "次の写真" },
  },
  zh,
  ko,
} as const;

type Loose<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Loose<U>[]
    : T extends object
      ? { [K in keyof T]: Loose<T[K]> }
      : T;

const _zhOk: Loose<(typeof copy)["en"]> = zh;
const _koOk: Loose<(typeof copy)["en"]> = ko;
void _zhOk;
void _koOk;

export type Copy = (typeof copy)[Lang];
