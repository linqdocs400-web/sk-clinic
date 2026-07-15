import { OptimizedImage } from "./OptimizedImage";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

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
          <div className="mt-3 text-[11px] tracking-[0.28em] text-ink/60 uppercase leading-relaxed">
           MBBS, MD DVL • Consultant Dermatologist | Dermatosurgeon
          </div>
          <div className="mt-6 h-px w-16 bg-ink/30" />
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed max-w-xl text-sm lg:text-base">
            <p>
              Dr. P. Kaushik Kumar is a highly dedicated Consultant Dermatologist, Dermatosurgeon with a passion for delivering ethical, evidence-based, and patient-centered dermatological care. Trained at the prestigious Osmania Medical College, Hyderabad, he combines academic excellence with advanced clinical expertise to provide comprehensive treatment for skin, hair, nail, and sexually transmitted diseases (STDs).
            </p>
            <p>
              Committed to excellence in dermatology, Dr. Kaushik believes that every patient deserves honest medical advice, personalized treatment plans, and access to world-class dermatological care at an affordable cost. His approach emphasizes accurate diagnosis, patient education, and scientifically proven treatments that deliver safe, natural, and long-lasting results.
            </p>
            <p>
              Dr. Kaushik completed both his MBBS (2014–2020) and MD in Dermatology, Venereology & Leprosy (2021–2025) from the renowned Osmania Medical College, Hyderabad, one of India's premier medical institutions. Following his postgraduate training, he completed one year of Senior Residency, where he gained extensive experience in managing a broad spectrum of dermatological disorders, dermatosurgical procedures, and cosmetic dermatology. With five years of cumulative clinical experience, he has successfully treated thousands of patients with diverse skin and hair concerns.
            </p>
            <p>
              As an active Member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL), Dr. Kaushik remains committed to continuous medical education and regularly updates his practice with the latest advancements in dermatology and aesthetic medicine.
            </p>
            <p>
              This clinic is equipped with advanced Dermoscopy and Trichoscopy, enabling accurate diagnosis of skin lesions, hair disorders, and nail diseases while ensuring precise treatment planning.
            </p>
          </div>
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
        <div className="relative flex items-center justify-center py-4 overflow-hidden rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
            className="w-[85%] max-w-[400px] lg:max-w-[450px] aspect-[4/5]"
          >
            <OptimizedImage
              baseName="doctor-about-section-JPG"
              alt="Dr. Kaushik in clinic"
              sizes="(max-width: 1024px) 85vw, 450px"
              className="w-full h-full object-cover object-top rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
