"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
  href?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  href,
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md",
    secondary: "bg-elevated text-text border border-line hover:border-accent hover:bg-white",
    ghost: "text-muted hover:text-text hover:bg-elevated",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const baseClasses = "glass-card rounded-xl p-6";
  const classes = `${baseClasses} ${hover ? "hover:translate-y-[-2px]" : ""} ${className}`;

  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "good" | "warn" | "bad" | "accent";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-elevated text-muted border border-line",
    good: "bg-green-50 text-good border border-green-200",
    warn: "bg-yellow-50 text-warn border border-yellow-200",
    bad: "bg-red-50 text-bad border border-red-200",
    accent: "bg-blue-50 text-accent border border-blue-200",
  };

  const variantClass = variants[variant] || variants.default;
  const classes = `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClass} ${className}`;

  return <span className={classes}>{children}</span>;
}

