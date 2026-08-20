import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import brief from "@/public/images/returneasy/brief.png";
import assumptions from "@/public/images/returneasy/assumptions.png";
import research from "@/public/images/returneasy/research.png";
import definition from "@/public/images/returneasy/definition.png";
import flows from "@/public/images/returneasy/flows.png";
import concepts from "@/public/images/returneasy/concepts.png";
import wireframes from "@/public/images/returneasy/wireframes.png";
import finalUi from "@/public/images/returneasy/final-ui.png";

/* ---------------------------------------------------------------------------
   RETURNEASY — case study

   A self-directed concept that started as a real problem I had: I ordered a lot
   in a short window, meant to return several things, and missed a deadline
   because nothing reminded me. The page is written in that voice — first
   person, plain, honest about what is designed and what is still a claim.

   Same buff-and-ink system as the rest of the site; imported images, so every
   figure renders at its own ratio once a Figma frame is dropped in. Until then
   each figure shows the ruled placeholder and its caption.

   No mulberry on this page. Mulberry marks a live statement of fact, and this
   is a concept, not a shipped thing.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "ReturnEasy — Dhanush",
  description:
    "A self-directed mobile concept for online returns, started from a real problem: I forgot returns and missed a deadline because no shopping app reminds you — because they profit when you forget. Designed end to end, checked against colleagues and friends.",
};

const FIGMA_URL =
  "https://www.figma.com/design/J0BsAc5femr51X6YxVFN56/ReturnEasy-%E2%80%94-Product-Design-Case-Study";

const META: [string, string][] = [
  ["Role", "Product designer (solo)"],
  ["Timeline", "8-week self-directed project"],
  ["Scope", "Mobile MVP · one core flow"],
  ["Status", "Designed · checked with real users"],
];

/* The origin. Told plainly, because the plain version is the convincing one. */
const ORIGIN =
  "This started as my own problem. Over a few weeks I ordered more than thirty things online for the house — across Amazon, Flipkart and Myntra — and they arrived in a trickle, not together. I opened them as they came, decided some had to go back, and told myself I would do the returns later. A few I did. A few I was sure I had done and had not. Then I sat down one day to finish the rest, and one return window had already closed. That is when the question landed: I use these apps every day, so why does not one of them just remind me a return is due?";

/* The insight that turns a personal annoyance into a product. */
const WHY_ABSENT =
  "Then I saw why the feature does not exist. A return costs the retailer money — the sale reverses. So no shopping app is ever going to put a bright “your return is due tomorrow” reminder in front of you. They are not incentivised to. That absence is not an oversight; it is a business decision. Which means the only thing that can solve this well is something that does not belong to any one retailer — a neutral place that sits on top of all of them and answers to the shopper, not the seller.";

/* Straight from the assumptions board. Not tidied. */
const ASSUMPTIONS: string[] = [
  "People forget the return deadline",
  "Return instructions are hard to find again once the email is buried",
  "Nobody knows where their refund is once the item is sent back",
  "It is all scattered across email and separate retailer apps",
  "People will type an order in by hand — the one the whole MVP rests on",
];

const RISKIEST =
  "If people will not add an order by hand, the MVP has no data and every other screen is decoration. Version one has no retailer integration, so this one belief holds up the whole product. It is the first thing I checked, and the first thing I would keep checking.";

type Figure = {
  caption: string;
  img?: StaticImageData;
  alt?: string;
  aspect?: string;
};

type Decision = {
  n: string;
  rail: string;
  headline: string;
  body: string;
  tradeoff: string;
  figures: Figure[];
};

const DECISIONS: Decision[] = [
  {
    n: "01",
    rail: "The problem",
    headline:
      "To manage one return, you are made to hold five different places in your head.",
    body: "A single return can mean the retailer app, the confirmation email, the courier site, a return-policy page, and then a refund that may or may not turn up. Nothing holds the whole thing in one place, so you end up carrying the deadline, the steps and the refund status yourself — which is exactly how I missed one. ReturnEasy is meant to be the one place that already holds every active return: the deadline, the steps, and where the money is, so none of it has to be reassembled each time.",
    tradeoff:
      "Framing it as a job rather than a feature list keeps it honest about where the product ends — not when the parcel is posted, but when the money actually lands.",
    figures: [
      {
        caption:
          "The project brief and the first cut of the problem, written before I designed anything.",
        img: brief,
        alt: "The ReturnEasy project brief frame.",
      },
    ],
  },
  {
    n: "02",
    rail: "Checking it wasn't just me",
    headline: "First I made sure this was a real problem, not just my bad week.",
    body: "It would have been easy to build a whole app around one annoyance of my own. So before I trusted the idea, I wrote down everything I believed as an assumption — thirteen of them — and then I actually asked people. A mix: a few proper sit-down interviews, and informal conversations with colleagues and friends about their own online shopping. The same story kept coming back — missed windows, refunds they never chased, no idea what they had and hadn't returned. It was not just me. That is what moved “people forget returns” from my assumption to something I had heard from other people too.",
    tradeoff:
      "This was light-touch research, not a formal study — a handful of interviews and honest chats, enough to know the problem is real and shared. It is not enough to claim the solution is validated. Those are two different things and I am not going to blur them.",
    figures: [
      {
        caption:
          "The assumptions map and the importance × uncertainty matrix — the riskiest belief pulled out to lead the questions.",
        img: assumptions,
        alt: "The ReturnEasy assumptions map and prioritisation matrix.",
      },
      {
        caption:
          "The research plan and interview guide: every question tied to a specific assumption, and the leading questions I made a point of not asking.",
        img: research,
        alt: "The ReturnEasy research plan and interview guide frames.",
      },
    ],
  },
  {
    n: "03",
    rail: "Scope",
    headline: "Deciding what to leave out was the design decision worth showing.",
    body: "The core flow is one primary user, one mobile app, roughly six to eight screens. Login and accounts, retailer integrations, multi-item returns and a support chat were all cut — each for a reason I can name. Auth teaches nobody anything about how I think. Multi-item can wait. And a returns app that needs a chat window has already failed at its own job. Retailer integration is the interesting cut: it is the most valuable feature and the one I have the least power over, because it is an API-and-partnership problem, not an interface problem — more on that below.",
    tradeoff:
      "Cutting retailer integration means version one runs on manual order entry — which is exactly the assumption I flagged as riskiest. The scope decision and the research risk are the same decision.",
    figures: [
      {
        caption:
          "Product definition — the job to be done, a Must / Should / Later split, and every deliberate cut with its reason attached.",
        img: definition,
        alt: "The ReturnEasy product definition frame.",
      },
    ],
  },
  {
    n: "04",
    rail: "The whole journey",
    headline:
      "Mapping the return end to end surfaced the two stages nobody designs for.",
    body: "Drawing the full journey — from deciding to return, through the handover, to the refund landing — is what exposed the two stages that get ignored: sending the item, and then the wait for the money. Those are the moments you feel most anxious and have the least support, and they sit outside the part of the flow most apps bother with. The primary flow is nine steps, and four of them carry a decision that can send you somewhere else: no matching order, past the deadline, item not returnable, refund late. I drew those branches explicitly, because failure cases are where returns actually break down — they are the whole reason I missed mine.",
    tradeoff:
      "This journey is still a hypothesis. The stages I expect to have got most wrong are the two I have the least direct experience of — which is exactly why they need more real conversations, not fewer.",
    figures: [
      {
        caption:
          "The experience journey and the primary flow, with the branches and failure cases drawn below the happy path rather than left implied.",
        img: flows,
        alt: "The ReturnEasy experience journey and primary user flow frames.",
      },
    ],
  },
  {
    n: "05",
    rail: "Home screen",
    headline: "Three ways the home screen could work — and why I picked the dull one.",
    body: "I drew the home screen three ways in grayscale, because the question was what it is for, not what it looks like, and colour would only make the wrong one look convincing. Action-first is fastest at starting a return — something you do a few times a year. Dashboard-first is best at showing deadlines and refund status — the thing you check a few times a week. Starting a return is the rare event; checking whether the money arrived is not. So the home screen belongs to status and deadlines, and the add-return action can sit at the bottom. The timeline concept was the prettiest and the least defensible: it renders one return beautifully and three returns unusably.",
    tradeoff:
      "Choosing the dashboard costs a little speed on the rare task to win clarity on the frequent one. Optimising for the impressive-looking case is how you end up with the timeline.",
    figures: [
      {
        caption:
          "The three home-screen concepts, scored against deadline visibility, refund visibility, speed to start, how they scale, and cognitive load — with the decision written out.",
        img: concepts,
        alt: "The three ReturnEasy home-screen concepts and comparison table.",
      },
      {
        caption:
          "Twelve low-fidelity screens, including the states that rarely make a portfolio: the empty home, the past deadline, the order that cannot be found. Body copy is drawn as bars on purpose — real sentences make a bad layout look convincing.",
        img: wireframes,
        alt: "The twelve ReturnEasy low-fidelity wireframes.",
      },
    ],
  },
  {
    n: "06",
    rail: "The screens",
    headline: "Eight final screens, each one carrying a decision from the journey.",
    body: "The final UI is the flow made concrete: on the home screen the deadline is the loudest thing on the card, not the product name. On the reason screen, the postage cost sits on each option before the choice is made, not after submitting. On the method screen, distance and opening hours are on the option itself, because effort is part of the price. The QR code stays retrievable forever rather than arriving as a one-time email that gets lost — the exact thing that tripped me up. And the tracker splits the parcel journey from the money journey, because you do not think of those as one thing when you are waiting on a refund.",
    tradeoff:
      "This is where a concept is most tempting to over-polish. Every one of these screens is still a claim that needs more real users than I have spoken to — a confident-looking screen is not a validated one.",
    figures: [
      {
        caption:
          "The eight final screens — home, find order, select item, reason, method, review, instructions and QR, refund tracker — each captioned with the decision it carries.",
        img: finalUi,
        alt: "The eight final ReturnEasy UI screens.",
      },
    ],
  },
];

/* The two questions a designer usually skips, answered honestly. Kept as prose
   pairs rather than decisions, because they are reasoning, not screens. */
const BUILD: [string, string][] = [
  [
    "Can this even be built?",
    "Not the clean way. Amazon, Flipkart and Myntra all have APIs — but for sellers and logistics partners, people who help them sell. Returns cost them money, so none of them will hand a third-party reminder app access to your orders. That is a business wall, not a coding one, and no amount of engineering gets through it.",
  ],
  [
    "So how would it actually work?",
    "Through the user's own data, never the retailer's. Manual entry — you type the order in — is the version fully in my control, and it is exactly why “will people bother” is the riskiest assumption. The smarter route is reading the user's own inbox: every order sends a confirmation email, so with the user's permission the app can parse those and fill the list automatically, no retailer cooperation required. That one technical choice changes the design — the first screen stops being “add an order” and becomes “connect your email.”",
  ],
  [
    "Where is my value in it, then?",
    "Not in getting Amazon to cooperate — they never will. It is in spotting a real problem no retailer is incentivised to fix, and designing the neutral layer that sits on top of all of them and answers to the shopper. The retailers cannot build this honestly. That is the whole reason it has room to exist.",
  ],
];

const MONEY: [string, string][] = [
  [
    "Could this make money?",
    "Not by charging for the return. The return is already free — charge a rupee to remind someone to do a free thing and they will set a phone alarm instead. So the money cannot come from the core action. Ads do not fit either: the app is low-frequency, opened a few times a month around a return, and ads need daily eyeballs.",
  ],
  [
    "The one model that fits",
    "When you return something, you very often buy a replacement — and that is the moment the app is uniquely useful. If it can show “here is a similar one” and you buy through it, the retailer pays a commission on the sale. The retailer will not pay me to help returns, but they will happily pay to drive a sale. That is the only revenue model that matches when the app is actually open.",
  ],
  [
    "And the honest bigger idea",
    "“Returns reminder” is a feature, not a business — it is too infrequent to stand alone. The thing underneath it — one place that holds everything you have bought online — is bigger: warranty tracking, price-drop alerts, spending insight, delivery tracking. Returns is the hook that gets people in, not the whole product. I would not pretend otherwise in a pitch.",
  ],
];

const REFLECTION: [string, string][] = [
  [
    "What's solid",
    "The problem. I lived it, and when I checked with colleagues and friends it was clearly not just me — missed windows and lost refunds came up again and again. The problem is real and shared; I am confident of that much.",
  ],
  [
    "What still needs testing",
    "The solution. A handful of interviews and honest chats tell me the pain is real. They do not yet tell me these specific screens fix it, or that people will do the manual entry the MVP depends on. That is the next round of work, and I would rather name it than dress the concept up as finished.",
  ],
  [
    "Why build it this way",
    "Designing the whole thing before deep research is not skipping research — it is giving the research something concrete to disagree with. A real, wrong-in-places product produces sharper conversations than an open-ended chat about returns ever would. And starting from a problem I actually had kept every decision anchored to something real rather than something clever.",
  ],
];

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
          <p className="label">Figma frame to come</p>
        </div>
      )}
      <figcaption className="label mt-3 max-w-[60ch] leading-[1.6]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function ReturnEasyCaseStudy() {
  return (
    <>
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
          <span className="label">ReturnEasy · concept</span>
        </div>

        <h1
          id="case-heading"
          className="font-display mt-8 max-w-[24ch] text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink"
        >
          I missed a return deadline. So I designed the app that would have
          reminded me.
        </h1>

        <p className="prose-body mt-5 max-w-[52ch] text-[clamp(0.95rem,1.4vw,1.125rem)]">
          A self-directed mobile concept for online returns — deadlines,
          instructions and refund status in one place. Started from my own
          problem, then checked against other people&apos;s.
        </p>

        {/* The origin story, up top, because it is the most convincing thing
            here. This is the frame the whole case study sits inside. */}
        <div className="mt-9 border border-ink bg-raised px-5 py-5">
          <p className="label text-ink">How this started</p>
          <p className="prose-body mt-3 max-w-[64ch]">{ORIGIN}</p>
          <p className="prose-body mt-4 max-w-[64ch]">{WHY_ABSENT}</p>
        </div>

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
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex min-h-11 items-center gap-2 text-[15px] text-ink"
          >
            Open the Figma file &rarr;
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </p>
      </section>

      <section
        data-section="What I tested"
        aria-labelledby="assumptions-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="assumptions-heading" className="label text-ink">
              What I wrote down to test
            </h2>
            <span className="label">Assumptions · then checked with people</span>
          </div>

          <ul className="mt-2">
            {ASSUMPTIONS.map((item) => (
              <li
                key={item}
                className="border-b border-hairline py-4 text-[clamp(0.95rem,1.6vw,1.125rem)] leading-[1.5] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="font-display mt-10 max-w-[44ch] text-[clamp(1.25rem,2.4vw,1.75rem)] font-light leading-[1.2] tracking-[-0.01em] text-ink">
            {RISKIEST}
          </p>
          <p className="label mt-3">
            The one belief the whole MVP rests on. It led the questions
          </p>
        </div>
      </section>

      {DECISIONS.map((decision) => (
        <section
          key={decision.n}
          id={`d-${decision.n}`}
          data-section={decision.rail}
          aria-labelledby={`decision-${decision.n}`}
          className="scroll-mt-8 border-t border-ink"
        >
          <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
              <span className="label text-ink">Decision {decision.n}</span>
              <span className="label">{decision.rail}</span>
            </div>

            <h2
              id={`decision-${decision.n}`}
              className="font-display mt-8 max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.35rem)] font-light leading-[1.14] tracking-[-0.015em] text-ink"
            >
              {decision.headline}
            </h2>

            <p className="prose-body mt-5">{decision.body}</p>

            <p className="mt-6 grid max-w-[46rem] gap-x-8 border-t border-hairline pt-5 md:grid-cols-[7rem_1fr]">
              <span className="label mb-2 md:mb-0 md:pt-1">Trade-off</span>
              <span className="prose-body">{decision.tradeoff}</span>
            </p>

            {decision.figures.map((figure) => (
              <Plate key={figure.caption} {...figure} />
            ))}
          </div>
        </section>
      ))}

      <section
        data-section="Could it be built"
        aria-labelledby="build-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="build-heading" className="label text-ink">
              Could it actually be built
            </h2>
            <span className="label">The part designers usually skip</span>
          </div>

          <dl className="mt-4 max-w-[52rem]">
            {BUILD.map(([term, body]) => (
              <div
                key={term}
                className="grid gap-x-8 border-t border-hairline py-6 md:grid-cols-[13rem_1fr]"
              >
                <dt className="label mb-2 md:mb-0 md:pt-1">{term}</dt>
                <dd className="prose-body">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        data-section="Could it make money"
        aria-labelledby="money-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-12 md:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-hairline pb-4">
            <h2 id="money-heading" className="label text-ink">
              Could it make money
            </h2>
            <span className="label">Why you can&apos;t charge for a free return</span>
          </div>

          <dl className="mt-4 max-w-[52rem]">
            {MONEY.map(([term, body]) => (
              <div
                key={term}
                className="grid gap-x-8 border-t border-hairline py-6 md:grid-cols-[13rem_1fr]"
              >
                <dt className="label mb-2 md:mb-0 md:pt-1">{term}</dt>
                <dd className="prose-body">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        data-section="Looking back"
        aria-labelledby="reflection-heading"
        className="border-t border-ink"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
          <h2 id="reflection-heading" className="label text-ink">
            Where it stands
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
