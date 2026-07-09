import { SectionLabel } from "./SectionLabel";
import { Icon } from "./Icon";

export const REASONS = [
  { t: "Experienced Consultant Dermatologists", i: "stethoscope" },
  { t: "Advanced Laser Technology", i: "sparkle" },
  { t: "Personalized Treatment Plans", i: "heart" },
  { t: "Evidence-Based Treatments", i: "award" },
  { t: "Comprehensive Skin & Hair Care", i: "leaf" },
  { t: "Affordable Consultation", i: "gem" },
  { t: "Safe & Hygienic Environment", i: "shield" },
  { t: "Trusted Patient Care", i: "users" },
  { t: "Modern Diagnostic & Laser Equipment", i: "microscope" },
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
          
          {/* Mobile Auto-Scrolling View */}
          <div 
            className="mt-12 lg:hidden bg-ink/10 border border-ink/10 max-w-6xl mx-auto overflow-hidden pb-6"
          >
            <div className="flex gap-px w-max animate-[marquee_50s_linear_infinite]">
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
