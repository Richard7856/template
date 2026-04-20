"use client";

import { motion } from "framer-motion";
import {
  PlugZap,
  Boxes,
  Cpu,
  LineChart,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/* Timeline de 4 pasos con animación on-scroll.
   WHY: el original tenía "how it works" implícito y confuso. Aquí hacemos explícito
   el flujo de onboarding — reduce fricción de ventas. */

const steps = [
  {
    icon: PlugZap,
    number: "01",
    title: "Conectas tu tienda",
    description:
      "Instala el plugin de Shopify, WooCommerce o conecta vía API. 15 minutos de setup.",
  },
  {
    icon: Boxes,
    number: "02",
    title: "Nos envías tu inventario",
    description:
      "Recibimos en bodega o recolectamos en tu ubicación. Registramos y fotografiamos todo.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "La IA enruta cada pedido",
    description:
      "Elegimos la mejor paquetería por zona, peso y urgencia. Generamos etiqueta automáticamente.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Monitoreas en tiempo real",
    description:
      "Dashboard único con estado de envíos, inventario, reembolsos y costos por SKU.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-surface-muted/40 border-y border-border">
      <Container>
        <SectionHeading
          index="04"
          total="06"
          eyebrow="Del checkout a la puerta"
          title={
            <>
              Cuatro pasos.{" "}
              <span className="font-serif-italic text-muted-foreground">
                Cero fricción.
              </span>
            </>
          }
          description="Un flujo pensado para ecommerce que crece: empezás hoy, escalás sin renegociar contratos."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Step({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Línea conectora en desktop */}
      {!isLast && (
        <div
          aria-hidden
          className="hidden lg:block absolute top-6 left-12 right-0 h-px bg-gradient-to-r from-border-strong to-transparent"
        />
      )}

      <div className="relative flex items-center gap-3">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-ink-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <span className="font-mono text-sm text-muted-foreground">
          {step.number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  );
}
