import React from "react";

const tiers = [
  { title: "Venue Partners", count: 4 },
  { title: "Ticketing Partners", count: 4 },
  { title: "Sponsors", count: 4 },
];

const Partners = () => {
  return (
    <div className="max-w-6xl mx-auto px-4" id="partners">
      <div className="mb-8 max-w-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
          Partners
        </p>
        <h2 className="text-3xl font-semibold mb-2">
          Trusted partners and venues.
        </h2>
        <p className="text-slate-300 text-sm">
          We collaborate with verified venues and partners in Gwalior to make
          sure your event experience is reliable and enjoyable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.title}
            className="border border-white/10 rounded-2xl p-5 bg-slate-900/40"
          >
            <h3 className="font-semibold mb-4">{tier.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: tier.count }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xs text-slate-400"
                >
                  Logo
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
