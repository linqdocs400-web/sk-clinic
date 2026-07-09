import { Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingChat } from "./components/FloatingChat";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Conditions } from "./components/Conditions";
import { Treatments } from "./components/Treatments";
import { Results } from "./components/Results";
import { BeforeAfter } from "./components/BeforeAfter";
import { GoogleReviews } from "./components/GoogleReviews";
import { Gallery } from "./components/Gallery";
import { Visit } from "./components/Visit";
import { BookAppointment } from "./pages/BookAppointment";

function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Conditions />
      <Treatments />
      <Results />
      <BeforeAfter />
      <GoogleReviews />
      <Gallery />
      <Visit />
      <Footer />
      <FloatingChat />
    </>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookAppointment />} />
      </Routes>
    </div>
  );
}
