import { InfoRow } from "./InfoRow";

export function Visit() {
  return (
    <section id="contact" className="relative">
      <div className="bg-rose pt-20 pb-32 lg:pt-28 lg:pb-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="font-script text-2xl text-cream/90">visit</div>

          <h2 className="font-display mt-2 text-4xl text-cream sm:text-5xl lg:text-6xl">
            Visit Siri & Kaushik's Skin, Hair, STD, Dermatosurgery & Laser Clinic.
          </h2>
        </div>
      </div>

      <div className="relative mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:-mt-32 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Contact Details */}
          <div className="space-y-7 rounded-lg bg-cream p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:p-10">
            <InfoRow
              icon="pin"
              title="Address"
              href="https://maps.app.goo.gl/bx29btJPjHVVmcPDA"
            >
              16-11-578/A,
              <br />
              Opposite Red Cross Hospital,
              <br />
              Gaddiannaram Cross Road,
              <br />
              Near Raghavendra Hotel,
              <br />
              Dilsukhnagar,
              <br />
              Hyderabad – 500060
            </InfoRow>

            <InfoRow
              icon="phone"
              title="Call / WhatsApp"
              href="tel:+918985504044"
            >
              +91 89855 04044
            </InfoRow>

            <InfoRow
              icon="instagram"
              title="Instagram"
              href="https://instagram.com/hyderabadi.derma.docs"
            >
              <>
                <span>Follow Us</span>
                <br />
                <span>@hyderabadi.derma.docs</span>
              </>
            </InfoRow>

            <InfoRow icon="clock" title="Hours">
              <>
                <div>Monday – Saturday</div>
                <div>6:30 PM – 9:30 PM</div>

                <br />

                <div>Sunday</div>
                <div>10:00 AM – 2:00 PM</div>

                <br />

                <span className="text-xs text-ink/50">
                  Appointments only
                </span>
              </>
            </InfoRow>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-lg bg-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] h-[420px] lg:h-auto min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.989557360587!2d78.522059!3d17.3642355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99088bacf7ed%3A0x7ce50f18e5e29b8c!2sSiri%20and%20Kaushik's%20Skin%20Hair%20STD%20Dermatosurgery%20and%20Laser%20Clinic!5e0!3m2!1sen!2sin!4v1783340821593!5m2!1sen!2sin"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Siri & Kaushik's Skin, Hair & Laser Clinic Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
