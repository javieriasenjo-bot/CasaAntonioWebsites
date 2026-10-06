import type { Lang } from "@/lib/paths";
export const ROOM_LABELS = {
  all: { en: "All rooms", ja: "すべて", zh: "全部", ko: "전체" },
  living: { en: "Living & dining", ja: "居間・ダイニング", zh: "起居与用餐", ko: "거실·식사 공간" },
  bedrooms: { en: "Bedrooms", ja: "寝室", zh: "卧室", ko: "침실" },
  kitchen: { en: "Kitchen", ja: "キッチン", zh: "厨房", ko: "주방" },
  bath: { en: "Bath & laundry", ja: "浴室・洗濯", zh: "浴室与洗衣", ko: "욕실·세탁" },
  entrance: { en: "Entrance & parking", ja: "玄関・駐車場", zh: "入口与停车", ko: "현관·주차" },
  details: { en: "Other details", ja: "その他", zh: "其他细节", ko: "기타" },
} satisfies Record<string, Record<Lang, string>>;
export type PhotoCategory = Exclude<keyof typeof ROOM_LABELS, "all">;
export function photoCategory(src: string): PhotoCategory {
  const stem = src.split("/").pop() || src;
  if (/bedroom/.test(stem)) return "bedrooms";
  if (/bath|washroom|washer|basin|toilet|shelves/.test(stem)) return "bath";
  if (/exterior|entrance|entrances|entry|genkan|street|stairs|hall|corridor/.test(stem)) return "entrance";
  if (/living|sofa|dining|projector|tv|counter-seats/.test(stem)) return "living";
  if (/kitchen|cooktop|utensil|knife|glass|cup|bowl|plate|microwave|toaster|kettle|fridge|faucet/.test(stem)) return "kitchen";
  return "details";
}
