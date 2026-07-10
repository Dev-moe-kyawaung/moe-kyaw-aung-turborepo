import { motion } from "framer-motion";

export interface SocialLinkProps {
  label: string;
  href: string;
  icon?: string;
}

export const SocialLink = ({ label, href, icon = "🔗" }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-lg border border-secondary-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
};
