# BWIN Consultants — Frontend

The public website (and future CMS/LMS client app) for BWIN Consultants, built with Next.js. This is a real
implementation migrated page-by-page from a Claude Design prototype into the architecture defined for this
product — see [`CLAUDE.md`](./CLAUDE.md) for full context on the source material, folder structure, and the
conventions every page follows (routing, SEO metadata, data-swap pattern, image handling, etc.).

## Tech stack

Next.js 16 (App Router, Turbopack) · React 19 · JavaScript · Tailwind CSS v4 · Axios · TanStack Query ·
Zustand · React Hook Form · Zod · next-intl.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`next.config.mjs` pins `turbopack.root` explicitly — the parent `Main Code/` directory has an unrelated stray
`package.json` that Next would otherwise misdetect as the workspace root.

## Project structure

See [`CLAUDE.md`](./CLAUDE.md) for the full folder tree and working conventions. Short version:

- `src/app/(website)/` — the public site. Each route folder has a thin `page.jsx` (Server Component, owns
  `metadata`) rendering a `'use client'` content component from `_components/`. Content that will eventually
  come from a database lives in `_data/*.js`, one file per section/page, each with a comment marking the
  future API call.
- `src/components/ui/` — the design system's primitives (Button, Icon, Card, etc.), ported from the prototype.
- `src/layouts/website/` — Header, Footer, and the layout that wraps every `(website)` page.
- `src/lib/seo.js` — `buildMetadata()`, used by every page for consistent title/description/OpenGraph/Twitter/
  canonical/robots tags. `src/app/sitemap.js` and `src/app/robots.js` are auto-derived from the same page
  metadata list, so a new page appears in the sitemap the moment it's built.
- `src/config/site.config.js` — the single source of truth for site info (name, contact, socials) and every
  internal route path (`routes.aboutUs`, `routes.consultancy`, etc.) — never hardcode a path elsewhere.

## Pages built so far

Home (`/`), About Us, Contact Us, Teams, Consultancy, Free Consultation, Login/Signup — see `CLAUDE.md`'s "Migration status"
section for what's done and what's still pending across the ~20-page site.
