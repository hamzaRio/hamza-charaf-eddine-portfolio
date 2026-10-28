import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import PageHeader from "@/components/page-header";
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
    path: paths.projects,
    title: dict.nav.projects,
    description: dict.projects.intro,
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { projects } = dict;

  return (
    <>
      <PageHeader heading={projects.heading} intro={projects.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-data text-xs text-accent">{projects.featuredLabel}</p>

        <div className="mt-4 grid gap-6 border border-line bg-panel p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text">{projects.marrakech.name}</h2>
            <p className="mt-1 font-body text-sm text-muted">{projects.marrakech.tagline}</p>
            <p className="mt-4 font-body text-base text-text/90">{projects.marrakech.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={localePath(lang, paths.marrakechCaseStudy)}
                className="focus-ring inline-flex items-center justify-center bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                {projects.marrakech.viewCaseStudy}
              </Link>
              <a
                href={siteConfig.marrakechDunesLive}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-1.5 border border-line-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                {projects.marrakech.viewLive}
                <ExternalLink size={14} />
              </a>
              <a
                href={siteConfig.marrakechDunesRepo}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-1.5 border border-line-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                {projects.marrakech.viewRepo}
                <GithubIcon size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap content-start gap-2">
            {[
              "React 18",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Redis",
              "Docker",
              "Vercel",
              "Render",
            ].map((t) => (
              <span key={t} className="border border-line-strong px-2.5 py-1 font-data text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-xl font-semibold text-text">{projects.moreOnGithubTitle}</h2>
          <p className="mt-3 max-w-xl font-body text-sm text-muted">{projects.moreOnGithubBody}</p>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-accent hover:text-accent-strong"
          >
            {projects.viewGithub}
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
