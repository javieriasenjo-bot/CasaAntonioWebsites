import type { Lang } from "@/lib/paths";

// Short selling points shown as chips under the home hero.
export const highlights: Record<Lang, string[]> = {
  en: ["5 min walk to Asabu Station", "Parking at the door", "Full kitchen and washer", "70–100 m² apartments", "Self check-in, private entrance"],
  ja: ["麻生駅まで徒歩5分", "玄関前に駐車スペース", "キッチン・洗濯機付き", "70〜100㎡の広さ", "セルフチェックイン・専用入口"],
  zh: ["步行5分钟到麻生站", "门前停车位", "完整厨房与洗衣机", "70–100㎡ 宽敞空间", "自助入住 · 独立入口"],
  ko: ["아사부역 도보 5분", "집 앞 주차 공간", "주방·세탁기 완비", "70~100㎡ 넓은 공간", "셀프 체크인·전용 입구"],
};

export const reviewLabels: Record<Lang, { title: string; on: string; reviews: string }> = {
  en: { title: "What guests say", on: "on Airbnb", reviews: "reviews" },
  ja: { title: "ゲストの声", on: "Airbnbでの評価", reviews: "件のレビュー" },
  zh: { title: "住客评价", on: "Airbnb 评分", reviews: "条评价" },
  ko: { title: "게스트 후기", on: "Airbnb 평점", reviews: "개의 후기" },
};
