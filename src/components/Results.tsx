import { HorizontalRail } from "./HorizontalRail";

import acneResult from "../assets/acne-results.jpg";
import hairResult from "../assets/hair-results.jpg";
import melasmaResult from "../assets/melasma-results.jpg";
import tineaResult from "../assets/tinea-results.jpg";
import palmarResult from "../assets/palmar-results.jpg";
import erythrasmaResult from "../assets/erythrasma-results.jpg";
import allergyResult from "../assets/allergy-results.jpg";

export const RESULTS = [
  {
    label: "Acne & Acne Scar",
    meta: "6 WEEKS",
    sub: "Visible reduction in acne, acne scars and healthier skin.",
    img: acneResult,
  },
  {
    label: "Hair Fall & Hair Regrowth",
    meta: "4 MONTHS",
    sub: "Improved hair density with healthier natural regrowth.",
    img: hairResult,
  },
  {
    label: "Pigmentation & Melasma",
    meta: "8 WEEKS",
    sub: "Noticeable improvement in pigmentation and uneven skin tone.",
    img: melasmaResult,
  },
  {
    label: "Tinea Capitis",
    meta: "6 WEEKS",
    sub: "Healthy scalp after successful fungal infection treatment.",
    img: tineaResult,
  },
  {
    label: "Palmar Psoriasis",
    meta: "3 MONTHS",
    sub: "Reduced scaling, redness and itching with advanced care.",
    img: palmarResult,
  },
  {
    label: "Erythrasma",
    meta: "4 WEEKS",
    sub: "Effective treatment for bacterial skin infection.",
    img: erythrasmaResult,
  },
  {
    label: "Rosacea",
    meta: "3 WEEKS",
    sub: "Noticeable relief from redness, inflammation, and facial sensitivity.",
    img: allergyResult,
  },
];

export function Results() {
  return (
    <HorizontalRail
      id="results"
      label="Success Stories"
      title="Patient Transformationss"
    >
      {RESULTS.map((r) => (
        <article
          key={r.label}
          className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%]"
        >
          <div className="overflow-hidden rounded-xl bg-ink/10">
            <img
              src={r.img}
              alt={`Successful treatment results for ${r.label} at Siri & Koushik's Clinic, Dermatologist in Hyderabad`}
              loading="lazy"
              className="w-full h-auto object-contain bg-black/5"
            />
          </div>

          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ink/55">
            {r.meta}
          </div>

          <h3 className="mt-1 font-display text-xl text-ink">
            {r.label}
          </h3>

          <p className="text-sm text-ink/60">
            {r.sub}
          </p>
        </article>
      ))}
    </HorizontalRail>
  );
}
