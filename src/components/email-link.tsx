import { useLang } from "@/lib/i18n";

export const GUEST_EMAIL = "admin@kagami-planning.com";
const COPY = {
  en: { label: "Email enquiries", longStay: "Ask about a long stay by email", body: "Apartment (A or B):\nStay dates:\nNumber of guests:\nQuestion:" },
  ja: { label: "メールでお問い合わせ", longStay: "長期滞在をメールで相談する", body: "希望のお部屋（AまたはB）：\n宿泊日程：\n人数：\nお問い合わせ内容：" },
  zh: { label: "邮件咨询", longStay: "通过邮件咨询长住", body: "公寓（A或B）：\n入住日期：\n人数：\n咨询内容：" },
  ko: { label: "이메일 문의", longStay: "이메일로 장기 숙박 문의", body: "아파트(A 또는 B):\n숙박 날짜:\n인원:\n문의 내용:" },
};

export function EmailLink({ placement, longStay = false, className }: { placement: string; longStay?: boolean; className?: string }) {
  const { lang } = useLang();
  const copy = COPY[lang];
  const subject = `Casa Antonio · ${longStay ? copy.longStay : copy.label}`;
  const href = `mailto:${GUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(copy.body)}`;
  return <a href={href} data-placement={placement} className={className}>
    {longStay ? copy.longStay : `${copy.label}: ${GUEST_EMAIL}`}
  </a>;
}
