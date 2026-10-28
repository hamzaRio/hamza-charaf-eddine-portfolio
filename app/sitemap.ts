import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { paths } from "@/lib/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(paths);
  const base = siteConfig.siteUrl;

  return routes.map((route) => {
    const enUrl = route ? `${base}/en/${route}` : `${base}/en`;
    const deUrl = route ? `${base}/de/${route}` : `${base}/de`;
    return {
      url: enUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: enUrl,
          de: deUrl,
        },
      },
    };
  });
}
