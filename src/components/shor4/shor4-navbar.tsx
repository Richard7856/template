"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Shor4Logo } from "./shor4-logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Market", href: "#market" },
  { label: "Sponsorship", href: "#sponsorship" },
  { label: "Contact", href: "#contact" },
];

export function Shor4Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link href="/shor4" className="flex items-center gap-3">
          <Shor4Logo size={32} />
          <div>
            <span className="block text-base font-bold tracking-widest text-white">
              SHOR4
            </span>
            <span className="block text-[9px] tracking-[0.2em] text-white/40 uppercase">
              by Magneticmark LLC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black hover:bg-amber-300 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0A] px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block w-full rounded-full bg-amber-400 px-5 py-2.5 text-center text-sm font-semibold text-black"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
