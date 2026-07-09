import { useState } from "react";
import { Logo } from "./Logo";

export const NAV = [
  { label: "Home", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Conditions", href: "#conditions" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-10">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[15px] font-medium tracking-wide text-ink/80 hover:text-ink transition-all duration-300"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <a
            href="https://tally.so/r/Bz5oxe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-cream uppercase tracking-[0.22em] text-xs px-7 py-4 hover:bg-ink-soft transition"
          >
            Book Appointment
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-ink/20 rounded"
          >
            <span className="w-5 h-0.5 bg-ink mb-1"></span>
            <span className="w-5 h-0.5 bg-ink mb-1"></span>
            <span className="w-5 h-0.5 bg-ink"></span>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-cream">
          <div className="flex flex-col px-6 py-5 space-y-4">

            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-ink/80 hover:text-ink transition"
              >
                {n.label}
              </a>
            ))}

            <a
              href="https://tally.so/r/Bz5oxe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 bg-ink text-cream text-center uppercase tracking-[0.22em] text-xs px-6 py-4"
            >
              Book Appointment
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
