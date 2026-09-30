import type { ReactNode } from "react";
import { AIRBNB } from "@/data/content";
import { trackAirbnbClick, type Cabin } from "@/lib/analytics";

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
      onClick={() => trackAirbnbClick(cabin, href, location)}
    >
      {children}
    </a>
  );
}
