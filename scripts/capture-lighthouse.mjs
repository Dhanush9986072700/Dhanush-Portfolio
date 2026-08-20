#!/usr/bin/env node
/* ---------------------------------------------------------------------------
   Runs Lighthouse against the live XIPHIAS site and writes
   public/images/xiphias/performance.png — a real measured result rather than a
   number quoted from memory.

     node scripts/capture-lighthouse.mjs

   chrome-launcher cannot spawn a browser in this environment, so Lighthouse is
   pointed at a Playwright-launched Chromium over its debugging port.

   Two runs: mobile (Lighthouse's default, throttled) and desktop. Both are
   reported. Quoting only the flattering one would defeat the point.
--------------------------------------------------------------------------- */

import { chromium } from "playwright";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const URL = "https://www.xiphiasimmigration.com";
const PORT = 9222;
const OUT_DIR = join(process.cwd(), ".lighthouse");
const IMAGE = join(process.cwd(), "public/images/xiphias/performance.png");

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({
  args: [`--remote-debugging-port=${PORT}`, "--no-sandbox"],
});

async function audit(label, config) {
  const result = await lighthouse(
    URL,
    { port: PORT, output: "json", onlyCategories: ["performance"], logLevel: "error" },
    config
  );
  const lhr = result.lhr;
  const pick = (id) => lhr.audits[id]?.numericValue ?? null;
  const row = {
    label,
    score: Math.round((lhr.categories.performance.score ?? 0) * 100),
    lcp: pick("largest-contentful-paint"),
    fcp: pick("first-contentful-paint"),
    tbt: pick("total-blocking-time"),
    cls: pick("cumulative-layout-shift"),
    si: pick("speed-index"),
  };
  writeFileSync(join(OUT_DIR, `${label}.json`), JSON.stringify(lhr, null, 1));
  console.log(
    `  ${label.padEnd(8)} score ${row.score}  LCP ${(row.lcp / 1000).toFixed(2)}s  FCP ${(row.fcp / 1000).toFixed(2)}s  TBT ${Math.round(row.tbt)}ms  CLS ${row.cls?.toFixed(3)}`
  );
  return row;
}

const desktop = await audit("desktop", desktopConfig);
const mobile = await audit("mobile", undefined);

/* ---- render the result as a panel in the case study's own system --------- */
const s = (ms) => `${(ms / 1000).toFixed(1)}s`;

const card = (r) => `
  <div class="card">
    <div class="head">
      <span class="label">${r.label}</span>
      <span class="score ${r.score >= 90 ? "good" : r.score >= 50 ? "ok" : "bad"}">${r.score}</span>
    </div>
    <dl>
      <div><dt>Largest contentful paint</dt><dd>${s(r.lcp)}</dd></div>
      <div><dt>First contentful paint</dt><dd>${s(r.fcp)}</dd></div>
      <div><dt>Speed index</dt><dd>${s(r.si)}</dd></div>
      <div><dt>Total blocking time</dt><dd>${Math.round(r.tbt)}ms</dd></div>
      <div><dt>Cumulative layout shift</dt><dd>${r.cls.toFixed(3)}</dd></div>
    </dl>
  </div>`;

const html = `<!doctype html><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Newsreader:wght@300&family=Public+Sans:wght@400&display=swap');
  * { box-sizing: border-box; margin: 0; }
  body { width: 1600px; height: 900px; background: #F3EDE1; color: #191510;
         font-family: "Public Sans", sans-serif; padding: 56px 60px;
         display: flex; flex-direction: column; }
  h1 { font-family: "Newsreader", serif; font-weight: 300; font-size: 40px;
       letter-spacing: -0.02em; }
  .sub { font-family: "Fragment Mono", monospace; font-size: 13px;
         letter-spacing: .16em; text-transform: uppercase; color: #6B6154;
         margin-top: 14px; }
  .cards { display: flex; gap: 1px; background: #D6CCB9; border: 1px solid #D6CCB9;
           margin-top: 44px; flex: 1; }
  .card { flex: 1; background: #EAE2D2; padding: 32px 34px; display: flex;
          flex-direction: column; }
  .head { display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid #D6CCB9; padding-bottom: 20px; }
  .label { font-family: "Fragment Mono", monospace; font-size: 13px;
           letter-spacing: .18em; text-transform: uppercase; color: #6B6154; }
  .score { font-family: "Newsreader", serif; font-size: 68px; line-height: 1; }
  .good { color: #7E4360; } .ok { color: #6B6154; } .bad { color: #6B6154; }
  dl { margin-top: 26px; }
  dl div { display: flex; justify-content: space-between; align-items: baseline;
           padding: 14px 0; border-bottom: 1px solid #D6CCB9; }
  dt { font-size: 16px; color: #6B6154; }
  dd { font-family: "Fragment Mono", monospace; font-size: 20px;
       font-variant-numeric: tabular-nums; }
  footer { font-family: "Fragment Mono", monospace; font-size: 12px;
           letter-spacing: .14em; text-transform: uppercase; color: #6B6154;
           margin-top: 30px; }
</style>
<h1>Lighthouse, measured on the live site</h1>
<p class="sub">xiphiasimmigration.com · ${new Date().toISOString().slice(0, 10)}</p>
<div class="cards">${card(desktop)}${card(mobile)}</div>
<footer>Performance category only · mobile run uses Lighthouse's default throttling</footer>`;

const page = await browser.newPage({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await page.screenshot({ path: IMAGE });

await browser.close();
console.log(`\n  written ${IMAGE}\n`);
