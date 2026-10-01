import type { Lang, PageId } from "@/lib/paths";
import type { GuideCopy } from "./guides";

export const guideFooter = (lang: Lang): GuideCopy["footerLinks"] => [
  { page: "access", label: lang === "ja" ? "空港から" : lang === "zh" ? "从机场" : lang === "ko" ? "공항에서" : "From the airport" },
  { page: "snow-festival", label: lang === "ja" ? "雪まつり" : lang === "zh" ? "雪祭" : lang === "ko" ? "눈축제" : "Snow Festival" },
  { page: "teine-ski", label: lang === "ja" ? "サッポロテイネ" : lang === "zh" ? "札幌手稻" : lang === "ko" ? "삿포로 데이네" : "Sapporo Teine" },
  { page: "long-stay", label: lang === "ja" ? "長期滞在" : lang === "zh" ? "长期住宿" : lang === "ko" ? "장기 숙박" : "Long stays" },
  { page: "combo", label: lang === "ja" ? "札幌と白老" : lang === "zh" ? "札幌与白老" : lang === "ko" ? "삿포로와 시라오이" : "Sapporo and the coast" },
  { page: "faq", label: lang === "ja" ? "質問" : lang === "zh" ? "问题" : lang === "ko" ? "질문" : "Questions" },
  { page: "privacy", label: lang === "ja" ? "プライバシー" : lang === "zh" ? "隐私" : lang === "ko" ? "개인정보" : "Privacy" },
];

