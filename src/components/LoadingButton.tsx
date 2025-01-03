import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface LoadingButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  loadingText = 'Loading...',
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <motion.button
      className={`relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        isLoading ? 'cursor-not-allowed' : ''
      } ${className}`}
      whileHover={!isLoading && !disabled ? { scale: 1.02 } : undefined}
      whileTap={!isLoading && !disabled ? { scale: 0.98 } : undefined}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="absolute left-4 w-5 h-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      <span className={isLoading ? 'ml-8' : ''}>
        {isLoading ? loadingText : children}
      </span>
    </motion.button>
  );
};

export default LoadingButton; 