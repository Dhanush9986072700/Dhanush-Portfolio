#!/usr/bin/env node
/* ---------------------------------------------------------------------------
   Builds public/images/xiphias/mdx-content.png — the MDX source a content
   editor actually opens, beside the page it generates.

   Reads the real file out of the XIPHIAS repo, so the screenshot is the
   content team's actual working file rather than a mock-up of one.

     node scripts/capture-mdx.mjs
--------------------------------------------------------------------------- */

import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const REPO = "E:/Xiphias/com";
const SOURCE = join(REPO, "content/residency/canada/_country.mdx");
const PAGE_SHOT = join(process.cwd(), "public/images/xiphias/country-brochure.png");
const OUT = join(process.cwd(), "public/images/xiphias/mdx-content.png");

const mdx = readFileSync(SOURCE, "utf8").split("\n").slice(0, 34).join("\n");

/* Inline the page shot — a file:// src does not resolve inside setContent. */
const pageDataUri = `data:image/png;base64,${readFileSync(PAGE_SHOT).toString("base64")}`;

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Light syntax colouring: frontmatter keys, strings, list markers. */
const highlight = escape(mdx)
  .replace(/^(---)$/gm, '<span class="rule">$1</span>')
  .replace(/^(\s*)([a-zA-Z][\w]*)(:)/gm, '$1<span class="key">$2</span><span class="p">$3</span>')
  .replace(/^(\s*)(- )/gm, '$1<span class="p">$2</span>')
  .replace(/&quot;([^&]*)&quot;/g, '<span class="str">"$1"</span>');

const html = `<!doctype html><meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 2000px; height: 1180px; display: flex; background: #E9E9EC;
         font-family: "Segoe UI", system-ui, sans-serif; }
  .pane { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  .bar { height: 38px; display: flex; align-items: center; gap: 10px;
         padding: 0 16px; font-size: 13px; letter-spacing: .02em; }
  .editor .bar { background: #23272E; color: #9DA5B4; }
  .browser .bar { background: #DEE1E6; color: #4A4A4A; }
  .dot { width: 11px; height: 11px; border-radius: 50%; display: inline-block; }
  pre { flex: 1; margin: 0; padding: 20px 22px; background: #1E2227; color: #ABB2BF;
        font-family: "Cascadia Mono", Consolas, monospace; font-size: 15.5px;
        line-height: 1.62; overflow: hidden; white-space: pre-wrap; }
  .key { color: #E06C75; } .str { color: #98C379; }
  .p { color: #6B7280; } .rule { color: #C678DD; }
  .shot { flex: 1; overflow: hidden; background: #fff; }
  .shot img { width: 100%; display: block; }
  .url { background: #fff; border-radius: 11px; padding: 3px 12px; font-size: 12.5px; color: #5F6368; }
</style>
<div class="pane editor">
  <div class="bar">
    <span class="dot" style="background:#FF5F57"></span>
    <span class="dot" style="background:#FEBC2E"></span>
    <span class="dot" style="background:#28C840"></span>
    <span style="margin-left:8px">content / residency / canada / _country.mdx</span>
  </div>
  <pre>${highlight}</pre>
</div>
<div class="pane browser">
  <div class="bar"><span class="url">xiphiasimmigration.com/residency/canada</span></div>
  <div class="shot"><img src="${pageDataUri}"></div>
</div>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 2000, height: 1180 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(600);
await page.screenshot({ path: OUT });
await browser.close();

console.log(`  written ${OUT}`);
