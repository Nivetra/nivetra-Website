import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaAction = { label: string; href: string };

/** Reusable closing call-to-action band. Pass `secondary={null}` for one button. */
export function CtaBand({
  title = "Have a problem worth solving?",
  lead = "Tell us what's slowing your business down. We'll tell you honestly whether software or AI is the right fix, and how we'd build it.",
  primary = { label: "Let's Talk", href: "/contact" },
  secondary = { label: "Explore Our Services", href: "/services" },
}: {
  title?: string;
  lead?: string;
  primary?: CtaAction;
  secondary?: CtaAction | null;
}) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(40rem 24rem at 20% 0%, rgba(11,167,251,0.4), transparent 60%), radial-gradient(34rem 22rem at 85% 110%, rgba(99,34,242,0.42), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">{lead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                size="lg"
                variant="secondary"
                className="border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 hover:text-white"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
