import type { Metadata } from "next";
import { Target, Compass, Heart, ShieldCheck, Eye, Lightbulb, Gauge, Users } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/website/page-hero";
import { SectionHeading } from "@/components/website/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/website/cta-band";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nivetra Technologies is an AI-first software company. Our vision, mission and the principles that guide how we build.",
};

const values = [
  { icon: ShieldCheck, title: "Honesty first", body: "We tell you when software isn't the answer. No overselling, no hype." },
  { icon: Eye, title: "Transparency", body: "Clear scope, clear pricing, clear progress. You always know where your project stands and what comes next, with no surprises." },
  { icon: Lightbulb, title: "Problem over tech", body: "We start from the business problem, then choose the simplest technology that solves it." },
  { icon: Gauge, title: "Ship and iterate", body: "A working slice early beats a perfect spec late. You see progress, not promises." },
  { icon: Users, title: "You stay in control", body: "Your data, your code, your decisions. We build systems you can own and extend." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A technology company built to solve real problems."
        lead="Nivetra Technologies builds intelligent software, mobile apps and automation that help businesses work smarter, and own what they build."
      />

      {/* Intro */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Nivetra is a young, technology-first company. We don&apos;t sell seats or hours. We
                solve operational problems with software and AI, and we build systems that remove real
                work rather than adding dashboards for their own sake.
              </p>
              <p>
                We work with startups and growing businesses: teams that have a concrete problem and
                want a system they can trust. From custom applications and mobile apps to AI-powered
                tools and automation, every project starts with the same question:{" "}
                <span className="font-semibold text-ink">what are we actually trying to fix?</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-subtle p-6">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                Our philosophy
              </span>
              <p className="mt-4 text-3xl font-bold text-gradient">{siteConfig.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Build the right thing. Automate the repetitive work around it. Grow on a foundation
                that scales cleanly.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Vision / Mission / Philosophy */}
      <Section className="bg-subtle">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Vision", body: "A world where any business, not just the large ones, can put intelligent software and automation to work." },
              { icon: Compass, title: "Mission", body: "To build practical, scalable software and AI that removes operational friction and helps businesses grow." },
              { icon: Heart, title: "Our promise", body: "Technology should do more than look impressive. It should solve meaningful problems, simply and reliably." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Founder quote */}
      <Section>
        <Container>
          <Reveal>
            <figure className="mx-auto max-w-3xl rounded-3xl border border-line bg-surface p-8 text-center sm:p-12">
              <blockquote className="text-balance text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">
                &ldquo;We started Nivetra with one belief: great technology should quietly do the
                hard work, so people can focus on what matters. We build to solve, not to
                impress.&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-ink">Harshith</p>
                <p className="text-sm text-muted">Founder &amp; CEO, Nivetra Technologies</p>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-subtle">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our values" title="How we work, in practice." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.06}
                className={
                  i === values.length - 1 && values.length % 2 === 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)]"
                    : undefined
                }
              >
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sunken text-brand">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Think we'd work well together?"
        lead="If our approach fits how you like to build, we'd love to hear what you're working on."
      />
    </>
  );
}
