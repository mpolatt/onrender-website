import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Pricing = () => {
  const navigate = useNavigate();

  const consultingServices = [
    {
      title: 'Cloud Infrastructure & DevOps',
      description: 'Expert guidance on cloud architecture, DevOps practices, and infrastructure optimization',
      features: [
        'Cloud architecture design and review',
        'DevOps process optimization',
        'Infrastructure automation',
        'CI/CD pipeline implementation',
        'Cost optimization strategies',
        'Security best practices'
      ],
      icon: '☁️'
    },
    {
      title: 'Google Cloud Platform',
      description: 'Specialized consulting for GCP services and solutions',
      features: [
        'GCP architecture design',
        'Migration planning and execution',
        'Service optimization',
        'Security and compliance',
        'Cost management',
        'Performance tuning'
      ],
      icon: '🚀'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive solutions for large-scale organizations',
      features: [
        'Enterprise architecture planning',
        'Multi-cloud strategy',
        'Digital transformation',
        'Scalability solutions',
        'High availability design',
        'Disaster recovery planning'
      ],
      icon: '🏢'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Consulting Services
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Expert DevOps and Google Cloud Platform consulting tailored to your business needs.
              Get personalized solutions and pricing based on your specific requirements.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-center mb-8">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-2xl font-semibold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="mr-2 text-xl text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">How do you determine project costs?</h3>
                <p className="text-gray-600">
                  We provide custom quotes based on your specific needs, project scope, and requirements. Our pricing considers factors such as project complexity, timeline, required resources, and ongoing support needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">What engagement models do you offer?</h3>
                <p className="text-gray-600">
                  We offer flexible engagement models including project-based consulting, retained services, and ongoing support arrangements. We'll work with you to determine the best model for your needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">Do you offer initial consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer initial consultations to understand your needs, assess your current infrastructure, and provide recommendations. This helps us create a tailored solution and accurate pricing proposal.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">What is your expertise in Google Cloud?</h3>
                <p className="text-gray-600">
                  Our team consists of certified Google Cloud professionals with extensive experience in GCP services, cloud architecture, migration, and optimization. We stay current with the latest GCP features and best practices.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your needs and get a customized solution proposal.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Pricing; 