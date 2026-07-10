import { motion } from "framer-motion";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Avatar = ({ src, alt, size = "lg", className = "" }: AvatarProps) => {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-32 w-32",
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ring-4 ring-primary-500 ${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
  );
};
