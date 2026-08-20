#!/usr/bin/env node
/* ---------------------------------------------------------------------------
   CAPTURE — screenshots for the XIPHIAS case study

     node scripts/capture-xiphias.mjs

   Writes 1600px-wide PNGs into public/images/xiphias/ using the filenames the
   case study already expects. Every shot is wrapped in its own try/catch, so
   one failing target never costs the rest of the run; the summary at the end
   says exactly what landed and what did not.

   Consent: the site opens a cookie dialog that dims and blocks the page. The
   script clicks "Reject all" — the privacy-preserving choice the page itself
   offers — and never "Accept all". If no reject control exists it takes no
   position at all and simply clears the overlay for the frame.
--------------------------------------------------------------------------- */

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "images", "xiphias");
const BASE = "https://www.xiphiasimmigration.com";

mkdirSync(OUT, { recursive: true });

const results = [];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 1,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
});
const page = await context.newPage();

/* Decline optional cookies. Never accept on the reader's behalf. */
async function dismissConsent() {
  const reject = page.getByRole("button", { name: /reject all/i }).first();
  if (await reject.count().catch(() => 0)) {
    await reject.click({ timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(1000);
    return;
  }
  /* No decline offered — take no position, just clear it out of the frame. */
  await page
    .evaluate(() => {
      for (const node of document.querySelectorAll(
        '[role="dialog"], [class*="cookie" i], [id*="cookie" i]'
      )) {
        node.remove();
      }
      document.body.style.overflow = "";
    })
    .catch(() => {});
}

/* The site also throws a lead-capture modal. Decline it — never fill it in. */
async function dismissEnquiry() {
  for (const name of [/not now/i, /^close$/i, /^x$/i]) {
    const control = page.getByRole("button", { name }).first();
    if (await control.count().catch(() => 0)) {
      await control.click({ timeout: 4000 }).catch(() => {});
      await page.waitForTimeout(800);
      return;
    }
  }
  await page.keyboard.press("Escape").catch(() => {});
  await page.waitForTimeout(500);
}

async function go(path) {
  await page.goto(path.startsWith("http") ? path : BASE + path, {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2000);
  await dismissConsent();
  await page.waitForTimeout(1200);
  await dismissEnquiry();
  await page.waitForTimeout(1200);
  /* It can fire on a delay, so sweep once more before shooting. */
  await dismissEnquiry();
  await page.waitForTimeout(800);
}

async function capture(name, fn) {
  try {
    await fn();
    results.push(`  ok      ${name}.png`);
    console.log(`  ok      ${name}`);
  } catch (error) {
    results.push(`  FAILED  ${name} — ${String(error).split("\n")[0].slice(0, 90)}`);
    console.log(`  FAILED  ${name}`);
  }
}

const file = (name) => join(OUT, `${name}.png`);

/* --- 1. Homepage hero ---------------------------------------------------- */
await capture("homepage-hero", async () => {
  await go("/");
  await page.screenshot({ path: file("homepage-hero") });
});

/* --- 2. Guided Route Finder ---------------------------------------------- */
await capture("route-finder", async () => {
  const anchor = page.getByText("Question 1 of 3").first();
  await anchor.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const section = anchor.locator("xpath=ancestor::section[1]");
  if (await section.count()) await section.screenshot({ path: file("route-finder") });
  else await page.screenshot({ path: file("route-finder") });
});

/* --- 3. Intelligence report preview -------------------------------------- */
await capture("intelligence-report", async () => {
  const heading = page.locator("#premium-report-heading").first();
  await heading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  const section = heading.locator("xpath=ancestor::section[1]");
  if (await section.count())
    await section.screenshot({ path: file("intelligence-report") });
  else await page.screenshot({ path: file("intelligence-report") });
});

/* --- 4. Main navigation, mega menu open ---------------------------------- */
await capture("nav-pillars", async () => {
  await go("/");
  await page.mouse.move(800, 40);
  const link = page.getByRole("link", { name: "Residency", exact: true }).first();
  await link.hover();
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: file("nav-pillars"),
    clip: { x: 0, y: 0, width: 1600, height: 760 },
  });
});

/* --- 5. Country brochure page -------------------------------------------- */
await capture("country-brochure", async () => {
  await go("/residency/canada");
  await page.screenshot({ path: file("country-brochure") });
});

/* --- 6. XIA Intelligence suite ------------------------------------------- */
await capture("xia-suite", async () => {
  await go("/xia-intelligence");
  await page.screenshot({ path: file("xia-suite") });
});

/* --- 7. Passport Power ---------------------------------------------------- */
await capture("passport-power", async () => {
  await go("/passport-index");
  await page.screenshot({ path: file("passport-power") });
});

/* --- 8. Programme explorer / deep analysis -------------------------------- */
await capture("programme-explorer", async () => {
  await go("/programme-explorer");
  await page.screenshot({ path: file("programme-explorer") });
});

/* --- 9. Resources ---------------------------------------------------------- */
await capture("blog", async () => {
  await go("/");
  const resources = page.locator("#resources").first();
  if (await resources.count()) {
    await resources.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    await page.screenshot({ path: file("blog") });
  } else {
    await go("/articles/express-entry-crs-score-system-explained");
    await page.screenshot({ path: file("blog") });
  }
});

/* --- 10. The assistant ---------------------------------------------------- */
await capture("chatbot", async () => {
  await go("/");
  /* The launcher is a fixed control pinned to the bottom-right corner. */
  const spot = await page.evaluate(() => {
    const candidates = [...document.querySelectorAll('button,[role="button"],a')];
    const hit = candidates.find((el) => {
      const style = getComputedStyle(el);
      const box = el.getBoundingClientRect();
      return (
        style.position === "fixed" &&
        box.top > innerHeight * 0.55 &&
        box.left > innerWidth * 0.7 &&
        box.width > 28 &&
        box.width < 140
      );
    });
    if (!hit) return null;
    const box = hit.getBoundingClientRect();
    return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
  });
  if (!spot) throw new Error("no fixed bottom-right launcher found");
  await page.mouse.click(spot.x, spot.y);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: file("chatbot") });
});

/* --- 11. The old site, from the Internet Archive -------------------------- */
await capture("before-old-site", async () => {
  await go("https://web.archive.org/web/2024/https://www.xiphiasimmigration.com/");
  await page.waitForTimeout(6000);
  /* Drop the Archive's own toolbar so the frame shows only the old site. */
  await page.evaluate(() => {
    for (const id of ["wm-ipp-base", "wm-ipp", "donato"]) {
      const node = document.getElementById(id);
      if (node) node.remove();
    }
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: file("before-old-site") });
});

await browser.close();

console.log("\n  CAPTURE SUMMARY\n");
for (const line of results) console.log(line);
console.log(`\n  Files written to ${OUT}\n`);
