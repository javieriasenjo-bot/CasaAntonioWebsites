import { house } from "@/data/active";
import { useState } from "react";

export const GUEST_EMAIL = "admin@kagami-planning.com";

export function EmailLink({ placement, longStay = false, className }: { placement: string; longStay?: boolean; className?: string }) {
  const copy = house().copy.ui.email;
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const subject = `Casa Antonio · ${longStay ? copy.longStay : copy.label}`;
  const href = `mailto:${GUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(copy.body)}`;
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(GUEST_EMAIL);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  };
  return (
    <span className="email-actions">
      <a href={href} data-placement={placement} className={className}>
        {longStay ? copy.longStay : `${copy.label}: ${GUEST_EMAIL}`}
      </a>
      <button type="button" className="copy-email" onClick={copyEmail}>{copy.copy}</button>
      <span role="status" className={status === "manual" ? "email-copy-manual" : "sr-only"}>
        {status === "copied" ? copy.copied : status === "manual" ? `${copy.manual} ${GUEST_EMAIL}` : ""}
      </span>
    </span>
  );
}
