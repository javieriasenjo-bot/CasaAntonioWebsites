const ICONS = ["station", "kitchen", "size", "ski", "guests"] as const;

function Icon({ name }: { name: (typeof ICONS)[number] | "station" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, "aria-hidden": true } as const;
  if (name === "kitchen") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M6 4v7a3 3 0 0 0 3 3h0V4" />
        <path d="M9 14v6" />
        <path d="M15 4v16" />
        <path d="M15 8h3" />
      </svg>
    );
  }
  if (name === "size") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M4 9V4h5" />
        <path d="M20 15v5h-5" />
        <path d="M4 4l6 6" />
        <path d="M20 20l-6-6" />
      </svg>
    );
  }
  if (name === "ski") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M4 16l8-10 8 10" />
        <path d="M8 16h8" />
      </svg>
    );
  }
  if (name === "guests") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <circle cx="9" cy="8" r="2.2" />
        <circle cx="16" cy="9" r="1.8" />
        <path d="M4.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" />
        <path d="M14 14.6c1.4-.3 2.8.2 3.6 1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <rect x="4" y="8" width="16" height="8" rx="1.5" />
      <path d="M7 8V6h4v2" />
      <circle cx="8" cy="16" r="1.2" />
      <circle cx="16" cy="16" r="1.2" />
    </svg>
  );
}

export function SellingPoints({ items }: { items: readonly string[] }) {
  return (
    <ul className="selling-points">
      {items.map((label, index) => (
        <li key={label}>
          <Icon name={ICONS[index] ?? "station"} />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
