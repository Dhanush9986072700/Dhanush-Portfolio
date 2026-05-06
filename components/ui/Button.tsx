"use client";

import { forwardRef } from "react";
import type { ReactNode } from "react";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";

type ButtonVariant = "primary" | "ghost" | "gradient";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const sizes: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-sm px-7 py-3.5 gap-2.5",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90",
  ghost:
    "border border-white/14 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5",
  gradient:
    "bg-white text-black hover:bg-white/90 relative overflow-hidden",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className = "", ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const base =
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-ring tap-target cursor-pointer select-none";

    return (
      <motion.button
        ref={ref}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {variant === "gradient" ? (
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
