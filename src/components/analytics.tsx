"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Map, Bell, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/* Sección de analítica de negocio.
   WHY: diferenciador enterprise — no solo entregamos, le damos al cliente visibilidad
   sobre su operación con datos accionables por zona, hora y canal. */

const features = [
  {
    icon: Map,
    title: "Mapa de calor por zona",
    description:
      "Identificá las colonias con mayor demanda y ajustá tu inventario antes de que se agote.",
  },
  {
    icon: TrendingUp,
    title: "Volumen y tendencias",
    description:
      "Comparativa diaria, semanal y mensual de entregas, devoluciones y tiempos promedio.",
  },
  {
    icon: Bell,
    title: "Alertas automáticas",
    description:
      "Recibís notificación cuando un envío supera el SLA o hay un patrón de fallos en una zona.",
  },
  {
    icon: Download,
    title: "Reportes exportables",
    description:
      "Exportá a CSV o conectá vía API con tu ERP, BI o CRM — los datos son tuyos.",
  },
];

const barData = [42, 67, 55, 88, 73, 95, 81, 76, 90, 84, 92, 88];

const zoneStats = [
  { zona: "Polanco – Lomas", pct: 92 },
  { zona: "Roma – Condesa", pct: 87 },
  { zona: "Coyoacán – Del Valle", pct: 81 },
];

export function Analytics() {
  return (
    <section id="analytics" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="03"
          total="06"
          eyebrow="Inteligencia de negocio"
          title={
            <>
              Tu operación,{" "}
              <span className="font-serif-italic text-muted-foreground">
                medible
              </span>{" "}
              al detalle.
            </>
          }
          description="No solo entregamos — te damos los datos para optimizar. Dashboard en tiempo real con métricas por zona, horario y canal de venta."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-surface overflow-hidden shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2 font-meta text-xs text-foreground">
                <BarChart2 className="h-3.5 w-3.5 text-accent" />
                Panel de operaciones · CDMX
              </div>
              <span className="font-meta text-xs text-muted-foreground">
                Últimas 24h
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
              {[
                { label: "Entregas", value: "1,284", trend: "+12%" },
                { label: "Tasa de éxito", value: "98.3%", trend: "+0.4%" },
                { label: "Tiempo prom.", value: "47 min", trend: "−3 min" },
              ].map((stat) => (
                <div key={stat.label} className="p-4">
                  <div className="font-mono text-lg font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-1 font-meta text-xs text-accent">
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="p-5">
              <div className="mb-3 font-meta text-xs text-muted-foreground">
                Entregas por hora (hoy)
              </div>
              <div className="flex items-end gap-1.5" style={{ height: "80px" }}>
                {barData.map((v, i) => (
                  <div key={i} className="flex-1 h-full flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${v}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.04,
                        ease: "easeOut",
                      }}
                      className="w-full rounded-sm bg-accent/80"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Zone breakdown */}
            <div className="border-t border-border divide-y divide-border">
              {zoneStats.map((z) => (
                <div
                  key={z.zona}
                  className="flex items-center gap-3 px-5 py-3"
                >
                  <span className="font-meta text-xs text-muted-foreground w-36 flex-shrink-0">
                    {z.zona}
                  </span>
                  <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${z.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                  <span className="font-mono text-xs text-foreground w-10 text-right">
                    {z.pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-muted text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
