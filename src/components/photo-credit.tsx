import { DESTINATION_PHOTO_SOURCES } from "@/data/photo-provenance";
import type { Lang } from "@/lib/i18n";

const sourceLabels: Record<Lang, string> = {
  en: "Original photo", ja: "元の写真", zh: "原始照片", ko: "원본 사진",
};
const changeLabels: Record<Lang, string> = {
  en: "Resized and converted for web display.",
  ja: "ウェブ表示用にサイズ・形式を変更。",
  zh: "已调整尺寸并转换格式用于网页显示。",
  ko: "웹 표시를 위해 크기와 형식을 변경했습니다.",
};

export function PhotoCredit({ text, src, lang }: { text: string; src: string; lang: Lang }) {
  const match = text.match(/CC BY-SA 4\.0|CC BY 2\.5|CC BY 2\.0|CC0/);
  const links: Record<string, string> = {
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
    "CC BY 2.5": "https://creativecommons.org/licenses/by/2.5/",
    "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
    CC0: "https://creativecommons.org/publicdomain/zero/1.0/",
  };
  const source = DESTINATION_PHOTO_SOURCES[src];
  return <>
    {match && match.index !== undefined
      ? <>{text.slice(0, match.index)}<a href={links[match[0]]} target="_blank" rel="noreferrer">{match[0]}</a>{text.slice(match.index + match[0].length)}</>
      : text}
    {source && <> {" · "}<a href={source} target="_blank" rel="noreferrer">{sourceLabels[lang]}</a>. {changeLabels[lang]}</>}
  </>;
}
