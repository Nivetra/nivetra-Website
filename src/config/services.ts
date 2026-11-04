/**
 * Nivetra's service lines. Fixed company offerings with stable slugs (used as
 * list keys and by the contact form). Only the fields rendered on the site are
 * kept here: title, icon and summary.
 */
import type { ServiceIconName } from "@/config/service-icons";

export type Service = {
  slug: string;
  title: string;
  /** icon name (resolve with getServiceIcon) */
  icon: ServiceIconName;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: "Code2",
    summary:
      "Software built from scratch, typed and tested, shaped around the exact workflow your business runs on instead of forcing you into an off-the-shelf tool.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation & Intelligent Tools",
    icon: "BrainCircuit",
    summary:
      "AI-powered tools and automated workflows that take over repetitive, judgement-light work like screening, extraction and routing, so your team spends time where it counts.",
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    icon: "AppWindow",
    summary:
      "Fast, responsive web apps with secure authentication, real-time data and a clean interface, built on a modern and scalable stack.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    summary:
      "Native-quality iOS and Android apps from a single codebase, built for performance, offline resilience and an experience customers actually enjoy.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    icon: "Cloud",
    summary:
      "Cloud setup, CI/CD pipelines and infrastructure that deploy reliably and scale on demand, with monitoring so you always know what's happening in production.",
  },
  {
    slug: "api-integration",
    title: "API Development & System Integration",
    icon: "Plug",
    summary:
      "Well-documented APIs and integrations that connect your tools and third-party services, so data moves between systems without manual copy-paste.",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    icon: "LineChart",
    summary:
      "Dashboards and reporting that turn raw data into clear answers, so your decisions rest on what's actually happening rather than guesswork.",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Digital Experiences",
    icon: "PenTool",
    summary:
      "User-first design, from wireframes to polished interfaces, that makes your product clear, accessible and genuinely good to use.",
  },
  {
    slug: "custom-business-solutions",
    title: "Custom Business Solutions",
    icon: "Boxes",
    summary:
      "ERP-style tools, invoicing, quotations and management systems tailored to how your organisation actually operates, self-hosted or in the cloud.",
  },
];

/** Options for the contact form "service interested in" field. */
export const serviceOptions = [...services.map((s) => s.title), "Other"] as const;
