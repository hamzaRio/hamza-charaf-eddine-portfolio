import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/site-config";
import { paths } from "@/lib/paths";
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
    path: paths.about,
    title: dict.nav.about,
    description: dict.about.intro,
    ogType: "profile",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { about } = dict;

  return (
    <>
      <PageHeader heading={about.heading} intro={about.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="max-w-2xl font-body text-base leading-relaxed text-text/90 sm:text-lg">
              {about.summary}
            </p>

            <h2 className="mt-12 font-display text-xl font-semibold text-text">{about.educationTitle}</h2>
            <ul className="mt-6 space-y-6 border-l border-line pl-6">
              {about.education.map((e) => (
                <li key={e.title} className="relative">
                  <span
                    className="absolute -left-[1.6rem] top-1.5 h-2 w-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <p className="font-body text-sm font-medium text-text">{e.title}</p>
                  <p className="mt-0.5 font-body text-sm text-muted">{e.org}</p>
                  <p className="mt-0.5 font-data text-xs text-muted-dim">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="border border-line bg-panel p-6">
              <h2 className="font-display text-base font-semibold text-text">{about.factsTitle}</h2>
              <dl className="mt-4 space-y-3">
                {about.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="font-body text-sm text-muted">{f.label}</dt>
                    <dd className="text-right font-body text-sm font-medium text-text">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border border-line bg-panel p-6">
              <h2 className="font-display text-base font-semibold text-text">{about.languagesTitle}</h2>
              <ul className="mt-4 space-y-3">
                {about.languages.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between gap-4">
                    <span className="font-body text-sm text-text">{l.name}</span>
                    <span className="font-data text-xs text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-panel p-6">
              <h2 className="font-display text-base font-semibold text-text">{about.traitsTitle}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.traits.map((t) => (
                  <li key={t} className="border border-line-strong px-2.5 py-1 font-data text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
