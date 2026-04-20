import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* Botón polimórfico basado en CVA.
   Variantes: primary (accent emerald), dark (ink), ghost (outline), link.
   Tamaños: default, lg, sm, icon. Focus ring siempre accent para consistencia de marca. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:bg-accent-hover shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_10px_30px_-12px_rgba(16,185,129,0.55)] hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_18px_40px_-12px_rgba(16,185,129,0.65)] active:translate-y-px",
        dark: "bg-ink text-ink-foreground hover:bg-ink/90 active:translate-y-px",
        ghost:
          "bg-transparent text-foreground border border-border hover:border-border-strong hover:bg-surface-muted",
        link: "bg-transparent text-foreground hover:text-accent underline-offset-4 hover:underline px-0",
      },
      size: {
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        sm: "h-9 px-4 text-sm",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };
