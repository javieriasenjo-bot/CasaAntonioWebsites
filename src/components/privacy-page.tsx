import { Shell } from "@/components/chrome";
import { useLang, type Lang } from "@/lib/i18n";

const PRIVACY: Record<Lang, { eyebrow: string; title: string; lede: string; blocks: { h: string; p: string[] }[] }> = {
  en: {
    eyebrow: "This site",
    title: "What the site keeps.",
    lede: "Casa Antonio does not take the booking or the payment. Dates, the total, and payment stay on Airbnb.",
    blocks: [
      {
        h: "Language",
        p: [
          "Choosing a language saves that choice in this browser, under the name casa-antonio-lang. Closing the language reminder is kept for that visit only. Neither is a form, and neither is a guest list.",
        ],
      },
      {
        h: "Measurement",
        p: [
          "We use Google Analytics through Google Tag Manager to understand how visitors use this website. Google Analytics may set cookies. We measure booking-link clicks, Airbnb and Booking.com review-link clicks, long-stay enquiries, map links and language changes, including the apartment, page language and link destination. These clicks and enquiries are not completed reservations. No booking or payment details are collected through a form here.",
        ],
      },
      {
        h: "Maps, and leaving the site",
        p: [
          "The neighborhood page embeds a map from OpenStreetMap. Other map links open Google Maps. Airbnb, Booking.com and Kojohama Cabins are other sites, with their own policies.",
        ],
      },
      {
        h: "What is not here",
        p: [
          "There is no account and no message form on this site. Door codes are not published here. They are sent through Airbnb after a booking.",
        ],
      },
    ],
  },
  ja: {
    eyebrow: "このサイト",
    title: "サイトが覚えること。",
    lede: "Casa Antonio では予約も支払いも受けません。日程、合計、支払いはAirbnbです。",
    blocks: [
      {
        h: "言語",
        p: [
          "言語を選ぶと、このブラウザに casa-antonio-lang という名前で残します。言語の案内を閉じたことは、その閲覧のあいだだけです。どちらもフォームではなく、宿泊者名簿でもありません。",
        ],
      },
      {
        h: "計測",
        p: [
          "Googleタグマネージャーを通じてGoogleアナリティクスを利用し、サイトの使われ方を確認しています。GoogleアナリティクスはCookieを使用することがあります。予約リンク、Airbnb・Booking.comのレビュー、長期滞在の問い合わせ、地図、言語変更のクリックを、部屋・ページの言語・リンク先などとともに計測します。クリックや問い合わせは予約成立を意味しません。このサイトのフォームで予約情報や決済情報を収集することはありません。",
        ],
      },
      {
        h: "地図と、サイトの外",
        p: [
          "周辺のページにはOpenStreetMapの地図があります。ほかの地図リンクはGoogleマップを開きます。Airbnb、Booking.com、Kojohama Cabinsは別のサイトで、それぞれの方針があります。",
        ],
      },
      {
        h: "ここにはないもの",
        p: ["このサイトにアカウントも、メッセージ欄もありません。扉の番号は載せません。予約のあと、Airbnbで届きます。"],
      },
    ],
  },
  zh: {
    eyebrow: "本站",
    title: "网站记住什么。",
    lede: "Casa Antonio 不接受预订，也不收款。日期、总价和付款都在 Airbnb。",
    blocks: [
      {
        h: "语言",
        p: [
          "选择语言后，会以 casa-antonio-lang 存在这台浏览器里。关掉语言提示只在这一次浏览里有效。两者都不是表单，也不是客人名单。",
        ],
      },
      {
        h: "统计",
        p: [
          "我们通过 Google Tag Manager 使用 Google Analytics，了解访客如何使用网站。Google Analytics 可能使用 Cookie。统计包括预订链接、Airbnb 和 Booking.com 评价链接、长住咨询、地图和语言切换的点击，以及公寓、页面语言和链接目标。这些点击和咨询不代表已完成预订。本站不通过表单收集预订或付款信息。",
        ],
      },
      {
        h: "地图，以及离开本站",
        p: ["家附近的页面嵌入 OpenStreetMap。其他地图链接打开 Google 地图。Airbnb、Booking.com 和 Kojohama Cabins 是别的网站，各有自己的规则。"],
      },
      {
        h: "这里没有的",
        p: ["本站没有账户，也没有留言表。门锁密码不印在这里。预订之后通过 Airbnb 发送。"],
      },
    ],
  },
  ko: {
    eyebrow: "이 사이트",
    title: "사이트가 기억하는 것.",
    lede: "Casa Antonio는 예약도 결제도 받지 않습니다. 날짜, 합계, 결제는 Airbnb에 있습니다.",
    blocks: [
      {
        h: "언어",
        p: [
          "언어를 고르면 이 브라우저에 casa-antonio-lang 이라는 이름으로 남습니다. 언어 안내를 닫은 것은 그 방문 동안만입니다. 둘 다 양식이 아니고, 투숙객 명단도 아닙니다.",
        ],
      },
      {
        h: "측정",
        p: [
          "Google 태그 매니저를 통해 Google 애널리틱스를 사용하여 방문자의 사이트 이용을 파악합니다. Google 애널리틱스는 쿠키를 사용할 수 있습니다. 예약 링크, Airbnb 및 Booking.com 후기 링크, 장기 숙박 문의, 지도와 언어 변경 클릭을 아파트, 페이지 언어, 링크 목적지 등의 정보와 함께 측정합니다. 클릭이나 문의는 예약 완료를 의미하지 않습니다. 이 사이트의 양식으로 예약 또는 결제 정보를 수집하지 않습니다.",
        ],
      },
      {
        h: "지도, 그리고 사이트 밖",
        p: [
          "집 근처 페이지에는 OpenStreetMap이 있습니다. 다른 지도 링크는 Google 지도를 엽니다. Airbnb, Booking.com, Kojohama Cabins는 다른 사이트이고, 각자의 방침이 있습니다.",
        ],
      },
      {
        h: "여기에 없는 것",
        p: ["이 사이트에 계정도, 메시지 칸도 없습니다. 문 번호는 올리지 않습니다. 예약 뒤에 Airbnb로 옵니다."],
      },
    ],
  },
};

export function PrivacyPage() {
  const { lang } = useLang();
  const page = PRIVACY[lang];
  return (
    <Shell>
      <section className="page-intro">
        <div className="wrap narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>
      <section className="stay-body">
        <div className="wrap narrow">
          {page.blocks.map((block) => (
            <div key={block.h} className="prose">
              <h2>{block.h}</h2>
              {block.p.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
