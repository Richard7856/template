"use client";

import { motion } from "framer-motion";
import { Truck, Warehouse, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/* Tres servicios del original pero con beneficios concretos + mini-métrica por card.
   WHY: el original repetía beneficios genéricos en 3 secciones; aquí cada card tiene
   una métrica accionable distinta (velocidad, cobertura, conversión). */

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  metric: { value: string; label: string };
  accent?: boolean;
};

const services: Service[] = [
  {
    icon: Truck,
    eyebrow: "Shipping",
    title: "Envíos optimizados por IA",
    description:
      "Entregamos dentro de tu ciudad el mismo día. Elegimos la ruta más rápida por colonia en tiempo real — sin que tu equipo gestione nada.",
    bullets: [
      "Same-day delivery en zona metropolitana",
      "Rutas optimizadas por IA en tiempo real",
      "Cobros unificados en un solo estado de cuenta",
    ],
    metric: { value: "< 4h", label: "Entrega express en zona metro" },
  },
  {
    icon: Warehouse,
    title: "Fulfillment end-to-end",
    eyebrow: "Fulfillment",
    description:
      "Bodegas estratégicas dentro de cada ciudad para despachar en horas, no días. Tú vendes, nosotros almacenamos y empaquetamos.",
    bullets: [
      "Bodegas propias en CDMX, GDL, MTY y más",
      "Same-day picking hasta las 18:00",
      "Inventario en tiempo real con WMS propio",
    ],
    metric: { value: "99.7%", label: "Accuracy de picking" },
    accent: true,
  },
  {
    icon: MapPin,
    eyebrow: "Pickup points",
    title: "Red de puntos de retiro",
    description:
      "Red de puntos dentro de cada ciudad para que tus clientes recojan a la vuelta de su casa. Reduce intentos fallidos hasta 70%.",
    bullets: [
      "Integración con checkout en 1 línea de código",
      "Horario extendido 7 días a la semana",
      "2,400+ puntos en las ciudades donde operamos",
    ],
    metric: { value: "2,400+", label: "Puntos activos" },
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="01"
          total="06"
          eyebrow="Lo que operamos"
          title={
            <>
              Toda tu logística,{" "}
              <span className="font-serif-italic text-muted-foreground">
                una sola plataforma.
              </span>
            </>
          }
          description="Tres piezas que encajan: envío, almacenamiento y retiro. Contrata las que necesites y escala sin cambiar de proveedor."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const cardIndex = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,18,32,0.25)]",
        service.accent
          ? "border-accent/30 bg-gradient-to-br from-accent/[0.08] via-surface to-surface"
          : "border-border bg-surface hover:border-border-strong"
      )}
    >
      {/* Accent stripe vertical izquierda — aparece on-hover, detalle editorial */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-10 bottom-10 w-px bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Index numérico en esquina superior derecha */}
      <span className="absolute right-6 top-6 font-meta text-muted">
        {cardIndex}
      </span>

      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl",
          service.accent
            ? "bg-accent text-accent-foreground"
            : "bg-surface-muted text-foreground"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="mt-6 font-meta text-accent">{service.eyebrow}</div>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2 text-sm">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-foreground/80">
            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-end justify-between border-t border-border pt-5">
        <div>
          <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">
            {service.metric.value}
          </div>
          <div className="text-xs text-muted-foreground">
            {service.metric.label}
          </div>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
