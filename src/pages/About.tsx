import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import HoverScale from '../components/HoverScale';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  emoji: string;
  imageUrl?: string; // Optional for future image uploads
}

interface Achievement {
  year: string;
  title: string;
  description: string;
}

interface CompanyStat {
  number: string;
  label: string;
  icon: string;
}

interface PartnerBadge {
  title: string;
  description: string;
  imageUrl?: string;
  icon: string;
}

interface TechStack {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Taha Ozket',
    role: 'Managing Partner',
    bio: 'Cloud computing veteran with 15+ years of experience in digital transformation.',
    emoji: '👨‍💼',
    imageUrl: ''
  },
  {
    name: 'Gokay Hamamci',
    role: 'Managing Partner',
    bio: 'Google Cloud certified architect with expertise in enterprise solutions.',
    emoji: '👨‍💼',
    imageUrl: ''
  },
  {
    name: 'Kerem Avci',
    role: 'Engineering Manager',
    bio: 'Specialized in cloud migration and infrastructure optimization.',
    emoji: '👨‍💻',
    imageUrl: ''
  },
  {
    name: 'Mert Polat',
    role: 'DevOps & Cloud Engineer',
    bio: 'Cloud computing veteran with 15+ years of experience in digital transformation.',
    emoji: '🛠️',
    imageUrl: ''
  },
  {
    name: 'Mehmet Hilmi Emel',
    role: 'MLOps & Cloud Engineer',
    bio: 'Google Cloud certified architect with expertise in enterprise solutions.',
    emoji: '🤖',
    imageUrl: ''
  },
  {
    name: 'Nilsu Melis Sonmez',
    role: 'Cloud Engineer',
    bio: 'Specialized in cloud migration and infrastructure optimization.',
    emoji: '☁️',
    imageUrl: ''
  }
];

const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'Google Cloud Partner of the Year',
    description: 'Recognized for excellence in cloud solutions and customer success.',
  },
  {
    year: '2022',
    title: 'Cloud Excellence Award',
    description: 'Awarded for innovative cloud migration strategies.',
  },
  {
    year: '2021',
    title: 'Digital Transformation Leader',
    description: 'Named as industry leader in digital transformation solutions.',
  },
];

const companyStats: CompanyStat[] = [
  {
    number: '100+',
    label: 'Cloud Projects Delivered',
    icon: '🚀'
  },
  {
    number: '50+',
    label: 'Enterprise Clients',
    icon: '🏢'
  },
  {
    number: '15+',
    label: 'Google Cloud Certifications',
    icon: '🏆'
  },
  {
    number: '24/7',
    label: 'Support & Maintenance',
    icon: '⚡'
  }
];

const partnerBadges: PartnerBadge[] = [
  {
    title: 'Google Cloud Premier Partner',
    description: 'Highest tier partnership status with Google Cloud Platform',
    icon: '🏅',
    imageUrl: ''
  },
  {
    title: 'Apigee Partner',
    description: 'Certified partner for API management and digital transformation',
    icon: '🔄',
    imageUrl: ''
  },
  {
    title: 'Google Cloud Application Development',
    description: 'Specialized in cloud-native application development',
    icon: '💻',
    imageUrl: ''
  },
  {
    title: 'Anthos Expertise',
    description: 'Certified expertise in hybrid and multi-cloud solutions',
    icon: '☁️',
    imageUrl: ''
  }
];

const techStacks: TechStack[] = [
  {
    category: 'Cloud Platforms',
    items: [
      { name: 'Google Cloud Platform', icon: '☁️' },
      { name: 'Kubernetes', icon: '🚢' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Anthos', icon: '🌐' }
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Jenkins', icon: '⚙️' },
      { name: 'GitLab CI', icon: '🔄' },
      { name: 'Prometheus', icon: '📊' }
    ]
  },
  {
    category: 'Development',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Node.js', icon: '💻' },
      { name: 'Go', icon: '🏃' }
    ]
  },
  {
    category: 'API & Integration',
    items: [
      { name: 'Apigee', icon: '🔌' },
      { name: 'REST APIs', icon: '🌐' },
      { name: 'GraphQL', icon: '📊' },
      { name: 'gRPC', icon: '🚀' }
    ]
  }
];

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      {/* Hero Section */}
      <FadeIn>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ACEDEMAND IT Consulting Services
          </h1>
          <p className="text-xl text-gray-600">
            Google Cloud Premier Partner Delivering Excellence in Cloud Solutions
          </p>
        </div>
      </FadeIn>

      {/* Company Overview */}
      <FadeIn delay={0.2}>
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
              <p className="text-lg text-gray-600 mb-6">
                ACEDEMAND IT Consulting Services is a premier Google Cloud Partner, specializing in delivering cutting-edge cloud solutions and digital transformation services. With our team of certified experts, we help businesses leverage the full potential of Google Cloud Platform to drive innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Partnership Badges */}
      <div className="max-w-7xl mx-auto mb-16">
        <FadeIn delay={0.3}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partnerships & Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBadges.map((badge, index) => (
              <HoverScale key={badge.title}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-blue-50 to-gray-50 p-6">
                    {badge.imageUrl ? (
                      <img
                        src={badge.imageUrl}
                        alt={badge.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        {badge.icon}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </div>
                </div>
              </HoverScale>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Mission & Vision Section */}
      <FadeIn delay={0.4}>
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <HoverScale>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-2">🎯</span> Our Mission
                  </h2>
                  <p className="text-gray-600">
                    To empower businesses with innovative cloud solutions that drive digital transformation and sustainable growth, while maintaining the highest standards of service excellence.
                  </p>
                </div>
              </div>
            </HoverScale>

            <HoverScale>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-3xl mr-2">👁️</span> Our Vision
                  </h2>
                  <p className="text-gray-600">
                    To be the leading Google Cloud solutions provider, recognized globally for our expertise, innovation, and commitment to client success in the digital era.
                  </p>
                </div>
              </div>
            </HoverScale>
          </div>
        </div>
      </FadeIn>

      {/* Company Stats */}
      <FadeIn delay={0.5}>
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <HoverScale key={stat.label}>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </HoverScale>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Team Section */}
      <FadeIn delay={0.6}>
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <HoverScale key={member.name}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        {member.emoji}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </div>
                </div>
              </HoverScale>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Achievements Section */}
      <FadeIn delay={0.7}>
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <HoverScale key={achievement.year}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-primary text-2xl font-bold mb-2">{achievement.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </HoverScale>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Technology Stack Section */}
      <FadeIn delay={0.8}>
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStacks.map((stack) => (
              <HoverScale key={stack.category}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{stack.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {stack.items.map((item) => (
                        <div key={item.name} className="flex items-center space-x-2">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm text-gray-600">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverScale>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Call to Action */}
      <FadeIn delay={0.9}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white mb-8">
              Partner with ACEDEMAND IT Consulting Services for your cloud journey
            </p>
            <HoverScale>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </HoverScale>
          </div>
        </div>
      </FadeIn>
    </motion.div>
  );
};

export default About; 