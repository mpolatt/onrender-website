import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceItem {
  name: string;
  description: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  services?: ServiceItem[];
  faqs?: FAQItem[];
  schema?: any;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ACEDEMAND IT Consulting - Cloud & DevOps Solutions',
  description = 'Expert Google Cloud consulting, DevOps solutions, and digital transformation services. Specializing in cloud migration, infrastructure management, and MLOps.',
  keywords = 'google cloud consulting, cloud migration, DevOps, infrastructure management, MLOps, cloud security, IT consulting, GCP partner',
  image = '/images/og-image.jpg',
  url = 'https://acedemand.com',
  type = 'website',
  services = [],
  faqs = [],
  schema,
  canonicalUrl
}) => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ACEDEMAND IT Consulting',
    description,
    url,
    logo: `${url}/images/logo.png`,
    sameAs: [
      'https://linkedin.com/company/acedemand',
      'https://twitter.com/acedemand',
      'https://github.com/acedemand'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
      availableLanguage: ['English', 'Turkish'],
      areaServed: 'Worldwide'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Turkey',
      addressRegion: 'Istanbul'
    }
  };

  const servicesData = services.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'ACEDEMAND IT Consulting'
    },
    serviceType: 'Cloud & DevOps Services',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cloud & DevOps Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: service.provider || 'ACEDEMAND IT Consulting',
          serviceType: service.serviceType || 'Cloud Services',
          areaServed: service.areaServed || 'Worldwide'
        }
      }))
    }
  } : null;

  const faqData = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ACEDEMAND IT Consulting" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@acedemand" />
      <meta name="twitter:creator" content="@acedemand" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="ACEDEMAND IT Consulting" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.placename" content="Turkey" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#000000" />
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

      {/* Mobile Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="ACEDEMAND" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      {servicesData && (
        <script type="application/ld+json">
          {JSON.stringify(servicesData)}
        </script>
      )}
      {faqData && (
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      )}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || url} />

      {/* Preconnect to Important Third-party Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO; 