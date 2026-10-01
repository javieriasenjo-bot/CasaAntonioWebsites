import { photoDims } from "@/lib/photo-dims";
import { photoWidths } from "@/lib/photo-manifest";

function stemOf(src: string) {
  const name = src.split("/").pop() ?? src;
  return name.replace(/\.(jpe?g|png|webp|avif)$/i, "");
}

export function Photo({
  src,
  alt,
  className,
  sizes = "(max-width: 900px) 100vw, 800px",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const stem = stemOf(src);
  const widths = photoWidths[stem];
  if (!widths?.length) {
    return <img className={className} src={src} alt={alt} />;
  }
  const dims = photoDims[stem];
  const set = (ext: "avif" | "webp") => widths.map((width) => `/photos/${stem}-${width}.${ext} ${width}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        className={className}
        src={`/photos/${stem}-${widths[0]}.webp`}
        srcSet={set("webp")}
        sizes={sizes}
        alt={alt}
        width={dims?.[0]}
        height={dims?.[1]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
