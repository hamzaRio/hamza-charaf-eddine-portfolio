import { getDictionary } from "@/lib/dictionaries";
import { locales, type Locale } from "@/lib/site-config";
import { renderOgImage, ogImageSize } from "@/lib/og-image";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const alt = "Hamza Charaf Eddine — IT Application Support & Data Integration";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return renderOgImage({
    kicker: dict.hero.kicker,
    subline: dict.meta.titleSuffix,
    locationLabel: dict.hero.location,
  });
}
