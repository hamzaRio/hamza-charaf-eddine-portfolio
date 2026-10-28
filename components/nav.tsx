"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { paths, localePath } from "@/lib/paths";
import type { Dictionary } from "@/lib/dictionaries/types";

export default function Nav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale: Locale = locale === "en" ? "de" : "en";
  const restOfPath = pathname.replace(/^\/(en|de)/, "");
  const switchHref = `/${otherLocale}${restOfPath}` || `/${otherLocale}`;

  const links = [
    { href: localePath(locale, paths.home), label: dict.nav.home },
    { href: localePath(locale, paths.about), label: dict.nav.about },
    { href: localePath(locale, paths.experience), label: dict.nav.experience },
    { href: localePath(locale, paths.projects), label: dict.nav.projects },
    { href: localePath(locale, paths.skills), label: dict.nav.skills },
    { href: localePath(locale, paths.contact), label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === localePath(locale, paths.home)) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const cvHref = locale === "de" ? siteConfig.cvDe : siteConfig.cvEn;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href={localePath(locale, paths.home)}
          className="focus-ring font-display text-sm font-semibold leading-tight tracking-tight text-text"
        >
          <span className="block">HAMZA</span>
          <span className="block text-muted">CHARAF EDDINE</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring font-body text-[0.9rem] transition-colors ${
                isActive(link.href) ? "text-accent" : "text-muted hover:text-text"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 font-data text-xs text-muted" aria-label="Language">
            <Link
              href={locale === "en" ? pathname : switchHref}
              aria-current={locale === "en" ? "true" : undefined}
              className={`focus-ring px-1.5 py-1 ${locale === "en" ? "text-accent" : "hover:text-text"}`}
            >
              EN
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={locale === "de" ? pathname : switchHref}
              aria-current={locale === "de" ? "true" : undefined}
              className={`focus-ring px-1.5 py-1 ${locale === "de" ? "text-accent" : "hover:text-text"}`}
            >
              DE
            </Link>
          </div>
          <a
            href={cvHref}
            download
            className="focus-ring border border-line-strong px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            {dict.nav.downloadCv}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center p-2 text-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Primary mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`focus-ring rounded px-2 py-2.5 font-body text-base ${
                  isActive(link.href) ? "text-accent" : "text-muted hover:text-text"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-1 font-data text-xs text-muted">
                <Link
                  href={locale === "en" ? pathname : switchHref}
                  aria-current={locale === "en" ? "true" : undefined}
                  className={`px-1.5 py-1 ${locale === "en" ? "text-accent" : ""}`}
                >
                  EN
                </Link>
                <span aria-hidden="true">/</span>
                <Link
                  href={locale === "de" ? pathname : switchHref}
                  aria-current={locale === "de" ? "true" : undefined}
                  className={`px-1.5 py-1 ${locale === "de" ? "text-accent" : ""}`}
                >
                  DE
                </Link>
              </div>
              <a
                href={cvHref}
                download
                className="focus-ring border border-line-strong px-4 py-2 text-sm font-medium text-text"
              >
                {dict.nav.downloadCv}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
