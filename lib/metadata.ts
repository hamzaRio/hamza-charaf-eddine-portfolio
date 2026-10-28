import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/lib/site-config";

/**
 * Resolves an absolute URL against the configured site origin.
 * `path` should start with "/" (e.g. "/en/about").
 */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}

interface PageMetadataInput {
  lang: Locale;
  /** Route segment path with no leading/trailing slash and no locale
   * prefix, e.g. "" for the home page, "about", or "projects/marrakechdunes". */
  path: string;
  /** Short page label used for the <title> tag (run through the root
   * layout's "%s — Hamza Charaf Eddine" template) — e.g. "About". Pass
   * `titleIsAbsolute: true` with the full title already composed (the
   * home page's title already starts with the site name) to bypass the
   * template instead. */
  title: string;
  description: string;
  ogType?: "website" | "profile" | "article";
  titleIsAbsolute?: boolean;
}

/**
 * Builds page-specific metadata: a canonical URL and hreflang alternates
 * scoped to this exact route, plus Open Graph / Twitter fields carrying
 * the same URL and this page's own title and description. The OG/Twitter
 * preview image itself comes from the opengraph-image.tsx / twitter-image.tsx
 * route files, which Next.js injects automatically for every page under
 * app/[lang]/.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  ogType = "website",
  titleIsAbsolute = false,
}: PageMetadataInput): Metadata {
  const localizedPath = path ? `/${lang}/${path}` : `/${lang}`;
  const enPath = path ? `/en/${path}` : "/en";
  const dePath = path ? `/de/${path}` : "/de";
  const ogTitle = titleIsAbsolute ? title : `${title} — ${siteConfig.name}`;

  return {
    title: titleIsAbsolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        en: enPath,
        de: dePath,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url: absoluteUrl(localizedPath),
      siteName: siteConfig.name,
      locale: lang === "de" ? "de_DE" : "en_US",
      type: ogType,
      // The opengraph-image.tsx / twitter-image.tsx route files are only
      // auto-attached by Next.js to the exact segment they're colocated in
      // (the home route, app/[lang]/), not to nested routes like /about —
      // so every other page links to that one shared, locale-branded image
      // explicitly here rather than needing its own copy.
      images: [{ url: absoluteUrl(`/${lang}/opengraph-image`), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [absoluteUrl(`/${lang}/twitter-image`)],
    },
  };
}
