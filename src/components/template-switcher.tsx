"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* Pill flotante para navegar entre plantillas demo.
   WHY: el socio quiere evaluar múltiples diseños sin proyectos separados.
   Vive en layout.tsx para aparecer en todas las rutas. */

const templates = [
  { name: "Taimingo", href: "/" },
  { name: "SHOR4", href: "/shor4" },
];

export function TemplateSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/75 p-1 shadow-xl backdrop-blur-md">
        <span className="px-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
          Templates
        </span>
        {templates.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                active
                  ? "bg-white text-black shadow-sm"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
