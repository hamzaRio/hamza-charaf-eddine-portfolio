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
    path: paths.experience,
    title: dict.nav.experience,
    description: dict.experience.intro,
  });
}

export default async function ExperiencePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { experience } = dict;

  return (
    <>
      <PageHeader heading={experience.heading} intro={experience.intro} />

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <ol className="space-y-12">
          {experience.entries.map((entry, i) => (
            <li key={entry.role + entry.period} className="grid gap-4 sm:grid-cols-[3.5rem_1fr]">
              <span className="font-data text-2xl font-semibold text-muted-dim sm:pt-1" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-l border-line pb-2 pl-6 sm:border-l-0 sm:pl-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl font-semibold text-text">{entry.role}</h2>
                  <span className="font-data text-sm text-muted">{entry.period}</span>
                </div>
                <p className="mt-1 font-body text-sm text-muted">
                  {entry.org} · {entry.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 font-body text-sm text-text/90">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
