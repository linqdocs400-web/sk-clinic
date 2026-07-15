import { OptimizedImage } from "./OptimizedImage";

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <OptimizedImage
        baseName="logo"
        priority={true}
        sizes="40px"
        alt="Siri & Kaushik's Clinic Logo"
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border border-ink/10"
      />
      <div className="flex flex-col">
        <span className="font-display text-sm sm:text-lg text-ink leading-none">
          Siri and Kaushik's
        </span>
        <span className="text-[7px] sm:text-[9px] tracking-wider sm:tracking-widest text-ink-soft uppercase mt-1 max-w-[140px] sm:max-w-none">
          Skin, Hair, STD, Dermatosurgery and Laser clinic.
        </span>
      </div>
    </a>
  );
}
