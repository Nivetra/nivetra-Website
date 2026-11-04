import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_8px_24px_-8px_rgba(11,167,251,0.55)] hover:shadow-[0_12px_30px_-8px_rgba(99,34,242,0.5)] hover:-translate-y-0.5",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-brand/40 hover:text-brand",
  ghost: "text-ink hover:bg-sunken",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/** Button that renders an <a>/<Link> when given href, otherwise a <button>. */
export function Button(
  props: CommonProps &
    (
      | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "className" | "href">)
      | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    ),
) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as { href: string };
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
