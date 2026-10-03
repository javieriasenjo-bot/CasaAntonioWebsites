import type { Lang } from "@/lib/i18n";

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
  p("/photos/bedroom.jpg", "First bedroom, two beds", "ひとつめの寝室、ベッド2台", "第一间卧室，两张床", "첫 번째 침실, 침대 두 개"),
  p("/photos/bedroom-2.jpg", "The same bedroom, from the door", "同じ寝室を入口から", "同一间卧室，从门口看", "같은 침실, 문 쪽에서"),
  p("/photos/bedroom-3.jpg", "The second bedroom, two beds", "ふたつめの寝室、ベッド2台", "第二间卧室，两张床", "두 번째 침실, 침대 두 개"),
  p("/photos/hall.jpg", "Hall closet and the way through the apartment", "廊下の収納と部屋の奥", "走廊储物与房间深处", "복도 수납과 집 안쪽"),
  ...housePhotos,
];

// Casa Antonio B — photographed in the apartment (originals: "2. Casa Antonio B Photos - Original, High Quality").
export const apartmentBPhotos: Photo[] = [
  p("/photos/b-living.jpg", "Living room in Casa Antonio B, with the projector screen", "Casa Antonio Bの居間とプロジェクタースクリーン", "Casa Antonio B 的起居室与投影幕", "Casa Antonio B의 거실과 프로젝터 스크린"),
  p("/photos/b-living-sofa.jpg", "Corner sofa and coffee table by the window", "窓辺のコーナーソファとローテーブル", "窗边的转角沙发与茶几", "창가의 코너 소파와 테이블"),
  p("/photos/b-living-2.jpg", "The living room from the dining side", "ダイニング側から見た居間", "从餐厅一侧看起居室", "식당 쪽에서 본 거실"),
  p("/photos/b-living-dining.jpg", "From the dining table into the living room", "ダイニングテーブルから居間へ", "从餐桌望向起居室", "식탁에서 거실 쪽으로"),
  p("/photos/b-projector.jpg", "The projector, for a film night in", "映画の夜のためのプロジェクター", "投影仪，适合在家看电影", "영화 보는 밤을 위한 프로젝터"),
  p("/photos/b-dining.jpg", "Dining table and the open kitchen", "ダイニングとオープンキッチン", "餐桌与开放式厨房", "식탁과 오픈 키친"),
  p("/photos/b-dining-table.jpg", "The long wooden dining table", "長い木のダイニングテーブル", "长木餐桌", "긴 나무 식탁"),
  p("/photos/b-dining-view.jpg", "From the table toward the windows", "テーブルから窓のほうへ", "从餐桌望向窗户", "식탁에서 창 쪽으로"),
  p("/photos/b-kitchen.jpg", "Kitchen with sink, induction hob, and storage", "シンク、IH、収納のあるキッチン", "带水槽、电磁炉和储物柜的厨房", "싱크, 인덕션, 수납이 있는 주방"),
  p("/photos/b-kitchen-2.jpg", "The kitchen run from the other end", "反対側から見たキッチン", "从另一头看厨房", "반대편에서 본 주방"),
  p("/photos/b-kitchen-shelf.jpg", "Microwave oven, rice cooker, and kettle", "電子レンジ、炊飯器、電気ケトル", "微波炉、电饭煲和电热水壶", "전자레인지, 밥솥, 전기 주전자"),
  p("/photos/b-bedroom.jpg", "Bedroom with three single beds", "シングルベッド3台の寝室", "三张单人床的卧室", "싱글 침대 세 개의 침실"),
  p("/photos/b-bedroom-2.jpg", "The bedroom from the door", "入口から見た寝室", "从门口看卧室", "문 쪽에서 본 침실"),
  p("/photos/b-bedroom-window.jpg", "Beds by the bedroom window", "寝室の窓辺のベッド", "卧室窗边的床", "침실 창가의 침대"),
  p("/photos/b-bedroom-detail.jpg", "Headboard, plants, and morning light", "ヘッドボードと植物、朝の光", "床头、绿植与晨光", "헤드보드와 식물, 아침 햇살"),
  p("/photos/b-washroom.jpg", "Washroom with vanity and washing machine", "洗面台と洗濯機のある洗面所", "带洗手台和洗衣机的盥洗室", "세면대와 세탁기가 있는 세면실"),
  p("/photos/b-washroom-2.jpg", "Vanity, mirror cabinet, and drying rail", "洗面台、ミラーキャビネット、物干し", "洗手台、镜柜与晾衣杆", "세면대, 거울 수납장, 건조대"),
  p("/photos/b-bath.jpg", "Bathroom with a full-size tub", "広い浴槽のある浴室", "带大浴缸的浴室", "넓은 욕조가 있는 욕실"),
  p("/photos/b-toilet.jpg", "Separate toilet with washlet", "独立トイレ（温水洗浄便座）", "独立卫生间（智能马桶）", "분리형 화장실(비데)"),
  p("/photos/b-hall.jpg", "Hall from the living room to the bedroom", "居間から寝室への廊下", "从起居室到卧室的走廊", "거실에서 침실로 가는 복도"),
  p("/photos/b-hall-2.jpg", "Hallway with sliding doors", "引き戸のある廊下", "带推拉门的走廊", "미닫이문이 있는 복도"),
  p("/photos/b-landing.jpg", "Bright landing with flower prints", "花の版画が並ぶ明るい踊り場", "挂着花卉版画的明亮楼梯平台", "꽃 판화가 걸린 밝은 층계참"),
  p("/photos/b-entrance.jpg", "Private entrance hall", "専用の玄関ホール", "独立的玄关", "전용 현관 홀"),
  p("/photos/b-genkan.jpg", "Genkan, shoe cupboard, and front door", "玄関、靴箱、玄関ドア", "玄关、鞋柜与大门", "현관, 신발장, 현관문"),
  p("/photos/b-stairs.jpg", "Stairs up to the second floor", "2階へ上がる階段", "通往二楼的楼梯", "2층으로 올라가는 계단"),
  p("/photos/b-lucky-cat.jpg", "The lucky cat that welcomes you in", "出迎える招き猫", "迎客的招财猫", "맞이하는 마네키네코"),
  p("/photos/b-art.jpg", "Flower print in the hall", "廊下の花の版画", "走廊里的花卉版画", "복도의 꽃 판화"),
  p("/photos/b-lamp-art.jpg", "Reading lamp and framed print", "スタンドライトと額装の版画", "落地灯与装框版画", "스탠드 조명과 액자"),
  p("/photos/b-sofa-detail.jpg", "Soft toys on the sofa", "ソファのぬいぐるみ", "沙发上的毛绒玩具", "소파 위의 인형"),
  p("/photos/b-cushions.jpg", "Cushions on the grey sofa", "グレーのソファとクッション", "灰色沙发上的靠垫", "회색 소파의 쿠션"),
  p("/photos/b-shelf.jpg", "Display shelf in the living room", "居間の飾り棚", "起居室的展示架", "거실의 장식 선반"),
  p("/photos/b-lion.jpg", "A crowned lion by the window", "窓辺の王冠のライオン", "窗边戴王冠的狮子", "창가의 왕관 쓴 사자"),
  p("/photos/b-lamp.jpg", "Paper floor lamp", "紙のフロアランプ", "纸质落地灯", "종이 플로어 램프"),
  p("/photos/b-magazines.jpg", "Magazines and picture books on the wall shelf", "壁の棚の雑誌と絵本", "墙架上的杂志与绘本", "벽 선반의 잡지와 그림책"),
  p("/photos/b-reading-corner.jpg", "Reading corner with a floor lamp", "フロアランプのある読書コーナー", "带落地灯的阅读角", "플로어 램프가 있는 독서 코너"),
  p("/photos/b-dining-window.jpg", "Window ledge by the dining table", "ダイニング横の窓辺", "餐桌旁的窗台", "식탁 옆 창가"),
  p("/photos/b-ornaments.jpg", "Seasonal decorations", "季節の飾り", "节日装饰", "계절 장식"),
  p("/photos/b-cooktop.jpg", "Three-zone induction hob", "3口のIHコンロ", "三眼电磁炉", "3구 인덕션"),
  p("/photos/b-oven.jpg", "Microwave oven", "オーブンレンジ", "微波烤箱", "오븐 전자레인지"),
  p("/photos/b-rice-cooker.jpg", "Rice cooker", "炊飯器", "电饭煲", "밥솥"),
  p("/photos/b-utensils.jpg", "Ladles, spatulas, and tongs", "おたま、フライ返し、トング", "汤勺、锅铲与夹子", "국자, 뒤집개, 집게"),
  p("/photos/b-utensils-2.jpg", "Measuring cups, peeler, and scissors", "計量カップ、ピーラー、キッチンばさみ", "量杯、削皮器与剪刀", "계량컵, 필러, 가위"),
  p("/photos/b-utensils-3.jpg", "Kitchen tools in the drawer", "引き出しの調理道具", "抽屉里的厨具", "서랍 속 조리도구"),
  p("/photos/b-knives.jpg", "Knives and cutting board", "包丁とまな板", "刀具与砧板", "칼과 도마"),
  p("/photos/b-bowls.jpg", "Mixing bowls and strainer", "ボウルとざる", "料理碗与滤网", "볼과 체"),
  p("/photos/b-pans.jpg", "Frying pans and saucepans", "フライパンと片手鍋", "平底锅与小汤锅", "프라이팬과 냄비"),
  p("/photos/b-pots.jpg", "Pots and an oven dish", "鍋と耐熱皿", "锅具与烤盘", "냄비와 오븐 그릇"),
  p("/photos/b-glasses.jpg", "Wine glasses, tumblers, and bowls", "ワイングラス、タンブラー、器", "红酒杯、玻璃杯与碗", "와인잔, 텀블러, 그릇"),
  p("/photos/b-cutlery.jpg", "Cutlery drawer", "カトラリーの引き出し", "餐具抽屉", "커트러리 서랍"),
  p("/photos/b-plates.jpg", "Plates for everyone", "人数分のお皿", "足够的餐盘", "인원수만큼의 접시"),
  ...housePhotos,
];
