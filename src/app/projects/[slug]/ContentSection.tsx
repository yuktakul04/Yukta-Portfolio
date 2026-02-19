'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/motion'
import { Project } from '@/content/projects'

export default function ContentSection({ project }: { project: Project }) {
  return (
    <>
      {/* Problem & Solution */}
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="py-16"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                  style={{ background: `${project.theme.accentColor}15`, border: `1px solid ${project.theme.accentColor}30` }}
                >
                  ❓
                </div>
                <h2 className="text-xl font-bold text-primary tracking-tight">The Problem</h2>
              </div>
              <p className="text-secondary leading-relaxed text-[15px]">{project.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                  style={{ background: `${project.theme.accentColor}15`, border: `1px solid ${project.theme.accentColor}30` }}
                >
                  💡
                </div>
                <h2 className="text-xl font-bold text-primary tracking-tight">The Solution</h2>
              </div>
              <p className="text-secondary leading-relaxed text-[15px]">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technical Highlights */}
      <motion.section
        variants={staggerContainer(0.08, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="py-16 border-t border-border/50"
      >
        <div className="container-content">
          <motion.h2
            variants={staggerItem}
            className="text-2xl font-bold text-primary mb-8 tracking-tight"
          >
            Technical Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border bg-surface/40 hover:bg-surface/60 transition-colors"
                style={{ borderColor: `${project.theme.accentColor}15` }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                  style={{
                    background: `${project.theme.accentColor}20`,
                    color: project.theme.accentColor,
                  }}
                >
                  {i + 1}
                </div>
                <p className="text-secondary text-sm leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Lessons Learned */}
      <motion.section
        variants={staggerContainer(0.08, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="py-16 border-t border-border/50"
      >
        <div className="container-content">
          <motion.h2
            variants={staggerItem}
            className="text-2xl font-bold text-primary mb-8 tracking-tight"
          >
            Lessons Learned
          </motion.h2>
          <div className="space-y-4">
            {project.lessons.map((lesson, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-surface/30"
              >
                <span className="text-lg shrink-0">💡</span>
                <p className="text-secondary text-sm leading-relaxed">{lesson}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
