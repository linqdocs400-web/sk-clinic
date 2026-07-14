import doctorImg from "../assets/doctor hero section.JPG.jpeg";
import { Stat } from "./Stat";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SPECIALTIES = [
  "Acne Treatment",
  "Hair Loss Treatment",
  "Pigmentation Treatment",
  "Laser Hair Reduction",
  "Botox & Fillers",
  "Skin Rejuvenation",
  "STD Treatment",
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
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
                alt="Dr. Kaushik, Dermatologist"
                className="w-full h-[460px] sm:h-[560px] lg:h-[640px] object-cover object-top brightness-[1.03] contrast-[1.02]"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-5 right-2 sm:right-auto sm:-left-2 lg:left-6 bg-cream shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] p-3 sm:p-4 pr-4 sm:pr-6 max-w-[260px] sm:max-w-[280px] z-10"
            >
              <a href="https://goo.gl/maps/wZCSskyr4TZBReBN9?g_st=aw" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="flex items-center gap-2">
                  <div className="text-[oklch(0.72_0.08_70)] tracking-widest text-[10px] sm:text-xs">⭐⭐⭐⭐⭐</div>
                  <div className="text-[9px] sm:text-[10px] text-ink/50">3 weeks ago</div>
                </div>
                <p className="mt-1 sm:mt-2 text-[11px] sm:text-[13px] leading-snug text-ink/90 group-hover:text-ink transition-colors">
                 "Dr. Kaushik sir is highly professional and friendly. His examination was thorough, and his diagnosis was spot on. I strongly recommend him to anyone facing skin issues."
                </p>
                <div className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] tracking-[0.24em] text-ink/60 font-medium">
                  — THARUN AZMERA
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="pb-10 lg:pb-16"
          >
            <motion.div variants={fadeUpVariant} className="font-script text-4xl text-ink opacity-75">welcome</motion.div>
            <motion.h1
              variants={fadeUpVariant}
              className="font-display text-[42px] sm:text-6xl lg:text-7xl leading-[1.05] text-ink mt-2 tracking-tight font-normal"
             >
            Advanced Skin, Hair
            <br className="hidden sm:block" /> 
            &amp; Laser Care
            </motion.h1>
            <motion.div
              variants={fadeUpVariant}
              className="font-script text-3xl sm:text-4xl text-ink-soft/90 mt-3"
            >
              Expert care for every stage of life.
            </motion.div>
            <motion.p
              variants={fadeUpVariant}
              className="mt-6 max-w-xl text-ink/70 text-[15px] leading-relaxed"
            >
              Expert dermatology, trichology and advanced treatments — delivered with
              precision, care and the trust of thousands of patients across Hyderabad.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="https://wa.me/918985504044?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20your%20availability." target="_blank" rel="noopener noreferrer" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-ink text-cream text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink-soft transition"
                >
                  Book Appointment
                </motion.div>
              </a>
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

      {/* Rose stat band */}
      <div className="bg-rose mt-12 lg:-mt-32 lg:pt-40 lg:pb-12 py-10 lg:relative lg:z-[-1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 lg:pl-[42%]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-8 sm:gap-14 text-cream"
          >
            <Stat n="7000+" l="Patients Treated" />
            <Stat n="100+" l="Advanced Treatments" />
            <Stat n="4.9★" l="Google Rating" />
          </motion.div>
        </div>
      </div>

      {/* Specialty marquee */}
      <div className="bg-rose/30 border-y border-ink/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 overflow-hidden">
          <motion.div 
            className="flex w-max items-center gap-8 sm:gap-12 text-ink font-display text-lg sm:text-xl whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...SPECIALTIES, ...SPECIALTIES].map((s, i) => (
              <span key={i} className="flex items-center gap-8 sm:gap-12">
                <span className="italic">{s}</span>
                <span className="text-ink/30">◆</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

