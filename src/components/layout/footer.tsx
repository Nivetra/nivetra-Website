import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/brand-icons";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { nav, contact, siteConfig, whatsappLink } from "@/config/site";
import { services } from "@/config/services";

// Evaluated once at build (module scope) — stable during prerender.
const YEAR = new Date().getFullYear();

export function Footer() {
  const wa = whatsappLink();

  return (
    <footer className="mt-auto border-t border-line bg-subtle">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted">{siteConfig.description}</p>
          <p className="mt-5 text-sm font-semibold text-gradient">{siteConfig.tagline}</p>
        </div>

        <FooterCol title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href="/services">
              {s.title}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          {nav.map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Get in touch">
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand">
              <Mail className="h-4 w-4 text-brand" />
              {contact.email}
            </a>
          )}
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-brand">
              <MessageCircle className="h-4 w-4 text-brand" />
              WhatsApp
            </a>
          )}
          {contact.location && (
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-brand" />
              {contact.location}
            </span>
          )}
          {contact.social.linkedin && (
            <a
              href={contact.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-muted transition-colors hover:border-brand/40 hover:text-brand"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
        </FooterCol>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-faint sm:flex-row">
          <p>
            © {YEAR} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built. Automated. Grown.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted transition-colors hover:text-brand">
      {children}
    </Link>
  );
}
