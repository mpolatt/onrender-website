import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HoverScale from '../components/HoverScale';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceModal from '../components/ServiceModal';

const Home: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: 'DevOps Cloud Consultancy',
      icon: '☁️',
      description: 'Expert guidance for your cloud transformation journey',
      details: {
        overview: 'Our DevOps Cloud Consultancy service helps organizations streamline their development and operations processes while leveraging cloud technologies effectively.',
        features: [
          'Cloud architecture assessment and design',
          'DevOps maturity assessment',
          'CI/CD pipeline optimization',
          'Infrastructure as Code (IaC) implementation',
          'Containerization and orchestration strategies',
          'Performance optimization and monitoring'
        ],
        benefits: [
          'Faster time to market',
          'Reduced operational costs',
          'Improved team collaboration',
          'Enhanced security practices',
          'Scalable infrastructure'
        ]
      }
    },
    {
      title: 'Cloud Migration',
      icon: '🚀',
      description: 'Seamless transition to cloud infrastructure',
      details: {
        overview: 'Our cloud migration service ensures a smooth transition of your applications and infrastructure to the cloud while minimizing disruption to your business.',
        features: [
          'Migration readiness assessment',
          'Workload analysis and planning',
          'Data migration strategy',
          'Application modernization',
          'Cloud-native transformation',
          'Post-migration optimization'
        ],
        benefits: [
          'Reduced infrastructure costs',
          'Improved scalability',
          'Enhanced disaster recovery',
          'Better resource utilization',
          'Modern architecture adoption'
        ]
      }
    },
    {
      title: 'Infrastructure Management',
      icon: '🔧',
      description: 'Reliable and scalable infrastructure solutions',
      details: {
        overview: 'We provide comprehensive infrastructure management services to ensure your cloud environment operates at peak efficiency.',
        features: [
          '24/7 infrastructure monitoring',
          'Automated scaling solutions',
          'Backup and disaster recovery',
          'Security patch management',
          'Performance optimization',
          'Cost optimization'
        ],
        benefits: [
          'Improved uptime',
          'Reduced maintenance overhead',
          'Proactive issue resolution',
          'Optimized resource allocation',
          'Enhanced security posture'
        ]
      }
    },
    {
      title: 'MLOps Implementation',
      icon: '🤖',
      description: 'End-to-end machine learning operations',
      details: {
        overview: 'Our MLOps services help organizations streamline their machine learning workflows from development to production.',
        features: [
          'ML pipeline automation',
          'Model versioning and tracking',
          'Automated model training',
          'Model deployment automation',
          'Performance monitoring',
          'A/B testing frameworks'
        ],
        benefits: [
          'Faster model deployment',
          'Improved model accuracy',
          'Streamlined experimentation',
          'Better collaboration',
          'Reduced technical debt'
        ]
      }
    },
    {
      title: 'Cloud Security',
      icon: '🔒',
      description: 'Comprehensive cloud security solutions',
      details: {
        overview: 'We provide enterprise-grade security solutions to protect your cloud infrastructure and applications from modern threats.',
        features: [
          'Security assessment and planning',
          'Identity and access management',
          'Encryption implementation',
          'Security monitoring and alerting',
          'Compliance management',
          'Incident response planning'
        ],
        benefits: [
          'Enhanced data protection',
          'Regulatory compliance',
          'Reduced security risks',
          'Automated security controls',
          'Improved threat detection'
        ]
      }
    },
    {
      title: 'Cloud Cost Optimization',
      icon: '💰',
      description: 'Maximize cloud ROI with efficient resource management',
      details: {
        overview: 'Our cost optimization service helps organizations reduce cloud spending while maintaining performance and reliability.',
        features: [
          'Cost analysis and reporting',
          'Resource right-sizing',
          'Reserved capacity planning',
          'Automated cost controls',
          'Budget alerting',
          'Waste elimination'
        ],
        benefits: [
          'Reduced cloud costs',
          'Better budget control',
          'Improved resource efficiency',
          'Clear cost visibility',
          'Optimized licensing'
        ]
      }
    }
  ];

  const seoServices = services.map(service => ({
    name: service.title,
    description: service.description,
    provider: 'ACEDEMAND IT Consulting',
    serviceType: 'Cloud Services',
    areaServed: 'Worldwide'
  }));

  const faqCategories = [
    {
      category: "Cloud Services",
      faqs: [
        {
          id: "cloud-1",
          question: "What cloud platforms do you specialize in?",
          answer: "We specialize in Google Cloud Platform (GCP) and offer comprehensive solutions for cloud migration, infrastructure management, and DevOps implementation. Our certified experts have extensive experience in GCP's full range of services, including Compute Engine, Cloud Run, Cloud Functions, and BigQuery."
        },
        {
          id: "cloud-2",
          question: "How do you ensure smooth cloud migration?",
          answer: "Our cloud migration process follows a proven four-phase approach:\n\n1. Assessment: Analyzing your current infrastructure and applications\n2. Planning: Developing a detailed migration strategy and timeline\n3. Execution: Implementing the migration with minimal disruption\n4. Optimization: Fine-tuning performance and costs post-migration\n\nWe provide continuous support throughout the transition and beyond."
        },
        {
          id: "cloud-3",
          question: "What is your approach to cloud cost optimization?",
          answer: "We implement a comprehensive cost optimization strategy that includes:\n- Right-sizing resources based on actual usage\n- Implementing auto-scaling policies\n- Utilizing committed use discounts\n- Setting up detailed cost monitoring and alerts\n- Regular cost-performance analysis and recommendations"
        }
      ]
    },
    {
      category: "DevOps & MLOps",
      faqs: [
        {
          id: "devops-1",
          question: "How can DevOps improve my business operations?",
          answer: "DevOps practices enhance your operations through:\n\n1. Faster Deployment: Automated CI/CD pipelines\n2. Improved Quality: Automated testing and monitoring\n3. Better Collaboration: Streamlined communication between teams\n4. Reduced Costs: Efficient resource utilization\n5. Increased Reliability: Consistent deployment processes"
        },
        {
          id: "devops-2",
          question: "What MLOps services do you provide?",
          answer: "Our MLOps services include:\n- ML pipeline automation\n- Model versioning and tracking\n- Automated model training and deployment\n- Performance monitoring and optimization\n- Integration with existing DevOps practices"
        }
      ]
    },
    {
      category: "Security & Compliance",
      faqs: [
        {
          id: "security-1",
          question: "What security measures do you implement in cloud solutions?",
          answer: "We implement comprehensive security measures including:\n\n1. Identity and Access Management (IAM)\n2. Data encryption at rest and in transit\n3. Network security and firewall configuration\n4. Security monitoring and threat detection\n5. Compliance framework implementation\n6. Regular security audits and updates"
        },
        {
          id: "security-2",
          question: "How do you handle data privacy and compliance?",
          answer: "Our approach to data privacy and compliance includes:\n- Implementation of data protection policies\n- Regular compliance audits\n- GDPR and industry-specific regulation compliance\n- Data classification and handling procedures\n- Employee training on security best practices"
        }
      ]
    }
  ];

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const stats = [
    { value: '100+', label: 'Cloud Projects', icon: '🚀' },
    { value: '50+', label: 'Enterprise Clients', icon: '🏢' },
    { value: '99.9%', label: 'Uptime Guaranteed', icon: '⚡' },
    { value: '24/7', label: 'Support Available', icon: '🛟' }
  ];

  const testimonials = [
    {
      quote: "ACEDEMAND's cloud expertise transformed our infrastructure completely. Their team's dedication to our success was evident throughout the project.",
      author: "CTO, Leading FinTech Company",
      icon: '💫'
    },
    {
      quote: "Their DevOps solutions helped us achieve 3x faster deployment cycles and significantly reduced our operational costs.",
      author: "Head of Engineering, E-commerce Giant",
      icon: '⭐'
    }
  ];

  const bankPartners = [
    { name: 'Partner Bank 1', logo: '🏦' },
    { name: 'Partner Bank 2', logo: '🏦' },
    { name: 'Partner Bank 3', logo: '🏦' },
    { name: 'Partner Bank 4', logo: '🏦' }
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <SEO
        title="ACEDEMAND - Cloud & DevOps Solutions | listen. think. solve."
        description="Transform your business with our expert cloud consulting and DevOps solutions. We specialize in cloud migration, infrastructure management, MLOps, and security services."
        keywords="cloud consulting, DevOps solutions, cloud migration, infrastructure management, MLOps, cloud security, IT consulting, digital transformation, Google Cloud Platform, DevOps automation"
        services={seoServices}
        faqs={faqCategories.flatMap(category => category.faqs)}
      />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section with Slogan */}
        <motion.section 
          className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl font-bold text-primary mb-8 tracking-wider"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-primary">listen.</span>
            {' '}
            <span className="text-secondary">think.</span>
            {' '}
            <span className="text-primary">solve.</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We believe that success of our clients is success of our own.
            Thus we make sure that they succeed by collaborating with them.
          </motion.p>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
              >
                <Link
                  to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors duration-200"
            >
              Start Your Journey
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <HoverScale key={index}>
              <motion.div
                    className="p-8 rounded-xl bg-white shadow-lg border border-gray-100 h-full flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <button
                      onClick={() => handleServiceClick(index)}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-200"
                >
                  Learn More
                      <span className="ml-2">→</span>
                    </button>
              </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Client Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="p-8 rounded-xl bg-white shadow-lg"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-4xl mb-4">{testimonial.icon}</div>
                    <blockquote className="text-lg text-gray-600 italic mb-4">"{testimonial.quote}"</blockquote>
                    <p className="text-sm text-primary font-semibold">{testimonial.author}</p>
          </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Banking Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {bankPartners.map((partner, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="p-8 rounded-xl bg-white shadow-lg flex flex-col items-center justify-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-5xl mb-4">{partner.logo}</div>
                    <p className="text-gray-600 text-center">{partner.name}</p>
        </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Frequently Asked Questions</h2>
            
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-semibold text-primary mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-1 gap-4">
                    {category.faqs.map((faq) => (
                      <HoverScale key={faq.id}>
        <motion.div 
                          className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <button
                            className="w-full text-left p-6 focus:outline-none"
                            onClick={() => toggleFaq(faq.id)}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="text-xl font-semibold text-primary pr-8">{faq.question}</h4>
                              <motion.span
                                animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-primary text-2xl"
                              >
                                ↓
                              </motion.span>
                            </div>
              <motion.div
                              initial={false}
                              animate={{
                                height: expandedFaq === faq.id ? "auto" : 0,
                                opacity: expandedFaq === faq.id ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-4 text-gray-600 whitespace-pre-line">
                                {faq.answer}
                </p>
              </motion.div>
                          </button>
                        </motion.div>
                      </HoverScale>
                    ))}
                </div>
                </div>
              ))}
          </div>

            {/* Still Have Questions CTA */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors duration-200"
              >
                Contact Our Experts
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's collaborate to build a robust cloud infrastructure that drives your success.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get Started Today
              <span className="ml-2">→</span>
            </Link>
        </div>
      </section>

        {/* Service Modal */}
        {selectedService !== null && (
          <ServiceModal
            isOpen={true}
            onClose={handleCloseModal}
            title={services[selectedService].title}
            icon={services[selectedService].icon}
            details={services[selectedService].details}
          />
        )}
      </div>
    </>
  );
};

export default Home; 