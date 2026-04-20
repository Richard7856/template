"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Shor4Logo } from "./shor4-logo";

export function Shor4Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center pt-16">
      {/* Amber glow radial — top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, #F59E0B, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            {/* Eyebrow */}
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

            {/* Headline */}
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
              Custom rackets, balls, bags, grips and accessories — fully branded
              with your logo.
            </motion.p>

            {/* Products row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {["Rackets", "Balls", "Sports bags", "Frame protectors", "Grips"].map(
                (p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                  >
                    {p}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs */}
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
              <Link
                href="#products"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                View catalog →
              </Link>
            </motion.div>
          </div>

          {/* Right — stats card + logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Big logo */}
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden
                  className="absolute h-64 w-64 rounded-full opacity-15"
                  style={{
                    background:
                      "radial-gradient(closest-side, #F59E0B, transparent)",
                  }}
                />
                <Shor4Logo size={160} />
              </div>
            </div>

            {/* Stats card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-amber-400">
                <TrendingUp className="h-4 w-4" />
                <span className="font-mono text-xs tracking-widest uppercase">
                  Explosive Growth Worldwide
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-white">
                Padel around the world
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                Analyzing and participating in its sponsorship ecosystem is
                fundamental today. Your brand won&apos;t just be present — it will be
                the center of attention for new generations.
              </p>
              <div className="mt-5 flex gap-8">
                <div>
                  <div className="font-mono text-3xl font-bold text-amber-400">
                    +300%
                  </div>
                  <div className="mt-1 font-mono text-xs tracking-widest text-white/30 uppercase">
                    New courts
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-white">
                    Top 1
                  </div>
                  <div className="mt-1 font-mono text-xs tracking-widest text-white/30 uppercase">
                    Social sport
                  </div>
                </div>
              </div>
            </div>

            {/* Divider tagline */}
            <div className="text-center">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/20">
                Padel is the new Golf for closing deals
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
