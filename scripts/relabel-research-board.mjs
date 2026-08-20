#!/usr/bin/env node
/* ---------------------------------------------------------------------------
   Re-labels the research board.

   The Figma export carries textbook stage headers — "Empathize & Research",
   "Define", "Ideate" — which is exactly the vocabulary this site avoids
   everywhere else. The board itself is good; only the words on it are wrong.

   So: crop the header band off, measure where the three panels sit, and draw a
   new header row in plain language over the same columns.

     node scripts/relabel-research-board.mjs

   Run it against research-board-source.png (the untouched Figma export) so it
   stays repeatable and never re-crops an already-cropped file.
--------------------------------------------------------------------------- */

import { chromium } from "playwright";
import sharp from "sharp";
import { existsSync, copyFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join(process.cwd(), "public/images/xiphias");
const SOURCE = join(DIR, "research-board-source.png");
const OUT = join(DIR, "research-board.png");

/* First run: keep the original export aside as the source of truth. */
if (!existsSync(SOURCE)) copyFileSync(OUT, SOURCE);

const HEADER_H = 50; // the blue band carrying the stage words

const meta = await sharp(SOURCE).metadata();

/* Find the three panels by looking for dark pixels along the header band. */
const { data, info } = await sharp(SOURCE)
  .extract({ left: 0, top: 20, width: meta.width, height: 1 })
  .raw()
  .toBuffer({ resolveWithObject: true });

/* Detect the pink gutters between panels rather than the panels themselves:
   the white header text is as bright as anything on the board, so a
   dark-pixel test splits each bar in half where the title sits. */
const isGutter = (x) => {
  const i = x * info.channels;
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  return r > 244 && g > 198 && g < 238 && b > 198 && b < 238;
};

const bands = [];
let run = null;
for (let x = 0; x < info.width; x++) {
  if (!isGutter(x) && !run) run = { start: x };
  if (isGutter(x) && run) {
    run.end = x;
    bands.push(run);
    run = null;
  }
}
if (run) {
  run.end = info.width;
  bands.push(run);
}

const panels = bands.filter((b) => b.end - b.start > 120);
console.log(
  "  panels:",
  panels.map((p) => `${p.start}–${p.end}`).join("   ") || "none found"
);
if (panels.length !== 3) {
  throw new Error(`expected 3 panels, found ${panels.length}`);
}

/* Body of the board, with the stage headers removed. */
const body = await sharp(SOURCE)
  .extract({
    left: 0,
    top: HEADER_H,
    width: meta.width,
    height: meta.height - HEADER_H,
  })
  .toBuffer();

const LABELS = [
  { title: "Who I talked to", sub: "The people whose problem this had to solve" },
  { title: "What I heard", sub: "Turning all of it into one clear problem" },
  { title: "Ideas I explored", sub: "Going wide, then choosing the structure" },
];

const headers = panels
  .map((panel, i) => {
    const { title, sub } = LABELS[i];
    return `<div class="bar" style="left:${panel.start}px; width:${panel.end - panel.start}px">
        <div class="t">${title}</div><div class="s">${sub}</div>
      </div>`;
  })
  .join("");

const html = `<!doctype html><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
  * { box-sizing: border-box; margin: 0; }
  body { width: ${meta.width}px; background: #FADEDE; font-family: Raleway, sans-serif; }
  .head { position: relative; height: ${HEADER_H}px; }
  .bar { position: absolute; top: 0; height: ${HEADER_H}px; padding: 9px 18px;
         background: linear-gradient(100deg, #0E3C93 0%, #1C57B4 100%); color: #fff; }
  .t { font-size: 19px; font-weight: 700; letter-spacing: -0.01em; line-height: 1.15; }
  .s { font-size: 11px; opacity: .82; margin-top: 3px; }
  img { display: block; width: ${meta.width}px; }
</style>
<div class="head">${headers}</div>
<img src="data:image/png;base64,${body.toString("base64")}">`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: meta.width, height: meta.height },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(900);
await page.screenshot({ path: OUT, fullPage: true });
await browser.close();

const after = await sharp(OUT).metadata();
console.log(`  written ${OUT} — ${after.width}x${after.height}`);
