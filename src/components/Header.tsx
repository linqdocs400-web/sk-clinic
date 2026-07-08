import doctorImg from "../assets/doctor.png";
import { Stat } from "./Stat";
import { motion } from "framer-motion";

export const SPECIALTIES = [
  "Dermatology",
  "Trichology",
  "Laser",
  "Aesthetics",
  "Dermatosurgery",
  "Pediatric Skin",
  "STD Care",
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-end">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-6 -left-2 lg:-left-6 w-40 h-44 border border-ink/15 hidden sm:block" />

            <div className="relative overflow-hidden bg-panel">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={doctorImg}
                alt="Dr. Koushik, Dermatologist"
                className="w-full h-[460px] sm:h-[560px] lg:h-[640px] object-cover object-top"
                width={1024}
                height={1536}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-5 -left-2 lg:left-6 bg-cream shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] p-4 pr-6 max-w-[260px] hidden sm:block"
            >
              <div className="text-[oklch(0.72_0.08_70)] tracking-widest">
                ★★★★★
              </div>

              <p className="mt-2 text-[13px] leading-snug text-ink/90">
                "Genuinely the most thoughtful dermatologist I've met."
              </p>

              <div className="mt-2 text-[10px] tracking-[0.24em] text-ink/55">
                — VERIFIED PATIENT
              </div>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="pb-10 lg:pb-16"
          >
            <motion.div
              variants={fadeUpVariant}
              className="font-script text-3xl text-ink-soft"
            >
              welcome
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-[40px] sm:text-6xl lg:text-7xl leading-[1.02] text-ink mt-2 tracking-tight"
            >
              Advanced Skin, Hair
              <br className="hidden sm:block" /> &amp; Laser Care
            </motion.h1>

            <motion.div
              variants={fadeUpVariant}
              className="font-script text-3xl sm:text-4xl text-ink-soft/90 mt-3"
            >
              for every stage of life.
            </motion.div>

            <motion.p
              variants={fadeUpVariant}
              className="mt-6 max-w-xl text-ink/70 text-[15px] leading-relaxed"
            >
              Expert dermatology, trichology, cosmetic and laser treatments —
              delivered with precision, care and the trust of thousands of
              patients across Hyderabad.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://tally.so/r/Bz5oxe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-cream text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink-soft transition inline-block"
              >
                Book Appointment
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#treatments"
                className="border border-ink/40 text-ink text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink hover:text-cream transition inline-block"
              >
                Explore Treatments
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-rose mt-12 lg:-mt-32 lg:pt-40 lg:pb-12 py-10 lg:relative lg:z-[-1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 lg:pl-[42%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-8 sm:gap-14 text-cream"
          >
            <Stat n="7k+" l="Patients" />
            <Stat n="15+" l="Years" />
            <Stat n="50+" l="Conditions" />
          </motion.div>
        </div>
      </div>

      <div className="bg-rose/30 border-y border-ink/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 text-ink font-display text-lg sm:text-xl whitespace-nowrap animate-[marquee_28s_linear_infinite]">
            {[...SPECIALTIES, ...SPECIALTIES].map((s, i) => (
              <span key={i} className="flex items-center gap-8 sm:gap-12">
                <span className="italic">{s}</span>
                <span className="text-ink/30">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
