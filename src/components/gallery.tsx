import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Photo } from "@/components/photo";
import type { Photo as HousePhoto } from "@/data/facts";
import type { Lang } from "@/lib/i18n";

export function Gallery({
  photos,
  lang,
  labels,
}: {
  photos: readonly HousePhoto[];
  lang: Lang;
  labels: { close: string; prev: string; next: string };
}) {
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open === null) return;
    const dialog = dialogRef.current;
    const root = document.getElementById("root");
    root?.setAttribute("inert", "");
    const focusable = () =>
      dialog ? [...dialog.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])")] : [];
    focusable()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((index) => (index === null ? index : (index + 1) % photos.length));
      if (event.key === "ArrowLeft")
        setOpen((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
      if (event.key === "Tab") {
        const nodes = focusable();
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      root?.removeAttribute("inert");
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, photos.length]);

  useEffect(() => {
    if (open !== null) return;
    returnFocus.current?.focus();
  }, [open]);

  const current = open === null ? null : photos[open];
  // Long galleries (Casa Antonio B has 50+ photos) show the first 12 so the page stays short on phones.
  const INITIAL = 12;
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? photos : photos.slice(0, INITIAL);
  const showAll: Record<Lang, string> = {
    en: `Show all ${photos.length} photos`,
    ja: `写真をすべて見る（${photos.length}枚）`,
    zh: `查看全部 ${photos.length} 张照片`,
    ko: `사진 ${photos.length}장 모두 보기`,
  };

  return (
    <>
      <div className="gallery">
        {shown.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="g-item"
            onClick={(event) => {
              returnFocus.current = event.currentTarget;
              setOpen(index);
            }}
          >
            <Photo src={photo.src} alt={photo.alt[lang]} sizes="(max-width: 700px) 50vw, 280px" />
          </button>
        ))}
      </div>
      {!expanded && photos.length > INITIAL ? (
        <p className="gallery-more">
          <button type="button" className="button button-line" onClick={() => setExpanded(true)}>
            {showAll[lang]}
          </button>
        </p>
      ) : null}
      {current && open !== null
        ? createPortal(
            <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt[lang]}>
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
                  <Photo src={current.src} alt={current.alt[lang]} sizes="92vw" priority />
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
