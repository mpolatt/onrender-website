import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../../components/FadeIn';
import HoverScale from '../../components/HoverScale';

interface SecurityService {
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
}

const securityServices: SecurityService[] = [
  {
    title: 'Security Assessment & Planning',
    description: 'Comprehensive evaluation of your cloud infrastructure security posture with actionable recommendations.',
    features: [
      'Cloud security architecture review',
      'Vulnerability assessment',
      'Risk analysis and mitigation planning',
      'Compliance gap analysis',
      'Security roadmap development'
    ],
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Identity & Access Management',
    description: 'Robust IAM solutions to ensure secure access control and user authentication.',
    features: [
      'IAM policy implementation',
      'Role-based access control (RBAC)',
      'Multi-factor authentication',
      'Single sign-on (SSO) integration',
      'Privileged access management'
    ],
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  },
  {
    title: 'Network Security',
    description: 'Advanced network protection measures to safeguard your cloud infrastructure.',
    features: [
      'Firewall configuration',
      'VPC security setup',
      'DDoS protection',
      'Network monitoring',
      'Traffic analysis'
    ],
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

const complianceFrameworks = [
  'HIPAA', 'GDPR', 'SOC 2', 'ISO 27001', 'PCI DSS',
  'NIST', 'FedRAMP', 'CCPA', 'SOX', 'FINRA'
];

const CloudSecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Cloud Security Solutions
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Protect your cloud infrastructure with our comprehensive security solutions. 
            We ensure your data and applications remain secure, compliant, and resilient.
          </p>
        </section>
      </FadeIn>

      {/* Services Grid */}
      <FadeIn delay={0.2}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <HoverScale key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverScale>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Compliance Section */}
      <FadeIn delay={0.4}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Compliance & Regulatory Standards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {complianceFrameworks.map((framework, index) => (
                <HoverScale key={index}>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                    <span className="text-white font-medium">{framework}</span>
                  </div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Security Stats Section */}
      <FadeIn delay={0.6}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security by the Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Security Controls</div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Security Process Section */}
      <FadeIn delay={0.8}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Security Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Comprehensive security evaluation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">Strategic security roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Security controls deployment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-gray-600">Continuous security oversight</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn delay={1}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud security solutions can protect your business 
              and ensure compliance with industry standards.
            </p>
            <HoverScale>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Schedule a Security Assessment
              </button>
            </HoverScale>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default CloudSecurity; 