import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="text-sm text-slate-400">
          <p>Thanks for using Event Booking.</p>
          <p>Gwalior · Event Date: 12/12/2025.</p>
        </div>
        <div className="text-xs text-slate-500">
          <span>Design inspired by Summitra template · Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
