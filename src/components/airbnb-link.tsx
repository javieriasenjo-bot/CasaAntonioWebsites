import type { ReactNode } from "react";
import { airbnbUrl } from "@/data/links";
import type { Cabin } from "@/lib/analytics";
import { useLang } from "@/lib/i18n";

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
  const { lang } = useLang();
  return (
    <a
      className={className}
      data-intent={intent}
      data-property={cabin}
      data-placement={location}
      href={airbnbUrl(cabin, lang)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
