import type { Metadata } from "next";
import { Rocket, Layers, Clock, HeartHandshake, Sparkles, GraduationCap, BriefcaseBusiness } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/website/page-hero";
import { SectionHeading } from "@/components/website/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Career",
  description:
    "What it's like to work at Nivetra Technologies: our culture, how we build and how to reach us about future roles.",
};

const culture = [
  { icon: Rocket, title: "Ownership from day one", body: "You own real features end to end, not tickets in a queue. Your work ships and reaches people." },
  { icon: Layers, title: "Learn by building", body: "Work across the stack and alongside AI. We grow by shipping real things, not sitting through process." },
  { icon: Clock, title: "Flexible & focused", body: "We care about outcomes, not hours at a desk. Deep work, clear priorities, and room to think." },
  { icon: HeartHandshake, title: "Small team, real support", body: "No bureaucracy and no hiding. You get direct feedback, mentorship and people who have your back." },
  { icon: Sparkles, title: "Craft matters", body: "We sweat the details: clean code, thoughtful design and honest work we're proud to put our name on." },
  { icon: GraduationCap, title: "Always learning", body: "New tools, new problems, new domains. Curiosity is part of the job, and we make space for it." },
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build things that matter, with people who care."
        lead="We're a small, ambitious team that values craft, ownership and honest work. Here's what it's like to build with us."
      />

      {/* Culture */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our culture"
              title="How we work together."
              lead="Nivetra is early and growing. That means real responsibility, close collaboration and the chance to shape how we do things."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sunken text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Openings */}
      <Section className="bg-subtle">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-line bg-surface px-6 py-14 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-subtle text-brand">
                <BriefcaseBusiness className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">No open roles right now</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                We don&apos;t have any openings at the moment, but we&apos;re always glad to meet
                thoughtful engineers, designers and problem-solvers. Send us a note and tell us what
                you&apos;d love to work on; we&apos;ll keep you in mind as we grow.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/career/apply" size="lg">
                  Send us a note
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
