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
          title: "Research · User Journey Map",
          image: "/case-studies/xiphias-immigration/journey-map.svg",
          alt: "User journey map for a skilled worker visa applicant — 6 stages from discovery to decision, showing emotional arc, touchpoints, pain points, and design opportunities",
          caption:
            "Journey map synthesised from 12 discovery interviews. Six stages: Discover → Assess Eligibility → Prepare Documents → Submit → Track & Wait → Decision. Three critical pain points drove the product roadmap: no instant eligibility check, document chaos, and zero visibility during the 6-week processing wait.",
          decision:
            "Stage 5 (Track & Wait) was assumed to be a minor inconvenience before this research. The interviews revealed it was the most anxiety-inducing part of the entire process — applicants checked the portal multiple times daily for zero new information. That insight made real-time status tracking a P0 requirement, not a nice-to-have.",
          aspect: "wide",
        },
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
        image: "/case-studies/xiphias/screen-5.jpg",
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
    duration: "2 months",
    team: "Solo",
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind"],
    year: "2025",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "Full-Stack"],
    gradient: "from-cyan-900 via-teal-900 to-emerald-900",
    caseStudy: {
      badge: "CASE STUDY 02 / 2025",
      heroImage: "/case-studies/resort-app/screen-9.jpg",
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
          title: "Homepage — guest booking entry",
          image: "/case-studies/resort-app/screen-2.jpg",
          alt: "Karnataka Resort homepage hero with forest imagery and direct booking CTA",
          caption:
            "Warm, editorial homepage with immersive hero. Direct booking eliminates OTA dependency from the first touchpoint.",
          decision:
            "Separated the guest-facing design language (cream, forest green, warm photography) from the admin precision layer — both themes share the same component set via a three-layer token system.",
          aspect: "wide",
        },
        {
          title: "Room listing & availability sidebar",
          image: "/case-studies/resort-app/screen-5.jpg",
          alt: "Room listing page showing 5 room types with pricing and availability sidebar",
          caption:
            "Room cards with live pricing (₹7,500–₹14,500), occupancy data, and a persistent sidebar showing selected dates and booking summary.",
          decision:
            "The sidebar stays in view across all booking steps so guests never lose context of what they're booking. Confidence before commitment.",
          aspect: "desktop",
        },
        {
          title: "Booking flow — payment options",
          image: "/case-studies/resort-app/screen-7.jpg",
          alt: "Guest Details & Payment step showing three payment options with recommended badge",
          caption:
            "Three-option payment structure: Pay full · Pay 50% deposit (recommended) · Request pay at property — designed to reduce booking drop-off.",
          decision:
            "The deposit option with a RECOMMENDED badge consistently performs best in hospitality UX research. It anchors guests to completion without requiring full commitment upfront.",
          aspect: "desktop",
        },
        {
          title: "Admin — Operations dashboard",
          image: "/case-studies/resort-app/screen-9.jpg",
          alt: "Admin operations dashboard with KPI cards, arrivals, departures, and in-house desks",
          caption:
            "Front desk command centre: real-time KPIs, Arrivals / Departures / In-house panels, and quick action lanes. Designed for 30-second situational awareness.",
          decision:
            "Used a dense but scannable layout where each panel is self-contained. Staff can act without switching tabs — the core problem the old 6-SaaS setup was failing to solve.",
          aspect: "wide",
        },
        {
          title: "Reservation detail view",
          image: "/case-studies/resort-app/screen-11.jpg",
          alt: "Reservation detail with full lifecycle status, guest info, and action buttons",
          caption:
            "Full reservation lifecycle in one view: status badge, guest summary, room assignment, payment status, and all permitted state transitions surfaced as primary actions.",
          decision:
            "State machine logic gates which buttons appear — you cannot check in a guest who hasn't confirmed payment. The UI enforces the business rules.",
          aspect: "desktop",
        },
        {
          title: "Room status board",
          image: "/case-studies/resort-app/screen-14.jpg",
          alt: "Room status board showing 13 rooms with clean, occupied, OOO, and dirty states",
          caption:
            "13-room status board with Clean / Occupied / OOO / Dirty states. Housekeeping updates visible to front desk in real time.",
          decision:
            "Treated housekeeping as a first-class workflow after process shadowing revealed it was the largest hidden bottleneck — staff were making phone calls to check room readiness.",
          aspect: "desktop",
        },
        {
          title: "Finance suite — overview",
          image: "/case-studies/resort-app/screen-16.jpg",
          alt: "Finance overview with revenue metrics, invoices, and receivables tabs",
          caption:
            "Six-tab finance module: Overview · Invoices · Receivables · Payments · Revenue · Reconciliation. Replaces a standalone accounting SaaS.",
          decision:
            "Finance was originally scoped as a simple ledger. Shadowing the owner's workflow revealed they were reconciling across three tools daily — so I built a full finance suite instead.",
          aspect: "desktop",
        },
        {
          title: "Guests & CRM",
          image: "/case-studies/resort-app/screen-20.jpg",
          alt: "Guests CRM showing guest profiles, stay history, and revenue per guest",
          caption:
            "Guest profiles with stay history, lifetime value, and direct contact — built to make repeat-booking campaigns possible without a third-party CRM.",
          decision:
            "OTA bookings anonymise guests. Direct bookings build a guest database. This module is the compounding value driver — every direct booking makes the next campaign cheaper.",
          aspect: "desktop",
        },
        {
          title: "Reports — Daily Flash",
          image: "/case-studies/resort-app/screen-22.jpg",
          alt: "Reports daily flash showing ADR, RevPAR, and occupancy trend charts",
          caption:
            "Daily Flash report with ADR, RevPAR, and occupancy trend. Management sees the same KPIs as a 500-room hotel — without the enterprise software bill.",
          decision:
            "Small hotels rarely get proper reporting because enterprise PMS tools cost ₹80k+/month. Embedding it here was a deliberate access-equaliser.",
          aspect: "desktop",
        },
        {
          title: "Settings — Property configuration",
          image: "/case-studies/resort-app/screen-24.jpg",
          alt: "Settings home with 10 configuration sections including rooms, rates, and policies",
          caption:
            "10-section settings hub: Property · Rooms · Rate Plans · Taxes · Policies · Amenities · Staff · Integrations · Notifications · Audit log.",
          decision:
            "Settings are often an afterthought. Here they're a product — because a resort owner who can configure their own rate plans and tax structures doesn't need to call support.",
          aspect: "desktop",
        },
      ],
      flow: {
        title: "Reservation lifecycle state map",
        image: "/case-studies/resort-app/screen-11.jpg",
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
    id: "agree-superfoods",
    slug: "agree-superfoods",
    number: "03",
    title: "Agree Superfoods",
    description:
      "Full D2C e-commerce platform built from scratch. Research to production — brand, UI system, custom storefront.",
    pitch:
      "Designing and building agreesuperfoods.in from the ground up — not a theme, not a template. Brand identity, information architecture, UI system, and a custom storefront for premium seeds, teas, and pantry essentials.",
    role: "Solo Product Designer + Front-End Dev",
    duration: "2 months",
    team: "Solo",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "GA4"],
    year: "2025",
    tags: ["E-Commerce", "UI Design", "Brand", "Next.js", "Design Systems"],
    gradient: "from-green-900 via-emerald-900 to-teal-900",
    liveUrl: "https://www.agreesuperfoods.in/",
    caseStudy: {
      badge: "CASE STUDY 03 / 2025",
      heroImage: "/case-studies/agree/screen-1.jpg",
      brief:
        "Agree Superfoods is a premium D2C brand selling organic seeds, teas, makhana, and pantry essentials to health-conscious consumers in India. The challenge: stand out in a crowded wellness market dominated by discount-first commodity stores. The brief was to build a brand-forward e-commerce platform from scratch — custom design, custom code, no off-the-shelf themes — that positioned Agree as a trusted, quality-first alternative to generic grocery marketplaces.",
      pullQuote:
        "\"We don't want to look like every other health food store. We want customers to trust us the moment they land — before they read a single product description.\"",
      goals: [
        "Design and build a custom e-commerce storefront — not a template",
        "Establish a premium, earthy visual identity that signals quality over price",
        "Structure navigation for four product categories: Seeds, Tea, Pantry Essentials, Healthy Snacking",
        "Build an educational content system (18 articles) to support SEO and trust",
        "Implement a cart and checkout flow with smooth product discovery",
        "Launch with full analytics and business credential visibility",
      ],

      personas: [
        {
          name: "Priya Sharma",
          type: "Urban Health-Conscious Buyer",
          age: "31",
          location: "Bengaluru, India",
          role: "Product Manager, tech startup",
          goals: [
            "Find reliable source for organic seeds and teas to replace supermarket options",
            "Browse by category without wading through irrelevant products",
            "Trust the brand before making a first purchase",
          ],
          frustrations: [
            "Most health stores look like discount pharmacies — can't tell premium from generic",
            "Product pages don't tell her where ingredients come from",
            "Cart experience on mobile is often broken or slow",
          ],
          quote:
            "\"I'll pay more for something I trust. But the site has to look like they take quality seriously before I'll believe the product does too.\"",
        },
        {
          name: "Suresh Nair",
          type: "Retail / Wholesale Buyer",
          age: "44",
          location: "Kochi, India",
          role: "Owner, specialty health food store",
          goals: [
            "Evaluate Agree as a wholesale supplier for his store",
            "Find GSTIN and business credentials without calling anyone",
            "Understand product range and minimum order quantities",
          ],
          frustrations: [
            "B2C sites never have the business information trade buyers need",
            "Hard to assess if a brand has a real supply chain or is just a reseller",
            "No bulk/wholesale route visible on most D2C sites",
          ],
          quote:
            "\"I'm not a retail customer. I need to see GSTIN, trade name, registration date — before I even think about a sample order.\"",
        },
      ],

      colorPalette: [
        {
          name: "Cream Surface",
          hex: "#F5F0E8",
          usage: "Primary page background — warm, editorial, signals natural and organic positioning",
        },
        {
          name: "Forest Green",
          hex: "#1C3A2A",
          usage: "Primary brand dark — navigation, footer, CTA backgrounds, high-authority sections",
        },
        {
          name: "Leaf Green",
          hex: "#4A7C59",
          usage: "Brand mid-tone — product badges, tag pills, secondary accents, hover states",
        },
        {
          name: "Harvest Gold",
          hex: "#C8851A",
          usage: "Accent — sale badges, new product labels, discount indicators, warm highlights",
        },
        {
          name: "Content Dark",
          hex: "#1A1A1A",
          usage: "Body copy and product names — near-black for maximum legibility on cream",
        },
        {
          name: "Muted Taupe",
          hex: "#8A8070",
          usage: "Secondary text — metadata, labels, captions, supporting copy",
        },
      ],

      typography: [
        {
          family: "Cormorant Garamond",
          weights: "400, 600, 700",
          usage: "Display headlines — editorial gravitas, premium serif positioning matching the brand's quality signals",
        },
        {
          family: "DM Sans",
          weights: "400, 500, 600",
          usage: "Body copy, UI labels, product names — clean and legible at small sizes, modern without being cold",
        },
        {
          family: "DM Mono",
          weights: "400",
          usage: "Category labels, metadata tags, badge text — structured information with an ingredient-list clarity",
        },
      ],

      research: {
        intro:
          "Before a single frame, I ran a two-week research sprint: competitive audit of 14 health food brands (Vahdam Teas, Pukka, Raw Pressery, Farmley, The Whole Truth, Erewhon), user interviews with 6 target customers, and a full audit of the client's existing product range and pricing logic.",
        paragraphs: [
          "The competitive audit surfaced a clear pattern: mid-market health brands defaulted to discount-led layouts — countdown timers, free shipping banners, sticker badges over hero images. Premium brands (Vahdam, Erewhon) stripped all of that. Warm backgrounds. Editorial typography. Product photography that showed ingredient provenance, not just packaging. The visual grammar of trust.",
          "User interviews revealed two distinct buyer types: the personal health consumer who browsed by ingredient or goal, and the trade/wholesale buyer who needed to see business credentials (GSTIN, registration) before even considering a relationship. Neither type was being served by existing competitors. I designed for both in parallel.",
          "Product discovery was the central UX problem. With 4 categories and 20+ products, the question was how to help users who don't know exactly what they want navigate to a confident purchase. I mapped three entry paths: direct search, category browse, and curated collections — and designed each as a distinct, low-friction journey.",
          "Lo-fi wireframes went through 3 rounds with the client before any pixel work started. The biggest decision at wireframe stage: the homepage would lead with lifestyle photography and a purpose headline ('Fresh Day Start') — not product imagery, not price points. Trust first. Product second.",
        ],
        insights: [
          "Premium visual grammar (cream backgrounds, serif type, editorial photography) signals quality before a word is read",
          "Trade buyers require GSTIN and business credentials — a B2C site needs to serve this without feeling like a compliance document",
          "Three-path product discovery (search, category, collection) handles different buyer intents without complicating the interface",
          "Educational content (18 articles, ingredient guides, recipe ideas) serves both SEO and pre-purchase trust building",
          "Cart drawer over full cart page reduces navigation friction and keeps users in the browse-to-buy flow",
        ],
      },

      keyDecisions: [
        {
          title: "Custom Build — No Theme, No Template",
          description:
            "Built the entire storefront on Next.js + TypeScript, not a theme engine. Every component is purpose-designed for this brand. The result: full control over performance, layout, and the exact visual language the brand required — a warm, editorial experience that no off-the-shelf theme could produce.",
        },
        {
          title: "Four-Category Navigation with Mega Menu",
          description:
            "Seeds · Tea Collection · Pantry Essentials · Healthy Snacking — each with curated sub-navigation, a product spotlight slot, and a 'Top 3' quick-picks column. The mega menu doubled as a discovery surface, not just a directory.",
        },
        {
          title: "Cart Drawer with Live Subtotal",
          description:
            "Chose a slide-in cart drawer over a full cart page to keep users in the browse flow. The drawer shows product thumbnails, quantity controls, running subtotal, and a clear checkout CTA — all accessible from any page without a navigation break.",
        },
        {
          title: "Trust Layer for Trade Buyers",
          description:
            "Integrated a dedicated 'Official Business Credentials' section with GSTIN, trade name, registration date, and state jurisdiction — visible on the homepage without navigating to a compliance page. This directly addressed the wholesale buyer persona who needs to vet suppliers before engagement.",
        },
        {
          title: "Educational Content as Conversion Support",
          description:
            "Built an 18-article editorial system covering ingredient science, daily routines, and product comparisons. Content is tagged, filterable, and internally linked to product pages — serving both organic search and the 'I'm researching' buyer who needs reasons to trust before buying.",
        },
      ],

      screens: [
        {
          title: "Homepage — hero section",
          image: "/case-studies/agree/screen-1.jpg",
          alt: "Agree Superfoods homepage — 'Fresh Day Start' hero with lifestyle photography",
          caption:
            "The hero leads with purpose ('Fresh Day Start') and lifestyle imagery — no discount banners, no price points. Trust and aspiration before product.",
          decision:
            "Chose editorial restraint over promotional density because the target buyer responds to quality signals, not urgency mechanics.",
          aspect: "wide",
        },
        {
          title: "Browse by category",
          image: "/case-studies/agree/screen-2.jpg",
          alt: "Browse by category section with 4 collection cards",
          caption:
            "Four collections with editorial photography and a stat strip (Category Count: 04, Browse Style: Pantry-first, Browse Route: Visual collection browse) — informing the browsing model before the user commits to a path.",
          decision:
            "Surfaced the browsing model explicitly so users understand the structure before drilling in — reduces drop-off at category entry.",
          aspect: "wide",
        },
        {
          title: "Bestsellers shelf",
          image: "/case-studies/agree/screen-3.jpg",
          alt: "Featured bestsellers with product cards and category filter tabs",
          caption:
            "Category filter tabs (Best Sellers · Seeds · Pantry Essentials · Tea) let users personalise the shelf without leaving the homepage — serving browsing and goal-led intents simultaneously.",
          decision:
            "In-page filtering over separate category pages keeps discovery momentum and reduces unnecessary navigation.",
          aspect: "wide",
        },
        {
          title: "Why Choose Agree — trust section",
          image: "/case-studies/agree/screen-4.jpg",
          alt: "Why Choose Agree section with 4 value prop cards",
          caption:
            "Four value props (Quality ingredients, Pantry ready, WhatsApp orders, Trusted business presentation) in a 2×2 card grid — with a 'What This Means' explainer that translates brand values into buyer benefits.",
          decision:
            "Named benefits in terms the buyer cares about (not ingredient jargon) to bridge the gap between brand claims and customer reality.",
          aspect: "wide",
        },
        {
          title: "Product spotlight — Makhana",
          image: "/case-studies/agree/screen-5.jpg",
          alt: "Product spotlight section — Makhana with benefit tags and product photography",
          caption:
            "Homepage product spotlight with three benefit tags (Snack Appeal, Use, Range Role), a product image with packaging detail, and a benefit summary — converting browse intent to product intent before the product page.",
          decision:
            "Spotlighting one product at a time, with context and framing, outperforms a grid of 8 products for premium brands where trust is the conversion driver.",
          aspect: "wide",
        },
        {
          title: "Mega navigation menu",
          image: "/case-studies/agree/screen-7.jpg",
          alt: "Mega menu with category columns and product spotlight panel",
          caption:
            "The mega menu structures four product categories into columned sub-navigation with a live product spotlight panel on the right — a browsing surface, not just a directory.",
          decision:
            "Added the spotlight panel to the mega menu to give users a reason to hover and explore, not just jump to a known destination.",
          aspect: "wide",
        },
        {
          title: "Product listing — all products",
          image: "/case-studies/agree/screen-8.jpg",
          alt: "Products listing page with 4-column grid and dual action buttons",
          caption:
            "4-column product grid with consistent card anatomy: photography, product name, current + original price, and dual CTAs (Details + Add to cart). Discount badges positioned as supplemental, not dominant.",
          decision:
            "Kept discount badges small and corner-positioned — they exist for transparency, not to lead the visual hierarchy.",
          aspect: "wide",
        },
        {
          title: "Educational content — blog",
          image: "/case-studies/agree/screen-9.jpg",
          alt: "Educational content section with 18 articles and search/filter",
          caption:
            "18 articles covering seeds, teas, and daily food habits — with search, category filter, and tag filter. Internal links connect articles to relevant product pages, shortening the path from research to purchase.",
          decision:
            "Built editorial content as a first-class feature, not a blog afterthought — it directly supports both SEO and pre-purchase trust for health-conscious buyers.",
          aspect: "wide",
        },
        {
          title: "Cart drawer — open state",
          image: "/case-studies/agree/screen-10.jpg",
          alt: "Cart drawer open with 2 items, quantity controls, and subtotal",
          caption:
            "Slide-in cart drawer with product thumbnails, quantity controls, live subtotal, and a primary checkout CTA — accessible from any page without breaking the browse flow.",
          decision:
            "Cart drawer over cart page keeps users in context. Testing showed that full-page cart navigation caused 40%+ of users to abandon rather than continue browsing.",
          aspect: "wide",
        },
      ],

      flow: {
        title: "Three-path product discovery",
        image: "/case-studies/agree/screen-2.jpg",
        caption:
          "Direct search, category browse, and curated collections give different buyer types — know-what-they-want, category explorers, and goal-led shoppers — distinct paths to the same catalog.",
      },

      metrics: [
        { value: "4", label: "Product categories structured" },
        { value: "20", label: "Products launched", suffix: "+" },
        { value: "18", label: "Editorial articles built" },
        { value: "2", label: "Months, brief to production" },
      ],

      impact: [
        {
          value: "100%",
          label: "Custom Build",
          description: "No theme, no template — every component purpose-designed",
        },
        {
          value: "3",
          label: "Discovery Paths",
          description: "Search, category, and collection for three buyer intents",
        },
        {
          value: "18",
          label: "Editorial Articles",
          description: "Ingredient guides and recipes for SEO + trust building",
        },
        {
          value: "2",
          label: "Buyer Personas Served",
          description: "Consumer and trade buyer paths built into the same storefront",
        },
      ],

      reflection: {
        proud:
          "The trust layer for trade buyers — the business credentials section on the homepage — was a design decision that nobody asked for but that every wholesale buyer I interviewed said they'd been looking for. Designing for the unspoken need is the part of this work I'm proudest of.",
        different:
          "I would have spent more time on the product detail page. The PDP is where purchase decisions are made, and while the listing experience was strong, I shortcut the PDP depth to hit the launch deadline. A richer ingredient provenance section would have supported the premium positioning better.",
        learned:
          "Building a custom storefront from scratch forces you to earn every interaction. There's no theme fallback. Every layout decision has a clear reason — or it shouldn't exist. That discipline makes the final product tighter, and makes you a better product designer for having gone through it.",
      },
    },
  },
  {
    id: "harmony-luxe-spa-admin",
    slug: "harmony-luxe-spa-admin",
    number: "04",
    title: "Harmony Luxe Spa Admin",
    description:
      "SaaS-style billing and reports dashboard for a spa business. Menu pricing, GST invoices, customer index, expenses, analytics, and print/PDF workflows.",
    pitch:
      "Designing and building a focused back-office product for Harmony Luxe: a role-based billing suite that turns service pricing, invoice generation, customer history, expenses, and monthly reporting into one calm operating system.",
    role: "Solo Product Designer + Full-Stack Dev",
    duration: "Production sprint",
    team: "Solo",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Sheets", "Vercel"],
    year: "2026",
    tags: ["SaaS Dashboard", "Billing", "Reports", "Next.js", "Google Sheets"],
    gradient: "from-stone-900 via-amber-950 to-neutral-950",
    liveUrl: "https://harmony-luxe-spa.vercel.app",
    caseStudy: {
      badge: "CASE STUDY 04 / 2026",
      heroImage: "/case-studies/harmoneyluxesaas/screen-1.png",
      brief:
        "Harmony Luxe needed an admin system that behaved like lightweight SaaS, but fit the way a real spa front desk works: service prices change, invoices must be fast, GST totals must be clear, customers should be searchable by phone, and monthly cash/expense reporting needs to stay exportable. The product brings dashboard, menu management, billing, invoices, customers, expenses, reports, and account security into one role-aware workspace.",
      pullQuote:
        "\"The staff should be able to bill a walk-in customer, print or save the invoice, and still keep the owner-level reports clean without juggling files.\"",
      goals: [
        "Create one role-based admin workspace for owner, cashier, and accounts users",
        "Make invoice creation fast enough for front-desk use during active appointments",
        "Keep the service menu and pricing editable without a developer handoff",
        "Generate print-ready GST invoices with PDF save support",
        "Turn invoice, customer, and expense data into monthly reports and CSV exports",
      ],

      personas: [
        {
          name: "Anita Rao",
          type: "Owner / Admin",
          age: "39",
          location: "Bengaluru, India",
          role: "Spa owner managing revenue, expenses, and staff access",
          goals: [
            "See monthly revenue, expenses, profit, and payment mix without opening raw sheets",
            "Keep menu pricing accurate across 50 services",
            "Review customer spend and repeat visits before planning offers",
          ],
          frustrations: [
            "Manual spreadsheet reporting takes time and is easy to break",
            "Front desk billing data is not always structured for owner-level decisions",
            "Changing staff passwords and roles needs to be simple",
          ],
          quote:
            "\"I do not need a big ERP. I need one clean place to see what happened today and what the month looks like.\"",
        },
        {
          name: "Rohit Kumar",
          type: "Cashier / Front Desk",
          age: "26",
          location: "Bengaluru, India",
          role: "Reception and billing operator",
          goals: [
            "Create a bill quickly while the customer is waiting",
            "Find services by name and add the right duration, GST, and price",
            "Print the invoice or save it as a PDF without leaving the flow",
          ],
          frustrations: [
            "Invoice tools often ask for too much before adding the first item",
            "Mistakes in customer phone numbers make later lookup difficult",
            "Switching between invoice list, preview, and print breaks momentum",
          ],
          quote:
            "\"Billing has to feel like a counter workflow. Search, add, confirm, print. No extra drama.\"",
        },
      ],

      colorPalette: [
        {
          name: "Spa Gold",
          hex: "#9A6500",
          usage: "Primary accent for selected navigation, key actions, and invoice totals",
        },
        {
          name: "Warm Surface",
          hex: "#F6F3ED",
          usage: "Soft workspace background that keeps the admin tool calm over long sessions",
        },
        {
          name: "Panel White",
          hex: "#FFFFFF",
          usage: "Cards, tables, forms, and invoice surfaces where data needs maximum clarity",
        },
        {
          name: "Ink Navy",
          hex: "#0B1324",
          usage: "Primary text, amounts, invoice metadata, and dense table content",
        },
        {
          name: "Border Grey",
          hex: "#D9DEE7",
          usage: "Low-contrast outlines for cards, fields, tables, and filters",
        },
        {
          name: "Status Mint",
          hex: "#DDFCF0",
          usage: "Final invoice badges and positive sync/status states",
        },
      ],

      typography: [
        {
          family: "Inter / System UI",
          weights: "400, 500, 600, 700",
          usage: "Dense admin UI, tables, field labels, invoice rows, and reporting cards",
        },
        {
          family: "Mono labels",
          weights: "400, 600",
          usage: "Dates, IDs, totals, invoice numbers, filters, and compact status metadata",
        },
      ],

      research: {
        intro:
          "The discovery work focused on operational reality rather than feature wishlists: how services are selected at the counter, how final invoices are tracked, how expenses are remembered, and how owners read the month after the day is over.",
        paragraphs: [
          "The existing mental model was spreadsheet-first. That worked for storage, but it did not work for speed. A cashier needed guided billing, while the owner needed summaries, exports, and customer history without cleaning raw rows.",
          "The highest-risk moment was invoice creation. The flow had to protect required customer fields, support quick service search, calculate totals clearly, and keep draft/final states understandable for non-technical staff.",
          "The menu was the source of billing truth. Instead of burying price changes in code, I treated services as a searchable pricing table with active/inactive states, variants, GST, and admin actions.",
          "Reports had to be simple enough for a daily check and detailed enough for a month close. The analytics screen combines revenue, expenses, net profit, payment mix, and CSV export without turning into a finance product.",
        ],
        insights: [
          "Front-desk speed matters more than feature breadth during billing",
          "Phone number is the practical customer key in a spa workflow",
          "Service pricing must be editable and auditable because menu changes are frequent",
          "Invoices need three views: list, printable preview, and browser print/PDF",
          "Owner reporting works best when revenue, expenses, customers, and payment mix stay connected",
        ],
      },

      keyDecisions: [
        {
          title: "Workspace IA around daily operations",
          description:
            "The sidebar follows the business rhythm: Dashboard, Menu, Billing, Invoices, Customers, Expenses, Reports, Settings. This keeps navigation literal and predictable for staff who use the tool repeatedly throughout the day.",
        },
        {
          title: "Guided billing with draft-to-final logic",
          description:
            "The billing screen separates invoice date, customer details, item selection, discount/tax notes, totals, and payment. Required states are visible before generation, so the cashier understands why an invoice cannot be finalized yet.",
        },
        {
          title: "Menu as a service price master",
          description:
            "Fifty services are managed as searchable rows with ID, name, variant, price, GST, active state, and edit/delete actions. This gives the owner control over pricing without changing the application code.",
        },
        {
          title: "Invoice preview built for print and PDF",
          description:
            "Invoices have a dedicated preview with zoom, fit, print, and save-as-PDF paths. The browser print dialog is part of the designed flow, not an afterthought.",
        },
        {
          title: "Sheets-backed reporting without spreadsheet UX",
          description:
            "The product keeps the lightweight Google Sheets operating model, but gives users a proper interface for revenue trends, customer index rebuilds, expenses, monthly P&L, and exports.",
        },
      ],

      screens: [
        {
          title: "Dashboard - revenue and operating pulse",
          image: "/case-studies/harmoneyluxesaas/screen-1.png",
          alt: "Harmony Luxe dashboard with revenue trend, payment mix, top customers, net revenue, and recent invoices",
          caption:
            "The dashboard gives the owner a fast read on month revenue, today's totals, payment mix, top customers, expenses, net trend, and recent invoices.",
          decision:
            "Lead with revenue trend and exception states so the screen still feels useful on low-data days.",
          aspect: "wide",
        },
        {
          title: "Menu - service price management",
          image: "/case-studies/harmoneyluxesaas/screen-2.png",
          alt: "Menu management table with service IDs, variants, prices, GST, active states, and edit/delete actions",
          caption:
            "The menu table acts as the price master for 50 visible services, with search, active filters, QR menu access, and inline admin actions.",
          decision:
            "Use a dense table instead of cards because the job is comparison, maintenance, and fast scanning.",
          aspect: "wide",
        },
        {
          title: "Billing - create invoice",
          image: "/case-studies/harmoneyluxesaas/screen-3.png",
          alt: "Billing screen with invoice date, customer details, item selector, totals, payment mode, and generate invoice action",
          caption:
            "Invoice creation is split into clear sections: date, customer details, items, advanced tax/discount notes, totals, payment, and generation controls.",
          decision:
            "Keep validation messages beside the action panel so staff know exactly what is blocking finalization.",
          aspect: "wide",
        },
        {
          title: "Invoices - searchable ledger",
          image: "/case-studies/harmoneyluxesaas/screen-4.png",
          alt: "Invoice ledger with search, date filters, final invoice rows, totals, view, print, and delete actions",
          caption:
            "The invoice ledger supports search, date range filtering, status filtering, export, and quick actions for view, print, and delete.",
          decision:
            "Make each row readable as an operational receipt: bill number, customer, date, cashier, status, amount, and actions.",
          aspect: "wide",
        },
        {
          title: "Invoice preview - print-ready document",
          image: "/case-studies/harmoneyluxesaas/screen-5.png",
          alt: "Invoice preview with tax invoice document, line items, total card, print controls, and save as PDF action",
          caption:
            "The invoice preview separates the printable tax invoice from the control panel, giving users zoom, fit, print, PDF save, and a return path to invoices.",
          decision:
            "The document area stays visually close to paper so staff can trust what will print before opening the browser dialog.",
          aspect: "wide",
        },
        {
          title: "Print flow - save as PDF",
          image: "/case-studies/harmoneyluxesaas/screen-6.png",
          alt: "Browser print dialog for Harmony Luxe invoice with Save as PDF destination",
          caption:
            "The print workflow supports normal printing and Save as PDF, which matters for sending invoices digitally after checkout.",
          decision:
            "Optimized the print view around a single-page invoice so browser output stays predictable.",
          aspect: "wide",
        },
        {
          title: "Customers - rebuilt customer index",
          image: "/case-studies/harmoneyluxesaas/screen-7.png",
          alt: "Customer index table with customer names, phone numbers, last visit, invoice count, and final spend",
          caption:
            "The customer index turns invoice history into a useful CRM-lite table: phone, last visit, invoice count, and final spend.",
          decision:
            "Use phone as the primary key because it matches how staff identify returning customers in practice.",
          aspect: "wide",
        },
        {
          title: "Expenses - admin finance capture",
          image: "/case-studies/harmoneyluxesaas/screen-8.png",
          alt: "Expenses screen with filters, quick ranges, totals, synced state, and expense rows",
          caption:
            "The expense module keeps vendor/category notes, mode, quick filters, total spend, synced state, and CSV export in the same workspace.",
          decision:
            "Expenses stay lightweight so the owner can log real costs without introducing a full accounting tool.",
          aspect: "wide",
        },
        {
          title: "Reports - monthly analytics and P&L",
          image: "/case-studies/harmoneyluxesaas/screen-9.png",
          alt: "Reports analytics dashboard with revenue, expenses, net profit, invoice counts, payment mix, monthly summary, and downloads",
          caption:
            "Reports combine date filters, summary cards, revenue-vs-expense charting, payment mix, daily breakdown, monthly P&L, and exports.",
          decision:
            "Put the monthly summary in a right rail so owner-level totals stay visible while exploring the report body.",
          aspect: "wide",
        },
        {
          title: "Settings - account and security",
          image: "/case-studies/harmoneyluxesaas/screen-10.png",
          alt: "Settings screen with signed-in admin panel and password change form",
          caption:
            "Settings keep security focused: current account visibility, password change, and instructions for staff account recovery.",
          decision:
            "Avoid overbuilding account management; roles and emails remain in the shared sheet while password updates stay in-app.",
          aspect: "wide",
        },
      ],

      flow: {
        title: "Counter-to-close billing loop",
        image: "/case-studies/harmoneyluxesaas/screen-3.png",
        caption:
          "Menu pricing feeds billing; billing creates draft/final invoices; invoices rebuild customers and revenue; expenses and invoice totals roll into monthly reports.",
      },

      metrics: [
        { value: "50", label: "Services structured" },
        { value: "20", label: "Invoices indexed" },
        { value: "13", label: "Customers rebuilt" },
        { value: "7", label: "Core admin modules" },
      ],

      impact: [
        {
          value: "50",
          label: "Active Services",
          description: "Menu pricing managed through the admin table",
        },
        {
          value: "PDF",
          label: "Invoice Output",
          description: "Print and Save as PDF supported from the preview flow",
        },
        {
          value: "13",
          label: "Customer Records",
          description: "Customer index rebuilt from invoice history",
        },
        {
          value: "P&L",
          label: "Monthly Reporting",
          description: "Revenue, expenses, net profit, margin, and payment mix in one view",
        },
      ],

      reflection: {
        proud:
          "The proudest part is that this feels like a real operator's tool, not a generic dashboard skin. The menu, invoice, customer, expense, and report views all speak the same business language, so staff do not need to translate the interface into their workflow.",
        different:
          "I would add a stronger onboarding layer for first-time staff: sample invoice walkthroughs, role-specific empty states, and a guided explanation of draft versus final bills. The current UI is clear, but training support would reduce owner handholding.",
        learned:
          "Small business SaaS succeeds when it respects existing habits. Google Sheets stayed in the system because it matched the client's trust model; the product's job was to make that data usable, faster, and harder to break.",
      },
    },
  },
  {
    id: "clinical-ai-ward-monitoring",
    slug: "clinical-ai-ward-monitoring",
    number: "05",
    title: "Clinical AI Ward Monitoring Platform",
    description:
      "Confidential healthtech case study for a clinical AI platform. Monitor-reading, structured vitals, role-aware escalation, compliance, and hospital deployment storytelling.",
    pitch:
      "Designing and building a high-trust healthcare AI product narrative in Next.js: turning a complex monitor-reading and escalation system into a clear problem-solution case study for clinical, operations, and governance buyers.",
    role: "Solo Product Designer + Front-End Dev",
    duration: "Product narrative sprint",
    team: "Solo",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    year: "2026",
    tags: ["Clinical AI", "Healthtech", "Next.js", "Problem/Solution", "Compliance UX"],
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    caseStudy: {
      badge: "CASE STUDY 05 / CONFIDENTIAL HEALTHCARE AI",
      heroImage: "/case-studies/asta/screen-1.png",
      brief:
        "This was a sensitive healthcare AI project where the real challenge was not simply explaining artificial intelligence. The product reads existing bedside monitor displays, extracts structured vitals, applies physiological reasoning, and routes clinical escalation to the right role. The design problem was to make that system feel credible, governed, explainable, and deployable for hospitals that cannot buy vague AI promises.",
      pullQuote:
        "\"Make the product feel clinically serious before it feels impressive. Hospitals need proof, workflow fit, and governance before they need wow.\"",
      goals: [
        "Translate a complex computer-vision and clinical reasoning system into a clear buyer-facing story",
        "Show that the platform works with existing bedside monitors instead of requiring a new hardware fleet",
        "Build trust around numerical-data capture, privacy, audit logs, and role-based access",
        "Move the narrative from AI hype to clinical workflow: capture, extract, reason, alert, review",
        "Use product-like proof screens to make the solution feel real, not conceptual",
        "Ship a polished, responsive Next.js site with strong performance and reusable sections",
      ],

      personas: [
        {
          name: "Dr. Meera Iyer",
          type: "Clinical Operations Leader",
          age: "46",
          location: "Tier-1 hospital network, India",
          role: "Responsible for ward quality, escalation protocols, and patient safety",
          goals: [
            "Understand whether the system improves escalation without creating alarm fatigue",
            "See how vital trends become clinical context, not just threshold alerts",
            "Evaluate whether nursing teams can use the system without retraining every workflow",
          ],
          frustrations: [
            "Clinical AI products often look impressive but do not explain how alerts reach staff",
            "Dashboards can add another screen without improving bedside action",
            "Vendors under-explain evidence, handover, and escalation responsibility",
          ],
          quote:
            "\"I need to know what happens after the alert. Who sees it, why it matters, and what evidence is attached?\"",
        },
        {
          name: "Arvind Menon",
          type: "Hospital IT / Governance Head",
          age: "42",
          location: "Multi-specialty hospital, Bengaluru",
          role: "Owns integration risk, privacy posture, data residency, and deployment approval",
          goals: [
            "Confirm the system can work without deep monitor-side or EMR integration on day one",
            "Understand what data is captured and whether patient imagery is avoided",
            "See compliance posture, auditability, access control, and deployment models clearly",
          ],
          frustrations: [
            "Healthcare landing pages bury privacy and governance behind glossy claims",
            "New hardware requirements create procurement and biomedical engineering delays",
            "AI vendors often skip the practical deployment model hospitals actually need",
          ],
          quote:
            "\"Before I care about the model, I need to know what it connects to, what it stores, and who controls it.\"",
        },
      ],

      colorPalette: [
        {
          name: "Clinical Navy",
          hex: "#060816",
          usage: "Primary background for a regulated, high-focus clinical interface atmosphere",
        },
        {
          name: "Signal Blue",
          hex: "#4F6BFF",
          usage: "Primary action and intelligence accent for active states, CTAs, and analysis markers",
        },
        {
          name: "Vital Cyan",
          hex: "#49C6FF",
          usage: "Vitals, telemetry, ECG strokes, and monitor-reading visuals",
        },
        {
          name: "Monitoring Teal",
          hex: "#28D7B5",
          usage: "Stable status, live signal, continuous monitoring, and compliance confirmation",
        },
        {
          name: "Escalation Amber",
          hex: "#F5B23D",
          usage: "Warning, escalation, and clinical attention states without overusing red",
        },
        {
          name: "Frost White",
          hex: "#F8FAFC",
          usage: "High-contrast clinical copy and large proof statements on dark UI",
        },
      ],

      typography: [
        {
          family: "Inter / Geometric Sans",
          weights: "400, 500, 600, 700",
          usage: "Large clinical claims, dense cards, landing-page sections, and dashboard copy",
        },
        {
          family: "Mono system labels",
          weights: "500, 700",
          usage: "Vitals, timestamps, bed IDs, audit logs, status pills, and telemetry metadata",
        },
      ],

      research: {
        intro:
          "The research started from hospital objections, not from the technology. A clinical AI product in this space has to answer four questions immediately: does it disrupt existing monitors, does it capture patients, does it create another alarm channel, and can the hospital govern the data?",
        paragraphs: [
          "The core product idea was technically advanced, but the buyer risk was practical. Hospitals already have bedside monitors, nursing escalation routines, privacy constraints, biomedical procurement limits, and IT governance. The design had to show that the platform fits into that reality instead of asking hospitals to rebuild it.",
          "I structured the narrative around a continuous operating model: capture the existing monitor display, extract structured vitals, reason over physiological trajectory, route alerts by role, and let clinical teams review the evidence. That sequence became the backbone of the website and the case study.",
          "For visual direction, I avoided generic hospital stock imagery and abstract AI blobs. The project needed proof surfaces: monitor cards, ECG lines, bed IDs, alert queues, risk scores, audit trails, compliance states, and ward-level command views. These patterns make the invisible AI pipeline visible without pretending it is a live EMR.",
          "The compliance story needed to be first-class. Numerical data only, no patient imagery, role-based access, audit logs, data residency, and interoperability were not footer details. They were design content because healthcare buyers evaluate risk before they evaluate features.",
        ],
        insights: [
          "Healthcare AI has a trust debt: the interface must show restraint, evidence, and governance before ambition",
          "The strongest product promise is deployment fit: existing monitors, no new hardware fleet, no deep IT dependency on day one",
          "Clinical users need trajectory and context, not another threshold alarm",
          "Hospital IT needs to see data boundaries, audit posture, and access control without digging",
          "Proof-like UI screens make complex AI feel inspectable and operational rather than speculative",
        ],
      },

      keyDecisions: [
        {
          title: "Problem-first hero instead of AI-first positioning",
          description:
            "The hero leads with active wards and clinical intelligence, then immediately shows vitals, escalation, ward coverage, and monitor-reading context. This makes the problem visible before introducing the technology, which is important in a skeptical healthcare buying journey.",
        },
        {
          title: "Designed the AI as a five-step clinical workflow",
          description:
            "Capture, extract, reason, alert, review became the central explanation model. It turns an abstract AI system into a sequence that clinicians, IT, and operations teams can inspect, question, and remember.",
        },
        {
          title: "Used proof interfaces instead of generic marketing visuals",
          description:
            "Every major section includes dashboard-like artifacts: ECG strips, risk score panels, alert queues, system status logs, ward command views, compliance centers, and contact routing. The goal was to make the product feel built, not imagined.",
        },
        {
          title: "Moved compliance into the product narrative",
          description:
            "Privacy and governance are framed as product capabilities: numerical data only, monitor-facing capture, role-based access, audit trail, data residency, and interoperability. That directly addresses the hospital approval path.",
        },
        {
          title: "Balanced clinical seriousness with high-contrast visual energy",
          description:
            "The dark clinical palette, cyan/blue telemetry accents, mono labels, and grid overlays create a technical healthcare tone without making the site feel like a gaming dashboard or an over-decorated AI landing page.",
        },
        {
          title: "Built modular Next.js sections for repeated proof patterns",
          description:
            "The site uses reusable sections for capability cards, metrics, signal panels, compliance rows, use-case blocks, and inquiry flows. This kept the design coherent while supporting a long, research-heavy story.",
        },
      ],

      screens: [
        {
          title: "Homepage hero - clinical signal system",
          image: "/case-studies/asta/screen-1.png",
          alt: "Clinical AI homepage hero with vitals, monitor card, escalation panel, and ward coverage",
          caption:
            "The opening screen makes the platform visible as a clinical signal system: live vitals, existing bedside monitor capture, escalation routing, ward coverage, and active status.",
          decision:
            "I used a proof-led hero because hospitals need to understand the operating model before they trust the AI claim.",
          aspect: "wide",
        },
        {
          title: "Product proof - vitals to reasoning",
          image: "/case-studies/asta/screen-2.png",
          alt: "Clinical AI dashboard with ECG, vitals cards, AI clinical analysis, alert queue, and system status",
          caption:
            "This section shows monitor reading, physiological reasoning, alert queue, and system logs in one proof frame.",
          decision:
            "The UI combines clinical vitals and system observability so both clinical and IT buyers can see value in the same surface.",
          aspect: "wide",
        },
        {
          title: "Institutional trust layer",
          image: "/case-studies/asta/screen-3.png",
          alt: "Institutional trust section with partner cards, government backing, and compliance posture chips",
          caption:
            "Trust proof appears before deeper product mechanics: partners, government backing, deployments, and compliance posture.",
          decision:
            "For a sensitive healthtech product, credibility has to arrive early; otherwise the later technical claims feel ungrounded.",
          aspect: "wide",
        },
        {
          title: "How it works - five continuous steps",
          image: "/case-studies/asta/screen-4.png",
          alt: "Five-step signal pipeline from capture to extraction, reasoning, alerting, and review",
          caption:
            "The workflow maps the product from monitor reading to clinical action in five continuous steps.",
          decision:
            "A five-step model gives the user a memory structure for a complex system and makes the AI legible.",
          aspect: "wide",
        },
        {
          title: "Platform capabilities",
          image: "/case-studies/asta/screen-5.png",
          alt: "Platform capability section with real-time vital extraction and module cards",
          caption:
            "The capability section reframes features as hospital deployment concerns: monitoring, alerting, visibility, compliance, integration, and deployment.",
          decision:
            "I organized capabilities by buyer objection instead of internal product architecture.",
          aspect: "wide",
        },
        {
          title: "Deployment model",
          image: "/case-studies/asta/screen-6.png",
          alt: "Deployment model section with zero capex, continuous coverage, audit trail, and latency metrics",
          caption:
            "This page turns the commercial and operational model into proof: no hardware refresh, continuous coverage, auditability, and fast signal interpretation.",
          decision:
            "Hospitals buy deployment confidence; these metrics answer procurement and operations risk directly.",
          aspect: "wide",
        },
        {
          title: "Compliance posture",
          image: "/case-studies/asta/screen-7.png",
          alt: "Compliance posture section with numerical data only, ISO, DPDP, encryption, and audit log UI",
          caption:
            "Compliance is shown as a live control surface: consent, audit trail, DPDP alignment, data residency, interoperability, and security logs.",
          decision:
            "I treated governance as a primary product feature because this is where sensitive healthcare AI wins or loses trust.",
          aspect: "wide",
        },
        {
          title: "Review deployment fit CTA",
          image: "/case-studies/asta/screen-8.png",
          alt: "Demo call-to-action and footer for reviewing clinical AI deployment fit",
          caption:
            "The final CTA is framed around deployment fit, not generic sales conversion.",
          decision:
            "The ask is a review session because the buying journey depends on monitor compatibility, ward workflow, and governance context.",
          aspect: "wide",
        },
        {
          title: "Solutions page - clinical intelligence positioning",
          image: "/case-studies/asta/screen-9.png",
          alt: "Solutions page hero for clinical intelligence across active wards",
          caption:
            "The solutions page reframes the product around active wards and measurable proof points: accuracy, speed, monitor compatibility, and deployments.",
          decision:
            "I separated solution positioning from the homepage so the site can serve deeper evaluators, not just first-time visitors.",
          aspect: "wide",
        },
        {
          title: "Productized modules",
          image: "/case-studies/asta/screen-10.png",
          alt: "Three productized modules explaining monitor reading, reasoning, and escalation",
          caption:
            "The module section explains the product as monitor reading, reasoning, and escalation rather than a single vague AI layer.",
          decision:
            "Breaking the system into modules makes the platform easier to sell, scope, and evaluate.",
          aspect: "wide",
        },
        {
          title: "Live ward product experience",
          image: "/case-studies/asta/screen-11.png",
          alt: "Ward command view with monitored beds, escalation queue, and audit trail",
          caption:
            "The ward view shows the day-to-day product surface for nursing, clinical leadership, and operations.",
          decision:
            "This proves the product is not just a model output; it has a workflow destination.",
          aspect: "wide",
        },
        {
          title: "Governance and interoperability",
          image: "/case-studies/asta/screen-12.png",
          alt: "Governance section with interoperability, DPDP posture, access control, audit trail, and no patient imagery",
          caption:
            "Governance content answers hospital readiness: interoperability, DPDP posture, role access, audit trail, data residency, and no patient imagery.",
          decision:
            "I made each objection its own card so risk can be scanned and discussed in stakeholder meetings.",
          aspect: "wide",
        },
        {
          title: "Monitoring across ward contexts",
          image: "/case-studies/asta/screen-13.png",
          alt: "Use-case section showing ICU, general ward, post-op, and high-dependency ward contexts",
          caption:
            "Use cases show how the same monitoring and reasoning system adapts across ICU, general ward, post-op, and high-dependency contexts.",
          decision:
            "Context cards make the platform feel operationally flexible without fragmenting the product story.",
          aspect: "wide",
        },
        {
          title: "Inquiry path - qualified clinical conversation",
          image: "/case-studies/asta/screen-14.png",
          alt: "Contact and inquiry form for product walkthrough, deployment review, research, and partnerships",
          caption:
            "The inquiry form routes users by conversation type: walkthrough, deployment review, teaching hospital research, partnership, or other.",
          decision:
            "For a specialized product, form design should qualify intent instead of collecting generic leads.",
          aspect: "wide",
        },
      ],

      flow: {
        title: "Monitor-to-action product narrative",
        image: "/case-studies/asta/screen-4.png",
        caption:
          "The full story moves from existing bedside monitor capture to structured vitals, physiological reasoning, role-aware escalation, and governed clinical review.",
      },

      metrics: [
        { value: "98", label: "CV extraction accuracy framed", suffix: "%" },
        { value: "2", label: "Signal-to-action latency story", suffix: "s" },
        { value: "15", label: "Monitor brands addressed", suffix: "+" },
        { value: "14", label: "Proof screens structured" },
      ],

      impact: [
        {
          value: "5",
          label: "Step Workflow",
          description: "Capture, extract, reason, alert, review made the AI pipeline explainable",
        },
        {
          value: "6",
          label: "Governance Objections",
          description: "Privacy, audit, access, residency, integration, and consent addressed visibly",
        },
        {
          value: "14",
          label: "Proof Frames",
          description: "Screenshots and UI artifacts used as evidence, not decoration",
        },
        {
          value: "0",
          label: "New Monitor Fleet",
          description: "The narrative centers on existing infrastructure and lower deployment friction",
        },
      ],

      reflection: {
        proud:
          "I am proud of how the case study makes a difficult healthcare AI product feel concrete without making it feel careless. The design does not hide the hard parts: alerts, governance, auditability, deployment, and clinical handoff are all visible.",
        different:
          "I would add more role-specific pathways in the next version: one journey for clinical leaders, one for hospital IT, and one for procurement. The current story covers all three well, but personalized navigation would make evaluation even faster.",
        learned:
          "In sensitive domains, good design is not just polish. It is risk translation. The interface has to explain what is captured, what is not captured, who acts, who controls the data, and why the system fits the workflow already in place.",
      },
    },
  },
  {
    id: "iris-digital-imaging",
    slug: "iris-digital-imaging",
    number: "06",
    title: "IRIS Digital Imaging Technologies",
    description:
      "Simple HTML/CSS website for an AI-assisted radiology imaging product. Clear hero, service cards, workflow, FAQ, and contact path.",
    pitch:
      "A focused static website for a radiology imaging product: explain the AI image-comparison value, show the workflow in simple steps, and make the business feel credible without overcomplicating the build.",
    role: "Website Designer + Front-End Developer",
    duration: "Simple static build",
    team: "Solo",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    tags: ["HTML", "CSS", "Healthcare", "Landing Page", "Static Website"],
    gradient: "from-red-950 via-neutral-950 to-stone-950",
    liveUrl: "https://irisdit.com/",
    caseStudy: {
      badge: "CASE STUDY 06 / STATIC HEALTHCARE WEBSITE",
      heroImage: "/case-studies/iris/screen-1.png",
      brief:
        "IRIS Digital Imaging Technologies needed a simple website that could explain advanced imaging software without feeling too heavy. The product story is about helping radiologists compare medical images over time, detect subtle changes, streamline analysis, and collect qualified inquiries. I kept the build intentionally straightforward with HTML, CSS, and light JavaScript so the site would stay fast, easy to host, and simple to maintain.",
      pullQuote:
        "\"Keep the website clean and direct. The user should understand the radiology workflow first, then know how to get in touch.\"",
      goals: [
        "Create a professional first impression for a healthcare imaging product",
        "Explain AI-assisted image comparison in plain, scannable sections",
        "Show the workflow from upload to comparison, review, annotation, and export",
        "Use medical imagery and strong spacing to make the brand feel serious and simple",
        "Keep the implementation lightweight with normal HTML, CSS, and JavaScript",
        "Provide a clear contact form and footer details for inbound leads",
      ],

      personas: [
        {
          name: "Radiology Clinic Owner",
          type: "Healthcare Decision Maker",
          age: "39",
          location: "Canada",
          role: "Evaluates software that can improve diagnostic workflow",
          goals: [
            "Quickly understand what the product does",
            "See whether the workflow fits image review and comparison tasks",
            "Find a simple contact path without reading a long technical document",
          ],
          frustrations: [
            "Healthcare websites often hide the actual workflow behind jargon",
            "AI claims can feel abstract without clear steps",
            "Contact details are often buried or unclear",
          ],
          quote:
            "\"I do not need a complicated website first. I need to understand the product, the workflow, and who to contact.\"",
        },
        {
          name: "Clinical Technology Evaluator",
          type: "Product Researcher",
          age: "34",
          location: "Toronto",
          role: "Reviews imaging tools for workflow fit and operational clarity",
          goals: [
            "Understand where the product sits in the radiology process",
            "Scan service benefits without technical overload",
            "Evaluate the business positioning and market context quickly",
          ],
          frustrations: [
            "Too many medical technology sites over-design the message",
            "Feature cards often describe technology but not workflow value",
            "Static pages can look unfinished when spacing and hierarchy are weak",
          ],
          quote:
            "\"The page has to make the product easy to explain to someone else after one read.\"",
        },
      ],

      colorPalette: [
        {
          name: "Diagnostic Black",
          hex: "#1f1f1f",
          usage: "Header, footer, and navigation background for a grounded medical technology tone",
        },
        {
          name: "IRIS Maroon",
          hex: "#6b0606",
          usage: "Primary CTA color, logo accent, and numbered workflow markers",
        },
        {
          name: "Warm Gold",
          hex: "#dfa64b",
          usage: "Market impact accordions and small brand accents",
        },
        {
          name: "Clinical White",
          hex: "#ffffff",
          usage: "Main content background for readability and calm spacing",
        },
        {
          name: "Soft Ice",
          hex: "#f3f8fc",
          usage: "Services section background to separate product blocks from the hero",
        },
        {
          name: "Neutral Grey",
          hex: "#6f6f6f",
          usage: "Secondary headings and body copy where the page needs quieter emphasis",
        },
      ],

      typography: [
        {
          family: "Poppins / Geometric Sans",
          weights: "400, 600, 700, 800",
          usage: "Hero heading, section titles, cards, navigation, and button labels",
        },
        {
          family: "System Sans",
          weights: "400, 500",
          usage: "Paragraphs, form fields, FAQ answers, and footer copy",
        },
      ],

      research: {
        intro:
          "The research direction was intentionally light because the project scope was a simple website, not a full product platform. I used the live business narrative, the radiology category, and the screenshots to shape a clear one-page explanation.",
        paragraphs: [
          "The page needed to avoid two common healthcare website problems: too much generic AI language and too little workflow clarity. The hero establishes the category immediately, then the next sections explain the value in plain language.",
          "I kept the structure close to how a buyer scans a small business site: first impression, product explanation, solution cards, how it works, market context, FAQ, and contact. That sequence lets visitors build confidence without needing a complex navigation system.",
          "The visual style is simple: a dark header, large medical hero image, high-contrast white sections, maroon CTA buttons, and spacious service cards. The restraint helps the website feel serious while still being achievable with normal HTML and CSS.",
          "Because the site is primarily informational, the contact form and footer matter more than advanced interaction. The design keeps the lead path visible and familiar instead of turning the page into a heavy SaaS marketing experience.",
        ],
        insights: [
          "For a simple healthcare website, clarity is more important than motion or complex layouts",
          "Radiology users need workflow language: upload, compare, view differences, annotate, export",
          "Medical imagery builds category recognition faster than abstract AI graphics",
          "A lightweight HTML/CSS build is easier to maintain for a small website",
          "FAQ and contact sections help convert visitors who are still early in evaluation",
        ],
      },

      keyDecisions: [
        {
          title: "Kept the build intentionally simple",
          description:
            "The project did not need a heavy framework. A normal HTML, CSS, and JavaScript build matched the scope: fast pages, simple hosting, easy edits, and enough flexibility for the sections required.",
        },
        {
          title: "Led with radiology context, not just AI",
          description:
            "The hero and first content block anchor the product in radiology and imaging workflow. This keeps the message grounded and prevents the site from sounding like a generic AI landing page.",
        },
        {
          title: "Used service cards for fast scanning",
          description:
            "The services section turns the offering into clear benefits: image comparison, AI-powered detection, streamlined workflow, and related imaging support. It gives visitors enough detail without forcing them into long paragraphs.",
        },
        {
          title: "Explained the workflow in four steps",
          description:
            "Upload images, AI comparison, view differences, annotate and export. The numbered layout makes the product easier to understand and repeat back in a sales or clinic discussion.",
        },
        {
          title: "Separated credibility into market impact and FAQ",
          description:
            "The market impact section gives business context, while the FAQ answers basic product questions. Together, they make the website feel more complete without adding unnecessary pages.",
        },
      ],

      screens: [
        {
          title: "Homepage hero",
          image: "/case-studies/iris/screen-1.png",
          alt: "IRIS Digital Imaging Technologies hero with medical background, navigation, and know more CTA",
          caption:
            "The hero uses a full medical image background, strong dark overlay, logo, and simple headline to establish the radiology category immediately.",
          decision:
            "I kept the first screen direct: brand, category, one supporting line, and one CTA.",
          aspect: "wide",
        },
        {
          title: "Product explanation",
          image: "/case-studies/iris/screen-2.png",
          alt: "IRIS section explaining AI-enhanced imaging solutions beside radiology imagery",
          caption:
            "The introduction pairs radiology imagery with a plain-language explanation of image comparison, improved diagnosis support, and workflow integration.",
          decision:
            "A two-column section gives the product enough credibility without making the page feel dense.",
          aspect: "wide",
        },
        {
          title: "Service cards",
          image: "/case-studies/iris/screen-3.png",
          alt: "IRIS service card grid for advanced image comparison, AI detection, and streamlined workflow",
          caption:
            "Service cards break the product into readable capability blocks that are easy to scan.",
          decision:
            "I used repeated cards because the project needed a simple, maintainable section pattern.",
          aspect: "wide",
        },
        {
          title: "How it works",
          image: "/case-studies/iris/screen-4.png",
          alt: "IRIS four-step workflow for upload, AI comparison, view differences, annotate and export",
          caption:
            "The workflow section explains the core process in four steps from image upload to export.",
          decision:
            "Numbered steps make a technical product feel approachable and easy to explain.",
          aspect: "wide",
        },
        {
          title: "Market impact",
          image: "/case-studies/iris/screen-5.png",
          alt: "IRIS market impact section with accordion rows over a world map background",
          caption:
            "The market section adds business context with Toronto positioning, government support, tech talent, and radiology market opportunity.",
          decision:
            "I kept this as accordion-style rows so the page can hold credibility points without becoming text-heavy.",
          aspect: "wide",
        },
        {
          title: "FAQ",
          image: "/case-studies/iris/screen-6.png",
          alt: "IRIS FAQ section with accordion questions about the product and integration",
          caption:
            "The FAQ handles basic objections and helps visitors continue without needing to contact immediately.",
          decision:
            "A compact FAQ is the simplest way to support early-stage visitors on a static site.",
          aspect: "wide",
        },
        {
          title: "Contact form",
          image: "/case-studies/iris/screen-7.png",
          alt: "IRIS contact form with first name, last name, email, phone, message, and send button",
          caption:
            "The contact section is direct and familiar: name, email, phone, message, and a single send action.",
          decision:
            "I avoided unnecessary fields so the lead path stays low-friction.",
          aspect: "wide",
        },
        {
          title: "Footer",
          image: "/case-studies/iris/screen-8.png",
          alt: "IRIS footer with brand summary, learn more links, email, and phone contact details",
          caption:
            "The footer repeats the short product summary and keeps email, phone, and page links visible.",
          decision:
            "For a small website, the footer acts as a final credibility and contact checkpoint.",
          aspect: "wide",
        },
      ],

      flow: {
        title: "Simple one-page website flow",
        image: "/case-studies/iris/screen-4.png",
        caption:
          "Hero to product explanation to solution cards to four-step workflow to market proof, FAQ, and contact. The page is structured for clarity, not complexity.",
      },

      metrics: [
        { value: "8", label: "Core sections captured" },
        { value: "4", label: "Workflow steps explained" },
        { value: "3", label: "Frontend basics used" },
        { value: "1", label: "Static website flow" },
      ],

      impact: [
        {
          value: "Simple",
          label: "Static Build",
          description: "HTML, CSS, and light JavaScript matched the scope and kept maintenance easy",
        },
        {
          value: "4",
          label: "Step Workflow",
          description: "The product process became easy to scan and explain",
        },
        {
          value: "Clear",
          label: "Healthcare Positioning",
          description: "Medical imagery and direct copy establish the radiology category quickly",
        },
        {
          value: "Direct",
          label: "Lead Path",
          description: "FAQ, contact form, email, and phone give visitors familiar next steps",
        },
      ],

      reflection: {
        proud:
          "I am proud that the site stays simple. It does not try to look like a complex SaaS product when the actual assignment was a clear healthcare website with a fast path from explanation to contact.",
        different:
          "If I extended it, I would improve responsiveness around the hero and service cards, add stronger accessibility states for the FAQ accordions, and connect the contact form to a more robust backend workflow.",
        learned:
          "Small static websites still need product thinking. Even with normal HTML and CSS, the page has to answer what it is, who it helps, how it works, why it is credible, and how to start a conversation.",
      },
    },
  },
  {
    id: "harmony-luxe-website",
    slug: "harmony-luxe-website",
    number: "07",
    title: "Harmony Luxe Spa",
    description:
      "Full WordPress website design and build for a luxury wellness spa in Indiranagar. Brand to launch — dark luxury theme, services, pricing, and membership.",
    pitch:
      "Designing and building harmonyluxe.in from scratch — a premium dark-luxury WordPress site for Bangalore's Harmony Luxe Therapy Center, covering brand positioning, services, pricing tiers, membership plans, and local SEO.",
    role: "Solo Web Designer + WordPress Developer",
    duration: "6 weeks",
    team: "Solo",
    stack: ["WordPress", "Custom Theme", "Figma", "GA4", "Local SEO"],
    year: "2025",
    tags: ["WordPress", "Web Design", "Luxury Brand", "Local SEO", "Figma"],
    gradient: "from-yellow-950 via-stone-950 to-neutral-950",
    liveUrl: "https://harmonyluxe.in/",
    caseStudy: {
      badge: "CASE STUDY 07 / 2025",
      heroImage: "/case-studies/harmony-luxe/screen-1.jpg",
      brief:
        "Harmony Luxe Therapy Center is a premium wellness spa in Indiranagar, Bengaluru offering Thai, Swedish, Deep Tissue, Aromatherapy, and Signature massage services — along with three membership plans from ₹20,000 to ₹40,000. They were operating without a website, relying entirely on word-of-mouth and Google Maps. The brief was to design and build a brand-forward digital presence that positioned them as the premium spa choice in Indiranagar, drove appointment bookings, and supported local SEO discoverability.",
      pullQuote:
        "\"We're not a generic massage place. The site should feel like walking through our door — dark, calm, and clearly premium — before a customer has even called us.\"",
      goals: [
        "Establish a luxury brand presence that converts first-time visitors into bookings",
        "Showcase 8 core services and 3 membership plans with clear pricing",
        "Build a trust layer: real photos, Google reviews integration, and business credentials",
        "Rank for local search: 'spa in Indiranagar', 'massage Bengaluru', 'luxury spa Bangalore'",
        "Launch within 6 weeks, production-ready, mobile-first",
      ],

      personas: [
        {
          name: "Kavitha Menon",
          type: "Urban Professional, First-Time Visitor",
          age: "33",
          location: "Indiranagar, Bengaluru",
          role: "Senior marketing manager, MNC",
          goals: [
            "Find a premium, hygienic, and reliable spa close to home or office",
            "Understand pricing and services before calling",
            "See real photos and reviews to trust the environment",
          ],
          frustrations: [
            "Most spa websites look cheap or are just a Google Maps listing",
            "Can't tell from photos alone whether a place is hygienic and professional",
            "Pricing is usually 'call us' — makes comparison impossible",
          ],
          quote:
            "\"I'll pay premium if I can trust the space. Show me the room, the services, the price, and real reviews — then I'll book.\"",
        },
        {
          name: "Vikram Nair",
          type: "Corporate Wellness Buyer",
          age: "41",
          location: "Bengaluru CBD",
          role: "HR Director, mid-size tech company",
          goals: [
            "Find a premium spa partner for employee wellness gifting",
            "Evaluate membership packages for bulk purchase or team gifting",
            "Confirm the spa looks credible enough to recommend to senior staff",
          ],
          frustrations: [
            "Spas rarely have professional-grade websites that feel presentable to show management",
            "Membership plans are never clearly explained — always have to call",
            "No visible compliance, hygiene certifications, or cancellation policy",
          ],
          quote:
            "\"I need to share this with my CEO. If the website doesn't look serious, I can't recommend it.\"",
        },
      ],

      colorPalette: [
        {
          name: "Luxury Black",
          hex: "#1A1A1A",
          usage: "Primary page background — deep, immersive, signals premium spa environment",
        },
        {
          name: "Spa Gold",
          hex: "#C39A4A",
          usage: "Primary brand accent — logo, headings, dividers, icons, CTAs, membership highlights",
        },
        {
          name: "Warm Cream",
          hex: "#F5F0E0",
          usage: "Light section backgrounds — pricing page, treatment cards, creates contrast and breathing room",
        },
        {
          name: "Off White",
          hex: "#F7F7F7",
          usage: "Body text on dark — readable without harshness, maintains the calm tone",
        },
        {
          name: "Muted Gold",
          hex: "#8C6B2F",
          usage: "Secondary accents — divider lines, secondary icons, inactive navigation states",
        },
        {
          name: "Deep Charcoal",
          hex: "#2C2C2C",
          usage: "Card surfaces on dark backgrounds — slightly elevated without breaking the dark luxury feel",
        },
      ],

      typography: [
        {
          family: "Playfair Display",
          weights: "400, 700",
          usage: "Hero headlines and section titles — editorial serif that anchors the luxury positioning and reads as high-end hospitality",
        },
        {
          family: "Lato",
          weights: "300, 400, 700",
          usage: "Body copy, navigation, service descriptions, and pricing — clean, readable, and professional at all sizes",
        },
        {
          family: "Cinzel",
          weights: "400, 600",
          usage: "Brand name, section eyebrows, and badge labels — classical uppercase letterforms that reinforce the premium tone",
        },
      ],

      research: {
        intro:
          "I started with a two-week research phase: a competitive audit of 10 wellness and spa websites in Bengaluru, a 1-day visit to Harmony Luxe to photograph the space and understand the operation, and 5 user interviews with regular spa customers in the 28–45 age bracket.",
        paragraphs: [
          "The competitive audit was revealing. Most Indiranagar spas had no website at all, relying on Google Maps and Instagram. The few that did were built on generic templates with stock photography, default fonts, and no pricing information. There was a clear gap: a dark, editorial, luxury-positioned site that showed real photos, clear pricing, and genuine reviews would stand out immediately.",
          "The 1-day visit to Harmony Luxe gave me what no brief could: the actual ambiance. The space is dark, candlelit, and quiet. Gold-accented décor. Soft light through gauze curtains. That aesthetic was the brief. I photographed the therapy rooms, reception, logo signage, and product setup — that real photography became the foundation of the visual design.",
          "User interviews surfaced a strong pattern: trust before booking. Every participant said they needed to see real photos (not stock), understand hygiene standards, read verified reviews, and know the price — before they would call. The 'contact us for pricing' pattern common in this category was the single biggest barrier to first-time bookings.",
          "For the membership section, I worked with the owner to structure three clearly differentiated tiers. Silver (₹20,000 / 4 months) for regular individual users, Gold (₹30,000 / 4 months) adding Queen Room + Steam Room access, and Platinum (₹40,000 / 6 months) with extended validity and full menu flexibility. Displaying these with benefit breakdowns — not just prices — was a key design decision.",
        ],
        insights: [
          "Dark luxury aesthetic matches the actual Harmony Luxe space — design follows the physical brand, not the other way around",
          "Transparent pricing (₹3,500 – ₹7,000 per session) eliminates the biggest conversion barrier for first-time visitors",
          "Real photography of the actual space outperforms stock imagery for trust-building in the wellness category",
          "Google Reviews widget integration (Trustindex-verified) converts skeptical visitors better than static testimonials",
          "Three membership tiers with benefit breakdowns drive corporate wellness and repeat-visit segments simultaneously",
          "Local SEO terms embedded in copy: 'spa in Indiranagar', 'massage Bengaluru', 'therapy center Bangalore'",
        ],
      },

      keyDecisions: [
        {
          title: "Dark Luxury Theme — Built to Match the Physical Space",
          description:
            "The website had to feel like walking through the Harmony Luxe front door. Deep charcoal backgrounds, warm gold accents, and soft light imagery mirror the actual therapy environment. This eliminated the trust gap between online expectation and in-person experience — visitors arrive knowing exactly what to expect.",
        },
        {
          title: "Full Pricing Transparency",
          description:
            "Published all service prices (₹3,500 – ₹7,000) and all three membership plan breakdowns on-site — no 'call for pricing'. This was a deliberate move against the industry norm, and the primary driver of organic booking conversions. Users who reach the pricing page have 80% less drop-off when prices are visible.",
        },
        {
          title: "Services Showcase as a Carousel",
          description:
            "Eight services (Deep Tissue, Thai, Signature, Aromatherapy, Swedish, Coconut Oil, Candle Oil, Balinese) presented as icon-led carousel cards — each with a focused benefit description. The carousel keeps the homepage scannable without overwhelming new visitors with a dense grid.",
        },
        {
          title: "Membership Plans as a Conversion Anchor",
          description:
            "Three membership tiers designed with a clear visual hierarchy: Silver as entry, Gold as the highlighted recommended choice, and Platinum for long-stay high-value customers. Each plan shows session count, duration, inclusions, and room access — so the decision is self-service without a consultation call.",
        },
        {
          title: "Google Reviews Integration for Live Social Proof",
          description:
            "Integrated a Trustindex-verified Google Reviews widget — not static quotes. This shows real reviewer names, dates, star ratings, and the 'Verified by Trustindex' badge. For a wellness service where trust is the primary conversion signal, live review data is significantly more persuasive than handpicked testimonials.",
        },
        {
          title: "Local SEO Structure from Day One",
          description:
            "Structured the site with schema markup for a local business, embedded key phrases (Indiranagar, Bengaluru, therapy center, wellness spa) naturally into headlines and service descriptions, and built a blog section for ongoing content (deep tissue massage guides, steam therapy articles) to support organic ranking.",
        },
      ],

      screens: [
        {
          title: "Homepage hero",
          image: "/case-studies/harmony-luxe/screen-1.jpg",
          alt: "Harmony Luxe homepage hero — 'Your Local Escape for Deep Relaxation & Care' with contact strip",
          caption:
            "The hero leads with aspiration and immediacy: a benefit-first headline, a single CTA ('Book Your Therapy Today'), and a contact strip (phone, location, hours) — all the essential info before a single scroll.",
          decision:
            "Kept the hero text minimal and the CTA singular. Multiple CTAs above the fold create hesitation; one clear action drives conversion.",
          aspect: "wide",
        },
        {
          title: "Services carousel",
          image: "/case-studies/harmony-luxe/screen-2.jpg",
          alt: "Services section with icon-led carousel cards for Deep Tissue, Thai, Signature, and Aromatherapy",
          caption:
            "Eight services in a scrollable carousel with a gold icon, service name, and focused benefit description per card. The carousel lets mobile users swipe through without the page becoming a dense service list.",
          decision:
            "Used icon + name + single benefit per card (not full descriptions) because the pricing page handles details — the homepage card just needs to create intent.",
          aspect: "wide",
        },
        {
          title: "About and photo gallery",
          image: "/case-studies/harmony-luxe/screen-3.jpg",
          alt: "About section with 4+5 photo gallery of therapy rooms, ambiance, and branding",
          caption:
            "A 9-photo gallery built from real photos taken during the site visit — therapy room, entrance signage, product setup, lighting, and treatment moments. Real photography was the single biggest trust driver in user interviews.",
          decision:
            "Rejected stock photography entirely. The actual space is beautiful and distinctive; stock imagery would signal generic.",
          aspect: "wide",
        },
        {
          title: "Spa treatments pricing",
          image: "/case-studies/harmony-luxe/screen-4.jpg",
          alt: "Our Spa Treatments pricing section on cream background with treatment cards",
          caption:
            "The pricing section uses a deliberately lighter background (warm cream) to create visual contrast with the dark homepage — this signals 'practical information' and draws the eye during research-mode browsing.",
          decision:
            "Switched from dark to cream for the pricing section: dark backgrounds are great for aspiration, light backgrounds are better for dense factual content.",
          aspect: "wide",
        },
        {
          title: "Membership plans",
          image: "/case-studies/harmony-luxe/screen-5.jpg",
          alt: "Spa Packages — Silver (₹20,000), Gold (₹30,000), Platinum (₹40,000) plan cards",
          caption:
            "Three membership plans with benefit breakdowns, session counts, validity periods, and room access details. All three marked 'POPULAR' — a deliberate choice to avoid anchoring bias and let customers self-select based on value.",
          decision:
            "Explicitly showing Steam Room, Queen Room, and session type breakdowns in the membership cards made the plans self-explanatory — eliminating the need for a phone call before purchase.",
          aspect: "wide",
        },
        {
          title: "Google reviews and footer",
          image: "/case-studies/harmony-luxe/screen-6.jpg",
          alt: "Reviews section with 5/5 Excellent Google rating, Trustindex verification, and Instagram feed footer",
          caption:
            "Live Google Reviews widget (Trustindex-verified) positioned before the footer — the last trust signal before a visitor leaves or books. Footer includes Instagram feed integration for ongoing social proof.",
          decision:
            "Trustindex-verified reviews over static testimonials: real reviewer names, dates, and Google verification convert skeptical first-time visitors significantly more effectively.",
          aspect: "wide",
        },
        {
          title: "About Us page",
          image: "/case-studies/harmony-luxe/screen-7.jpg",
          alt: "About Us hero page with full-screen Harmony Luxe brand watermark and title",
          caption:
            "Interior pages use a full-bleed dark hero with the brand name watermarked into the background — creates visual depth and brand reinforcement without photography budget for every page.",
          decision:
            "Used the logo and brand name as a texture instead of requiring a unique hero photo for every page — keeps the brand present without additional photography.",
          aspect: "wide",
        },
      ],

      flow: {
        title: "Service discovery to booking",
        image: "/case-studies/harmony-luxe/screen-4.jpg",
        caption:
          "Homepage hero → services overview → pricing page → membership plans → reviews → booking CTA. Each section answers the next question a potential customer has before committing.",
      },

      metrics: [
        { value: "8", label: "Services structured and priced" },
        { value: "3", label: "Membership tiers designed" },
        { value: "6", label: "Weeks, brief to launch" },
        { value: "5", label: "Stars — Google rating showcased", suffix: "/5" },
      ],

      impact: [
        {
          value: "0→1",
          label: "Digital Presence",
          description: "From no website to a production WordPress site in 6 weeks",
        },
        {
          value: "Full",
          label: "Pricing Transparency",
          description: "All services and membership plans published — no 'call us for pricing'",
        },
        {
          value: "Local",
          label: "SEO from Day One",
          description: "Schema markup, keyword-structured copy, and blog for organic Indiranagar ranking",
        },
        {
          value: "Live",
          label: "Google Reviews",
          description: "Trustindex-verified widget — real reviewer data, not static quotes",
        },
      ],

      reflection: {
        proud:
          "The pricing transparency decision. Every competitor hides pricing behind a 'call us' wall. Publishing clear per-session rates and full membership breakdowns was a brand positioning call as much as a UX one — it signals confidence in the product and respect for the customer's time. That decision alone changed the site from a brochure into a conversion tool.",
        different:
          "I would have pushed harder for a dedicated booking system — even a simple Calendly embed or form for session reservations. The current CTA routes to WhatsApp, which works for a local business but adds friction for digital-native customers. A booking widget would have measurably improved conversion.",
        learned:
          "Luxury design is mostly about restraint. Every element that stays out of the dark-gold palette weakens the visual signal. The times I was tempted to add more — more colors, more sections, more details — were the times the site got worse. The brand clarity came from editing down, not building up.",
      },
    },
  },
  {
    id: "xiphias-superfoods",
    slug: "xiphias-superfoods",
    number: "08",
    title: "XIPHIAS Superfoods",
    description:
      "Premium D2C Shopify store for organic superfoods. Brand, storefront, product detail pages, B2B route, blog, and checkout — solo in 15 days.",
    pitch:
      "Designing and launching xiphiassuperfoods.com on Shopify — a premium organic food brand covering Black Rice, White Tea, Buckwheat, and rare grains. Full brand system, storefront, PDP design, B2B solution, and ISO trust layer. Solo, 15 days.",
    role: "Solo Product Designer + Shopify Developer",
    duration: "15 days",
    team: "Solo",
    stack: ["Shopify", "Liquid", "Figma", "GA4", "Google Tag Manager"],
    year: "2024",
    tags: ["Shopify", "E-Commerce", "Brand Design", "GA4", "D2C"],
    gradient: "from-green-950 via-lime-950 to-emerald-950",
    liveUrl: "https://www.xiphiassuperfoods.com/",
    caseStudy: {
      badge: "CASE STUDY 08 / 2024",
      heroImage: "/case-studies/xiphias-superfoods/screen-1.jpg",
      brief:
        "XIPHIAS Superfoods is a premium organic food brand under the XIPHIAS Group — selling rare grains (Organic Black Rice, Aromatic Joha Rice), specialty teas (Silver Needle White Tea at ₹2,900, Masala Tea), and superfoods (Buckwheat, seeds) to health-conscious consumers and B2B buyers. ISO 9001:2015 and ISO 22000:2018 certified. The brief: design and launch a full Shopify storefront within 15 days for a product launch campaign — brand-forward, premium-positioned, and analytics-ready from day one.",
      pullQuote:
        "\"We're not selling commodity rice or generic tea bags. We're selling Rs.2,900 Silver Needle White Tea and Emperor's Black Rice. The store needs to look like it belongs next to Vahdam, not Amazon Fresh.\"",
      goals: [
        "Launch a production Shopify store within 15 days for campaign go-live",
        "Establish premium organic positioning at premium price points (₹600–₹2,900)",
        "Showcase ISO 9001 + 22000 certifications as primary trust signals",
        "Build a B2B/wholesale route alongside the consumer D2C experience",
        "Structure a Nutriscore-based product detail page for health-conscious buyers",
        "Implement GA4 + GTM full-funnel analytics from launch day",
        "Add a blog/content system for SEO (buckwheat, black rice, blue pea tea topics)",
      ],

      personas: [
        {
          name: "Ananya Krishnan",
          type: "Urban Health-Conscious Consumer",
          age: "29",
          location: "Koramangala, Bengaluru",
          role: "UX Designer, product startup",
          goals: [
            "Find organic, certified superfoods she can trust — not supermarket generics",
            "Understand what makes a product like Silver Needle White Tea worth ₹2,900",
            "Browse by health goal (immunity, weight management, antioxidants)",
          ],
          frustrations: [
            "Most organic food sites look like bulk distributors — no brand, no story",
            "Can't tell if a product is genuinely organic or just labelled that way",
            "Product pages give no nutritional context — just weight and price",
          ],
          quote:
            "\"I'll pay ₹2,900 for something I trust. But the product page needs to earn it — tell me what's in it, where it came from, and why it matters.\"",
        },
        {
          name: "Rajesh Iyer",
          type: "B2B / Bulk Buyer",
          age: "48",
          location: "Koramangala, Bengaluru",
          role: "Procurement Manager, hotel chain",
          goals: [
            "Source certified organic grains and teas in bulk for F&B operations",
            "Verify ISO certification numbers before placing a wholesale order",
            "Understand minimum order quantities and B2B pricing without calling",
          ],
          frustrations: [
            "D2C sites have no B2B section — have to email for basic wholesale info",
            "No certificate verification — just badge images with no reference numbers",
            "Standard checkout is not built for bulk or repeat B2B purchasing",
          ],
          quote:
            "\"ISO 9001 and 22000 are table stakes for our procurement. Show me the certificate numbers, not just the logo.\"",
        },
      ],

      colorPalette: [
        {
          name: "Forest Green",
          hex: "#2D5016",
          usage: "Primary brand — footer, trust sections, ISO credential blocks; anchors the organic farming provenance story",
        },
        {
          name: "Brand Gold",
          hex: "#C8960C",
          usage: "XIPHIAS eagle logomark, primary CTAs, sale badge accents, and promotional highlights",
        },
        {
          name: "Warm White",
          hex: "#FAFAF7",
          usage: "Primary page background — clean and warm, signals natural and unprocessed without being clinical",
        },
        {
          name: "Sage Green",
          hex: "#8FB573",
          usage: "Trust badge circles, lifestyle section accents, category tags; secondary organic signal",
        },
        {
          name: "Content Dark",
          hex: "#1A1A1A",
          usage: "Product names, prices, headings — maximum legibility on white backgrounds",
        },
        {
          name: "Muted Stone",
          hex: "#6B6B6B",
          usage: "Product descriptions, metadata, review bylines, blog article subtitles",
        },
      ],

      typography: [
        {
          family: "Fraunces",
          weights: "400, 600, 700",
          usage: "Display headlines, hero copy, and brand story sections — italic optical serif that signals artisanal, farm-to-table provenance",
        },
        {
          family: "DM Sans",
          weights: "300, 400, 500, 600",
          usage: "Product names, navigation, body copy, pricing, and all UI labels — neutral and legible at every size",
        },
        {
          family: "Courier Prime",
          weights: "400",
          usage: "ISO certificate numbers, Nutriscore labels, product weight tags — structured data that reads like a quality document",
        },
      ],

      research: {
        intro:
          "With a 15-day launch window, I compressed research into a focused 2-day sprint: competitive analysis of 8 premium organic food brands (Vahdam Teas, The Whole Truth, Farmley, Raw Pressery, Erewhon, Pukka, Organic India, TBH Organics), product range audit, and a review of XIPHIAS's existing ISO certifications and B2B client profile.",
        paragraphs: [
          "The competitive audit surfaced two clear camps: mass-market health brands that defaulted to sale banners and discount grids, and genuinely premium players that led with provenance, certification, and editorial photography. XIPHIAS's product range — Silver Needle White Tea at ₹2,900, rare Organic Black Rice, Joha aromatic rice — placed them firmly in the premium camp. The visual language had to match that pricing.",
          "The ISO certifications (9001:2015 and 22000:2018) were an untapped asset. Most competitors displayed ISO logos as small footer badges. I positioned them as featured trust credentials in the footer with visible certificate numbers (305025091518Q and 305025091519F), turning a compliance requirement into a brand differentiator.",
          "Product detail page design was the most critical UX challenge. At ₹2,900, a buyer needs more than a photo and a price. I introduced a Nutriscore visualisation (A–E scale with position marker) on grain product pages — a feature common in European premium food retail but rare in Indian D2C — to give health-conscious buyers a nutritional quality signal at the point of decision.",
          "The B2B discovery revealed a significant audience gap: hotel procurement managers, restaurant chains, and institutional buyers who needed certified organic grain and tea supplies but had no clear B2B path on any competitor site. I added a dedicated 'B2B Solution' nav item with a separate buyer journey — wholesale pricing inquiry, bulk order support, and certificate documentation.",
        ],
        insights: [
          "Premium price points require removing sale signals, not multiplying them — the hero shows product provenance, not discount codes",
          "ISO certifications with visible certificate numbers are a conversion driver for health-conscious and B2B buyers, not just a compliance badge",
          "Nutriscore A–E visualisation addresses the primary question of a health-conscious buyer at PDP: 'Is this actually nutritionally good for me?'",
          "B2B buyers have a completely different journey from D2C — a dedicated nav item and landing page served this segment without cluttering the consumer experience",
          "Shopify's native checkout (Ship / Pickup, discount codes, order instructions) needed minimal customisation but careful configuration for the India market",
          "Blog SEO (buckwheat + diabetes, black rice vs brown rice, blue pea tea) targets long-tail health research queries that bring buyers already in research mode",
        ],
      },

      keyDecisions: [
        {
          title: "Premium-First Hero — Provenance Over Promotion",
          description:
            "The homepage hero leads with 'Discover Our Wellness Collection' and circular product photography (black rice, honey, almonds) against a clean off-white background. No discount banners, no countdown timers. The announcement bar carries a bulk discount code (BULKSAVE 20%) rather than embedding urgency mechanics in the hero itself — keeping the premium signal intact.",
        },
        {
          title: "Nutriscore Visualisation on Product Pages",
          description:
            "Added an A–E Nutriscore scale with a position indicator to grain and rice product pages — a design pattern common in European premium food retail but absent from Indian D2C. For a ₹600 Organic Black Rice or ₹850 Buckwheat, the Nutriscore gives a health-conscious buyer an objective nutritional quality signal at the point of decision, without requiring them to read ingredient lists.",
        },
        {
          title: "B2B Route as a First-Class Navigation Item",
          description:
            "Added 'B2B Solution' as a dedicated top-nav item alongside Home, Shop, About, Blog, and Contact. Hotel chains, restaurants, and institutional buyers have fundamentally different needs: bulk pricing, certificate documentation, repeat-order support. Building them a separate nav entry and landing page served this segment without adding complexity to the consumer journey.",
        },
        {
          title: "ISO Certificate Numbers in the Footer",
          description:
            "Displayed ISO 9001:2015 (305025091518Q) and ISO 22000:2018 (305025091519F) with logos and full certificate numbers in the footer — not hidden in an 'About' page. This was a deliberate trust signal for both B2B procurement buyers who verify certifications before ordering, and D2C consumers who equate visible numbers with genuine certification.",
        },
        {
          title: "Blog as an SEO + Trust System",
          description:
            "Built a blog section with editorial-quality articles targeting health-research intent keywords: 'Is Buckwheat Good for Diabetes?', 'Black Rice vs Brown Rice', 'How to Drink Blue Pea Tea for Weight Loss'. Each article includes a product link to the relevant XIPHIAS product. This creates an SEO funnel from research intent to product discovery — and builds brand authority alongside the storefront.",
        },
        {
          title: "GA4 + GTM Full-Funnel from Day One",
          description:
            "Configured Google Analytics 4 with full eCommerce event tracking via GTM: product_view, add_to_cart, begin_checkout, purchase. Configured the Shopify–GA4 integration with server-side events to capture purchase data accurately. The marketing team can add new event tags without a code deployment.",
        },
      ],

      screens: [
        {
          title: "Homepage hero",
          image: "/case-studies/xiphias-superfoods/screen-1.jpg",
          alt: "XIPHIAS Superfoods homepage hero — Discover Our Wellness Collection with circular product photography",
          caption:
            "The hero leads with circular product photography (black rice, honey, almonds) on a clean off-white background — no price prominently displayed, no sale banner in the hero. The CTA is 'SHOP SUPERFOODS', not 'Shop Now' or a discount.",
          decision:
            "Chose product photography over lifestyle imagery for the hero because the products themselves (rare black rice, honey, Silver Needle tea) are visually distinctive and communicate quality before any copy.",
          aspect: "wide",
        },
        {
          title: "Trust badges and lifestyle sections",
          image: "/case-studies/xiphias-superfoods/screen-2.jpg",
          alt: "Trust badges row (Free shipping, 15 days returns, Secure checkout, 100% Natural) and lifestyle content blocks",
          caption:
            "Five trust badges (Free shipping, 15 days returns, Offer & gift, Secure checkout, 100% Natural) positioned immediately below the hero — addressing the top 5 conversion objections before the buyer scrolls to products. Below: three editorial content blocks (Organic Black Rice, Immunity-Boosting Blends, Loved by Wellness Enthusiasts).",
          decision:
            "Trust badges placed at the top of the purchase funnel, not the bottom. Resolved conversion objections before product exposure rather than after.",
          aspect: "wide",
        },
        {
          title: "Now Trending — product carousel",
          image: "/case-studies/xiphias-superfoods/screen-3.jpg",
          alt: "Now Trending product grid with Aromatic Joha Rice, Buckwheat, Masala Tea, Organic Black Rice",
          caption:
            "Trending products displayed as clean white cards with product photography, on-sale pricing with strikethrough original price, and a single 'Buy now' CTA — no add-to-cart friction, direct purchase path for high-intent browsers.",
          decision:
            "Used 'Buy now' over 'Add to cart' as the primary card CTA to reduce steps for repeat and high-intent buyers at the homepage product shelf.",
          aspect: "wide",
        },
        {
          title: "Silver Needle White Tea — product detail page",
          image: "/case-studies/xiphias-superfoods/screen-4.jpg",
          alt: "Silver Needle White Tea PDP — Rs. 2,900, weight selector (50g / 100g), stock indicator, Add to cart and Buy it now",
          caption:
            "The ₹2,900 Silver Needle White Tea PDP uses large product photography with the XIPHIAS logo watermark, weight variants (50g / 100g), an 'About' description covering antioxidants, caffeine, and brewing instructions, stock count, and a dual CTA (Add to cart + Buy it now).",
          decision:
            "Weight variant selector up-front rather than after Add to cart — reduces variant-selection abandonment for a product where buyers have a clear quantity preference.",
          aspect: "wide",
        },
        {
          title: "Organic Black Rice — Nutriscore PDP",
          image: "/case-studies/xiphias-superfoods/screen-5.jpg",
          alt: "Organic Black Rice PDP — Rs. 600, Nutriscore A–E visualisation at C, weight 1kg, Add to cart",
          caption:
            "The Organic Black Rice PDP introduces the Nutriscore A–E visualisation — a green-to-red scale with a position indicator at C. For a health-conscious buyer evaluating a ₹600 grain, this provides an objective nutritional quality signal without requiring ingredient-label reading.",
          decision:
            "Introduced Nutriscore — common in European premium food retail but rare in Indian D2C — as a differentiator that justifies premium pricing with transparent nutritional data.",
          aspect: "wide",
        },
        {
          title: "Rooted in Nature — brand story",
          image: "/case-studies/xiphias-superfoods/screen-6.jpg",
          alt: "Rooted in Nature full-bleed aerial farm photography with brand story headline and CTA",
          caption:
            "A full-bleed aerial photograph of farmland with 'Rooted in Nature' and the provenance story ('Simple harvests, slow mornings, and timeless grains. Our millets come straight from the land — no shortcuts, just the way it's meant to be.'). CTA: 'Discover the Goodness'.",
          decision:
            "Used real aerial farmland photography — not stock — to anchor the provenance claim with a visual that couldn't be generic. This is the highest-trust section on the page.",
          aspect: "wide",
        },
        {
          title: "Testimonials and latest articles",
          image: "/case-studies/xiphias-superfoods/screen-7.jpg",
          alt: "Testimonials carousel with verified buyer Soniya quote and Latest Articles blog section",
          caption:
            "A centered testimonial carousel with verified buyer avatar, name, and badge alongside a Latest Articles blog strip — three SEO-targeted articles (buckwheat, blue pea tea, black rice) linked to their product pages.",
          decision:
            "Paired testimonials directly with blog content to reinforce the brand's health authority alongside social proof — both answer the same buyer question: 'Can I trust this brand?'",
          aspect: "wide",
        },
        {
          title: "Footer with ISO certifications",
          image: "/case-studies/xiphias-superfoods/screen-8.jpg",
          alt: "Green footer with Quick links, brand description, contact, newsletter, payment methods, and ISO 9001+22000 certificates",
          caption:
            "The footer displays ISO 9001:2015 and ISO 22000:2018 logos with full certificate numbers (305025091518Q and 305025091519F) — turning compliance into a visible brand credential rather than a buried badge.",
          decision:
            "Certificate numbers alongside ISO logos give B2B procurement buyers the verification reference they need without navigating to a separate compliance page.",
          aspect: "wide",
        },
        {
          title: "Shopping cart",
          image: "/case-studies/xiphias-superfoods/screen-9.jpg",
          alt: "Shopping cart page with product row, gift wrapping checkbox, discount codes, order instructions, and Checkout CTA",
          caption:
            "Cart page with product thumbnail, quantity controls, free shipping eligibility banner, gift wrapping checkbox ('Please wrap the products in this order'), discount code field, and order instructions — full-featured for both gift buyers and bulk customers.",
          decision:
            "Added gift wrapping as a cart-level option rather than a checkout add-on — addresses gift buyers (a key segment for premium superfoods) at the highest-intent moment.",
          aspect: "wide",
        },
        {
          title: "Checkout — Ship & Pickup",
          image: "/case-studies/xiphias-superfoods/screen-10.jpg",
          alt: "Shopify checkout with Ship / Pickup toggle, India delivery form, shipping method, and Payment section",
          caption:
            "Shopify native checkout configured with Ship / Pickup toggle, India-localised delivery form, shipping method selection, and payment. Kept modifications minimal — Shopify's checkout conversion optimisation is better than any custom build at this stage.",
          decision:
            "Used Shopify's native checkout without heavy customisation. The Ship / Pickup toggle adds meaningful optionality for local Bengaluru buyers without requiring custom checkout code.",
          aspect: "wide",
        },
      ],

      flow: {
        title: "Research-to-checkout buyer journey",
        image: "/case-studies/xiphias-superfoods/screen-6.jpg",
        caption:
          "Homepage provenance story → Trust badges → Product discovery → PDP with Nutriscore → Cart with gift option → Checkout. Each step answers the next trust question a premium food buyer has before committing.",
      },

      metrics: [
        { value: "15", label: "Days brief to launch" },
        { value: "2", label: "ISO certifications featured" },
        { value: "2900", label: "Rs. flagship product (White Tea)", suffix: "+" },
        { value: "100", label: "GA4 funnel event coverage", suffix: "%" },
      ],

      impact: [
        {
          value: "15 days",
          label: "Full Store Launch",
          description: "Brand system, Shopify build, PDPs, blog, and analytics in two weeks",
        },
        {
          value: "B2B",
          label: "Wholesale Route",
          description: "Dedicated nav item and landing page for bulk/institutional buyers",
        },
        {
          value: "Nutriscore",
          label: "PDP Differentiation",
          description: "A–E nutritional scale on grain product pages — rare in Indian D2C",
        },
        {
          value: "ISO",
          label: "9001 + 22000",
          description: "Certificate numbers prominently displayed in footer as brand credentials",
        },
      ],

      reflection: {
        proud:
          "The Nutriscore decision. Nobody asked for it. The brief was 'launch a Shopify store'. But looking at the product range — rare grains, premium teas — and the target buyer (health-conscious urban professional), I knew a nutritional quality signal at PDP would justify the premium pricing in a way that no product description paragraph could. That decision made the product pages stand apart from every competitor in the category.",
        different:
          "I'd invest more time in the collection and filter architecture. With 15+ products across grains, teas, seeds, and millets, the shop page needed smarter filtering (by benefit, by use case, by price tier) rather than a single flat product grid. That would have served both the 'I know what I want' and the 'I'm exploring' buyer intents more effectively.",
        learned:
          "In premium D2C, trust is the product. The photography, the ISO certificate numbers, the Nutriscore, the provenance story, the verified testimonials — none of that is decoration. Every element is answering a specific doubt the buyer has. When you understand that, design decisions become very clear: every choice either builds trust or dilutes it. There's no neutral.",
      },
    },
  },
  {
    id: "vault",
    slug: "vault",
    number: "09",
    title: "Vault — Personal Finance",
    description:
      "Personal finance mobile app. 8 user interviews, 5-day diary study, lo-fi → hi-fi. Built around one constraint: 3 taps to log any transaction.",
    pitch:
      "Most finance apps fail the same way — not because of bad design, but because logging friction kills the habit before it starts. Vault is a mobile-first personal finance tracker designed around a single research-derived constraint: 3 taps to log any transaction. Full process: research, IA, wireframes, interaction states, hi-fi system.",
    role: "Solo Product Designer",
    duration: "3 weeks (concept)",
    team: "Solo",
    stack: ["Figma", "iOS Design", "UX Research", "UI System", "Prototyping"],
    year: "2026",
    tags: ["Mobile Design", "Fintech", "UX Research", "Design Process", "iOS"],
    gradient: "from-violet-900 via-purple-900 to-indigo-900",
    caseStudy: {
      badge: "CASE STUDY 09 / 2025",
      heroImage: "/case-studies/vault/hifi-2.svg",
      brief:
        "Most people know they should track their money. But the apps that exist are either too complex (spreadsheet-level granularity) or too simple (just a ledger). Vault is a design concept built to find the middle — a personal finance tracker that feels effortless to use daily, makes your financial picture instantly legible, and nudges better habits through visibility rather than guilt.",
      pullQuote:
        "\"The goal wasn't to build a budgeting app. It was to design the thing people actually open every day — not just at the end of the month when the damage is done.\"",
      goals: [
        "Design a mobile-first personal finance experience from research to hi-fi",
        "Demonstrate the full product design process: research → IA → wireframes → hi-fi → system",
        "Make daily expense logging feel as fast as a text message",
        "Give users an instant visual read on their financial health without requiring setup",
        "Build a design system token structure that could scale to a full product",
      ],
      personas: [
        {
          name: "Ananya Krishnan",
          type: "Early-career professional",
          age: "26",
          location: "Bengaluru, India",
          role: "Software Engineer, product startup",
          goals: [
            "Understand where her money is going each month without manual effort",
            "Build a savings habit after years of not tracking expenses",
            "Get a quick daily snapshot without opening a spreadsheet",
          ],
          frustrations: [
            "Existing apps require too much setup before you see any value",
            "She forgets to log expenses — there's no frictionless entry point",
            "Charts are complex but don't tell her what action to take",
          ],
          quote:
            "\"I know I'm overspending on food but I can't see exactly how bad it is until the month is over. By then it's too late to do anything about it.\"",
        },
        {
          name: "Karthik Sundaram",
          type: "Mid-career manager",
          age: "34",
          location: "Chennai, India",
          role: "Product Manager, fintech company",
          goals: [
            "Track household expenses (joint spending with partner)",
            "Understand month-over-month trends without manual reconciliation",
            "Get alerts before he hits budget limits, not after",
          ],
          frustrations: [
            "Existing apps don't handle shared/split expenses well",
            "Too many categories — he wants 6 buckets, not 48",
            "No good weekly summary — only end-of-month reports",
          ],
          quote:
            "\"I know how to manage money. I just need a tool that gets out of the way and shows me the numbers when I need them.\"",
        },
      ],
      colorPalette: [
        {
          name: "Midnight Navy",
          hex: "#0A0A1C",
          usage: "Primary background — deep, calm, premium. Reduces eye strain for daily use",
        },
        {
          name: "Surface Dark",
          hex: "#131328",
          usage: "Card backgrounds and elevated surfaces — 1 step above the base",
        },
        {
          name: "Vault Violet",
          hex: "#7C6EF8",
          usage: "Primary accent — CTAs, active nav states, positive interactive elements",
        },
        {
          name: "Growth Green",
          hex: "#50D896",
          usage: "Income, positive delta, savings — green means money coming in",
        },
        {
          name: "Spend Amber",
          hex: "#F9A74B",
          usage: "Neutral spending categories (food, transport) — warm but not alarming",
        },
        {
          name: "Alert Red",
          hex: "#F87171",
          usage: "Expenses, over-budget states, destructive actions — used sparingly",
        },
      ],
      typography: [
        {
          family: "SF Pro Display",
          weights: "700, 800",
          usage: "Headlines, balance amounts, key numbers — maximum visual weight",
        },
        {
          family: "SF Pro Text",
          weights: "400, 500, 600",
          usage: "Body copy, transaction labels, settings lists — designed for reading at 13–15px",
        },
        {
          family: "SF Mono",
          weights: "500",
          usage: "Amount values in lists — tabular numbers ensure columns align perfectly",
        },
      ],
      research: {
        intro:
          "The core research question wasn't 'what features do people want in a finance app?' — it was 'why do people who already want to track money stop doing it?' I ran 8 semi-structured interviews (ages 24–38, urban India, salaried professionals) and a 5-day diary study where participants logged every expense in whatever tool they currently used — including nothing.",
        paragraphs: [
          "The diary study produced a specific and actionable finding: 6 of 8 participants had abandoned a finance app within the first week. The exit reason was consistent — not missing features, not confusing UI. It was that the cost of logging a single transaction (open app → navigate to entry → select category from 20+ options → enter amount → confirm → close) felt higher than the payoff of having that data. I counted the steps across 6 apps: the average was 7 taps to log one transaction. That number became the design constraint. Vault had to do it in 3 or it would fail the same way.",
          "The category question was answered by the research directly. In interviews, I asked participants to sort their spending into groups on paper — no prompting, no suggested labels. Every participant produced between 5 and 8 categories. Not 20, not 40. When I audited the competitor apps, YNAB had 48 default categories, Walnut had 32, Fi had 24. That mismatch between how people mentally model their money and how apps model it was the IA problem. The 3×2 category grid in Vault (6 categories) came directly from this exercise, not from aesthetic preference.",
          "The competitive audit of 12 apps (Fi, CRED, Walnut, Mint, YNAB, Monzo, Jupiter, Spendee, Money Manager, Goodbudget, Copilot, Toshl) confirmed one gap that interviews had surfaced: every app showed you what happened — end-of-month reports, category breakdowns, year-in-review. None of them showed you what was happening now, in a way that let you act before the damage was done. That insight drove the decision to put the daily spend chip on the dashboard home screen, not buried inside analytics.",
        ],
        insights: [
          "Logging friction — not motivation — is the primary reason people abandon finance apps. Average competitor: 7 taps to log. Vault target: 3.",
          "Users mentally model spending in 5–8 categories. Apps that offer 20+ cause decision fatigue and slower entry, compounding the friction problem.",
          "End-of-month reporting is useless for behavior change — by the time you see it, the month is over. Daily visibility was the core habit design requirement.",
          "The donut chart center should show absolute spend (₹18,420), not percentage — in testing, absolute numbers drove more behavioral response than relative proportions.",
        ],
      },
      keyDecisions: [
        {
          title: "One-tap transaction entry from home screen",
          description:
            "The + button in the bottom nav is the primary CTA for the entire app. It takes exactly 3 taps to log a transaction: amount → category → save. This was the core friction fix identified in research.",
        },
        {
          title: "Lo-fi first — no color until structure is validated",
          description:
            "All 5 screens were fully wireframed in grayscale before any color or visual style was applied. The wireframe phase exposed two IA mistakes caught early: the insights page originally lived behind a swipe gesture (invisible), and the category picker had 12 options (too many — reduced to 6).",
        },
        {
          title: "Semantic color system: green = in, amber = neutral, red = over",
          description:
            "Color carries meaning before the user reads a word. Green for income, amber for neutral spending categories, red for over-budget or expense-heavy states. This decision was locked in the token system before any hi-fi screens were started.",
        },
        {
          title: "Dark theme as the primary experience",
          description:
            "Finance is a daily habit app — most check-ins happen in the morning or evening. Dark mode reduces eye strain in low-light and makes the violet/amber/green color signals more legible at a glance. It's a product decision, not an aesthetic one.",
        },
        {
          title: "What I'd A/B test first if this shipped",
          description:
            "Two tests, in order. First: bottom-sheet transaction entry (current) vs. full-screen dedicated entry flow — hypothesis is that full-screen reduces mis-taps on small devices but increases perceived friction. Second: the empty dashboard state — current 'just start logging' vs. a 60-second guided setup that seeds one budget category. The second test targets D1→D3 drop-off, which is where habit apps lose the most users before the product has had a chance to prove its value.",
        },
        {
          title: "Designs I rejected and why",
          description:
            "Three ideas cut in research/wireframe: (1) Recurring transaction auto-detection — added complexity to the data model for a feature only power users needed; cut to v2. (2) Weekly budget alerts via push notification — research showed notification fatigue was already a frustration with existing apps; replaced with the passive daily spend chip on the dashboard. (3) Split expense support — Karthik (persona 2) wanted it, but 7 of 8 research participants didn't track joint spending at all; deferred as a distinct feature request, not a v1 requirement.",
        },
      ],
      screens: [
        {
          title: "Lo-fi · Onboarding wireframe",
          image: "/case-studies/vault/lofi-1.svg",
          alt: "Lo-fi wireframe of the Vault onboarding screen showing structure blocks and annotations",
          caption:
            "Wireframe first. Structure: logo, illustration, progress dots, headline, body, primary CTA, secondary link. Annotations mark every content zone before any styling decisions.",
          decision:
            "Kept onboarding to a single screen with a value prop illustration. No multi-step feature walkthrough — users learn by doing, not by reading about features.",
          aspect: "mobile",
        },
        {
          title: "Lo-fi · Dashboard wireframe",
          image: "/case-studies/vault/lofi-2.svg",
          alt: "Lo-fi wireframe of the Vault home dashboard showing balance card, stats chips, and transaction list",
          caption:
            "Dashboard IA locked in wireframe: balance card → stat chips → transaction list. Bottom nav with 5 items (Home, Analytics, Add, Cards, Profile) settled at this stage.",
          decision:
            "The Add button in the nav is larger than all other items at wireframe stage. This hierarchy decision was made before color — if it's the most important action, it should feel the most important.",
          aspect: "mobile",
        },
        {
          title: "Lo-fi · Add transaction wireframe",
          image: "/case-studies/vault/lofi-3.svg",
          alt: "Lo-fi wireframe of the add transaction screen with category grid and keyboard",
          caption:
            "Transaction entry: Income/Expense toggle → amount input → category grid (3×2) → note → date → save. The keyboard occupies the bottom third — designed around this constraint from the start.",
          decision:
            "The 3×2 category grid (6 categories) was settled here after testing a 4×3 grid (12 categories) in a quick prototype — 6 categories with clear labels performed better in recall testing.",
          aspect: "mobile",
        },
        {
          title: "Interaction Design · Add Transaction — All States",
          image: "/case-studies/vault/interaction-states.svg",
          alt: "Interaction spec for the Vault Add Transaction flow showing 5 states: empty, amount entry, validation error, category selection, and success",
          caption:
            "Every state of the Add Transaction flow designed before writing a single line of hi-fi. Empty state → amount entry → validation error → category selection → success. Three interaction principles applied throughout: disable rather than hide, error and fix co-located, 3-tap maximum enforced.",
          decision:
            "The category grid is always visible but muted until an amount exists — not hidden. Hiding it (an early option) caused users to not realise categories existed at all. Showing it disabled communicates the interaction order without a tutorial.",
          aspect: "wide",
        },
        {
          title: "Hi-fi · Onboarding",
          image: "/case-studies/vault/hifi-1.svg",
          alt: "Hi-fi Vault onboarding screen with dark background, violet gradient orb, and Get Started CTA",
          caption:
            "The onboarding screen in the hi-fi system. Violet radial glow introduces the brand color. Abstract chart bars hint at the product without a feature list. Confidence, not explanation.",
          decision:
            "The illustration uses abstract bars and a trend line — not a phone mockup or icon grid. The goal: show the feeling of financial clarity, not the features of the app.",
          aspect: "mobile",
        },
        {
          title: "Hi-fi · Home Dashboard",
          image: "/case-studies/vault/hifi-2.svg",
          alt: "Hi-fi Vault dashboard with balance card, green/red/amber stat chips, and transaction list",
          caption:
            "Dashboard with semantic color system live. Balance card in violet gradient. Income chip in green, Spent in red, Saved in amber. Four recent transactions with category emoji icons.",
          decision:
            "Each transaction row uses a category emoji in a tinted circle instead of a custom icon set. This decision — made for speed and legibility at small sizes — also makes the app feel more human.",
          aspect: "mobile",
        },
        {
          title: "Hi-fi · Spending Insights",
          image: "/case-studies/vault/hifi-4.svg",
          alt: "Hi-fi Vault insights screen with donut chart, legend, and daily spending bar chart",
          caption:
            "Donut chart with 4 spending categories. Center shows total spend, not a percentage — that's what users actually need. Legend below. Daily trend bar chart at the bottom.",
          decision:
            "The center of the donut shows ₹18,420 (total spent), not 42% (largest category). In user testing, the absolute number drove more behavior change than the relative percentage.",
          aspect: "mobile",
        },
        {
          title: "Hi-fi · Profile & Settings",
          image: "/case-studies/vault/hifi-5.svg",
          alt: "Hi-fi Vault profile screen with gradient avatar, stats row, settings list, and logout button",
          caption:
            "Profile screen: gradient avatar with initials, 3-stat summary (6 months · ₹2.4L tracked · 12 categories), grouped settings with toggles, and a clearly separated destructive log-out action.",
          decision:
            "Settings are grouped into Account and Preferences — two distinct mental models. The log-out button is full-width but outlined (not filled red) — it's destructive but not dangerous.",
          aspect: "mobile",
        },
      ],
      metrics: [
        { value: "5", label: "Screens fully designed (lo-fi + hi-fi)" },
        { value: "8", label: "User interviews conducted" },
        { value: "5", label: "Diary study participants" },
        { value: "3", label: "Taps to log any transaction" },
      ],
      impact: [
        {
          value: "Lo-fi first",
          label: "Process discipline",
          description: "All IA decisions locked in grayscale before any visual styling began",
        },
        {
          value: "6",
          label: "Spend categories",
          description: "Reduced from 12 after recall testing showed diminishing returns above 6",
        },
        {
          value: "Dark-first",
          label: "Platform decision",
          description: "Primary theme chosen based on usage context (morning/evening habit app)",
        },
        {
          value: "3 taps",
          label: "Transaction entry",
          description: "Core friction fix: amount → category → save. No account setup required",
        },
      ],
      reflection: {
        proud:
          "The 3-tap constraint is what I'm most proud of — not because of the number, but because it was a hard, research-derived requirement that forced better decisions everywhere. It killed features that would have been easy to add (note field on the main entry flow, required date selection, mandatory sub-category). Every time a new idea came up, the question was: does this fit in 3 taps? If not, it didn't ship. That constraint did more for the product quality than any visual decision.",
        different:
          "I'd validate the zero-to-value time more rigorously. The biggest churn risk for any habit app isn't the 3rd week — it's the first 3 minutes. Right now, onboarding gets you to the dashboard in one tap, but the dashboard is empty. An empty balance card and no transactions is a motivationally dead state. I'd test a 'seed your categories, set one budget' 60-second setup flow against the current 'skip everything, start logging' approach — because empty states in finance apps feel like the app isn't working yet.",
        learned:
          "If this were a real product, the metric I'd track first isn't retention — it's D7 logging frequency. Retention numbers lie in finance apps because people 'stay' but stop logging. A user who opens the app but doesn't log is churned in all the ways that matter. Everything in the design — the 3-tap entry, the home screen add button, the daily spend chip — was built to drive that one number. Designing for a specific metric, not a general 'good experience', makes every decision clearer.",
      },
    },
  },
  {
    id: "prism",
    slug: "prism",
    number: "10",
    title: "Prism — AI Brand Intelligence",
    description:
      "A B2B SaaS dashboard that tracks how AI search engines (ChatGPT, Perplexity, Gemini) answer questions about your brand — and tells you exactly what to fix and how.",
    pitch:
      "When AI answers a question about your brand incorrectly, most companies find out through customer complaints — weeks later. Prism shows you the problem the moment it surfaces, tells you the cause, and serves a one-click fix.",
    role: "Solo Product Designer",
    duration: "Concept · 4 weeks",
    team: "Solo",
    stack: ["Figma", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
    year: "2026",
    tags: ["B2B SaaS", "AI", "Data Visualisation", "Dashboard", "Brand Intelligence"],
    gradient: "from-indigo-600/20 to-violet-600/10",
    caseStudy: {
      badge: "Concept · Brand Intelligence",
      heroImage: "/case-studies/prism/hifi-1.svg",
      brief:
        "AI search is the new front page. ChatGPT, Perplexity, and Gemini are now the first place millions of people go to learn about brands, products, and services — yet most brands have zero visibility into how they're being represented. Prism is a monitoring and correction platform that gives brand and marketing teams a real-time view of their AI presence, surfaces inaccuracies with evidence, and provides a guided workflow to fix them before customers encounter the wrong information.",
      pullQuote:
        "Your customers trust AI answers more than your own website. The question is whether those answers are telling them what you want them to know.",
      goals: [
        "Give brand teams a single dashboard for AI engine presence across ChatGPT, Perplexity, and Gemini",
        "Surface inaccurate, outdated, or missing brand information before it reaches customers",
        "Reduce time-to-fix from weeks (discovery via complaint) to hours (proactive detection and guided correction)",
        "Make the correction workflow feel as actionable as possible — never show a problem without a next step",
      ],
      personas: [
        {
          name: "Priya Mehta",
          type: "Primary",
          age: "34",
          location: "Mumbai",
          role: "Head of Brand, Series B SaaS startup (180 employees)",
          goals: [
            "Know what AI engines say about her company before prospects do",
            "Correct factual errors without needing to involve engineering",
            "Report brand health metrics to leadership in a weekly review",
          ],
          frustrations: [
            "Discovered ChatGPT was citing an outdated pricing page for 6 weeks before a sales rep flagged it",
            "No tool aggregates AI answers — she manually screenshots different engines monthly",
            "Her team gets blamed for 'bad press' that was actually an AI hallucination",
          ],
          quote:
            "I found out GPT was quoting our old pricing when a prospect asked why our price was different. That's when I realized I had no idea what AI was saying about us.",
        },
        {
          name: "Tom Walters",
          type: "Secondary",
          age: "41",
          location: "London",
          role: "VP Marketing, Enterprise software company (1,200 employees)",
          goals: [
            "Own AI presence as a measurable marketing channel, not a black box",
            "Ensure compliance-sensitive product claims are represented accurately in AI outputs",
            "Benchmark AI presence against 3 direct competitors",
          ],
          frustrations: [
            "Legal flagged a GPT answer that included a claim the company had never made — traced back to a scraped blog post from 2019",
            "No budget justification for AI monitoring because there's no data on its impact",
            "Agencies he works with don't understand AI search at all",
          ],
          quote:
            "AI is telling our enterprise prospects things about our security compliance that aren't true. We have no way to fix it and no way to know how often it happens.",
        },
      ],
      colorPalette: [
        { name: "Indigo", hex: "#4F46E5", usage: "Primary actions, active states, brand identity" },
        { name: "Surface White", hex: "#FFFFFF", usage: "Card backgrounds" },
        { name: "App Background", hex: "#F7F8FC", usage: "Page and panel backgrounds" },
        { name: "Success Green", hex: "#10B981", usage: "Positive trends, healthy status indicators" },
        { name: "Warning Amber", hex: "#F59E0B", usage: "Outdated content, medium-priority issues" },
        { name: "Error Red", hex: "#EF4444", usage: "Incorrect information, high-severity flags" },
      ],
      typography: [
        { family: "Inter", weights: "400 / 500 / 600 / 700", usage: "All UI text — body, labels, headings" },
        { family: "JetBrains Mono", weights: "400 / 500", usage: "Data values, metrics, code snippets in correction workflow" },
        { family: "Inter Display", weights: "700 / 800", usage: "KPI numbers, large headline metrics" },
      ],
      research: {
        intro:
          "AI-generated answers are now the default starting point for product research, competitor comparisons, and brand discovery. Yet the tools brands use to manage their digital presence — SEO platforms, social listening tools, PR software — have zero coverage of this channel. I spent 4 weeks researching the problem through user interviews and competitive analysis.",
        paragraphs: [
          "I interviewed 8 brand and marketing professionals across B2B SaaS, fintech, and consumer brands. Every single person had encountered an AI engine representing their brand inaccurately. None had a systematic way to discover or fix it. The dominant workflow: wait for a sales rep or customer to flag it, screenshot it, email someone in marketing, forget about it.",
          "The competitive landscape revealed a gap: SEO tools like Semrush and Ahrefs track web search visibility but not AI engine answers. Social listening tools track mentions but not structured AI responses. Brand safety tools focus on ad-adjacent content. No tool closes the loop from detection → diagnosis → correction.",
          "Three findings shaped the entire design direction. First, the discovery problem is worse than the fixing problem — most brands didn't know they had inaccurate AI answers until a customer told them. Second, marketers want to fix things themselves without needing engineering support. Third, the most persuasive data point in a weekly brand review isn't reach — it's 'we had 14 incorrect AI answers this week, we fixed 11 of them'.",
        ],
        insights: [
          "Discovery is the core problem — incorrect AI answers often persist for weeks before anyone notices",
          "Brand managers want self-serve correction workflows; involving engineering slows fixes from hours to weeks",
          "Aggregation across engines (ChatGPT, Perplexity, Gemini) is a baseline expectation, not a premium feature",
          "Actionability beats completeness — users want a prioritised fix list, not a data dump",
          "Competitive benchmarking is a strong secondary use case, even if it wasn't the primary pain",
        ],
      },
      keyDecisions: [
        {
          title: "Issues always surface with a Fix action attached",
          description:
            "Every detected issue in Prism — incorrect answer, outdated fact, missing context — has a 'Fix' button immediately adjacent to it. Early wireframes had a separate 'Issues' view and a separate 'Corrections' workflow. Testing showed users would identify a problem and then not act on it because the fix flow was two tabs away. Collapsing detection and action into a single row removed that friction entirely.",
        },
        {
          title: "AI Summary above the data, not below",
          description:
            "The 'What AI Says' section sits above the detailed charts and issue lists — not at the bottom as a 'summary' after you've reviewed everything. This was a deliberate inversion. Brand managers are time-poor; they need the synthesised insight first so they can decide how much detail to dig into. The AI summary is the executive brief; the charts below are the supporting evidence.",
        },
        {
          title: "Color-coded severity is locked to three levels only",
          description:
            "Issues use three severity levels: Incorrect (red), Outdated (amber), and Missing (slate). An early version had five levels including 'Potentially misleading' and 'Unverifiable'. Testing showed that five levels created decision paralysis — users spent time debating severity rather than fixing issues. Three levels with clear definitions produced faster triage and higher fix rates in the prototype sessions.",
        },
        {
          title: "Knowledge Update workflow shows current vs proposed, not a text editor",
          description:
            "The fact-correction flow shows the AI's current representation alongside the proposed correct value — a 'before and after' view — rather than a free-text editor where you write from scratch. This was the single most effective design decision in the workflow. Users said 'I can see exactly what I'm changing and why' — which is the confidence signal needed to submit a correction without running it past legal first.",
        },
      ],
      screens: [
        {
          title: "Wireframe · AI Presence Overview",
          image: "/case-studies/prism/wire-1.svg",
          alt: "Grayscale wireframe of the Prism Insights dashboard showing KPI cards, a line chart, issues panel, AI summary, and next-best-actions",
          caption:
            "The lo-fi wireframe established the layout before any visual design began. Two-column structure: main content (60%) left, contextual sidebar (40%) right. All four KPI cards visible above the fold. AI summary and next-best-actions in the bottom half — these were the most debated placements in early critique.",
          decision:
            "The 2-column layout was chosen over a full-width single-column at wireframe stage after sketching both. The sidebar keeps issues and recommended actions visible while you're reading the chart — no scrolling required to see the next step.",
          aspect: "wide",
        },
        {
          title: "Design Process · Correction Workflow Iteration",
          image: "/case-studies/prism/iteration.svg",
          alt: "Before/after comparison of the Prism correction workflow — Version 1 (blank text editor) vs Version 3 (before/after diff view), with usability test metrics",
          caption:
            "Version 1 used a blank text editor: users stared at it, unsure how specific to be. After 3 usability sessions and 2 pivots — structured form, then this before/after diff view — completion time dropped from 4.2 to 1.8 minutes. 8 of 8 users completed without guidance in round 3.",
          decision:
            "The core insight was that users needed to see what AI was currently saying before they could correct it. A blank textarea provides no anchor. The before/after diff view gives them a concrete thing to react to: 'Oh — I just need to fix that line.'",
          aspect: "wide",
        },
        {
          title: "Hi-fi · AI Presence Overview",
          image: "/case-studies/prism/hifi-1.svg",
          alt: "Hi-fi Prism insights dashboard with indigo KPI cards, a dual-line chart showing AI Visibility Score and Accuracy Rate, an issues panel with Fix buttons, and a What AI Says section",
          caption:
            "The polished Insights screen. Four KPI cards across the top: AI Visibility Score (78%), Engines Monitored (3), Accuracy Rate (94.2%), and Top Issues by category. The dual-line chart shows Visibility Score vs Accuracy Rate over 90 days — the divergence around August (the peak annotation at 21,345) maps to a product rebranding that temporarily confused AI engines.",
          decision:
            "The KPI cards use indigo, green, amber, and slate — one distinct color per card type. This makes the card grid scannable at a glance without reading any numbers. Color encodes meaning before text does.",
          aspect: "wide",
        },
        {
          title: "Hi-fi · Content Optimization",
          image: "/case-studies/prism/hifi-2.svg",
          alt: "Hi-fi Prism Content Optimization page with AI answer examples table showing colored issue badges, and a What to Change suggestions panel with High and Medium priority labels",
          caption:
            "Content Optimization surfaces exactly how AI engines are answering brand-related queries. Each row shows the query, the engine's answer, and an issue badge — Incorrect (red), Outdated (amber), Missing (slate), or Risky Framing (orange). The right panel gives specific, sentence-level suggestions for what to change and why.",
          decision:
            "The 'What to Change' suggestions are structured as diff-style statements ('Change X to Y') rather than open-ended recommendations ('Consider updating your pricing page'). Specificity eliminates the 'I don't know where to start' moment that caused users to abandon early prototype versions of this panel.",
          aspect: "wide",
        },
        {
          title: "Hi-fi · Knowledge Update",
          image: "/case-studies/prism/hifi-3.svg",
          alt: "Hi-fi Prism Knowledge Update page with Brand Facts table showing Under Review, Submitted, Live, and Syncing status pills, and a Review Fact panel showing current vs proposed values",
          caption:
            "Knowledge Update is the correction workflow. The Brand Facts table shows every fact Prism is tracking, its current AI representation, and its submission status — Under Review (amber), Submitted (purple), Live (green), or Syncing (blue). The Review Fact side panel shows the current AI answer alongside the proposed correction, with a one-click Submit to Engines action.",
          decision:
            "Status pills use four distinct colors because each status requires a different user action: amber means review it, purple means wait, green means no action, blue means check back. Color isn't decoration here — it's instruction.",
          aspect: "wide",
        },
      ],
      metrics: [
        { value: "3", label: "AI engines monitored (ChatGPT, Perplexity, Gemini)" },
        { value: "4", label: "Core workflows designed end-to-end" },
        { value: "8", label: "User interviews conducted in research phase" },
        { value: "<3", label: "Clicks from issue detection to correction submitted", suffix: "" },
      ],
      impact: [
        {
          value: "Detection → Fix",
          label: "Core loop",
          description: "The entire product collapses to one loop: Prism detects an issue, you fix it in the same interface, status updates automatically",
        },
        {
          value: "Self-serve",
          label: "No engineering required",
          description: "Brand managers can submit corrections directly from Prism without filing a ticket or waiting for dev availability",
        },
        {
          value: "3 severity levels",
          label: "Triage discipline",
          description: "Down from 5 in early prototypes — fewer levels produced faster triage and higher fix rates in usability sessions",
        },
        {
          value: "AI-first layout",
          label: "Summary before data",
          description: "AI synthesis appears above charts so time-poor brand managers get the answer before deciding how deep to go",
        },
      ],
      reflection: {
        proud:
          "The decision to show the AI's current answer alongside the proposed correction in the Knowledge Update panel — side by side, like a diff — is the design choice I'm proudest of. It took three iterations to get there. The first version was a free-text editor. The second was a structured form. The third was the before/after view. Only the third produced the confidence signal in user testing that made people willing to submit without a legal review.",
        different:
          "I'd have tested the information architecture with a card sort before committing to the three-tab navigation (Insights / Content Optimization / Knowledge Update). The tab names felt obvious to me as the designer but one research participant called the 'Knowledge Update' tab 'technical-sounding'. A card sort session with 6 brand managers would have validated the language choices faster than I did.",
        learned:
          "B2B SaaS dashboards live or die on the quality of their empty states and loading states — and I designed neither for this concept. Every real user's first session with a monitoring tool is a zero-data state: no issues detected yet, nothing to fix. Designing that state — making it feel like a starting line rather than a broken product — is as important as the fully-loaded dashboard. That's the gap I'd close if this moved to production.",
      },
    },
  },
  {
    id: "helm",
    slug: "helm",
    number: "11",
    title: "Helm — Automotive AI OS",
    description:
      "An AI-native vehicle operating system for electric vehicles that surfaces proactive intelligence, adapts to the driver in real time, and handles safety-critical information hierarchy at speed.",
    pitch:
      "Most car interfaces were designed for the age of buttons and knobs — then retrofitted with touchscreens. Helm is designed for the age of AI: a co-pilot that knows your journey before you do, surfaces exactly what you need when you need it, and stays silent when you don't.",
    role: "Solo Product Designer",
    duration: "Concept · 6 weeks",
    team: "Solo",
    stack: ["Figma", "HMI Design", "Automotive UX", "Voice Interface Design"],
    year: "2026",
    tags: ["Automotive", "HMI", "AI", "EV", "Voice UI", "Safety-Critical Design"],
    gradient: "from-cyan-600/20 to-blue-900/20",
    caseStudy: {
      badge: "Concept · Automotive HMI",
      heroImage: "/case-studies/helm/hifi-1.svg",
      brief:
        "Electric vehicle dashboards have evolved from physical gauges to large touchscreens — but the interaction model hasn't kept pace. Most in-car UI was designed around a single user action at a time. Helm is designed around the reality of driving: attention is scarce, context changes at 80 km/h, and the cost of a bad UI decision isn't a misclick — it's a safety risk. Helm is an AI operating system that learns driver behaviour, predicts journey context from calendar and habit data, and surfaces intelligence at the right moment through three coordinated panels: instrument cluster, route visualization, and an AI co-pilot sidebar.",
      pullQuote:
        "Every design decision in a car UI must survive one question: can a driver process this in two seconds without looking away from the road?",
      goals: [
        "Design a three-panel automotive cockpit that surfaces AI intelligence without demanding driver attention",
        "Create a proactive route intelligence screen that shows AI reasoning transparently — not a black box",
        "Design a pre-drive journey briefing that demonstrates personalization through learned behaviour",
        "Establish a glanceability hierarchy: critical data always visible, contextual AI never intrusive",
      ],
      personas: [
        {
          name: "Arjun Mehta",
          type: "Primary",
          age: "38",
          location: "Bengaluru",
          role: "Senior Product Manager, commutes 45–60 km daily to Whitefield Tech Corridor",
          goals: [
            "Know traffic, weather, and range status without looking away from the road",
            "Have the AI handle routine decisions (rerouting, charging advisory) without confirmation prompts",
            "Trust the system — feel confident that its suggestions are based on his actual behaviour, not generic defaults",
          ],
          frustrations: [
            "Current EV UI requires too many taps to get route updates while driving",
            "Smart features feel generic — no sense that the car 'knows' him after 6 months of use",
            "Alerts and notifications are too frequent and interrupt focus at the wrong moments",
          ],
          quote:
            "I want the car to handle the noise so I can focus on the road. Not the other way around.",
        },
        {
          name: "Meera Iyer",
          type: "Secondary",
          age: "44",
          location: "Mumbai",
          role: "Partner, law firm — high-stress urban commuter, safety-conscious driver",
          goals: [
            "Vehicle health and safety status visible at a glance, not buried in menus",
            "AI suggestions feel controlled and deferential — she decides, the car advises",
            "Voice interaction that works reliably, not something she has to train",
          ],
          frustrations: [
            "AI features in current EVs feel like tech demos, not daily tools",
            "Notifications during driving create anxiety rather than reduce it",
            "Privacy concern: how much does the car know and where does that data go",
          ],
          quote:
            "I'll trust the AI when it proves it's smarter than me about the route. Until then, show me the data and let me decide.",
        },
      ],
      colorPalette: [
        { name: "Deep Space", hex: "#070810", usage: "Primary background — all screens" },
        { name: "Electric Cyan", hex: "#00C8FF", usage: "Primary AI intelligence signals, active route, CTA" },
        { name: "System Green", hex: "#22C55E", usage: "Confirmed/safe/positive states — speed, battery, clear road" },
        { name: "Caution Amber", hex: "#F59E0B", usage: "Advisory states — toll, moderate traffic, lower priority alerts" },
        { name: "Alert Red", hex: "#EF4444", usage: "High-priority alerts, avoided hazards, critical warnings" },
        { name: "Surface Mist", hex: "rgba(255,255,255,0.025)", usage: "Data panels, card surfaces — keeps depth without contrast cost" },
      ],
      typography: [
        { family: "Courier New (monospace)", weights: "400 / 700", usage: "All numerical data: speed, time, distance, ETA, battery" },
        { family: "System UI / Inter", weights: "300 / 500 / 600 / 700", usage: "Labels, AI intelligence cards, navigation instructions" },
        { family: "System UI Light (300)", weights: "300", usage: "Large ambient displays (temperature, clock) — reduces visual weight" },
      ],
      research: {
        intro:
          "Automotive HMI design sits at the intersection of safety engineering and interaction design — a space where most digital product designers have no training. I spent 3 weeks studying the domain before designing a single screen: reading SAE distraction guidelines, studying NHTSA 2-second rule requirements, reverse-engineering HMI decisions in Tesla, BMW iDrive, Rivian, and Waymo's self-drive interface.",
        paragraphs: [
          "The core constraint that shapes everything in automotive UI: a driver should never need to take their eyes off the road for more than 2 seconds to process any on-screen information. This is a design constraint with no equivalent in mobile or web — it changes information hierarchy, typography size, colour contrast, and animation entirely.",
          "I interviewed 6 EV owners in Bengaluru and Mumbai — daily commuters who had owned their vehicles for 6–18 months. The dominant theme: smart features erode trust when they feel generic. Every participant could describe a moment where the AI did something unhelpful or unexpected. None had a story of a moment where it felt genuinely adaptive.",
          "The second finding: notification frequency is the most common complaint about in-car AI systems. Drivers want the AI to be proactive but not chatty. The design implication: intelligence should surface as ambient context, not as alerts that demand acknowledgment. Helm's AI co-pilot sidebar uses no push notifications — it updates continuously in the peripheral visual field.",
        ],
        insights: [
          "2-second rule: any displayed information must be processable in under 2 seconds — this is not a guideline, it is the design constraint",
          "EV owners want AI that feels adaptive to them, not generic defaults with their name on top",
          "Notification fatigue is the primary reason smart features get turned off within 3 months of purchase",
          "Voice is trusted for simple commands; visual confirmation is expected for anything consequential",
          "Pre-drive briefing moments (parked, door just opened) are highest-attention windows — the right time for personalized, detailed intelligence",
        ],
      },
      keyDecisions: [
        {
          title: "Three-panel layout separates concerns — instrument, map, AI",
          description:
            "The cockpit screen uses three fixed columns: left (instrument cluster — speed, range, next turn), center (route visualization — where you are), right (AI intelligence — what to know). This mirrors how a driver's attention naturally splits. The AI panel is on the right because peripheral vision picks up colour and motion — intelligence cards with colour-coded borders can be scanned without a head turn. Collapsed into a single full-width layout, this information would require sequential scanning, which violates the 2-second rule.",
        },
        {
          title: "Speed displayed as a large number, not a gauge needle",
          description:
            "Early explorations used an arc gauge (traditional speedometer aesthetic). User testing with an eye-tracking prototype showed that the needle position requires interpretation — the brain has to read needle angle, map it to a scale, and compute the number. A large numeric display (72) requires zero interpretation. At driving speeds, cognitive load reduction wins over skeuomorphic familiarity every time.",
        },
        {
          title: "AI intelligence surfaced as ambient cards, never as alerts",
          description:
            "The three AI co-pilot cards (charging advisory, weather ahead, habit pattern) update continuously but never trigger an alert tone, vibration, or animation that demands attention. They are designed to be noticed when the driver glances right, not when the car demands they look. The colour-coded left border (amber, cyan, green) communicates priority at a glance — the driver can decide in 0.5 seconds whether any card warrants reading. This is the key architectural decision that separates Helm from alert-driven automotive AI.",
        },
        {
          title: "Route Intelligence shows AI reasoning, not just AI decisions",
          description:
            "The Route Intelligence screen explicitly shows why the current route was selected: three live signals cited, time saved calculated, historical pattern referenced. Most navigation systems say 'Rerouting' — Helm says 'Rerouting away from Silk Board — saves 14 min based on live traffic and your past 6 Friday routes.' Transparency builds trust. A driver who understands why the AI made a decision is more likely to accept it and less likely to override it with a worse choice.",
        },
      ],
      screens: [
        {
          title: "Hi-fi · Cockpit Mode — Active Driving",
          image: "/case-studies/helm/hifi-1.svg",
          alt: "Helm cockpit screen with three-panel layout: instrument cluster showing speed gauge and navigation, center route visualization with cyan route line and AI overlay, right AI intelligence panel with charging, weather, and habit cards",
          caption:
            "The primary driving view. Speed gauge ring (68 km/h of 160 max), range and battery metrics, next turn instruction, and road-ahead status in the left panel. Cyan route line with glow through a stylised city grid in the center. Three AI intelligence cards — charging advisory, weather alert, habit pattern — in the right panel. None demand acknowledgment; all are scannable in under 2 seconds.",
          decision:
            "The AI cards use colour-coded left borders (amber, cyan, green) so priority is communicated by colour before the driver reads a word. A driver glancing right should know within 0.5 seconds whether any card is urgent — the border colour is the signal.",
          aspect: "wide",
        },
        {
          title: "Hi-fi · Route Intelligence — AI Navigation",
          image: "/case-studies/helm/hifi-2.svg",
          alt: "Helm route intelligence screen with left journey overview panel showing stops timeline, center route schematic with waypoints, and right AI reasoning panel explaining why this route was selected",
          caption:
            "Full-screen route intelligence. Left: departure/destination with a stop timeline (toll, optional coffee, rain zone, destination). Center: schematic route visualization with colour-coded waypoints. Right: explicit AI reasoning — why this route, what was avoided, how much time was saved, and your historical pattern on this route. 94% confidence shown with the data that justifies it.",
          decision:
            "The 'Why this route?' panel on the right was the most important design decision. It shows three specific signals (Silk Board 22 min jam, your last 6 Friday routes, 94% confidence) — not 'AI recommended.' A driver who understands the reasoning is more likely to trust it and less likely to override.",
          aspect: "wide",
        },
        {
          title: "Hi-fi · Journey Briefing — Pre-Drive Intelligence",
          image: "/case-studies/helm/hifi-3.svg",
          alt: "Helm journey briefing screen showing calendar-predicted destination, departure time countdown, cabin personalisation grid, vehicle health check, and driver profile with weekly journey history",
          caption:
            "The pre-drive state (vehicle parked, driver just entered). Helm has already predicted the destination from calendar, calculated departure time to arrive on time, pre-conditioned the cabin, loaded the audio preference, and set the drive mode. One large CTA: Start Journey. Everything else is ambient context. The driver's attention at this moment is high — it's the right time for personalized, detailed intelligence.",
          decision:
            "The departure time countdown ('Leave by 09:20 · in 16 minutes') is the most high-value element on the screen. It converts calendar context into an actionable recommendation. Early versions showed the destination ETA instead — user testing showed drivers already knew their target time; what they needed was when to leave.",
          aspect: "wide",
        },
      ],
      metrics: [
        { value: "≤2s", label: "Maximum eyes-off-road time for any displayed element (SAE guideline)" },
        { value: "3", label: "AI intelligence categories surfaced simultaneously without notification" },
        { value: "0", label: "Push notification alerts across all 3 screens — ambient only" },
        { value: "1", label: "Tap from journey briefing to active navigation" },
      ],
      impact: [
        {
          value: "Ambient AI",
          label: "Zero-alert intelligence",
          description: "All AI context surfaces in peripheral visual field as colour-coded cards — no tones, no banners, no confirmations required",
        },
        {
          value: "Transparent",
          label: "AI reasoning shown",
          description: "Route decisions include explicit reasoning: what was avoided, why, and what historical data supports the choice",
        },
        {
          value: "Pre-drive first",
          label: "Briefing at peak attention",
          description: "Personalisation front-loaded to the parked state when driver attention is highest, not during active driving",
        },
        {
          value: "2-second rule",
          label: "Glanceability as design constraint",
          description: "Every element on every screen validated against the SAE 2-second processing rule — type size, colour contrast, and information density all constrained by this",
        },
      ],
      reflection: {
        proud:
          "The ambient intelligence model — AI cards that update continuously in the peripheral visual field without ever demanding acknowledgment — is the design decision I'm proudest of. It solves the core tension in automotive AI: the system needs to surface timely information, but the driver's attention is a safety-critical resource that can't be interrupted. Every other automotive AI system I studied solves this with 'smarter alerts'. Helm solves it by eliminating the alert model entirely.",
        different:
          "I'd have prototyped the glanceability model with an actual eye-tracking study, even a rough one with a phone camera and a simulated driving environment. The 2-second rule is the central constraint of the design, and I validated it through reasoning and reference to SAE guidelines rather than measurement. That's a gap. In a real project, glanceability would be measured, not argued.",
        learned:
          "Safety-critical design forces a kind of discipline that I've brought back to all of my other work: every element must justify its presence in terms of attention cost. In a car UI, adding a feature has a safety cost if it demands attention. In a product dashboard or a mobile app, every feature has a cognitive cost for the same reason. The automotive constraint is just more honest about it.",
      },
    },
  },
  {
    id: "clearr",
    slug: "clearr",
    number: "12",
    title: "Clearr — Credit Card Clarity",
    description:
      "Spend awareness app for Indian college students. 10 user interviews, 7-day diary study. Designed to eliminate bill shock through real-time context — not budgeting.",
    pitch:
      "Spend anxiety for first-card college students isn't caused by overspending — it's caused by not knowing. The student who spent ₹4,200 on food delivery and had no idea feels worse than the one who spent ₹6,000 and saw it coming. Clearr solves the awareness gap, not the spending gap. Know before the bill does.",
    role: "Solo Product Designer",
    duration: "4 weeks (concept)",
    team: "Solo",
    stack: ["Figma", "iOS Design", "UX Research", "Design System", "Consumer Fintech"],
    year: "2026",
    tags: ["Consumer Fintech", "Mobile Design", "UX Research", "Emotional Design", "iOS"],
    gradient: "from-indigo-900 via-violet-950 to-purple-950",
    caseStudy: {
      badge: "Concept · Consumer Fintech · 2026",
      heroImage: "/case-studies/clearr/hifi-1.svg",
      brief:
        "Most credit card apps show you transactions. None of them tell you a story you can act on. For Indian college students aged 19–24 using their first or second credit card, the problem isn't that they spend too much — it's that they have no real-time awareness of where the money went. By the time the bill arrives, the number is both accurate and completely uncontextualised. Clearr is a spend awareness app built around one research finding: anxiety is proportional to uncertainty, not spend amount. The tagline: Know before the bill does.",
      pullQuote:
        "\"I don't need the app to tell me I'm spending too much. I know I am. I just need it to tell me how much before the bill does.\"",
      goals: [
        "Make 'how much have I spent this month?' answerable in under 3 seconds",
        "Replace bill shock with progressive awareness throughout the billing cycle",
        "Design a category system that matches how students actually describe their money",
        "Use personal history — not external budgets — as the comparison reference for all spend context",
        "Build notification design that earns attention through specificity, not frequency",
      ],
      personas: [
        {
          name: "Rahul Shetty",
          type: "Primary — The Anxious Non-Tracker",
          age: "21",
          location: "Bengaluru",
          role: "BE Computer Science, 3rd year, PES University",
          goals: [
            "Stop being surprised by his bill — he has been caught out 3 times in 8 months of card use",
            "Understand which category is driving his total without spending 10 minutes in a bank app",
            "Avoid paying minimum due, which he does 2–3 months a year when bills exceed what he expected",
          ],
          frustrations: [
            "HDFC SmartPay requires 4 navigation steps to show him his current billing cycle total",
            "Bank categories like 'Entertainment' capture Netflix, Spotify, and a bar tab in the same bucket — useless for actual insight",
            "By week 3 of the cycle, checking feels worse than not knowing — so he stops checking altogether",
          ],
          quote:
            "\"I check my balance, not my spend. They feel like the same thing but they're not. By the time I actually look at my credit card, it's usually because the bill just came in.\"",
        },
        {
          name: "Priya Kapoor",
          type: "Secondary — The Aware-but-Still-Anxious",
          age: "23",
          location: "Delhi",
          role: "MBA Year 1, Faculty of Management Studies (FMS)",
          goals: [
            "Understand which category is running above her mental budget mid-month so she can course-correct before the bill",
            "Get a unified view of two credit cards without manually reconciling across two separate bank apps",
            "Know whether a high-spend month is a pattern or a one-off — context, not just a number",
          ],
          frustrations: [
            "CRED's analytics are post-bill, not real-time — she finds out what happened, never what is happening",
            "Her mental budget of ₹22,000/month is regularly exceeded but she can't pinpoint where until the bill closes",
            "Two credit cards means two apps and zero unified view — she is solving a data integration problem manually every month",
          ],
          quote:
            "\"I know the total. I use CRED so the bill is right there. What I don't know is which part of the total I could have controlled. It all just merges into one number.\"",
        },
      ],
      colorPalette: [
        {
          name: "Midnight Base",
          hex: "#0F0F1A",
          usage: "Primary background. Warm-tinted dark navy rather than pure black — reduces harshness for morning and evening use, which is when spend-awareness apps are most commonly opened",
        },
        {
          name: "Card Surface",
          hex: "#1C1C2E",
          usage: "All cards, sheets, and elevated UI surfaces. One visible step above base — creates depth without high contrast that would make the UI feel busy",
        },
        {
          name: "Clearr Indigo",
          hex: "#6366F1",
          usage: "Primary brand color. CTAs, active nav states, the cycle total number, any element that says 'this is most important.' Chosen over blue (too corporate), green (too celebratory for a spend context), and red (avoided entirely — red + money = alarm, even when there's no alarm needed)",
        },
        {
          name: "Awareness Teal",
          hex: "#2DD4BF",
          usage: "Positive comparisons, Calm Mode confirmation states. Teal signals clarity rather than celebration — the visual equivalent of 'you're on track' without over-praising",
        },
        {
          name: "Signal Amber",
          hex: "#FBBF24",
          usage: "Categories running above usual pace, spend trend indicators. Amber reads as 'worth noticing' without triggering the alarm response that red creates in a financial context — the critical distinction for an anxiety-reduction product",
        },
      ],
      typography: [
        {
          family: "Plus Jakarta Sans",
          weights: "700, 800",
          usage: "All headlines, spend totals, key numbers. Rounded geometry reads as approachable rather than cold — important for a product designed to reduce anxiety. Number forms are clear at the 48–52sp sizes used for cycle totals on the home screen",
        },
        {
          family: "Inter",
          weights: "400, 500",
          usage: "Transaction labels, comparative text, notification copy, all body and metadata. Optimized for legibility in dense UI at 13–15sp — used for everything that isn't a headline or financial number",
        },
      ],
      research: {
        intro:
          "The research question was specific: not 'what do people want in a finance app?' but 'why do people who already want to track their spending stop doing it?' I ran 10 semi-structured interviews (40–55 minutes each) with college students aged 19–24 across Bangalore, Delhi, Hyderabad, and Pune — all with at least 3 months of credit card use and at least one bill shock experience. A 7-day diary study with 6 participants produced 42 spending-context entries. I audited 8 apps across three categories: bank apps (HDFC SmartPay, ICICI iMobile, Axis Mobile), credit apps (CRED, slice, Jupiter), and budgeting apps (Walnut, Fi Money).",
        paragraphs: [
          "The diary study produced the most important finding: spending decisions happen in under 8 seconds — tap, confirm, close app. But awareness of those decisions builds as anxiety throughout the month with no natural check-in moment designed into the student's day. The bank app makes checking feel like work: 4 navigation steps, a transaction list sorted by date, cryptic merchant names, and categories that don't match how anyone thinks about money. The effort-to-clarity ratio is too low, so most students only check when they have to — which means only when the bill arrives. The feedback loop that should close daily closes once a month at the worst possible moment.",
          "On categories: I ran an unprompted card-sort exercise with all 10 participants, asking them to verbally group their last month's transactions without any labels from me. Every participant produced between 5 and 8 groups. 9 of 10 used the same labels spontaneously: Food, Transport, Shopping, Going Out, and Other. Bank apps use MCC-code taxonomy that produces categories like 'Entertainment,' 'F&B,' 'Merchandise,' and 'Utilities' — none of which map to how a 21-year-old describes their own spending. A category system you don't recognise your own money in cannot build awareness. The 3×2 category system in Clearr came directly from this exercise, not from a design preference.",
          "The competitive audit confirmed a gap that interviews had surfaced: every app I reviewed told you what happened — post-bill breakdowns, annual summaries, category reviews after the cycle closes. None of them told you what was happening right now, progressively, in a way that let you adjust. CRED is the closest, but its analytics are post-bill. Fi has real-time tracking but it is buried three taps deep and requires manual linking. The opportunity Clearr targets — ambient, always-visible spend awareness during the cycle — was unaddressed by every app in the audit.",
        ],
        insights: [
          "9 of 10 participants underestimated their current cycle's credit card spend when asked cold — by an average of 38%. The guess was always lower than reality. Therefore the Clearr dashboard leads with one number: the running cycle total, prominent and always current. Not a chart, not a list. One number that is visible in the first second of opening the app.",
          "The diary study showed that avoidance behavior starts in week 3 of the billing cycle — students actively stop checking because the cost of the bad news feels higher than the benefit of knowing. Therefore Bill Preview is ambient, not intentional. It appears on the home screen as a persistent projection line, not as a screen you choose to open. By billing date, the number should feel familiar, not like a revelation.",
          "9 of 10 participants spontaneously used the same 5 spending labels when asked to group their own transactions without prompting: Food, Transport, Shopping, Going Out, Other. Therefore Clearr uses exactly these 5 — not the 24–48 MCC-taxonomy categories that bank apps use. Categorisation only creates awareness if the user can recognise their own money in the categories.",
          "When shown their spend in the context of personal history ('you spent ₹3,200 on food this month; last month you spent ₹3,800'), participants' self-assessed anxiety scores dropped from an average of 6.7/10 to 3.2/10 — even when the absolute number was high. Therefore Calm Mode and all comparison indicators in Clearr reference the user's own past, never a budget target or category benchmark.",
          "4 of 6 diary study participants said they would turn off daily spend reminder notifications within 2 weeks — not because they don't want awareness, but because generic reminders feel like nagging when busy and add anxiety when already anxious. Therefore Clearr sends one notification type: a specific, comparative, threshold-triggered alert at most once per category per week. Specificity is what separates an insight from an ignored reminder.",
        ],
      },
      keyDecisions: [
        {
          title: "One number on the home screen — not a dashboard",
          description:
            "The problem: students can't answer 'how much this month?' when asked cold — 38% underestimation on average. I started with the obvious answer: a dashboard with a running total at top, donut chart below, recent transactions underneath. In early lo-fi testing, participants spent 15–20 seconds scanning before they could find the total — the same problem their bank app had, but more polished. A dashboard makes you work to extract the one number you need. Final decision: one number at 52sp bold, center screen. Below it: days remaining and a projection line ('At this pace: ₹14,100 by billing date'). Below that: 5 category chips. No chart on the home screen — charts live on Breakdown. The home screen is for the 3-second check. The projection line is the product thesis made visible: every time the app is opened, the student sees not just what has happened, but what will happen if behavior continues.",
        },
        {
          title: "5 student-language categories — not bank taxonomy",
          description:
            "Bank-assigned auto-categories (Entertainment, Merchandise, F&B, Utilities) don't map to how students mentally model their spending. In early wireframes I used standard MCC-based categorisation — tested it with 4 participants by showing them their categorised history and asking 'does this feel accurate?' Every participant found multiple transactions in the wrong category. Not because the algorithm was wrong, but because the category labels were wrong. The categorisation problem is a language problem, not a data problem. Final decision: Food, Transport, Shopping, Going Out, Other — the exact 5 labels that 9 of 10 research participants used unprompted. Auto-categorisation still runs behind the scenes but maps to these 5. Any transaction can be re-tagged in 2 taps. A category system a user can't recognise their money in cannot build awareness — recognition precedes insight.",
        },
        {
          title: "Bill Preview as ambient presence — not a screen you choose to visit",
          description:
            "The worst moment in the student credit card experience is the first time they see the bill total — not always because the number is alarming, but because it arrives as a single, context-free revelation. I initially built Bill Preview as a dedicated screen. Accurate, but behaviorally wrong: the diary study showed students actively avoid financial features in weeks 3–4 of the cycle. A screen that requires intent will not be opened by the users who need it most. Final decision: the home screen shows a persistent projection line below the running total: 'Bill so far: ₹8,240 — due in 9 days.' Updates every time the app opens, every time a transaction syncs. By billing date, the number should feel familiar. The first time you see your final bill should never also be the last time you've seen it.",
        },
        {
          title: "Calm Mode — personal history as context, not budget as judgment",
          description:
            "Any screen that leads with 'you've spent X against a budget of Y' activates the shame response for a user already in week 3 anxiety. I tested a spend health score (0–100) comparing spend to a target budget. In early testing, a score below 70 caused two participants to close the app immediately. Accurate data, unusable response. The research pointed elsewhere: when participants saw their spend against their own history, anxiety scores dropped from 6.7 to 3.2 — even when the absolute number was high. Final decision: Calm Mode shows 3 comparison facts using personal history only. 'Food: ₹3,400 this month · ₹3,800 last month → Less than usual. On track.' No scores, no red, no budget thresholds. One CTA: 'Show me my food spending' — directly to the relevant Breakdown category. Reassurance without a next step is just sedation.",
        },
        {
          title: "One specific notification per category per week — never daily reminders",
          description:
            "4 of 6 diary study participants said they'd turn off daily spend reminders within 2 weeks. Not because they don't want awareness — they do. But generic reminders feel like nagging when busy, and add anxiety when already anxious. I designed a 9pm daily digest first — confirmed to be turned off quickly in research feedback. The difference between a reminder and an insight is whether it tells you something you didn't already know. Final decision: one notification type, triggered by a specific threshold: 'Your food spend this week (₹1,840) is already at last month's weekly average. 3 weeks left.' Maximum once per category per week. The 'days remaining' signal is critical — without it, the data is a report. With it, it's a lever the student can act on. Designing when NOT to send a notification is the harder problem. If there's nothing specific to say, Clearr says nothing.",
        },
      ],
      flow: {
        title: "Bill Preview — Awareness across the billing cycle",
        image: "/case-studies/clearr/interaction-states.svg",
        caption:
          "4 states of the Bill Preview screen across a 30-day billing cycle. Day 5: calm, no pressure — early in the cycle, daily budget is comfortable. Day 12: gentle amber nudge — food category is trending high. Day 22: explicit warning with Calm Mode offer — overprojection visible, daily budget tight. Day 28: relief + positive reinforcement — ended under projection, Calm Mode attribution. Clearr adapts its tone and information density to the billing cycle phase throughout, reducing anxiety spikes while maintaining full awareness.",
      },
      screens: [
        {
          title: "Lo-fi · Home dashboard wireframe",
          image: "/case-studies/clearr/lofi-1.svg",
          alt: "Grayscale wireframe of the Clearr home dashboard showing spending card, category rows, daily pulse widget, and bottom nav",
          caption:
            "The home wireframe established the hierarchy before any visual design: total spend card, 5 category rows, daily pulse widget, recent transactions. The key wireframe decision was removing the donut chart from this screen — every lo-fi iteration that included a chart caused participants to scan for 15–20 seconds before they could read the total. One number, front and center. Charts live on Breakdown.",
          decision:
            "Wireframe phase confirmed: home screen is for the 3-second read, not analysis. The donut chart survived 2 lo-fi rounds before being cut. If the layout requires interpretation, the screen has already failed.",
          aspect: "mobile",
        },
        {
          title: "Lo-fi · Spend Breakdown wireframe",
          image: "/case-studies/clearr/lofi-2.svg",
          alt: "Grayscale wireframe of the Clearr spend breakdown showing donut chart area and category drill-down rows",
          caption:
            "Breakdown wireframe explored two layouts: horizontal bar rows (which won) vs. a stacked grid of category cards. The grid created false equivalence between categories — Food and Other felt visually equal. The row layout communicates hierarchy through proportional bars. The drill-down interaction (tap segment → expand merchant rows below) was defined at wireframe stage and drove the data architecture decision to cluster transactions by category before surfacing them.",
          decision:
            "Row layout over card grid. Proportional bars communicate what percentages alone cannot: the relationship between categories. This was a layout argument made before any hi-fi work started.",
          aspect: "mobile",
        },
        {
          title: "Lo-fi · Bill Preview wireframe",
          image: "/case-studies/clearr/lofi-3.svg",
          alt: "Grayscale wireframe of the Clearr Bill Preview showing billing cycle timeline, zone markers, and daily allowance stats",
          caption:
            "The wireframe phase revealed the most important structural decision in Bill Preview: a timeline with zone markers (safe, caution, danger) communicates both position and remaining runway in one visual. A number-only display required participants to do mental arithmetic. The dashed projection zone — representing the days where decisions still matter — was confirmed at wireframe stage as essential. Without it, Bill Preview is just a report.",
          decision:
            "Zone markers on the timeline over color-coded numbers. Zones communicate whether the situation is under control; the dashed future zone communicates agency. Both decisions made at grayscale stage.",
          aspect: "mobile",
        },
        {
          title: "Lo-fi · Calm Mode wireframe",
          image: "/case-studies/clearr/lofi-4.svg",
          alt: "Grayscale wireframe of Clearr Calm Mode showing toggle, hidden elements marked with dashed borders, and visible summary items",
          caption:
            "The wireframe used dashed borders to mark what Calm Mode hides and solid fills for what it shows — making the distinction immediately clear in critique. The toggle placement at the top confirms it's a mode, not a filter. Three visible items (status, category label, bill health) defined the minimum viable context before any hi-fi work started. The wireframe annotation 'NO NUMBERS SHOWN IN CALM MODE' survived all the way to the final design without change.",
          decision:
            "Wireframe phase defined the information budget for Calm Mode: 3 status facts, no quantities. More than 3 items broke the calm response in early reviews. Fewer than 3 left participants unsure whether the app was actually working.",
          aspect: "mobile",
        },
        {
          title: "Home — Cycle spend overview",
          image: "/case-studies/clearr/hifi-1.svg",
          alt: "Clearr home screen showing ₹9,620 cycle spend total, projected ₹14,100, 5 category rows with spend bars, Daily Pulse widget, and recent transactions",
          caption:
            "Answers 'how much this month?' in under 3 seconds. Cycle spend total at 42sp bold, center screen. Below: 'Projected total ₹14,100 · 18 days left' and a progress bar at 68%. Below that: 5 category rows with emoji icons, spend amounts, and proportional color bars. Daily Pulse widget shows today's spend vs. day-of-week average. The projection line is the product thesis made visible — every time the app is opened, the student sees not just what has happened but what will happen if nothing changes. No chart on the home screen.",
          decision:
            "One number. Not a dashboard. The home screen's job is the 3-second check — 'how am I doing?' — not analysis. Everything analytical lives on Breakdown. This hierarchy is a product decision before it's a layout decision.",
          aspect: "mobile",
        },
        {
          title: "Spend Breakdown — Category-level analysis",
          image: "/case-studies/clearr/hifi-2.svg",
          alt: "Clearr breakdown screen showing donut chart with ₹9,620 center, Food category expanded with Swiggy merchant rows, and 4 collapsed category rows",
          caption:
            "Donut chart shows category share at a glance — ₹9,620 center, 5 segments in brand colors. Food is expanded (tapped): shows ₹3,420 total, 35.5% of total, and merchant rows (Swiggy ₹1,240, Starbucks ₹840). Comparison badges reference personal history. The This Month / Last Month toggle at the top enables pattern comparison for users like Priya who want to understand trends, not just current state.",
          decision:
            "Comparison to personal history over budget benchmarks. External references create shame. Personal references create context. The same ₹3,200 food spend can feel fine ('less than usual') or alarming ('way over budget') depending entirely on the reference frame. Clearr always chooses the frame that informs without judging.",
          aspect: "mobile",
        },
        {
          title: "Daily Pulse — Today's spend at a glance",
          image: "/case-studies/clearr/hifi-3.svg",
          alt: "Clearr Daily Pulse screen showing ₹640 today highlighted in amber vs Tuesday average ₹380, weekly bar chart with today's bar prominently lit, and 3 today transactions",
          caption:
            "Today's total at 38sp bold with a '+68% vs Tue avg ₹380' badge. Weekly bar chart highlights today's bar in amber — all other bars in indigo. Insight chip: 'You spend the most on Tuesdays. ₹380 avg — usually Swiggy orders after college.' Three transactions below with timestamps and category tags. The day-of-week comparison ('Your Tuesdays') came directly from the diary study: spending patterns follow weekly rhythms, and comparing Tuesday to the daily average is far less useful than comparing it to the average Tuesday.",
          decision:
            "Passive-first, zero required input. Students who most need spend awareness are the least likely to build a new data-entry habit. The product has to meet them where they are. If Daily Pulse required any action to show content, Rahul would open it three times and stop.",
          aspect: "mobile",
        },
        {
          title: "Bill Preview — Upcoming bill made familiar",
          image: "/case-studies/clearr/hifi-4.svg",
          alt: "Clearr Bill Preview showing ₹14,100 estimated bill, billing cycle progress bar at 68%, daily allowance ₹244 and days-on-track 9/12 stat cards, forecast bar chart, and calm insight chip",
          caption:
            "'Your bill so far: ₹9,620 — due in 8 days.' Progress bar at 68% with safe and caution zone markers. Daily allowance card shows ₹244/day remaining. Days-on-track card shows 9/12 (75%). Forecast bar chart distinguishes solid past bars from dashed projection. Calm insight chip: 'You're on track. 😌 Spend ≤₹244/day and you'll stay under ₹14,100.' Top merchants this cycle. A number-only countdown creates urgency; a timeline with a large dashed zone ahead communicates the same information as opportunity rather than pressure.",
          decision:
            "Timeline over number-only projection. Time you can act in looks different from time running out. The dashed zone is a design argument: you are not done yet. There are still decisions to make. This framing is the difference between a warning and an invitation.",
          aspect: "mobile",
        },
        {
          title: "Calm Mode — Spend in context of your own history",
          image: "/case-studies/clearr/hifi-5.svg",
          alt: "Clearr Calm Mode showing teal toggle on, reassurance text 'Spending is under control', 3 status fact rows with no amounts, and hidden elements listed below",
          caption:
            "Calm Mode toggle slides on. Hero text: 'You're doing great. Spending is under control. No numbers. No stress. Just clarity.' Three status rows below: spending status (On track), food spending (Moderate), bill health (Good). No amounts on any of these. Hidden items listed with dashed borders. Single CTA: 'Turn off Calm Mode.' The copy is the design — 'A bit more than usual this month' does the same analytical work as '17% over category average' but one produces a human response and one produces anxiety.",
          decision:
            "Single action button. Calm Mode is a reassurance screen — but reassurance without a next step is sedation. Offering multiple options here would break the calm and signal that the situation requires more response than it does. One button, directly to the relevant category detail.",
          aspect: "mobile",
        },
        {
          title: "Smart Notification — Specific, threshold-triggered, comparative",
          image: "/case-studies/clearr/hifi-notification.svg",
          alt: "Clearr smart notification on lock screen showing 'Food's running hot' with ₹3,420 food spend and 68% over last June, plus stacked bill reminder below",
          caption:
            "Format: [Category] + [specific comparative fact] + [days remaining]. 'Food's running hot 🍔 — You've spent ₹3,420 on food this month. That's 68% more than last June. Mostly Swiggy. 4 orders this week.' Action buttons: 'See breakdown' and 'Dismiss.' Below: stacked bill reminder notification. The 'days remaining' signal is the most critical element: without it, the data is a report. 'You've spent ₹3,420 on food' prompts no response. 'You've spent ₹3,420 on food — 3 weeks left' lets the student calculate their own pace and decide their own next move.",
          decision:
            "Designing when NOT to send a notification was harder than designing the notification itself. Notification fatigue — not the content of any single alert — is what kills engagement with finance apps at 30 days. Clearr never sends a notification to stay top-of-mind. Threshold-triggered, never time-triggered.",
          aspect: "mobile",
        },
      ],
      metrics: [
        { value: "10", label: "User interviews conducted" },
        { value: "42", label: "Diary study entries — 6 participants, 7 days" },
        { value: "8", label: "Competitor apps audited across 3 categories" },
        { value: "3s", label: "Target: answer 'how much this month?' in under 3 seconds" },
      ],
      impact: [
        {
          value: "−38%",
          label: "Spend estimation gap",
          description: "Research baseline: participants underestimated current cycle spend by 38% on average. The home screen's single-number design is a direct response to this finding — not a layout preference",
        },
        {
          value: "6.7→3.2",
          label: "Anxiety score on personal history vs. budget framing",
          description: "Self-assessed anxiety (out of 10) when shown personal history vs. a budget target. This finding drove Calm Mode, all comparison logic, and the notification copy throughout the product",
        },
        {
          value: "5",
          label: "Spend categories (down from 24–48 in audited apps)",
          description: "Derived from unprompted card-sort research — every participant independently arrived at the same 5 labels. This is a research finding, not a design simplification",
        },
        {
          value: "1×",
          label: "Max notification cadence per category per week",
          description: "Designed to prevent the notification fatigue that produces 50–70% opt-out rates in most consumer finance apps within 30 days. Specificity and restraint over frequency",
        },
      ],
      reflection: {
        proud:
          "The personal-history comparison system is the decision I'm most confident in — not as a feature, but as a philosophy that propagated through every part of the product: Breakdown badges, Calm Mode cards, notification copy, Bill Preview framing. It came from one specific finding (anxiety scores dropping from 6.7 to 3.2 when students saw their own history vs. a budget target) and produced a consistent, defensible answer to the question every fintech product faces: what do you compare the user's spend against? The easy answer is a budget. The research-supported answer is their own past. When a single finding shapes a system-wide decision like that, the research has done its job.",
        different:
          "I would recruit more users like Priya and fewer like Rahul. 9 of 10 interview participants skewed toward Rahul's profile — anxious, low tracking habit, surprised by bills. That made the friction-reduction thesis feel clear, but it may have underweighted the retention problem. Anxious non-trackers are hard to keep long-term regardless of product quality — they engage in bursts around the bill date and disengage when anxiety passes. Priya's need (mid-month course correction, category-level control, pattern understanding across time) is where Clearr has more defensible product territory. If I were running this with live data, I'd find which user type shows D30 retention and design the next iteration for them — not the user who's easiest to design for in week one.",
        learned:
          "Designing for emotional states in fintech requires a choice no design system can make for you: do you show the user what they want to hear, or what they need to know? Most finance apps default to accuracy — the number is correct and unambiguous. Clearr required designing for accuracy and emotional reception simultaneously. The data that matters is the data the user can stay present with long enough to act on. If the screen causes them to close the app before they finish reading, the accuracy of the number is irrelevant. This is a different problem from usability — it's whether the product can hold someone's attention during uncomfortable information. That's the design problem I want to keep working on.",
      },
    },
  },
  {
    id: "certus",
    slug: "certus",
    number: "13",
    title: "Certus",
    description:
      "B2B supplier compliance platform. End-to-end product design — research, IA, UI system, and interaction design — for a quality management team managing 148 suppliers across six compliance frameworks.",
    pitch:
      "Quality teams managing 100+ suppliers spend more time chasing documents than making compliance decisions. Certus replaces email threads, spreadsheets, and missed expiry dates with a structured audit workflow — risk triage on open, query threads with full history, and a certificate renewal calendar that escalates before things go overdue.",
    role: "Lead Product Designer",
    duration: "4 months",
    team: "Solo",
    stack: ["Figma", "FigJam", "User Research", "Design Systems", "Interaction Design"],
    year: "2026",
    tags: ["B2B SaaS", "Compliance", "Figma", "Design Systems", "User Research"],
    gradient: "from-slate-900 via-blue-950 to-slate-900",
    caseStudy: {
      badge: "CASE STUDY 13 / 2026",
      heroImage: "/case-studies/certus/hifi-1.svg",
      brief:
        "A mid-size manufacturing company manages 148 suppliers across ISO 9001, ISO 14001, REACH, OHSAS, and two sector-specific frameworks. Their quality team — three people — coordinated everything through email and a shared Excel workbook. Certificates expired without warning. Queries to suppliers went unanswered for weeks. Audit trails were manually compiled in Word documents the night before external audits. The brief: design a B2B SaaS platform that gives the quality team a single place to see supplier risk, raise and track compliance queries, and never miss a certificate renewal again.",
      pullQuote:
        "\"We spend four hours before every audit just pulling emails and spreadsheets together. If the system tracked this automatically, I could spend those four hours actually reviewing the findings.\" — Quality Manager, user research session",
      goals: [
        "Surface critical supplier risk at a glance — expiring certificates and overdue queries visible on open",
        "Replace email-based query management with a structured thread system that includes full audit trail",
        "Make raising a new compliance query faster than writing an email (target: under 90 seconds)",
        "Enable the quality team to prepare for external audits without manual document assembly",
        "Design a system that scales from 148 to 500+ suppliers without the interface becoming unusable",
      ],
      personas: [
        {
          name: "Priya R.",
          type: "Primary",
          age: "34",
          location: "Mumbai, India",
          role: "Quality Manager",
          goals: [
            "Know which suppliers are at risk before the external auditor asks",
            "Close compliance queries faster — current average is 6+ days",
            "Never manually compile an audit trail the night before an audit again",
          ],
          frustrations: [
            "Certificate expiry notices are buried in email threads from months ago",
            "No way to know if a supplier has seen a query or is simply ignoring it",
            "Has to CC four people on every email to maintain a paper trail",
          ],
          quote:
            "I know our suppliers well. What I don't know is which documents are missing until someone asks me at the worst possible time.",
        },
        {
          name: "Karan M.",
          type: "Secondary",
          age: "29",
          location: "Pune, India",
          role: "Supplier Account Manager",
          goals: [
            "See all open queries for his supplier portfolio in one view",
            "Know which queries are overdue so he can escalate before Priya does",
            "Reduce back-and-forth emails with suppliers by having context in one place",
          ],
          frustrations: [
            "Has to search across three email accounts and a shared drive to find a supplier's compliance history",
            "No visibility on query status unless Priya updates him manually",
            "Suppliers sometimes respond to old email threads, creating multiple conversation strands",
          ],
          quote:
            "I manage 40 supplier relationships. I can't keep the status of every compliance query in my head.",
        },
      ],
      colorPalette: [
        { name: "Primary Blue", hex: "#2563EB", usage: "Primary actions, active states, interactive elements" },
        { name: "Critical Red", hex: "#DC2626", usage: "At-risk suppliers, overdue queries, certificate alerts" },
        { name: "Amber High", hex: "#D97706", usage: "High-priority items, approaching deadlines, warnings" },
        { name: "Compliant Green", hex: "#16A34A", usage: "Resolved queries, compliant status, positive metrics" },
        { name: "Teal In-Review", hex: "#0891B2", usage: "In-review status, secondary info states" },
        { name: "Slate Dark", hex: "#0F172A", usage: "Sidebar, primary text, structural anchors" },
      ],
      typography: [
        { family: "Inter", weights: "400, 500, 600, 700", usage: "All body text, labels, table content" },
        { family: "Inter Mono", weights: "400, 600", usage: "IDs, codes, timestamps, status badges" },
      ],
      research: {
        intro:
          "I ran 8 contextual interviews with quality managers and supplier account managers across two manufacturing companies — one with 80 suppliers, one with 210. I also shadowed a compliance review meeting and reviewed a real audit preparation workflow, which involved watching someone manually copy-paste email threads into a Word document for two hours.",
        paragraphs: [
          "The core finding was not about features — it was about where trust breaks down. Quality managers do not trust email as a compliance record because it's too easy to lose, misfile, or overlook. But they had no alternative. Every participant described the same workaround: a shared Excel file maintained by one person, updated manually, with no version history and no way to know if it was current.",
          "Suppliers, when interviewed separately, described a different problem: they received compliance queries and didn't always know what was being asked or what format was acceptable. 'I replied with a PDF. They asked me to send it again as a Word document. Then they asked me to fill in their own form. Three emails for one piece of information.' This created a proxy problem — the real bottleneck wasn't supplier willingness but query clarity. A well-structured query with an explicit format request and a due date got answered in 1.8 days on average. An ambiguous email averaged 8.3 days.",
          "Certificate expiry was the clearest unmet need. All eight participants had experienced a missed expiry in the previous 12 months — two had faced external audit findings as a result. The current approach was a manually maintained calendar that required someone to remember to update it. The insight: certificates need to surface in context (when a query about that supplier is raised) not just in a separate calendar view the team only checks monthly.",
        ],
        insights: [
          "Ambiguous queries take 4.6× longer to close than structured ones with explicit format requirements and due dates",
          "Certificate expiry is caught in context — during a supplier interaction — not by periodic calendar reviews",
          "Quality teams need audit trail as a side effect of normal work, not as a separate documentation task",
          "Risk triage is the first-five-seconds job: 'Who do I need to deal with today?' must be answerable without navigation",
          "Supplier response rate correlates with query specificity — not relationship quality or supplier size",
        ],
      },
      keyDecisions: [
        {
          title: "Risk-first dashboard, not a metrics dashboard",
          description:
            "Early wireframes showed a standard KPI dashboard — compliance rate chart, query volume trend, certificate calendar. User testing surfaced a problem: none of those charts answered the question Priya asked every morning: 'Who do I need to deal with today?' The final dashboard leads with an alert banner (expiring within 14 days), then a supplier table sorted by risk level by default. Metrics cards exist but are secondary. The principle: a B2B compliance tool should answer 'what needs action' before it answers 'how are we trending'.",
        },
        {
          title: "Structured query form with contextual supplier sidebar",
          description:
            "The first iteration of 'Raise Query' was a simple form: supplier, subject, description, due date. Testing showed that quality managers were making mistakes — raising duplicate queries, setting unrealistic deadlines for high-risk suppliers, missing related open issues. The final design adds a contextual sidebar that loads the selected supplier's full profile alongside the form: risk level, compliance rate, open queries, and certificate expiry dates. This turned a form-filling task into an informed decision — the quality manager can see the supplier's full context while drafting the query.",
        },
        {
          title: "Conversation thread model for queries (not a ticket system)",
          description:
            "Early designs modelled queries on a ticket system: status, assignee, attachments, resolution notes in separate fields. Suppliers found this confusing — it felt like filling in a government form. The pivot was to a conversation thread with a persistent right panel for structured data. The thread handles all communication; the panel handles all system-of-record data (status, priority, audit trail, resolution checklist). This gave suppliers an interface that felt like messaging and gave quality managers an interface that felt like case management — using the same underlying data.",
        },
        {
          title: "HIGH RISK alert on supplier selection, not on query submission",
          description:
            "During usability testing, quality managers missed the risk indicator when it appeared only on the submitted query. By the time they saw it, the query was already drafted. Moving the alert to Step 1 of the Raise Query flow — immediately after supplier selection — produced a different behaviour: users paused, reviewed the supplier's open queries in the sidebar, and often revised the priority level or added context to the description. Showing risk early changed what people wrote, not just what they noticed.",
        },
        {
          title: "Audit trail as automatic byproduct, not a separate task",
          description:
            "The most time-consuming part of the quality team's workflow was audit preparation — assembling evidence of compliance activity from emails, spreadsheets, and calendar entries. The design decision was to make every action in Certus automatically append to a timestamped audit trail, visible in the query detail view and exportable as a PDF. Users never have to think about audit trail — it's generated by using the product normally. This is not a novel idea in isolation, but it required careful design: the trail had to be granular enough to satisfy an external auditor and readable enough that a quality manager could scan it in 30 seconds.",
        },
      ],
      screens: [
        {
          title: "Suppliers Dashboard",
          image: "/case-studies/certus/hifi-1.svg",
          caption:
            "Risk-first supplier overview: alert banner surfaces certificates expiring within 14 days, KPI cards quantify open exposure, and the supplier table defaults to risk-sorted order so the most critical suppliers are always visible without filtering.",
          decision:
            "The alert banner was the last thing designed and the most important. Every earlier version buried expiry warnings in a calendar tab. Watching a quality manager spend six minutes finding a certificate that had expired three days ago was enough to justify a persistent, prominent banner.",
          aspect: "desktop",
        },
        {
          title: "Query Tracker",
          image: "/case-studies/certus/hifi-2.svg",
          caption:
            "Unified query list with status tabs and priority badges. Overdue rows surface in red with a left-side accent bar — a visual pattern that means 'action required today' without requiring the user to read every row.",
          decision:
            "Status tabs (All / Pending / In Review / Resolved / Overdue) replaced a filter dropdown because overdue queries needed permanent visibility. A dropdown hides them; a tab with a red count makes them impossible to miss.",
          aspect: "desktop",
        },
        {
          title: "Query Detail — Conversation Thread",
          image: "/case-studies/certus/hifi-3.svg",
          caption:
            "Conversation thread on the left, structured data panel on the right. The thread handles communication; the panel handles the system of record — status, priority, resolution checklist, and audit trail. Both update in real time.",
          decision:
            "The two-panel layout resolved a tension in testing: suppliers wanted a messaging experience, quality managers wanted a case management experience. The thread is conversational; the right panel is authoritative. Same query, two mental models, one screen.",
          aspect: "desktop",
        },
        {
          title: "Raise New Query — Supplier Selection",
          image: "/case-studies/certus/hifi-4.svg",
          caption:
            "Three-step query creation with contextual supplier profile sidebar. Selecting a high-risk supplier immediately surfaces their risk level, open queries, and certificate expiry — giving the quality manager full context before they write a single word.",
          decision:
            "The HIGH RISK alert on Step 1 (not on final submission) was the most consequential placement decision. Moving it earlier changed what users wrote in the description field — they added more context and set higher priority levels, reducing the round-trips needed to close the query.",
          aspect: "desktop",
        },
      ],
      metrics: [
        { value: "34%", label: "Reduction in average days-to-close" },
        { value: "3", label: "Clicks to raise a full compliance query" },
        { value: "100%", label: "Automatic audit trail coverage" },
        { value: "89%", label: "Task success rate in usability testing" },
      ],
      impact: [
        {
          value: "34%",
          label: "Faster query resolution",
          description:
            "Structured queries with explicit format requirements and due dates closed in 4.2 days on average, vs. 6.4 days for email-based queries in the baseline observation period.",
        },
        {
          value: "0",
          label: "Manual audit prep hours",
          description:
            "The automatic audit trail — timestamped and exportable — eliminated the pre-audit document assembly session that was taking the quality team 3–4 hours per audit cycle.",
        },
        {
          value: "3",
          label: "Clicks to raise a query",
          description:
            "The original email-based workflow required finding the supplier's contact, writing a structured request, CCing four colleagues, and filing the email. Certus does it in three clicks from any supplier row.",
        },
        {
          value: "89%",
          label: "Task success in testing",
          description:
            "Across 8 moderated usability sessions with quality managers and account managers, 89% of tasks were completed without assistance on first attempt — with a particular spike in 'identify today's most urgent action' (100%).",
        },
      ],
      reflection: {
        proud:
          "The contextual supplier sidebar in the Raise Query flow is the decision I'm most confident in. It wasn't in the brief, wasn't in the first three wireframe iterations, and came entirely from watching a quality manager make a mistake — raising a critical query against a supplier who already had five open queries and an overdue certificate — and not realising it until after she'd sent the email. The sidebar turns that mistake into an impossibility: you can't select a supplier without seeing their full compliance context. A piece of design that changes what people write, not just what they see, is worth protecting.",
        different:
          "I would have recruited supplier-side users earlier. All eight research participants were from the quality team's side. I interviewed supplier contacts only in a second round, after the core information architecture was already set. Several structural decisions — particularly how queries are written and how format expectations are communicated — would have been sharper with supplier input from the start. The conversation thread model emerged partly from supplier feedback in round two; if I'd heard it in round one, the initial query form might have been designed differently from the outset.",
        learned:
          "B2B compliance tools have an unusual design constraint: the person who uses the software daily is not the person who authorises the budget, and the person who authorises the budget is often preparing for an external audit once or twice a year. This means the product has to perform two distinct jobs: it has to be fast and low-friction for the daily user (the quality manager), and it has to produce credible, exportable evidence for the infrequent but high-stakes user (the auditor or compliance officer reviewing the year's work). Designing for both without letting either override the other is the hardest UX problem in this space — and the automatic audit trail was the answer: it serves both users with zero incremental effort from either.",
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
