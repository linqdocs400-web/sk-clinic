import logo from "../assets/logo.png";

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <img src={logo} alt="Siri & Koushik's Clinic Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-ink/10" />
      <div className="flex flex-col">
        <span className="font-display text-base sm:text-lg text-ink leading-none">Siri & Koushik</span>
        <span className="text-[10px] sm:text-xs tracking-widest text-ink-soft uppercase mt-1">Clinic</span>
      </div>
    </a>
  );
}
