// The deployed site origin, e.g. "https://hamza-charaf-eddine.vercel.app".
// Set NEXT_PUBLIC_SITE_URL in the environment (see .env.example) before
// deploying — metadata, canonical URLs, Open Graph tags, and the sitemap
// all depend on it. Falls back to localhost so local dev and preview
// builds still work without it set.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "Hamza Charaf Eddine",
  email: "hamzacharafeddine77@gmail.com",
  phoneDisplay: "+49 157 5676 2211",
  phoneHref: "tel:+4915756762211",
  location: "Memmingen, Germany",
  github: "https://github.com/hamzaRio",
  linkedin: "https://www.linkedin.com/in/hamza-charaf-eddine-03458b168/",
  marrakechDunesRepo: "https://github.com/hamzaRio/MarrakechDunes",
  marrakechDunesLive: "https://marrakech-dunes.vercel.app",
  cvDe: "/cv/Hamza_Charaf_Eddine_CV_DE.pdf",
  cvEn: "/cv/Hamza_Charaf_Eddine_CV_EN.pdf",
  siteUrl,
} as const;

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
