import type { ReactNode } from "react";
import { AIRBNB } from "@/data/facts";
import type { Cabin } from "@/lib/analytics";

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
      data-link-location={location}
    >
      {children}
    </a>
  );
}
