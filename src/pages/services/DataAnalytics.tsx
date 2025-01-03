import { motion } from 'framer-motion';
import HoverScale from '../../components/HoverScale';

const DataAnalytics = () => {
  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions based on actionable insights',
      icon: '📊'
    },
    {
      title: 'Predictive Analytics',
      description: 'Anticipate trends and opportunities with advanced analytics',
      icon: '🔮'
    },
    {
      title: 'Process Optimization',
      description: 'Streamline operations with data-backed improvements',
      icon: '⚡'
    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior and preferences better',
      icon: '🎯'
    }
  ];

  const services = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      features: [
        'Custom dashboard development',
        'Real-time analytics',
        'Data visualization',
        'KPI tracking',
        'Automated reporting'
      ],
      icon: '📈'
    },
    {
      title: 'Machine Learning',
      description: 'Leverage ML models for advanced analytics and predictions',
      features: [
        'Predictive modeling',
        'Pattern recognition',
        'Anomaly detection',
        'Recommendation systems',
        'Natural language processing'
      ],
      icon: '🤖'
    },
    {
      title: 'Big Data Analytics',
      description: 'Process and analyze large-scale data efficiently',
      features: [
        'Data pipeline development',
        'Real-time processing',
        'Data warehousing',
        'ETL processes',
        'Distributed computing'
      ],
      icon: '💾'
    },
    {
      title: 'Data Science Consulting',
      description: 'Expert guidance for your data science initiatives',
      features: [
        'Strategy development',
        'Technology selection',
        'Model development',
        'Team training',
        'Best practices implementation'
      ],
      icon: '🔬'
    }
  ];

  const capabilities = [
    {
      title: 'Advanced Analytics',
      description: 'Statistical analysis and advanced data modeling',
      features: [
        'Statistical modeling',
        'Time series analysis',
        'A/B testing',
        'Multivariate analysis',
        'Regression analysis'
      ],
      icon: '📊'
    },
    {
      title: 'Data Engineering',
      description: 'Build robust data infrastructure and pipelines',
      features: [
        'Data pipeline design',
        'Data quality management',
        'Data integration',
        'Schema design',
        'Performance optimization'
      ],
      icon: '⚙️'
    },
    {
      title: 'MLOps',
      description: 'Streamline machine learning operations and deployment',
      features: [
        'Model deployment',
        'Version control',
        'Performance monitoring',
        'Automated retraining',
        'Pipeline automation'
      ],
      icon: '🔄'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Data Analytics & Machine Learning
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform your data into actionable insights with our advanced analytics 
            and machine learning solutions. Drive innovation and growth with data-driven decisions.
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <HoverScale key={index}>
                <motion.div
                  className="p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <HoverScale key={index}>
                <motion.div
                  className="p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Technical Capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <HoverScale key={index}>
                <motion.div
                  className="p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's explore how our data analytics solutions can drive your business forward.
          </p>
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Analytics Journey
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics; 