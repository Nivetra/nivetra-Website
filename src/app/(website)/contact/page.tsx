import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHero } from "@/components/website/page-hero";
import { ContactForm } from "@/components/website/contact-form";
import { contact, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project. We'll tell you honestly whether software, apps or AI is the right fit, and how we'd build it.",
};

export default function ContactPage() {
  const wa = whatsappLink("Hi Nivetra, I'd like to discuss a project.");

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build something that works."
        lead="Tell us what's slowing your business down. We'll tell you honestly whether software, apps or AI is the right fix, and how we'd approach it."
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <ContactForm />

          <aside className="space-y-4">
            {contact.email && (
              <ContactItem icon={<Mail className="h-5 w-5" />} label="Email" href={`mailto:${contact.email}`}>
                {contact.email}
              </ContactItem>
            )}
            {wa && (
              <ContactItem icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" href={wa}>
                Chat with us
              </ContactItem>
            )}
            {contact.location && (
              <ContactItem icon={<MapPin className="h-5 w-5" />} label="Location">
                {contact.location}
              </ContactItem>
            )}
            <div className="flex items-start gap-3 rounded-2xl border border-line bg-subtle p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-semibold text-ink">Response time</p>
                <p className="mt-1 text-sm text-muted">We usually reply within one business day.</p>
              </div>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/30">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sunken text-brand">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-faint">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-ink">{children}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
