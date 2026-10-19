import type { ReactNode } from "react";

const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, "aria-hidden": true } as const;

// Each pack item names its icon, so a reordered translation can never show the wrong symbol.
const ICONS: Record<string, ReactNode> = {
  station: (
    <>
      <rect x="6" y="3.5" width="12" height="13" rx="2.5" />
      <path d="M6 10.5h12" />
      <circle cx="9" cy="13.5" r="0.9" />
      <circle cx="15" cy="13.5" r="0.9" />
      <path d="M8.5 16.5 6.5 20.5M15.5 16.5l2 4" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M10 16.5v-9h3a2.6 2.6 0 0 1 0 5.2h-3" />
    </>
  ),
  kitchen: (
    <>
      <path d="M6 4v7a3 3 0 0 0 3 3h0V4" />
      <path d="M9 14v6" />
      <path d="M15 4v16" />
      <path d="M15 8h3" />
    </>
  ),
  size: (
    <>
      <path d="M4 9V4h5" />
      <path d="M20 15v5h-5" />
      <path d="M4 4l6 6" />
      <path d="M20 20l-6-6" />
    </>
  ),
  guests: (
    <>
      <circle cx="9" cy="8" r="2.2" />
      <circle cx="16" cy="9" r="1.8" />
      <path d="M4.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" />
      <path d="M14 14.6c1.4-.3 2.8.2 3.6 1.6" />
    </>
  ),
  bed: (
    <>
      <path d="M3.5 18.5v-11" />
      <path d="M3.5 14.5h17v4" />
      <path d="M20.5 14.5v-2a2.5 2.5 0 0 0-2.5-2.5h-7v4.5" />
      <circle cx="7.3" cy="11.6" r="1.6" />
    </>
  ),
};

export type SellingPoint = { icon: string; label: string };

export function SellingPoints({ items }: { items: readonly SellingPoint[] }) {
  return (
    <ul className="selling-points">
      {items.map((item) => (
        <li key={item.label}>
          <svg viewBox="0 0 24 24" {...common}>{ICONS[item.icon] ?? ICONS.station}</svg>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
