import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Dots */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <ul className="space-y-4">
          {['overview', 'partnerships', 'mission', 'team', 'achievements', 'tech'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </li>
          ))}
        </ul>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20"
      >
        {/* Hero Section */}
        <section id="overview" className="py-24 px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1 
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About ACEDEMAND IT Consulting Services
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Google Cloud Premier Partner Delivering Excellence in Cloud Solutions
              </motion.p>
            </div>
          </FadeIn>

          {/* Company Overview */}
          <FadeIn delay={0.2}>
            <div className="max-w-7xl mx-auto mt-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    ACEDEMAND IT Consulting Services is a premier Google Cloud Partner, specializing in delivering cutting-edge cloud solutions and digital transformation services. With our team of certified experts, we help businesses leverage the full potential of Google Cloud Platform to drive innovation and growth.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Partnership Badges */}
        <section id="partnerships" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn delay={0.3}>
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Our Partnerships & Specializations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnerBadges.map((badge) => (
                  <HoverScale key={badge.title}>
                    <motion.div 
                      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{badge.title}</h3>
                        <p className="text-gray-600">{badge.description}</p>
                      </div>
                    </motion.div>
                  </HoverScale>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.4}>
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <HoverScale>
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-8 md:p-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="text-4xl mr-4">🎯</span> Our Mission
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        To empower businesses with innovative cloud solutions that drive digital transformation and sustainable growth, while maintaining the highest standards of service excellence.
                      </p>
                    </div>
                  </motion.div>
                </HoverScale>

                <HoverScale>
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-8 md:p-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="text-4xl mr-4">👁️</span> Our Vision
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        To be the leading Google Cloud solutions provider, recognized globally for our expertise, innovation, and commitment to client success in the digital era.
                      </p>
                    </div>
                  </motion.div>
                </HoverScale>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Company Stats */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
          <FadeIn delay={0.5}>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {companyStats.map((stat) => (
                  <HoverScale key={stat.label}>
                    <motion.div 
                      className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-5xl mb-4">{stat.icon}</div>
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </motion.div>
                  </HoverScale>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.6}>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member) => (
                  <HoverScale key={member.name}>
                    <motion.div 
                      className="bg-white rounded-2xl shadow-xl overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-gray-50 to-gray-100">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-7xl">
                            {member.emoji}
                          </div>
                        )}
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-primary font-medium mb-4">{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </motion.div>
                  </HoverScale>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <FadeIn delay={0.7}>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Achievements</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {achievements.map((achievement) => (
                  <HoverScale key={achievement.year}>
                    <motion.div 
                      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      <div className="p-8">
                        <div className="text-primary text-3xl font-bold mb-4">{achievement.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </motion.div>
                  </HoverScale>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Technology Stack Section */}
        <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.8}>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Technology Stack</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {techStacks.map((stack) => (
                  <HoverScale key={stack.category}>
                    <motion.div 
                      className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
                      whileHover={{ y: -5 }}
                    >
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">{stack.category}</h3>
                        <div className="grid grid-cols-2 gap-6">
                          {stack.items.map((item) => (
                            <div key={item.name} className="flex items-center space-x-3">
                              <span className="text-3xl">{item.icon}</span>
                              <span className="text-gray-600">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </HoverScale>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Call to Action */}
        <FadeIn delay={0.9}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Partner with ACEDEMAND IT Consulting Services for your cloud journey
              </p>
              <HoverScale>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white rounded-xl text-lg font-medium hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Contact Us
                  <span className="ml-2">→</span>
                </Link>
              </HoverScale>
            </div>
          </div>
        </FadeIn>
      </motion.div>
    </>
  );
};

export default About; 