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
  p("/photos/bedroom.jpg", "Bedroom with three beds", "ベッド3台の寝室", "三张床的卧室", "침대 세 개의 침실"),
  p("/photos/bedroom-2.jpg", "The three beds from the window side", "窓側から見た3台のベッド", "从窗边看三张床", "창가에서 본 침대 세 개"),
  p("/photos/bedroom-3.jpg", "Beds, closet, and the bedroom window", "ベッドとクローゼット、寝室の窓", "床、衣柜与卧室的窗", "침대, 옷장, 침실 창"),
  p("/photos/hall.jpg", "Hall closet and the way through the apartment", "廊下の収納と部屋の奥", "走廊储物与房间深处", "복도 수납과 집 안쪽"),
  ...housePhotos,
];
