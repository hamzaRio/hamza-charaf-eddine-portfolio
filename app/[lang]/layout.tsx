import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { getDictionary } from "@/lib/dictionaries";
import { locales, siteConfig, type Locale } from "@/lib/site-config";
import { personAndWebsiteJsonLd, jsonLdScript } from "@/lib/structured-data";
import { fontVariables } from "@/lib/fonts";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const viewport: Viewport = {
  themeColor: "#0a1222",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: `${siteConfig.name} — ${dict.meta.titleSuffix}`,
      template: `%s — ${siteConfig.name}`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      title: `${siteConfig.name} — ${dict.meta.titleSuffix}`,
      description: dict.meta.description,
      url: `${siteConfig.siteUrl}/${lang}`,
      siteName: siteConfig.name,
      locale: lang === "de" ? "de_DE" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${dict.meta.titleSuffix}`,
      description: dict.meta.description,
    },
  };
}

export default async function RootLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const jsonLd = personAndWebsiteJsonLd(lang, dict);

  return (
    <html lang={lang} suppressHydrationWarning className={fontVariables}>
      <body className="flex min-h-screen flex-col bg-ink text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
        />
        <a href="#main-content" className="skip-link focus-ring">
          {dict.nav.skipToContent}
        </a>
        <Nav locale={lang} dict={dict} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} dict={dict} />
      </body>
    </html>
  );
}
