import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/profile";

/* ---------------------------------------------------------------------------
   OPEN GRAPH CARD

   The first thing anyone sees, and usually the only thing they see before
   deciding whether to click — a link pasted into LinkedIn, Slack or a reply
   to a job post renders this and nothing else.

   It is the one file on the site that cannot use the token layer: an
   ImageResponse is rendered by Satori, not by a browser, so there is no
   Tailwind and no CSS custom properties. The hex values below are therefore
   written out literally, and scripts/check-system.mjs has this path on its
   raw-colour allowlist for exactly that reason. They must be kept in step
   with app/tokens.css by hand — there are four of them, and they are here.

   No mulberry. A card is not a live status, a position, or a focus state.
--------------------------------------------------------------------------- */

export const alt =
  "Dhanush — product designer, Bangalore. I design for what the business needs and what the user came for.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Kept in step with app/tokens.css by hand. */
const PAPER = "#F3EDE1";
const INK = "#191510";
const MUTED = "#6B6154";
const HAIRLINE = "#D6CCB9";

/* Newsreader is the display voice everywhere else, so the card uses it too.
   If Google Fonts is unreachable at build time the card still renders — in
   next/og's built-in face rather than not at all. A missing card is a
   broken-looking link; a slightly wrong one is not.

   The empty array matters: `fonts: []` is not "no override", it is "load no
   fonts", and Satori cannot lay out a single glyph without one. So the
   option is omitted entirely below rather than passed empty. This is not
   theoretical — it failed the build the first time it was written. */
async function displayFont(): Promise<
  { name: string; data: ArrayBuffer; style: "normal"; weight: 400 }[]
> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Newsreader:wght@300&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((res) => res.text());

    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return [];

    const data = await fetch(url).then((res) => res.arrayBuffer());
    return [{ name: "Newsreader", data, style: "normal", weight: 400 }];
  } catch {
    return [];
  }
}

export default async function OpenGraphImage() {
  const fonts = await displayFont();
  const display = fonts.length > 0 ? "Newsreader, serif" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PAPER,
          color: INK,
          padding: "64px 72px",
        }}
      >
        {/* Masthead rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: `1px solid ${HAIRLINE}`,
            paddingBottom: 20,
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span style={{ color: INK }}>Dhanush</span>
          <span>{PROFILE.basedIn}</span>
        </div>

        {/* The claim */}
        <div
          style={{
            display: "flex",
            fontFamily: display,
            fontSize: 76,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          I design for what the business needs and what the user came for.
        </div>

        {/* The facts */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderTop: `1px solid ${HAIRLINE}`,
            paddingTop: 20,
            fontSize: 20,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span>{PROFILE.role}</span>
          <span>{PROFILE.experience}</span>
          <span>{PROFILE.worksOn}</span>
        </div>
      </div>
    ),
    fonts.length > 0 ? { ...size, fonts } : size
  );
}
