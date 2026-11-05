// Admission verified 6 October 2026. Upopoy winter hours/closures and the airport-bus
// timetable re-verified against the official pages on 4 November 2026.
// validUntil: "2027-03-31" — Upopoy winter hours (upopoyHoursText) are only correct through this date.
// tests/fact-expirations.test.mjs fails once any validUntil marker in src/data has passed.
import type { Lang } from "@/lib/paths";

export const TRAVEL_FACTS = {
  checkedOn: "2026-10-06",
  upopoy: {
    adultGateJPY: 1200, adultOnlineJPY: 1000,
    studentGateJPY: 600, studentOnlineJPY: 400,
    source: "https://ainu-upopoy.go.jp/en/guide/admission/",
    hoursSource: "https://ainu-upopoy.go.jp/en/guide/hours/",
    hoursCheckedOn: "2026-11-04",
  },
  airportBus: {
    anaStand: 20, jalStand: 13, internationalStand: 84,
    toAsabu: "https://www.chuo-bus.co.jp/airport/timetable/?n=36&o=2&ope=det&t=14",
    overview: "https://www.chuo-bus.co.jp/airport/",
    timetableCheckedOn: "2026-11-04",
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

// Winter season, 1 November 2026 – 31 March 2027 (official hours page, checked 4 November 2026).
export function upopoyHoursText(lang: Lang) {
  return {
    en: "From 1 November 2026 to 31 March 2027 the official hours are 9:00–17:00 (9:00–18:00 from April to October). It is closed on Mondays, or the next weekday when Monday is a holiday, and also from 28 December to 4 January and from 27 February to 8 March. Last entry is one hour before closing; the museum building takes visitors until 30 minutes before closing.",
    ja: "2026年11月1日から2027年3月31日までの開園時間は9:00–17:00です（4月〜10月は9:00–18:00）。月曜休園で、月曜が祝日の場合は翌平日が休園です。12月28日〜1月4日と、2月27日〜3月8日も休園します。入場は閉園の1時間前まで、博物館への入館は閉園の30分前までです。",
    zh: "2026年11月1日至2027年3月31日，官方开放时间为 9:00–17:00（4月至10月为 9:00–18:00）。周一闭园；周一为节假日时，改为下一个工作日闭园。12月28日至1月4日、2月27日至3月8日也闭园。最晚入园为闭园前一小时，博物馆最晚入馆为闭园前30分钟。",
    ko: "2026년 11월 1일부터 2027년 3월 31일까지 공식 운영 시간은 9:00–17:00입니다(4~10월은 9:00–18:00). 월요일은 휴원하며, 월요일이 공휴일이면 다음 평일에 쉽니다. 12월 28일~1월 4일, 2월 27일~3월 8일에도 휴원합니다. 입장은 폐원 1시간 전까지, 박물관 입관은 폐원 30분 전까지입니다.",
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
