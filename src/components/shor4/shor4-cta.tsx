"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

/* CTA rediseñado — split screen full-bleed.
   WHY: la versión anterior era una card estándar. Aquí el contraste de color
   (amber vs negro) divide la pantalla sin necesidad de bordes ni contenedores.
   Estructura completamente diferente a la v1. */

export function Shor4CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a n8n webhook / CRM del socio.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

      {/* Left — amber panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-amber-400 flex flex-col justify-between px-10 py-16 md:px-16 overflow-hidden"
      >
        {/* Dot grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-black/40">
            05 / Ready to play?
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-[56px] leading-[1.0]">
            Put your brand<br />on the court.
          </h2>
          <p className="mt-6 text-black/60 leading-relaxed max-w-sm text-[15px]">
            Tell us your volume and we'll send a personalized
            quote the same day. No calls unless you want them.
          </p>
        </div>

        <div className="relative mt-12 space-y-1.5">
          {["jr@shor4.com", "dsh@shor4.com", "lsh@shor4.com", "www.shor4.com"].map((c) => (
            <div key={c} className="font-mono text-sm text-black/50">{c}</div>
          ))}
          <div className="pt-6">
            <Image
              src="/shor4/logo.png"
              alt="SHOR4"
              width={72}
              height={54}
              className="object-contain brightness-0 opacity-30"
            />
          </div>
        </div>
      </motion.div>

      {/* Right — dark form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#0A0A0A] flex items-center px-10 py-16 md:px-16"
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center w-full py-16">
            <CheckCircle2 className="h-12 w-12 text-amber-400" />
            <h3 className="text-2xl font-bold text-white">Request received!</h3>
            <p className="text-white/40 max-w-xs">
              We'll reach out to{" "}
              <strong className="text-white/70">{email}</strong>{" "}
              within 4 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            {/* Email */}
            <div className="group">
              <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 block mb-3">
                Your business email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="brand@company.com"
                className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder:text-white/20 outline-none focus:border-amber-400 transition-colors text-base"
              />
            </div>

            {/* Selects row */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 block mb-3">
                  Product
                </label>
                <select
                  defaultValue=""
                  className="w-full bg-transparent border-b border-white/15 pb-3 text-white/60 outline-none focus:border-amber-400 text-sm appearance-none"
                >
                  <option value="" disabled className="bg-[#0A0A0A]">Select type</option>
                  <option className="bg-[#0A0A0A]">Rackets</option>
                  <option className="bg-[#0A0A0A]">Balls</option>
                  <option className="bg-[#0A0A0A]">Bags</option>
                  <option className="bg-[#0A0A0A]">Full kit</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 block mb-3">
                  Volume
                </label>
                <select
                  defaultValue=""
                  className="w-full bg-transparent border-b border-white/15 pb-3 text-white/60 outline-none focus:border-amber-400 text-sm appearance-none"
                >
                  <option value="" disabled className="bg-[#0A0A0A]">Units</option>
                  <option className="bg-[#0A0A0A]">1 – 50</option>
                  <option className="bg-[#0A0A0A]">50 – 200</option>
                  <option className="bg-[#0A0A0A]">200+</option>
                </select>
              </div>
            </div>

            {/* Submit — texto plano con flecha, sin botón card */}
            <div className="pt-2">
              <button
                type="submit"
                className="group flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors font-bold text-xl"
              >
                Send request
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <p className="mt-3 font-mono text-xs text-white/20">
                Response within 4 business hours · No spam
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
