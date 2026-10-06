import { photoMeta } from "@/lib/photo-manifest";

function stemOf(src: string) {
  const name = src.split("/").pop() ?? src;
  return name.replace(/\.(jpe?g|png|webp|avif)$/i, "");
}

export function photoHref(src: string) {
  const stem = stemOf(src);
  const widths = photoMeta[stem]?.widths;
  return widths?.length ? `/photos/${stem}-${widths[widths.length - 1]}.webp` : src;
}

export function Photo({
  src,
  alt,
  className,
  sizes = "(max-width: 900px) 100vw, 1200px",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const stem = stemOf(src);
  const meta = photoMeta[stem];
  const widths = meta?.widths;
  if (!widths?.length) {
    return <img className={className} src={src} alt={alt} />;
  }
  const set = (ext: "avif" | "webp") => widths.map((width) => `/photos/${stem}-${width}.${ext} ${width}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        className={className}
        src={`/photos/${stem}-${widths[widths.length - 1]}.webp`}
        srcSet={set("webp")}
        sizes={sizes}
        alt={alt}
        width={meta.width}
        height={meta.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
