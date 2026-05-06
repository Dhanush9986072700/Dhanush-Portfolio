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
