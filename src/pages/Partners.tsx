import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import HoverScale from '../components/HoverScale';

interface Partner {
  name: string;
  description: string;
  logo: string;
  type: 'Technology' | 'Solution' | 'Implementation';
  benefits: string[];
}

interface SuccessStory {
  title: string;
  partner: string;
  description: string;
  results: string[];
  logo: string;
}

const Partners = () => {
  const navigate = useNavigate();

  const partners: Partner[] = [
    {
      name: 'Google Cloud Platform',
      description: 'Premier cloud infrastructure and services partner',
      logo: '☁️',
      type: 'Technology',
      benefits: [
        'Advanced cloud infrastructure',
        'Global network coverage',
        'Enterprise-grade security',
        'Innovative AI/ML capabilities'
      ]
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration and management platform',
      logo: '☸️',
      type: 'Technology',
      benefits: [
        'Automated deployment',
        'Scalable operations',
        'Container management',
        'Service discovery'
      ]
    },
    {
      name: 'Docker',
      description: 'Containerization platform partner',
      logo: '🐳',
      type: 'Technology',
      benefits: [
        'Application containerization',
        'Consistent environments',
        'Rapid deployment',
        'Resource efficiency'
      ]
    },
    {
      name: 'Linux Foundation',
      description: 'Open source technology partner',
      logo: '🐧',
      type: 'Technology',
      benefits: [
        'Open source expertise',
        'Community collaboration',
        'Enterprise support',
        'Technology standards'
      ]
    }
  ];

  const successStories: SuccessStory[] = [
    {
      title: 'Global E-commerce Platform Migration',
      partner: 'Google Cloud Platform',
      description: 'Successfully migrated a major e-commerce platform to GCP, improving performance and scalability',
      logo: '🛍️',
      results: [
        '40% reduction in infrastructure costs',
        '99.99% uptime achievement',
        '3x faster deployment cycles',
        'Improved global reach'
      ]
    },
    {
      title: 'Financial Services Modernization',
      partner: 'Kubernetes',
      description: 'Modernized legacy banking systems using containerization and microservices architecture',
      logo: '🏦',
      results: [
        '50% faster time-to-market',
        'Enhanced security compliance',
        'Improved system reliability',
        'Reduced operational costs'
      ]
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
              Partner Ecosystem
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We collaborate with industry leaders to deliver cutting-edge cloud solutions.
              Together, we drive innovation and digital transformation.
            </motion.p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{partner.logo}</span>
                      <div>
                        <h3 className="text-2xl font-semibold text-primary">{partner.name}</h3>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {partner.type} Partner
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    <div className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-600">
                          <span className="mr-2 text-green-500">✓</span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{story.logo}</span>
                      <div>
                        <h3 className="text-2xl font-semibold text-primary">{story.title}</h3>
                        <p className="text-gray-600">with {story.partner}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{story.description}</p>
                    <div className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-gray-600">
                          <span className="mr-2 text-green-500">✓</span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Program CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our partner ecosystem and let's create innovative solutions together.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Partners; 