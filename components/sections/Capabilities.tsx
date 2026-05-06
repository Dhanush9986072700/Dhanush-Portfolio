"use client";

import { Layers, Component, Code, Database } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { capabilities } from "@/data/capabilities";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const iconMap = {
  Layers: Layers,
  Component: Component,
  Code: Code,
  Database: Database,
};

const iconColors = [
  "text-[#c9ff6a] bg-[#c9ff6a]/10 border-[#c9ff6a]/25",
  "text-white bg-white/10 border-white/20",
  "text-[#f3a841] bg-[#f3a841]/10 border-[#f3a841]/25",
  "text-white/70 bg-white/5 border-white/15",
];

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="bg-white/[0.018]">
      <Container>
        <ScrollReveal className="mb-16">
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">
            03 / Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white">
            What I bring{" "}
            <span className="text-white/48">to the table</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.1}
        >
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon as keyof typeof iconMap];
            const colorClass = iconColors[i];

            return (
              <StaggerItem key={cap.id}>
                <motion.div
                  className="glass p-6 h-full flex flex-col group hover:border-white/24 transition-all duration-300"
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-5 ${colorClass}`}
                  >
                    {Icon && <Icon size={18} />}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/45 leading-relaxed mb-5 flex-1">
                    {cap.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cap.tags.map((tag) => (
                      <Badge key={tag} variant="mono" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
