import { ADDRESS } from "@/data/links";
import { DAMAGE_POLICY } from "@/data/property-facts";
import { upopoyAdmissionText, upopoyHoursText } from "@/data/travel-facts";
import { guideFooter as footer } from "../guide-footer";
export const copy = {
    chrome: {
      skip: "Skip to content",
      nav: "Primary",
      language: "Language",
    },
    captions: {
      doors: "Two private doors",
      bLiving: "Living room in Antonio B, with the projector screen",
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
      neighborhood: "Nearby",
      trips: "Day trips",
      arrival: "Arrival",
      book: "Book",
    },
    hero: {
      eyebrow: "Kita-ku · Asabu · Sapporo",
      title: "Two private apartments near Asabu Station, Sapporo.",
      lede: "Two apartments, one quiet house. Casa Antonio A is the modern floor. Casa Antonio B, upstairs, is the warmth of wood. About five minutes on foot from Asabu Station.",
      a: "See Antonio A",
      b: "See Antonio B",
    },
    intro: {
      eyebrow: "The house",
      title: "A residential street in the north of the city.",
      body: [
        "Casa Antonio is a private house in Kita 38-jo, Kita-ku. Two apartments share the building and keep separate entrances: a pair of wooden doors under a brick porch, with parking on the asphalt in front.",
        "It is not a hotel lobby. You let yourself in, cook if you want to, and ride the subway south when the city is the plan. Asabu Station, on the Namboku line, is about five minutes on foot.",
      ],
    },
    choicesTitle: "Choose a floor",
    choicesLede: "Same address, two different stays. Both can be booked on our booking page.",
    aCard: {
      name: "Casa Antonio A",
      line: "Modern · about 65 m² · 2 bedrooms · up to 4",
      note: "Two bedrooms and one living room.",
      cta: "View the apartment",
    },
    bCard: {
      name: "Casa Antonio B",
      line: "Warmth of wood · second floor · about 65 m² · up to 3 guests",
      note: "One bedroom, three single beds, and a projector.",
      cta: "View the apartment",
    },
    bookA: "Check dates for Casa Antonio A",
    bookB: "Check dates for Casa Antonio B",
    photos: "All photographs",
    photoNoteA: "Photographs of Casa Antonio A, taken in the apartment, plus the shared house outside.",
    photoNoteB: "Photographs of Casa Antonio B, taken in the apartment, plus the shared house outside.",
    neighborhoodTeaser: {
      eyebrow: "Asabu",
      title: "South to the city when you want it.",
      body: "The Namboku line runs from Asabu through Sapporo Station to Odori and Susukino. Day to day, the useful places are closer: AEON over the station, and calma a few blocks south.",
      cta: "Nearby",
    },
    // validUntil: "2027-03-31" — Teine 2026-27 season and the 77th Snow Festival dates (checked 12 Nov 2026).
    seasons: {
      "eyebrow": "Two seasons",
      "title": "Come for the snow, or for the long summer days.",
      "winter": {
        "label": "Winter · December to March",
        "title": "Ski at Teine, then come home to a warm apartment.",
        "body": [
          "Sapporo Teine is the ski area on this side of the city, about 40 minutes by car from central Sapporo, with night skiing on the lower Olympia side. It plans to open on 21 November 2026. Sapporo Kokusai, Bankei and Moiwayama are other ski areas inside the city; check their own sites for dates. Niseko and Rusutsu are bigger resorts, and a long day out.",
          "The 77th Sapporo Snow Festival runs 4–11 February 2027 in Odori Park, Susukino and Tsudome. The Namboku line takes you from Asabu to Odori, and the street is quiet when you get back. Each apartment has one free parking space, and the host or property management clears the snow there."
        ],
        "teine": "Sapporo Teine for skiers",
        "snow": "Snow Festival: dates and getting there",
        "alt": "Sapporo Teine ski area in winter, looking back toward the city",
        "credit": "Sapporo Teine, looking back toward the city. Photograph by Miki Yoshihito, CC BY 2.0."
      },
      "summer": {
        "label": "Summer · June to September",
        "title": "Biei and Furano, on an early start.",
        "body": [
          "Furano is about two hours and ten minutes by car in ordinary conditions, and Biei about two and a half. The lavender at Farm Tomita is usually at its best in July. The Shirogane Blue Pond and the patchwork hills of Biei are on the same road north.",
          "Leave early and keep the day simple: one or two stops, lunch, and home by evening. Otaru, Lake Toya and Jozankei are closer if you want a shorter day. Each apartment has a free parking space, which helps if you hire a car."
        ],
        "trips": "Day trips from the house",
        "alt": "Lavender rows at Farm Tomita in Furano",
        "credit": "Lavender at Farm Tomita, Furano. Photograph by Kentagon, CC BY-SA 4.0."
      }
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
      title: "Weeks and months, by asking.",
      lede: "Both apartments can be taken for longer than a holiday. Ask the host for a rate for your dates. This page does not promise a discount.",
      body: [
        "Casa Antonio A and Casa Antonio B are the same house, with separate doors. A long stay uses one of them as a home: cook, work, keep one car in the free space in front of that apartment, and ride the subway when the city is the plan. It suits a work season in Sapporo, a university term, a family visit that runs long, or a winter built around Teine.",
        "Contact us through our booking page (kagamiplanning.airhost.co/en) or by email with your dates, preferred apartment and number of guests. Confirm what is included and the total before paying. This website does not take reservations or payments.",
        "The house rules do not relax because the stay is long. No smoking, no pets, no parties, and a quiet street after dark. Check-in and check-out still apply at each end. Only the people on the booking live there.",
      ],
      points: [
        { k: "Length", v: "Several weeks, or a number of months" },
        { k: "Rate", v: "Quoted for your dates, in writing" },
        { k: "Which", v: "Antonio A, Antonio B, or one after the other" },
        { k: "How", v: "Contact us through our booking page or by email with your dates" },
      ],
      ctaA: "Check availability and enquire ↗",
      note: "The availability button opens our booking page in a new tab. The email button opens your email app. Send your dates, guest count and preferred apartment. An enquiry is not a confirmed reservation.",
    },
    practical: {
      eyebrow: "Before you arrive",
      title: "The same house rules, on both floors.",
      items: [
        { k: "Check-in", v: "16:00–23:00, self check-in" },
        { k: "Check-out", v: "Any time until 10:00" },
        { k: "Parking", v: "Free, one car per apartment" },
        { k: "Smoking", v: "Nowhere on the property" },
        { k: "Pets", v: "Not allowed" },
        { k: "Parties", v: "Not allowed" },
      ],
      cta: "Arrival notes",
    },
    footer: {
      line: "Two apartments in one house. Kita 38-jo Nishi 3-chome, Kita-ku, Sapporo.",
      address: ADDRESS.full,
      licenses: "Minpaku notification  M010045173 · A     M010045174 · B",
      photo: "All photographs were taken at Casa Antonio.",
    },
    reserve: {
      label: "Check dates",
      title: "Check availability and book",
      a: "Casa Antonio A",
      b: "Casa Antonio B",
      close: "Close",
    },
    stayShared: {
      book: "Check availability",
      amenities: "In the apartment",
      rules: "House rules",
      facts: "At a glance",
      back: "Both apartments",
    },
    aPage: {
      eyebrow: "Casa Antonio A · modern space",
      title: "Casa Antonio A",
      lede: "A modern apartment with its own door. Pale walls, a long sofa, and a kitchen open to the living room. Two separate bedrooms, with three single beds and one double bed.",
      facts: [
        ["Guests", "Up to 4"],
        ["Layout", "2 bedrooms, 1 living room, 1 bath"],
        ["Size", "About 65 m²"],
        ["Beds", "3 single beds + 1 double bed"],
        ["Entrance", "Private"],
        ["License", "M010045173", "license"],
      ],
      storyTitle: "What the room is like",
      story: [
        "Casa Antonio A is the modern one. The living room is a soft grey-blue, with a sofa facing the window and a pale table in the middle. The kitchen is part of the same room: a counter, a refrigerator, a cooktop under a hood, a microwave, and a toaster oven. There is also an oven.",
        "There are two bedrooms with three single beds and one double bed, dressed in white linen. One has a closet and a dresser. A short hall joins them to the living room. Heating and air conditioning are in the rooms you actually sit in, which is what makes a long winter day possible.",
        "You come in through your own door. Check-in is private and contactless; the timing and the lock instructions are sent after you book, not posted here. Towels, linen, and basic toiletries are provided, along with a washer, heating, air conditioning, and Wi-Fi.",
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
        "Free parking, one car",
        "Smoke alarm and fire extinguisher",
      ],
    },
    bPage: {
      eyebrow: "Casa Antonio B · warmth of wood",
      title: "Casa Antonio B",
      lede: "The second floor of the same house, reached by stairs. A wood interior, and a projector in the living room.",
      facts: [
        ["Guests", "Up to 3"],
        ["Layout", "1 bedroom, 1 bath"],
        ["Size", "About 65 m²"],
        ["Beds", "3 single beds"],
        ["Floor", "Second, by stairs"],
        ["License", "M010045174", "license"],
      ],
      storyTitle: "The upstairs apartment",
      story: [
        "B is our upstairs apartment: warm wood, a simple modern finish, and a projector for movie nights. Asabu Station (Namboku line) is about five minutes on foot. Sapporo Station, Odori, and Susukino are a short ride south.",
        "It is about 65 square meters: one bedroom, three single beds, up to three guests, and one bathroom with a tub, shower, bidet, and hairdryer. The kitchen has a stovetop, refrigerator, microwave, kitchenware, a dining table, and wine glasses. There is a sofa, a washer, slippers, towels, and linen.",
        "It has a private entrance, one free parking space, free Wi-Fi, heating, air conditioning, and self check-in. Non-smoking, on a quiet residential street.",
      ],
      amenities: [
        "Projector in the living room",
        "Three single beds",
        "Free Wi-Fi throughout",
        "Heating and air conditioning",
        "Kitchen with stovetop, microwave, and refrigerator",
        "Dining table and wine glasses",
        "Washing machine",
        "Sofa",
        "Bathtub, shower, and bidet",
        "Hairdryer, slippers, and toiletries",
        "Towels and bed linen",
        "Free parking, one car",
        "Smoke alarm, fire extinguisher, and CO detector",
      ],
    },
    rules: [
      "Check-in from 16:00 until 23:00. Check-out by 10:00. You may leave any time before then.",
      "Self check-in. Instructions are sent after booking.",
      "The whole property is non-smoking, including entrances and the parking area.",
      "No pets.",
      "No parties, and the apartments are not for stag or hen events.",
      "The guest checking in should be 18 or older. Children are welcome.",
      "Only registered guests. Please don’t hand the door to anyone who isn’t on the booking.",
      DAMAGE_POLICY.en,
      "Quiet residential street — keep voices and music down, especially after dark.",
    ],
    neighborhood: {
      eyebrow: "Nearby",
      title: "Places worth naming.",
      lede: "These are places a short walk, or a short ride, from the house. Times are on foot unless the line says otherwise. Hours change, so check the day you go. Each link opens Google Maps. Photographs of the smaller shops stay there. We do not copy them onto this page. The landmarks below use freely licensed photographs.",
      localEyebrow: "Stay local",
      localTitle: "A day in Asabu",
      localLede: "The street, the station, and the rooms past the station for dinner. That is the neighborhood. It is enough for a day that does not need a plan.",
      local: [
        {
          title: "The house",
          time: "The door",
          body: "Two wooden doors under a brick porch, and one free parking space in front of each apartment. The street is houses. Come back here between the station and a longer outing.",
        },
        {
          title: "Asabu Station",
          time: "About 5 min",
          body: "Namboku line, the north end. Southbound trains go through Kita 24-jo and Sapporo Station toward Odori and Susukino. The walk is about five minutes.",
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
          body: "Sapporo Station is about 4.9 km by road. The subway takes about nine minutes, station to station. Odori is the long park further down the same line: the snow festival in February, beer gardens in summer, the TV tower at the east end. Susukino is the late night, if you want one.",
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
      guideLede: "Times are from this house, on foot unless the line says otherwise. Hours change. Check the day you go. A map link opens the place, including its photos. Those pictures stay on Google.",
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
              body: "Omurice, doria, and waffles at Asabu-cho 4-9-14, in Frontier Asabu. Open 11:00–22:00, with no weekly closing day except New Year. About a minute from the station, which makes it a little farther from this house.",
              map: "https://www.google.com/maps/search/?api=1&query=goody+goody+麻生店+麻生町4-9-14",
            },
            {
              name: "Masaya",
              time: "Past the station",
              body: "An izakaya for motsu nabe and seafood, Asabu-cho 3-10-22, just off exit 3 of the station. Dinner, not lunch.",
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
              body: "The ordinary family Italian inside the station building. Useful when the smaller restaurants are closed.",
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
              body: "Relaxation massage about 300 meters from the station. Hours change. Check the day you go.",
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
              body: "The supermarket for a stay, built on top of Asabu Station. This is the floor that stays open later. Check the day’s hours. The map page has the current floor guide.",
              map: "https://www.google.com/maps/search/?api=1&query=イオン札幌麻生店",
            },
            {
              name: "AEON parking",
              time: "Same building",
              body: "About 570 spaces, if driving the last block is easier. The house also has one free space in front of each apartment.",
              map: "https://www.google.com/maps/search/?api=1&query=イオン札幌麻生店",
            },
          ],
        },
        {
          title: "Sights",
          items: [
            {
              name: "Hokkaido University",
              time: "About 4.7 km",
              body: "The campus is south of here. Worth the hour on foot when the trees or the snow are the reason for going.",
              map: "https://www.google.com/maps/search/?api=1&query=北海道大学+札幌",
            },
            {
              name: "Odori Park",
              time: "Same subway line",
              body: "Snow festival in February. Beer gardens in summer. The TV tower stands at the east end.",
              map: "https://www.google.com/maps/search/?api=1&query=大通公園+札幌",
            },
            {
              name: "Sapporo Clock Tower",
              time: "About 5.5 km",
              body: "The small wooden clock in the center. A stop, not a whole day.",
              map: "https://www.google.com/maps/search/?api=1&query=札幌市時計台",
            },
            {
              name: "Sapporo Station",
              time: "About 4.9 km",
              body: "The subway takes about nine minutes, station to station. The larger cafes are here, not in Asabu.",
              map: "https://www.google.com/maps/search/?api=1&query=札幌駅",
            },
          ],
        },
        {
          title: "Ski",
          items: [
            {
              name: "Sapporo Teine",
              time: "West by car",
              body: "Olympia and Highland. Often under 40 minutes in clear conditions. Parking at the mountain is free.",
              map: "https://www.google.com/maps/search/?api=1&query=サッポロテイネ",
            },
            {
              name: "Sapporo Bankei",
              time: "Southwest of the center",
              body: "A smaller city hill, often a short session with children. It is closer to central Sapporo than to this house.",
              map: "https://www.google.com/maps/search/?api=1&query=札幌ばんけいスキー場",
            },
            {
              name: "Fu’s Snow Area",
              time: "Teine side",
              body: "A local hill, for a few runs without giving the whole day to a large resort.",
              map: "https://www.google.com/maps/search/?api=1&query=フーズスノーエリア",
            },
            {
              name: "Sapporo Kokusai",
              time: "About an hour",
              body: "Further northwest. A longer ski day, if Teine feels too close.",
              map: "https://www.google.com/maps/search/?api=1&query=札幌国際スキー場",
            },
            {
              name: "Niseko or Kiroro",
              time: "A real trip",
              body: "Not a quick errand. If that is the week, leave early. This house is the quiet night afterward.",
              map: "https://www.google.com/maps/search/?api=1&query=ニセコユナイテッド",
            },
          ],
        },
      ],
      seasonEyebrow: "October to March",
      seasonTitle: "Visiting in the snow.",
      seasonBody:
        "Both apartments have heating. The subway does not care about the snowfall. Side streets are plowed, then they ice, and shoes with a grip matter more than a new jacket. The parking apron in front of the doors is slower when it glazes. Teine is the afternoon that suits this house. Restaurant and shop hours move in winter, so check before you go.",
      mapTitle: "The house",
      mapNote: "Pin is the published coordinate for Kita 38-jo Nishi 3-chome 1-7. Open it in Google Maps if you are navigating in. Shop photos stay on Google. They are not copied here.",
      mapLabel: "Map and photos",
      showMap: "Show the map",
      openMap: "Open in Google Maps",
    },
    dayTrips: {
      eyebrow: "From Sapporo",
      title: "Day trip ideas.",
      lede: "We give you some day trip ideas from Sapporo. Check them out below.",
      homeTitle: "A day away, then the same door.",
      homeBody: "Otaru by train. Noboribetsu or Jozankei for steam. Furano and Biei, or Lake Toya, only if the day is long. Upopoy in Shiraoi is a full day at the Ainu museum. The Buddha is south, on this subway line. Teine when you want to ski or hike and still be home early.",
      homeCta: "Day trips",
      note: "Times are in clear weather, from central Sapporo, plus the walk from this house to Asabu and the subway. Snow, flower season, and road closures change the day. Check that morning. This page does not sell tickets or hold a table.",
      ideas: [
        {
          id: "otaru",
          eyebrow: "No car · about 35–45 minutes from Sapporo Station",
          title: "Otaru, and back for dinner.",
          lede: "The easy day, and the one most people take. A canal town and one seafood lunch. The aquarium and the Shukutsu coast are the extra, if the buses still leave you a train home.",
          steps: [
            {
              time: "Morning",
              title: "Asabu, then the train",
              body: "Walk to Asabu and take the subway to Sapporo Station, about nine minutes on the city's station matrix. From there the JR Hakodate line runs to Otaru. The faster trains take about 35 to 45 minutes.",
            },
            {
              time: "Late morning",
              title: "Canal, then Sakaimachi",
              body: "Walk the canal and the stone warehouses. Sakaimachi Street is the next lane if you want glass and music boxes. One street is enough. Tenguyama ropeway is the view over the port, if the cabin is running that day. Check before you climb.",
            },
            {
              time: "If you still have the afternoon",
              title: "The aquarium, and the Shukutsu coast",
              body: "Otaru Aquarium is not beside the canal. It sits at Shukutsu, a bus ride from Otaru Station. The coast there is a fishing harbor and a lighthouse, not a sandy swimming beach. Go only if the bus times still leave you a train home.",
            },
            {
              time: "Lunch",
              title: "Sankaku Market, or a rated room",
              body: "Sankaku Market, a short walk from Otaru Station, is the simple seafood lunch: kaisendon and the stalls. Go before the tour groups fill it. If you want a restaurant, TripAdvisor’s Otaru list in November 2026 had Sawasaki Suisan Kaisenshokudo and Isezushi at 4.4 (about 205 and 234 reviews), and the soba shop Yabuhan at 4.4 from about 166 reviews. Kita no Donburiya Takinami, at 4.2 from about 154 reviews, is the seafood-bowl counter. Ratings move. This page does not hold a table.",
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
              time: "A meal",
              title: "Near the valley",
              body: "TripAdvisor’s list beside Jigokudani is short. In November 2026 the top of it was Pizzeria Astra, a wood-fired pizza room (4.8 from 29 reviews), then Aji no Daio, the curry-ramen shop (3.8 from about 70 reviews), and Onsen Ichiba, the seafood hall (3.5 from about 115 reviews). The scores are not all high. Check that they are open, and that the road home is still in daylight.",
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
          lede: "A caldera, Mount Usu, and a long way home. You can eat in the onsen town, take a day bath if a ryokan is selling one, or rent a bicycle and ride the shore. Do not add the Buddha or Noboribetsu.",
          steps: [
            {
              time: "Morning",
              title: "Leave early",
              body: "Allow about two hours by car in clear weather. The Donan bus from Sapporo toward Toyako also exists and passes through the Jozankei side of the city. It is a bus day, not a flexible one. Check the return before you go.",
            },
            {
              time: "There",
              title: "The lake, or the volcano",
              body: "The view is the caldera. Mount Usu is the volcanic walk if the paths are open. One of those is enough for the day.",
            },
            {
              time: "A meal",
              title: "Eat in Toyako Onsen",
              body: "The town is on the south shore, and you can eat there. The Toyako Onsen tourist association lists Sendoan, with a view of the lake (often 11:00–19:00, and the hours move with the season), Sushi Aikawa in the evening (about 18:00–23:00), and Yakiniku Kinjo from about 17:00. Look at the door, or call. This page does not hold a table.",
            },
            {
              time: "If you want more than the view",
              title: "A day bath, or a bicycle",
              body: "Toyako Onsen is a hot-spring town. Some ryokan sell a day bath. Ask the price at the door that morning. Do not assume every hotel lets non-guests in. If you would rather be outside, Rental Bicycle Shop Takayanagi, at 144 Toyako-Onsen, rents bicycles from one hour, including electric bikes and two-seaters, so you can ride the shore. The published number is +81-142-75-2406.",
            },
          ],
        },
        {
          id: "teine",
          eyebrow: "Car · often under 40 minutes",
          title: "Ski or hike at Teine.",
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
        {
          id: "shiraoi",
          eyebrow: "Car or train · a full day",
          title: "Shiraoi. Upopoy, the National Ainu Museum.",
          lede: "A whole day for Ainu history and the park in Shiraoi, on the coast southwest of the city. Not a stop you add to another trip.",
          steps: [
            {
              time: "Morning",
              title: "Leave after breakfast",
              body: "By car, allow about an hour and a quarter from this side of the city in clear weather, toward Tomakomai and then Shiraoi. Without a car, take a JR train to Shiraoi Station, then a short bus or taxi to the park. Check that morning’s connection before you go.",
            },
            {
              time: "The day",
              title: "The museum and the park",
              body: `Upopoy, at 2-3-2 Wakakusa-cho, Shiraoi, is Japan’s national museum of Ainu history and culture, with a park and a traditional village beside it. ${upopoyHoursText("en")} ${upopoyAdmissionText("en")} Read the day’s notice before you leave.`,
            },
            {
              time: "Back",
              title: "One direction",
              body: "Give the park the day. Do not add Noboribetsu or Lake Toya. You want the same door for a late dinner.",
            },
          ],
        },
      ],
      more: "Teine, in more detail",
    },
    arrival: {
      eyebrow: "Good to know",
      title: "Arrive after four. Leave by ten.",
      lede: "Both apartments follow the same hours and the same house rules. The door code, or the key steps, are sent after you book — they are not printed on this site.",
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
      winterTitle: "Winter underfoot",
      winter: [
        "From December into March the pavements can be icy even when the road looks clear.",
        "Boots with a non-slip sole make the five-minute walk to Asabu Station easy. Smooth soles do not.",
        "We or the property management clear the parking space. You never have to shovel it.",
        "A car is not needed. The Namboku line runs south from Asabu to Sapporo Station, Odori and Susukino.",
        "Indoors it is warm: the heating runs through the winter.",
      ],
      languagesTitle: "Languages",
      languages: "We reply in English, Japanese, Korean, and Chinese. This site is written in those four languages.",
      licenseTitle: "Notification numbers",
      licenseBody:
        "These are private lodgings under Japan’s housing accommodation business. Casa Antonio A is M010045173. Casa Antonio B is M010045174.",
      payTitle: "How booking works",
      payBody:
        `Dates, price and availability are on our booking page (kagamiplanning.airhost.co/en). This site does not take payment. ${DAMAGE_POLICY.en}`,
    },
    lightbox: { close: "Close", prev: "Previous photograph", next: "Next photograph" },
    ui: {
      gallery: {
        showAll: "Show all {n} photos",
        showFewer: "Show fewer photos",
        filters: "Photo rooms",
        rooms: {
          all: "All rooms",
          living: "Living & dining",
          bedrooms: "Bedrooms",
          kitchen: "Kitchen",
          bath: "Bath & laundry",
          entrance: "Entrance & parking",
          details: "Other details",
        },
      },
      reviews: {
        title: "What guests say",
        reviews: "reviews",
        favorite: "Guest favorite",
        translated: "Translated by Airbnb",
        all: "Read all reviews on Airbnb",
        bookingAll: "Read all reviews on Booking.com",
        more: "Show more reviews",
        less: "Show fewer",
        original: "Original language",
        excerpt: "excerpt",
        ofTen: "/10",
        recorded: "Ratings recorded",
      },
      kojohama: {
        eyebrow: "Our other place",
        title: "Three more beautiful cabins in Kojohama",
        body: "We also host three oceanfront cabins in Kojohama, Shiraoi, about 1 hour 15 minutes from Sapporo by car. Close to Upopoy and the Noboribetsu hot springs. Pair them with Casa Antonio for a city-and-sea trip.",
        cta: "Visit kojohamacabins.jp",
        alt: "Kojohama Cabins by the sea at sunset",
      },
      email: {
        copy: "Copy email address",
        copied: "Email address copied",
        manual: "Select and copy this email address:",
        label: "Email enquiries",
        longStay: "Ask about a long stay by email",
        body: "Apartment (A or B):\nStay dates:\nNumber of guests:\nQuestion:",
      },
      practicalTitle: "Practical stay details",
      copyManual: "Automatic copying is unavailable. The address is selected; touch and hold it, or use your browser’s Copy command.",
      faqTitle: "Before you book",
    },
  };

export const guides = {
    menu: "Menu",
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
    bookA: "Check dates · A",
    bookB: "Check dates · B",
    copyAddress: "Copy the Japanese address",
    copied: "Copied",
    directions: "Directions in Google Maps",
    points: {
      home: [{ icon: "station", label: "5 min to Asabu Station" }, { icon: "parking", label: "Free parking, one car each" }, { icon: "kitchen", label: "Full kitchen" }, { icon: "size", label: "65 m² each" }],
      a: [{ icon: "bed", label: "2 bedrooms" }, { icon: "guests", label: "Up to 4 guests" }, { icon: "parking", label: "Free parking, one car" }, { icon: "kitchen", label: "Full kitchen" }, { icon: "size", label: "About 65 m²" }],
      b: [{ icon: "station", label: "5 min to Asabu Station" }, { icon: "parking", label: "Free parking, one car" }, { icon: "kitchen", label: "Full kitchen" }, { icon: "size", label: "About 65 m²" }, { icon: "guests", label: "Up to 3 guests" }],
    },
    combo: {
      eyebrow: "Shiraoi coast",
      title: "Sapporo, then the coast.",
      lede: "Two or three nights. Casa Antonio in Kita-ku, then Kojohama Cabins on the Shiraoi coast.",
      blocks: [
        {
          h: "The two houses",
          paragraphs: [
            "Stay in Casa Antonio A or B, then continue to the sister house, Kojohama Cabins. By car the coast is about an hour and fifteen minutes.",
          ],
        },
        {
          h: "Without a car",
          paragraphs: [
            "JR runs toward Tomakomai, then on to the Shiraoi coast. Times and fares change. Check them the day you go.",
          ],
        },
        {
          h: "Booking",
          paragraphs: ["Each house is booked on its own. This page does not set a package price."],
        },
      ],
    },
    access: {
      eyebrow: "New Chitose Airport",
      title: "From the airport to the door.",
      lede: "This page is the way from New Chitose Airport (CTS) to the house. Most flights land there. Okadama is a smaller airport inside the city; it has its own note at the end.",
      facts: [
        { k: "Airport", v: "New Chitose (CTS)" },
        { k: "Direct bus", v: "Chuo Bus to Asabu, about 58 min (timetable checked 4 Nov 2026)" },
        { k: "Train", v: "Airport rapid, about 37–45 min to Sapporo Station" },
        { k: "Subway", v: "Asabu–Sapporo about 9 min, station to station" },
        { k: "Walk", v: "About 5 min from Asabu Station" },
        { k: "Parking", v: "Free, one car per apartment" },
      ],
      blocks: [
        {
          h: "Direct airport bus",
          paragraphs: [
            "Hokkaido Chuo Bus runs between New Chitose and Asabu Station (地下鉄麻生駅). The timetable posted on 4 November 2026 is still the summer one, updated 1 April 2026. On it, buses leave the ANA stop from 8:48 until the last bus at 22:23, every 30–60 minutes, and the ride to Asabu is scheduled at about 58 minutes. Chuo Bus has announced a renewal of its airport buses from 11 December 2026, so check the times again if you land after that. In snow the ride takes longer, and buses can be delayed or cancelled. Chuo Bus posts cancellations on its website.",
            "Check the fare on Chuo Bus’s website before you go. Board at the ANA stop, stand 20, the JAL stop, stand 13, or the international terminal, stand 84. The Asabu stop is at the station. From there it is the same walk as from the subway, about five minutes south to Kita 38-jo Nishi 3-chome. Check the official timetable the day you fly. Use the directions link below for the final walk. If travelling with luggage, follow the station’s elevator signs.",
          ],
        },
        {
          h: "Train, then the subway",
          paragraphs: [
            "From New Chitose Airport Station, take the JR Airport rapid to Sapporo Station. The fastest trains are about 37 minutes. Some take closer to 45. The ordinary ticket is on the order of ¥1,200. Check the fare on the day.",
            "The Sapporo subway is a separate ticket. It is not included on a JR ticket. At Sapporo Station, change to the Namboku line and ride north to Asabu, the last station. The city's station matrix gives nine minutes for Asabu–Sapporo, before waiting and the walk between platforms.",
            "The house is about a five-minute walk from Asabu Station.",
          ],
        },
        {
          h: "Car or taxi",
          paragraphs: [
            "A car from the airport takes the expressway toward Sapporo, then north into Kita-ku. Outside rush hour the drive is often under 90 minutes. Snow changes that. Each apartment has one free parking space on the apron in front of the doors.",
            "A metered taxi to central Sapporo is commonly about ¥10,000–13,000 before expressway tolls. The house is north of Sapporo Station. Confirm the fare to this address, not only to the station.",
          ],
        },
        {
          h: "If you land at Okadama",
          paragraphs: [
            "Okadama (OKD) is a small airport in Higashi-ku, used by some regional flights. This guide is built for New Chitose. From Okadama, a taxi or a city bus toward the subway is the usual way on. Check that connection on the day. The Namboku line still ends at Asabu.",
          ],
        },
        {
          h: "If the flight is late",
          paragraphs: [
            "Check-in on the listing is 16:00–23:00. If you may miss that window, email us at admin@kagami-planning.com before you land. This page cannot promise a later arrival.",
          ],
        },
      ],
    },
    // validUntil: "2027-02-11" — the 77th Sapporo Snow Festival dates below run through this date.
    snow: {
      "eyebrow": "4–11 February 2027",
      "title": "A quiet base for the Snow Festival.",
      "lede": "The organizer has published the 77th Sapporo Snow Festival for 4–11 February 2027, eight days. Odori Park, from West 1 to West 11, is the main site. Susukino and Tsudome are the other two. Checked against the organizer’s site on 12 November 2026.",
      "credit": "Sapporo Snow Festival, the Odori site at night, seen from Sapporo TV Tower. Photograph by 京浜にけ. Resized for this page. CC BY-SA 3.0.",
      "blocks": [
        {
          "h": "The ride in",
          "paragraphs": [
            "From the house, walk about five minutes to Asabu Station and take the Namboku line south. Odori is about eleven minutes from Asabu on the city's station matrix, before you wait for a train. Susukino is one station past Odori. You come back the same way, to the north end of the line.",
            "The apartments are the quiet part of the day: cook, sleep, and ride in when you want the snow. Check-in is still 16:00–23:00, and the street is still a residential street."
          ]
        },
        {
          "h": "The three sites",
          "paragraphs": [
            "Odori, West 1 to West 11, is the main site. The organizer lists winter attractions on West 1, the Sapporo International Art Festival 2027 on West 2, small snow sculptures on West 3, large sculptures on West 4, 5, 7, 8 and 10, small and medium ones on West 6 and 9, and the international snow sculpture contest on West 11. Five large sculptures are planned.",
            "Susukino is along Ekimae-dori, from South 4 to South 6. Tsudome is the Sapporo sports exchange facility of that name."
          ]
        },
        {
          "h": "New for 2027",
          "paragraphs": [
            "A special partner event, Sapporo Snow Sports Park 2027, takes place at the Daiwa House Premist Dome on 12–14 February (Friday to Sunday). The Sapporo International Art Festival 2027 is on West 2 in Odori. The organizer says it will keep updating the details, so some of this may change."
          ]
        },
        {
          "h": "Getting to Tsudome",
          "paragraphs": [
            "Tsudome is away from the subway. In 2026 the festival ran a shuttle between Sakaemachi Station and Tsudome from 4 to 11 February: ¥200 one way for adults, cash only, 9:40–14:30 from Sakaemachi and 12:00–16:20 from Tsudome, every 5–10 minutes. From Asabu you change to the Toho line at Odori to reach Sakaemachi. Tsudome has no general parking. The 2027 shuttle has not been announced yet."
          ]
        },
        {
          "h": "Dates, and what is not posted yet",
          "paragraphs": [
            "As of 12 November 2026 the organizer had not posted 2027 opening hours or lighting hours for any site. In recent years the Odori site has been open from early morning, with lights from sunset until 22:00, and Susukino lights until 23:00. Treat that as the recent pattern, not a promise for 2027, and check the official site before you go."
          ]
        }
      ]
    },
    teine: {
      "eyebrow": "West of the house",
      "title": "Sapporo Teine, and the same door at the end.",
      "lede": "A ski day from this side of the city: a morning in the apartment, the lifts, and the private door when it is over. Season dates, hours and prices below were read on the resort’s official site on 12 November 2026.",
      "credit": "Sapporo Teine, looking back toward the city. Photograph by MIKI Yoshihito. Resized for this page. CC BY 2.0.",
      "blocks": [
        {
          "h": "The mountain",
          "paragraphs": [
            "Sapporo Teine is on Mount Teine, a venue of the 1972 Sapporo Winter Olympics. It has two zones. Olympia is the lower, broader one, with a family area and the night skiing. Highland is higher, where the old Olympic courses are.",
            "The resort lists 15 courses (7 on Highland, 8 on Olympia), 9 lifts and gondolas, 16,430 m of course in all, a top at 1,023 m, a vertical drop of 683 m, a longest run of about 6 km and a steepest slope of 38°."
          ]
        },
        {
          "h": "Season dates, 2026–27",
          "paragraphs": [
            "The resort plans to open on 21 November. On Highland, the early season runs to 18 December, the regular season from 19 December to 7 March, spring from 8 to 28 March, and a special spring period from 29 March to 5 May. After 28 March only Highland is open. No closing date is given for Olympia; its night skiing ends on 28 March. Last season ended on 6 May.",
            "Snow decides the real dates. Check the resort’s notices in the week you go."
          ]
        },
        {
          "h": "Lift hours and night skiing",
          "paragraphs": [
            "In the table from opening to 18 January, the Highland Summit Express and the Olympia gondola run 9:00–15:30, and the other lifts 9:00–16:00. One Olympia lift runs until 20:00 for the night session. The table changes after 18 January, so check the current one.",
            "Night skiing is on Olympia only, 16:00–20:00 from 5 December to 28 March, with last boarding at 19:40. There is no night skiing on Highland."
          ]
        },
        {
          "h": "Lift tickets",
          "paragraphs": [
            "Adult prices, online and then at the counter. Early season (to 18 December): one day ¥8,400 and ¥9,400, five hours ¥6,300 and ¥7,300. Regular season (19 December to 7 March): one day ¥8,800 and ¥9,800, five hours ¥6,600 and ¥7,600. Spring (8–28 March): one day ¥6,600 and ¥7,600. Special spring on Highland (29 March to 5 May): one day ¥6,000 and ¥7,000.",
            "The adult night ticket is ¥2,900 online and ¥3,900 at the counter. The child night ticket is ¥1,800 online and ¥2,800 at the counter. A 25-hour pass is ¥28,500, online only. Child day tickets and other categories are on the resort’s ticket page."
          ]
        },
        {
          "h": "Rentals",
          "paragraphs": [
            "The resort’s English rental page lists a ski or snowboard for one day at ¥9,200 for adults and ¥7,600 for children, and ¥10,500 and ¥8,900 from 26 December to 3 January. A full set with boots, wear, beanie, goggles and gloves is ¥20,000 for adults and ¥17,100 for children for one day. Wear alone is ¥7,300 and a helmet ¥3,300 a day. Prices can be revised during the season."
          ]
        },
        {
          "h": "Getting there by car",
          "paragraphs": [
            "The resort gives about 40 minutes from central Sapporo, about 60 minutes from New Chitose Airport and about 10 minutes from Teine IC. Kita-ku is on the north side of the city, so ask your navigation for the day’s time and leave margin for snow. Hire cars in Hokkaido in winter normally have winter tires; confirm when you book. The resort’s English access page does not describe parking, so check before you go."
          ]
        },
        {
          "h": "Getting there without a car",
          "paragraphs": [
            "From Asabu, take the Namboku line to Sapporo Station, then JR to Teine Station. The resort gives 11–18 minutes and ¥360 for the JR leg. A shuttle bus run by JR Hokkaido Bus leaves from the south exit of Teine Station: about 15 minutes to Olympia and 27 minutes to Highland. The adult fare to Highland is a flat ¥1,000 (children ¥500), paid in exact change.",
            "Big Runs express buses run from Sapporo hotels from 5 December 2026 to 28 March 2027. A Bus Pack with a seven-hour lift ticket is ¥11,000 for adults; the round trip alone is ¥8,800 and one way ¥4,000. The resort lists no direct bus from Asabu. A taxi from Miyanosawa subway station takes about 30 minutes."
          ]
        },
        {
          "h": "Beginners and lessons",
          "paragraphs": [
            "The resort’s beginner pages list a family area on Olympia and a beginner area. English lessons are not described on the pages we read, so ask the resort before you plan around them."
          ]
        },
        {
          "h": "The house as a base",
          "paragraphs": [
            "Casa Antonio is not a ski-in lodge. It is a residential apartment with a kitchen, heat, and one free parking space in front of each door. Each apartment has a washing machine and somewhere to hang wet clothes. No dryer is advertised, so do not count on wet ski wear drying overnight. The host or property management clears the snow in the parking space; guests do not. Bring skis in the car, or rent them at the resort.",
            "A day that suits the house: breakfast in the apartment, train or car to Teine for the morning, lunch on the mountain, and the night session on Olympia if you still have the energy. Last boarding is 19:40, so the ride home is after 20:00. If the mountain was enough and the city is next, the Namboku line runs to Odori and Susukino."
          ]
        },
        {
          "h": "Check before you go",
          "paragraphs": [
            "Dates and prices are for the 2026–27 season and come from sapporo-teine.com. Opening is a plan until the snow arrives. On the day, check the resort’s notices and the road and train situation."
          ]
        }
      ]
    },
  };
