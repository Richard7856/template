"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Globe } from "lucide-react";

/* CTA de cotización — formulario simple igual que en Taimingo pero con paleta SHOR4.
   El form no conecta a backend todavía. TODO: conectar a n8n/CRM del socio. */

export function Shor4CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a CRM / n8n webhook según stack del socio.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#0D0D0D] py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-amber-400/5 p-10 md:p-16"
        >
          {/* Amber glow corner */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full opacity-30"
            style={{
              background: "radial-gradient(closest-side, #F59E0B, transparent)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400">
                05 / Contact
              </span>
              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl leading-[1.05]">
                Ready to put your brand on the court?
              </h2>
              <p className="mt-5 text-white/40 leading-relaxed max-w-md">
                Tell us your volume and we&apos;ll send you a personalized quote the
                same day. No calls unless you want them.
              </p>

              {/* Direct contacts */}
              <div className="mt-8 space-y-3">
                {[
                  { icon: Mail, label: "Sales", value: "jr@shor4.com" },
                  { icon: Mail, label: "Design", value: "dsh@shor4.com" },
                  { icon: Mail, label: "Logistics", value: "lsh@shor4.com" },
                  { icon: Globe, label: "Web", value: "www.shor4.com" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.value} className="flex items-center gap-3">
                      <Icon className="h-3.5 w-3.5 text-amber-400/60 flex-shrink-0" />
                      <span className="font-mono text-xs text-white/20 w-16">
                        {c.label}
                      </span>
                      <span className="text-sm text-white/50">{c.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 md:p-7"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                  <CheckCircle2 className="h-10 w-10 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">
                    Request received!
                  </h3>
                  <p className="text-sm text-white/40">
                    We&apos;ll reach out to{" "}
                    <strong className="text-white/70">{email}</strong> within 4
                    business hours.
                  </p>
                </div>
              ) : (
                <>
                  <label
                    htmlFor="shor4-email"
                    className="text-sm font-medium text-white/70"
                  >
                    Your business email
                  </label>
                  <input
                    id="shor4-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="brand@company.com"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                  />

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <select
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/50 outline-none focus:border-amber-400/50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Product type
                      </option>
                      <option>Rackets</option>
                      <option>Balls</option>
                      <option>Bags</option>
                      <option>Accessories</option>
                      <option>Full kit</option>
                    </select>
                    <select
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/50 outline-none focus:border-amber-400/50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Order volume
                      </option>
                      <option>1–50 units</option>
                      <option>50–200 units</option>
                      <option>200+ units</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
                  >
                    Send request
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="mt-3 text-center text-xs text-white/20">
                    We respond within 4 business hours.
                  </p>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
