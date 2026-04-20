import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  index?: string;
  total?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/* Encabezado editorial con indexing tipo "01 — SERVICIOS / 05".
   Eyebrow en serif italic da contraste tipográfico serif vs sans del título.
   WHY: wayfinding + jerarquía editorial (Linear, Stripe, Apple lo usan). */
export function SectionHeading({
  eyebrow,
  index,
  total,
  title,
  description,
  align = "left",
  className,
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={cn("max-w-3xl", alignment, className)}>
      {(index || eyebrow) && (
        <div
          className={cn(
            "flex items-baseline gap-3",
            align === "center" && "justify-center"
          )}
        >
          {index && (
            <span className="font-meta text-accent">
              {index}
              {total && (
                <span className="text-muted"> / {total}</span>
              )}
            </span>
          )}
          {index && eyebrow && (
            <span className="h-px w-8 bg-border-strong" aria-hidden />
          )}
          {eyebrow && (
            <span className="font-serif-italic text-lg text-muted-foreground md:text-xl">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl md:text-[48px] md:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
