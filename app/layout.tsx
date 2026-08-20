import type { Metadata } from "next";
import { Newsreader, Public_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";
import MarginRail from "@/components/MarginRail";
import Masthead from "@/components/Masthead";
import Colophon from "@/components/Colophon";
import { SITE_URL } from "@/lib/site";

/* One face with a voice, one with none, one for structure. */
/* Variable, like Public Sans below it: two files instead of four, the full
   200–800 range available to `font-light`, and far less to go wrong when
   Google Fonts is having a bad minute at build time. */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

/* Requested as a variable font: one file covers 100–900, and it avoids the
   per-weight fetches that Google Fonts intermittently fails to serve. */
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
  display: "swap",
});

const TITLE = "Dhanush — product designer";
const DESCRIPTION =
  "Product designer in Bangalore. I design for what the business needs and what the user came for — then build it myself, so it ships the way it was meant to.";

/* `metadataBase` is what turns the relative Open Graph image into the
   absolute URL a scraper needs. Without it Next warns at build time and
   every shared link renders without a card — the failure mode nobody
   notices until a recruiter has already scrolled past it.

   Deliberately absent here: a title `template`, and a canonical URL. Every
   sheet already writes its own full title ("About — Dhanush"), so a template
   would append a second "— Dhanush" to all of them; and a canonical set at
   the root is inherited by every child, which would point the whole site at
   the home page and quietly remove the case studies from search.

   `openGraph` and `twitter` carry no title or description on purpose. Left
   unset, Next fills each from the page's own `title` and `description`, so
   sharing a case study shows that case study rather than the home page. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Dhanush",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${publicSans.variable} ${fragmentMono.variable}`}
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="data sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-raised focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <MarginRail />

        <div className="lg:pl-rail">
          <Masthead />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Colophon />
        </div>
      </body>
    </html>
  );
}
