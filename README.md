# Brian Kuria — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS foundation for Brian
Kuria's personal professional portfolio.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint check
```

## Where to edit things

Everything content-related lives in `data/`, not scattered across
components:

| File | Controls |
|---|---|
| `data/projects.ts` | Featured Projects grid — add a project by adding an object |
| `data/skills.ts` | Skills & Tools section |
| `data/experience.ts` | Journey timeline |
| `data/socialLinks.ts` | Contact links, footer links, "What I Build" capabilities, BKM DIGITAL products |
| `lib/utils.ts` | Top nav items |
| `app/layout.tsx` | Site metadata, Open Graph, Twitter card |

## Placeholders to fill in

Search the codebase for square-bracket placeholders like `[ADD EMAIL]` —
every one marks information that was intentionally left out rather than
invented. Priority ones:

- `data/socialLinks.ts` — real email, WhatsApp, LinkedIn, GitHub, Instagram
- `public/images/profile/` — profile photograph
- `public/images/projects/` — project preview images
- `public/images/branding/og-image.png` + favicon — social share preview
- `app/layout.tsx` — production domain (`siteUrl`)
- `data/experience.ts` — real dates once confirmed
- `components/sections/ContactForm.tsx` — connect a real backend (API route or email service) when ready; it currently validates but does not send

## Architecture notes

- Single-page experience today (`app/page.tsx` composes all sections), but
  `data/projects.ts` already models each project as a `slug` so
  `/projects/[slug]` case-study pages can be added later without touching
  the data layer.
- `components/ui/` holds presentational primitives (Button, ProjectCard,
  SkillBadge, SectionHeading) with no content baked in.
- `components/sections/` holds one component per homepage section.
- `components/layout/` holds the Navbar and Footer, shared across future
  pages.

## Phase 2 (not built yet, architected for)

Dedicated project/case-study pages, résumé/CV, certifications, blog, GitHub
integration, analytics, contact-form backend, deeper BKM DIGITAL
integration.
