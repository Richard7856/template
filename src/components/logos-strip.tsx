"use client";

import { Container } from "@/components/ui/container";

/* Strip de logos placeholder.
   WHY: prueba social es la debilidad #1 del original. Aun con placeholders, comunica
   credibilidad. Marquee infinito usando CSS animation + duplicación del array. */

const companies = [
  "Mercando",
  "NeoShop",
  "VelocityAI",
  "CajaMX",
  "Laguna",
  "Runa&Co",
  "Bodega 9",
  "Orbital",
];

export function LogosStrip() {
  return (
    <section
      aria-label="Marcas que confían en Taimingo"
      className="border-y border-border bg-surface-muted/40 py-10"
    >
      <Container>
        <p className="mb-6 text-center">
          <span className="font-meta text-muted-foreground">+380 marcas</span>{" "}
          <span className="font-serif-italic text-lg text-foreground/80">
            operan con nosotros
          </span>
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-12 animate-marquee">
            {[...companies, ...companies].map((name, i) => (
              <LogoPlaceholder key={`${name}-${i}`} name={name} />
            ))}
          </div>
          {/* Fades laterales para que el loop no se "corte" visualmente */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </Container>
    </section>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-10 items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
      <div className="h-5 w-5 rounded-md border border-border-strong bg-surface" />
      <span className="text-base font-medium tracking-tight">{name}</span>
    </div>
  );
}
