import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/container";

/** Compact header band for interior pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hero-wash" />
      <Container className="py-16 sm:py-20 lg:py-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </div>
  );
}
