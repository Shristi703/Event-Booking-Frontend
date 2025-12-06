import React from "react";

const speakers = [
  {
    name: "Rahul Sharma",
    role: "Event Coordinator · Event Booking",
  },
  {
    name: "Priya Verma",
    role: "Partnership Manager",
  },
  {
    name: "Amit Singh",
    role: "Operations Head",
  },
  {
    name: "Neha Gupta",
    role: "Customer Experience Lead",
  },
];

const Speakers = () => {
  return (
    <div className="max-w-6xl mx-auto px-4" id="speakers">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
            Organizers
          </p>
          <h2 className="text-3xl font-semibold">
            Meet the team behind the events.
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mt-2">
            A dedicated team managing partnerships, bookings and support to
            ensure every event runs smoothly.
          </p>
        </div>
        <a
          href="#pricing"
          className="text-sm text-secondary underline underline-offset-4"
        >
          View ticket options
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((sp) => (
          <div
            key={sp.name}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 flex flex-col gap-2"
          >
            <div className="h-28 rounded-xl bg-slate-800 mb-3" />
            <h3 className="font-semibold">{sp.name}</h3>
            <p className="text-xs text-slate-400">{sp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
