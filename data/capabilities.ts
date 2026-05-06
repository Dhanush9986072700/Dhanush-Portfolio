export interface Capability {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const capabilities: Capability[] = [
  {
    id: "product-design",
    icon: "Layers",
    title: "Product Design",
    description:
      "End-to-end product thinking — from user research to production deployment. I work across the full design lifecycle with equal depth at each stage.",
    tags: ["UX Research", "IA", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    id: "design-systems",
    icon: "Component",
    title: "Design Systems",
    description:
      "Token-based design systems that scale across teams and themes. Built to be maintained by designers and consumed by engineers.",
    tags: ["Design Tokens", "Component Libraries", "Theming", "Documentation"],
  },
  {
    id: "frontend-engineering",
    icon: "Code",
    title: "Front-End Engineering",
    description:
      "Hands-on shipping in modern React stacks. Designs become production code — no translation layer, no ambiguity, no handoff friction.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    id: "fullstack-product",
    icon: "Database",
    title: "Full-Stack Product",
    description:
      "Comfortable with data modeling, APIs, and full-stack product flows. I can take a product from schema design to shipped feature.",
    tags: ["Prisma", "PostgreSQL", "REST APIs", "Authentication"],
  },
];
