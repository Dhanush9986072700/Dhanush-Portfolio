import type { StaticImageData } from "next/image";
import agree from "@/public/images/selected/agree-superfoods.jpg";
import resort from "@/public/images/selected/resort.jpg";
import harmonySite from "@/public/images/selected/harmony-luxe-site.jpg";
import superfoods from "@/public/images/selected/xiphias-superfoods.jpg";
import iris from "@/public/images/selected/iris.jpg";

/* ---------------------------------------------------------------------------
   OTHER PROJECTS

   Work with no case study written and none planned. A banner, a couple of
   lines about the design problem, and the live site.

   Written from the product side. An earlier version of this file listed the
   framework and the database next to every project, which describes how a
   thing was assembled rather than what was decided — and reads as a CV line
   for a different job. What belongs here is the problem each one posed and
   the part of it that was a design decision.

   Everything on this list shipped, and where a URL exists it can be opened
   and judged in about ten seconds. Concepts do not belong here.
--------------------------------------------------------------------------- */

export type SelectedProject = {
  subject: string;
  year: string;
  /** The design problem, in two or three sentences. If it needs more than
      that, it needs a case study instead. */
  what: string;
  /** The design work itself — not the tooling it was made with. */
  did: string;
  /** The live site, when there is one to open. */
  href?: string;
  banner: StaticImageData;
  alt: string;
};

export const SELECTED: SelectedProject[] = [
  {
    subject: "Agree Superfoods",
    year: "2025",
    what: "A food brand with no shop of its own. The hard part was discovery: nobody arrives searching for makhana by name, so the structure had to introduce products people have not heard of and still get a returning buyer to the same thing in two clicks.",
    did: "Brand system · information architecture · storefront and product pages",
    href: "https://www.agreesuperfoods.in",
    banner: agree,
    alt: "The Agree Superfoods storefront homepage.",
  },
  {
    subject: "Karnataka Resort",
    year: "2025",
    what: "One product for three people who share nothing: a guest booking a room, a front desk running the day, and an owner reading the numbers. Most of the work was deciding what each of them should never have to see.",
    did: "Booking flow · guest accounts · operations and reporting · design system",
    banner: resort,
    alt: "The Karnataka Resort booking homepage with its availability check.",
  },
  {
    subject: "Harmony Luxe Spa",
    year: "2025",
    what: "The public site for the same Indiranagar spa whose billing tool is written up above. A treatment list reads as a price sheet unless someone gives it a shape, so the job was making services, tiers and memberships comparable to a person deciding between them.",
    did: "Brand positioning · service and pricing structure · page design",
    href: "https://harmonyluxe.in",
    banner: harmonySite,
    alt: "The Harmony Luxe Spa homepage.",
  },
  {
    subject: "XIPHIAS Superfoods",
    year: "2024",
    what: "A premium organic brand taken from nothing to live in fifteen days. Two buyers on one storefront — someone picking up a packet of black rice, and a business ordering by the sack — so the path had to fork early without the site feeling like two sites.",
    did: "Brand system · product pages · B2B path · checkout",
    href: "https://www.xiphiassuperfoods.com",
    banner: superfoods,
    alt: "The XIPHIAS Superfoods storefront homepage.",
  },
  {
    subject: "IRIS Digital Imaging",
    year: "2023",
    what: "A radiology AI product explaining itself to doctors and to the people who sign off on buying it. The whole job was turning one technical claim into four steps a busy person could follow. The earliest thing here, and deliberately no more than it needed to be.",
    did: "Positioning · page structure · visual design",
    href: "https://irisdit.com",
    banner: iris,
    alt: "The IRIS Digital Imaging homepage.",
  },
];
