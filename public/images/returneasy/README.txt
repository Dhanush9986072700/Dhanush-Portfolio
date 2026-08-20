ReturnEasy case study — images
==============================

The page renders WITHOUT any images: every figure shows a ruled "Figma frame
to come" placeholder and its caption. That is intentional and safe to ship.

When you want to add the real frames, export them from Figma, drop them in this
folder, then in app/work/returneasy/page.tsx delete the two // in front of the
matching img/alt lines inside each decision's `figures` array, and add the
import at the top of the file.

Example — at the top of page.tsx, add an import:

    import brief from "@/public/images/returneasy/brief.png";

Then in DECISIONS, decision "01", change:

    // img: brief,
    // alt: "The ReturnEasy project brief frame.",
into:
    img: brief,
    alt: "The ReturnEasy project brief frame.",

Nothing else changes. A figure with an `img` renders the image; a figure
without one renders the placeholder.

SHOT LIST — the frames the captions already refer to
----------------------------------------------------

  brief.png        Decision 01. The Project Brief frame (page 01).

  assumptions.png  Decision 02, figure 1. The Assumptions Map + the
                   importance × uncertainty prioritisation matrix (page 01).

  research.png     Decision 02, figure 2. The Research Plan and Interview
                   Guide frames (page 02).

  definition.png   Decision 03. The Product Definition frame — job to be done,
                   Must / Should / Later, and the deliberate cuts (page 04).

  flows.png        Decision 04. The Experience Journey and the Primary Flow
                   with its branches (page 05).

  concepts.png     Decision 05, figure 1. The three home-screen concepts and
                   the comparison table (page 06).

  wireframes.png   Decision 05, figure 2. The twelve low-fidelity screens
                   (page 06).

  final-ui.png     Decision 06. The eight final UI screens (page 09).

FORMAT
------
Any format next/image handles (png, jpg, webp, avif). Full-width exports at
roughly 1600–2000px wide look best. Each image renders at its own ratio, so you
do not need to match a size.
