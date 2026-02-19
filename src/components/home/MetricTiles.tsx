'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

interface Metric {
  prefix?: string
  value: number
  suffix: string
  label: string
  description: string
  icon: string
  accentColor: string
  glowClass: string
}

const metrics: Metric[] = [
  {
    value: 370,
    suffix: 'K+',
    label: 'Companies Indexed',
    description: 'In production financial intelligence SaaS at Systematic Ventures',
    icon: '🏢',
    accentColor: '#f59e0b',
    glowClass: 'shadow-glow-amber',
  },
  {
    prefix: '+',
    value: 40,
    suffix: '%',
    label: 'Detection Accuracy',
    description: 'Improvement in XSS & SQLi vulnerability detection at Samsung R&D',
    icon: '🎯',
    accentColor: '#06b6d4',
    glowClass: 'shadow-glow-cyan',
  },
  {
    value: 35,
    suffix: '%',
    label: 'Accuracy Improvement',
    description: 'In commonsense reasoning via Neuro-Symbolic AI research at NUS',
    icon: '🧠',
    accentColor: '#8b5cf6',
    glowClass: 'shadow-glow-violet',
  },
]

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])
  return count
}

function MetricCard({ metric, delay }: { metric: Metric; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(metric.value, 1800, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 md:p-8 rounded-2xl border bg-surface/50 overflow-hidden cursor-default"
      style={{ borderColor: `${metric.accentColor}25` }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${metric.accentColor}12, transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${metric.accentColor}, transparent)` }}
      />

      <div className="relative">
        {/* Icon */}
        <div className="text-3xl mb-4">{metric.icon}</div>

        {/* Counter */}
        <div
          className="text-4xl md:text-5xl font-bold font-mono tracking-tight mb-2"
          style={{ color: metric.accentColor }}
        >
          {metric.prefix ?? ''}{count}{metric.suffix}
        </div>

        {/* Label */}
        <div className="text-primary font-semibold text-lg mb-2">{metric.label}</div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed">{metric.description}</p>
      </div>
    </motion.div>
  )
}

export default function MetricTiles() {
  return (
    <section className="py-20 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-content">
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section header */}
          <motion.div variants={staggerItem} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">By the numbers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Real-world impact
            </h2>
          </motion.div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((metric, i) => (
              <MetricCard key={metric.label} metric={metric} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
