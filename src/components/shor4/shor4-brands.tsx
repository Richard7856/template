"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Galería de raquetas branded — prueba social.
   WHY: el comprador B2B necesita ver resultados reales antes de comprometerse.
   Coca-Cola, Mercedes, Red Bull, Amex, Aeromexico son credenciales de primer nivel. */

const branded = [
  { src: "/shor4/products/racket-cocacola.png", brand: "Coca-Cola", color: "#CC0000" },
  { src: "/shor4/products/racket-mercedes.png", brand: "Mercedes-Benz", color: "#999999" },
  { src: "/shor4/products/racket-redbull.png", brand: "Red Bull", color: "#CC1E1E" },
  { src: "/shor4/products/racket-amex.png", brand: "American Express", color: "#016FD0" },
  { src: "/shor4/products/racket-aeromexico.png", brand: "Aeroméxico", color: "#0033A0" },
  { src: "/shor4/products/racket-shor4.png", brand: "SHOR4 Signature", color: "#F59E0B" },
];

export function Shor4Brands() {
  return (
    <section className="bg-[#0A0A0A] py-20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400">
            Social proof
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Brands that trusted their game to SHOR4.
          </h2>
          <p className="mt-3 text-white/30 max-w-md mx-auto text-sm">
            Every racket is a moving billboard. Here's what global brands have built with us.
          </p>
        </motion.div>

        {/* Rackets grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {branded.map((item, i) => (
            <motion.div
              key={item.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex flex-col items-center"
            >
              {/* Racket image — cropped to avoid extraction artifacts */}
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-amber-400/30 group-hover:bg-white/[0.06]"
                style={{ aspectRatio: "1 / 1.2" }}
              >
                <Image
                  src={item.src}
                  alt={`${item.brand} custom padel racket`}
                  fill
                  className="object-contain object-top p-3 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Color glow matching brand */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(closest-side at 50% 50%, ${item.color}, transparent)` }}
                />
              </div>

              {/* Brand name */}
              <p className="mt-3 text-center font-mono text-[10px] tracking-widest text-white/30 uppercase group-hover:text-amber-400/60 transition-colors">
                {item.brand}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/20">
            Your brand could be next.{" "}
            <a href="#contact" className="text-amber-400 hover:text-amber-300 transition-colors">
              Request your personalization quote →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
