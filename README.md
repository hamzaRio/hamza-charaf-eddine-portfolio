# Hamza Charaf Eddine — Portfolio

A bilingual (English/German) professional portfolio, built with Next.js (App
Router), TypeScript, and Tailwind CSS. Design direction: dark navy with a
brass accent, Space Grotesk / IBM Plex Sans / IBM Plex Mono typography, sharp
borders, restrained motion, and a technical data-flow motif aimed at
recruiters scanning quickly for role fit.

**Status: deployed.** The production site is live at
[hamza-charaf-eddine-portfolio.vercel.app](https://hamza-charaf-eddine-portfolio.vercel.app).
The content is grounded in the approved CV and the actual MarrakechDunes booking
application; it does not claim unverified employment achievements.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Cache Components)
- TypeScript
- Tailwind CSS v4
- [framer-motion](https://www.framer.com/motion/) for restrained, `prefers-reduced-motion`-aware animation
- Self-hosted [Fontsource](https://fontsource.org/) fonts via `next/font/local`
  (`lib/fonts.ts`) — no Google Fonts network dependency, and no separate
  render-blocking font request either
- `next/og` (`ImageResponse`) for generated Open Graph / Twitter preview images,
  the favicon (`app/icon.tsx`, `app/apple-icon.tsx`), and `app/manifest.ts`

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
npm ci
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the proxy
(`proxy.ts`) reads the browser's `Accept-Language` header and redirects
any un-prefixed path to `/en/...` or `/de/...` accordingly, falling back
to English for any other language.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Absolute origin (no trailing slash) used to build canonical URLs, Open Graph/Twitter URLs, and the sitemap. Falls back to `http://localhost:3000` if unset, so local dev works without it. |

Copy `.env.example` to `.env.local` and set a real value for local testing.
This variable is intentionally public because it is rendered into metadata;
never put passwords, API keys, or tokens in a `NEXT_PUBLIC_*` variable.

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
- JSON-LD structured data (`Person` and `WebSite`, Schema.org) on every page
  — see `lib/structured-data.ts`
- Custom favicon and app icons (`app/favicon.ico`, `app/icon.tsx`,
  `app/apple-icon.tsx`) and a web app manifest (`app/manifest.ts`)
- `app/sitemap.ts` and `app/robots.ts`

## Deployment and repository security

The GitHub `main` branch is connected to Vercel. A push to `main` creates a
production deployment; pull requests create previews. Keep
`NEXT_PUBLIC_SITE_URL` aligned with the live domain in Vercel's Production,
Preview and Development environments.

Visitors can view the website but cannot edit its deployed files. Only GitHub
collaborators with write access can change this repository. For a professional,
recoverable workflow:

1. Keep `.env.local`, credentials, tokens and private documents out of Git.
   The ignore rules protect all `.env*` files while allowing only the safe
   placeholder `.env.example`.
2. Enable two-factor authentication on GitHub and review **Settings →
   Collaborators** regularly. Set the repository to private if you do not want
   people to inspect or fork the source code.
3. Protect `main` in **Settings → Branches**: require pull requests and a
   passing build, and disable force-pushes and branch deletion. The
   `CI` workflow (`.github/workflows/ci.yml`) runs lint, the TypeScript
   check, and a production build on every push and pull request — set it
   as a required status check once branch protection is enabled.
4. Review every Vercel preview before merging. Run the checks below after
   content or dependency changes, and use `npm audit` when updating packages.

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

The repository contains public portfolio assets only; it does not contain
application credentials or a production database for MarrakechDunes.
