import type { ReactNode } from "react";
import { AIRBNB } from "@/data/facts";
import type { Cabin } from "@/lib/analytics";

// Airbnb clicks are tracked only by the Tag Manager click listener (no site-side dataLayer push).
// The link carries data-intent / data-property / data-placement so that single listener can classify
// booking clicks apart from review-reading clicks. Do not add a site-side push (it would duplicate events).
export function AirbnbLink({
  cabin,
  location,
  className,
  intent = "booking",
  children,
}: {
  cabin: Cabin;
  location: string;
  className?: string;
  intent?: "booking" | "reviews";
  children: ReactNode;
}) {
  const href = cabin === "a" ? AIRBNB.a : AIRBNB.b;
  return (
    <a
      className={className}
      data-intent={intent}
      data-property={cabin}
      data-placement={location}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
