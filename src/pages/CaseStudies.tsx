import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import HoverScale from '../components/HoverScale';

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
}

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies: CaseStudy[] = [
    {
      title: 'Cloud Migration Success Story',
      client: 'Global E-commerce Platform',
      industry: 'Retail',
      challenge: 'Needed to scale infrastructure to handle growing customer base while reducing operational costs.',
      solution: 'Implemented a comprehensive cloud migration strategy with automated scaling and optimization.',
      results: [
        '40% reduction in infrastructure costs',
        '99.99% uptime achievement',
        '3x faster deployment cycles',
        'Improved global reach'
      ],
      logo: '🛍️'
    },
    {
      title: 'DevOps Transformation',
      client: 'Leading Financial Institution',
      industry: 'Banking',
      challenge: 'Legacy systems causing slow deployment cycles and reliability issues.',
      solution: 'Modernized infrastructure with containerization and automated CI/CD pipelines.',
      results: [
        '75% faster time-to-market',
        '90% reduction in deployment errors',
        'Improved security compliance',
        'Enhanced system reliability'
      ],
      logo: '🏦'
    },
    {
      title: 'Data Analytics Implementation',
      client: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Needed better insights from vast amounts of patient and operational data.',
      solution: 'Implemented advanced analytics platform with real-time dashboards and predictive modeling.',
      results: [
        'Improved patient outcomes by 25%',
        'Reduced operational costs by 30%',
        'Enhanced resource allocation',
        'Better decision-making capabilities'
      ],
      logo: '🏥'
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
              Case Studies
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Discover how we've helped organizations transform their businesses
              through innovative cloud solutions.
            </motion.p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {caseStudies.map((study, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{study.logo}</span>
                      <div>
                        <h3 className="text-2xl font-semibold text-primary">{study.title}</h3>
                        <p className="text-gray-600">{study.client} | {study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Challenge</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <span className="mr-2 text-green-500">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
              Let's discuss how we can help you achieve similar results.
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

export default CaseStudies; 