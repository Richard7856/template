"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Shor4Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center pt-16">
      {/* Amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full opacity-15"
        style={{ background: "radial-gradient(closest-side, #F59E0B, transparent 70%)" }}
      />
      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-amber-400" />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400">
                The fusion of sport & branding
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-8 text-5xl font-bold leading-[1.0] tracking-[-0.02em] text-white sm:text-6xl md:text-[72px]"
            >
              Your brand on{" "}
              <span className="text-amber-400">premium</span>
              <br />
              Padel equipment.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50"
            >
              Turn every match into a{" "}
              <span className="text-white/80">high-impact advertising campaign</span>.
              Custom rackets, balls, bags, grips and accessories — fully branded with your logo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {["Rackets", "Balls", "Sports bags", "Frame protectors", "Grips"].map((p) => (
                <span key={p} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                  {p}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
              >
                Request a personalization quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="#products" className="text-sm text-white/40 hover:text-white transition-colors">
                View catalog →
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 font-mono text-xs tracking-[0.22em] uppercase text-white/20"
            >
              Padel is the new Golf for closing deals
            </motion.p>
          </div>

          {/* Right — real product photo + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero product shot */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/shor4/products/hero-shot.png"
                alt="SHOR4 Signature Series — racket, bag, balls and accessories"
                width={695}
                height={1244}
                className="w-full object-cover"
                priority
              />
              {/* Gradient overlay bottom for stats card */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-5">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <TrendingUp className="h-3.5 w-3.5" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                  Explosive Growth Worldwide
                </span>
              </div>
              <div className="flex gap-8">
                <div>
                  <div className="font-mono text-2xl font-bold text-amber-400">+300%</div>
                  <div className="font-mono text-[10px] tracking-widest text-white/30 uppercase mt-1">New courts</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-white">Top 1</div>
                  <div className="font-mono text-[10px] tracking-widest text-white/30 uppercase mt-1">Social sport</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-white">48h</div>
                  <div className="font-mono text-[10px] tracking-widest text-white/30 uppercase mt-1">Production start</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
