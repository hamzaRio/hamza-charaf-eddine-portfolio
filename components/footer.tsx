import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary } from "@/lib/dictionaries/types";

// Static build: the year is fixed rather than computed with `new Date()`,
// which Cache Components treats as an unstable value during prerendering.
const CURRENT_YEAR = 2026;

// `locale` isn't used yet (the footer's links aren't locale-specific) but
// stays in the prop type so the call site stays explicit and this doesn't
// silently drift if that changes.
export default function Footer({ dict }: { locale: Locale; dict: Dictionary }) {
  const year = CURRENT_YEAR;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-text">Hamza Charaf Eddine</p>
          <p className="mt-1 font-body text-sm text-muted">
            &copy; {year} Hamza Charaf Eddine. {dict.footer.rights}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="focus-ring text-muted transition-colors hover:text-accent"
          >
            <Mail size={19} />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <p className="font-data text-xs text-muted-dim">{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
