export const photoMeta: Record<string, { widths: readonly number[]; width: number; height: number }> = {
  "bath-hall": { widths: [600], width: 600, height: 900 },
  "bedroom": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "bedroom-2": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "bedroom-3": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "biei": { widths: [800, 1600, 1920], width: 1920, height: 1280 },
  "bluepond": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "buddha": { widths: [800, 1600, 1800], width: 1800, height: 1012 },
  "clock": { widths: [800, 1600, 1920], width: 1920, height: 1440 },
  "dining": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "dining-2": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "entry": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "exterior": { widths: [800, 1333], width: 1333, height: 2000 },
  "furano": { widths: [800, 1600], width: 1600, height: 1200 },
  "genkan": { widths: [800, 1280], width: 1280, height: 853 },
  "hall": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "hokudai": { widths: [800, 1600, 1920], width: 1920, height: 1440 },
  "jigoku": { widths: [800, 1600, 1920], width: 1920, height: 1440 },
  "jozankei": { widths: [800, 1600, 1920], width: 1920, height: 1440 },
  "kitchen": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "kitchen-living": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "living": { widths: [800, 1600, 2000], width: 2000, height: 1333 },
  "odori": { widths: [800, 1600, 1920], width: 1920, height: 2560 },
  "open": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "otaru": { widths: [800, 1600, 1800], width: 1800, height: 1205 },
  "otaru-aqua": { widths: [800, 1600, 1920], width: 1920, height: 1440 },
  "sakaimachi": { widths: [800, 1600, 1920], width: 1920, height: 1280 },
  "shukutsu": { widths: [800, 1600, 1920], width: 1920, height: 1282 },
  "sink": { widths: [800, 1280], width: 1280, height: 853 },
  "sofa": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "street": { widths: [800, 1067], width: 1067, height: 1600 },
  "teine": { widths: [800, 1600, 2000], width: 2000, height: 1124 },
  "toya": { widths: [800, 1600, 1800], width: 1800, height: 1200 },
  "upopoy": { widths: [800, 1600, 1920], width: 1920, height: 1080 },
};

export const photoWidths: Record<string, readonly number[]> = Object.fromEntries(
  Object.entries(photoMeta).map(([stem, meta]) => [stem, meta.widths]),
);

export function photoFile(stem: string, width: number, ext: "avif" | "webp") {
  return `/photos/${stem}-${width}.${ext}`;
}