export type Cabin = "a" | "b";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function push(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

// airbnb_click is pushed by the GTM click listener (GTM-T8TLRH4L), which covers
// every Airbnb link on the site. Do not push it here too, or each booking click
// is counted twice in GA4.

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
