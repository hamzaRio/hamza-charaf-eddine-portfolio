import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";

export const ogImageSize = { width: 1200, height: 630 };

// Read once per server process and reuse — these files never change at
// runtime, so re-reading them on every request would be wasted I/O.
let spaceGroteskBold: Buffer | null = null;
let plexMonoRegular: Buffer | null = null;

async function getOgFonts() {
  if (!spaceGroteskBold) {
    spaceGroteskBold = await readFile(
      join(process.cwd(), "node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff"),
    );
  }
  if (!plexMonoRegular) {
    plexMonoRegular = await readFile(
      join(process.cwd(), "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff"),
    );
  }
  return { spaceGroteskBold, plexMonoRegular };
}

interface RenderOgImageInput {
  kicker: string;
  subline: string;
  locationLabel: string;
}

/**
 * Renders the shared dark-navy/brass branded social preview image used for
 * both opengraph-image and twitter-image across every page (Next.js injects
 * it automatically for the whole app/[lang] segment and everything under it).
 */
export async function renderOgImage({ kicker, subline, locationLabel }: RenderOgImageInput) {
  const { spaceGroteskBold, plexMonoRegular } = await getOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a1222",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.28,
            backgroundImage:
              "linear-gradient(to right, #23314a 1px, transparent 1px), linear-gradient(to bottom, #23314a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "IBM Plex Mono",
              fontSize: 22,
              color: "#d9a463",
              letterSpacing: 1,
              marginBottom: 22,
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: 58,
              color: "#e8edf5",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "IBM Plex Mono",
              fontSize: 24,
              color: "#90a1be",
              marginTop: 30,
              maxWidth: 920,
            }}
          >
            {subline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: 56,
            left: 80,
            fontFamily: "IBM Plex Mono",
            fontSize: 18,
            color: "#7f8fac",
          }}
        >
          {locationLabel}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 60,
            right: 80,
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#d9a463",
          }}
        />
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Space Grotesk", data: spaceGroteskBold, weight: 700, style: "normal" },
        { name: "IBM Plex Mono", data: plexMonoRegular, weight: 400, style: "normal" },
      ],
    },
  );
}
