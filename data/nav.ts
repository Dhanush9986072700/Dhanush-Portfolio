/* ---------------------------------------------------------------------------
   NAVIGATION

   Three items, in the order a hiring manager actually asks their questions:

     Work     — can they do the job
     Process  — how do they think
     About    — who are they, and how do I reach them

   About absorbs Contact. A separate Contact item spends a nav slot on a
   mailto link everyone expects to find under About anyway.

   Overview used to sit at the front of this list: the same three projects,
   shown large, one per screen. Once the home page started leading with the
   work as images, Overview was a second route to the same place — and a nav
   that offers two ways to see one thing is a nav that has not decided. It now
   redirects home.

   The labels are plain on purpose: nothing here should need decoding in the
   two seconds a recruiter spends on a masthead.

   `number` is plain list numbering. It is the fact the desktop nav reveals on
   hover and the marker the mobile menu shows beside each label.
--------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  href: string;
  number: string;
};

export const NAV: NavItem[] = [
  { label: "Work", href: "/work", number: "01" },
  { label: "Process", href: "/process", number: "02" },
  { label: "About", href: "/about", number: "03" },
];

/* One address, used by the About page and the footer. Email only — the
   phone number stays on the résumé, where it is handed to a person rather
   than left out for scrapers. */
export const CONTACT_EMAIL = "dhanush.n698@gmail.com";
