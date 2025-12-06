import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Organizers", href: "#speakers" },
    { label: "Partners", href: "#partners" },
    { label: "Resources", href: "#resources" },
    { label: "Schedule", href: "#schedule" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-dark/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* left: contact */}
        <div className="hidden md:flex flex-col text-xs text-slate-300">
          <span>support@eventbooking.com</span>
          <span>Gwalior · India</span>
        </div>

        {/* logo + name */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-sm font-bold">
            EB
          </div>
          <span className="font-semibold tracking-wide">Event Booking</span>
        </div>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="px-4 py-2 rounded-full bg-secondary text-sm font-semibold hover:bg-orange-500 transition"
          >
            Book Now
          </a>
        </nav>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/20"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </div>

      {/* mobile nav */}
      {open && (
        <div className="lg:hidden bg-dark border-t border-white/10">
          <nav className="px-4 py-3 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-200 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-4 py-2 rounded-full bg-secondary text-sm font-semibold"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
