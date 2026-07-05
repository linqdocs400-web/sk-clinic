import { HorizontalRail } from "./HorizontalRail";

export const RESULTS = [
  {
    label: "Hair Transplant",
    meta: "1 SESSION",
    sub: "Receded hairline",
    img: "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?w=900&q=70&auto=format&fit=crop",
  },
  {
    label: "Pigmentation Removal",
    meta: "6 SESSIONS",
    sub: "Sun-induced melasma",
    img: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?w=900&q=70&auto=format&fit=crop",
  },
  {
    label: "Psoriasis Care",
    meta: "3 MONTHS",
    sub: "Scalp psoriasis",
    img: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=900&q=70&auto=format&fit=crop",
  },
  {
    label: "Alopecia Recovery",
    meta: "5 SESSIONS",
    sub: "Patchy hair loss",
    img: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=900&q=70&auto=format&fit=crop",
  },
  {
    label: "Acne Clearance",
    meta: "4 SESSIONS",
    sub: "Inflamed acne",
    img: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=900&q=70&auto=format&fit=crop",
  },
];

export function Results() {
  return (
    <HorizontalRail id="results" label="real results" title="Real results. Real confidence.">
      {RESULTS.map((r) => (
        <article key={r.label} className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%]">
          <div className="aspect-[4/3] overflow-hidden bg-ink/10">
            <img src={r.img} alt={r.label} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ink/55">{r.meta}</div>
          <h3 className="font-display text-xl text-ink mt-1">{r.label}</h3>
          <p className="text-sm text-ink/60">{r.sub}</p>
        </article>
      ))}
    </HorizontalRail>
  );
}
