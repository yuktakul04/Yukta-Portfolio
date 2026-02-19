import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import MetricTiles from '@/components/home/MetricTiles'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import ExperiencePreview from '@/components/home/ExperiencePreview'
import ResearchPreview from '@/components/home/ResearchPreview'
import CTASection from '@/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Yukta Kulkarni — AI & Full Stack Engineer',
  description:
    "NYU MS Computer Science '26. Building intelligent, scalable systems at the intersection of AI and software engineering. Open to Software Engineer, Backend, Full Stack, and AI Engineer roles.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricTiles />
      <FeaturedProjects />
      <ExperiencePreview />
      <ResearchPreview />
      <CTASection />
    </>
  )
}
