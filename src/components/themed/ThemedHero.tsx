'use client'

import { motion } from 'framer-motion'
import { ThemeTokens } from '@/content/theme'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'
import { ExternalLink, Github } from 'lucide-react'

interface ThemedHeroProps {
  title: string
  subtitle: string
  hook: string
  timeframe: string
  location?: string
  role?: string
  badge?: string
  stack: string[]
  theme: ThemeTokens
  links: Array<{ label: string; url: string; type: string }>
}

export default function ThemedHero({
  title,
  subtitle,
  hook,
  timeframe,
  location,
  role,
  badge,
  stack,
  theme,
  links,
}: ThemedHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-60" />

        {/* Large gradient orb */}
        <div
          className="orb w-[700px] h-[500px] -top-40 -right-40 opacity-20 animate-float"
          style={{ background: theme.accentGradient }}
        />
        <div
          className="orb w-[400px] h-[300px] bottom-0 left-1/4 opacity-10 animate-float-delayed"
          style={{ background: `radial-gradient(circle, ${theme.accentColor}60, transparent)` }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-content relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          {badge && (
            <motion.div variants={staggerItem} className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border"
                style={{
                  background: `${theme.accentColor}15`,
                  borderColor: `${theme.accentColor}40`,
                  color: theme.accentColor,
                }}
              >
                <span className="text-base">{theme.icon}</span>
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.div variants={staggerItem}>
            {!badge && (
              <div className="text-4xl mb-3">{theme.icon}</div>
            )}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-gradient tracking-tight"
              style={{ backgroundImage: theme.heroTextGradient }}
            >
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium mb-4">{subtitle}</p>
          </motion.div>

          {/* Hook */}
          <motion.p
            variants={staggerItem}
            className="text-primary/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8"
          >
            {hook}
          </motion.p>

          {/* Meta row */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 mb-8 text-sm"
          >
            {role && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-secondary">
                <span>👤</span>
                {role}
              </span>
            )}
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-secondary">
              <span>🗓️</span>
              {timeframe}
            </span>
            {location && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-secondary">
                <span>📍</span>
                {location}
              </span>
            )}
          </motion.div>

          {/* Stack tags */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mb-8">
            {stack.slice(0, 8).map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-lg text-xs font-medium ${theme.tagStyle}`}
              >
                {tech}
              </span>
            ))}
            {stack.length > 8 && (
              <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-secondary border border-white/[0.06]">
                +{stack.length - 8} more
              </span>
            )}
          </motion.div>

          {/* Links */}
          {links.length > 0 && (
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border"
                  style={{
                    background: `${theme.accentColor}20`,
                    borderColor: `${theme.accentColor}40`,
                    color: theme.accentColor,
                  }}
                >
                  {link.type === 'github' ? (
                    <Github size={15} />
                  ) : (
                    <ExternalLink size={15} />
                  )}
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
