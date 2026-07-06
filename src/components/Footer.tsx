import { Icon } from "./Icon";

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Conditions", href: "#conditions" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.015_150)] text-white/90 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/30">
              <span className="font-display italic text-white">SK</span>
            </div>
            <div>
              <div className="font-display italic text-lg text-white">
                Siri &amp; Koushik's
              </div>
              <div className="text-[10px] tracking-[0.32em] text-white/70">
                SKIN · HAIR · LASER
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed max-w-sm">
            Siri & Kaushik's Skin, Hair & STD Dermatosurgery & Laser Clinic provides expert dermatology, hair restoration, laser treatments, cosmetic dermatology, and confidential STD care with a patient-first approach.
          </p>

          <div className="mt-5 flex gap-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/hyderabadi.derma.docs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center border border-white/30 text-white hover:bg-white hover:text-ink transition"
            >
              <Icon name="instagram" className="w-4 h-4" />
            </a>

            {/* Contact Section */}
            <a
              href="#contact"
              aria-label="Contact"
              className="grid h-10 w-10 place-items-center border border-white/30 text-white hover:bg-white hover:text-ink transition"
            >
              <Icon name="chat" className="w-4 h-4" />
            </a>

            {/* Call */}
            <a
              href="tel:+918985504044"
              aria-label="Call"
              className="grid h-10 w-10 place-items-center border border-white/30 text-white hover:bg-white hover:text-ink transition"
            >
              <Icon name="phone" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/70">
            Quick Links
          </div>

          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="hover:text-white/80 transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/70">
            Contact
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <p>
              <a
                href="https://maps.app.goo.gl/Z4LYDTPEM5C82Wyk9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                📍 Dilsukhnagar, Hyderabad

                📞 +91 89855 04044

                🕒 Mon–Sat
                6:30 PM – 9:30 PM

                🕒 Sunday
                10:00 AM – 2:00 PM
              </a>
            </p>

            <p>
              <a
                href="tel:+918985504044"
                className="hover:text-white underline underline-offset-2"
              >
                +91 8985504044
              </a>
            </p>

            <p>Mon–Sat · 6:30–9:30 PM</p>
            <p>Sun · 10:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Siri &amp; Koushik's Skin Hair STD Clinic.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
