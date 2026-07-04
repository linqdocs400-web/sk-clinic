import { useRef } from "react";
import { Icon } from "./Icon";

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
    <section id={id} className="py-20 lg:py-28 bg-panel/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-script text-2xl text-ink-soft">{label}</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight">
              {title}
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-left" className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          ref={ref}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
