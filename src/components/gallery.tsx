import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "@/data/content";
import type { Lang } from "@/lib/i18n";

export function Gallery({
  photos,
  lang,
  labels,
}: {
  photos: readonly Photo[];
  lang: Lang;
  labels: { close: string; prev: string; next: string };
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((index) => (index === null ? index : (index + 1) % photos.length));
      if (event.key === "ArrowLeft")
        setOpen((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
    };
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, photos.length]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className="gallery">
        {photos.map((photo, index) => (
          <button key={photo.src} type="button" className="g-item" onClick={() => setOpen(index)}>
            <img src={photo.src} alt={photo.alt[lang]} />
          </button>
        ))}
      </div>
      {current && open !== null
        ? createPortal(
            <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt[lang]}>
              <div className="lightbox-bar">
                <span>
                  {open + 1} / {photos.length}
                </span>
                <button type="button" className="lightbox-close" onClick={() => setOpen(null)}>
                  {labels.close}
                </button>
              </div>
              <div className="lightbox-stage">
                <button
                  type="button"
                  className="lightbox-nav"
                  aria-label={labels.prev}
                  onClick={() => setOpen((open - 1 + photos.length) % photos.length)}
                >
                  ‹
                </button>
                <figure>
                  <img src={current.src} alt={current.alt[lang]} />
                  <figcaption>{current.alt[lang]}</figcaption>
                </figure>
                <button
                  type="button"
                  className="lightbox-nav"
                  aria-label={labels.next}
                  onClick={() => setOpen((open + 1) % photos.length)}
                >
                  ›
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
