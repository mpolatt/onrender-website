import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import HoverScale from '../components/HoverScale';

interface DocumentResource {
  title: string;
  description: string;
  type: 'PDF' | 'Excel';
  size: string;
}

interface VideoResource {
  title: string;
  description: string;
  type: 'Video';
  duration: string;
}

type Resource = DocumentResource | VideoResource;

interface Category {
  title: string;
  description: string;
  icon: string;
  resources: Resource[];
}

const Resources = () => {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      title: 'Technical Documentation',
      description: 'Detailed guides and API documentation for our services',
      icon: '📚',
      resources: [
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step guide for successful cloud migration',
          type: 'PDF',
          size: '2.5 MB'
        },
        {
          title: 'Infrastructure Setup',
          description: 'Best practices for cloud infrastructure setup',
          type: 'PDF',
          size: '3.1 MB'
        },
        {
          title: 'Security Guidelines',
          description: 'Security best practices and compliance guides',
          type: 'PDF',
          size: '1.8 MB'
        }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Learn through our comprehensive video guides',
      icon: '🎥',
      resources: [
        {
          title: 'Cloud Migration Basics',
          description: 'Introduction to cloud migration concepts',
          type: 'Video',
          duration: '15 mins'
        },
        {
          title: 'DevOps Best Practices',
          description: 'Learn essential DevOps workflows',
          type: 'Video',
          duration: '25 mins'
        },
        {
          title: 'Security Implementation',
          description: 'Implementing security measures in cloud',
          type: 'Video',
          duration: '20 mins'
        }
      ]
    },
    {
      title: 'Whitepapers',
      description: 'In-depth analysis and research papers',
      icon: '📄',
      resources: [
        {
          title: 'Cloud Cost Optimization',
          description: 'Strategies for reducing cloud costs',
          type: 'PDF',
          size: '1.5 MB'
        },
        {
          title: 'Digital Transformation',
          description: 'Complete guide to digital transformation',
          type: 'PDF',
          size: '2.8 MB'
        },
        {
          title: 'Future of Cloud Computing',
          description: 'Trends and predictions in cloud technology',
          type: 'PDF',
          size: '2.2 MB'
        }
      ]
    },
    {
      title: 'Tools & Templates',
      description: 'Ready-to-use tools and templates',
      icon: '🛠️',
      resources: [
        {
          title: 'Migration Checklist',
          description: 'Comprehensive migration checklist template',
          type: 'Excel',
          size: '500 KB'
        },
        {
          title: 'Cost Calculator',
          description: 'Cloud cost estimation tool',
          type: 'Excel',
          size: '750 KB'
        },
        {
          title: 'Project Timeline',
          description: 'Project management timeline template',
          type: 'Excel',
          size: '600 KB'
        }
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
              Resources & Documentation
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Access our comprehensive collection of guides, documentation, and tools
              to help you make the most of our services.
            </motion.p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <HoverScale key={index}>
                  <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{category.icon}</span>
                      <div>
                        <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {category.resources.map((resource, resourceIndex) => (
                        <motion.div
                          key={resourceIndex}
                          className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-800">{resource.title}</h4>
                              <p className="text-gray-600 text-sm">{resource.description}</p>
                            </div>
                            <span className="text-sm text-primary font-medium">
                              {resource.type} • {resource.type === 'Video' ? resource.duration : resource.size}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest resources and updates.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our team is ready to assist you with any questions or concerns.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Resources; 