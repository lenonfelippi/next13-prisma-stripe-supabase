
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
  rounded?: boolean;
}

export const LoadingSkeleton = ({ className = "", rounded = false }: Props) => {
  return (
    <motion.div
      className={twMerge(
        rounded ? "rounded-full" : "rounded",
        "border border-theme-gray",
        className
      )}
      animate={{
        backgroundColor: ["#D9D9D9", "#f4f5f6", "#D9D9D9"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />
  );
};
