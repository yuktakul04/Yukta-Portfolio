'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Filter } from 'lucide-react'
import { projects } from '@/content/projects'
import { staggerContainer, staggerItem } from '@/lib/motion'

type FilterType = 'all' | 'ai' | 'fullstack' | 'research' | 'edge' | 'security'

const filterLabels: Record<FilterType, string> = {
  all: 'All Projects',
  ai: 'AI / ML',
  fullstack: 'Full Stack',
  research: 'Research',
  edge: 'Edge AI',
  security: 'Security',
}

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterType>('all')

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(active as never))

  const sorted = [...filtered].sort((a, b) => a.order - b.order)

  return (
    <div className="pt-28 pb-24">
      <div className="container-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-secondary text-lg max-w-xl">
            Full-stack applications, AI systems, edge ML, and research — built with production-quality engineering principles.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <Filter size={14} className="text-muted" />
          {(Object.keys(filterLabels) as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === f
                  ? 'bg-violet-600 text-white shadow-glow-violet'
                  : 'bg-surface border border-border text-secondary hover:text-primary hover:border-border-light'
              }`}
            >
              {filterLabels[f]}
              {f !== 'all' && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({projects.filter((p) => p.category.includes(f as never)).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {sorted.map((project) => (
              <motion.div key={project.slug} variants={staggerItem}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <div
                    className="relative p-7 rounded-2xl border bg-surface/50 overflow-hidden transition-all duration-300 h-full flex flex-col"
                    style={{ borderColor: `${project.theme.accentColor}20` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${project.theme.accentColor}12, transparent 60%)`,
                      }}
                    />
                    {/* Top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{ background: project.theme.accentGradient }}
                    />

                    <div className="relative flex flex-col flex-1">
                      {/* Icon + badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{project.theme.icon}</div>
                        <div className="flex items-center gap-2">
                          {project.badge && (
                            <span
                              className="text-xs px-2.5 py-1 rounded-full font-semibold border"
                              style={{
                                background: `${project.theme.accentColor}15`,
                                borderColor: `${project.theme.accentColor}30`,
                                color: project.theme.accentColor,
                              }}
                            >
                              ★ Finalist
                            </span>
                          )}
                          <span className="text-xs text-muted font-mono">{project.timeframe}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-primary mb-1 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-secondary text-sm font-medium mb-3">{project.subtitle}</p>
                      <p className="text-secondary/70 text-sm leading-relaxed mb-5 flex-1">
                        {project.hook}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4 mb-5">
                        {project.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <div
                              className="text-sm font-bold font-mono"
                              style={{ color: project.theme.accentColor }}
                            >
                              {m.value}
                            </div>
                            <div className="text-xs text-muted">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded text-xs font-medium ${project.theme.tagStyle}`}
                          >
                            {t}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="px-2 py-0.5 rounded text-xs text-muted">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>

                      <div
                        className="mt-auto flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: project.theme.accentColor }}
                      >
                        View Case Study
                        <ArrowRight
                          size={13}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
