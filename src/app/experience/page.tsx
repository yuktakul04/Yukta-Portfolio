import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { experiences } from '@/content/experience'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'AI Engineer at Systematic Ventures and ML Engineer at Samsung R&D. Industry experience building production AI systems and ML security frameworks.',
}

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-content">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Work history
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Experience
          </h1>
          <p className="text-secondary text-lg max-w-xl">
            Industry experience building production AI systems, ML security frameworks, and contributing to core backend infrastructure.
          </p>
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Link key={exp.slug} href={`/experience/${exp.slug}`} className="group block">
              <div
                className="relative p-8 md:p-10 rounded-2xl border bg-surface/50 overflow-hidden transition-all duration-300"
                style={{ borderColor: `${exp.theme.accentColor}20` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${exp.theme.accentColor}12, transparent 60%)`,
                  }}
                />

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: exp.theme.accentGradient }}
                />

                <div className="relative pl-4">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-5">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-2xl shrink-0"
                      style={{
                        borderColor: exp.theme.accentColor,
                        background: `${exp.theme.accentColor}15`,
                      }}
                    >
                      {exp.theme.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-primary">{exp.role}</h2>
                        <span className="text-sm text-secondary font-mono shrink-0">
                          {exp.timeframe}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-lg font-semibold" style={{ color: exp.theme.accentColor }}>
                          {exp.company}
                        </span>
                        <span className="text-muted text-sm">·</span>
                        <span className="text-muted text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hook */}
                  <p className="text-secondary leading-relaxed mb-6">{exp.hook}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6 mb-5">
                    {exp.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="text-xl font-bold font-mono"
                          style={{ color: exp.theme.accentColor }}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs text-muted">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${exp.theme.tagStyle}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: exp.theme.accentColor }}
                  >
                    View Full Case Study
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Education section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight">Education</h2>
          <div className="space-y-4">
            {[
              {
                degree: 'Master of Science, Computer Science and Engineering',
                school: 'New York University — Tandon School of Engineering',
                gpa: '3.66 / 4.0',
                period: 'Expected May 2026',
                courses: [
                  'Machine Learning', 'Deep Learning', 'Artificial Intelligence',
                  'Big Data', 'Information Security', 'Post-Quantum Cryptography',
                  'Professional Software Engineering', 'Information Visualization',
                ],
                icon: '🗽',
                color: '#7c3aed',
              },
              {
                degree: 'Bachelor of Technology, Computer Science and Engineering',
                school: 'SRM Institute of Science and Technology',
                gpa: '8.98 / 10',
                period: 'May 2024',
                courses: [
                  'Data Structures', 'Artificial Intelligence', 'Computer Architecture',
                  'Object-Oriented Programming', 'Software Engineering',
                  'Neuro-fuzzy and Genetic Programming',
                ],
                icon: '🎓',
                color: '#06b6d4',
              },
            ].map((edu) => (
              <div
                key={edu.school}
                className="p-7 rounded-2xl border border-border bg-surface/50 relative overflow-hidden"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${edu.color}, ${edu.color}50)` }}
                />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="font-bold text-primary text-lg">{edu.degree}</h3>
                    <span className="text-sm text-secondary font-mono shrink-0">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-semibold text-sm" style={{ color: edu.color }}>
                      {edu.school}
                    </span>
                    <span className="text-muted">·</span>
                    <span className="text-sm text-secondary font-mono">GPA: {edu.gpa}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-white/[0.04] text-secondary border border-white/[0.06]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
