import type { ReactNode } from "react";
import { airhostUrl } from "@/data/links";
import type { Cabin } from "@/lib/analytics";
import { useLang } from "@/lib/i18n";

// Every booking / availability / enquiry button on the site is this one link to the Airhost booking engine.
// The early analytics bootstrap captures these attributes, including before hydration.
// GTM consumes the queued events; do not add another DOM click producer.
export function BookLink({
  cabin = "both",
  location,
  className,
  intent = "booking",
  children,
}: {
  cabin?: Cabin;
  location: string;
  className?: string;
  intent?: "booking" | "inquiry";
  children: ReactNode;
}) {
  const { lang } = useLang();
  return (
    <a
      className={className}
      data-intent={intent}
      data-property={cabin}
      data-placement={location}
      href={airhostUrl(lang)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
