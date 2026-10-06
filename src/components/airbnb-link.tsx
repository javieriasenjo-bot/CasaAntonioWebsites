import type { ReactNode } from "react";
import { AIRBNB } from "@/data/facts";
import type { Cabin } from "@/lib/analytics";

// The early analytics bootstrap captures these attributes, including before hydration.
// GTM consumes the queued events; do not add another DOM click producer.
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
  intent?: "booking" | "reviews" | "inquiry";
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
