/**
 * Site-wide configuration. Contact details are env-driven with sensible
 * defaults; override via NEXT_PUBLIC_* vars (see .env.example).
 */

export const siteConfig = {
  name: "Nivetra Technologies",
  shortName: "Nivetra",
  domain: "nivetra.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nivetra.com",
  description:
    "Nivetra Technologies is an AI-first software company building intelligent applications, custom business software, mobile apps and automation that help businesses work smarter.",
  tagline: "Build. Automate. Grow.",
} as const;

export const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

/** Contact + social — env driven, with sensible defaults. */
export const contact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "nivetrabusiness@zohomail.in",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "", // digits, e.g. 919000000000
  location: process.env.NEXT_PUBLIC_LOCATION ?? "India",
  social: {
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X ?? "",
  },
} as const;

export function whatsappLink(message?: string) {
  if (!contact.whatsapp) return "";
  const base = `https://wa.me/${contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
