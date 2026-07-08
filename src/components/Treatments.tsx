import { Icon } from "./Icon";

export const TREATMENT_GROUPS = [
  {
    title: "Skin Care",
    icon: "stethoscope",
    items: [
      "Acne & Acne Scar Treatment",
      "Pigmentation & Melasma",
      "Psoriasis Treatment",
      "Eczema & Dermatitis",
      "Skin Allergy & Urticaria",
      "Vitiligo Treatment",
    ],
  },
  {
    title: "Hair & Scalp Care",
    icon: "sparkle",
    items: [
      "Hair Fall Treatment",
      "PRP Therapy",
      "GFC Therapy",
      "Hair Regrowth",
      "Mesotherapy",
      "Dandruff & Scalp Care",
    ],
  },
  {
    title: "Laser Treatments",
    icon: "flask",
    items: [
      "Laser Hair Reduction",
      "Laser Scar Reduction",
      "Laser Pigmentation Removal",
      "Laser Tattoo Removal",
      "Skin Rejuvenation",
      "Laser Skin Resurfacing",
    ],
  },
  {
    title: "Aesthetic Dermatology",
    icon: "gem",
    items: [
      "Chemical Peels",
      "HydraFacial",
      "Microneedling RF",
      "Skin Boosters",
      "Anti-Aging Treatments",
      "Skin Rejuvenation Procedures",
    ],
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        <div>
          <div className="font-script text-2xl text-ink-soft">
            treatments
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight">
            Advanced Skin, Hair & Laser Treatments
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto lg:overflow-visible pb-6 custom-scrollbar">
          <div className="flex lg:grid lg:grid-cols-4 gap-5 min-w-max lg:min-w-0">

            {TREATMENT_GROUPS.map((g) => (
              <div
                key={g.title}
                className="bg-cream border border-ink/8 p-7 shadow-sm w-[280px] sm:w-[320px] lg:w-auto shrink-0"
              >
                <Icon
                  name={g.icon}
                  className="w-6 h-6 text-ink"
                />

                <h3 className="font-display text-xl text-ink mt-5">
                  {g.title}
                </h3>

                <div className="mt-2 h-px w-10 bg-ink/30" />

                <ul className="mt-5 space-y-3 text-sm text-ink/75">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2"
                    >
                      <span className="text-ink/40">•</span>
                      {item}
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
