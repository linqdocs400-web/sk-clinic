import { useState, useRef } from "react";
import { Icon } from "./Icon";
import { motion, AnimatePresence } from "framer-motion";

// Asset imports (using placeholders where necessary, update as needed)
import hairBefore from "../assets/before.jpeg";
import hairAfter from "../assets/after.jpeg";
import acneBefore from "../assets/acne before.jpeg";
import acneAfter from "../assets/acne after.jpeg";
import allergyBefore from "../assets/skin before.jpeg";
import allergyAfter from "../assets/skin after.jpeg";

const CATEGORIES = [
  { id: "hair", label: "Hair Restoration", before: hairBefore, after: hairAfter },
  { id: "acne", label: "Acne Clear", before: acneBefore, after: acneAfter },
  { id: "allergy", label: "Skin Allergy", before: allergyBefore, after: allergyAfter },
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
      const r = el.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      setPos(Math.max(2, Math.min(98, p)));
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
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} 
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl text-ink mt-2"
        >
          Drag the line. See the difference.
        </motion.h2>
        
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveTab(cat); setPos(50); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab.id === cat.id 
                  ? "bg-ink text-cream" 
                  : "bg-cream text-ink border border-ink/20 hover:bg-ink/5"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          ref={wrapRef}
          className="relative mt-8 mx-auto max-w-3xl aspect-[16/10] overflow-hidden bg-ink/20 select-none shadow-2xl rounded-sm"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeTab.after}
                alt={`After treatment for ${activeTab.label} at Siri & Koushik's Clinic in Hyderabad`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
                <img
                  src={activeTab.before}
                  alt={`Before treatment for ${activeTab.label} at Siri & Koushik's Clinic in Hyderabad`}
                  className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
                  style={{ width: `${100 / (pos / 100)}%` }}
                  draggable={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-sm text-cream text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-cream/80 backdrop-blur-sm text-ink text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm">
            After
          </div>
          <div className="absolute top-0 bottom-0 w-0.5 bg-cream shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `${pos}%` }} />
          <button
            onPointerDown={drag}
            aria-label="Drag to compare"
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-cream shadow-xl cursor-ew-resize touch-none ring-4 ring-white/30"
            style={{ left: `${pos}%` }}
          >
            <span className="flex items-center gap-1.5 text-ink">
              <Icon name="arrow-left" className="w-3 h-3" />
              <Icon name="arrow-right" className="w-3 h-3" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
