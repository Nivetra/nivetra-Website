import { cn } from "@/lib/utils";

/** Centered page container with consistent side gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[92rem] px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/** Vertical rhythm wrapper for page sections. */
export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}

/** Small uppercase label used above section headings. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand",
        className,
      )}
    >
      <span className="h-px w-6 bg-brand/50" aria-hidden />
      {children}
    </span>
  );
}
