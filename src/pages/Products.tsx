import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import HoverScale from '../components/HoverScale';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    type: string;
    startingAt: string;
    details?: string[];
  };
  icon: string;
}

const products: Product[] = [
  {
    id: 'compute-engine',
    name: 'Compute Engine',
    description: 'Secure and customizable compute service that lets you create and run virtual machines on Google\'s infrastructure.',
    category: 'Compute',
    features: [
      'Custom machine types',
      'Global load balancing',
      'Per-second billing',
      'Committed use discounts',
      'Preemptible VMs',
      'Linux and Windows support'
    ],
    pricing: {
      type: 'Usage-based',
      startingAt: '$0.021/hour',
      details: [
        'Pay-per-second billing',
        'Sustained use discounts',
        'Committed use discounts',
        'Custom machine types'
      ]
    },
    icon: '💻'
  },
  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    description: 'Object storage for companies of all sizes. Store any amount of data and retrieve it as often as you like.',
    category: 'Storage',
    features: [
      'Multiple storage classes',
      'Lifecycle management',
      'Strong consistency',
      'Object versioning',
      'Data encryption',
      'Regional & multi-regional options'
    ],
    pricing: {
      type: 'Usage-based',
      startingAt: '$0.02/GB/month',
      details: [
        'Pay only for what you use',
        'No minimum fees',
        'Volume discounts available',
        'Free network ingress'
      ]
    },
    icon: '💾'
  },
  {
    id: 'cloud-sql',
    name: 'Cloud SQL',
    description: 'Fully managed relational database service for MySQL, PostgreSQL, and SQL Server.',
    category: 'Database',
    features: [
      'Automated backups',
      'High availability',
      'Automatic encryption',
      'Vertical & horizontal scaling',
      'Integrated monitoring',
      'Automatic updates'
    ],
    pricing: {
      type: 'Instance-based',
      startingAt: '$0.0105/hour',
      details: [
        'Per-second billing',
        'Storage charged separately',
        'Network egress charges apply',
        'High availability options'
      ]
    },
    icon: '🗄️'
  },
  {
    id: 'kubernetes-engine',
    name: 'Google Kubernetes Engine',
    description: 'Managed, production-ready environment for running containerized applications.',
    category: 'Containers',
    features: [
      'Auto-scaling',
      'Auto-repair',
      'Auto-upgrade',
      'Load balancing',
      'Container security',
      'Cluster management'
    ],
    pricing: {
      type: 'Cluster-based',
      startingAt: '$0.10/hour/cluster',
      details: [
        'Free control plane',
        'Pay for nodes only',
        'Autopilot pricing available',
        'Committed use discounts'
      ]
    },
    icon: '🚢'
  },
  {
    id: 'anthos',
    name: 'Anthos',
    description: 'Build and manage modern hybrid applications across environments with enhanced security and policy management.',
    category: 'Hybrid & Multi-cloud',
    features: [
      'Multi-cloud Kubernetes management',
      'Service mesh and traffic management',
      'Cloud-native development tools',
      'Policy and security controls',
      'Consistent experience across environments',
      'Automated security and compliance'
    ],
    pricing: {
      type: 'Subscription',
      startingAt: '$10,000/year',
      details: [
        'Pay-as-you-go option available',
        'Volume discounts for large deployments',
        'Custom pricing for enterprise needs',
        'Includes enterprise support'
      ]
    },
    icon: '🌐'
  },
  {
    id: 'apigee',
    name: 'Apigee API Management',
    description: 'Full-lifecycle API management platform for designing, securing, analyzing, and scaling APIs.',
    category: 'API Management',
    features: [
      'API design and development tools',
      'Security and access control',
      'Analytics and monitoring',
      'Developer portal',
      'Monetization capabilities',
      'Traffic management and scaling'
    ],
    pricing: {
      type: 'Tiered',
      startingAt: '$5,000/month',
      details: [
        'Evaluation period available',
        'Enterprise pricing based on API calls',
        'Additional features in premium tiers',
        'Custom solutions available'
      ]
    },
    icon: '🔌'
  },
  {
    id: 'cloud-run',
    name: 'Cloud Run',
    description: 'Fully managed platform for containerized applications with serverless scaling.',
    category: 'Serverless',
    features: [
      'Automatic scaling to zero',
      'Pay-per-use pricing',
      'Support for any language',
      'Built-in CI/CD',
      'Custom domain mapping',
      'VPC connectivity'
    ],
    pricing: {
      type: 'Usage-based',
      startingAt: '$0.00002/100ms',
      details: [
        'Free tier available',
        'CPU and memory-based pricing',
        'Request-based charges',
        'Network egress fees apply'
      ]
    },
    icon: '🏃'
  },
  {
    id: 'vertex-ai',
    name: 'Vertex AI',
    description: 'Unified platform for building, deploying, and scaling ML models with enterprise features.',
    category: 'AI & Machine Learning',
    features: [
      'AutoML capabilities',
      'Custom model training',
      'MLOps tools and pipelines',
      'Model monitoring',
      'Feature store',
      'Explainable AI'
    ],
    pricing: {
      type: 'Resource-based',
      startingAt: '$0.03/node hour',
      details: [
        'Training costs vary by resource',
        'Prediction pricing per request',
        'Storage costs separate',
        'Free tier for experimentation'
      ]
    },
    icon: '🤖'
  },
  {
    id: 'cloud-spanner',
    name: 'Cloud Spanner',
    description: 'Fully managed, scalable, relational database with unlimited scale and 99.999% availability.',
    category: 'Database',
    features: [
      'Global distribution',
      'Strong consistency',
      'Automatic sharding',
      'ACID transactions',
      'Built-in high availability',
      'Automatic replication'
    ],
    pricing: {
      type: 'Node-based',
      startingAt: '$0.90/node hour',
      details: [
        'Processing units pricing',
        'Storage costs per GB',
        'Network usage charges',
        'Long-term commitments available'
      ]
    },
    icon: '🗄️'
  },
  {
    id: 'cloud-armor',
    name: 'Cloud Armor',
    description: 'DDoS protection and Web Application Firewall (WAF) for Google Cloud deployments.',
    category: 'Security',
    features: [
      'DDoS protection',
      'WAF capabilities',
      'Edge security',
      'Adaptive protection',
      'Custom rules engine',
      'Global load balancing integration'
    ],
    pricing: {
      type: 'Policy-based',
      startingAt: '$5/policy/month',
      details: [
        'Standard and Premium tiers',
        'Request-based pricing',
        'Rule evaluation charges',
        'Volume discounts available'
      ]
    },
    icon: '🛡️'
  }
];

const categories = ['All', 'Compute', 'Storage', 'Database', 'Containers', 'Hybrid & Multi-cloud', 'API Management', 'Serverless', 'AI & Machine Learning', 'Security'];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Cloud Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of enterprise-grade Google Cloud products designed to help you innovate, scale, and transform your business.
          </p>
        </section>
      </FadeIn>

      {/* Filters Section */}
      <FadeIn delay={0.2}>
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <HoverScale key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                </HoverScale>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Products Grid */}
      <FadeIn delay={0.4}>
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <HoverScale key={product.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <svg
                                className="w-4 h-4 text-blue-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t pt-4">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-600">{product.pricing.type}</p>
                            <p className="text-lg font-semibold text-gray-900">
                              {product.pricing.startingAt}
                            </p>
                          </div>
                          {product.pricing.details && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Pricing Details</h4>
                              <ul className="space-y-1">
                                {product.pricing.details.map((detail, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-center">
                                    <svg
                                      className="w-4 h-4 text-blue-500 mr-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </HoverScale>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Products; 