import { HorizontalRail } from "./HorizontalRail";
import { motion } from "framer-motion";
import acneImg from "../assets/Acne.jpg";

export const CONDITIONS = [
  {
    name: "Acne & Acne",
    blurb: "Advanced treatment for acne, acne scars, oily skin and enlarged pores.",
    img: acneImg,
  },
  {
    name: "Hair Fall & Hair Regrowth",
    blurb: "PRP, GFC therapy and personalized solutions for hair loss and thinning.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Pigmentation & Melasma",
    blurb: "Treatment for pigmentation, melasma, tanning and uneven skin tone.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Psoriasis & Eczema",
    blurb: "Comprehensive care for chronic skin conditions with long-term management.",
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Vitiligo",
    blurb: "Evidence-based treatment plans for pigment restoration and skin health.",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Laser & Cosmetic Procedures",
    blurb: "Laser treatments, chemical peels, Hydrafacial and skin rejuvenation.",
    img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "STD Consultation & Care",
    blurb: "Confidential diagnosis, counseling and treatment for sexually transmitted diseases.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&auto=format&fit=crop&q=80",
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
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ink/10">
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl text-cream leading-tight">
              {c.name}
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-ink/70">
            {c.blurb}
          </p>

          <a
            href="#contact"
            className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink group-hover:text-ink-soft transition-colors"
          >
            Book Consultation →
          </a>
        </motion.article>
      ))}
    </HorizontalRail>
  );
} // updated
