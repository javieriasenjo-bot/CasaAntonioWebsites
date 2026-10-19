import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Photo, photoHref } from "@/components/photo";
import type { Photo as HousePhoto } from "@/data/facts";
import { house } from "@/data/active";
import type { Lang } from "@/lib/i18n";
import { photoCategory, ROOM_KEYS, type RoomKey } from "@/lib/photo-category";

export function Gallery({
  photos: allPhotos,
  lang,
  labels,
}: {
  photos: readonly HousePhoto[];
  lang: Lang;
  labels: { close: string; prev: string; next: string };
}) {
  const ui = house().copy.ui.gallery;
  const [category, setCategory] = useState<RoomKey>("all");
  // Lead with different rooms; alternate angles remain available under Show all.
  const featured = allPhotos.some(p => p.src.includes("b-bedroom"))
    ? ["b-living-sofa", "b-bedroom", "b-kitchen", "b-bath", "b-washroom", "b-stairs", "b-entrance", "b-projector"]
    : ["living", "a-bedroom-one", "a-bedroom-two", "kitchen", "a-bath", "a-washroom", "a-exterior", "dining"];
  const rank = (src: string) => { const i = featured.indexOf(src.replace(/^.*\//, "").replace(/\.[^.]+$/, "")); return i < 0 ? featured.length : i; };
  const photos = allPhotos.filter((p, i, list) => list.findIndex(other => other.src === p.src) === i && (category === "all" || photoCategory(p.src) === category))
    .sort((a, b) => rank(a.src) - rank(b.src));
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const galleryId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const isOpen = open !== null;
  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, photos.length]);

  useEffect(() => {
    if (open !== null) return;
    returnFocus.current?.focus();
  }, [open]);

  const current = open === null ? null : photos[open];
  // An eight-photo overview keeps alternate angles off the first screen.
  const INITIAL = 8;
  const [expanded, setExpanded] = useState(false);
  const showAll = ui.showAll.replace("{n}", String(photos.length));

  const thumbnails = (items: readonly HousePhoto[], offset: number) => items.map((photo, index) => (
    <a
      key={photo.src}
      href={photoHref(photo.src)}
      target="_blank"
      rel="noreferrer"
      className="g-item"
      onClick={(event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        returnFocus.current = event.currentTarget;
        setOpen(index + offset);
      }}
    >
      <Photo src={photo.src} alt={photo.alt[lang]} sizes="(max-width: 700px) 50vw, 280px" />
    </a>
  ));

  return (
    <>
      <div className="gallery-filters" role="group" aria-label={ui.filters}>
        {ROOM_KEYS.filter(key => key === "all" || allPhotos.some(p => photoCategory(p.src) === key)).map(key => (
          <button type="button" key={key} aria-pressed={category === key} onClick={() => { setOpen(null); setExpanded(false); setCategory(key); }}>
            {ui.rooms[key]}
          </button>
        ))}
      </div>
      <div className="gallery" id={galleryId}>{thumbnails(photos.slice(0, INITIAL), 0)}</div>
      {photos.length > INITIAL ? (
        <details key={category} className="gallery-extra" onToggle={(event) => setExpanded(event.currentTarget.open)}>
          <summary className="button button-line">
            {expanded ? ui.showFewer : showAll}
          </summary>
          <div className="gallery">{thumbnails(photos.slice(INITIAL), INITIAL)}</div>
        </details>
      ) : null}
      {current && open !== null
        ? createPortal(
            <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt[lang]}>
              <div className="lightbox-bar">
                <span aria-live="polite">
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
                <figure
                  onTouchStart={event => { const t = event.touches[0]; touchStart.current = t ? { x: t.clientX, y: t.clientY } : null; }}
                  onTouchEnd={event => {
                    const start = touchStart.current; touchStart.current = null;
                    const end = event.changedTouches[0]; if (!start || !end) return;
                    const dx = end.clientX - start.x, dy = end.clientY - start.y;
                    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) setOpen((open + (dx < 0 ? 1 : -1) + photos.length) % photos.length);
                  }}
                  onTouchCancel={() => { touchStart.current = null; }}
                >
                  <Photo src={current.src} alt={current.alt[lang]} sizes="92vw" priority />
                  <figcaption>{current.alt[lang]}</figcaption>
                </figure>
                {photos.length > 1 ? (
                  // Fetch the neighbouring photos now so a swipe never lands on a blank frame.
                  <div className="lightbox-preload" aria-hidden="true">
                    {[(open + 1) % photos.length, (open - 1 + photos.length) % photos.length].map((index) => (
                      <Photo key={photos[index].src} src={photos[index].src} alt="" sizes="92vw" preload />
                    ))}
                  </div>
                ) : null}
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
