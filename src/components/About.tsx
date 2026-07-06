import doctorImg from "../assets/doctor.png";
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
           With expertise in clinical dermatology, dermatosurgery, laser treatments, and hair restoration, Dr. P. Kaushik Kumar is dedicated to providing evidence-based and personalized care.Every treatment plan is carefully designed to address each patient's unique skin and hair concerns.  
           
          </p>
          <p className="mt-4 text-ink/75 leading-relaxed max-w-md">
            From acne, pigmentation, psoriasis, vitiligo, eczema, and hair fall to advanced laser procedures, mole and wart removal, cosmetic dermatology, and confidential STD care, patients receive comprehensive treatment using modern technology and a patient-first approach.
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
        <div className="relative grid grid-cols-6 grid-rows-6 gap-3 min-h-[380px] lg:min-h-[520px]">
          <img
            src={doctorImg}
            alt="Dr. Koushik in clinic"
            className="col-span-4 row-span-6 col-start-2 row-start-1 object-cover w-full h-full animate-pop-in"
          />
          <img
            src="https://images.unsplash.com/photo-1612458927360-a3ca0a201bc3?w=600&q=70&auto=format&fit=crop"
            alt="Treatment result"
            className="col-span-2 row-span-2 col-start-5 row-start-1 object-cover w-full h-full shadow-lg animate-pop-in"
            loading="lazy"
            style={{ animationDelay: "0.2s" }}
          />
          <img
            src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&q=70&auto=format&fit=crop"
            alt="Hair restoration"
            className="col-span-2 row-span-2 col-start-1 row-start-5 object-cover w-full h-full shadow-lg animate-pop-in"
            loading="lazy"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </section>
  );
}
