import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { XIPHIAS_IMPACT } from "@/data/projects";

import homepageHero from "@/public/images/xiphias/homepage-hero.png";
import beforeOldSite from "@/public/images/xiphias/before-old-site.png";
import researchBoard from "@/public/images/xiphias/research-board.png";
import wireframesIa from "@/public/images/xiphias/wireframes-ia.png";
import navPillars from "@/public/images/xiphias/nav-pillars.png";
import routeFinder from "@/public/images/xiphias/route-finder.png";
import intelligenceReport from "@/public/images/xiphias/intelligence-report.png";
import mdxContent from "@/public/images/xiphias/mdx-content.png";
import blogShot from "@/public/images/xiphias/blog.png";
import designFoundations from "@/public/images/xiphias/design-foundations.png";
import designSystem from "@/public/images/xiphias/design-system.png";
import countryBrochure from "@/public/images/xiphias/country-brochure.png";
import xiaSuite from "@/public/images/xiphias/xia-suite.png";
import programmeExplorer from "@/public/images/xiphias/programme-explorer.png";
import passportPower from "@/public/images/xiphias/passport-power.png";
import chatbot from "@/public/images/xiphias/chatbot.png";
import performance from "@/public/images/xiphias/performance.png";

/* ---------------------------------------------------------------------------
   XIPHIAS IMMIGRATION — case study

   Rebuilt around what actually happened, which was not five clean decisions.

   The spine is the five conversations. Dhanush was an employee, not a
   consultant — he had been using this site for years and already had a
   diagnosis before the MD handed him the brief. That diagnosis was about
   speed and code. Five conversations later it was about information
   architecture. The page is built to make the reader feel that turn, because
   it is the honest shape of the project and the only part nobody could
   invent.

   Deliberately NOT the shape of the other two case studies. No
   `{n, rail, headline, body, tradeoff, figures}` list here — that structure
   is the template this portfolio is supposed to be arguing against. The
   conversations get their own type, and so does the mapping from complaint
   to thing built.

   Colour: mulberry on the impact figures and the measured Lighthouse result.
   Nowhere else.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "XIPHIAS Immigration — Dhanush",
  description:
    "I worked there. I already knew the site was slow. Five conversations later I found out speed was not the problem — the information architecture was. A 17-year-old static site rebuilt on Next.js and MDX, designed and coded solo in three months.",
};

const LIVE_URL = "https://www.xiphiasimmigration.com";

const IMPACT = XIPHIAS_IMPACT;

const META: [string, string][] = [
  ["Role", "Product designer + front-end developer, in-house"],
  ["Reporting to", "The Managing Director, directly"],
  ["Timeline", "3 months"],
  ["Team", "Solo — research, design, build"],
];

/* What I could see for myself before anyone briefed me. Kept separate from
   what the conversations produced, because the gap between the two lists is
   the whole point of the page. */
const WHAT_I_KNEW: string[] = [
  "Built 17 years ago in plain HTML and CSS, page by page",
  "Years of different hands in it — the code had stopped agreeing with itself",
  "Hundreds of landing pages, each one made by hand",
  "Slow. Slow enough that I noticed it while using it for my own work",
  "Bad on a phone",
];

type Conversation = {
  id: string;
  rail: string;
  who: string;
  why: string;
  /* What I went in to ask. Written down before the meeting, because with the
     MD I got one sitting and no second chance. */
  asked: string;
  /* Their words, off my notes. Not tidied. */
  said: string[];
  /* The only line that matters: what this changed. */
  changed: string;
  /* True when the conversation told me something I did not already believe. */
  newToMe: boolean;
};

const CONVERSATIONS: Conversation[] = [
  {
    id: "c-01",
    rail: "The MD",
    who: "The Managing Director",
    why: "He assigned the project and he signs it off. Everything else is downstream of what he actually wants.",
    asked:
      "What does a successful version of this site look like to you, and how will you know?",
    said: [
      "I want it advanced. High speed, mobile responsive, attractive, conversational, dynamic.",
      "We are getting less leads. Organic traffic has to improve.",
      "Once the leads come, then only sales can convert. That is the whole thing.",
    ],
    changed:
      "It stopped being a redesign. He gave me a number to move — leads — and a route to it, organic traffic. Every argument I had for the next three months I made against that sentence instead of against taste.",
    newToMe: true,
  },
  {
    id: "c-02",
    rail: "SEO",
    who: "The SEO team",
    why: "The MD wanted organic traffic. These are the people who had been trying to get it and failing.",
    asked: "Why aren't the leads coming?",
    said: [
      "The site is static. Hundreds of landing pages and not enough people to keep them alive.",
      "The information architecture was never planned. It just grew.",
      "For a single change we need a developer.",
    ],
    changed:
      "I had blamed the age of the code. They put it on structure and on the developer sitting in the middle of every edit. That last line came up again in the next conversation, and then again in the one after it.",
    newToMe: true,
  },
  {
    id: "c-03",
    rail: "Content",
    who: "The content team",
    why: "They are the ones actually maintaining the thing every day.",
    asked: "What does a normal week of updating this site look like?",
    said: [
      "Blogs, news, media — every day something has to go up.",
      "Any content change on the site, we have to go to a developer. It gets done late.",
      "Governments change small things constantly. 50+ countries, 150+ programmes. In a static site there is no way to keep track.",
    ],
    changed:
      "This is where the shape of the build got decided. Not a nicer CMS on the same structure — the content itself had to become data the team owns, or nothing else would hold.",
    newToMe: false,
  },
  {
    id: "c-04",
    rail: "Sales",
    who: "Internal sales and the processing team",
    why: "They look at competitor sites all day and they use ours in front of clients. Two useful things at once.",
    asked:
      "You see these sites constantly. Next to those, what is actually wrong with ours?",
    said: [
      "Which country, which programme — finding that is the biggest task.",
      "Sometimes the country is a landing page with programme names on it. Sometimes the programme is its own page. There is no rule, so it is confusing.",
      "If a client asks a question we don't have on hand, we go and search the brochures.",
    ],
    changed:
      "Our own sales team could not navigate our own site. They were working from memory and PDFs instead. At that point speed stopped being the headline problem.",
    newToMe: true,
  },
  {
    id: "c-05",
    rail: "Clients",
    who: "Clients visiting the office",
    why: "The only people in this list who are not paid to be nice about the website.",
    asked: "What did you try to do on the site before you came in?",
    said: [
      "The structure — I couldn't work out where to go.",
      "There is no way to check anything myself. Am I eligible for PR in this country or not?",
      "If I could check myself first, it would help a lot. Then I would come to the sales person.",
    ],
    changed:
      "The strongest thing anyone said to me, and I had not seen it coming. They were not asking for less contact with sales. They wanted to arrive already knowing something. Our homepage was doing the exact opposite — a contact form before we had told them anything.",
    newToMe: true,
  },
];

/* Not a conversation, so it does not get the same treatment. */
const COMPETITORS =
  "Then I went through the competition properly — Henley, and the firms our sales team kept mentioning. What I was looking for was not visual. It was how they let someone in: what the first menu asks you, how few clicks to a real answer, whether anything is self-serve. That is where the pattern below finished forming.";

/* The mapping. Five complaints in, five things out. This table is the part I
   would put in front of a hiring manager if I only had one screen. */
type Delivered = {
  from: string;
  complaint: string;
  built: string;
};

const DELIVERED: Delivered[] = [
  {
    from: "The MD",
    complaint: "Leads are down. Organic traffic has to improve.",
    built:
      "Next.js with pages generated ahead of time, so every programme page is fast and indexable. A lead form on every page, tagged so we can see which page produced the lead.",
  },
  {
    from: "SEO",
    complaint: "The IA was never planned, and every change needs a developer.",
    built:
      "Four intent pillars with every country and programme underneath, and a mega menu that shows the whole structure at once. Metadata generated per page from the content model.",
  },
  {
    from: "Content",
    complaint: "Daily updates, 50+ countries, and a developer in the way.",
    built:
      "The whole site content-driven from MDX, which the team edits directly. A CMS on top for blogs, news and media, since those go up several times a day by people who should not be near a repository.",
  },
  {
    from: "Sales",
    complaint:
      "Which country, which programme. And we search brochures for answers.",
    built:
      "One consistent template for every country and programme, so there is a rule instead of a guess. The brochure linked on the page itself, so nobody is hunting a PDF in front of a client.",
  },
  {
    from: "Clients",
    complaint: "I can't check anything myself.",
    built:
      "The Guided Route Finder — three questions, an answer back, no contact details asked for. Behind it, XIA Intelligence: nine assessment modules including eligibility, cost estimate, document readiness and programme comparison.",
  },
];

type Figure = {
  caption: string;
  img?: StaticImageData;
  alt?: string;
  aspect?: string;
};

/* The build decisions. Deliberately fewer of these than the conversations
   above — the thinking is the part that is hard to show, and it is the part
   most case studies skip in order to get to the screens faster. */
type Build = {
  n: string;
  rail: string;
  headline: string;
  body: string;
  tradeoff: string;
  figures: Figure[];
};

const BUILDS: Build[] = [
  {
    n: "01",
    rail: "The pillars",
    headline:
      "Four ways in, decided by what someone wants — not by how we are organised.",
    body: "The old menu was five service categories, which is how the company describes itself internally. To find a country you had to know which bucket it lived in first, and our own sales team couldn't. I grouped everything under four intents — Residency, Citizenship, Corporate, Skilled — with every country and every programme sitting underneath, and put the whole structure in one mega menu so you can see the entire site in a single view without clicking into it. There is a search for people who already know the programme name.",
    tradeoff:
      "Someone who knew exactly what they wanted lost a click. They were never the people we were losing.",
    figures: [
      {
        caption:
          "The menu as it works now. Four intents, every country and programme underneath, searchable.",
        img: navPillars,
        alt: "Navigation open on Residency, showing countries and their programmes.",
      },
      {
        caption:
          "The structure underneath: four tracks across 50+ countries, the tools that support a decision, and the four journeys people actually take.",
        img: wireframesIa,
        alt: "Sitemap, primary user journeys and page structures.",
      },
    ],
  },
  {
    n: "02",
    rail: "Content as data",
    headline: "The content team owns the content. That was the whole fix.",
    body: "Every page on the site is generated from MDX, and the content team edits those files directly. A price change or a new programme is a file edit, not a ticket. Blogs, news and media go through a CMS instead — those go up several times a day, by people who have no business being in a repository, and the two jobs are different enough to deserve different tools. Governments move something small most weeks; the site now absorbs that without anyone asking me.",
    tradeoff:
      "A single CMS for everything would have been one thing to explain instead of two. Splitting them means the programme pages stay in version control where a wrong number can be traced and reverted, and the daily publishing stays out of the way. I would make the same split again.",
    figures: [
      {
        caption:
          "The file a content editor opens, and the page it produces. The title and summary at the top of the file are the headline and standfirst on the right.",
        img: mdxContent,
        alt: "An MDX content file beside the Canada residency page it generates.",
      },
      {
        caption:
          "Blogs, news and media, published through the CMS. These go out without me.",
        img: blogShot,
        alt: "The resources and news section of the live site.",
      },
    ],
  },
  {
    n: "03",
    rail: "Self-serve",
    headline:
      "We were asking for a phone number before we had told anyone anything.",
    body: "The old homepage led with a contact form. The clients I spoke to wanted the opposite — to find something out on their own first, and then talk to sales already knowing something. The Guided Route Finder is three questions and a direction back, with no contact details required to begin, and the card says so. Behind it sits XIA Intelligence: nine modules, including a cost estimator, document readiness, an eligibility route report and a side-by-side programme comparison. There is also an assistant for the routine questions, so nobody waits on an advisor to be told something a page already says.",
    tradeoff:
      "Giving the first answer away loses you some captured emails. It wins the people who were never going to fill in a form cold — which, going by the clients I sat with, is most of them.",
    figures: [
      {
        caption:
          "Guided Route Finder. Three questions, and “no contact details required to begin” written on the card itself.",
        img: routeFinder,
        alt: "Guided Route Finder, question one of three.",
      },
      {
        caption:
          "The assessment it leads to — route fit, risk review, next actions.",
        img: intelligenceReport,
        alt: "The Intelligence report preview with its three sections.",
      },
    ],
  },
  {
    n: "04",
    rail: "One template",
    headline: "150+ programmes cannot be designed one page at a time.",
    body: "Every programme needs the same things: eligibility, timeline, cost, documents. Built by hand they drift apart within a month, and then sales stops trusting the page and goes back to the brochure. So I built the foundations first — colour, type and spacing held in the Tailwind config rather than described next to it — then the components, then the page templates. Adding a country became a content job instead of a design job. The brochure is linked on the page itself, which was the specific thing sales asked for.",
    tradeoff:
      "A template costs flexibility. An unusual programme has to bend to fit the shape. Worth it for pages that still agree with each other a year later.",
    figures: [
      {
        caption:
          "Foundations — colour, type scale and spacing, taken from the Tailwind config rather than written out beside it.",
        img: designFoundations,
        alt: "Design foundations: colour tokens, Raleway type scale, spacing and radius.",
      },
      {
        caption:
          "The components on top of them: buttons and their states, inputs including errors, cards, the mega-menu panel, header and footer.",
        img: designSystem,
        alt: "Design system components.",
      },
      {
        caption:
          "Canada residency — one country page out of the shared template.",
        img: countryBrochure,
        alt: "The Canada residency programme page.",
      },
    ],
  },
  {
    n: "05",
    rail: "Speed",
    headline: "The thing I came in worried about turned out to be the easy part.",
    body: "Speed was my original diagnosis and it was real — five to eight seconds before the old site was useful, and Google treated it accordingly. But it was the one problem with a known answer. Moving to Next.js and generating pages ahead of time fixed desktop load and made every programme page something a crawler could actually read. Mobile is still heavier than I want. The hero imagery ships larger than it needs to and the throttled mobile run is nowhere near the desktop number. That is the next job, not a finished one.",
    tradeoff:
      "Generating ahead of time means a rebuild on every content change. A build minute, in exchange for a site that gets indexed.",
    figures: [
      {
        caption:
          "The Lighthouse run. Desktop largest contentful paint at 1.9s, against five to eight seconds before. The throttled mobile run is 5.6s, and that number is on the list.",
        img: performance,
        alt: "Lighthouse performance report for the rebuilt site.",
      },
    ],
  },
];

const TOOLS: Figure[] = [
  {
    caption: "XIA Intelligence — the assessment suite behind the route finder.",
    img: xiaSuite,
    alt: "XIA Intelligence suite.",
  },
  {
    caption: "Programme Explorer — compare programmes side by side.",
    img: programmeExplorer,
    alt: "Programme Explorer.",
  },
  {
    caption: "Passport Power — visa-free access, checked in seconds.",
    img: passportPower,
    alt: "Passport Power index tool.",
  },
  {
    caption:
      "The assistant — handles the routine questions before an advisor is needed.",
    img: chatbot,
    alt: "The XIA assistant open with its menu.",
  },
];

const REFLECTION: [string, string][] = [
  [
    "What I got wrong",
    "I walked in with a diagnosis. Slow site, old code, too many hand-made pages — and I was right about all three, which is exactly what made it dangerous. If I had started designing on day one I would have built a fast version of the same confusing site, shipped it, and wondered why the leads did not move. The IA problem was invisible from where I sat. It took five people telling me different versions of the same thing before I saw it.",
  ],
  [
    "What isn't finished",
    "Mobile performance. Desktop is where I wanted it; the throttled mobile run is not, and it is mostly hero imagery shipping larger than it needs to. It is on the list, and I would rather write it here than have someone find it themselves.",
  ],
  [
    "What I'd do differently",
    "Test the pillar labels before building on them. “Corporate” reads as “corporate tax” to some people, so a few of the visitors that section exists for skipped straight past it. One afternoon of showing five people four words would have caught it. Renaming after launch costs more than it should.",
  ],
  [
    "What it taught me",
    "Talk to the people who use the thing every day before you trust your own diagnosis, even when — especially when — you are one of them. And designing and building both gives you judgment in real time that a handoff cannot: a layout that breaks on a real device gets fixed in the same sitting instead of becoming a ticket.",
  ],
];

/* Local to this page. An imported image carries its own width and height, so
   it renders at its own ratio and needs no box drawn around it. */
function Plate({ caption, img, alt, aspect = "aspect-[16/9]" }: Figure) {
  return (
    <figure className="mt-8">
      {img ? (
        <Image
          src={img}
          alt={alt ?? caption}
          sizes="(max-width: 768px) 100vw, 1100px"
          className="h-auto w-full border border-hairline"
        />
      ) : (
        <div
          className={`flex ${aspect} w-full items-center justify-center border border-hairline bg-raised`}
        >
          <p className="label">Image to come</p>
        </div>
      )}
      <figcaption className="label mt-3 max-w-[60ch] leading-[1.6]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function XiphiasCaseStudy() {
  return (
    <>
      {/* ---- Summary ------------------------------------------------------ */}
      <section
        data-section="Summary"
        aria-labelledby="case-heading"
        className="mx-auto max-w-[1180px] px-5 pb-14 pt-10 md:px-10 md:pt-14"
      >
        <p>
          <Link
            href="/work"
            className="data link inline-flex min-h-11 items-center text-muted"
          >
            &larr; Work
          </Link>
        </p>

        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
          <span className="label text-ink">Case study</span>
          <span className="label">XIPHIAS Immigration</span>
        </div>

        <h1 className="font-display mt-8 max-w-[22ch] text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
          I thought it was a speed problem. It was a structure problem.
        </h1>

        <p className="prose-body mt-5 max-w-[54ch] text-[clamp(0.95rem,1.4vw,1.125rem)]">
          I work at XIPHIAS. The MD asked me to rebuild our 17-year-old website
          and I already had a diagnosis ready, because I had been using the
          thing for years. Five conversations later I put that diagnosis
          second. Designed and coded solo in three months.
        </p>

        <div className="mt-9 grid gap-x-8 gap-y-9 md:grid-cols-2">
          {[
            {
              state: "Before",
              img: beforeOldSite,
              alt: "The previous XIPHIAS website, captured by the Internet Archive.",
              caption:
                "Static pages, a menu of service categories, and a contact form before we had told you anything.",
            },
            {
              state: "After",
              img: homepageHero,
              alt: "XIPHIAS homepage with the Guided Route Finder and report preview.",
              caption:
                "Four intents, and an answer offered before anything is asked for.",
            },
          ].map((side) => (
            <figure key={side.state}>
              <p className="label border-b border-hairline pb-2 text-ink">
                {side.state}
              </p>
              <Image
                src={side.img}
                alt={side.alt}
                sizes="(max-width: 768px) 100vw, 550px"
                className="mt-4 h-auto w-full border border-hairline"
              />
              <figcaption className="label mt-3 leading-[1.6]">
                {side.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {IMPACT.map((item) => (
            <div key={item.label} className="bg-raised px-5 py-6">
              <dt className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1] tracking-[-0.02em] text-ink [font-variant-numeric:tabular-nums]">
                {item.value}
              </dt>
              <dd className="data mt-3 text-accent">{item.label}</dd>
            </div>
          ))}
        </dl>

        <dl className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {META.map(([term, value]) => (
            <div key={term} className="bg-paper px-4 py-4">
              <dt className="label">{term}</dt>
              <dd className="mt-1.5 text-[13px] leading-[1.5] text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex min-h-11 items-center gap-2 text-[15px] text-ink"
          >
            xiphiasimmigration.com
            <Icon name="external" className="h-3.5 w-3.5 shrink-0" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </p>
      </section>

      {/* ---- What I already knew ------------------------------------------ */}
      <section
        data-section="What I knew"
        aria-labelledby="knew-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="knew-heading" className="label text-ink">
              What I already knew
            </h2>
            <span className="label">Before anyone briefed me</span>
          </div>

          <p className="prose-body mt-6">
            I am not a consultant who arrived with a brief. I work here, I had
            four years in this domain, and I had been using this website to do
            my own job. So I walked into the first meeting with a list already
            written.
          </p>

          <ul className="mt-8">
            {WHAT_I_KNEW.map((item) => (
              <li
                key={item}
                className="border-b border-hairline py-4 text-[clamp(0.95rem,1.6vw,1.125rem)] leading-[1.5] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="font-display mt-10 max-w-[32ch] text-[clamp(1.25rem,2.4vw,1.75rem)] font-light leading-[1.2] tracking-[-0.01em] text-ink">
            Every one of those was true. Not one of them was the reason we were
            losing people.
          </p>

          <p className="prose-body mt-5">
            Which is why I did not open Figma. I was confident, and the fastest
            way to waste three months is to be confident about the wrong
            problem — I would have shipped a fast version of the same confusing
            site and then wondered why the leads did not move. So I spent the
            first stage talking to people instead: the MD, the SEO team, the
            content team, internal sales and processing, and clients who came
            into the office. Five conversations, notes on all of them, and then
            the competition.
          </p>

          <Plate
            caption="Everyone I spoke to, grouped by what they actually said, narrowed down to one problem statement and the ideas that came out of it."
            img={researchBoard}
            alt="Research board: interviews, affinity map, persona, problem statement and idea sketches."
          />
        </div>
      </section>

      {/* ---- The conversations -------------------------------------------- */}
      <section
        data-section="Five conversations"
        aria-labelledby="conversations-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 pb-2 pt-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="conversations-heading" className="label text-ink">
              Five conversations
            </h2>
            <span className="label">
              What they said &middot; what it changed
            </span>
          </div>
        </div>
      </section>

      {CONVERSATIONS.map((conversation) => (
        <section
          key={conversation.id}
          id={conversation.id}
          data-section={conversation.rail}
          aria-labelledby={`${conversation.id}-heading`}
          className="scroll-mt-8 border-t border-hairline"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-[16rem_1fr]">
              {/* Who, and why them */}
              <div>
                <h3
                  id={`${conversation.id}-heading`}
                  className="font-display text-[clamp(1.25rem,2.2vw,1.6rem)] font-light leading-[1.2] tracking-[-0.01em] text-ink"
                >
                  {conversation.who}
                </h3>
                <p className="prose-body mt-3 text-[14px]">
                  {conversation.why}
                </p>
                <p className="label mt-6">I asked</p>
                <p className="prose-body mt-2 text-[14px] text-ink">
                  {conversation.asked}
                </p>
              </div>

              {/* What they said, and what it changed */}
              <div>
                <p className="label">They said</p>
                <ul className="mt-3">
                  {conversation.said.map((quote) => (
                    <li
                      key={quote}
                      className="font-display border-b border-hairline py-4 text-[clamp(1.05rem,1.9vw,1.35rem)] font-light leading-[1.35] text-ink"
                    >
                      &ldquo;{quote}&rdquo;
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid max-w-[46rem] gap-x-8 md:grid-cols-[8rem_1fr]">
                  <span className="label mb-2 md:mb-0 md:pt-1">
                    {conversation.newToMe ? "New to me" : "Confirmed it"}
                  </span>
                  <p className="prose-body">{conversation.changed}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ---- The pattern --------------------------------------------------- */}
      <section
        data-section="The pattern"
        aria-labelledby="pattern-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
          <h2 id="pattern-heading" className="label text-ink">
            The pattern
          </h2>

          <p className="prose-body mt-6">{COMPETITORS}</p>

          <p className="font-display mt-10 max-w-[36ch] text-[clamp(1.35rem,2.8vw,2.1rem)] font-light leading-[1.16] tracking-[-0.015em] text-ink">
            Five people described five different problems. Underneath all of
            them was the same one: you could not find your way to the thing you
            wanted, and neither could we.
          </p>

          <p className="prose-body mt-6">
            Sales searched brochures because the site was faster to give up on
            than to use. The content team was blocked because there was no
            structure to slot a new programme into. SEO could not fix pages
            that had no logic connecting them. Clients could not self-serve
            because there was nothing to self-serve with. And the reason
            organic traffic was flat was not only that the site was slow — it
            was that there was nothing coherent for a crawler to read.
          </p>

          <p className="prose-body mt-4">
            Speed stayed on the list. It moved from first to fifth.
          </p>
        </div>
      </section>

      {/* ---- What each team got -------------------------------------------- */}
      <section
        data-section="What each team got"
        aria-labelledby="delivered-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="delivered-heading" className="label text-ink">
              What each team got
            </h2>
            <span className="label">Complaint &rarr; thing built</span>
          </div>

          <p className="prose-body mt-6">
            I kept this list on the wall for three months. If something I was
            building did not answer a line in the middle column, it did not get
            built.
          </p>

          <table className="mt-10 w-full border-collapse text-left">
            <caption className="sr-only">
              Each team&rsquo;s complaint and the thing built in response.
            </caption>
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className="label py-3 pr-4 font-normal">
                  Who
                </th>
                <th scope="col" className="label py-3 pr-4 font-normal">
                  What they said was wrong
                </th>
                <th scope="col" className="label py-3 font-normal">
                  What I built
                </th>
              </tr>
            </thead>
            <tbody>
              {DELIVERED.map((row) => (
                <tr
                  key={row.from}
                  className="border-b border-hairline align-top"
                >
                  <td className="data py-5 pr-4 text-muted">{row.from}</td>
                  <td className="py-5 pr-4 text-[14px] leading-[1.55] text-ink">
                    {row.complaint}
                  </td>
                  <td className="prose-body py-5 text-[14px]">{row.built}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- The build ------------------------------------------------------ */}
      {BUILDS.map((build) => (
        <section
          key={build.n}
          id={`b-${build.n}`}
          data-section={build.rail}
          aria-labelledby={`build-${build.n}`}
          className="scroll-mt-8 border-t border-ink"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
              <span className="label text-ink">Built {build.n}</span>
              <span className="label">{build.rail}</span>
            </div>

            <h2
              id={`build-${build.n}`}
              className="font-display mt-8 max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.35rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink"
            >
              {build.headline}
            </h2>

            <p className="prose-body mt-5">{build.body}</p>

            <p className="mt-6 grid max-w-[46rem] gap-x-8 border-t border-hairline pt-5 md:grid-cols-[7rem_1fr]">
              <span className="label mb-2 md:mb-0 md:pt-1">Trade-off</span>
              <span className="prose-body">{build.tradeoff}</span>
            </p>

            {build.figures.map((figure) => (
              <Plate key={figure.caption} {...figure} />
            ))}
          </div>
        </section>
      ))}

      {/* ---- The tools ------------------------------------------------------ */}
      <section
        data-section="The tools"
        aria-labelledby="tools-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="tools-heading" className="label text-ink">
              The tools
            </h2>
            <span className="label">
              So someone can get an answer without us
            </span>
          </div>

          <div className="grid gap-x-8 md:grid-cols-2">
            {TOOLS.map((tool) => (
              <Plate key={tool.caption} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Looking back --------------------------------------------------- */}
      <section
        data-section="Looking back"
        aria-labelledby="reflection-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
          <h2 id="reflection-heading" className="label text-ink">
            Looking back
          </h2>

          <dl className="mt-8 max-w-[46rem]">
            {REFLECTION.map(([term, body]) => (
              <div
                key={term}
                className="grid gap-x-8 border-t border-hairline py-6 md:grid-cols-[11rem_1fr]"
              >
                <dt className="label mb-2 md:mb-0 md:pt-1">{term}</dt>
                <dd className="prose-body">{body}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 flex flex-wrap gap-x-8">
            <Link
              href="/work"
              className="data link inline-flex min-h-11 items-center text-ink"
            >
              Back to the work &rarr;
            </Link>
            <Link
              href="/process"
              className="data link inline-flex min-h-11 items-center text-muted"
            >
              How I work &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
