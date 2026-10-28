import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Read once per server process — the font file never changes at runtime.
let spaceGroteskBold: Buffer | null = null;
async function getFont() {
  if (!spaceGroteskBold) {
    spaceGroteskBold = await readFile(
      join(process.cwd(), "node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff"),
    );
  }
  return spaceGroteskBold;
}

// Small favicon: navy square, brass "H" monogram — same palette as the
// rest of the site (--color-ink / --color-accent), no invented imagery.
export default async function Icon() {
  const font = await getFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1222",
          border: "2px solid #d9a463",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 20, color: "#d9a463" }}>
          H
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, weight: 700, style: "normal" }] },
  );
}
