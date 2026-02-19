'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { experiences } from '@/content/experience'
import { staggerContainer, staggerItem } from '@/lib/motion'

export default function ExperiencePreview() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-content">
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-border" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Work history
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="hidden md:flex items-center gap-2 text-sm text-secondary hover:text-primary font-medium transition-colors hover-underline"
            >
              Full timeline
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-border via-border to-transparent hidden md:block" />

            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <motion.div key={exp.slug} variants={staggerItem}>
                  <Link href={`/experience/${exp.slug}`} className="group block">
                    <div className="flex gap-5 items-start">
                      {/* Timeline dot */}
                      <div className="hidden md:flex shrink-0 mt-5">
                        <div
                          className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg z-10 bg-bg transition-all group-hover:scale-110"
                          style={{
                            borderColor: exp.theme.accentColor,
                            background: `${exp.theme.accentColor}15`,
                          }}
                        >
                          {exp.theme.icon}
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        className="flex-1 p-6 md:p-7 rounded-2xl border bg-surface/50 transition-all duration-300 relative overflow-hidden"
                        style={{ borderColor: `${exp.theme.accentColor}20` }}
                      >
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `radial-gradient(ellipse at 0% 50%, ${exp.theme.accentColor}10, transparent 60%)`,
                          }}
                        />

                        {/* Left accent bar */}
                        <div
                          className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                          style={{ background: exp.theme.accentGradient }}
                        />

                        <div className="relative pl-2">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                              <p className="text-base font-semibold" style={{ color: exp.theme.accentColor }}>
                                {exp.company}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <div className="text-sm text-secondary font-mono">{exp.timeframe}</div>
                              <div className="text-xs text-muted">{exp.location}</div>
                            </div>
                          </div>

                          <p className="text-secondary text-sm leading-relaxed mb-4">
                            {exp.hook}
                          </p>

                          {/* Metrics */}
                          <div className="flex flex-wrap gap-4 mb-4">
                            {exp.metrics.slice(0, 2).map((m) => (
                              <div key={m.label} className="flex items-center gap-1.5">
                                {m.icon && <span className="text-sm">{m.icon}</span>}
                                <span
                                  className="font-bold font-mono text-sm"
                                  style={{ color: exp.theme.accentColor }}
                                >
                                  {m.value}
                                </span>
                                <span className="text-xs text-muted">{m.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Stack */}
                          <div className="flex flex-wrap gap-1.5">
                            {exp.stack.slice(0, 5).map((t) => (
                              <span
                                key={t}
                                className={`px-2 py-0.5 rounded text-xs font-medium ${exp.theme.tagStyle}`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
