import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
          About Event Booking
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          Your simple way to book and manage events in Gwalior.
        </h2>
        <p className="text-slate-300 mb-3">
          Event Booking helps you discover and book tickets for local events,
          concerts, workshops, and conferences happening in and around Gwalior.
        </p>
        <p className="text-slate-300">
          From choosing your seat to instant payment confirmation, everything is
          smooth, secure and built for a great user experience.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Events Listed", value: "50+" },
          { label: "Categories", value: "08+" },
          { label: "Partners", value: "15+" },
          { label: "Bookings", value: "10K+" },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-white/10 rounded-2xl py-4 text-center"
          >
            <div className="text-xl font-bold">{item.value}</div>
            <div className="text-xs text-slate-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
