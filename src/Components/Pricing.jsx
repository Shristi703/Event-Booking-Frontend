import React from "react";

const plans = [
  {
    name: "Standard Pass",
    price: "₹999",
    tagline: "Perfect for single event booking.",
    features: [
      "Access to main event",
      "Email & SMS confirmation",
      "QR code based entry",
      "Basic customer support",
    ],
  },
  {
    name: "VIP Pass",
    price: "₹1,999",
    tagline: "For premium experience and extra benefits.",
    highlight: true,
    features: [
      "Everything in Standard",
      "Front row / VIP seating",
      "Snacks & refreshments",
      "Priority entry lane",
      "Dedicated support team",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4" id="pricing">
      <div className="mb-8 max-w-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
          Tickets
        </p>
        <h2 className="text-3xl font-semibold mb-2">Pricing for tickets.</h2>
        <p className="text-slate-300 text-sm">
          Choose the pass that matches how you want to enjoy the event in
          Gwalior.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-2xl p-6 bg-slate-900/60 ${
              plan.highlight
                ? "border-secondary shadow-lg shadow-secondary/30"
                : "border-white/10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold mb-2">{plan.price}</p>
            <p className="text-xs text-slate-400 mb-4">{plan.tagline}</p>

            <ul className="space-y-2 text-sm text-slate-200 mb-5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button className="w-full px-4 py-2 rounded-full bg-secondary font-semibold text-sm hover:bg-orange-500 transition">
              Book Ticket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
