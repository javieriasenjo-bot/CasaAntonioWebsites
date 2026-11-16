import type { Lang } from "@/lib/paths";

type DiscoveryCopy = {
  eyebrow: string; accessTitle: string; snowTitle: string; teineTitle: string;
  compareTitle: string; intro: string; snowIntro: string; teineIntro: string;
  view: string; dates: string; monthlyLink: string; longLink: string;
  monthlyTitle: string; monthlyIntro: string; terms: string;
  sections: { title: string; body: string }[];
  askTitle: string; ask: string[]; request: string;
};

export const STAY_DISCOVERY: Record<Lang, DiscoveryCopy> = {
  en: {
    eyebrow: "Stay in Asabu · Sapporo",
    accessTitle: "Still looking for a place to stay?",
    snowTitle: "An apartment for your Snow Festival trip",
    teineTitle: "Choose your Sapporo base for ski days",
    compareTitle: "Compare the two apartments",
    intro: "Casa Antonio is about a five-minute walk from Asabu Station. Each private apartment has a kitchen, washing machine, Wi-Fi and one free parking space.",
    snowIntro: "Stay about five minutes on foot from Asabu Station, with the Namboku subway line to Odori and Susukino. Come back to your own kitchen and a heated apartment after the festival.",
    teineIntro: "Combine ski days with a stay in Sapporo. Both apartments have a kitchen, heating, a washing machine and one free parking space. Travel to Teine by car or train and bus; this is not ski-in/ski-out accommodation.",
    view: "Photos and apartment details", dates: "Check available dates",
    monthlyLink: "Planning a month in Sapporo?", longLink: "Long-stay enquiries",
    monthlyTitle: "A month in Sapporo: apartments near Asabu Station",
    monthlyIntro: "Comparing furnished monthly accommodation in Sapporo? Casa Antonio offers two private apartments in Kita-ku, about five minutes on foot from Asabu Station. Ask about availability for your exact dates before making plans.",
    terms: "Long stays are by enquiry. We do not advertise a fixed monthly rate or a standard monthly rental contract. Availability, the total price and stay conditions are confirmed individually before booking.",
    sections: [
      { title: "Cooking, laundry and a place to work", body: "Both apartments have a kitchen with cookware, a fridge and microwave, a washing machine, Wi-Fi, heating and a dining table. Bring the seasonings you need. Cleaning arrangements and any extra charges should be confirmed for your stay." },
      { title: "Daily life in Asabu, Kita-ku", body: "Walk to Asabu Station for the Namboku line to Sapporo, Odori and Susukino. Supermarkets and restaurants are nearby. Each apartment includes one free parking space; tell the host if you plan to bring a car." },
      { title: "Choose the floor that suits your stay", body: "A is on the ground floor with two bedrooms. B is upstairs with one bedroom and a large living room with a projector; access is by stairs. The apartments have separate entrances and no shared living space. Compare the photos and sleeping arrangements below." },
    ],
    askTitle: "What to include in your enquiry",
    ask: ["Arrival and departure dates, plus any flexibility", "Number of guests and preferred apartment: A or B", "Parking needs and any questions about stairs or facilities", "Ask for the total price, included services, cleaning and cancellation terms"],
    request: "Send a long-stay enquiry",
  },
  ja: {
    eyebrow: "札幌・北区・麻生",
    accessTitle: "麻生駅近くの宿泊先をお探しですか？",
    snowTitle: "雪まつり旅行の宿泊先を選ぶ",
    teineTitle: "テイネで滑る日の、札幌の宿泊拠点",
    compareTitle: "2つの貸切アパートを比較",
    intro: "Casa Antonioは麻生駅から徒歩約5分。各アパートにキッチン、洗濯機、Wi-Fi、1台分の無料駐車場があり、それぞれ貸切でご利用いただけます。",
    snowIntro: "麻生駅から徒歩約5分。地下鉄南北線で大通・すすきのへ移動できます。雪まつりを楽しんだ後は、暖房とキッチンのある貸切アパートでゆっくりお過ごしください。",
    teineIntro: "スキーと札幌滞在を組み合わせたい方へ。各室にキッチン、暖房、洗濯機、無料駐車場1台分があります。テイネへは車、または鉄道とバスで移動します。ゲレンデ直結の宿ではありません。",
    view: "写真・間取り・設備を見る", dates: "空室を確認する",
    monthlyLink: "札幌・麻生でマンスリー滞在を検討する", longLink: "札幌の長期滞在を相談する",
    monthlyTitle: "札幌・麻生でマンスリーマンションをお探しの方へ",
    monthlyIntro: "札幌のマンスリーマンションや、麻生周辺で1か月ほど暮らせる宿泊先を比較している方へ。Casa Antonioは麻生駅から徒歩約5分、札幌市北区にある2つの貸切アパートです。ご希望の日程で長期滞在が可能か、まずはお問い合わせください。",
    terms: "長期滞在は個別のお問い合わせで承ります。固定の月額料金や定型のマンスリー賃貸契約を案内するページではありません。空室状況、合計金額、滞在条件を個別に確認したうえでご予約ください。",
    sections: [
      { title: "自炊・洗濯・仕事のある毎日に", body: "どちらも調理器具付きのキッチン、冷蔵庫、電子レンジ、洗濯機、Wi-Fi、暖房、ダイニングテーブルを備えています。必要な調味料はご持参ください。滞在中の清掃や追加費用については、ご予約前にご確認ください。" },
      { title: "札幌市北区・麻生で暮らすように滞在", body: "麻生駅から地下鉄南北線でさっぽろ・大通・すすきのへ。近くにスーパーや飲食店があり、日々の買い物や食事にも便利です。各室1台分の無料駐車場をご利用いただけます。お車でお越しの場合は事前にお知らせください。" },
      { title: "寝室の数と階で選ぶA・B", body: "Aは1階で寝室2室。Bは2階で寝室1室、プロジェクターのある広いリビングがあり、階段で上がります。入口はそれぞれ独立し、居住スペースの共用はありません。写真とベッド構成を比較してお選びください。" },
    ],
    askTitle: "お問い合わせ時にお知らせいただきたいこと",
    ask: ["チェックイン・チェックアウト日と、日程変更の可否", "宿泊人数と、ご希望のお部屋（A・B）", "駐車場の利用、階段や設備についてのご質問", "合計金額、含まれるサービス、清掃、キャンセル条件の確認"],
    request: "長期滞在を相談する",
  },
  zh: {
    eyebrow: "札幌・北区・麻生",
    accessTitle: "还在寻找麻生站附近的住处？",
    snowTitle: "为雪祭之旅选择公寓",
    teineTitle: "在札幌选一个滑雪旅行的落脚点",
    compareTitle: "比较两套独立公寓",
    intro: "Casa Antonio距麻生站步行约5分钟。每套公寓均为整套出租，配有厨房、洗衣机、Wi-Fi及一个免费停车位。",
    snowIntro: "步行约5分钟到麻生站，乘地铁南北线前往大通和薄野。游览雪祭后，回到有暖气和厨房的独立公寓休息。",
    teineIntro: "把滑雪与札幌住宿安排在一起。每套公寓均有厨房、暖气、洗衣机及一个免费停车位。前往手稻需驾车或搭乘列车和巴士，这里并非滑进滑出的雪场住宿。",
    view: "查看照片、布局和设施", dates: "查看可订日期",
    monthlyLink: "计划在札幌住一个月？", longLink: "咨询长期住宿",
    monthlyTitle: "札幌住一个月：麻生站附近的独立公寓",
    monthlyIntro: "正在比较札幌的月租公寓或一个月左右的住宿？Casa Antonio位于札幌市北区，距麻生站步行约5分钟，有两套独立公寓可供选择。请先告知具体日期，咨询是否可安排长住。",
    terms: "长期住宿需单独咨询。本页不承诺固定月租或标准月租合同。请在预订前确认空房、总价及具体住宿条件。",
    sections: [
      { title: "做饭、洗衣与日常工作", body: "两套公寓均有配备厨具的厨房、冰箱、微波炉、洗衣机、Wi-Fi、暖气和餐桌。请自备所需调味料。入住期间的清洁安排及额外费用，请在预订前确认。" },
      { title: "在札幌北区麻生日常生活", body: "从麻生站乘地铁南北线可到札幌、大通和薄野，附近有超市和餐厅。每套公寓提供一个免费停车位；如需停车，请提前告知房东。" },
      { title: "按楼层和卧室数量选择", body: "A在一楼，有两间卧室。B在二楼，有一间卧室和配投影仪的宽敞客厅，需走楼梯。两套公寓入口独立，没有共用居住空间。请查看照片和床位安排后选择。" },
    ],
    askTitle: "咨询时请提供",
    ask: ["入住及退房日期，日期是否可调整", "入住人数及偏好的公寓（A或B）", "停车需求，以及对楼梯或设施的疑问", "请确认总价、包含的服务、清洁及取消条件"],
    request: "咨询长住安排",
  },
  ko: {
    eyebrow: "삿포로 · 기타구 · 아사부",
    accessTitle: "아사부역 근처 숙소를 찾고 계신가요?",
    snowTitle: "눈축제 여행에 맞는 아파트를 고르세요",
    teineTitle: "테이네 스키 여행의 삿포로 숙소",
    compareTitle: "두 아파트 비교하기",
    intro: "Casa Antonio는 아사부역에서 도보 약 5분 거리입니다. 각 아파트를 단독으로 이용하며 주방, 세탁기, Wi-Fi와 무료 주차 공간 1대분을 갖추고 있습니다.",
    snowIntro: "아사부역까지 도보 약 5분, 난보쿠선으로 오도리와 스스키노에 갈 수 있습니다. 눈축제를 즐긴 뒤 난방과 주방이 있는 독립된 아파트에서 쉬어 가세요.",
    teineIntro: "스키와 삿포로 여행을 함께 계획해 보세요. 두 아파트 모두 주방, 난방, 세탁기와 무료 주차 공간 1대분이 있습니다. 테이네까지는 차 또는 열차와 버스로 이동하며, 스키장과 바로 연결된 숙소는 아닙니다.",
    view: "사진·구조·시설 보기", dates: "예약 가능한 날짜 확인",
    monthlyLink: "삿포로 한 달 살기 숙소 비교", longLink: "삿포로 장기 숙박 문의",
    monthlyTitle: "삿포로 한 달 살기: 아사부역 근처 아파트 숙소",
    monthlyIntro: "삿포로 한 달 살기나 아사부 지역의 월 단위 숙소를 찾고 계신가요? Casa Antonio는 기타구 아사부역에서 도보 약 5분 거리에 있는 독립된 아파트 두 채입니다. 정확한 숙박 날짜를 알려 주시면 장기 숙박 가능 여부를 확인해 드립니다.",
    terms: "장기 숙박은 개별 문의로 안내합니다. 고정 월 요금이나 표준 월 단위 임대 계약을 제공한다는 안내가 아닙니다. 예약 전에 가능 여부, 총금액과 숙박 조건을 개별적으로 확인해 주세요.",
    sections: [
      { title: "직접 요리하고 세탁하며 보내는 일상", body: "두 아파트 모두 조리 도구가 있는 주방, 냉장고, 전자레인지, 세탁기, Wi-Fi, 난방과 식탁을 갖추고 있습니다. 필요한 조미료는 가져와 주세요. 숙박 중 청소와 추가 비용은 예약 전에 확인해 주세요." },
      { title: "삿포로 기타구 아사부에서 지내기", body: "아사부역에서 난보쿠선으로 삿포로, 오도리와 스스키노에 갈 수 있고 주변에 슈퍼마켓과 음식점이 있습니다. 아파트당 무료 주차 공간 1대분이 있으니 차량 이용 시 미리 알려 주세요." },
      { title: "층수와 침실 수로 고르는 A와 B", body: "A는 1층에 침실 2개가 있습니다. B는 2층에 침실 1개와 프로젝터가 있는 넓은 거실이 있으며 계단으로 올라갑니다. 출입구가 따로 있고 생활 공간을 공유하지 않습니다. 사진과 침대 배치를 비교해 선택해 주세요." },
    ],
    askTitle: "문의할 때 알려 주세요",
    ask: ["체크인·체크아웃 날짜와 일정 조정 가능 여부", "숙박 인원과 원하는 아파트(A 또는 B)", "주차 필요 여부 및 계단이나 시설에 관한 질문", "총금액, 포함된 서비스, 청소와 취소 조건 확인"],
    request: "장기 숙박 문의하기",
  },
};
