import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, MapPin } from "lucide-react";
import DataFlow from "@/components/data-flow";
import HeroReveal from "@/components/hero-reveal";
import { getDictionary } from "@/lib/dictionaries";
import { locales, siteConfig, type Locale } from "@/lib/site-config";
import { paths, localePath } from "@/lib/paths";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return pageMetadata({
    lang,
    path: paths.home,
    title: `${siteConfig.name} — ${dict.meta.titleSuffix}`,
    description: dict.meta.description,
    ogType: "profile",
    titleIsAbsolute: true,
  });
}

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const cvHref = lang === "de" ? siteConfig.cvDe : siteConfig.cvEn;
  const latestJob = dict.experience.entries[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-24">
          <HeroReveal>
            <p className="font-data text-sm text-accent">{dict.hero.kicker}</p>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.2rem]">
              {dict.hero.heading}
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-muted">{dict.hero.subhead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={localePath(lang, paths.experience)}
                className="focus-ring inline-flex items-center justify-center bg-accent px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                {dict.hero.ctaPrimary}
              </Link>
              <a
                href={cvHref}
                download
                className="focus-ring inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowDownToLine size={16} />
                {dict.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 font-data text-xs text-muted">
              <MapPin size={14} />
              {dict.hero.location}
            </p>
          </HeroReveal>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative border border-line bg-panel p-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line-strong">
                <Image
                  src="/images/hamza-portrait.jpg"
                  alt="Portrait of Hamza Charaf Eddine"
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 70vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 hidden h-36 w-full items-center justify-center border border-line bg-panel sm:flex">
              <DataFlow />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">{dict.home.introTitle}</h2>
          <p className="mt-4 font-body text-base text-muted sm:text-lg">{dict.home.introBody}</p>
        </div>

        <h2 className="mt-16 font-display text-xl font-semibold text-text">{dict.home.strengthsTitle}</h2>
        <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {dict.home.strengths.map((s) => (
            <div key={s.title} className="bg-ink p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold text-text">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
              {dict.home.experiencePreviewTitle}
            </h2>
            <Link
              href={localePath(lang, paths.experience)}
              className="focus-ring font-body text-sm font-medium text-accent hover:text-accent-strong"
            >
              {dict.home.viewAllExperience}
            </Link>
          </div>

          <div className="mt-8 border border-line bg-ink p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-text">{latestJob.role}</h3>
              <span className="font-data text-sm text-muted">{latestJob.period}</span>
            </div>
            <p className="mt-1 font-body text-sm text-muted">
              {latestJob.org} · {latestJob.location}
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {latestJob.bullets.slice(0, 4).map((b) => (
                <li key={b} className="flex gap-2 font-body text-sm text-text/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
            {dict.home.projectsPreviewTitle}
          </h2>
          <Link
            href={localePath(lang, paths.projects)}
            className="focus-ring font-body text-sm font-medium text-accent hover:text-accent-strong"
          >
            {dict.home.viewAllProjects}
          </Link>
        </div>

        <Link
          href={localePath(lang, paths.marrakechCaseStudy)}
          className="focus-ring group mt-8 grid gap-6 border border-line bg-panel p-6 transition-colors hover:border-accent sm:grid-cols-[1.1fr_1fr] sm:p-8"
        >
          <div>
            <p className="font-data text-xs text-accent">{dict.projects.featuredLabel}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-text">{dict.projects.marrakech.name}</h3>
            <p className="mt-1 font-body text-sm text-muted">{dict.projects.marrakech.tagline}</p>
            <p className="mt-4 font-body text-sm text-muted">{dict.projects.marrakech.summary}</p>
            <span className="mt-5 inline-block font-body text-sm font-medium text-accent group-hover:text-accent-strong">
              {dict.projects.marrakech.viewCaseStudy}
            </span>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {["React 18", "TypeScript", "Node.js", "Express", "MongoDB", "Vercel", "Render"].map((t) => (
              <span
                key={t}
                className="border border-line-strong px-2.5 py-1 font-data text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Link>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">{dict.home.contactCta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted">{dict.home.contactCta.body}</p>
          <Link
            href={localePath(lang, paths.contact)}
            className="focus-ring mt-8 inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
          >
            {dict.home.contactCta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
