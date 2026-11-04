import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/website/page-hero";
import { ApplicationForm } from "@/components/website/application-form";

export const metadata: Metadata = {
  title: "Send us a note",
  description:
    "No open roles right now, but we'd love to meet you. Send your details and resume and we'll keep you in mind as Nivetra grows.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Send us a note."
        lead="We're not actively hiring right now, but good people are always worth knowing. Tell us about yourself, attach your resume, and we'll reach out when there's a fit."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <ApplicationForm />

          <aside className="space-y-4">
            <AsideItem icon={<ShieldCheck className="h-5 w-5" />} title="Handled with care">
              Your application and resume are emailed straight to our team. Nothing is stored on a
              third-party dashboard.
            </AsideItem>
            <AsideItem icon={<Clock className="h-5 w-5" />} title="What happens next">
              We read every note. If your background fits something we&apos;re planning, we&apos;ll
              reach out directly.
            </AsideItem>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 px-1 text-sm font-medium text-muted hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to careers
            </Link>
          </aside>
        </Container>
      </Section>
    </>
  );
}

function AsideItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
      <span className="mt-0.5 text-brand">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
