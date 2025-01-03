import React from 'react';
import FadeIn from '../components/FadeIn';
import HoverScale from '../components/HoverScale';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobPositions: JobPosition[] = [
  {
    title: 'Cloud Solutions Architect',
    department: 'Engineering',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'Design and implement innovative cloud solutions for enterprise clients.',
    requirements: [
      '5+ years of experience with cloud platforms (GCP preferred)',
      'Strong understanding of cloud architecture patterns',
      'Experience with infrastructure as code',
      'Excellent communication skills'
    ]
  },
  {
    title: 'Senior DevOps Engineer',
    department: 'Operations',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Lead and implement DevOps practices and cloud automation solutions.',
    requirements: [
      'Experience with CI/CD pipelines',
      'Kubernetes and container orchestration',
      'Infrastructure automation tools',
      'Strong troubleshooting skills'
    ]
  },
  {
    title: 'Cloud Security Engineer',
    department: 'Security',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Ensure the security of cloud infrastructure and applications.',
    requirements: [
      'Security certifications (CISSP, CCSP)',
      'Experience with cloud security tools',
      'Knowledge of compliance frameworks',
      'Incident response experience'
    ]
  }
];

const benefits = [
  {
    title: 'Health & Wellness',
    items: [
      'Comprehensive health insurance',
      'Dental and vision coverage',
      'Mental health support',
      'Fitness reimbursement'
    ]
  },
  {
    title: 'Work-Life Balance',
    items: [
      'Flexible working hours',
      'Remote work options',
      'Unlimited PTO',
      'Paid parental leave'
    ]
  },
  {
    title: 'Growth & Development',
    items: [
      'Learning stipend',
      'Conference attendance',
      'Certification support',
      'Mentorship program'
    ]
  },
  {
    title: 'Financial Benefits',
    items: [
      'Competitive salary',
      'Stock options',
      '401(k) matching',
      'Annual bonuses'
    ]
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries and embrace new technologies.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Collaboration',
    description: 'We work together to achieve extraordinary results.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <FadeIn>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of cloud technology. 
            We're looking for passionate individuals who want to make a difference.
          </p>
        </section>
      </FadeIn>

      {/* Company Values */}
      <FadeIn delay={0.2}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <HoverScale key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </HoverScale>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Benefits Section */}
      <FadeIn delay={0.4}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <HoverScale key={index}>
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <ul className="space-y-3">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-blue-100">
                          <svg className="w-5 h-5 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverScale>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Open Positions */}
      <FadeIn delay={0.6}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-6">
            {jobPositions.map((job, index) => (
              <HoverScale key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {job.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HoverScale>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn delay={0.8}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <HoverScale>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Submit Your Resume
              </button>
            </HoverScale>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Careers;