import { SectionLabel } from "./SectionLabel";
import { Icon } from "./Icon";

export const REASONS = [
  { t: "Experienced Dermatologists", i: "stethoscope" },
  { t: "Advanced Laser Technology", i: "sparkle" },
  { t: "Personalized Treatment Plans", i: "heart" },
  { t: "Proven Clinical Results", i: "award" },
  { t: "Skin & Hair Specialists", i: "leaf" },
  { t: "Affordable Consultation", i: "gem" },
  { t: "Hygienic Environment", i: "shield" },
  { t: "Trusted Patient Care", i: "users" },
  { t: "Modern Equipment", i: "microscope" },
  { t: "Long-Term Follow-Up", i: "clock" },
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
          <div className="mt-12 lg:grid lg:grid-cols-5 gap-px bg-ink/10 border border-ink/10 max-w-6xl mx-auto overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex lg:grid lg:grid-cols-5 gap-px min-w-max lg:min-w-0">
              {REASONS.map((r) => (
                <div
                  key={r.t}
                  className="bg-cream p-6 sm:p-8 flex flex-col items-center text-center gap-4 min-h-[180px] justify-center w-[160px] sm:w-[200px] lg:w-auto shrink-0"
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
