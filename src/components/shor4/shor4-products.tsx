"use client";

import { motion } from "framer-motion";
import { Layers, Circle, Briefcase, Shield, Hand } from "lucide-react";

/* Sección de productos del catálogo SHOR4.
   WHY: mostrar la amplitud del catálogo con customización full-branding para cada producto. */

const products = [
  {
    icon: Layers,
    number: "01",
    title: "Padel Rackets",
    subtitle: "YOUR BRAND, YOUR DESIGN",
    features: [
      "Round, Diamond or Tear shapes",
      "Materials: Fiber glass, Carbon, 3K, 12K, 18K, Titanium",
      "Full-color printing on all sides",
      "Premium wristband, 3D frosted, Matte or Gloss finish",
    ],
    highlight: "Custom packaging included",
    featured: true,
  },
  {
    icon: Circle,
    number: "02",
    title: "Pressurized Balls",
    subtitle: "3 PERFORMANCE TIERS",
    features: [
      "Entry · Mid-range · Premium",
      "IPT approved",
      "Rebounce 135–145 cm",
      "Weight: 56–59.4g",
    ],
    highlight: "Branded felt & packaging",
    featured: false,
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Sports Bags",
    subtitle: "SIGNATURE SERIES",
    features: [
      "Racket, shoes, phone & water compartments",
      "Backpack & paddle bag formats",
      "Full custom color & print",
    ],
    highlight: "Signature collection",
    featured: false,
  },
  {
    icon: Shield,
    number: "04",
    title: "Frame Protectors",
    subtitle: "40 × 6.5 CM",
    features: [
      "High quality TPU material",
      "1K Carbon texture available",
      "Fits all racket sizes",
    ],
    highlight: "Logo placement",
    featured: false,
  },
  {
    icon: Hand,
    number: "05",
    title: "Grips & Overgrips",
    subtitle: "OVER GRIP + SILICONE HEX",
    features: [
      "Very Sticky overgrip — 175 × 32 mm",
      "Silicone HEX grip — multiple colors",
      "Brand-printed rolls (100–130 units)",
    ],
    highlight: "Your brand every grip",
    featured: false,
  },
];

export function Shor4Products() {
  return (
    <section id="products" className="bg-[#0A0A0A] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-2">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-400">
            02 / Signature Series
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Shall we discuss how we can make{" "}
            <br className="hidden sm:block" />
            your brand&apos;s design &amp;{" "}
            <span className="text-amber-400">create a unique experience?</span>
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured card — spans 2 cols */}
          {products.slice(0, 1).map((p) => (
            <ProductCard key={p.number} product={p} index={0} wide />
          ))}
          {products.slice(1).map((p, i) => (
            <ProductCard key={p.number} product={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  wide,
}: {
  product: (typeof products)[number];
  index: number;
  wide?: boolean;
}) {
  const Icon = product.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06] ${
        wide ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Accent line top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Index */}
      <span className="font-mono text-xs text-white/20">{product.number}</span>

      <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-400">
        <Icon className="h-5 w-5" />
      </div>

      <p className="mt-5 font-mono text-[10px] tracking-[0.2em] uppercase text-amber-400/70">
        {product.subtitle}
      </p>
      <h3 className="mt-1.5 text-xl font-bold text-white">{product.title}</h3>

      <ul className="mt-4 space-y-2">
        {product.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm text-white/40">
            <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-amber-400/50" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-amber-400/60">{product.highlight}</span>
        <span className="font-mono text-xs text-white/20 group-hover:text-amber-400 transition-colors">
          →
        </span>
      </div>
    </motion.article>
  );
}
