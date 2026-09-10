import { cn } from "@/lib/utils";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-background hover:bg-primary-light active:bg-primary-dark",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-foreground hover:text-primary",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-sm font-medium font-body transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href: string;
  external?: boolean;
}

export function ButtonLink({
  variant = "primary",
  className,
  href,
  external = false,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
