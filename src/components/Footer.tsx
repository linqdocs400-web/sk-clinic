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
    <footer className="bg-[#1E342B] text-white/90 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/30">
              <span className="font-display italic text-white">SK</span>
            </div>

            <div>
              <div className="font-display italic text-lg text-white">Siri &amp; Kaushik's</div>

              <div className="text-[10px] tracking-[0.32em] text-white/70">
                SKIN • HAIR • STD • LASER
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-white/75 max-w-sm">
            Siri &amp; Kaushik's Skin, Hair, STD, Dermatosurgery &amp; Laser Clinic provides
            comprehensive dermatology, hair restoration, Aesthetic dermatology, laser procedures,
            and confidential STD care with a patient-first approach.
          </p>

          <div className="mt-6 flex gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/hyderabadi.derma.docs"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md border border-white/20 hover:bg-white hover:text-[#1E342B] transition-all duration-300"
            >
              <Icon name="instagram" className="w-4 h-4" />
            </a>

            {/* WhatsApp / Contact */}
            <a
              href="#contact"
              className="grid h-10 w-10 place-items-center rounded-md border border-white/20 hover:bg-white hover:text-[#1E342B] transition-all duration-300"
            >
              <Icon name="chat" className="w-4 h-4" />
            </a>

            {/* Phone */}
            <a
              href="tel:+918985504044"
              className="grid h-10 w-10 place-items-center rounded-md border border-white/20 hover:bg-white hover:text-[#1E342B] transition-all duration-300"
            >
              <Icon name="phone" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links & Contact Container */}
        <div className="grid grid-cols-2 gap-6 lg:gap-10 lg:col-span-2">
          {/* Quick Links */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">Quick Links</div>

            <ul className="mt-6 space-y-4 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">Contact</div>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <div className="text-white/50 uppercase tracking-widest text-[11px] mb-1">
                  Address
                </div>
                <a
                  href="https://maps.app.goo.gl/Z4LYDTPEM5C82Wyk9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Dilsukhnagar,
                  <br />
                  Hyderabad – 500060
                </a>
              </div>
              <div>
                <div className="text-white/50 uppercase tracking-widest text-[11px] mb-1">
                  Clinic Hours
                </div>
                <p>
                  Monday – Saturday
                  <br />
                  6:30 PM – 9:30 PM
                </p>
                <p className="mt-2">
                  Sunday
                  <br />
                  10:00 AM – 2:00 PM
                  <br />
                  <span className="text-white/60">(Appointments Only)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-3 lg:py-6 text-center text-[10px] lg:text-xs text-white/50">
          <span className="lg:hidden">
            © {new Date().getFullYear()} Siri &amp; Kaushik's Clinic. All Rights Reserved.
          </span>
          <span className="hidden lg:inline">
            © {new Date().getFullYear()} Siri &amp; Kaushik's Skin, Hair, STD Dermatosurgery &amp;
            Laser Clinic. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
