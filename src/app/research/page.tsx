import type { Metadata } from 'next'
import { BookOpen, FlaskConical, Brain, Award } from 'lucide-react'
import { publications, researchProjects, researchInterests, leadership } from '@/content/research'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Published research on BERT personalization for treatment recommendation and CNN-based data poisoning resilience. Research collaborator at National University of Singapore on Neuro-Symbolic AI.',
}

export default function ResearchPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-content">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Academic work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Research
          </h1>
          <p className="text-secondary text-lg max-w-xl">
            Published work at the intersection of NLP, AI safety, and neuro-symbolic reasoning. Two peer-reviewed publications and international research collaboration.
          </p>
        </div>

        {/* Publications */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight flex items-center gap-3">
            <BookOpen size={22} className="text-violet-400" />
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="p-7 md:p-8 rounded-2xl border border-border bg-surface/50 relative overflow-hidden group hover:border-border-light transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-violet-500 to-blue-500" />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="font-bold text-primary text-xl leading-snug">{pub.title}</h3>
                    <div className="shrink-0 text-right">
                      <span className="text-xs font-mono text-muted">{pub.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-violet-400">{pub.journal}</span>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed mb-5">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Projects */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight flex items-center gap-3">
            <FlaskConical size={22} className="text-blue-400" />
            Research Projects
          </h2>
          {researchProjects.map((rp) => (
            <div
              key={rp.id}
              className="p-7 md:p-8 rounded-2xl border border-border bg-surface/50 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-blue-500 to-purple-500" />
              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                  <h3 className="font-bold text-primary text-xl">{rp.title}</h3>
                  <span className="text-xs font-mono text-muted shrink-0">{rp.timeframe}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-400 font-semibold text-sm">{rp.institution}</span>
                  <span className="text-muted">·</span>
                  <span className="text-secondary text-sm">{rp.role}</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-5">{rp.description}</p>
                <ul className="space-y-2 mb-5">
                  {rp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-secondary">
                      <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {rp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Research Interests */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight flex items-center gap-3">
            <Brain size={22} className="text-purple-400" />
            Research Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {researchInterests.map((interest) => (
              <div
                key={interest}
                className="px-4 py-3.5 rounded-xl border border-border bg-surface/40 text-secondary text-sm font-medium hover:border-border-light hover:text-primary transition-all duration-200"
              >
                {interest}
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Achievements */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight flex items-center gap-3">
            <Award size={22} className="text-amber-400" />
            Leadership & Achievements
          </h2>
          <div className="space-y-3">
            {leadership.map((item) => (
              <div
                key={item.id}
                className="p-5 md:p-6 rounded-2xl border border-border bg-surface/40 hover:border-border-light transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="font-bold text-primary text-base">{item.role}</h3>
                      <span className="text-xs text-muted font-mono shrink-0">{item.timeframe}</span>
                    </div>
                    <div className="text-amber-400 text-sm font-semibold mb-2">{item.org}</div>
                    <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
