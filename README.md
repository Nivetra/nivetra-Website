# Nivetra Technologies

Marketing website for Nivetra Technologies, an AI-first software company. It is a static Next.js site with five pages: Home, About, Services, Career and Contact.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 and TypeScript (strict mode)
- Tailwind CSS v4
- lucide-react icons and motion for animation

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` runs the dev server
- `npm run build` creates a production build
- `npm start` serves the production build
- `npm run lint` runs ESLint

## Configuration

Copy `.env.example` to `.env.local` and fill in what you need. Every value is optional; the site runs without them. They cover the public site URL and the contact details shown on the site (email, WhatsApp, location and social links).

## Forms

The site is static and has no backend.

- The contact form opens a pre-filled email in the visitor's mail app.
- The careers form at `/career/apply` posts to FormSubmit, which emails the applicant's details and resume to the address in `src/config/site.ts`. The first submission sends a one-time confirmation email that you approve once to activate the inbox.

## Project structure

- `src/app` holds pages and layouts; public pages live under `(website)`
- `src/components` holds UI, layout, brand and website components
- `src/config` holds site, services and icon settings
- `src/lib` holds small utilities
- `public/brand` holds the logo assets

## Deployment

Run `npm run build` and deploy to any Node or static host, such as Vercel. Set the same environment variables on the host.
