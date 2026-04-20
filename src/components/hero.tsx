"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { RouteViz } from "@/components/route-viz";

/* Hero con headline orientado a métrica concreta (corrige debilidad del original: value props vagos).
   Layout 7/5: texto a la izquierda, viz a la derecha en desktop; colapsa a columna en mobile. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-24 md:pt-12 md:pb-32">
      {/* Fondo decorativo: gradient radial + grid dots para sensación de profundidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(1000px 500px at 70% 10%, rgba(16,185,129,0.08), transparent 60%), radial-gradient(600px 400px at 10% 80%, rgba(11,18,32,0.04), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border-strong) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Meta stripe tipo Bloomberg terminal — coordenadas, timestamp, versión.
          WHY: detalle editorial que comunica "producto real, no marketing site". */}
      <Container className="mb-14 md:mb-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 font-meta text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Sistema operativo
            </span>
            <span className="hidden sm:inline">19.43° N / 99.13° W</span>
            <span className="hidden md:inline">CDMX · MTY · GDL +11</span>
          </div>
          <div className="font-meta text-muted-foreground">
            <span className="text-foreground">v2.4</span> · Actualizado 20.04.26
          </div>
        </div>
      </Container>

      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 lg:items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-baseline gap-3 font-meta text-muted-foreground"
          >
            <span className="text-accent">00</span>
            <span className="h-px w-8 bg-border-strong" aria-hidden />
            <span>Logística para eCommerce</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="mt-7 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl md:text-[72px] md:leading-[0.98]"
          >
            Reducimos tu costo{" "}
            <span className="font-serif-italic text-accent">logístico</span>
            <br />
            hasta{" "}
            <span className="relative inline-block">
              <span className="relative z-10">32%</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm bg-accent/25"
              />
            </span>{" "}
            sin sacrificar velocidad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Logística local operada por IA. Enviamos{" "}
            <em className="font-serif-italic not-italic text-foreground/90">
              dentro de cada ciudad
            </em>{" "}
            — CDMX en CDMX, GDL en GDL — con tracking en tiempo real y
            métricas para tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" className="group">
              Cotizar mi operación
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="ghost">
              <PlayCircle className="h-4 w-4" />
              Ver cómo funciona (2 min)
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Sin cuota fija · Solo pagas por envío
            </span>
            <span className="hidden sm:inline text-border-strong">·</span>
            <span>Integración Shopify · WooCommerce · TiendaNube</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(11,18,32,0.18)]">
            <div className="absolute inset-0 text-ink/60 dark:text-foreground/40">
              <RouteViz />
            </div>

            {/* Tarjeta flotante "live" — aporta sensación de dashboard real */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border bg-background/90 backdrop-blur p-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Envío en tránsito · #TMG-48219
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    Polanco → Roma Norte
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">ETA</div>
                  <div className="text-sm font-semibold text-accent">
                    43 min
                  </div>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "64%" }}
                  transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
