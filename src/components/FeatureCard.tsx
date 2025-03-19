
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

const FeatureCard = ({ icon, title, description, index = 0, className }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group hover-lift rounded-xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 p-6 bg-white dark:bg-gray-900",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-balance">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
