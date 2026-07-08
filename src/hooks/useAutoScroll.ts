import { useEffect, useRef } from "react";

export function useAutoScroll(speed = 0.35) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationId: number;
    let isInteracting = false;
    let resumeTimeout: ReturnType<typeof setTimeout>;

    const scroll = () => {
      if (!isInteracting) {
        el.scrollLeft += speed;

        // Smooth infinite loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    const pause = () => {
      isInteracting = true;
      clearTimeout(resumeTimeout);
    };

    const resume = () => {
      clearTimeout(resumeTimeout);

      resumeTimeout = setTimeout(() => {
        isInteracting = false;
      }, 2000); // Resume after 2 seconds
    };

    // Desktop
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("mousedown", pause);
    window.addEventListener("mouseup", resume);

    // Mobile
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    el.addEventListener("touchcancel", resume, { passive: true });

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resumeTimeout);

      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("mousedown", pause);
      window.removeEventListener("mouseup", resume);

      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("touchcancel", resume);
    };
  }, [speed]);

  return ref;
}
