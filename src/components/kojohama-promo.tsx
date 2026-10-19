import { Photo } from "@/components/photo";
import { house } from "@/data/active";
import { kojohamaUrl } from "@/data/links";
import { useLang } from "@/lib/i18n";

// Cross-link to the sister property, Kojohama Cabins (kojohamacabins.jp), in the visitor's language.
export function KojohamaPromo({ from }: { from: "home" | "a" | "b" }) {
  const { lang } = useLang();
  const c = house().copy.ui.kojohama;
  const href = kojohamaUrl(lang, from);
  return (
    <section className="kojohama-promo" aria-label={c.title}>
      <div className="wrap kojohama-inner">
        <a className="kojohama-photo" href={href} target="_blank" rel="noopener">
          <Photo src="/photos/kojohama.jpg" alt={c.alt} sizes="(max-width: 900px) 100vw, 50vw" />
        </a>
        <div className="kojohama-copy">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
          <a className="button button-dark" href={href} target="_blank" rel="noopener">
            {c.cta} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
