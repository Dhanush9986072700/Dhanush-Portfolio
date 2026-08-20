#!/usr/bin/env node
/* ---------------------------------------------------------------------------
   SYSTEM CHECK  —  npm run lint:system

   The claim on the colophon is that this site obeys a constraint. A claim a
   recruiter cannot verify is worth nothing, so the constraint is checked.

   1. No raw colour literals outside the token layer.
   2. No radius or shadow utilities. The theme already deletes the scales, but
      bracketed arbitrary values compile anyway — this catches those.
      (No example is written out here: Tailwind scans this file too, and a
      sample class in a comment is enough to emit dead CSS into the bundle.)
   3. The accent may only be applied in files that state facts. Everything
      else must reach for ink, muted, or hairline.

   Rule 3 is the honest version of the original idea. "One accent instance per
   viewport" reads well and cannot survive a table with four live rows in it —
   so the rule is about MEANING, and the check enforces the part a machine can
   actually see: which files are allowed to touch the accent at all.
--------------------------------------------------------------------------- */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const SCAN = ["app", "components", "data", "lib"];
const EXT = /\.(tsx?|css)$/;

const TOKEN_LAYER = join("app", "tokens.css");

/** Files permitted to apply the accent, and why. */
const ACCENT_ALLOWED = new Map([
  [join("app", "tokens.css"), "defines it"],
  [join("app", "globals.css"), "focus ring and selection — both are state"],
  [join("components", "MarginRail.tsx"), "the reader's position is a fact"],
  [join("components", "Register.tsx"), "live status is a fact"],
  [join("components", "Delta.tsx"), "a measurement is a fact"],
  [join("components", "Colophon.tsx"), "names the hex in prose"],
  [join("components", "Hero.tsx"), "a shipped, measured result is a fact"],
  [join("components", "Masthead.tsx"), "the page you are on is a fact"],
  [join("components", "MobileMenu.tsx"), "the page you are on is a fact"],
  [join("components", "OverviewBand.tsx"), "live status is a fact"],
  [join("components", "WorkList.tsx"), "live status is a fact"],
  [join("components", "ProcessIndex.tsx"), "the passage you are reading is a fact"],
  [
    join("app", "work", "xiphias-immigration", "page.tsx"),
    "measured outcomes are facts",
  ],
  [
    join("app", "work", "harmony-luxe", "page.tsx"),
    "measured outcomes are facts",
  ],
]);

const COLOUR_LITERAL = /#[0-9a-f]{3,8}\b|\brgba?\(|\bhsla?\(/gi;
/* Hyphenated form only, so the word "shadow" in prose is not a violation.
   Bare `rounded` / `shadow` cannot compile anyway: the scales are deleted. */
const ROUNDED_OR_SHADOW = /\b(rounded|shadow|drop-shadow)-(\[|[a-z0-9])/g;
const ACCENT_USE = /\baccent\b/;

/* Two files are allowed literal colour, for two different reasons.

   The colophon prints the accent hex as running text — that is the point.

   The Open Graph card is rendered by Satori rather than a browser, so there
   is no Tailwind and no CSS custom property to reach for. Its four hexes are
   copies of the token layer, kept in step by hand and commented as such. */
const LITERAL_ALLOWED = new Set([
  join("components", "Colophon.tsx"),
  join("app", "opengraph-image.tsx"),
]);

/** Blank out block and line comments, preserving line numbers. */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/^\s*\/\/.*$/gm, "");
}

const files = [];
for (const dir of SCAN) walk(join(ROOT, dir));

function walk(dir) {
  let items;
  try {
    items = readdirSync(dir);
  } catch {
    return;
  }
  for (const item of items) {
    const full = join(dir, item);
    if (statSync(full).isDirectory()) walk(full);
    else if (EXT.test(item)) files.push(full);
  }
}

const problems = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const source = stripComments(readFileSync(file, "utf8"));

  source.split("\n").forEach((code, i) => {
    const at = `${rel.split(sep).join("/")}:${i + 1}`;

    if (rel !== TOKEN_LAYER && !LITERAL_ALLOWED.has(rel)) {
      const found = code.match(COLOUR_LITERAL);
      if (found) {
        problems.push(`${at}  raw colour ${found[0]} — use a token`);
      }
    }

    const shape = code.match(ROUNDED_OR_SHADOW);
    if (shape) {
      problems.push(`${at}  ${shape[0]} — depth is paper, raised, hairline`);
    }

    if (ACCENT_USE.test(code) && !ACCENT_ALLOWED.has(rel)) {
      problems.push(`${at}  accent used in a file that states no fact`);
    }
  });
}

if (problems.length > 0) {
  console.error("\n  SYSTEM CHECK FAILED\n");
  for (const problem of problems) console.error(`  ${problem}`);
  console.error(`\n  ${problems.length} problem(s).\n`);
  process.exit(1);
}

console.log(`\n  System check passed — ${files.length} files.`);
console.log("  No raw colour, no radius, no shadow, accent confined to fact.\n");
