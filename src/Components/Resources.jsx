import React from "react";

const items = [
  { title: "How to book your first ticket" },
  { title: "Managing group bookings" },
  { title: "Refund & cancellation policies" },
];

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto px-4" id="resources">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
            Help & Resources
          </p>
          <h2 className="text-3xl font-semibold">
            Learn how Event Booking works.
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mt-2">
            Quick guides to help you understand how to search events, book
            tickets, manage bookings and get support.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
          >
            <div className="h-40 rounded-xl bg-slate-800 mb-3" />
            <h3 className="font-semibold text-sm">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
