# Dead Reckoning

Portfolio for Dhanush — product & interface design, Bangalore.

## The direction

Borrowed from British Admiralty nautical charts: buff paper, brown-black
engraved linework, and one aniline overprint reserved for hazards and light
sectors. Charts don't shout; they annotate.

| role     | hex       | job                                    |
| -------- | --------- | -------------------------------------- |
| paper    | `#F3EDE1` | chart buff                             |
| raised   | `#EAE2D2` | the only elevation that exists         |
| ink      | `#191510` | brown-black, never `#000`              |
| accent   | `#7E4360` | chart mulberry — 6.3:1 on paper        |
| muted    | `#6B6154` | prose that steps back                  |
| hairline | `#D6CCB9` | the ruling                             |

**Newsreader** (display, the only voice) · **Public Sans** (text, deliberately
silent) · **Fragment Mono** (data and annotation).

## The rule

Mulberry marks a **true statement** and nothing else: a live status, your
position in the sheet, your keyboard focus, the link under your cursor. Never a
heading, never decoration, never emphasis.

Depth comes only from paper → raised → hairline. This is structural, not
aspirational: `app/tokens.css` deletes the `--radius-*` and `--shadow-*` scales,
so `rounded-lg` and `shadow-md` do not compile in this project.

```bash
npm run lint:system
```

Checks the rest: no raw colour outside the token layer, no radius or shadow
utilities, and the accent confined to the six files that state facts.

## Sheets

One drawing set, three sheets. Nav labels are deliberately plain — the concept
names survive in the copy, never in the navigation.

Nav order answers a hiring manager's questions in sequence: show me quickly
(Overview) → can they do the job (Work) → how do they think (Process) → who are
they and how do I reach them (About, which absorbs Contact).

| sheet | route       | nav label  | what it is                                |
| ----- | ----------- | ---------- | ----------------------------------------- |
| 01    | `/`         | —          | thesis + selected entries                 |
| 02    | `/overview` | `Overview` | one project per band, fast and visual     |
| 03    | `/work`     | `Work`     | the dense register, one row per project   |
| 04    | `/process`  | `Process`  | five written passages, no stage diagram   |
| 05    | `/about`    | `About`    | the dated record, the tools, the résumé   |

`/register` 308-redirects to `/work`. Overview bands deep-link into the matching
row (`/work#e-005`), which opens and focuses that entry.

## Structure

- `app/tokens.css` — the token layer, and the only file allowed raw colour
- `components/Thesis.tsx` — the hero: four numbered clauses, no greeting
- `components/Register.tsx` — projects as indexed entries, not cards
- `components/OverviewBand.tsx` — one project, one band, ~one viewport
- `components/Masthead.tsx` / `MobileMenu.tsx` — inline nav on desktop, a
  focus-trapped sheet on mobile
- `components/MarginRail.tsx` — the fixed margin scale. Two modes: percentage
  by default, band counter (`03/07`) on any sheet built of `[data-band]`
- `components/Delta.tsx` — handoff delta: drawn vs. shipped, per project
- `data/nav.ts` — nav labels and sheet numbers
- `data/projects.ts` — the register. Real entries only; the invented
  placeholders are gone
- `data/profile.ts` — the facts that appear on more than one sheet, plus the
  dated record the About sheet is built from
- `lib/site.ts` — the absolute origin, for the three files that cannot use a
  relative URL

## Shareable

`app/opengraph-image.tsx` draws the card in the same buff-and-ink system. It is
the one file allowed literal colour — Satori renders it, so there is no
Tailwind and no custom property to reach for; `check-system.mjs` has it on the
raw-colour allowlist and its four hexes are copies of `tokens.css`, kept in
step by hand.

`sitemap.ts` reads case-study URLs off the register, so a new project appears
in the sitemap without anyone remembering to add it. `robots.ts` points at the
sitemap and disallows nothing.

Set `NEXT_PUBLIC_SITE_URL` once the domain is decided. Until then `lib/site.ts`
falls back to Vercel's production URL, then to localhost — never to a guessed
domain, because a wrong absolute URL in a sitemap gets indexed before anyone
notices.

## Accessibility

Skip link, `:focus-visible` rings in accent, arrow-key/`j`/`k` navigation
through register rows, `aria-expanded` disclosures, a table `caption`, and
`prefers-reduced-motion` honoured in CSS and in every Framer Motion component.
Under reduced motion the rail stops gliding but keeps reading out — suppressing
motion should never cost the reader information.

## Run

```bash
npm run dev
```

```bash
npm run check
```
