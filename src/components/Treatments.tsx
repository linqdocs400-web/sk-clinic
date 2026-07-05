import { Icon } from "./Icon";

export const TREATMENT_GROUPS = [
  {
    title: "Medical Dermatology",
    icon: "stethoscope",
    items: [
      "Acne Treatment",
      "Acne Scar Treatment",
      "Hair Fall Treatment",
      "Scalp Disorders",
      "Psoriasis Treatment",
      "Eczema Treatment",
      "Vitiligo Treatment",
      "Allergy Treatment",
      "Fungal Infection",
      "Viral Infection",
      "Pigmentation",
      "Dark Circles",
      "Nail Disorders",
      "Pediatric Dermatology",
      "Autoimmune Skin",
    ],
  },
  {
    title: "Hair Treatments",
    icon: "sparkle",
    items: [
      "PRP Therapy",
      "GFC Therapy",
      "Hair Regrowth Solutions",
      "Hair Restoration",
      "Mesotherapy",
      "Scalp Boosters",
    ],
  },
  {
    title: "Laser Treatments",
    icon: "flask",
    items: [
      "Laser Hair Reduction",
      "Laser Scar Reduction",
      "Pigmentation Removal",
      "Tattoo Removal",
      "Skin Rejuvenation",
      "Vascular Laser",
    ],
  },
  {
    title: "Cosmetic & Aesthetics",
    icon: "gem",
    items: [
      "Chemical Peels",
      "Skin Boosters",
      "Anti-Aging Treatments",
      "Skin Glow Procedures",
      "Hydrafacial",
      "Microneedling RF",
    ],
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-script text-2xl text-ink-soft">treatments</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight">
              Treatments crafted around you.
            </h2>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto lg:overflow-visible pb-6 custom-scrollbar">
          <div className="flex lg:grid lg:grid-cols-4 gap-5 min-w-max lg:min-w-0">
            {TREATMENT_GROUPS.map((g) => (
              <div
                key={g.title}
                className="bg-cream border border-ink/8 p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] w-[280px] sm:w-[320px] lg:w-auto shrink-0"
              >
                <Icon name={g.icon} className="w-6 h-6 text-ink" />
                <h3 className="font-display text-xl text-ink mt-5">{g.title}</h3>
                <div className="mt-2 h-px w-10 bg-ink/30" />
                <ul className="mt-5 space-y-2.5 text-sm text-ink/75">
                  {g.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-ink/40">•</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
