import fs from 'fs';
import { format } from 'date-fns';

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const BASE_URL = 'https://acedemand.com';

const generateSitemapXML = (urls: SitemapURL[]): string => {
  const xmlUrls = urls
    .map(
      ({ loc, lastmod, changefreq, priority }) => `
  <url>
    <loc>${loc}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}${changefreq ? `
    <changefreq>${changefreq}</changefreq>` : ''}${priority ? `
    <priority>${priority}</priority>` : ''}
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${xmlUrls}
</urlset>`;
};

const getStaticPages = (): SitemapURL[] => [
  { loc: `${BASE_URL}/`, changefreq: 'daily', priority: 1.0 },
  { loc: `${BASE_URL}/services`, changefreq: 'weekly', priority: 0.9 },
  { loc: `${BASE_URL}/services/cloud-migration`, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/services/infrastructure-management`, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/services/data-analytics`, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/services/cloud-security`, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/products`, changefreq: 'weekly', priority: 0.8 },
  { loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: 0.7 },
  { loc: `${BASE_URL}/case-studies`, changefreq: 'monthly', priority: 0.7 },
  { loc: `${BASE_URL}/partners`, changefreq: 'monthly', priority: 0.6 },
  { loc: `${BASE_URL}/resources`, changefreq: 'weekly', priority: 0.7 },
  { loc: `${BASE_URL}/blog`, changefreq: 'daily', priority: 0.8 },
  { loc: `${BASE_URL}/careers`, changefreq: 'weekly', priority: 0.7 },
  { loc: `${BASE_URL}/contact`, changefreq: 'monthly', priority: 0.8 },
];

interface BlogPost {
  slug: string;
  updatedAt: Date;
}

const generateBlogUrls = (posts: BlogPost[]): SitemapURL[] => {
  return posts.map(post => ({
    loc: `${BASE_URL}/blog/${post.slug}`,
    lastmod: format(post.updatedAt, 'yyyy-MM-dd'),
    changefreq: 'monthly' as const,
    priority: 0.6
  }));
};

export const generateSitemap = async (blogPosts: BlogPost[] = []): Promise<void> => {
  try {
    const staticPages = getStaticPages();
    const blogUrls = generateBlogUrls(blogPosts);
    const today = format(new Date(), 'yyyy-MM-dd');

    // Add lastmod to static pages
    const allUrls = [
      ...staticPages.map(page => ({ ...page, lastmod: today })),
      ...blogUrls
    ];

    const sitemap = generateSitemapXML(allUrls);
    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}; 