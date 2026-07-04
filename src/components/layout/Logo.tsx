export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/20 bg-cream">
        <span className="font-display text-lg italic text-[oklch(0.65_0.12_70)]">
          S<span className="text-ink">K</span>
        </span>
      </div>
      <div className="leading-tight">
        <div className="font-display italic text-lg text-ink">Siri &amp; Koushik's</div>
        <div className="text-[10px] tracking-[0.32em] text-ink/70">SKIN · HAIR · LASER</div>
      </div>
    </a>
  );
}
