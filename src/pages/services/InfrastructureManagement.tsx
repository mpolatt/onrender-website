import { motion } from 'framer-motion';
import HoverScale from '../../components/HoverScale';

const InfrastructureManagement = () => {
  const benefits = [
    {
      title: 'Improved Uptime',
      description: 'Achieve 99.99% uptime with proactive monitoring and maintenance',
      icon: '⚡'
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimize resource utilization and reduce operational costs',
      icon: '💰'
    },
    {
      title: 'Enhanced Security',
      description: 'Implement robust security measures and compliance controls',
      icon: '🔒'
    },
    {
      title: 'Scalability',
      description: 'Easily scale resources up or down based on demand',
      icon: '📈'
    }
  ];

  const services = [
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock infrastructure monitoring and alerting',
      features: [
        'Real-time performance monitoring',
        'Automated alert systems',
        'Incident response management',
        'Performance analytics',
        'Resource utilization tracking'
      ],
      icon: '👁️'
    },
    {
      title: 'Security Management',
      description: 'Comprehensive security and compliance management',
      features: [
        'Access control management',
        'Security patch management',
        'Vulnerability assessments',
        'Compliance monitoring',
        'Security incident response'
      ],
      icon: '🛡️'
    },
    {
      title: 'Backup & Recovery',
      description: 'Robust backup and disaster recovery solutions',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data retention management',
        'Recovery testing',
        'Business continuity support'
      ],
      icon: '💾'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous performance improvement and optimization',
      features: [
        'Resource optimization',
        'Performance tuning',
        'Capacity planning',
        'Load balancing',
        'Cache optimization'
      ],
      icon: '⚙️'
    }
  ];

  const features = [
    {
      title: 'Automated Scaling',
      description: 'Automatically adjust resources based on demand patterns',
      icon: '🔄'
    },
    {
      title: 'Configuration Management',
      description: 'Centralized configuration and change management',
      icon: '⚙️'
    },
    {
      title: 'Cost Management',
      description: 'Detailed cost tracking and optimization recommendations',
      icon: '📊'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure adherence to industry standards and regulations',
      icon: '📜'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      icon: '💻'
    },
    {
      title: 'Network Management',
      description: 'Comprehensive network monitoring and optimization',
      icon: '🌐'
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
            Infrastructure Management Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Optimize your cloud infrastructure with our comprehensive management services.
            We ensure maximum performance, security, and cost-efficiency for your cloud environment.
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

      {/* Core Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Core Services</h2>
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Additional Features</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Infrastructure?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can help you achieve optimal performance and efficiency.
          </p>
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureManagement; 