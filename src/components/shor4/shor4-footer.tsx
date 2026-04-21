import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* Footer rediseñado — cuatro columnas + strip CTA en la cima.
   WHY: el footer anterior era ultra-minimal y flotante. Éste es estructurado:
   strip de CTA → grid 4 cols → wordmark → copyright. Más editorial y útil. */

const footerLinks = [
  {
    title: "Products",
    links: [
      ["Padel Rackets", "#products"],
      ["Pressurized Balls", "#products"],
      ["Sports Bags", "#products"],
      ["Grips & Overgrips", "#products"],
      ["Frame Protectors", "#products"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About SHOR4", "#"],
      ["Market Opportunity", "#market"],
      ["Sponsorship", "#sponsorship"],
      ["Branded Portfolio", "#"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["jr@shor4.com", "#"],
      ["dsh@shor4.com", "#"],
      ["lsh@shor4.com", "#"],
      ["www.shor4.com", "#"],
    ],
  },
  {
    title: "Racket Shapes",
    links: [
      ["Round — Precise Control", "#products"],
      ["Diamond — Max Power", "#products"],
      ["Tear — Balance & Versatility", "#products"],
    ],
  },
];

export function Shor4Footer() {
  return (
    <footer className="bg-[#0D0D0D]">

      {/* CTA strip — línea ámbar en el tope + brand + botón */}
      <div className="border-t-2 border-amber-400">
        <div className="mx-auto max-w-7xl px-6 py-7 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <Image
              src="/shor4/logo.png"
              alt="SHOR4"
              width={40}
              height={30}
              className="object-contain"
            />
            <div>
              <span className="block font-bold tracking-widest text-white text-sm">SHOR4</span>
              <span className="block font-mono text-[9px] tracking-[0.18em] text-white/30 uppercase">
                by Magneticmark LLC
              </span>
            </div>
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400 px-6 py-2.5 text-sm font-bold text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-200"
          >
            Position your brand
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* 4-column link grid */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 gap-10 sm:grid-cols-4">
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-amber-400 mb-5">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/30 hover:text-white transition-colors leading-snug"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Wordmark — visible pero editorial */}
      <div className="overflow-hidden">
        <div
          aria-hidden
          className="select-none whitespace-nowrap px-4 font-bold leading-[0.82] tracking-[-0.06em] text-[13vw] text-white/[0.07]"
        >
          SHOR<span className="text-amber-400/25">4</span>.
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-white/20">
          <span>© {new Date().getFullYear()} Magneticmark LLC · All rights reserved</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
