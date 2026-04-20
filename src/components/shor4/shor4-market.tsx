"use client";

import { motion } from "framer-motion";

/* Por qué PADEL ahora — datos de mercado del catálogo.
   WHY: convencer a empresas de que el padel es el nuevo golf para cerrar deals
   y que la ventana de patrocinio está abierta HOY. */

const stats = [
  { value: "+300%", label: "New courts in the last 5 years", amber: true },
  { value: "Top 1", label: "Fastest growing social sport globally", amber: false },
  { value: "50%", label: "Patronized by clubs", amber: true },
  { value: "50%", label: "Sponsored by brands & partners", amber: false },
];

const racketTypes = [
  {
    shape: "Round",
    description: "Precise Control",
    detail: "Unmatched maneuverability and accuracy for strategic game play.",
  },
  {
    shape: "Diamond",
    description: "Maximum Power",
    detail: "Perfect for aggressive players seeking maximum performance.",
  },
  {
    shape: "Tear",
    description: "Balance & Versatility",
    detail: "Ideal for a well-rounded game offering both control and power.",
  },
];

export function Shor4Market() {
  return (
    <>
      {/* Market section */}
      <section id="market" className="bg-[#0D0D0D] py-28 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400">
                03 / The Rise of Padel
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[60px] md:leading-[1.0]">
                PADEL IS THE
                <br />
                <span className="text-amber-400">NEW GOLF</span>
                <br />
                FOR CLOSING DEALS
              </h2>
              <p className="mt-6 text-lg text-white/40 leading-relaxed">
                Position your brand exactly where{" "}
                <span className="text-white/70">high-value interactions happen</span>{" "}
                and connect with the decision-making segment.
              </p>
              <p className="mt-4 text-sm text-white/30 leading-relaxed">
                Padel is experiencing an incredible boom. Analyzing and participating
                in its sponsorship ecosystem is fundamental today. Your brand won't
                just be present — it will be the center of attention for new generations.
              </p>

              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  THE MOMENT IS NOW
                </span>
              </div>
            </motion.div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-[#0D0D0D] p-8"
                >
                  <div
                    className={`font-mono text-4xl font-bold ${
                      s.amber ? "text-amber-400" : "text-white"
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-white/30 leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship section */}
      <section id="sponsorship" className="bg-[#0A0A0A] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400">
              04 / Sponsorship Ecosystem
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Position your brand{" "}
              <span className="text-white/40">where it matters.</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-xl mx-auto">
              More than a sport — an investment opportunity. Collaborate directly
              with clubs and players or go full-sponsor.
            </p>
          </div>

          {/* Racket types */}
          <div className="grid gap-5 md:grid-cols-3">
            {racketTypes.map((r, i) => (
              <motion.div
                key={r.shape}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:border-amber-400/30 transition-colors"
              >
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400/60">
                  {r.shape} shape
                </div>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {r.description}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/30">
                  {r.detail}
                </p>

                {/* Material badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Titanium", "12K Carbon", "Fiber Glass"].map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/30"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
