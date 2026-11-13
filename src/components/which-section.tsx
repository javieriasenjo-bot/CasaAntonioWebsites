import { PageLink } from "@/components/page-link";
import { house } from "@/data/active";

// "Which one is which": makes clear that A and B are separate apartments in one building with no shared space.
export function WhichSection() {
  const t = house().copy;
  const w = t.which;
  const cards = [
    { id: "a" as const, item: w.a, cta: t.aCard.cta },
    { id: "b" as const, item: w.b, cta: t.bCard.cta },
  ];
  return (
    <section className="which-section" id="which">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{w.eyebrow}</p>
          <h2>{w.title}</h2>
          <p>{w.lede}</p>
        </div>
        <div className="cards which-cards">
          {cards.map(({ id, item, cta }) => (
            <article key={id} className="info-card which-card">
              <h3>{item.name}</h3>
              <p className="which-tag">{item.tag}</p>
              <p>{item.body}</p>
              <PageLink page={id} className="text-link">{cta}</PageLink>
            </article>
          ))}
        </div>
        <div className="which-more">
          {[w.both, w.location, w.hosts].map((block) => (
            <article key={block.title} className="info-card">
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
