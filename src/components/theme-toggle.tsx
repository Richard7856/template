"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

/* Toggle light/dark sin context provider.
   WHY: un solo consumidor (navbar) no justifica provider + hydration complexity.
   El estado "fuente de verdad" es la clase en <html>, leída al montar. */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sincroniza el estado local con la clase que el script inline ya aplicó
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    const root = document.documentElement;

    // Flag temporal para activar las transiciones solo durante el switch
    // (evita animar todo el árbol al cargar la página)
    root.classList.add("theme-transitioning");
    root.classList.toggle("dark", next === "dark");

    try {
      localStorage.setItem("theme", next);
    } catch {
      // silencioso: localStorage bloqueado no rompe la UX
    }

    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-transitioning"), 220);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
      }
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:bg-surface-muted",
        className
      )}
    >
      {/* Placeholder mientras no montó — evita mismatch de ícono SSR vs cliente */}
      {!mounted ? (
        <span className="h-4 w-4" aria-hidden />
      ) : theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
