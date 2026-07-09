import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

export function BookAppointment() {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      {/* Top Bar with actions */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium tracking-wide hover:text-ink/70 transition-colors"
          >
            ← Back to Website
          </Link>
          
          <div className="flex items-center gap-3">
            <a 
              href="tel:+918985504044"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-ink text-cream hover:bg-ink-soft transition-colors shadow-sm"
              aria-label="Call Us"
            >
              <Icon name="phone" className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/918985504044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-sage text-ink border border-ink/10 hover:bg-sage/80 transition-colors shadow-sm"
              aria-label="WhatsApp Us"
            >
              <Icon name="chat" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Embedded Form */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-10 h-full flex flex-col">
        <div className="text-center mb-6 mt-4">
          <h1 className="font-display text-4xl sm:text-5xl text-ink">Book an Appointment</h1>
          <p className="mt-3 text-ink/70">Fill out the form below and our team will confirm your slot shortly.</p>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink/5 overflow-hidden min-h-[700px]">
          <iframe 
            src="https://tally.so/r/Bz5oxe?transparentBackground=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Book Appointment Form"
            className="w-full h-full min-h-[700px]"
          />
        </div>
      </main>
    </div>
  );
}
