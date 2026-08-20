import Link from "next/link";
import Icon from "@/components/Icon";
import { CONTACT_EMAIL } from "@/data/nav";
import { PROFILE } from "@/data/profile";

/* ---------------------------------------------------------------------------
   HERO

   Who I am, what I do, and then straight into the work. In that order, and
   for a reason.

   This section used to open with a load-time figure set at 4.5rem — a number
   a stranger met before they knew my name. Proof only works after a claim,
   and a Lighthouse score as the largest thing on a designer's homepage argues
   for the wrong job anyway. It now sits on the XIPHIAS entry, attached to the
   project it measures.

   The old version also offered exactly one action: email me. Asking for
   contact before showing anything is the specific mistake the XIPHIAS case
   study is about — their old homepage put a contact form in the hero. Hard to
   make that argument on a page that was doing the same thing. The primary
   action is now the work; the email stays reachable but goes second.

   No accent here. Nothing in this section is a live status, a position, or a
   focus state, so nothing in it earns mulberry.
--------------------------------------------------------------------------- */

const FACTS: [string, string][] = [
  ["Role", PROFILE.role],
  ["Experience", `${PROFILE.experience} · ${PROFILE.basedIn.split(",")[0]}`],
  ["Works on", PROFILE.worksOn],
];

export default function Hero() {
  return (
    <section
      data-section="Intro"
      aria-labelledby="intro-heading"
      className="mx-auto max-w-[1180px] px-5 pb-14 pt-14 md:px-10 md:pt-20"
    >
      {/* Name, discipline, place — the three things a stranger needs before
          anything else on this page means anything. */}
      <p className="data flex flex-wrap gap-x-3 gap-y-1 text-muted">
        <span className="text-ink">Dhanush N</span>
        <span aria-hidden>&middot;</span>
        <span>{PROFILE.role}</span>
        <span aria-hidden>&middot;</span>
        <span>{PROFILE.basedIn}</span>
      </p>

      <h1
        id="intro-heading"
        className="font-display mt-7 max-w-[24ch] text-[clamp(2rem,5.2vw,3.75rem)] font-light leading-[1.05] tracking-[-0.025em] text-ink"
      >
        I design for what the business needs and what the user came for.
      </h1>

      {/* One paragraph, and it does one job: say what the work actually is.
          A hiring manager gives a portfolio a few minutes, and the opening
          decides whether they spend them. No project stories up here — the
          proof is three screens down and does not need trailing. */}
      <p className="prose-body mt-6 max-w-[58ch] text-[clamp(0.95rem,1.4vw,1.125rem)]">
        Every project starts the same way for me: what does this business need
        to happen, and what is the person on the other side trying to get done?
        I design the experience where those two meet — and I build it myself,
        so it ships the way it was meant to.
      </p>

      <dl className="mt-10 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-3">
        {FACTS.map(([term, value]) => (
          <div key={term} className="bg-raised px-4 py-4">
            <dt className="label">{term}</dt>
            <dd className="data mt-1.5 text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      {/* The work first, the email second. */}
      <p className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
        <Link
          href="#selected-work"
          className="inline-flex min-h-11 items-center border border-ink px-5 text-[14px] text-ink transition-colors duration-150 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper motion-reduce:transition-none"
        >
          See the work
        </Link>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="link inline-flex min-h-11 items-center gap-2 text-[15px] text-muted"
        >
          {CONTACT_EMAIL}
          <Icon name="external" className="h-3.5 w-3.5 shrink-0" />
          <span className="sr-only">(opens your email app)</span>
        </a>
      </p>
    </section>
  );
}
