import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Speakers from "./Components/Speakers";
import Partners from "./Components/Partners";
import Resources from "./Components/Resources";
import Schedule from "./Components/Schedule";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import BookingForm from "./Components/BookingForm";


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
