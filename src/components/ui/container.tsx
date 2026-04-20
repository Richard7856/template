import * as React from "react";
import { cn } from "@/lib/utils";

/* Wrapper responsive con ancho máximo consistente.
   Max 1200px para mantener líneas legibles sin sentirse angosto en 1440+. */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
