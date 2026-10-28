import type { Locale } from "@/lib/site-config";

export const paths = {
  home: "",
  about: "about",
  experience: "experience",
  projects: "projects",
  marrakechCaseStudy: "projects/marrakechdunes",
  skills: "skills",
  contact: "contact",
} as const;

export function localePath(locale: Locale, path: string): string {
  if (!path) return `/${locale}`;
  return `/${locale}/${path}`;
}
