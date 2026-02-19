'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { getFeaturedProjects } from '@/content/projects'
import { staggerContainer, staggerItem } from '@/lib/motion'

const featured = getFeaturedProjects()

export default function FeaturedProjects() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-content">
        <motion.div
          variants={staggerContainer(0.08, 0)}
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
                  Selected work
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-sm text-secondary hover:text-primary font-medium transition-colors hover-underline"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* First project — featured spotlight (large) */}
          {featured[0] && (
            <motion.div variants={staggerItem} className="mb-4">
              <Link href={`/projects/${featured[0].slug}`} className="group block">
                <div
                  className="relative rounded-2xl border bg-surface/50 overflow-hidden transition-all duration-300 hover:border-opacity-60"
                  style={{ borderColor: `${featured[0].theme.accentColor}25` }}
                >
                  {/* Background gradient */}
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: featured[0].theme.accentGradient }}
                  />

                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 bg-grid-sm opacity-30 pointer-events-none" />

                  {/* Top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: featured[0].theme.accentGradient }}
                  />

                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Left: content */}
                      <div className="flex-1">
                        {/* Badge */}
                        {featured[0].badge && (
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-4"
                            style={{
                              background: `${featured[0].theme.accentColor}15`,
                              borderColor: `${featured[0].theme.accentColor}35`,
                              color: featured[0].theme.accentColor,
                            }}
                          >
                            <span className="text-base">{featured[0].theme.icon}</span>
                            {featured[0].badge}
                          </div>
                        )}

                        {!featured[0].badge && (
                          <div className="text-4xl mb-4">{featured[0].theme.icon}</div>
                        )}

                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight">
                          {featured[0].title}
                        </h3>
                        <p className="text-secondary text-base mb-4 font-medium">
                          {featured[0].subtitle}
                        </p>
                        <p className="text-secondary/80 leading-relaxed max-w-xl mb-6">
                          {featured[0].hook}
                        </p>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featured[0].stack.slice(0, 5).map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-1 rounded-lg text-xs font-medium ${featured[0].theme.tagStyle}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-6">
                          {featured[0].metrics.slice(0, 2).map((m) => (
                            <div key={m.label}>
                              <div
                                className="text-2xl font-bold font-mono"
                                style={{ color: featured[0].theme.accentColor }}
                              >
                                {m.value}
                              </div>
                              <div className="text-xs text-muted">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: CTA */}
                      <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                        <div
                          className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                          style={{ color: featured[0].theme.accentColor }}
                        >
                          View Case Study
                          <ArrowRight size={14} />
                        </div>
                        <span className="text-xs text-muted font-mono">{featured[0].timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Other projects — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.slice(1, 3).map((project, i) => (
              <motion.div key={project.slug} variants={staggerItem}>
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <div
                    className="relative p-6 md:p-8 rounded-2xl border bg-surface/50 overflow-hidden transition-all duration-300 h-full"
                    style={{ borderColor: `${project.theme.accentColor}20` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${project.theme.accentColor}12, transparent 70%)`,
                      }}
                    />

                    {/* Top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: project.theme.accentGradient }}
                    />

                    <div className="relative">
                      <div className="text-3xl mb-4">{project.theme.icon}</div>
                      <h3 className="text-2xl font-bold text-primary mb-1 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-secondary text-sm mb-3 font-medium">{project.subtitle}</p>
                      <p className="text-secondary/70 text-sm leading-relaxed mb-5 line-clamp-2">
                        {project.hook}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded text-xs font-medium ${project.theme.tagStyle}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: project.theme.accentColor }}
                      >
                        View Project
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
          </div>

          {/* Mobile view all */}
          <motion.div variants={staggerItem} className="mt-6 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary font-medium transition-colors"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
