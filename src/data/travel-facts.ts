// Verified against the official pages on 6 October 2026.
import type { Lang } from "@/lib/paths";

export const TRAVEL_FACTS = {
  checkedOn: "2026-10-06",
  upopoy: {
    adultGateJPY: 1200, adultOnlineJPY: 1000,
    studentGateJPY: 600, studentOnlineJPY: 400,
    source: "https://ainu-upopoy.go.jp/en/guide/admission/",
  },
  airportBus: {
    anaStand: 20, jalStand: 13, internationalStand: 84,
    toAsabu: "https://www.chuo-bus.co.jp/airport/timetable/?n=36&o=2&ope=det&t=14",
    overview: "https://www.chuo-bus.co.jp/airport/",
  },
} as const;

export function upopoyAdmissionText(lang: Lang) {
  const p = TRAVEL_FACTS.upopoy;
  const n = (v: number) => v.toLocaleString("en-US");
  return {
    en: `Adult admission is ¥${n(p.adultGateJPY)} at the gate and ¥${n(p.adultOnlineJPY)} online. High-school students pay ¥${n(p.studentGateJPY)} at the gate and ¥${n(p.studentOnlineJPY)} online. Junior-high students and younger enter free.`,
    ja: `大人は当日${n(p.adultGateJPY)}円、オンライン${n(p.adultOnlineJPY)}円。高校生は当日${n(p.studentGateJPY)}円、オンライン${n(p.studentOnlineJPY)}円。中学生以下は無料です。`,
    zh: `成人现场购票 ${n(p.adultGateJPY)} 日元，网上购票 ${n(p.adultOnlineJPY)} 日元。高中生现场购票 ${n(p.studentGateJPY)} 日元，网上购票 ${n(p.studentOnlineJPY)} 日元。初中生及以下免费。`,
    ko: `성인은 현장 ${n(p.adultGateJPY)}엔, 온라인 ${n(p.adultOnlineJPY)}엔입니다. 고등학생은 현장 ${n(p.studentGateJPY)}엔, 온라인 ${n(p.studentOnlineJPY)}엔이며 중학생 이하는 무료입니다.`,
  }[lang];
}

export function airportBoardingText(lang: Lang) {
  const b = TRAVEL_FACTS.airportBus;
  return {
    en: `At New Chitose Airport, board at ANA stand ${b.anaStand}, JAL stand ${b.jalStand}, or international-terminal stand ${b.internationalStand}. Confirm the current timetable and stop before boarding.`,
    ja: `新千歳空港ではANA前${b.anaStand}番、JAL前${b.jalStand}番、国際線ターミナル${b.internationalStand}番のりばです。乗車前に最新の時刻表と停留所を確認してください。`,
    zh: `新千岁机场乘车地点：ANA 前 ${b.anaStand} 号、JAL 前 ${b.jalStand} 号、国际航站楼 ${b.internationalStand} 号站台。上车前请确认最新时刻表和站点。`,
    ko: `신치토세공항에서는 ANA 앞 ${b.anaStand}번, JAL 앞 ${b.jalStand}번 또는 국제선 터미널 ${b.internationalStand}번 승차장을 이용하세요. 탑승 전에 최신 시간표와 정류장을 확인하세요.`,
  }[lang];
}
