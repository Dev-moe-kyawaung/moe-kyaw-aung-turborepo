import { motion } from "framer-motion";
import { Button } from "./Button";

export interface AppCardProps {
  icon?: string;
  title: string;
  description?: string;
  link?: string;
  image?: string;
}

export const AppCard = ({
  icon,
  title,
  description,
  link,
  image,
}: AppCardProps) => {
  return (
    <motion.div
      className="flex h-full flex-col justify-between rounded-xl border border-secondary-200 bg-white p-5 shadow-sm transition hover:shadow-md"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4 flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-14 w-14 rounded-lg object-cover ring-1 ring-secondary-200"
          />
        ) : icon ? (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
            {icon}
          </div>
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600">
            📱
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-secondary-600">{description}</p>
          )}
        </div>
      </div>
      {link && (
        <div className="mt-auto">
          <Button variant="secondary" size="sm" href={link}>
            View App
          </Button>
        </div>
      )}
    </motion.div>
  );
};
