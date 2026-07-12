import { HorizontalRail } from "./HorizontalRail";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import acneImg from "../assets/acne.jpg";
import hairImg from "../assets/hair.jpg";
import melasmaImg from "../assets/melasma.jpg";
import tineaImg from "../assets/tinea.jpg";
import palmarImg from "../assets/palmar.jpg";
import erythrasmaImg from "../assets/erythrasma.jpg";
import allergyImg from "../assets/Allergic Contact Dermatitis.jpg";

export const CONDITIONS = [
  {
    name: "Cystic Acne",
    blurb:
      "Advanced treatment for acne, acne scars, oily skin and enlarged pores. Can be cured by 3 months.",
    img: acneImg,
  },
  {
    name: "Hair Fall & Hair Regrowth",
    blurb:
      "PRP, GFC therapy and personalized solutions for hair loss and thinning. Can be cured in 1-4 months.",
    img: hairImg,
  },
  {
    name: "Pigmentation & Melasma",
    blurb:
      "Treatment for pigmentation, melasma, tanning and uneven skin tone.",
    img: melasmaImg,
  },
  {
    name: "Dandruff",
    blurb:
      "Expert diagnosis and treatment for severe dandruff and flaky scalp.",
    img: tineaImg,
  },
  {
    name: "Palmar Psoriasis",
    blurb:
      "Specialized care for psoriasis affecting the palms with advanced treatment options.",
    img: palmarImg,
  },
  {
    name: "Erythrasma",
    blurb:
      "Accurate diagnosis and effective treatment for bacterial skin infections.",
    img: erythrasmaImg,
  },
  {
    name: "Allergic Contact Dermatitis",
    blurb:
      "Treatment for allergic skin reactions, itching, redness and inflammation.",
    img: allergyImg,
  },
];

export function Conditions() {
  return (
    <HorizontalRail
      id="conditions"
      label="Conditions"
      title="Conditions We Treat"
    >
      {CONDITIONS.map((c) => (
        <motion.article
          key={c.name}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%] group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl bg-ink/10">
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="w-full h-auto object-contain bg-black/5"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl text-cream leading-tight">
              {c.name}
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-ink/70">
            {c.blurb}
          </p>

          <Link
            to="/book"
            className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink group-hover:text-ink-soft transition-colors"
          >
            Book Consultation →
          </Link>
        </motion.article>
      ))}
    </HorizontalRail>
  );
}
