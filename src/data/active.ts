import type { copy as EnCopy } from "./packs/en";
import type { guides as EnGuides } from "./packs/en";

export type HouseCopy = typeof EnCopy;
export type HouseGuides = typeof EnGuides;

type Pack = { copy: HouseCopy; guides: HouseGuides };

let current: Pack | null = null;

export function installPack(pack: Pack) {
  current = pack;
}

export function house(): Pack {
  if (!current) throw new Error("Language pack is not loaded");
  return current;
}
