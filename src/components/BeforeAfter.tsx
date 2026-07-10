import { useState, useRef } from "react";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "framer-motion";

import hairBefore from "../assets/before.jpeg";
import hairAfter from "../assets/after.jpeg";
import acneBefore from "../assets/acne before.jpeg";
import acneAfter from "../assets/acne after.jpeg";
import allergyBefore from "../assets/skin before.jpeg";
import allergyAfter from "../assets/skin after.jpeg";

const CATEGORIES = [
  {
    id: "hair",
    label: "Hair Restoration",
    before: hairBefore,
    after: hairAfter,
  },
  {
    id: "acne",
    label: "Acne Clear",
    before: acneBefore,
    after: acneAfter,
  },
  {
    id: "allergy",
    label: "Skin Allergy",
    before: allergyBefore,
    after: allergyAfter,
  },
];

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const wrapRef = useRef<HTMLDivElement>(null);

  const drag = (e: React.PointerEvent) => {
    const el = wrapRef.current;
    if (!el) return;

    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    const move = (clientX: number) => {
      const rect = el.getBoundingClientRect();
      const percent = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, percent)));
    };

    move(e.clientX);

    const onMove = (ev: PointerEvent) => move(ev.clientX);

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <section className="bg-sage py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-2xl text-ink-soft"
        >
          before &amp; after
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl text-ink mt-2"
        >
          Drag the line. See the difference.
        </motion.h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat);
                setPos(50);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab.id === cat.id
                  ? "bg-ink text-cream"
                  : "bg-cream border border-ink/20 text-ink hover:bg-ink/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Card */}
        <motion.div
          ref={wrapRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-10 mx-auto w-full max-w-md lg:max-w-3xl aspect-[4/5] lg:aspect-[16/10] overflow-hidden rounded-xl shadow-2xl bg-black"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {/* AFTER IMAGE */}
              <img
                src={activeTab.after}
                alt={`After treatment for ${activeTab.label}`}
                draggable={false}
                className={`absolute inset-0 w-full h-full object-cover max-lg:scale-100 ${
                  activeTab.id === "hair"
                    ? "lg:scale-[1.35] origin-center"
                    : activeTab.id === "acne"
                    ? "lg:scale-[1.25] origin-center"
                    : "lg:object-top lg:scale-[1.15] origin-top"
                }`}
              />

              {/* BEFORE IMAGE */}
              <img
                src={activeTab.before}
                alt={`Before treatment for ${activeTab.label}`}
                draggable={false}
                className={`absolute inset-0 w-full h-full object-cover max-lg:scale-100 ${
                  activeTab.id === "hair"
                    ? "lg:scale-[1.35] origin-center"
                    : activeTab.id === "acne"
                    ? "lg:scale-[1.25] origin-center"
                    : "lg:object-top lg:scale-[1.15] origin-top"
                }`}
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-xs tracking-widest uppercase">
            Before
          </div>

          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur text-black px-3 py-1 rounded-full text-xs tracking-widest uppercase">
            After
          </div>
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]"
            style={{ left: `${pos}%` }}
          />
          <button
            onPointerDown={drag}
            aria-label="Compare"
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center touch-none cursor-ew-resize"
            style={{ left: `${pos}%` }}
          >
            <div className="flex items-center gap-1 text-black">
              <Icon name="arrow-left" className="w-3 h-3" />
              <Icon name="arrow-right" className="w-3 h-3" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
