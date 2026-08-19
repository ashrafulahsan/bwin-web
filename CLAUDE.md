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
│   ├── lib/
│   │   └── seo.js                    # buildMetadata() — every page's `metadata` export goes through this
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
│   └── utils/
│       └── slugify.js                # used by course card links
│
├── src/app/sitemap.js     # auto-derived from page-metadata.js's keys — see "SEO metadata" pattern below
├── src/app/robots.js      # points at /sitemap.xml
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
6. **Section data**: any homepage/section content that's currently hardcoded arrays in the prototype (course
   lists, stats, testimonials, FAQ items, etc.) gets extracted into its own file in `app/(website)/_data/`,
   exported as a plain constant, with a one-line comment naming the future API endpoint and the exact shape
   the component expects. The component imports the constant — nothing else changes. This is the seam where a
   real backend call replaces static data later, so don't skip it even for small lists.
7. **SEO metadata**: every page must export Next.js `metadata` built via `buildMetadata()` from
   `src/lib/seo.js`, fed by an entry in `app/(website)/_data/page-metadata.js` keyed by the same name as its
   `routes.*` entry (e.g. `pageMetadata.consultancy` + `routes.consultancy`). `buildMetadata()` fills in
   canonical URL, OpenGraph, Twitter card, and robots consistently — pages only supply `{ title?, description }`.
   Root layout sets a `title.template` (`'%s | BWIN Consultants'`) and a `default` title; the **home page is
   the only page that omits `title`** in its `pageMetadata` entry, so it inherits the root's `default` verbatim.
   **Critical gotcha already hit once**: `buildMetadata()` must never include a `title` key with value
   `undefined` — Next.js treats an explicit `title: undefined` as "this segment sets an empty title" and the
   `<title>` tag disappears entirely, it does **not** fall back to the parent's default. The key must be
   omitted outright when there's no title (see the `titleField` conditional-spread in `lib/seo.js`) — don't
   "simplify" that back to a bare `title,` shorthand.
   Because `metadata`/`generateMetadata` exports are only legal in Server Components, and most of these pages
   need `'use client'` for interactivity, the standard shape is: `page.jsx` stays a thin Server Component
   (`export const metadata = buildMetadata(...)`, renders one content component), and the actual UI lives in a
   `'use client'` component in `_components/` (e.g. `ConsultancyPageContent.jsx`, `LoginSignupContent.jsx`).
   Follow this split for every new page. `src/app/sitemap.js` and `src/app/robots.js` are auto-derived from
   `pageMetadata`'s keys, so a route appears in the sitemap automatically the moment its `pageMetadata` entry
   is added — no separate list to maintain.
8. **Excluded on purpose**: the prototype's `image-slot.js`, `tweaks-panel.jsx`, `site-tweaks.jsx`,
   `support.js`, `.image-slots.state.json`, `.thumbnail`, `screenshots/`, `_ds_manifest.json`,
   `_adherence.oxlintrc.json`, and the `ui_kits/client-portal/App.jsx` demo inside the design-system bundle are
   all Claude Design editor tooling or unused demo code — never port these.

## Migration status

**Done**: project scaffold, full folder skeleton, all 18 `components/ui/*` primitives, all CSS
(tokens/design-system/header-footer/pages) wired into Tailwind's `globals.css`, `public/assets` +
`public/uploads` copied over, `Header`/`Footer`/`WebsiteLayout` fully ported and verified working in-browser
(mega menus, mobile drawer, dark-mode toggle, all links resolve via `routes`).

**Home page composition — done.** `app/(website)/page.jsx` renders, in order: `Hero`, `SkillDevelopmentSection`,
`ConsultancyServiceSection`, `BusinessAutomationSection`, `WhyChooseUsSection`, `TestimonialsSection`
(prototype's `ReviewSlider`), `FaqSection` — matching the prototype's mount order in
`BWIN Home Page (Standalone).html` exactly. Each section's data is a plain export in
`app/(website)/_data/*.js` (`skill-development-tabs.js`, `consultancy-services.js`,
`business-automation-cards.js`, `why-choose-us-stats.js`, `testimonial-categories.js`, `faq-items.js`), each
with a comment marking where a real API call replaces the static export later — see "Working patterns" below.
Two dead-code paths from the prototype were intentionally **not** ported: `hero.jsx`'s `ServiceShowcase` and
`header.jsx`'s `LangSwitch` were both defined but never actually rendered anywhere in the source — confirmed
by grepping the whole prototype before dropping them. `promo-popup.jsx` has not been ported yet (not part of
the main section flow — revisit if/when needed). New shared util added: `src/utils/slugify.js` (needed by
course card links; will also be needed by the course-details page).

**`/login-signup` — done, plan deviation.** The original plan called for splitting the prototype's combined
`page-login-signup.jsx` into three separate `(auth)/login`, `/register`, `/forgot-password` routes behind a
stripped-down (no header/footer) auth layout. The user explicitly asked instead for **one combined page with
the normal site header/footer** — so it's built as `app/(website)/login-signup/page.jsx` (route `/login-signup`,
`routes.loginSignup` in `site.config.js`), reusing `WebsiteLayout` like every other page. Login/Create-account
is a tab toggle within the single page, matching the prototype exactly. The header's "Login / Signup" button
(desktop + mobile drawer) now points at `routes.loginSignup`. The empty `app/(auth)/login/`, `/register/`,
`/forgot-password/` folders from the original skeleton were left in place but are **not currently used** —
only recreate that split if explicitly asked for again (e.g. for a future dashboard/admin login with different
chrome).

**`/about-us` — done.** Ported from `page-about-us.jsx` verbatim (story section, milestones, leadership team
grid, accreditation partners, CTA band). Follows the standard Server-wrapper (`page.jsx`, owns `metadata`) +
`'use client'` content (`_components/AboutUsPageContent.jsx`) split. Team photos and the "team at work" story
image use `ImagePlaceholder` (no real photos exist for these in the prototype, confirmed the same way as
every other placeholder decision — see "Images" below). The accreditation-partners list was duplicated in
both `Hero.jsx` and this page in the prototype, so it's now a single shared file,
`app/(website)/_data/accreditation-partners.js` — both consumers import it. Already linked from the header's
existing "More" mega-menu ("About us" in the Company column) — that link was wired to `routes.aboutUs` from
the very first Header port, it just 404'd until this page existed.

**`/contact-us` — done.** Ported from `page-contact-us.jsx` verbatim (contact form, office info card, office
hours list, WhatsApp CTA, map placeholder, and its own FAQ section reusing `FaqSection` with
`contactUsFaq` items). Office hours + FAQ data live in `_data/contact-us-content.js`. The map image-slot has
no real asset (same as every other generic placeholder decision) so it's `ImagePlaceholder`. Already linked
from the header's "More" mega-menu ("Contact us" in the Company column, wired to `routes.contactUs` since the
original Header port).

**`/teams` — done.** Ported from `page-teams.jsx` verbatim (stats row, leadership grid with bios, a
consultants/trainers grid filterable via `team-filter-tabs`, CTA band linking to `routes.freeConsultation`).
All content in `_data/teams-content.js` (`teamStats`, `teamLeadership`, `teamPeople`, `teamFilters`). All
photos are `ImagePlaceholder` (no real headshots exist in the prototype). Already linked from the header's
"More" mega-menu (both "Teams" and "Trainers" entries point at `routes.teams`, wired since the original
Header port).

**`/faq` — done.** Ported from `page-faq.jsx` verbatim — a category-rail FAQ layout (General / Skill
development / Consultancy / Business automation / Pricing & billing) distinct from the homepage's
`FaqSection` component (this page has its own `FaqPageContent.jsx` + `faq-cat-rail` sidebar layout, not a
reuse of `FaqSection`). Data in `_data/faq-page-content.js` (`faqCategories`, `faqPageData` keyed by category).
CTA band links to `routes.contactUs` and `routes.freeConsultation`. Already linked from the header's "More"
mega-menu ("FAQ" in the Company column, wired since the original Header port).

**Known issue — duplicate content at `/consultancy` and `/free-consultation`.** Both routes currently render
the exact same `ConsultancyPageContent` (free-consultation-page.html's content, ported at the user's explicit
request onto the nav's "Consultancy" link). A second copy was then created directly at `/free-consultation`
outside this session and the header's mega-menu "Consultancy" column was repointed there. Both pages now have
correct, distinct SEO metadata (so at least the canonical/OG tags don't collide), but having two live URLs
with identical body content is still a real duplicate-content SEO issue — flagged to the user, not yet
resolved. Don't silently delete either route; ask first.

**Pending** (in this order):
1. The remaining website pages — each prototype `page-*.jsx` maps 1:1 to an `app/(website)/<route>/page.jsx`
   folder that already exists (empty) — see the folder tree above for the full list. (`about-us`,
   `contact-us`, `teams`, `faq`, `login-signup`, `consultancy`/`free-consultation` are done, see above.)
2. `course-data.js` / `course-registry.js` → ES modules in `app/(website)/_data/`, rewiring
   `page-course-details.jsx`'s `window.ALL_SITE_COURSES` / `window.CourseData` reads to real imports.
3. `(dashboard)` placeholder page + a pass-through `src/middleware.js`.
4. Supporting infra: `lib/axios.js`, `context/AppProviders.jsx` (TanStack `QueryClientProvider`),
   `i18n/request.js` + `messages/en.json` (English-only for now — BN translation and locale-prefixed routing
   are explicitly out of scope until asked for).
5. Final cleanup pass: grep for any leftover `window.BWINConsultantsDesignSystem_57d974`,
   `window.ALL_SITE_COURSES`, or `<image-slot>` references.

## Running it

```bash
npm run dev
```

Serves at `http://localhost:3000`. `turbopack.root` is set explicitly in `next.config.mjs` because
`Main Code/` (one level up) has an unrelated stray `package.json`/`package-lock.json` that Next would
otherwise misdetect as the workspace root.
