
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    xs: "h-3 w-3 border",
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-3",
  };

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-primary border-b-transparent",
        sizeClasses[size],
        className
      )}
    />
  );
};

export default LoadingSpinner;
