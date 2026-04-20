"use client";

import { motion } from "framer-motion";
import { Eye, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/* Sección de visibilidad en tiempo real.
   WHY: diferenciador clave pedido por el socio — el cliente final ve su paquete moverse
   dentro de su ciudad. El dashboard muestra la operación en vivo al equipo del negocio. */

type LivePackage = {
  id: string;
  origin: string;
  dest: string;
  progress: number;
  eta: string;
};

const livePackages: LivePackage[] = [
  { id: "TMG-48219", origin: "Polanco", dest: "Roma Norte", progress: 72, eta: "12 min" },
  { id: "TMG-48220", origin: "Condesa", dest: "Juárez", progress: 45, eta: "28 min" },
  { id: "TMG-48221", origin: "Del Valle", dest: "Narvarte", progress: 93, eta: "4 min" },
  { id: "TMG-48218", origin: "Coyoacán", dest: "Tlalpan", progress: 100, eta: "Entregado" },
];

export function TrackingLive() {
  return (
    <section id="tracking" className="py-24 md:py-32 bg-surface-muted/40 border-y border-border">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            index="02"
            total="06"
            eyebrow="Visibilidad total"
            title={
              <>
                Cada paquete,{" "}
                <span className="font-serif-italic text-muted-foreground">visible</span>{" "}
                en tiempo real.
              </>
            }
            description="Tu cliente sabe exactamente dónde está su pedido dentro de la ciudad. Tu equipo ve toda la operación en un dashboard — sin llamadas, sin rastreos manuales."
          />

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
                <Eye className="h-3.5 w-3.5 text-accent" />
                Monitor en vivo · CDMX
              </div>
              <div className="flex items-center gap-1.5 font-meta text-xs text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                847 envíos activos
              </div>
            </div>

            {/* Package rows */}
            <div className="divide-y divide-border">
              {livePackages.map((pkg, i) => (
                <PackageRow key={pkg.id} pkg={pkg} delay={i * 0.08} />
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border bg-surface-muted/30 px-5 py-3">
              <p className="font-meta text-xs text-muted-foreground">
                Tu cliente recibe el link de tracking al confirmar el pedido. Actualización cada 30 seg.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function PackageRow({ pkg, delay }: { pkg: LivePackage; delay: number }) {
  const isDelivered = pkg.progress === 100;
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="px-5 py-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className={`flex h-1.5 w-1.5 rounded-full ${
              isDelivered ? "bg-accent" : "bg-amber-400 animate-pulse"
            }`}
          />
          <span className="font-meta text-xs text-muted-foreground">{pkg.id}</span>
        </div>
        <span className={`font-meta text-xs ${isDelivered ? "text-accent" : "text-muted-foreground"}`}>
          {pkg.eta}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <MapPin className="h-3 w-3 text-muted-foreground flex-shrink-0" />
        <span className="text-muted-foreground">{pkg.origin}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="font-medium text-foreground">{pkg.dest}</span>
      </div>

      <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-surface-muted">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${pkg.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          className={`h-full rounded-full ${isDelivered ? "bg-accent" : "bg-amber-400"}`}
        />
      </div>
    </motion.div>
  );
}
