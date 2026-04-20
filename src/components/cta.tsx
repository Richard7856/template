"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/* CTA final con form inline.
   WHY: una sola meta de conversión al final reduce fricción. El form no se envía
   a ningún backend (es un demo); cuando el socio conecte su CRM, cambiamos handleSubmit. */
export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a CRM / Supabase / n8n webhook según stack del socio.
    setSubmitted(true);
  }

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] bg-ink p-10 md:p-16"
        >
          {/* Fondo decorativo dentro del CTA — gradient orbital */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(16,185,129,0.35), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
              maskImage:
                "radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-ink-foreground/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Setup en 48h · Sin cuota fija
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-ink-foreground sm:text-4xl md:text-5xl md:leading-[1.05]">
                Dejá de pelearte con la{" "}
                <span className="font-serif-italic">logística</span>.
                <br />
                <span className="text-accent">Cotizá en 30 segundos.</span>
              </h2>
              <p className="mt-5 max-w-lg text-ink-foreground/70">
                Contanos el volumen de tu operación y te mandamos una cotización
                punto-a-punto el mismo día. Sin llamadas si no las pedís.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl bg-surface p-6 md:p-7 shadow-2xl"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">
                    ¡Recibido!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Te escribimos a <strong>{email}</strong> dentro de 4 horas
                    hábiles.
                  </p>
                </div>
              ) : (
                <>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    ¿A qué email te enviamos la cotización?
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hola@tutienda.com"
                    className="mt-3 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
                  />

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <select
                      className="rounded-xl border border-border bg-surface px-3 py-3 text-sm text-foreground outline-none focus:border-accent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Volumen mensual
                      </option>
                      <option>0 — 500 envíos</option>
                      <option>500 — 5,000</option>
                      <option>5,000+</option>
                    </select>
                    <select
                      className="rounded-xl border border-border bg-surface px-3 py-3 text-sm text-foreground outline-none focus:border-accent"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Servicio principal
                      </option>
                      <option>Shipping</option>
                      <option>Fulfillment</option>
                      <option>Pickup points</option>
                      <option>Todo</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="mt-4 w-full group">
                    Enviar solicitud
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Respondemos en menos de 4 horas hábiles.
                  </p>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
