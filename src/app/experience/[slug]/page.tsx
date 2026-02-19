import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { experiences, getExperienceBySlug } from '@/content/experience'
import { projects, getRelatedProjects } from '@/content/projects'
import ThemedHero from '@/components/themed/ThemedHero'
import SnapshotCards from '@/components/themed/SnapshotCards'
import MetricsSection from '@/components/themed/MetricCounter'
import RelatedCards from '@/components/themed/RelatedCards'
import CTASection from '@/components/shared/CTASection'
import ExperienceContent from './ExperienceContent'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const exp = getExperienceBySlug(params.slug)
  if (!exp) return { title: 'Experience Not Found' }
  return {
    title: `${exp.role} at ${exp.company}`,
    description: exp.hook,
    openGraph: {
      title: `${exp.role} — ${exp.company}`,
      description: exp.hook,
    },
  }
}

export default function ExperiencePage({ params }: PageProps) {
  const exp = getExperienceBySlug(params.slug)
  if (!exp) notFound()

  const relatedItems = exp.related
    .map((slug) => {
      const proj = projects.find((p) => p.slug === slug)
      if (proj) {
        return {
          slug: proj.slug,
          title: proj.title,
          hook: proj.hook,
          theme: proj.theme,
          type: 'project' as const,
          timeframe: proj.timeframe,
          badge: proj.badge,
        }
      }
      const e = experiences.find((ex) => ex.slug === slug)
      if (e) {
        return {
          slug: e.slug,
          title: e.company,
          hook: e.hook,
          theme: e.theme,
          type: 'experience' as const,
          timeframe: e.timeframe,
        }
      }
      return null
    })
    .filter(Boolean) as Array<{
    slug: string
    title: string
    hook: string
    theme: import('@/content/theme').ThemeTokens
    type: 'project' | 'experience'
    timeframe: string
    badge?: string
  }>

  return (
    <div style={{ ['--accent' as string]: exp.theme.accentColor }}>
      {/* Themed Hero */}
      <ThemedHero
        title={exp.company}
        subtitle={exp.role}
        hook={exp.hook}
        timeframe={exp.timeframe}
        location={exp.location}
        role={exp.role}
        stack={exp.stack}
        theme={exp.theme}
        links={exp.links}
      />

      {/* Snapshot cards */}
      <SnapshotCards
        role={exp.role}
        stack={exp.stack}
        metrics={exp.metrics}
        links={exp.links}
        theme={exp.theme}
        company={exp.company}
        timeframe={exp.timeframe}
      />

      {/* Detailed content */}
      <ExperienceContent exp={exp} />

      {/* Metrics */}
      <MetricsSection metrics={exp.metrics} theme={exp.theme} title="Key Results" />

      {/* Related */}
      <RelatedCards items={relatedItems} />

      {/* CTA */}
      <CTASection accentColor={exp.theme.accentColor} />
    </div>
  )
}
