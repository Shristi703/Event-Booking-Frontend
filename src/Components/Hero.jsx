import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* left text */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">
            Event Booking · 2025
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Book Your{" "}
            <span className="text-primary">Event Tickets</span> in Gwalior.
          </h1>
          <p className="text-slate-300 max-w-xl">
            Easily book tickets for concerts, conferences, meetups and more in{" "}
            <span className="font-semibold">Gwalior</span>. Secure booking,
            instant confirmation and a smooth event experience.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-full bg-secondary font-semibold text-sm hover:bg-orange-500 transition"
            >
              Book Now
            </a>
            <span className="text-xs text-slate-400">
              Event Date: <b>12/12/2025</b> · Gwalior
            </span>
          </div>

          {/* mini stats */}
          <div className="grid grid-cols-4 gap-3 pt-4 max-w-xs text-center">
            {[
              { label: "Events", value: "20+" },
              { label: "Venues", value: "10+" },
              { label: "Cities", value: "01" },
              { label: "Users", value: "5K+" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-white/10 rounded-xl py-2"
              >
                <div className="text-lg font-semibold">{item.value}</div>
                <div className="text-[11px] text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right info card */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-secondary mb-2">
              Featured Event
            </p>
            <h3 className="text-xl font-semibold mb-1">
              Live Concert · Winter Bash
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Book your ticket for the biggest music night of the year in
              Gwalior with top artists and an incredible atmosphere.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="font-medium">Gwalior · MP</p>
                <p className="text-xs text-slate-400">Outdoor Venue</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Date & Time</p>
                <p className="font-medium">12/12/2025 · 7:00 PM</p>
                <p className="text-xs text-slate-400">Limited Seats</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-4 w-32 h-32 rounded-3xl bg-primary/30 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
