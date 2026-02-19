'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, FlaskConical } from 'lucide-react'
import { publications } from '@/content/research'
import { staggerContainer, staggerItem } from '@/lib/motion'

export default function ResearchPreview() {
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
                  Research & publications
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Published Research
              </h2>
            </div>
            <Link
              href="/research"
              className="hidden md:flex items-center gap-2 text-sm text-secondary hover:text-primary font-medium transition-colors hover-underline"
            >
              All publications
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publications.map((pub, i) => (
              <motion.div key={pub.id} variants={staggerItem}>
                <div className="group p-6 md:p-7 rounded-2xl border border-border bg-surface/50 hover:border-border-light hover:bg-surface/70 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-violet-500/5 to-blue-500/5" />

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                    <BookOpen size={16} className="text-violet-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-primary text-base leading-snug mb-2">
                    {pub.title}
                  </h3>

                  {/* Journal + year */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-violet-400 font-medium">{pub.journal}</span>
                    <span className="text-muted text-xs">·</span>
                    <span className="text-xs text-muted font-mono">{pub.year}</span>
                  </div>

                  {/* Abstract */}
                  <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {pub.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research interests teaser */}
          <motion.div
            variants={staggerItem}
            className="mt-6 p-6 rounded-2xl border border-border bg-surface/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <FlaskConical size={15} className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-primary">Research Collaborator · NUS Singapore</div>
                <div className="text-xs text-secondary">Neuro-Symbolic AI for Commonsense Reasoning · 35% accuracy improvement</div>
              </div>
            </div>
            <Link
              href="/research"
              className="shrink-0 flex items-center gap-1.5 text-sm text-secondary hover:text-primary font-medium transition-colors"
            >
              See research
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
