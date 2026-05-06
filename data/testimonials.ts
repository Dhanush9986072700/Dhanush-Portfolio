export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  initials: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Dhanush rebuilt our entire immigration platform solo — 63 pages, 30+ programme pages, shipped in 3 months. It looks and performs like something a 10-person team built. The leads we were missing before are converting now.",
    name: "V.K.",
    role: "Founder & CEO",
    company: "XIPHIAS Group",
    project: "xiphiasimmigration.com",
    initials: "VK",
    featured: true,
  },
  {
    id: "2",
    quote:
      "Rare to find a designer who also ships production-quality code. He removes the biggest bottleneck in most product teams: the handoff. What's designed is what ships — no translation, no drift.",
    name: "Engineering Lead",
    role: "Engineering Lead",
    company: "XIPHIAS Group",
    project: "XIPHIAS Platform",
    initials: "EL",
  },
  {
    id: "3",
    quote:
      "The token architecture he built means our design system finally has a structure the whole team can work with. We can theme anything in hours, not weeks.",
    name: "Product Lead",
    role: "Product Lead",
    company: "XIPHIAS Group",
    project: "XIPHIAS Design System",
    initials: "PL",
  },
];
