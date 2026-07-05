import { HorizontalRail } from "./HorizontalRail";
import { motion } from "framer-motion";

export const CONDITIONS = [
  {
    name: "Acne",
    blurb: "Pimples, blackheads, whiteheads, cysts.",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=70&auto=format&fit=crop",
  },
  {
    name: "Acne Scars",
    blurb: "Pitted or raised scars, uneven texture.",
    img: "https://images.unsplash.com/photo-1612458927360-a3ca0a201bc3?w=900&q=70&auto=format&fit=crop",
  },
  {
    name: "Hair Fall",
    blurb: "Daily shedding, thinning, widening parting.",
    img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=900&q=70&auto=format&fit=crop",
  },
  {
    name: "Alopecia Areata",
    blurb: "Patchy hair loss on scalp or beard.",
    img: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=900&q=70&auto=format&fit=crop",
  },
  {
    name: "Hair Regrowth",
    blurb: "Receding hairline, crown thinning.",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=70&auto=format&fit=crop",
  },
  {
    name: "Pigmentation",
    blurb: "Melasma, sun spots, uneven tone.",
    img: "https://images.unsplash.com/photo-1614859275246-f7e302b59e3a?w=900&q=70&auto=format&fit=crop",
  },
  {
    name: "Psoriasis",
    blurb: "Scaly, red, inflamed patches.",
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=70&auto=format&fit=crop",
  },
];

export function Conditions() {
  return (
    <HorizontalRail id="conditions" label="conditions" title="Diseases we treat.">
      {CONDITIONS.map((c, i) => (
        <motion.article 
          key={c.name} 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%] group cursor-pointer"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-ink/10">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <h3 className="absolute bottom-4 left-5 font-display text-2xl text-cream">{c.name}</h3>
          </div>
          <p className="mt-4 text-sm text-ink/65">{c.blurb}</p>
          <a
            href="#contact"
            className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink group-hover:text-ink-soft transition-colors"
          >
            Learn more ›
          </a>
        </motion.article>
      ))}
    </HorizontalRail>
  );
}
