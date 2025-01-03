import { motion } from 'framer-motion';
import HoverScale from '../../components/HoverScale';

const CloudMigration = () => {
  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by up to 60% through efficient cloud resource utilization',
      icon: '💰'
    },
    {
      title: 'Enhanced Scalability',
      description: 'Scale resources dynamically based on demand without infrastructure limitations',
      icon: '📈'
    },
    {
      title: 'Improved Performance',
      description: 'Boost application performance with modern cloud-native architectures',
      icon: '⚡'
    },
    {
      title: 'Business Continuity',
      description: 'Ensure 99.99% uptime with robust disaster recovery solutions',
      icon: '🔄'
    }
  ];

  const process = [
    {
      phase: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure, applications, and dependencies',
      steps: [
        'Infrastructure audit',
        'Application portfolio analysis',
        'Dependencies mapping',
        'Risk assessment',
        'Cost analysis'
      ],
      icon: '🔍'
    },
    {
      phase: 'Planning',
      description: 'Detailed migration strategy development with clear timelines and milestones',
      steps: [
        'Migration strategy development',
        'Architecture design',
        'Timeline creation',
        'Resource allocation',
        'Risk mitigation planning'
      ],
      icon: '📋'
    },
    {
      phase: 'Execution',
      description: 'Systematic migration of applications and data with minimal disruption',
      steps: [
        'Environment setup',
        'Data migration',
        'Application migration',
        'Testing and validation',
        'Performance optimization'
      ],
      icon: '🚀'
    },
    {
      phase: 'Optimization',
      description: 'Continuous improvement and optimization of cloud resources',
      steps: [
        'Performance monitoring',
        'Cost optimization',
        'Security enhancement',
        'Process automation',
        'Documentation'
      ],
      icon: '⚙️'
    }
  ];

  const features = [
    {
      title: 'Zero-Downtime Migration',
      description: 'Migrate your applications and data without disrupting your business operations',
      icon: '⏱️'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect your data during and after migration',
      icon: '🔒'
    },
    {
      title: 'Cloud-Native Transformation',
      description: 'Modernize applications to leverage cloud-native capabilities and microservices',
      icon: '☁️'
    },
    {
      title: 'Automated Migration Tools',
      description: 'Utilize advanced tools and automation for efficient and reliable migration',
      icon: '🤖'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry regulations throughout the migration process',
      icon: '📜'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring during and after migration',
      icon: '🛟'
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
            Cloud Migration Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform your business with our expert cloud migration services. 
            We ensure a seamless transition to the cloud while optimizing your infrastructure for performance and cost.
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Migration Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <HoverScale key={index}>
                <motion.div
                  className="p-6 bg-white rounded-xl shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{phase.phase}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center text-gray-600">
                        <span className="mr-2">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Features & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <HoverScale key={index}>
                <motion.div
                  className="p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Cloud Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's work together to create a seamless migration strategy tailored to your business needs.
          </p>
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CloudMigration; 