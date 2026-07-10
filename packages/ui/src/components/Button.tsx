import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500";
  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
    secondary:
      "bg-secondary-200 text-secondary-900 hover:bg-secondary-300 active:bg-secondary-400",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${base} ${variants[variant]} ${sizes[size]}`}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
