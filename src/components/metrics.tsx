"use client";

import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/* Contadores animados on-scroll.
   WHY: sustituye el "AI-powered" vago del original con números concretos.
   Los counters son client components porque usan useInView + animate. */

type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

const metrics: Metric[] = [
  { value: 2.4, suffix: "M", prefix: "+", label: "Envíos despachados en 2025", decimals: 1 },
  { value: 14, label: "Ciudades con cobertura propia" },
  { value: 18.4, suffix: "h", label: "Tiempo promedio de entrega", decimals: 1 },
  { value: 98, suffix: "%", label: "Clientes que repiten al 3er mes" },
];

export function Metrics() {
  return (
    <section id="resultados" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            index="05"
            total="06"
            eyebrow="En números"
            title={
              <>
                Evidencia{" "}
                <span className="font-serif-italic text-muted-foreground">
                  medible.
                </span>
              </>
            }
            description="Cuando decimos 'hasta 32% más barato' es porque lo medimos. Auditamos nuestra operación cada trimestre con clientes."
          />

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border">
            {metrics.map((m, i) => (
              <MetricCard key={i} metric={m} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MetricCard({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    metric.decimals ? v.toFixed(metric.decimals) : Math.round(v).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      animate(count, metric.value, { duration: 1.6, ease: "easeOut" });
    }
  }, [inView, count, metric.value]);

  return (
    <div
      ref={ref}
      className="bg-surface p-8 sm:p-10 transition-colors hover:bg-surface-muted"
    >
      <div className="flex items-baseline gap-1 font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
        {metric.prefix && <span className="text-accent">{metric.prefix}</span>}
        <motion.span>{display}</motion.span>
        {metric.suffix && <span>{metric.suffix}</span>}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{metric.label}</div>
    </div>
  );
}
