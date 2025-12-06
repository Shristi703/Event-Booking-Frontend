import React, { useState } from "react";

const questions = [
  {
    q: "How do I get my ticket?",
    a: "After payment, you will receive an email and SMS with your QR code ticket and event details.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "It depends on the event. Some events allow refunds or rescheduling before a cut-off time. Check event details.",
  },
  {
    q: "Is payment secure?",
    a: "Yes, all payments are handled via secure payment gateways with encryption.",
  },
  {
    q: "Can I book for a group?",
    a: "Yes, you can book multiple tickets in one go and share the QR codes with your friends.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4" id="faq">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
          FAQ
        </p>
        <h2 className="text-3xl font-semibold mb-2">
          Frequently asked questions.
        </h2>
        <p className="text-slate-300 text-sm">
          Still unsure? These might help. You can always reach out to our
          support team as well.
        </p>
      </div>

      <div className="space-y-3">
        {questions.map((item, idx) => {
          const isOpen = idx === openIndex;
          return (
            <div
              key={item.q}
              className="border border-white/10 rounded-2xl bg-slate-900/40"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between px-4 py-3"
              >
                <span className="text-sm font-medium text-left">{item.q}</span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-slate-300">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
