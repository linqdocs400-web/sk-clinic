import { useState } from "react";
import { Logo } from "./Logo";
import { NAV } from "../../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-8 text-sm text-ink/85">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-ink transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="https://wa.me/918985504044?text=Hi,%20I%20am%20from%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-cream text-xs tracking-[0.22em] uppercase px-6 py-3.5 hover:bg-ink-soft transition"
          >
            Book Appointment
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded border border-ink/15 text-ink"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-cream">
          <div className="px-4 py-4 flex flex-col gap-1 text-sm">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/85"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/918985504044?text=Hi,%20I%20am%20from%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-ink text-cream text-xs tracking-[0.22em] uppercase px-6 py-3.5"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
