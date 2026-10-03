import type { ReactNode } from "react";
import { AIRBNB } from "@/data/facts";
import type { Cabin } from "@/lib/analytics";

// Airbnb clicks are tracked only by the Tag Manager click listener (no site-side dataLayer push).
// `location` is kept so call sites stay unchanged; it is not used for tracking any more.
export function AirbnbLink({
  cabin,
  location,
  className,
  children,
}: {
  cabin: Cabin;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  const href = cabin === "a" ? AIRBNB.a : AIRBNB.b;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
