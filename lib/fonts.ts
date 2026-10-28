import localFont from "next/font/local";

// Self-hosted via next/font/local instead of the @fontsource CSS @import
// chain in app/globals.css. Same files, same weights, same visual result —
// next/font inlines the @font-face rules at build time, strips the
// render-blocking @import network round-trips, and automatically emits
// <link rel="preload"> for each file, which @import never did.
//
// Each loader exposes its family through its own CSS variable
// (--font-display-local / -body- / -data-), which app/globals.css'
// @theme inline block then wraps into the existing --font-display,
// --font-body, --font-data tokens Tailwind generates utility classes
// from — so no class names or design tokens change anywhere else in
// the app, and nothing collides with Tailwind's own theme variables.

export const spaceGrotesk = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display-local",
  display: "swap",
});

export const ibmPlexSans = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body-local",
  display: "swap",
});

export const ibmPlexMono = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-data-local",
  display: "swap",
});

/** Combined className to apply once on the root <html> element. */
export const fontVariables = `${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`;
