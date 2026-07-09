import doctorImg from "../assets/doctor.png";
import Inside1 from "../assets/Inside1.jpeg";
import Inside2 from "../assets/Inside2.jpeg";
import { Icon } from "./Icon";

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <div className="font-script text-2xl text-ink-soft animate-fade-in-right">Meet Your Dermatologist,</div>
          <h2
            className="font-display text-5xl lg:text-6xl text-ink mt-2 animate-fade-in-right"
            style={{ animationDelay: "0.1s" }}
          >
           Dr. P. Kaushik Kumar
          </h2>
          <div className="mt-3 text-[11px] tracking-[0.28em] text-ink/60 uppercase">
           MBBS (Osmania) • MD Dermatology, Venereology & Leprosy (Osmania) • Consultant Dermatologist & Dermatosurgeon
          </div>
          <div className="mt-6 h-px w-16 bg-ink/30" />
          <p className="mt-6 text-ink/75 leading-relaxed max-w-md">
            Dr. P. Kaushik Kumar specializes in clinical dermatology, dermatosurgery, laser treatments, and hair restoration, offering evidence-based care tailored to every patient.
          </p>
          <p className="mt-4 text-ink/75 leading-relaxed max-w-md">
            From acne, pigmentation, psoriasis, eczema, vitiligo, and hair loss to advanced laser procedures, mole & wart removal, cosmetic dermatology, and confidential STD care, every treatment is delivered with modern technology and a patient-first approach.
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-ink/80">
            {[
              ["award", "Experienced Consultant Dermatologist"],
              ["heart", "Advanced Laser & Dermatosurgery"],
              ["microscope", "Evidence-Based Treatments"],
              ["users", "Personalized Patient Care"],
            ].map(([i, t]) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-ink/30 text-ink">
                  <Icon name={i} className="w-3.5 h-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative grid grid-cols-6 grid-rows-6 gap-3 min-h-[380px] lg:min-h-[520px] py-4">
          <img
            src={doctorImg}
            alt="Dr. Koushik in clinic"
            className="col-span-4 row-span-5 col-start-2 row-start-1 lg:row-start-2 object-cover w-full h-full rounded-2xl animate-pop-in"
          />
          <img
            src={Inside1}
            alt="Clinic Interior"
            className="relative z-10 col-span-3 row-span-2 col-start-4 row-start-1 object-cover w-full h-full rounded-xl border-[6px] border-cream shadow-xl animate-pop-in"
            loading="lazy"
            style={{ animationDelay: "0.2s" }}
          />
          <img
            src={Inside2}
            alt="Clinic Interior"
            className="relative z-10 col-span-3 row-span-2 col-start-1 row-start-5 object-cover w-full h-full rounded-xl border-[6px] border-cream shadow-xl animate-pop-in"
            loading="lazy"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </section>
  );
}
