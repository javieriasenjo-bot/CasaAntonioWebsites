import { useLang, type Lang } from "@/lib/i18n";
import { TRAVEL_FACTS } from "@/data/travel-facts";

// Official sources behind the practical guides. URLs were opened and verified;
// day-trip additions were checked on 7 October 2026.
type L = { label: Record<Lang, string>; href: string };

const T = (en: string, ja: string, zh: string, ko: string): Record<Lang, string> => ({ en, ja, zh, ko });

export const OFFICIAL = {
  access: [
    { label: T("Chuo Bus: airport to Asabu timetable", "中央バス：新千歳空港→麻生の時刻表", "中央巴士：新千岁机场→麻生时刻表", "주오버스: 신치토세공항→아사부 시간표"), href: TRAVEL_FACTS.airportBus.toAsabu },
    { label: T("Airport bus routes and return services", "空港バス路線・空港行きの案内", "机场巴士路线及返程信息", "공항버스 노선 및 공항행 안내"), href: TRAVEL_FACTS.airportBus.overview },
    { label: T("JR Hokkaido: New Chitose Airport trains", "JR北海道：新千歳空港アクセス", "JR北海道：新千岁机场列车", "JR홋카이도: 신치토세공항 열차"), href: "https://www.jrhokkaido.co.jp/airport/index.html" },
  ],
  snow: [
    { label: T("Sapporo Snow Festival: official site", "さっぽろ雪まつり公式サイト", "札幌雪祭官方网站", "삿포로 눈축제 공식 사이트"), href: "https://www.snowfes.com/en/" },
  ],
  teine: [
    { label: T("Sapporo Teine ski resort: official site", "サッポロテイネ公式サイト", "札幌手稻滑雪场官方网站", "삿포로 테이네 스키장 공식 사이트"), href: "https://sapporo-teine.com/" },
    { label: T("Hokkaido Chuo Bus", "北海道中央バス", "北海道中央巴士", "홋카이도 주오버스"), href: "https://www.chuo-bus.co.jp/" },
  ],
  shiraoi: [
    { label: T("Upopoy: tickets and prices", "ウポポイ：入場料金", "Upopoy：门票与价格", "우포포이: 입장권 및 요금"), href: TRAVEL_FACTS.upopoy.source },
    { label: T("Upopoy: hours and closing days", "ウポポイ：開園時間・休園日", "Upopoy：开放时间与休园日", "우포포이: 운영 시간 및 휴관일"), href: "https://ainu-upopoy.go.jp/en/guide/hours/" },
  ],
} satisfies Record<string, L[]>;

export const DAY_TRIP_OFFICIAL: Record<string, L[]> = {
  otaru: [
    { label: T("Otaru Tourism Association (Japanese)", "小樽観光協会", "小樽观光协会（日文）", "오타루 관광협회 (일본어)"), href: "https://otaru.gr.jp/" },
    { label: T("Otaru Aquarium: visitor information (Japanese)", "おたる水族館：ご利用案内", "小樽水族馆：参观信息（日文）", "오타루 수족관: 관람 안내 (일본어)"), href: "https://otaru-aq.jp/guide" },
    { label: T("Sakaimachi shopping street (Japanese)", "小樽堺町通り商店街", "小樽堺町商店街（日文）", "오타루 사카이마치 상점가 (일본어)"), href: "https://otaru-sakaimachi.com/" },
  ],
  noboribetsu: [
    { label: T("Noboribetsu: official tourism information", "登別：公式観光情報", "登别：官方旅游信息", "노보리베쓰: 공식 관광 안내"), href: "https://noboribetsu-spa.jp/en/" },
  ],
  jozankei: [
    { label: T("Jozankei: official tourism and access information", "定山渓：公式観光・アクセス情報", "定山溪：官方旅游及交通信息", "조잔케이: 공식 관광 및 교통 안내"), href: "https://jozankei.jp/en/" },
  ],
  furano: [
    { label: T("Farm Tomita: official visitor information", "ファーム富田：公式案内", "富田农场：官方参观信息", "팜 도미타: 공식 방문 안내"), href: "https://farm-tomita.co.jp/en/" },
    { label: T("Biei Tourism Association", "美瑛町観光協会", "美瑛町观光协会", "비에이 관광협회"), href: "https://www.biei-hokkaido.jp/en/" },
  ],
  buddha: [
    { label: T("Hill of the Buddha: hours, admission and notices", "頭大仏殿：拝観時間・料金・お知らせ", "头大佛：开放时间、门票及公告", "머리 대불: 관람 시간, 요금 및 공지"), href: "https://www.takinoreien.com/pages/108/" },
  ],
  toya: [
    { label: T("Lake Toya: official tourism and access information", "洞爺湖：公式観光・アクセス情報", "洞爷湖：官方旅游及交通信息", "도야호: 공식 관광 및 교통 안내"), href: "https://www.laketoya.com/en/" },
  ],
  teine: OFFICIAL.teine,
  shiraoi: OFFICIAL.shiraoi,
};

const TITLE = T("Official information", "公式情報", "官方信息", "공식 정보");

export function OfficialLinks({ items }: { items: L[] }) {
  const { lang } = useLang();
  return (
    <div className="official-links">
      <h2>{TITLE[lang]}</h2>
      <ul className="plain-list">
        {items.map((item) => (
          <li key={item.href}>
            <a className="text-link" href={item.href} target="_blank" rel="noopener">
              {item.label[lang]} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
