import Link from "next/link";
import Icon from "@/components/Icon";
import { CONTACT_EMAIL, NAV } from "@/data/nav";

/* ---------------------------------------------------------------------------
   FOOTER

   Two things only: a way to get in touch, and a way to keep moving. The email
   is the largest thing here and the only display-serif item, so the eye lands
   on the action.

   Everything else that used to live down here — the palette, the typefaces,
   the build stack, the paragraph explaining the colour rule — was written for
   someone who already cared. It has been removed. The design should hold up
   without a footnote explaining it.
--------------------------------------------------------------------------- */

export default function Colophon() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-section="Contact"
      className="border-t border-ink"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
        <h2 id="contact-heading" className="label text-ink">
          Contact
        </h2>

        <p className="mt-5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link font-display inline-flex items-baseline gap-3 text-[clamp(1.4rem,3.2vw,2.25rem)] font-light leading-tight tracking-[-0.015em] text-ink"
          >
            {CONTACT_EMAIL}
            <Icon name="external" className="h-4 w-4 shrink-0 self-center" />
            <span className="sr-only">(opens your email app)</span>
          </a>
        </p>

        <p className="prose-body mt-3">
          The fastest way to reach me. Bangalore, India.
        </p>

        <nav
          aria-labelledby="footer-nav-heading"
          className="mt-12 border-t border-hairline pt-6"
        >
          <h3 id="footer-nav-heading" className="label">
            Pages
          </h3>
          <ul className="mt-2 flex flex-wrap gap-x-10">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="data link flex min-h-11 items-center text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="data mt-10 border-t border-hairline pt-5 text-muted">
          Dhanush &middot; Bangalore &middot; {year}
        </p>
      </div>
    </footer>
  );
}
