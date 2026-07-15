import { SectionLabel } from "./SectionLabel";
import { Icon } from "./Icon";

export const REASONS = [
  { t: "Trained at the prestigious Osmania Medical College, Hyderabad", i: "stethoscope" },
  { t: "Evidence-based medical and aesthetic dermatology", i: "sparkle" },
  { t: "Honest, ethical, and transparent treatment approach", i: "heart" },
  { t: "Personalized care for every patient", i: "award" },
  { t: "Expertise in advanced dermatosurgical procedures", i: "leaf" },
  { t: "Affordable, world-class dermatological care", i: "gem" },
  { t: "Safe & Hygienic Environment", i: "shield" },
  { t: "Trusted Patient Care", i: "users" },
  { t: "Modern diagnostic techniques including Dermoscopy & Trichoscopy", i: "microscope" },
  { t: "Continuous Follow-Up & Support", i: "clock" },
];

export function WhyUs() {
  return (
    <section id="why">
      <SectionLabel>why us ?</SectionLabel>
      <div className="bg-sage mt-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink">
            A higher standard of <br /> dermatology.
          </h2>
          <p className="mt-4 text-ink/70 max-w-xl mx-auto text-sm">
            Ten reasons patients across Hyderabad trust us with their skin and hair.
          </p>

          {/* Unified Responsive Grid */}
          <div className="mt-12 max-w-6xl mx-auto bg-[#E7E7E7] border border-[#E7E7E7]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px">
              {REASONS.map((r, index) => (
                <div
                  key={index}
                  className="group relative z-10 bg-cream p-6 flex flex-col items-center justify-center text-center h-full min-h-[110px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:z-20"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream mb-4 transition-colors duration-300 group-hover:bg-ink-soft">
                    <Icon name={r.i} className="w-5 h-5" />
                  </span>
                  <div className="text-base sm:text-[17px] font-medium text-ink/90 leading-snug">
                    {r.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
