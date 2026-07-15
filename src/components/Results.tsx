import { HorizontalRail } from "./HorizontalRail";

import { OptimizedImage } from "./OptimizedImage";
import type { IMAGE_DATA } from "../image-data";

export const RESULTS: { label: string; meta: string; sub: string; img: keyof typeof IMAGE_DATA }[] =
  [
    {
      label: "Acne & Acne Scar",
      meta: "6 WEEKS",
      sub: "Visible reduction in acne, acne scars and healthier skin.",
      img: "acne-results",
    },
    {
      label: "Hair Fall & Hair Regrowth",
      meta: "4 MONTHS",
      sub: "Improved hair density with healthier natural regrowth.",
      img: "hair-results",
    },
    {
      label: "Pigmentation & Melasma",
      meta: "8 WEEKS",
      sub: "Noticeable improvement in pigmentation and uneven skin tone.",
      img: "melasma-results",
    },
    {
      label: "Pityriasis capitis (Dandruff)",
      meta: "6 WEEKS",
      sub: "Healthy scalp after successful fungal infection treatment.",
      img: "tinea-results",
    },
    {
      label: "Palmar Psoriasis",
      meta: "3 MONTHS",
      sub: "Reduced scaling, redness and itching with advanced care.",
      img: "palmar-results",
    },
    {
      label: "Erythrasma - UV Light",
      meta: "4 WEEKS",
      sub: "Effective treatment for bacterial skin infection.",
      img: "erythrasma-results",
    },
    {
      label: "Rosacea",
      meta: "3 WEEKS",
      sub: "Noticeable relief from redness, inflammation, and facial sensitivity.",
      img: "allergy-results",
    },
  ];

export function Results() {
  return (
    <HorizontalRail id="results" label="Success Stories" title="Patient Transformationss">
      {RESULTS.map((r) => (
        <article key={r.label} className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%]">
          <div className="overflow-hidden rounded-xl bg-ink/10">
            <OptimizedImage
              baseName={r.img}
              alt={`Successful treatment results for ${r.label} at Siri & Kaushik's Clinic, Dermatologist in Hyderabad`}
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 26vw"
              className="w-full h-auto object-contain bg-black/5"
            />
          </div>

          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ink/55">{r.meta}</div>

          <h3 className="mt-1 font-display text-xl text-ink">{r.label}</h3>

          <p className="text-sm text-ink/60">{r.sub}</p>
        </article>
      ))}
    </HorizontalRail>
  );
}
