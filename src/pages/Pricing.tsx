import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import HoverScale from '../components/HoverScale';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
  icon: string;
}

const Pricing = () => {
  const navigate = useNavigate();

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting their cloud journey',
      price: '$999',
      period: 'per month',
      icon: '🚀',
      features: [
        { name: 'Basic cloud infrastructure setup', included: true },
        { name: 'Standard monitoring', included: true },
        { name: '8/5 support', included: true },
        { name: 'Basic security features', included: true },
        { name: 'Monthly reporting', included: true },
        { name: 'Advanced monitoring', included: false },
        { name: 'Custom solutions', included: false },
        { name: '24/7 priority support', included: false }
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with complex needs',
      price: '$2,499',
      period: 'per month',
      icon: '⭐',
      highlighted: true,
      features: [
        { name: 'Basic cloud infrastructure setup', included: true },
        { name: 'Standard monitoring', included: true },
        { name: '24/7 support', included: true },
        { name: 'Advanced security features', included: true },
        { name: 'Weekly reporting', included: true },
        { name: 'Advanced monitoring', included: true },
        { name: 'Custom solutions', included: false },
        { name: '24/7 priority support', included: false }
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring full-scale solutions',
      price: 'Custom',
      period: 'contact us',
      icon: '🏢',
      features: [
        { name: 'Basic cloud infrastructure setup', included: true },
        { name: 'Standard monitoring', included: true },
        { name: '24/7 support', included: true },
        { name: 'Advanced security features', included: true },
        { name: 'Daily reporting', included: true },
        { name: 'Advanced monitoring', included: true },
        { name: 'Custom solutions', included: true },
        { name: '24/7 priority support', included: true }
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
              Transparent Pricing
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Choose the perfect plan for your business needs.
              All plans include our core infrastructure and security features.
            </motion.p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className={`relative bg-white p-8 rounded-xl shadow-lg ${
                      tier.highlighted ? 'border-2 border-primary' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <span className="text-4xl mb-4 block">{tier.icon}</span>
                      <h3 className="text-2xl font-semibold text-primary mb-2">{tier.name}</h3>
                      <p className="text-gray-600 mb-6">{tier.description}</p>
                      <div className="text-3xl font-bold text-gray-800 mb-2">
                        {tier.price}
                      </div>
                      <div className="text-gray-600">{tier.period}</div>
                    </div>
                    <div className="space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className={`mr-2 text-xl ${
                            feature.included ? 'text-green-500' : 'text-gray-400'
                          }`}>
                            {feature.included ? '✓' : '×'}
                          </span>
                          <span className={feature.included ? '' : 'text-gray-400'}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <motion.button
                      onClick={() => navigate('/contact')}
                      className={`w-full mt-8 px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                        tier.highlighted 
                          ? 'bg-primary hover:bg-secondary' 
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I upgrade my plan later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade your plan at any time. We'll prorate your billing and adjust your services immediately.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What's included in the setup?</h3>
                <p className="text-gray-600">
                  All plans include initial infrastructure setup, security configurations, and basic monitoring tools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-gray-600">
                  Yes, our Enterprise plan includes custom solutions tailored to your specific business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your needs and find the perfect solution for your business.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Pricing; 