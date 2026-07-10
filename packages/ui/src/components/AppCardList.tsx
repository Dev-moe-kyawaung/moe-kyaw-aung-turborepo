import { AppCard, AppCardProps } from "./AppCard";
import { motion } from "framer-motion";

export interface AppCardListProps {
  apps: AppCardProps[];
}

export const AppCardList = ({ apps }: AppCardListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app, idx) => (
        <motion.div
          key={app.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
        >
          <AppCard {...app} />
        </motion.div>
      ))}
    </div>
  );
};
