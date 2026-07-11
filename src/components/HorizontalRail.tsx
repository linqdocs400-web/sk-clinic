import { useRef } from "react";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

interface HorizontalRailProps {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export function HorizontalRail({ id, label, title, children }: HorizontalRailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <section id={id} className="py-20 lg:py-28 bg-panel/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
              className="font-script text-2xl text-ink-soft"
            >
              {label}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight"
            >
              {title}
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
            transition={{ delay: 0.2 }}
            className="flex gap-2"
          >
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition rounded-sm"
            >
              <Icon name="arrow-left" className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition rounded-sm"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "100px 0px 100px 0px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          ref={ref}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 custom-scrollbar"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
