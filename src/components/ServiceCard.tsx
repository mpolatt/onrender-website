import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  path
}) => {
  const cardVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
      scale: 1.02,
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95, rotate: 0 }
  };

  const featureVariants = {
    rest: { x: 0, opacity: 0.7 },
    hover: { x: 4, opacity: 1 }
  };

  return (
    <Link to={path}>
      <motion.div
        className="bg-white rounded-lg overflow-hidden h-full"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        <div className="p-8">
          <motion.div
            className="flex items-center justify-center h-24 w-24 rounded-md bg-primary bg-opacity-10 mx-auto"
            variants={iconVariants}
          >
            {icon}
          </motion.div>

          <motion.h3
            className="mt-6 text-xl font-semibold text-gray-900 text-center"
            variants={{
              hover: { scale: 1.05 }
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mt-4 text-gray-600 text-center"
            variants={{
              hover: { y: -2 }
            }}
          >
            {description}
          </motion.p>

          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <motion.li
                key={feature}
                className="flex items-start"
                variants={featureVariants}
              >
                <motion.svg
                  className="h-6 w-6 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  variants={{
                    hover: { rotate: 360 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
                <span className="ml-3 text-gray-600">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8 text-center"
            variants={{
              hover: { y: -4 }
            }}
          >
            <span className="inline-flex items-center text-primary font-medium">
              Learn More
              <motion.svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 }
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard; 