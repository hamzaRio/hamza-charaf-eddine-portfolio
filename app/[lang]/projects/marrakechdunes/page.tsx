import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, TriangleAlert } from "lucide-react";
import { GithubIcon } from "@/components/icons";
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
    path: paths.marrakechCaseStudy,
    title: dict.projects.marrakech.name,
    description: dict.caseStudy.overview,
    ogType: "article",
  });
}

export default async function MarrakechCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { caseStudy, projects } = dict;

  return (
    <>
      <div className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
          <Link
            href={localePath(lang, paths.projects)}
            className="focus-ring inline-flex items-center gap-1.5 font-body text-sm text-muted hover:text-text"
          >
            <ArrowLeft size={15} />
            {caseStudy.back}
          </Link>
          <p className="mt-6 font-data text-xs text-accent">{projects.marrakech.tagline}</p>
          <h1 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {projects.marrakech.name}
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.marrakechDunesLive}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-1.5 bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
            >
              {caseStudy.viewLive}
              <ExternalLink size={14} />
            </a>
            <a
              href={siteConfig.marrakechDunesRepo}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex items-center gap-1.5 border border-line-strong px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              {caseStudy.viewRepo}
              <GithubIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-semibold text-text">{caseStudy.overviewTitle}</h2>
          <p className="mt-3 font-body text-base leading-relaxed text-text/90">{caseStudy.overview}</p>

          <h2 className="mt-10 font-display text-xl font-semibold text-text">{caseStudy.featuresTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            {caseStudy.features.map((f) => (
              <li key={f} className="flex gap-2.5 font-body text-sm text-text/90">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-text">{caseStudy.architectureTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            {caseStudy.architecture.map((a) => (
              <li key={a} className="flex gap-2.5 font-body text-sm text-text/90">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-3 border border-line-strong bg-panel p-5">
            <TriangleAlert size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-body text-sm font-semibold text-text">{caseStudy.noteTitle}</h3>
              <p className="mt-1 font-body text-sm text-muted">{caseStudy.note}</p>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="border border-line bg-panel p-6">
            <h2 className="font-display text-base font-semibold text-text">{caseStudy.roleLabel}</h2>
            <p className="mt-3 font-body text-sm text-muted">{caseStudy.role}</p>
          </div>

          <div className="border border-line bg-panel p-6">
            <h2 className="font-display text-base font-semibold text-text">{caseStudy.stackTitle}</h2>
            <div className="mt-4 space-y-4">
              {caseStudy.stack.map((group) => (
                <div key={group.group}>
                  <p className="font-body text-xs font-medium text-muted">{group.group}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-line-strong px-2 py-0.5 font-data text-xs text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
