import {
  ArrowRight,
  Code2,
  BrainCircuit,
  Workflow,
  Blocks,
  PenTool,
  Rocket,
  Compass,
  CheckCircle2,
  Box,
  Mountain,
  Send,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/website/section-heading";
import { ServiceCard } from "@/components/website/service-card";
import { CtaBand } from "@/components/website/cta-band";
import { services } from "@/config/services";

const trustItems = [
  { icon: Mountain, top: "Innovate", bottom: "Faster" },
  { icon: Box, top: "Scale", bottom: "Smarter" },
  { icon: Send, top: "Automate", bottom: "Better" },
  { icon: InfinityIcon, top: "Grow", bottom: "Together" },
];

const pillars = [
  {
    icon: Code2,
    title: "Build",
    body: "Custom software, web and mobile apps engineered around your exact workflow. Typed, tested and built to last.",
  },
  {
    icon: BrainCircuit,
    title: "Automate",
    body: "AI-powered tools and automated workflows that take over the repetitive, judgement-light work your team shouldn't be doing by hand.",
  },
  {
    icon: Rocket,
    title: "Grow",
    body: "Dashboards, portals and business systems that give you visibility and a clean path to scale as you grow.",
  },
];

const steps = [
  { icon: Compass, title: "Understand", body: "We start from the business problem and the real constraints, not a feature list." },
  { icon: PenTool, title: "Design", body: "Architecture and a working slice early, so you see direction before the full build." },
  { icon: Workflow, title: "Build", body: "Type-safe, tested code shipped in iterations, with you in the loop throughout." },
  { icon: Rocket, title: "Launch & support", body: "Deploy, monitor and hand over cleanly, leaving you a system you can own and extend." },
];

const industries = [
  "Startups",
  "Small & growing businesses",
  "SaaS products",
  "Operations teams",
  "Professional services",
  "Retail & commerce",
];

const whyNivetra = [
  { title: "Engineer-led, not sales-led", body: "You work directly with the people building your software. No layers, no hand-offs." },
  { title: "AI where it earns its place", body: "We use AI when it genuinely solves the problem, and we say so when plain software is the better call." },
  { title: "You own your data and code", body: "Your repositories, your cloud. No lock-in to a black box." },
  { title: "Honest about what works", body: "We tell you the trade-offs up front. No hype, no vanity promises." },
  { title: "Built to scale cleanly", body: "A modular architecture that adds features without a rebuild." },
  { title: "Secure by default", body: "Access control enforced where it counts, not just hidden in the interface." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden pt-16 pb-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hero-wash" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%] grid-faint opacity-50"
        />
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <Container>
          <h1 className="mx-auto max-w-4xl text-balance text-[2.6rem] font-bold leading-[1.04] sm:text-6xl lg:text-[4.2rem]">
            Engineering the future of{" "}
            <span className="text-gradient">digital business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Nivetra builds powerful software, mobile apps, intelligent AI solutions and automation
            that help businesses simplify operations, remove repetitive work and grow.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Let&apos;s Build Together
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              Explore Our Services
            </Button>
          </div>
          </Container>
        </div>

        {/* Trust band — aligned to the page container, pinned to the hero bottom */}
        <Container className="mt-12">
          {/* gradient for the trust-band icons (matches the brand mark) */}
          <svg width="0" height="0" aria-hidden className="absolute">
            <defs>
              <linearGradient id="trustGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-grad-from)" />
                <stop offset="100%" stopColor="var(--color-grad-to)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="w-full rounded-2xl bg-ink/[0.02] px-4 py-7 ring-1 ring-line/60 sm:px-10">
            <p className="text-center text-sm font-semibold tracking-wide text-ink/70">
              Trusted by innovative businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-y-7 sm:flex sm:items-center sm:divide-x sm:divide-line/80">
              {trustItems.map((item) => (
                <div
                  key={item.top}
                  className="flex items-center justify-center gap-3 sm:flex-1"
                >
                  <item.icon
                    className="h-7 w-7 shrink-0"
                    style={{ stroke: "url(#trustGrad)" }}
                    strokeWidth={1.75}
                  />
                  <span className="whitespace-nowrap text-[0.95rem] font-semibold text-ink/80">
                    {item.top} {item.bottom}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <Section className="pt-4">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Software and AI that solve real business problems."
              lead="We're a technology-first company. Every project starts with the operational pain you're trying to remove, then we build the smallest system that genuinely fixes it."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sunken text-brand">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-subtle">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Services"
                title="What we can build for you."
                lead="One engineering standard across everything we do."
              />
              <Button href="/services" variant="secondary" className="shrink-0">
                All services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* AI & automation */}
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink p-8 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(30rem 20rem at 15% 10%, rgba(11,167,251,0.35), transparent 60%), radial-gradient(26rem 18rem at 90% 100%, rgba(99,34,242,0.38), transparent 60%)",
                }}
              />
              <div className="relative space-y-4">
                {[
                  { k: "Document processing", v: "Extract · classify · route" },
                  { k: "Intelligent assistants", v: "Understand · answer · act" },
                  { k: "Data pipelines", v: "Collect · clean · analyse" },
                  { k: "Workflow automation", v: "Trigger · act · notify" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-white">{row.k}</span>
                    <span className="text-xs text-white/55">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="AI & automation"
                title="Put the repetitive work on autopilot."
                lead="We build AI tools and automated workflows that produce reliable, explainable results, with humans in the loop where judgement matters."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Explainable results, not a black box",
                  "Automate the busywork, keep the judgement",
                  "Measured honestly before anything ships",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {t}
                  </li>
                ))}
              </ul>
              <Button href="/services" variant="secondary" className="mt-8">
                Explore our services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* How we work */}
      <Section className="bg-subtle">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How we work" title="A clear path from problem to shipped." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-2 select-none font-display text-5xl font-bold text-brand/15"
                  >
                    0{i + 1}
                  </span>
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who we help"
              title="Built for teams that need to move."
              lead="We work best with organisations that have a concrete problem and want a system they can own, from first-time founders to established businesses."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 text-sm font-medium text-ink-soft"
                >
                  <Blocks className="h-4 w-4 shrink-0 text-brand" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Why Nivetra */}
      <Section className="bg-subtle">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why Nivetra" title="What you get that you won't elsewhere." />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyNivetra.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-surface p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <h3 className="text-base font-semibold">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
