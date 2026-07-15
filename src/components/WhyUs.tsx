import { SectionLabel } from "./SectionLabel";
import { Icon } from "./Icon";
import { useAutoScroll } from "../hooks/useAutoScroll";

export const REASONS = [
  { t: "Trained at the prestigious Osmania Medical College, Hyderabad", i: "award" },
  { t: "Evidence-based medical and aesthetic dermatology", i: "stethoscope" },
  { t: "Honest, ethical, and transparent treatment approach", i: "users" },
  { t: "Personalized care for every patient", i: "heart" },
  { t: "Expertise in advanced dermatosurgical procedures", i: "gem" },
  { t: "Modern diagnostic techniques including Dermoscopy & Trichoscopy", i: "microscope" },
  { t: "Affordable, world-class dermatological care", i: "leaf" },
  { t: "Advanced Laser Technology", i: "sparkle" },
  { t: "Safe & Hygienic Environment", i: "shield" },
  { t: "Continuous Follow-Up & Support", i: "clock" },
];

export function WhyUs() {
  const scrollRef = useAutoScroll(0.8);

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

          {/* Mobile Auto-Scrolling View */}
          <div
            className="mt-12 lg:hidden bg-ink/10 border border-ink/10 max-w-6xl mx-auto overflow-x-auto pb-6 custom-scrollbar touch-pan-x"
            ref={scrollRef as any}
          >
            <div className="flex gap-px min-w-max">
              {[...REASONS, ...REASONS, ...REASONS].map((r, index) => (
                <div
                  key={index}
                  className="bg-cream p-6 sm:p-8 flex flex-col items-center text-center gap-4 min-h-[180px] justify-center w-[160px] sm:w-[200px] shrink-0"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-cream">
                    <Icon name={r.i} className="w-6 h-6" />
                  </span>
                  <div className="font-display text-lg text-ink leading-tight">{r.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="mt-12 hidden lg:block bg-ink/10 border border-ink/10 max-w-6xl mx-auto">
            <div className="grid grid-cols-5 gap-px">
              {REASONS.map((r) => (
                <div
                  key={r.t}
                  className="bg-cream p-6 sm:p-8 flex flex-col items-center text-center gap-4 min-h-[180px] justify-center w-auto shrink-0 hover:bg-cream/90 transition-colors"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-cream">
                    <Icon name={r.i} className="w-6 h-6" />
                  </span>
                  <div className="font-display text-lg text-ink leading-tight">{r.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
