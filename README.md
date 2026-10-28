# Hamza Charaf Eddine — Portfolio

A bilingual (English/German) professional portfolio, built with Next.js (App
Router), TypeScript, and Tailwind CSS. Design direction: dark navy with a
brass accent, Space Grotesk / IBM Plex Sans / IBM Plex Mono typography, sharp
borders, restrained motion, and a technical data-flow motif aimed at
recruiters scanning quickly for role fit.

**Status: prototype, not yet deployed.** See [Before deploying](#before-deploying)
for what's left.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Cache Components)
- TypeScript
- Tailwind CSS v4
- [framer-motion](https://www.framer.com/motion/) for restrained, `prefers-reduced-motion`-aware animation
- Self-hosted [Fontsource](https://fontsource.org/) fonts (no Google Fonts network dependency)
- `next/og` (`ImageResponse`) for generated Open Graph / Twitter preview images

## Content and routes

Every page exists in both English (`/en/...`) and German (`/de/...`), via the
`app/[lang]/` dynamic segment:

| Route | Page |
| --- | --- |
| `/en`, `/de` | Home |
| `/en/about`, `/de/about` | About |
| `/en/experience`, `/de/experience` | Experience |
| `/en/projects`, `/de/projects` | Projects |
| `/en/projects/marrakechdunes`, `/de/projects/marrakechdunes` | MarrakechDunes case study |
| `/en/skills`, `/de/skills` | Skills |
| `/en/contact`, `/de/contact` | Contact |

Page copy lives in `lib/dictionaries/en.ts` and `lib/dictionaries/de.ts`,
typed by `lib/dictionaries/types.ts`. All CV, employment, and project facts
in these files trace back to the CV supplied for this build and direct
review of the linked GitHub repositories and the live MarrakechDunes app —
nothing is invented. If a fact changes (a new role, a project update), edit
the dictionary, not the page components.

Downloadable CVs live in `public/cv/` (`Hamza_Charaf_Eddine_CV_EN.pdf` and
`_DE.pdf`); the portrait is `public/images/hamza-portrait.jpg`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the proxy
(`proxy.ts`) reads the browser's `Accept-Language` header and redirects
any un-prefixed path to `/en/...` or `/de/...` accordingly, falling back
to English for any other language.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Before deploying | Absolute origin (no trailing slash) used to build canonical URLs, Open Graph/Twitter URLs, and the sitemap. Falls back to `http://localhost:3000` if unset, so local dev works without it. |

Copy `.env.example` to `.env.local` and set a real value once a production
domain is assigned.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build (static export of all routes where possible) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npx tsc --noEmit` | TypeScript type-check without emitting files |

## Accessibility

- Skip-to-content link, visible on keyboard focus
- Keyboard-reachable navigation with visible focus rings (`:focus-visible`)
- Mobile navigation menu with correct `aria-expanded`/`aria-controls`
- `prefers-reduced-motion` respected: animations are skipped or reduced to
  near-instant, both via CSS (`globals.css`) and in `framer-motion`
  components (`useReducedMotion()`)
- Verified with [axe-core](https://github.com/dequelabs/axe-core) against
  WCAG 2 A/AA on every route, in both the full-motion and reduced-motion
  states

## SEO

- Page-specific `<title>`, meta description, canonical URL, and hreflang
  alternates (`en`/`de`) for every route — see `lib/metadata.ts`
- Open Graph and Twitter Card metadata per page, with a shared generated
  preview image per locale (`app/[lang]/opengraph-image.tsx`,
  `app/[lang]/twitter-image.tsx`)
- `app/sitemap.ts` and `app/robots.ts`

## Before deploying

This prototype has not been published. Before pushing to GitHub and
deploying to Vercel:

1. **Set `NEXT_PUBLIC_SITE_URL`** to the real production domain in the
   Vercel project's environment variables (and in `.env.local` for any
   further local testing against a production-like URL). Until this is
   set, canonical/OG URLs fall back to `http://localhost:3000`.
2. **Confirm the domain** the site will actually live at (a Vercel
   `*.vercel.app` subdomain, or a custom domain) and add it in the Vercel
   project settings if custom.
3. **Re-check availability wording** (`Contact` page, home page CTA, About
   page facts) if the Data 5 end date or availability date changes before
   launch — all three currently say "from November 2026."
4. **Spot-check the generated Open Graph images** once deployed, using a
   real social-preview debugger (e.g. the Facebook Sharing Debugger or
   Twitter Card Validator) — `next/og` output can only be fully verified
   against how each platform actually fetches and caches it.
5. **Re-run** `npm run lint`, `npx tsc --noEmit`, and `npm run build`
   after any further content edits, and re-test the production build
   locally with `npm run start` before pushing.
