import type { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowDownToLine } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import PageHeader from "@/components/page-header";
import { getDictionary } from "@/lib/dictionaries";
import { locales, siteConfig, type Locale } from "@/lib/site-config";
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
    path: paths.contact,
    title: dict.nav.contact,
    description: dict.contact.intro,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const { contact } = dict;
  const cvHref = lang === "de" ? siteConfig.cvDe : siteConfig.cvEn;

  return (
    <>
      <PageHeader heading={contact.heading} intro={contact.intro} />

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex items-center gap-2 border border-line-strong bg-accent-soft px-4 py-2.5 font-data text-xs text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {contact.availability}
        </div>

        <dl className="mt-8 divide-y divide-line border border-line">
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <dt className="flex items-center gap-3 font-body text-sm text-muted">
              <Mail size={17} className="text-accent" aria-hidden="true" />
              {contact.emailLabel}
            </dt>
            <dd>
              <a href={`mailto:${siteConfig.email}`} className="focus-ring font-body text-sm font-medium text-text hover:text-accent">
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <dt className="flex items-center gap-3 font-body text-sm text-muted">
              <Phone size={17} className="text-accent" aria-hidden="true" />
              {contact.phoneLabel}
            </dt>
            <dd>
              <a href={siteConfig.phoneHref} className="focus-ring font-body text-sm font-medium text-text hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <dt className="flex items-center gap-3 font-body text-sm text-muted">
              <MapPin size={17} className="text-accent" aria-hidden="true" />
              {contact.locationLabel}
            </dt>
            <dd className="font-body text-sm font-medium text-text">{siteConfig.location}</dd>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <dt className="flex items-center gap-3 font-body text-sm text-muted">
              <GithubIcon size={17} className="text-accent" />
              GitHub
            </dt>
            <dd>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring font-body text-sm font-medium text-text hover:text-accent"
              >
                github.com/hamzaRio
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-5">
            <dt className="flex items-center gap-3 font-body text-sm text-muted">
              <LinkedinIcon size={17} className="text-accent" />
              LinkedIn
            </dt>
            <dd>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring font-body text-sm font-medium text-text hover:text-accent"
              >
                hamza-charaf-eddine
              </a>
            </dd>
          </div>
        </dl>

        <a
          href={cvHref}
          download
          className="focus-ring mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
        >
          <ArrowDownToLine size={16} />
          {dict.nav.downloadCv}
        </a>
      </section>
    </>
  );
}
