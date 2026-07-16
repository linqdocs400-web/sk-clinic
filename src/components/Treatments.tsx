import { Icon } from "./Icon";

const TREATMENT_GROUPS = [
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
    title: "STD & Sexual Health",
    icon: "shield",
    items: [
      "STD Diagnosis",
      "STD Treatment",
      "Confidential Consultation",
      "Genital Skin Disorders",
      "Genital Wart Treatment",
      "Follow-up Care",
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

            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-2xl leading-tight">
              Advanced Skin, Hair, Laser & STD Care
            </h2>

            <p className="mt-5 max-w-2xl text-ink/70 leading-relaxed">
              Personalized dermatology, hair restoration, laser procedures, aesthetic dermatology
              and confidential STD care under one roof.
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-x-auto lg:overflow-visible pb-6 custom-scrollbar">
          <div className="flex lg:grid lg:grid-cols-4 gap-5 min-w-max lg:min-w-0">
            {TREATMENT_GROUPS.map((group) => (
              <div
                key={group.title}
                className="bg-cream border border-ink/10 rounded-xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 w-[290px] sm:w-[320px] lg:w-auto shrink-0"
              >
                <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                  <Icon name={group.icon} className="w-6 h-6 text-ink" />
                </div>

                <h3 className="font-display text-2xl text-ink mt-5">{group.title}</h3>

                <div className="mt-3 h-px w-12 bg-ink/25"></div>

                <ul className="mt-6 space-y-3 text-sm text-ink/75 leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-ink/40">•</span>
                      <span>{item}</span>
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
