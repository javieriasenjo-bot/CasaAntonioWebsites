import { useLang, type Lang } from "@/lib/i18n";

// Official sources behind the practical guides. Only URLs that were opened and confirmed (4 Oct 2026) belong here.
type L = { label: Record<Lang, string>; href: string };

const T = (en: string, ja: string, zh: string, ko: string): Record<Lang, string> => ({ en, ja, zh, ko });

export const OFFICIAL = {
  access: [
    { label: T("Hokkaido Chuo Bus: airport bus timetable", "北海道中央バス：空港連絡バス時刻表", "北海道中央巴士：机场巴士时刻表", "홋카이도 주오버스: 공항버스 시간표"), href: "https://www.chuo-bus.co.jp/airport/" },
    { label: T("JR Hokkaido: New Chitose Airport trains", "JR北海道：新千歳空港アクセス", "JR北海道：新千岁机场列车", "JR홋카이도: 신치토세공항 열차"), href: "https://www.jrhokkaido.co.jp/airport/index.html" },
    { label: T("Casa Antonio on Google Maps", "Google マップで Casa Antonio を見る", "在 Google 地图中查看 Casa Antonio", "Google 지도에서 Casa Antonio 보기"), href: "https://www.google.com/maps/search/?api=1&query=%E5%8C%97%EF%BC%93%EF%BC%98%E6%9D%A1%E8%A5%BF%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%97+%E6%9C%AD%E5%B9%8C" },
  ],
  snow: [
    { label: T("Sapporo Snow Festival: official site", "さっぽろ雪まつり公式サイト", "札幌雪祭官方网站", "삿포로 눈축제 공식 사이트"), href: "https://www.snowfes.com/en/" },
  ],
  teine: [
    { label: T("Sapporo Teine ski resort: official site", "サッポロテイネ公式サイト", "札幌手稻滑雪场官方网站", "삿포로 테이네 스키장 공식 사이트"), href: "https://sapporo-teine.com/" },
    { label: T("Hokkaido Chuo Bus", "北海道中央バス", "北海道中央巴士", "홋카이도 주오버스"), href: "https://www.chuo-bus.co.jp/" },
  ],
  shiraoi: [
    { label: T("Upopoy: tickets and prices", "ウポポイ：入場料金", "Upopoy：门票与价格", "우포포이: 입장권 및 요금"), href: "https://ainu-upopoy.go.jp/en/guide/admission/" },
    { label: T("Upopoy: hours and closing days", "ウポポイ：開園時間・休園日", "Upopoy：开放时间与休园日", "우포포이: 운영 시간 및 휴관일"), href: "https://ainu-upopoy.go.jp/en/guide/hours/" },
  ],
} satisfies Record<string, L[]>;

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
