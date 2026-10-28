import { siteConfig, type Locale } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/metadata";
import type { Dictionary } from "@/lib/dictionaries/types";

/**
 * JSON-LD for the Person (Hamza Charaf Eddine) and the WebSite itself,
 * rendered once per page via a <script type="application/ld+json"> tag
 * (see app/[lang]/layout.tsx). Every field below is a verified fact that
 * is already displayed somewhere on the public site — nothing here is
 * invented:
 *  - name, jobTitle, description: siteConfig.name / dict.meta (used for
 *    the page <title>/<meta description> on every page)
 *  - email, sameAs (GitHub/LinkedIn): rendered as links on /contact
 *  - address: the "Based in Memmingen, Germany" line on the home page
 *    and the location row on /contact
 *  - image: the portrait rendered on the home page
 */
export function personAndWebsiteJsonLd(lang: Locale, dict: Dictionary) {
  const personId = `${siteConfig.siteUrl}/#person`;
  const websiteId = `${siteConfig.siteUrl}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: absoluteUrl(`/${lang}`),
        image: absoluteUrl("/images/hamza-portrait.jpg"),
        jobTitle: dict.meta.titleSuffix,
        description: dict.meta.description,
        email: `mailto:${siteConfig.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Memmingen",
          addressCountry: "DE",
        },
        sameAs: [siteConfig.github, siteConfig.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: `${siteConfig.name} — Portfolio`,
        url: siteConfig.siteUrl,
        description: dict.meta.description,
        inLanguage: ["en", "de"],
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
    ],
  };
}

/** JSON.stringify + escape `<` so the payload can't break out of the
 * surrounding <script> tag (per Next.js's own JSON-LD guidance). */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
