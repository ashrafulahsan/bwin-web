@AGENTS.md

# BWIN Consultants Frontend — bwin_fe

## What this project is

`bwin_fe` is a real Next.js implementation of the BWIN Consultants public website (and eventually the CMS/LMS
client app), built by migrating a Claude-Design HTML/JSX prototype into the architecture defined for this
product. It is **not** a fresh app — it's a from-scratch Next.js scaffold that real, working code was ported
into piece by piece, preserving the prototype's visual design exactly while restructuring it to match the
target architecture.

If you're picking this up in a new session: this file plus the "Migration status" section below is the
fastest way to understand what already exists and why, before touching anything.

## Source material (read-only references, not part of this app)

- **Design prototype**: `D:\CMS_LMS\Main Code\frontend-context\BWIN-DS-2-WEB\` — a Claude Design output. Static
  HTML pages that load React 18 + Babel Standalone from CDN (no build step), with a compiled design-system
  bundle attached to `window.BWINConsultantsDesignSystem_57d974`. This is the **visual source of truth** —
  when in doubt about how something should look or behave, check the matching `.jsx`/`.html` file there before
  guessing.
- **Target architecture doc**: `D:\CMS_LMS\Main Code\frontend-context\BWIN Consultants Frontend Architecture
  (Next.js + JavaScript).md` — defines the folder structure, tech stack, and naming conventions this project
  follows.
- Do not edit anything under `BWIN-DS-2-WEB/` — it's the reference prototype, not this app.

## Tech stack

Next.js 16 (App Router, Turbopack) · React 19 · JavaScript (no TypeScript) · Tailwind CSS v4 (CSS-first config,
no `tailwind.config.js`) · Axios · TanStack Query · Zustand · React Hook Form · Zod · next-intl.

Styling is **two systems by design, split by route group**: the public `(website)` routes use the prototype's
own hand-written CSS (design tokens as CSS custom properties + page-specific classes) for exact visual parity;
Tailwind is installed and available for `(auth)`, `(dashboard)`, and any new module UI going forward.

## Folder structure

```text
bwin_fe/
├── public/
│   ├── assets/             # logo, hero, partners, payment, reviews, skill-dev, consult — from prototype's assets/
│   └── uploads/            # course/partner photos — from prototype's uploads/
│
├── src/
│   ├── app/
│   │   ├── (website)/            # public marketing site — fully real, this is the main build target
│   │   │   ├── layout.jsx        # wraps children in <WebsiteLayout> (Header + Footer)
│   │   │   ├── page.jsx          # Home — currently a placeholder, real composition is pending
│   │   │   ├── about-us/ articles/ book-a-call/ bootcamp/ bundle-offer/ business-automation/
│   │   │   ├── consultancy/ contact-us/ course-details/ e-learning/ faq/ free-consultation/
│   │   │   ├── get-a-free-quote/ job-success/ privacy-policy/ refund-policy/ skill-development/
│   │   │   ├── teams/ terms-conditions/            # (route folders created, pages not yet ported — see status)
│   │   │   ├── _components/      # route-private: Hero, WhyChooseUs, ReviewSlider, FaqSection,
│   │   │   │                     # SkillDevelopmentSection, ConsultancyServiceSection,
│   │   │   │                     # BusinessAutomationSection, PromoPopup — page composition, not shared UI
│   │   │   └── _data/            # course-data.js, course-registry.js as ES modules (not yet ported)
│   │   │
│   │   ├── (auth)/               # login/ register/ forgot-password/ — folders created, pages pending
│   │   ├── (dashboard)/          # placeholder route only — no design exists yet for the LMS/CMS admin side
│   │   └── layout.jsx            # root layout: imports styles/globals.css, dark-mode init script
│   │
│   ├── modules/                  # empty on purpose — populated when real CRUD/API feature work starts
│   ├── components/
│   │   ├── ui/                   # the 18 design-system primitives, ported from the prototype's compiled
│   │   │                         # bundle into real files: Button, Icon, IconButton, Avatar, Card, Badge, Tag,
│   │   │                         # Toast, Tooltip, Checkbox, Input, Radio, Select, Switch, Textarea, Sidebar,
│   │   │                         # Tabs, Dialog — plus index.js barrel. Import from '@/components/ui'.
│   │   ├── common/
│   │   │   └── ImagePlaceholder.jsx   # neutral placeholder box, used wherever the prototype had an
│   │   │                              # <image-slot> with no real photo behind it (see "Images" below)
│   │   ├── forms/ tables/ modals/    # empty on purpose, not needed yet
│   │
│   ├── services/ store/              # empty on purpose — no backend/cross-page state needed yet
│   ├── hooks/
│   │   └── useTheme.js               # dark-mode toggle, extracted from the prototype's header.jsx
│   ├── layouts/website/
│   │   ├── Header.jsx                # 'use client' — mega menus, mobile drawer, theme toggle, search
│   │   ├── Footer.jsx                # newsletter, contact strip, link columns, social/payment strip
│   │   └── WebsiteLayout.jsx         # composes Header + children + Footer
│   ├── middleware/                   # empty — guard helpers land here once auth is real
│   ├── lib/                          # empty — Axios instance/constants land here when first needed
│   ├── config/
│   │   └── site.config.js            # siteConfig (name/logo/phone/email/address/social) + routes map —
│   │                                 # the single source of truth for every internal href in the app
│   ├── context/                      # empty — TanStack QueryClientProvider wrapper lands here when needed
│   ├── i18n/                         # empty — next-intl is installed but not wired up yet (English-only design)
│   ├── styles/
│   │   ├── tokens/                   # colors.css, typography.css, spacing.css, radius.css, shadow.css
│   │   ├── design-system.css         # imports the token files
│   │   ├── header-footer.css         # site chrome + hero + homepage section styles
│   │   ├── pages.css                 # per-page styles (course details, job success, contact, auth, etc.)
│   │   └── globals.css               # Tailwind import + Google Fonts import + all of the above, in order
│   └── utils/                        # empty on purpose, not needed yet
│
├── next.config.mjs        # sets turbopack.root (needed because Main Code/ has an unrelated stray package.json)
└── package.json
```

## Working patterns established so far

These are the conventions already in use — follow them rather than inventing new ones when porting more pages:

1. **Routing**: every internal link goes through the `routes` map in `src/config/site.config.js`
   (`routes.aboutUs`, `routes.skillDevelopment`, etc.), never a hardcoded path. Use `next/link`'s `<Link>` for
   anchors and `useRouter().push(routes.x)` from `next/navigation` for `Button`-triggered navigation (the
   `Button` component always renders a `<button>`, never an `<a>`).
2. **Design-system components**: import from `'@/components/ui'` (the barrel), e.g.
   `import { Icon, Button } from '@/components/ui'`. Never re-add the old
   `window.BWINConsultantsDesignSystem_57d974` global lookup.
3. **Client vs server components**: add `'use client'` to any ported component that uses hooks or event
   handlers (which is most of them — this is an interactive marketing site). Pure presentational pieces with
   no state/handlers (e.g. `Icon`, `Avatar`, `Badge`) stay server components.
4. **Images**: the prototype used a custom `<image-slot>` placeholder element everywhere a design needed a
   photo. When porting a page, replace every `<image-slot>` with either:
   - a real `<img>`/`next/image` pointing at a matching file in `public/assets/` or `public/uploads/` if one
     genuinely exists (check filenames against course/section titles — several `uploads/` files are named
     after real course titles and do match), or
   - `<ImagePlaceholder label="...">` from `@/components/common/ImagePlaceholder` if no real photo exists —
     this matches the prototype's own empty-state visual (`#f2f1ef` background, muted caption text). The
     prototype's design-system readme confirms no real photography was ever supplied beyond the logo, so
     fabricating fake stock photos would be dishonest — don't do that.
   - When doing this, also update the matching CSS rule in `styles/header-footer.css` / `styles/pages.css`
     from `.foo image-slot{...}` to `.foo img{...}` (already done for every selector ported so far).
5. **CSS**: don't touch the token values or class names — they're copied verbatim from the prototype for
   pixel parity. Dark mode is driven by `[data-theme="dark"]` on `<html>`, toggled by `useTheme()`.
6. **Excluded on purpose**: the prototype's `image-slot.js`, `tweaks-panel.jsx`, `site-tweaks.jsx`,
   `support.js`, `.image-slots.state.json`, `.thumbnail`, `screenshots/`, `_ds_manifest.json`,
   `_adherence.oxlintrc.json`, and the `ui_kits/client-portal/App.jsx` demo inside the design-system bundle are
   all Claude Design editor tooling or unused demo code — never port these.

## Migration status

**Done**: project scaffold, full folder skeleton, all 18 `components/ui/*` primitives, all CSS
(tokens/design-system/header-footer/pages) wired into Tailwind's `globals.css`, `public/assets` +
`public/uploads` copied over, `Header`/`Footer`/`WebsiteLayout` fully ported and verified working in-browser
(mega menus, mobile drawer, dark-mode toggle, all links resolve via `routes`).

**Pending** (in this order):
1. Home page composition — port `hero.jsx`, `skill-development.jsx`, `consultancy-service.jsx`,
   `business-automation.jsx`, `why-choose-us.jsx`, `review-section.jsx`, `faq-section.jsx`, `promo-popup.jsx`
   from the prototype into `app/(website)/_components/`, replace the current placeholder `page.jsx`.
2. The other 19 website pages — each prototype `page-*.jsx` maps 1:1 to an `app/(website)/<route>/page.jsx`
   folder that already exists (empty) — see the folder tree above for the full list.
3. `course-data.js` / `course-registry.js` → ES modules in `app/(website)/_data/`, rewiring
   `page-course-details.jsx`'s `window.ALL_SITE_COURSES` / `window.CourseData` reads to real imports.
4. `(auth)` pages: split the prototype's combined `page-login-signup.jsx` into `login/` and `register/`, plus a
   new `forgot-password/` page built to match the visual style (no prototype source for this one).
5. `(dashboard)` placeholder page + a pass-through `src/middleware.js`.
6. Supporting infra: `lib/axios.js`, `context/AppProviders.jsx` (TanStack `QueryClientProvider`),
   `i18n/request.js` + `messages/en.json` (English-only for now — BN translation and locale-prefixed routing
   are explicitly out of scope until asked for).
7. Final cleanup pass: grep for any leftover `window.BWINConsultantsDesignSystem_57d974`,
   `window.ALL_SITE_COURSES`, or `<image-slot>` references.

## Running it

```bash
npm run dev
```

Serves at `http://localhost:3000`. `turbopack.root` is set explicitly in `next.config.mjs` because
`Main Code/` (one level up) has an unrelated stray `package.json`/`package-lock.json` that Next would
otherwise misdetect as the workspace root.
