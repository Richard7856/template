import Link from "next/link";
import { PackageSearch } from "lucide-react"; // lucide 1.x — brand icons removed, see inline SVGs below
import { Container } from "@/components/ui/container";

/* Brand logos inline — lucide-react 1.x removió los brand marks, mantenemos paths propios.
   Estos son los glyphs oficiales de cada marca reducidos a 24x24 viewBox. */
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const columns = [
  {
    title: "Servicios",
    links: [
      ["Envíos", "#servicios"],
      ["Fulfillment", "#servicios"],
      ["Puntos de retiro", "#servicios"],
      ["Integraciones", "#"],
    ],
  },
  {
    title: "Empresa",
    links: [
      ["Sobre nosotros", "#"],
      ["Casos de éxito", "#casos"],
      ["Blog", "#"],
      ["Trabajá con nosotros", "#"],
    ],
  },
  {
    title: "Recursos",
    links: [
      ["Centro de ayuda", "#"],
      ["API Docs", "#"],
      ["Status operativo", "#"],
      ["Contacto", "#"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted/30">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-ink-foreground">
                <PackageSearch className="h-4 w-4" />
                <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
              </span>
              <span className="text-base">Taimingo</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Logística integral para eCommerce.{" "}
              <span className="font-serif-italic text-foreground/80">
                Envíos, fulfillment y puntos de retiro
              </span>{" "}
              operados por IA.
            </p>
            <div className="mt-6 flex gap-2">
              <SocialLink href="#" icon={LinkedInIcon} label="LinkedIn" />
              <SocialLink href="#" icon={InstagramIcon} label="Instagram" />
              <SocialLink href="#" icon={XIcon} label="X / Twitter" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-meta text-foreground">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Wordmark XL — detalle signature (Linear, Vercel, Stripe lo usan).
            Se recorta en los bordes a propósito para dar sensación editorial/poster. */}
        <div className="mt-20 select-none overflow-hidden">
          <div
            aria-hidden
            className="whitespace-nowrap text-[18vw] font-semibold leading-[0.85] tracking-[-0.06em] text-foreground/[0.08] dark:text-foreground/[0.12] sm:text-[16vw] lg:text-[14vw]"
          >
            TAIMINGO<span className="text-accent/70">.</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 font-meta text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Taimingo · Todos los derechos reservados
          </span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}
