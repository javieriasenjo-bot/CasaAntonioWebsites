import { house } from "@/data/active";

export const GUEST_EMAIL = "admin@kagami-planning.com";

export function EmailLink({ placement, longStay = false, className }: { placement: string; longStay?: boolean; className?: string }) {
  const copy = house().copy.ui.email;
  const subject = `Casa Antonio · ${longStay ? copy.longStay : copy.label}`;
  const href = `mailto:${GUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(copy.body)}`;
  return <a href={href} data-placement={placement} className={className}>
    {longStay ? copy.longStay : `${copy.label}: ${GUEST_EMAIL}`}
  </a>;
}
