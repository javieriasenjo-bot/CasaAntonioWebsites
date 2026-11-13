export type Cabin = "a" | "b" | "both";

// Events are produced by scripts/analytics-bootstrap.js before hydration.
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
