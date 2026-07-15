import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-ink/5 transition-all duration-300 ${isScrolled ? "shadow-sm" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-7">
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
            href="https://wa.me/918985504044?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20your%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-cream uppercase tracking-[0.1em] sm:tracking-[0.22em] text-[9px] sm:text-xs px-4 sm:px-6 h-10 sm:h-12 flex items-center justify-center rounded-xl hover:bg-ink-soft transition"
          >
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="sm:hidden">Book Now</span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-ink/20 rounded-xl"
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
              href="https://wa.me/918985504044?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20your%20availability."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 bg-ink text-cream text-center uppercase tracking-[0.22em] text-xs px-6 py-4 rounded-xl block"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
