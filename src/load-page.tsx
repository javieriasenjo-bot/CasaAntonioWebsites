import type { ComponentType } from "react";
import type { PageId } from "./lib/paths";

// Shared by browser and prerenderer: load only the page being visited.
export async function loadPage(page: PageId | null): Promise<ComponentType> {
  switch (page) {
    case "home": return (await import("./components/home-page")).Home;
    case "a": {
      const { StayView } = await import("./components/stay-view");
      return function ApartmentA() { return <StayView id="a" />; };
    }
    case "b": {
      const { StayView } = await import("./components/stay-view");
      return function ApartmentB() { return <StayView id="b" />; };
    }
    case "neighborhood": return (await import("./components/neighborhood-page")).Neighborhood;
    case "day-trips": return (await import("./components/day-trips-page")).DayTrips;
    case "arrival": return (await import("./components/arrival-page")).Arrival;
    case "privacy": return (await import("./components/privacy-page")).PrivacyPage;
    default: {
      const guides = await import("./components/guide-view");
      switch (page) {
        case "access": return guides.AccessPage;
        case "snow-festival": return guides.SnowPage;
        case "teine-ski": return guides.TeinePage;
        case "long-stay": return guides.LongStayPage;
        case "combo": return guides.ComboPage;
        case "faq": return guides.FaqPage;
        default: return guides.NotFoundPage;
      }
    }
  }
}
