"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { KeyboardEvent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
}: CardProps) {
  const shouldReduceMotion = useReducedMotion();
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      whileHover={
        hover && !shouldReduceMotion
          ? {
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
      className={`glass transition-colors duration-200 ${
        hover ? "cursor-pointer hover:border-white/24" : ""
      } ${onClick ? "focus-ring" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
