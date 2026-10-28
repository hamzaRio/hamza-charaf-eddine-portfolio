import type { Locale } from "@/lib/site-config";
import type { Dictionary } from "./types";
import en from "./en";
import de from "./de";

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary };
