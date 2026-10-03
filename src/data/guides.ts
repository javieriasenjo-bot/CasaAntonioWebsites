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
  points: { home: string[]; a: string[]; b: string[] };
  combo: { eyebrow: string; title: string; lede: string; blocks: Block[] };
  access: { eyebrow: string; title: string; lede: string; blocks: Block[]; facts: { k: string; v: string }[] };
  snow: { eyebrow: string; title: string; lede: string; blocks: Block[] };
  teine: { eyebrow: string; title: string; lede: string; blocks: Block[]; credit: string };
  notFoundTitle: string;
  notFoundBody: string;
};
