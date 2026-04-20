"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/* Testimonios placeholder con estructura editable por el socio.
   WHY: prueba social faltante en original. Diseño tipo "card stack" con
   una quote destacada grande + 2 secundarias. */

const testimonials = [
  {
    featured: true,
    quote:
      "Pasamos de 3 paqueterías y un equipo de 4 personas coordinando envíos, a despachar 8,000 pedidos al mes con dos integraciones. La facturación unificada nos ahorró 40 horas/mes de reconciliación.",
    author: "Paula Ortega",
    role: "COO, Mercando",
    initials: "PO",
    rating: 5,
  },
  {
    quote:
      "Los puntos de retiro redujeron 62% nuestros intentos fallidos en zonas complicadas. El ROI fue claro en el primer mes.",
    author: "Daniel Rivas",
    role: "Founder, NeoShop",
    initials: "DR",
    rating: 5,
  },
  {
    quote:
      "El WMS de Taimingo reemplazó nuestro ERP de inventario. Onboarding en 2 semanas.",
    author: "Lucía Medina",
    role: "Head of Ops, Laguna",
    initials: "LM",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="casos" className="py-24 md:py-32 bg-surface-muted/40 border-y border-border">
      <Container>
        <SectionHeading
          index="06"
          total="06"
          eyebrow="Voces del campo"
          title={
            <>
              Marcas que dejaron de{" "}
              <span className="font-serif-italic">pensar</span> en logística.
            </>
          }
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={
        t.featured
          ? "rounded-3xl border border-ink bg-ink text-ink-foreground p-8 md:p-10 lg:col-span-2 lg:row-span-1"
          : "rounded-3xl border border-border bg-surface p-8"
      }
    >
      <div className="flex gap-1 text-accent">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <blockquote
        className={
          t.featured
            ? "mt-5 text-xl md:text-2xl leading-snug font-medium tracking-tight"
            : "mt-4 text-base leading-relaxed"
        }
      >
        “{t.quote}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        <div
          className={
            "flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-semibold " +
            (t.featured
              ? "bg-accent text-accent-foreground"
              : "bg-surface-muted text-foreground")
          }
        >
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-medium">{t.author}</div>
          <div
            className={
              "text-xs " +
              (t.featured ? "text-ink-foreground/60" : "text-muted-foreground")
            }
          >
            {t.role}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}
