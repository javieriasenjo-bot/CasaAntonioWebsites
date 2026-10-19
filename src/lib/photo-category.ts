// Labels live in each language pack (copy.ui.gallery.rooms).
export const ROOM_KEYS = ["all", "living", "bedrooms", "kitchen", "bath", "entrance", "details"] as const;
export type RoomKey = (typeof ROOM_KEYS)[number];
export type PhotoCategory = Exclude<RoomKey, "all">;
export function photoCategory(src: string): PhotoCategory {
  const stem = src.split("/").pop() || src;
  if (/bedroom/.test(stem)) return "bedrooms";
  if (/bath|washroom|washer|basin|toilet|shelves/.test(stem)) return "bath";
  if (/exterior|entrance|entrances|entry|genkan|street|stairs|hall|corridor/.test(stem)) return "entrance";
  if (/living|sofa|dining|projector|tv|counter-seats|^open\./.test(stem)) return "living";
  if (/kitchen|cooktop|utensil|knife|glass|cup|bowl|plate|microwave|toaster|kettle|fridge|faucet/.test(stem)) return "kitchen";
  return "details";
}
