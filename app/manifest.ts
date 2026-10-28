import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import en from "@/lib/dictionaries/en";

// A single, locale-neutral manifest (Next.js only supports one per app).
// English copy mirrors the approved <meta name="description"> text already
// used on every page — no new claims are introduced here.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: siteConfig.name,
    description: en.meta.description,
    start_url: "/en",
    display: "browser",
    background_color: "#0a1222",
    theme_color: "#0a1222",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
