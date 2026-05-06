export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  pitch: string;
  role: string;
  duration: string;
  team: string;
  stack: string[];
  year: string;
  tags: string[];
  gradient: string;
  liveUrl?: string;
  prototypeUrl?: string;
  repoUrl?: string;
  caseStudy: CaseStudy;
}

export interface Persona {
  name: string;
  type: string;
  age: string;
  location: string;
  role: string;
  goals: string[];
  frustrations: string[];
  quote: string;
}

export interface ColorToken {
  name: string;
  hex: string;
  usage: string;
}

export interface TypographyItem {
  family: string;
  weights: string;
  usage: string;
}

export interface CaseStudy {
  badge: string;
  heroImage?: string;
  brief: string;
  pullQuote: string;
  goals: string[];
  personas?: Persona[];
  colorPalette?: ColorToken[];
  typography?: TypographyItem[];
  research: ResearchSection;
  keyDecisions: KeyDecision[];
  screens?: CaseStudyScreen[];
  beforeAfter?: CaseStudyBeforeAfter;
  flow?: CaseStudyFlow;
  metrics: Metric[];
  impact: ImpactItem[];
  reflection: Reflection;
}

export type CaseStudyScreenAspect = "wide" | "desktop" | "mobile";

export interface CaseStudyScreen {
  title: string;
  image?: string;
  caption: string;
  decision?: string;
  alt?: string;
  aspect?: CaseStudyScreenAspect;
}

export interface CaseStudyBeforeAfter {
  before?: string;
  after?: string;
  caption: string;
}

export interface CaseStudyFlow {
  title: string;
  image?: string;
  caption: string;
}

export interface ResearchSection {
  intro: string;
  paragraphs: string[];
  insights: string[];
}

export interface KeyDecision {
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
}

export interface ImpactItem {
  value: string;
  label: string;
  description: string;
}

export interface Reflection {
  proud: string;
  different: string;
  learned: string;
}

export const projects: Project[] = [
  {
    id: "xiphias-immigration",
    slug: "xiphias-immigration",
    number: "01",
    title: "XIPHIAS Immigration",
    description:
      "Global immigration platform redesign. Lead Product Designer + Front-End Dev. 63 pages, 30+ programs, shipped solo in 3 months.",
    pitch:
      "Rebuilding xiphiasimmigration.com from the ground up — information architecture, visual identity, and production Next.js code — for a 17-year-old firm competing with Henley & Partners.",
    role: "Lead Product Designer + Front-End Dev",
    duration: "3 months",
    team: "Solo",
    stack: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    tags: ["Next.js", "TypeScript", "Tailwind", "Figma", "Design Systems"],
    gradient: "from-indigo-900 via-violet-900 to-purple-900",
    liveUrl: "https://www.xiphiasimmigration.com/",
    caseStudy: {
      badge: "CASE STUDY 01 / 2025",
      heroImage: "/case-studies/xiphias/screen-1.jpg",
      brief:
        "XIPHIAS is a 17-year-old immigration advisory firm — offices in Bengaluru, Dubai, Doha, Melbourne, and Waterloo. 10,000+ clients. 92% success rate. Forbes India's 'India's Most Trusted Global Mobility Brand' 2025. Their existing site was built on dated HTML/CSS: slow, flat navigation, no credential signals, and failing to convert the HNI clientele they were pursuing. The brief was to compete with Henley & Partners and Y-Axis — global advisory firms with premium digital presence.",
      pullQuote:
        "\"Design the site so that a CXO landing from Google feels they've arrived at the right place — not a local immigration agent, but a global advisory firm.\"",
      goals: [
        "60% increase in qualified lead form completions",
        "Reduce inbound support calls through better self-service information architecture",
        "Establish a premium, globally credible visual identity that matches Forbes-recognised positioning",
        "Structure 25+ countries × 30+ programs into a navigable, intent-led IA",
        "Ship in production — not just Figma — within 3 months",
      ],

      personas: [
        {
          name: "Arjun Mehta",
          type: "HNI Business Owner",
          age: "47",
          location: "Mumbai, India",
          role: "Founder, mid-cap manufacturing company",
          goals: [
            "Obtain residency in Greece or Portugal for family lifestyle flexibility",
            "Understand investment thresholds and tax implications before engaging",
            "Find an advisor with documented track record — not a broker",
          ],
          frustrations: [
            "Immigration sites bury eligibility criteria in walls of text",
            "Can't distinguish boutique advisors from mass-market agents online",
            "Consultation calls feel sales-first, not advisory-first",
          ],
          quote:
            "\"I don't need a list of 40 countries. I need someone who understands my situation and tells me which three options actually apply to me.\"",
        },
        {
          name: "Kavitha Reddy",
          type: "Senior IT Professional",
          age: "34",
          location: "Bengaluru, India",
          role: "Engineering Manager, MNC",
          goals: [
            "Research Canada or Germany skilled migration pathways for a 2026 move",
            "Understand points-based system eligibility before committing to a consultation",
            "Self-serve as much as possible before speaking to an advisor",
          ],
          frustrations: [
            "Can't compare programs side-by-side without calling a sales rep",
            "Sites optimised for HNI investments — not skilled professionals",
            "Jargon-heavy content assumes prior immigration knowledge",
          ],
          quote:
            "\"I just want to know if I qualify. Give me the eligibility criteria and let me self-assess before I talk to anyone.\"",
        },
      ],

      colorPalette: [
        {
          name: "Royal Blue",
          hex: "#1A56DB",
          usage: "Primary brand — navigation, primary CTAs, hero overlays, interactive states",
        },
        {
          name: "Logo Gold",
          hex: "#F5A623",
          usage: "Brand accent — eagle logomark, secondary CTAs (Check Eligibility), highlights",
        },
        {
          name: "Surface White",
          hex: "#FFFFFF",
          usage: "Primary page background (light mode) — clean, global, professional",
        },
        {
          name: "Content Dark",
          hex: "#111827",
          usage: "Body copy and headings — maximum contrast on white, readable at all sizes",
        },
        {
          name: "Muted Grey",
          hex: "#6B7280",
          usage: "Secondary text — metadata, form labels, program descriptions, dates",
        },
        {
          name: "Dark Mode Surface",
          hex: "#0F172A",
          usage: "Dark mode background — premium advisory positioning for high-engagement pages",
        },
      ],

      typography: [
        {
          family: "Playfair Display",
          weights: "400, 700",
          usage: "Display headlines and section titles — editorial authority, serif gravitas matching luxury advisory brands",
        },
        {
          family: "Inter",
          weights: "400, 500, 600",
          usage: "Body copy, UI labels, navigation — maximum legibility at any size, neutral and international",
        },
        {
          family: "JetBrains Mono",
          weights: "400",
          usage: "Data labels, credential numbers, stats, dates — structured information with precision",
        },
      ],

      research: {
        intro:
          "I started with a competitive audit of 12 immigration advisory sites — from boutique UK firms to global giants like Henley & Partners and Fragomen. The pattern was unambiguous: premium players led with aspiration (lifestyle imagery, trust signals, advisor profiles) while commodity players led with country lists and prices.",
        paragraphs: [
          "Stakeholder interviews surfaced three distinct user intents: HNI individuals evaluating residency or citizenship by investment, business owners exploring corporate structuring and work permits, and skilled professionals researching points-based migration. Each intent had a different entry point, a different trust threshold, and a different content requirement.",
          "The existing site's navigation was a flat list of countries — users had to already know the program name to navigate. I reframed the IA around four pillars that mapped to intent: Residency Programs, Citizenship by Investment, Corporate Immigration, and Skilled Migration. Each pillar opened with a value proposition, not a country directory.",
          "Trust was the primary conversion signal — not price, not processing time. The old site had zero credential signals: no advisor profiles, no success rate, no press mentions, no accreditations. Every design decision going forward prioritised credibility before content.",
          "Analytics on the legacy site showed 62% of organic sessions on mobile — yet the mobile experience was unresponsive and had no persistent lead capture. The redesign had to be mobile-first, not mobile-compatible.",
        ],
        insights: [
          "HNI clients evaluate visual credibility before reading a single word — the site had to look premium before it could be trusted",
          "4-pillar IA (Residency / Citizenship / Corporate / Skilled) maps to user intent better than country-first navigation",
          "25+ countries × 30+ programs required a structured data model — not manual page creation for each",
          "62% mobile traffic on the legacy site — mobile-first design was a business requirement, not a best practice",
          "Trust signals (credentials, case counts, press logos, advisor profiles) outperform price and speed in conversion for HNI audiences",
        ],
      },

      keyDecisions: [
        {
          title: "4-Pillar Information Architecture",
          description:
            "Instead of country-first navigation, I restructured around user intent: Residency, Citizenship, Corporate, Skilled. Each pillar has a dedicated landing page with its own value proposition, credential proof, and program directory. This reduced the navigation depth for 80% of user journeys from 4+ clicks to 2.",
        },
        {
          title: "Dynamic Program Pages from JSON",
          description:
            "Built a structured data model for 30+ programs that generates individual pages from JSON config. The content team can add a new program by editing one file — no code deployment needed. This also enabled programmatic SEO: each program page has unique metadata, schema markup, and canonical URL.",
        },
        {
          title: "Trust-First Visual Hierarchy",
          description:
            "Every above-fold section leads with credential signals: 17+ years, 92% success rate, 10,000+ clients, accreditations (RCIC, MARA), press logos. Pricing and program specifics appear at second-fold. This mirrors how Henley & Partners positions — authority before detail.",
        },
        {
          title: "Next.js App Router for Sub-2s LCP",
          description:
            "Chose Next.js 15 App Router with React Server Components for static generation of all program and pillar pages. Result: sub-2s LCP on all key landing pages, down from 5–8s on the legacy site. Server rendering also enabled clean OG images and structured data for each page.",
        },
        {
          title: "Mobile-First Lead Capture",
          description:
            "Designed a persistent mobile enquiry flow — a floating CTA that stays accessible throughout long research sessions. On mobile, the multi-step enquiry form uses progressive disclosure: intent → program → contact. Completion rate 3× higher than the old single-page form.",
        },
      ],

      screens: [
        {
          title: "Homepage — live site",
          image: "/case-studies/xiphias/screen-1.jpg",
          alt: "Homepage hero — aspirational headline with embedded lead capture form",
          caption:
            "The homepage hero leads with aspiration and a persistent consultation form — the CXO landing from Google should feel they've arrived at a global advisory firm, not a local agent.",
          decision:
            "Led with lifestyle imagery and 'Residency & Citizenship Made Easy' before any program list — credibility signal first, content second.",
          aspect: "wide",
        },
        {
          title: "Residency by Investment — pillar page",
          image: "/case-studies/xiphias/screen-7.jpg",
          alt: "Residency by Investment pillar — country cards with due-diligence trust signals",
          caption:
            "The Residency pillar surfaces top programs with min-investment, timeline, and inclusion criteria — enough for self-qualification before a consultation call.",
          decision:
            "Structured all 20+ residency programs as data so the team can add new entries via config, no code deployment needed.",
          aspect: "wide",
        },
        {
          title: "Citizenship programs — pillar page",
          image: "/case-studies/xiphias/screen-8.jpg",
          alt: "Citizenship by Investment pillar — second citizenship advisory framing",
          caption:
            "Citizenship is positioned as 'first-class advisory' — benefit-led cards over price lists, matching how HNI clients evaluate second citizenship options.",
          decision:
            "Reframed from country directory to curated program advisory — aspirational positioning at every scroll depth.",
          aspect: "wide",
        },
        {
          title: "Free Eligibility Check — self-serve tool",
          image: "/case-studies/xiphias/screen-11.jpg",
          alt: "Free Eligibility Check interactive tool — 2–4 minute quiz with instant PDF result",
          caption:
            "An interactive 2–4 minute eligibility quiz with instant PDF result — converting research-mode visitors without requiring a consultation call.",
          decision:
            "Designed as a lead-to-consultation funnel: self-serve first, then advisor call with context already established.",
          aspect: "desktop",
        },
      ],

      flow: {
        title: "Four-pillar information architecture",
        caption:
          "Residency, Citizenship, Corporate Immigration, and Skilled Migration became the decision framework for navigation, landing pages, and lead routing.",
      },

      metrics: [
        { value: "30", label: "Organic traffic growth", suffix: "%" },
        { value: "63", label: "Pages built and shipped" },
        { value: "30", label: "Programs structured", suffix: "+" },
        { value: "3", label: "Months, kick-off to launch" },
      ],

      impact: [
        {
          value: "~30%",
          label: "Organic Traffic Growth",
          description: "Measured 90 days post-launch vs. prior period via GA4",
        },
        {
          value: "60%",
          label: "Lead Form Completions",
          description: "Target met within Q1 post-launch; mobile enquiry flow 3× old form",
        },
        {
          value: "<2s",
          label: "LCP on Key Pages",
          description: "Down from 5–8s on the legacy site via Next.js RSC + static gen",
        },
        {
          value: "4",
          label: "IA Pillars",
          description: "vs. 40+ flat unstructured pages on the original site",
        },
      ],

      reflection: {
        proud:
          "Shipping both the design AND the production code solo, on time, for a 17-year-old firm with a Forbes India award. The 4-pillar IA was a conceptual bet — it fundamentally changed how 10,000+ users navigated the site. The fact that the content team can now add programs without touching code is the part I'm proudest of: it's a system, not a website.",
        different:
          "I would have invested more time in IA testing before build — specifically tree testing with 10–15 real users to validate the pillar labels. I was confident in the logic, but qualitative validation would have caught one edge case I fixed post-launch: 'Corporate' was misread as 'corporate tax', not 'work permits'. A label test would have surfaced that in a day.",
        learned:
          "When you design AND build, you make judgment calls in real-time that a handoff model can't. A misaligned component? Fixed in 5 minutes. A layout that didn't survive a real device? Caught at 11pm and shipped by morning. That speed is a superpower — but it requires equal fluency in both crafts.",
      },
    },
  },
  {
    id: "resort-app",
    slug: "resort-app",
    number: "02",
    title: "Resort Booking & Property Management",
    description:
      "Full-stack product design for boutique resort. 63 pages, 46 data models, dual-theme design system.",
    pitch:
      "A production-grade Next.js application — public booking engine, guest accounts, full hotel management suite, and embedded support — designed and built solo.",
    role: "Solo Product Designer + Full-Stack Dev",
    duration: "~4 months (ongoing)",
    team: "Solo",
    stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "Tailwind"],
    year: "2025",
    tags: ["Next.js 15", "React 19", "Prisma", "Tailwind"],
    gradient: "from-cyan-900 via-teal-900 to-emerald-900",
    caseStudy: {
      badge: "CASE STUDY 02 / 2025",
      brief:
        "A boutique resort in Karnataka was losing 70% of their bookings to OTA platforms (Booking.com, MakeMyTrip) that charged 15–25% commission on every reservation. They were also running operations across 6 disconnected SaaS tools — no single source of truth for reservations, housekeeping, or guest communication.",
      pullQuote:
        "\"We want to own our guests. Not rent them from OTAs. And we want our operations in one place — not six browser tabs.\"",
      goals: [
        "Build a direct booking engine that eliminates OTA dependency",
        "Replace 6 SaaS tools with a single integrated property management suite",
        "Create a guest account system for repeat bookings and loyalty",
        "Build an embedded support system for in-stay communication",
        "Ship a dual-theme design system (guest-facing warmth + admin precision)",
      ],
      research: {
        intro:
          "The client ran a premium boutique property with 12 rooms and a restaurant. Their pain was operational: they were paying commissions AND managing data across disconnected tools. I started with a week of process shadowing — following the front desk team through a full check-in/check-out cycle.",
        paragraphs: [
          "The core insight: every operational bottleneck came from data not being where the staff expected it. Reservations in one tool, housekeeping in another, payments in a third. The mental overhead was creating errors and slowing down service.",
          "For the guest-facing side, I benchmarked against premium boutique hotel booking experiences — Aman, COMO, The Leela. The pattern: confident whitespace, warm photography, and friction-free date selection. The booking flow had to feel like a luxury experience, not a SaaS form.",
          "I mapped the full reservation lifecycle: from discovery to booking to check-in to stay to check-out to post-stay review. Every touchpoint needed a designed state.",
        ],
        insights: [
          "70% of bookings lost to OTAs — direct booking engine was the primary ROI driver",
          "6 disconnected SaaS tools causing operational errors and staff frustration",
          "Dual user base required a dual design system: warm guest experience + precise admin interface",
          "9-state reservation lifecycle required careful state machine design to prevent errors",
        ],
      },
      keyDecisions: [
        {
          title: "Three Apps, One Codebase",
          description:
            "Public booking engine, full admin suite, and embedded guest support — all in one Next.js monorepo with role-based routing. Eliminated integration overhead.",
        },
        {
          title: "9-State Reservation Lifecycle",
          description:
            "PENDING_APPROVAL → PENDING_PAYMENT → CONFIRMED → CHECKED_IN → CHECKED_OUT (plus REJECTED, EXPIRED, CANCELLED, NO_SHOW). Modeled as a strict state machine with allowed transitions.",
        },
        {
          title: "Three-Layer Design Token System",
          description:
            "Primitives (raw colors/spacing) → Semantic (meaning: 'surface-elevated', 'text-subtle') → Theme aliases (guest-warm, admin-precise). Enabled dual themes from a single component set.",
        },
        {
          title: "Prisma + PostgreSQL Data Model",
          description:
            "46 data models covering reservations, rooms, guests, staff, housekeeping, invoicing, and maintenance. Designed for referential integrity and audit trails.",
        },
      ],
      screens: [
        {
          title: "Guest booking engine",
          caption:
            "A calm, warm booking flow designed around date selection, room confidence, and direct booking conversion.",
          decision:
            "Separated the guest-facing system from the admin density so the brand could feel premium without slowing operations.",
          aspect: "wide",
        },
        {
          title: "Admin reservation board",
          caption:
            "A high-density operations view for reservations, payments, guest status, and staff handoffs.",
          decision:
            "Used a strict reservation lifecycle so the interface could prevent invalid state changes instead of merely warning after the fact.",
          aspect: "desktop",
        },
        {
          title: "Housekeeping state view",
          caption:
            "A staff-facing workflow for room readiness, maintenance flags, and front desk coordination.",
          decision:
            "Treated housekeeping as a first-class workflow after process shadowing showed it was the largest hidden bottleneck.",
          aspect: "desktop",
        },
      ],
      beforeAfter: {
        caption:
          "The before state is a set of disconnected OTA and SaaS workflows; the after state consolidates bookings, staff tasks, and guest communication.",
      },
      flow: {
        title: "Reservation lifecycle state map",
        caption:
          "Nine reservation states define what the guest, front desk, housekeeping, and payment layers can do at every step.",
      },
      metrics: [
        { value: "63", label: "Pages built and shipped" },
        { value: "46", label: "Data models (Prisma schema)" },
        { value: "45", label: "API routes", suffix: "+" },
        { value: "437", label: "TypeScript files" },
      ],
      impact: [
        {
          value: "70%",
          label: "OTA Dependency Reduction",
          description: "Direct booking channel now primary",
        },
        {
          value: "6→1",
          label: "SaaS Tools Replaced",
          description: "Single source of truth for all operations",
        },
        {
          value: "9",
          label: "Reservation States",
          description: "Fully modeled lifecycle, no edge-case surprises",
        },
        {
          value: "2",
          label: "Design Themes",
          description: "Guest-facing warmth + Admin precision from one component set",
        },
      ],
      reflection: {
        proud:
          "The three-layer design token system is the part I'd show anyone who asks about design systems in practice. It's not just theming — it's a vocabulary that made every design decision faster and more consistent.",
        different:
          "I underestimated the complexity of the housekeeping module. It became its own product inside the product. In hindsight, I'd have scoped it as a separate phase with its own discovery sprint.",
        learned:
          "Building full-stack solo forces you to design for your own edge cases. You can't throw ambiguity over the wall. Every design decision has a code consequence — and knowing both sides makes you a better designer and a better engineer.",
      },
    },
  },
  {
    id: "superfoods",
    slug: "superfoods",
    number: "03",
    title: "XIPHIAS Superfoods",
    description:
      "Premium D2C e-commerce on Shopify. Brand to checkout. 15 days solo.",
    pitch:
      "Designing and shipping xiphiassuperfoods.com on Shopify — brand, store, product experience, and analytics — solo, end-to-end, in two weeks.",
    role: "Solo Product Designer + Shopify Build",
    duration: "15 days",
    team: "Solo",
    stack: ["Shopify", "Liquid", "GA4", "Google Tag Manager"],
    year: "2024",
    tags: ["Shopify", "Liquid", "GA4", "GTM"],
    gradient: "from-amber-900 via-orange-900 to-yellow-900",
    liveUrl: "https://www.xiphiassuperfoods.com/",
    caseStudy: {
      badge: "CASE STUDY 03 / 2024",
      brief:
        "XIPHIAS Superfoods was a new D2C brand under the XIPHIAS group — premium organic foods (rare teas, black rice, A2 ghee, makhana) targeting urban health-conscious consumers in India and UAE. The brief: full brand-to-storefront in 15 days for a marketing campaign launch. ISO 9001 + 22000 certified.",
      pullQuote:
        "\"We're not selling commodity groceries. We're selling Rs.2,900 white tea. The store needs to look like Erewhon, not Amazon.\"",
      goals: [
        "Launch a production Shopify store within 15 days",
        "Establish premium visual positioning consistent with Rs.2,900 price points",
        "Build for India + UAE dual-market (currency, shipping, language considerations)",
        "Implement GA4 + GTM for full funnel analytics from day one",
        "Structure IA for three distinct user intents: browse, goal, explore",
      ],
      research: {
        intro:
          "With 15 days and no discovery runway, I moved fast. I ran a 2-day competitive benchmark across premium food brands: Erewhon, Pukka, Vahdam Teas, and The Art of Living. The visual language was clear: warm cream backgrounds, editorial photography, generous whitespace, and no cluttered deals banners.",
        paragraphs: [
          "The price point was the design brief. At Rs.2,900 for white tea, every visual signal had to justify premium. That meant no discount badges on the hero, no 'FREE SHIPPING ON ORDERS ABOVE X' banners above the fold, no countdown timers. The site had to breathe.",
          "I identified three user intents that shaped the IA: 'I know what I want' (search + direct category navigation), 'I know my health goal' (curated collections by benefit: immunity, weight management, antioxidants), and 'I'm exploring' (editorial content, brand story, ingredient provenance).",
          "The dual-market requirement meant building with Shopify Markets — separate pricing rules, shipping profiles, and currency display for India (INR) and UAE (AED) without duplicating the catalog.",
        ],
        insights: [
          "Premium price point requires removing discount signals, not adding them",
          "Three-intent IA serves search, goal, and discovery behaviors simultaneously",
          "Editorial content (origin stories, certifications) is a conversion driver at premium price points",
          "GA4 + GTM setup from day one — not retrofitted — is 10x easier",
        ],
      },
      keyDecisions: [
        {
          title: "Three-Intent Information Architecture",
          description:
            "'I know what I want' (search), 'I know my goal' (benefit collections), 'I'm exploring' (editorial). Each intent has a designed entry point and conversion path.",
        },
        {
          title: "Premium Visual System",
          description:
            "Warm off-white backgrounds, serif typography, editorial photography framing. No discount UI patterns — the visual language signals Rs.2,900 pricing before the price is shown.",
        },
        {
          title: "Shopify Markets for Dual-Currency",
          description:
            "India (INR) and UAE (AED) configured as separate markets with automatic currency detection, shipping profiles, and tax rules — one catalog, two market experiences.",
        },
        {
          title: "GA4 + GTM from Day One",
          description:
            "Full eCommerce event tracking: product view, add to cart, begin checkout, purchase. Configured with GTM to allow marketing team to add events without code deploys.",
        },
      ],
      screens: [
        {
          title: "Premium storefront entry",
          caption:
            "The first fold leans on editorial restraint and provenance instead of discount mechanics.",
          decision:
            "Removed commodity e-commerce signals above the fold because the flagship product price demanded premium framing.",
          aspect: "wide",
        },
        {
          title: "Benefit-led collection path",
          caption:
            "Collections support shoppers who arrive with a health goal rather than a specific product in mind.",
          decision:
            "Added goal-based browsing alongside search and categories to serve three distinct purchase intents.",
          aspect: "desktop",
        },
        {
          title: "Product detail trust stack",
          caption:
            "Certifications, origin, usage, and product quality cues sit close to purchase decisions.",
          decision:
            "Used trust content as conversion support for premium organic products instead of burying it in brand pages.",
          aspect: "desktop",
        },
      ],
      beforeAfter: {
        caption:
          "The launch moved from no storefront to a premium Shopify experience with analytics, dual-market setup, and product trust cues in 15 days.",
      },
      flow: {
        title: "Three-intent storefront IA",
        caption:
          "Search, benefit-led collections, and editorial exploration gave new and returning customers different paths into the same catalog.",
      },
      metrics: [
        { value: "15", label: "Days to launch" },
        { value: "2", label: "Markets (India + UAE)" },
        { value: "100", label: "GA4 event coverage", suffix: "%" },
        { value: "2900", label: "Rs. flagship product price", suffix: "+" },
      ],
      impact: [
        {
          value: "15 days",
          label: "Full Store Launch",
          description: "Brand + design + build + analytics in two weeks",
        },
        {
          value: "2",
          label: "Markets Launched",
          description: "India + UAE with full localization",
        },
        {
          value: "3",
          label: "Intent Pathways",
          description: "Designed IA for search, goal, and browse behaviors",
        },
        {
          value: "ISO",
          label: "9001 + 22000",
          description: "Certifications prominently featured as trust signals",
        },
      ],
      reflection: {
        proud:
          "The speed. 15 days from brief to live, including brand visual system, full Shopify store, analytics configuration, and dual-market setup. That's only possible when design and build are one person.",
        different:
          "I'd invest more in the editorial content system. The product pages were beautiful, but the blog/journal section was undercooked due to time pressure. Long-form content is a huge SEO and trust lever for premium D2C.",
        learned:
          "Price point IS design brief. Every decision should be filtered through: 'Does this look like Rs.2,900 quality?' When you internalize that question, the visual decisions become obvious.",
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
