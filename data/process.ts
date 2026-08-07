export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "The brief is a symptom. I spend the first phase understanding what's actually broken — behaviour data, stakeholder interviews, competitive gaps. The real problem is almost always one layer below what was asked.",
    output: "Problem definition",
  },
  {
    number: "02",
    title: "Frame",
    description:
      "Write the success criteria before any wireframe. What moves in 90 days? Who are we designing for and who are we not? What constraints are fixed versus negotiable? Without this, every design decision is a guess.",
    output: "Design brief",
  },
  {
    number: "03",
    title: "Prototype",
    description:
      "Low-fidelity on purpose. Test with real users in week two — not to validate, but to find the assumption that's wrong. The ones that survive become the design foundation. The ones that break get cut before they cost a sprint.",
    output: "Tested flows",
  },
  {
    number: "04",
    title: "Build",
    description:
      "I code when I can. Figma is theory; the browser is proof. Building and designing together compresses the feedback loop to hours, not weeks. Implementation surfaces decisions you can't see in a static frame.",
    output: "Shipped product",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "90-day post-launch review against the brief's success metrics. What moved? What didn't? Why? The launch is when the real data starts — the work isn't done until the metric moves or you understand why it didn't.",
    output: "Iteration roadmap",
  },
];
