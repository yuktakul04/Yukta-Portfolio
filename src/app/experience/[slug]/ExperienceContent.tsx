'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/motion'
import { Experience } from '@/content/experience'

export default function ExperienceContent({ exp }: { exp: Experience }) {
  return (
    <>
      {/* Role descriptions */}
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="py-16"
      >
        <div className="container-content">
          <motion.h2
            variants={staggerItem}
            className="text-2xl font-bold text-primary mb-8 tracking-tight"
          >
            What I did
          </motion.h2>
          <div className="space-y-4">
            {exp.description.map((desc, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 p-5 rounded-xl border bg-surface/40"
                style={{ borderColor: `${exp.theme.accentColor}15` }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                  style={{
                    background: `${exp.theme.accentColor}20`,
                    color: exp.theme.accentColor,
                  }}
                >
                  {i + 1}
                </div>
                <p className="text-secondary leading-relaxed text-[15px]">{desc}</p>
              </motion.div>
            ))}
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
            {exp.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl border bg-surface/40 hover:bg-surface/60 transition-colors"
                style={{ borderColor: `${exp.theme.accentColor}15` }}
              >
                <span
                  className="mt-1 shrink-0"
                  style={{ color: exp.theme.accentColor }}
                >
                  →
                </span>
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
            Key Takeaways
          </motion.h2>
          <div className="space-y-4">
            {exp.lessons.map((lesson, i) => (
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
