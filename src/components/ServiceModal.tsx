import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetails {
  overview: string;
  features: string[];
  benefits: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: string;
  details: ServiceDetails;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  icon,
  details
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{icon}</span>
                    <h2 className="text-2xl font-bold text-primary">{title}</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <span className="text-2xl">×</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{details.overview}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Benefits</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {details.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal; 