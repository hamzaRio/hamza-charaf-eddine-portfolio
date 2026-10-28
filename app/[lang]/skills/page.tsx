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
    path: paths.skills,
    title: dict.nav.skills,
    description: dict.skills.intro,
  });
}

export default async function SkillsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { skills } = dict;

  return (
    <>
      <PageHeader heading={skills.heading} intro={skills.intro} />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {skills.groups.map((group) => (
            <div key={group.title} className="bg-ink p-6 sm:p-7">
              <h2 className="font-display text-lg font-semibold text-text">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="font-body text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-display text-lg font-semibold text-text">{skills.toolsTitle}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.tools.map((tool) => (
              <span key={tool} className="border border-line-strong px-3 py-1.5 font-data text-sm text-muted">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
