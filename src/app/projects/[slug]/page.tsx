import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug, getRelatedProjects } from '@/content/projects'
import ThemedHero from '@/components/themed/ThemedHero'
import SnapshotCards from '@/components/themed/SnapshotCards'
import MetricsSection from '@/components/themed/MetricCounter'
import RelatedCards from '@/components/themed/RelatedCards'
import CTASection from '@/components/shared/CTASection'
import ContentSection from './ContentSection'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.hook,
    openGraph: {
      title: project.title,
      description: project.hook,
    },
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const relatedProjects = getRelatedProjects(project.related).map((p) => ({
    slug: p.slug,
    title: p.title,
    hook: p.hook,
    theme: p.theme,
    type: 'project' as const,
    timeframe: p.timeframe,
    badge: p.badge,
  }))

  return (
    <div style={{ ['--accent' as string]: project.theme.accentColor }}>
      {/* Themed Hero */}
      <ThemedHero
        title={project.title}
        subtitle={project.subtitle}
        hook={project.hook}
        timeframe={project.timeframe}
        location={project.location}
        role={project.role}
        badge={project.badge}
        stack={project.stack}
        theme={project.theme}
        links={project.links}
      />

      {/* Snapshot cards */}
      <SnapshotCards
        role={project.role}
        stack={project.stack}
        metrics={project.metrics}
        links={project.links}
        theme={project.theme}
        timeframe={project.timeframe}
      />

      {/* Problem & Solution */}
      <ContentSection project={project} />

      {/* Metrics */}
      <MetricsSection metrics={project.metrics} theme={project.theme} />

      {/* Related */}
      <RelatedCards items={relatedProjects} />

      {/* CTA */}
      <CTASection accentColor={project.theme.accentColor} />
    </div>
  )
}
