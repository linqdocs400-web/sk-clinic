import { useEffect, useRef } from "react";

export function useAutoScroll(speed = 1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationId: number;
    let isInteracting = false;

    const scroll = () => {
      if (!isInteracting) {
        el.scrollLeft += speed;
        
        // Infinite loop logic
        // We assume the children are duplicated, so when we reach half the scroll width, we reset to 0
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else if (el.scrollLeft <= 0 && speed < 0) {
          el.scrollLeft = el.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleInteractionStart = () => (isInteracting = true);
    const handleInteractionEnd = () => (isInteracting = false);

    // Mouse events
    el.addEventListener("mouseenter", handleInteractionStart);
    el.addEventListener("mouseleave", handleInteractionEnd);
    el.addEventListener("mousedown", handleInteractionStart);
    window.addEventListener("mouseup", handleInteractionEnd);

    // Touch events
    el.addEventListener("touchstart", handleInteractionStart, { passive: true });
    el.addEventListener("touchend", handleInteractionEnd, { passive: true });
    el.addEventListener("touchcancel", handleInteractionEnd, { passive: true });

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", handleInteractionStart);
      el.removeEventListener("mouseleave", handleInteractionEnd);
      el.removeEventListener("mousedown", handleInteractionStart);
      window.removeEventListener("mouseup", handleInteractionEnd);
      
      el.removeEventListener("touchstart", handleInteractionStart);
      el.removeEventListener("touchend", handleInteractionEnd);
      el.removeEventListener("touchcancel", handleInteractionEnd);
    };
  }, [speed]);

  return ref;
}
