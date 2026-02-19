import { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { experiences } from '@/content/experience'

const BASE_URL = 'https://yuktakulkarni.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/projects', '/experience', '/research', '/about', '/contact'].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p.featured ? 0.9 : 0.7,
  }))

  const experienceRoutes = experiences.map((e) => ({
    url: `${BASE_URL}/experience/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes]
}
