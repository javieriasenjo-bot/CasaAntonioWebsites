import { AccessPage, ComboPage, FaqPage, LongStayPage, SnowPage, TeinePage } from "@/components/guide-view";
import { PrivacyPage } from "@/components/privacy-page";
import { StayView } from "@/components/stay-view";
import { Arrival } from "@/components/arrival-page";
import { DayTrips } from "@/components/day-trips-page";
import { Home } from "@/components/home-page";
import { Neighborhood } from "@/components/neighborhood-page";
import type { PageId } from "@/lib/paths";

export function RenderPage({ page }: { page: PageId }) {
  switch (page) {
    case "home":
      return <Home />;
    case "a":
      return <StayView id="a" />;
    case "b":
      return <StayView id="b" />;
    case "neighborhood":
      return <Neighborhood />;
    case "day-trips":
      return <DayTrips />;
    case "arrival":
      return <Arrival />;
    case "access":
      return <AccessPage />;
    case "snow-festival":
      return <SnowPage />;
    case "teine-ski":
      return <TeinePage />;
    case "long-stay":
      return <LongStayPage />;
    case "combo":
      return <ComboPage />;
    case "faq":
      return <FaqPage />;
    case "privacy":
      return <PrivacyPage />;
    default:
      return null;
  }
}
