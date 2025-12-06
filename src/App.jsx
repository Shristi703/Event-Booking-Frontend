import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Partners from "./components/Partners";
import Resources from "./components/Resources";
import Schedule from "./components/Schedule";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";


const App = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />

      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="booking" className="py-16">
  <BookingForm />
</section>


        <section id="speakers" className="py-16">
          <Speakers />
        </section>

        <section id="partners" className="py-16">
          <Partners />
        </section>

        <section id="resources" className="py-16 bg-slate-900/40">
          <Resources />
        </section>

        <section id="schedule" className="py-16">
          <Schedule />
        </section>

        <section id="pricing" className="py-16 bg-slate-900/40">
          <Pricing />
        </section>

        <section id="faq" className="py-16">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
