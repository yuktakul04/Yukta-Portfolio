'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ThemeTokens } from '@/content/theme'
import { ProjectMetric } from '@/content/projects'

interface MetricCounterProps {
  metric: ProjectMetric
  theme: ThemeTokens
  delay?: number
}

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    if (target === 0) return

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])

  return count
}

export function MetricCounterCard({
  metric,
  theme,
  delay = 0,
}: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(metric.numericValue ?? 0, 2000, inView)

  const displayValue = metric.numericValue
    ? `${metric.prefix ?? ''}${count.toLocaleString()}${metric.suffix ?? ''}`
    : metric.value

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl border bg-surface/50 backdrop-blur-sm relative overflow-hidden group"
      style={{ borderColor: `${theme.accentColor}25` }}
    >
      {/* Glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${theme.accentColor}10, transparent 70%)`,
        }}
      />

      {/* Icon */}
      {metric.icon && (
        <div className="text-2xl mb-3">{metric.icon}</div>
      )}

      {/* Value */}
      <div
        className={`text-3xl md:text-4xl font-bold font-mono mb-1 ${theme.keyMetricStyle}`}
      >
        {displayValue}
      </div>

      {/* Label */}
      <div className="text-sm text-secondary font-medium">{metric.label}</div>
    </motion.div>
  )
}

interface MetricsSectionProps {
  metrics: ProjectMetric[]
  theme: ThemeTokens
  title?: string
}

export default function MetricsSection({ metrics, theme, title = 'Impact & Outcomes' }: MetricsSectionProps) {
  return (
    <section className="py-16">
      <div className="container-content">
        <h2 className="text-2xl font-bold text-primary mb-8 tracking-tight">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <MetricCounterCard key={metric.label} metric={metric} theme={theme} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
