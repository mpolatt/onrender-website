import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HoverScale from '../components/HoverScale';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Best Practices for Cloud Migration in 2024',
      excerpt: 'Learn about the latest strategies and tools for successful cloud migration, including assessment, planning, and execution phases.',
      date: '2024-01-20',
      author: 'Cloud Expert',
      category: 'Cloud Migration',
      readTime: '5 min read',
      image: '/images/blog/cloud-migration.jpg',
      slug: 'best-practices-cloud-migration-2024'
    },
    {
      id: '2',
      title: 'DevOps Automation: A Complete Guide',
      excerpt: 'Discover how DevOps automation can streamline your development pipeline and improve team productivity.',
      date: '2024-01-18',
      author: 'DevOps Engineer',
      category: 'DevOps',
      readTime: '7 min read',
      image: '/images/blog/devops-automation.jpg',
      slug: 'devops-automation-complete-guide'
    },
    {
      id: '3',
      title: 'Securing Your Cloud Infrastructure',
      excerpt: 'Essential security measures and best practices to protect your cloud infrastructure from modern threats.',
      date: '2024-01-15',
      author: 'Security Specialist',
      category: 'Cloud Security',
      readTime: '6 min read',
      image: '/images/blog/cloud-security.jpg',
      slug: 'securing-cloud-infrastructure'
    }
  ];

  const structuredBlogData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ACEDEMAND Tech Blog',
    description: 'Expert insights on cloud computing, DevOps, and digital transformation',
    publisher: {
      '@type': 'Organization',
      name: 'ACEDEMAND IT Consulting',
      logo: {
        '@type': 'ImageObject',
        url: 'https://acedemand.com/images/logo.png'
      }
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author
      },
      image: `https://acedemand.com${post.image}`,
      url: `https://acedemand.com/blog/${post.slug}`
    }))
  };

  return (
    <>
      <SEO
        title="ACEDEMAND Blog - Cloud Computing & DevOps Insights"
        description="Stay updated with the latest insights on cloud computing, DevOps practices, and digital transformation strategies."
        keywords="cloud computing blog, DevOps insights, digital transformation tips, cloud migration guides, tech blog"
        type="blog"
        schema={structuredBlogData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-primary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Latest Insights & Articles
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <HoverScale key={post.id}>
                <motion.article
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gray-200">
                    {/* Placeholder for blog post image */}
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      📝
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-secondary transition-colors duration-200"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </HoverScale>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.section
            className="mt-20 bg-primary text-white rounded-xl p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest insights and updates.</p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Blog; 