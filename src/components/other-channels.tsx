import { BOOKING_COM, tripUrl } from "@/data/links";
import { useLang, type Lang } from "@/lib/i18n";

// Booking.com and Trip.com each carry one combined listing for both apartments.
// The early analytics bootstrap reads these data attributes (event: channel_click).
const COPY: Record<Lang, { lead: string; trip: string }> = {
  en: { lead: "Both apartments are also bookable on", trip: "Trip.com" },
  ja: { lead: "どちらの部屋も次のサイトでご予約いただけます:", trip: "Trip.com" },
  zh: { lead: "两间公寓也可以在以下平台预订：", trip: "携程 Trip.com" },
  ko: { lead: "두 객실 모두 아래 사이트에서도 예약하실 수 있습니다:", trip: "Trip.com" },
};

export function ChannelLink({ channel, location, className, children }: {
  channel: "booking" | "trip";
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  return (
    <a
      className={className}
      data-intent="booking"
      data-property="both"
      data-placement={location}
      href={channel === "booking" ? BOOKING_COM : tripUrl(lang)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export function OtherChannels({ location, className = "channels-note" }: { location: string; className?: string }) {
  const { lang } = useLang();
  const c = COPY[lang];
  return (
    <p className={className}>
      {c.lead}{" "}
      <ChannelLink channel="booking" location={location}>Booking.com</ChannelLink>
      {lang === "ja" || lang === "zh" ? "・" : " · "}
      <ChannelLink channel="trip" location={location}>{c.trip}</ChannelLink>
    </p>
  );
}
