import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import HoverScale from '../components/HoverScale';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless transition of your infrastructure and applications to Google Cloud Platform.',
      features: [
        'Infrastructure assessment and planning',
        'Data migration strategy',
        'Zero-downtime migration execution',
        'Post-migration optimization'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      path: '/services/cloud-migration'
    },
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive management and optimization of your cloud infrastructure.',
      features: [
        'Infrastructure as Code (IaC)',
        'Performance monitoring',
        'Cost optimization',
        'Security management'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      path: '/services/infrastructure-management'
    },
    {
      title: 'Data Analytics & ML',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.',
      features: [
        'Business Intelligence',
        'Machine Learning Models',
        'Predictive Analytics',
        'Data Visualization'
      ],
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      path: '/services/data-analytics'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to your business needs.
                From migration to management, we've got you covered.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg cursor-pointer"
                    onClick={() => handleServiceClick(service.path)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services; 