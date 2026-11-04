import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/website/page-hero";
import { ServiceCard } from "@/components/website/service-card";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/website/cta-band";
import { services } from "@/config/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web and mobile apps, AI and automation, cloud and DevOps, APIs, data analytics, UI/UX design and custom business solutions, held to one engineering standard.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we can build for you."
        lead="From custom software and mobile apps to AI and automation. One engineering standard across everything we do."
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i, 5) * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <Link
                href="/contact"
                className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-line-strong bg-surface p-6 transition-colors hover:border-brand/40"
              >
                <div>
                  <h3 className="text-lg font-semibold">Not sure what you need?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Describe the problem. We&apos;ll tell you whether software, an app, AI or
                    automation is the right fit, honestly.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Talk to us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>
      <CtaBand
        title="Ready to start building?"
        lead="Tell us what you're trying to achieve and we'll map out the right approach: software, apps, AI or automation."
        primary={{ label: "Let's Build It Together", href: "/contact" }}
        secondary={null}
      />
    </>
  );
}
