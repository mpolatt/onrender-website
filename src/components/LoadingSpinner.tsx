import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const LoadingSpinner: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.div
        className={`w-16 h-16 border-4 border-t-transparent rounded-full ${
          theme === 'dark' ? 'border-dark-primary' : 'border-primary'
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default LoadingSpinner; 