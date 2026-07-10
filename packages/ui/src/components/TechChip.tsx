import { motion } from "framer-motion";

export interface TechChipProps {
  label: string;
  icon?: string;
}

export const TechChip = ({ label, icon }: TechChipProps) => {
  return (
    <motion.span
      className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </motion.span>
  );
};
