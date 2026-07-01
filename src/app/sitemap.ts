import { MetadataRoute } from 'next'
import { BLOG_ARTICLES } from '@/lib/data'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.elavivephysio.com'

const servicesSlugs = ['spine-back', 'knee-joint', 'shoulder', 'sports-injury', 'post-surgical-rehab', 'neuro-rehab']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/about', '/services', '/contact', '/blog'].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '/' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }))

  const serviceRoutes = servicesSlugs.map(slug => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = BLOG_ARTICLES.map(article => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
