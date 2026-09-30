export type Cabin = "a" | "b";

const CABIN_NAME: Record<Cabin, string> = {
  a: "Casa Antonio A",
  b: "Casa Antonio B",
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function push(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackAirbnbClick(cabin: Cabin, href: string, linkLocation: string) {
  push({
    event: "airbnb_click",
    property_id: cabin === "a" ? "casa_antonio_a" : "casa_antonio_b",
    cabin_name: CABIN_NAME[cabin],
    destination_url: href,
    page_language: document.documentElement.lang,
    page_path: location.pathname,
    link_location: linkLocation,
  });
}

export function trackLanguageChange(next: string, destinationHref: string) {
  push({
    event: "language_change",
    selected_language: next,
    source_url: location.href,
    destination_url: destinationHref,
  });
}

export function trackMapClick(provider: "google" | "openstreetmap") {
  push({
    event: "map_click",
    map_provider: provider,
    page_language: document.documentElement.lang,
    page_path: location.pathname,
  });
}
