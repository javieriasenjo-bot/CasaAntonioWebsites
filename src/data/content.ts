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
      neighborhood: "Around",
      trips: "Trips",
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
      body: "Grey sofa, wood floor, a window-side table, and a kitchen in the same room. The bedroom down the hall has three beds. Booking channels list the apartment at about 100 square meters, one bedroom and one bath, for up to four guests. These photographs show three beds — if a fourth person is in the plan, confirm where they sleep on Airbnb before you book.",
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
    photoNoteB:
      "These photographs are of the house. Photographs of the upstairs rooms are on the Airbnb listing.",
    neighborhoodTeaser: {
      eyebrow: "Asabu",
      title: "South to the city when you want it.",
      body: "The Namboku line runs from Asabu through Sapporo Station to Odori and Susukino. Day to day, the useful places are closer: AEON over the station, and calma a few blocks south.",
      cta: "Around Asabu",
    },
    nomad: {
      eyebrow: "Working from Sapporo",
      title: "A quiet room for a real work day.",
      lede: "Casa Antonio A is a residential apartment with a table by the window, a kitchen, and heat. It is a base for working in the city, not a coworking lobby.",
      body: [
        "The day can stay inside. Wi-Fi runs through the apartment, the dining table has chairs and daylight, and the sofa is there when the afternoon is calls rather than typing. The street is houses, not a reception desk. In winter the heating is the point: you can work through a snowfall without negotiating a cafe for a seat.",
        "When the apartment feels too quiet, Asabu Station is about a five-minute walk. Sapporo Station is a short ride south, and that is where the larger cafes are. AEON, over Asabu Station, has a Tully’s if all you want is coffee. Japan is an hour ahead of Korea and China, which makes a morning call straightforward. Much of Southeast Asia sits in the same part of the day. Europe is the afternoon. The American West is late at night.",
        "In ski season the rhythm that suits this house is a morning of work and an afternoon at Sapporo Teine, then the same door at the end of it. The kitchen means you are not buying every meal out. Bring the charger you actually use. There is no separate office and no second monitor, and this page does not promise a particular internet speed — the apartment has Wi-Fi, and that is the claim.",
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
        "Casa Antonio A is the modern one. The living room is a soft grey-blue, with a sofa facing the window and a pale table in the middle. The kitchen is part of the same room: a counter, a refrigerator, a cooktop under a hood, a microwave, and a toaster oven. Booking channels also list an oven.",
        "The bedroom has three beds dressed in white, a closet, and a dresser. A short hall joins it to the living room. Heating and air conditioning are in the rooms you actually sit in, which is what makes a long winter day possible.",
        "You come in through your own door. Check-in is private and contactless; the timing and the lock instructions are sent on Airbnb, not posted here. Towels, linen, and basic toiletries are provided, along with a washer, heating, air conditioning, and Wi-Fi.",
      ],
      amenities: [
        "Free Wi-Fi throughout",
        "Heating and air conditioning",
        "Kitchen with cooktop, microwave, and refrigerator",
        "Oven listed on booking channels",
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
      lede: "The second floor of the same house. The host’s listing calls it the warmth of wood, and puts a projector in the living room.",
      facts: [
        ["Guests", "Up to 3"],
        ["Layout", "1 bedroom, 1 bath"],
        ["Size", "About 70 m²"],
        ["Beds", "3 twins"],
        ["Floor", "Second"],
        ["License", "M010045174"],
      ],
      storyTitle: "What the host describes",
      story: [
        "Casa Antonio B is the upstairs apartment. On Airbnb the host describes a simple, finished modern interior, and a living room with a projector — a night in, rather than a night out. The nearest station named in that listing is Asabu, on the Namboku line, about a five-minute walk. Sapporo Station, Odori, and Susukino are a short ride south.",
        "Booking channels list it as about 70 square meters: one bedroom, three twin beds, up to three guests, and one bathroom with a tub, shower, bidet, and hairdryer. The kitchen has a stovetop, refrigerator, microwave, kitchenware, a dining table, and wine glasses. There is a sofa, a washer, slippers, towels, and linen.",
        "Like A, it has a private entrance, free on-site parking, free Wi-Fi, heating, air conditioning, and self check-in. It is a non-smoking apartment on a quiet residential street. A guest from Hong Kong, traveling as a couple, left a one-word note on a booking channel in February 2025: “Amazing!”",
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
      eyebrow: "Asabu",
      title: "Slow days between the station, the kitchen, and the mountain.",
      lede: "Casa Antonio is a quiet house in Kita 38-jo, not a base in Susukino. Most useful things are a walk to Asabu Station. The city and the ski hill are one choice each, not both in the same afternoon.",
      localEyebrow: "Stay local",
      localTitle: "A day in Asabu",
      localLede: "The street, the station mall, and one small restaurant. That is the neighborhood. It is enough for a day that does not need a plan.",
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
      guideLede: "Times are from this house, on foot unless the line says otherwise. Hours change. Check the day you go.",
      guide: [
        {
          title: "Eat and drink",
          items: [
            {
              name: "calma",
              time: "A few blocks south",
              body: "Eleven-seat Italian at Kita 35-jo. Lunch and dinner, closed Sunday. The neighborhood meal.",
            },
            {
              name: "Saizeriya",
              time: "Inside AEON",
              body: "The ordinary family Italian in the station building. Useful when calma is closed.",
            },
            {
              name: "Tully’s Coffee",
              time: "Inside AEON",
              body: "Coffee without going into the city. Enough for a work morning.",
            },
            {
              name: "McDonald’s",
              time: "Inside AEON",
              body: "In the same building as the supermarket, over Asabu Station.",
            },
            {
              name: "Susukino",
              time: "Subway south",
              body: "The late dinner and the nightlife, at the other end of the Namboku line. Not the neighborhood.",
            },
          ],
        },
        {
          title: "Everyday shopping",
          items: [
            {
              name: "AEON Sapporo Asabu, food floor",
              time: "A short walk north",
              body: "The supermarket for a stay. This is the floor that stays open later. Check the day’s hours.",
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
      mapNote: "Pin is the published coordinate for Kita 38-jo Nishi 3-chome 1-7. Open it in Google Maps if you are navigating in.",
      openMap: "Open in Google Maps",
    },
    dayTrips: {
      eyebrow: "From the house",
      title: "One day, one direction.",
      lede: "These are days out from Kita 38-jo, not a tour of Hokkaido. Leave after breakfast, and be home for a late dinner. One town is enough.",
      homeTitle: "A day away, then the same door.",
      homeBody: "Otaru by train. Biei or Furano by car, not both. Teine when the day should stay short.",
      homeCta: "Day trips",
      note: "Times are in clear weather, from central Sapporo, plus the few minutes from this house to the station or the expressway. Snow, flower season, and road closures change the day. Check that morning. This page does not sell tickets.",
      ideas: [
        {
          eyebrow: "No car · about 35–45 minutes from Sapporo Station",
          title: "Otaru, and back for dinner.",
          lede: "The easy day. The canal, one lunch, and the train home.",
          steps: [
            {
              time: "Morning",
              title: "Asabu, then the train",
              body: "Walk to Asabu and take the subway to Sapporo Station, about the seven minutes in the listing. From there the JR Hakodate line runs to Otaru. The faster trains take about 35 to 45 minutes.",
            },
            {
              time: "Late morning",
              title: "The canal, and not the whole town",
              body: "Walk the canal and the stone warehouses. That is the day. The covered shopping street is there if you want one more lane, not a checklist.",
            },
            {
              time: "Lunch",
              title: "Eat once",
              body: "Otaru is a sushi town. Pick one place when you are there. This page does not hold a table.",
            },
            {
              time: "Afternoon",
              title: "Turn around",
              body: "The same trains come back. You can be at the house in time to cook. The car can stay in front of the doors.",
            },
          ],
        },
        {
          eyebrow: "Car · about 2 hours 30 minutes",
          title: "Biei. Not also Furano.",
          lede: "A long day north. The photograph is the Blue Pond. The hills are the reason in summer.",
          steps: [
            {
              time: "After breakfast",
              title: "The expressway, then the local road",
              body: "Drive toward Asahikawa on the expressway, then on to Biei. In clear weather allow about two and a half hours from Sapporo, and a little more from this house. The toll is a few thousand yen each way. If the hills would be in the dark on the way home, do not start.",
            },
            {
              time: "The stop",
              title: "Shirogane Blue Pond",
              body: "The pond is at Shirogane, toward Tokachidake, not in the middle of Biei town. In summer the patchwork fields are the other walk. In winter the pond is still visited, and some roads close. Check that morning before you commit the day.",
            },
            {
              time: "Then",
              title: "One meal, then back",
              body: "Eat in Biei and turn around. Furano is a different day. Adding it means you are driving more than looking.",
            },
          ],
        },
        {
          eyebrow: "Car · about 2 hours",
          title: "Furano. Flowers, or snow.",
          lede: "Another long day, in the other valley. Pick the season you actually want.",
          steps: [
            {
              time: "After breakfast",
              title: "Toward Takikawa, then into the valley",
              body: "In ordinary conditions the drive is about two hours and ten minutes: the expressway toward Takikawa, then the road into Furano. Winter is slower. The toll is a few thousand yen each way.",
            },
            {
              time: "Summer",
              title: "The fields, if they are in flower",
              body: "Mid-July is the lavender at Farm Tomita, and it is crowded. Go early. Outside that window the town is cheese, the station street, and a walk. It is not a flower spectacle all summer.",
            },
            {
              time: "Winter",
              title: "Ski only if Teine is too small",
              body: "Furano’s ski area can be the day. It is a longer drive than Teine for the same pair of skis. If the point is only to ski, stay at Teine and keep Furano for a day when the valley is the point.",
            },
          ],
        },
        {
          eyebrow: "Car · often under 40 minutes",
          title: "The short day is Teine.",
          lede: "When Biei is too far, the mountain to the west is already enough.",
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
        "A equipped kitchen and a washing machine",
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
      neighborhood: "周辺",
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
      body: "グレーのソファ、木の床、窓際のテーブル、同じ部屋のキッチン。廊下の先の寝室にはベッドが3台あります。予約サイトでは約100㎡、寝室1・浴室1、定員4名。写真に写っているベッドは3台です。4名で泊まる場合は、4人目の寝床をAirbnbで確認してから予約してください。",
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
    photoNoteB:
      "ここに並んでいるのは建物の写真です。2階の室内写真はAirbnbにあります。お送りいただければ、このページに載せます。",
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
        "一日、部屋の中で過ごせます。Wi-Fiは部屋全体にあり、ダイニングのテーブルは椅子と日当たりがあって、午後が通話ならソファもあります。通りは住宅街で、フロントはありません。冬は暖房が本題です。雪の日に、席を探すためにカフェへ出なくてよい。",
        "静かに過ぎるときは、ホストの案内どおり麻生駅まで徒歩およそ5分。札幌駅は南へ短い乗車で、大きなカフェがあるのはそちらです。駅の上のイオン札幌麻生店にはタリーズもあります。日本時間は韓国、中国、東南アジアの多くと合いやすい。ヨーロッパは午後、アメリカ西海岸は夜遅くです。",
        "スキーの季節にこの家が合いやすいのは、午前に仕事をして、午後にサッポロテイネへ行き、同じ扉に戻る一日です。キッチンがあるので、毎食外で買わなくてよい。普段使う充電器を持ってきてください。専用の仕事部屋も、サブモニターもありません。通信速度の数字はこのページでは約束しません。あるのはWi-Fiです。",
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
        "Casa Antonio Aは、モダンな方の部屋です。居間は淡いグレーブルー。窓に向けたソファと、中央の明るいテーブル。キッチンは同じ空間にあり、カウンター、冷蔵庫、フードの下のコンロ、電子レンジ、オーブントースターがあります。予約サイトにはオーブンの記載もあります。",
        "寝室は白い寝具のベッドが3台。クローゼットとチェストがあります。短い廊下で居間とつながります。長く座る部屋に冷暖房があるので、冬の長い一日が成り立ちます。",
        "入口は専用です。チェックインはプライベートで、非対面。時刻と解錠の手順はAirbnbで届きます。このサイトには載せません。タオル、リネン、基本的なアメニティ、洗濯機、冷暖房、Wi-Fiがあります。",
      ],
      amenities: [
        "全域で無料Wi-Fi",
        "暖房とエアコン",
        "コンロ、電子レンジ、冷蔵庫のあるキッチン",
        "予約サイトにオーブンの記載",
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
      lede: "同じ家の2階です。ホストは「木の温もり」と呼び、居間にプロジェクターを置いています。",
      facts: [
        ["定員", "最大3名"],
        ["間取り", "寝室1、浴室1"],
        ["広さ", "約70㎡"],
        ["ベッド", "ツイン3台"],
        ["階", "2階"],
        ["届出番号", "M010045174"],
      ],
      storyTitle: "ホストの紹介",
      story: [
        "Casa Antonio Bは上の階です。Airbnbでは、シンプルで整った現代的な内装と、居間のプロジェクターを案内しています。外に出る夜ではなく、部屋で過ごす夜のためのものです。最寄りは南北線・麻生駅で、徒歩およそ5分。札幌駅、大通、すすき野へは南へ短い乗車です。",
        "予約サイトでは約70㎡。寝室1、ツインベッド3台、定員3名。浴室は浴槽、シャワー、ビデ、ドライヤーつき。キッチンにはコンロ、冷蔵庫、電子レンジ、調理器具、ダイニングテーブル、ワイングラスがあります。ソファ、洗濯機、スリッパ、タオル、リネンもあります。",
        "Aと同じく、専用入口、敷地内の無料駐車場、無料Wi-Fi、冷暖房、セルフチェックインです。静かな住宅街の禁煙の部屋です。2025年2月、香港からカップルで訪れたゲストが予約サイトにひとこと残しています。「Amazing!」。",
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
      eyebrow: "麻生",
      title: "駅とキッチンと、山とのあいだの、ゆっくりした日。",
      lede: "Casa Antonioは北38条の静かな家で、すすき野の拠点ではありません。役に立つものは、だいたい麻生駅までの歩きです。街とスキー場は、午後にひとつずつ。同じ午後に両方ではありません。",
      localEyebrow: "近くで過ごす",
      localTitle: "麻生の一日",
      localLede: "通りと、駅の上の店と、小さなレストランがひとつ。それが近所です。計画がなくても一日は足ります。",
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
      guideLede: "時間は、この家からです。徒歩と書いていないものは、その行の通りです。営業時間は変わります。行く日に確認してください。",
      guide: [
        {
          title: "食べる、飲む",
          items: [
            { name: "calma", time: "南へ数ブロック", body: "北35条の、11席のイタリアン。昼と夜。日曜は休み。近所の食事です。" },
            { name: "サイゼリヤ", time: "イオンの中", body: "駅ビルの、普通のファミリー向けイタリアン。calmaが休みのときに役立ちます。" },
            { name: "タリーズコーヒー", time: "イオンの中", body: "都心へ出ずにコーヒー。仕事の朝には足ります。" },
            { name: "マクドナルド", time: "イオンの中", body: "麻生駅の上、スーパーと同じ建物です。" },
            { name: "すすき野", time: "地下鉄で南", body: "遅い夕食と夜の街。南北線の反対側です。近所ではありません。" },
          ],
        },
        {
          title: "日常の買い物",
          items: [
            { name: "イオン札幌麻生店の食品フロア", time: "北へ短い歩き", body: "滞在のスーパーです。遅くまで開いているのはこの階です。その日の時間を確認してください。" },
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
      mapNote: "ピンは、北38条西3丁目1-7として公開されている座標です。ナビにはGoogleマップを開いてください。",
      openMap: "Googleマップで開く",
    },
    dayTrips: {
      eyebrow: "この家から",
      title: "一日に、行き先は一つ。",
      lede: "北38条から出かける日帰りです。北海道を回る旅ではありません。朝食のあとに出て、遅い夕食には戻る。その日の町は、一つだけで十分です。",
      homeTitle: "出かけて、同じ扉に戻る。",
      homeBody: "小樽は列車。美瑛か富良野は車で、両方ではない。短くする日は手稲。",
      homeCta: "日帰り",
      note: "時間は、道が乾いているときの札幌中心部からの目安に、この家から駅か高速までの数分を足したものです。雪、花の季節、通行止めで一日は変わります。その朝に確認してください。このページでは切符を売りません。",
      ideas: [
        {
          eyebrow: "車なし · 札幌駅からおよそ35–45分",
          title: "小樽へ。夕食には戻る。",
          lede: "いちばん楽な日です。運河と、昼ごはんと、帰りの列車。",
          steps: [
            {
              time: "朝",
              title: "麻生から、列車",
              body: "麻生まで歩いて、地下鉄で札幌駅。掲載どおりおよそ7分です。そこからJR函館本線で小樽。速い列車でおよそ35分から45分。",
            },
            {
              time: "昼前",
              title: "運河。町ぜんぶではない",
              body: "運河と、石の倉庫を歩きます。それがこの日です。アーケードは、もう一本だけ歩くときのもので、一覧ではありません。",
            },
            {
              time: "昼",
              title: "食事は一度",
              body: "小樽は寿司の町です。着いてから一軒選んでください。このページでは席を取りません。",
            },
            {
              time: "午後",
              title: "引き返す",
              body: "行きと同じ列車で戻ってこられます。自分で夕食を作れる時間に、家に着きます。車は扉の前に置いたままで構いません。",
            },
          ],
        },
        {
          eyebrow: "車 · およそ2時間30分",
          title: "美瑛。富良野は足さない。",
          lede: "北への長い一日。写真は青い池。夏の理由は丘です。",
          steps: [
            {
              time: "朝食のあと",
              title: "高速、それから地道",
              body: "高速で旭川方面へ出て、美瑛へ。道が乾いていれば札幌からおよそ2時間半。この家からはもう少しかかります。高速の料金は片道で数千円です。帰りが丘で暗くなるなら、出発しないでください。",
            },
            {
              time: "立ち寄り",
              title: "白金の青い池",
              body: "池は美瑛の町なかではなく、十勝岳へ向かう白金にあります。夏はパッチワークの丘がもう一つの歩きです。冬も池は見に行かれますが、閉まる道があります。その朝、確認してから一日を決めてください。",
            },
            {
              time: "それから",
              title: "食事は一度。それから戻る",
              body: "美瑛で食べたら、そのまま戻ります。富良野は別の日です。同じ日に足すと、景色を見ている時間より運転の方が長くなります。",
            },
          ],
        },
        {
          eyebrow: "車 · およそ2時間",
          title: "富良野。花か、雪か。",
          lede: "もう一つの谷への、長い一日。欲しい季節を選ぶ。",
          steps: [
            {
              time: "朝食のあと",
              title: "滝川のほうへ、それから谷へ",
              body: "普通の日ならおよそ2時間10分。滝川方面の高速から、富良野へ入る道です。冬は遅くなります。料金は片道で数千円です。",
            },
            {
              time: "夏",
              title: "花があるときだけ、畑",
              body: "7月中旬はファーム富田のラベンダーで、混みます。早く着く。その時期を外すと、町はチーズと駅前と、散歩です。夏のあいだずっと花の見物ではありません。",
            },
            {
              time: "冬",
              title: "スキーは、手稲では足りないとき",
              body: "富良野のゲレンデを一日にすることもできます。同じスキー板なら、手稲より長いドライブです。滑ることだけが目的なら手稲に残り、谷そのものが目的の日に富良野へ行ってください。",
            },
          ],
        },
        {
          eyebrow: "車 · 晴れれば40分以内が多い",
          title: "短い日は、手稲。",
          lede: "美瑛が遠すぎる日は、西の山で足ります。",
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
