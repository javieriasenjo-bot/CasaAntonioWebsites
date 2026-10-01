import type { Lang } from "@/lib/paths";
import { installPack } from "./active";

export async function loadPack(lang: Lang) {
  const pack =
    lang === "ja"
      ? await import("./packs/ja")
      : lang === "zh"
        ? await import("./packs/zh")
        : lang === "ko"
          ? await import("./packs/ko")
          : await import("./packs/en");
  installPack(pack);
}
