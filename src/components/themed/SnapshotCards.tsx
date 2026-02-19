'use client'

import { motion } from 'framer-motion'
import { ThemeTokens } from '@/content/theme'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { ExternalLink, Github } from 'lucide-react'

interface SnapshotCardsProps {
  role?: string
  stack: string[]
  metrics: Array<{ label: string; value: string; icon?: string }>
  links: Array<{ label: string; url: string; type: string }>
  theme: ThemeTokens
  company?: string
  timeframe: string
}

export default function SnapshotCards({
  role,
  stack,
  metrics,
  links,
  theme,
  company,
  timeframe,
}: SnapshotCardsProps) {
  const cards = [
    {
      label: role ? 'Role' : 'Category',
      icon: '👤',
      content: (
        <div className="space-y-1">
          {role && <p className="text-primary font-semibold text-sm">{role}</p>}
          {company && <p className="text-secondary text-xs">{company}</p>}
          <p className="text-muted text-xs font-mono">{timeframe}</p>
        </div>
      ),
    },
    {
      label: 'Tech Stack',
      icon: '⚙️',
      content: (
        <div className="flex flex-wrap gap-1.5">
          {stack.slice(0, 5).map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded text-xs font-medium ${theme.tagStyle}`}
            >
              {t}
            </span>
          ))}
          {stack.length > 5 && (
            <span className="px-2 py-0.5 rounded text-xs text-muted">+{stack.length - 5}</span>
          )}
        </div>
      ),
    },
    {
      label: 'Impact',
      icon: '📊',
      content: (
        <div className="space-y-2">
          {metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="flex items-center gap-2">
              {m.icon && <span className="text-sm">{m.icon}</span>}
              <div>
                <span className={`text-sm font-bold font-mono ${theme.keyMetricStyle}`}>
                  {m.value}
                </span>
                <span className="text-xs text-secondary ml-1.5">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Links',
      icon: '🔗',
      content: (
        <div className="flex flex-col gap-2">
          {links.length > 0 ? (
            links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: theme.accentColor }}
              >
                {link.type === 'github' ? (
                  <Github size={13} />
                ) : (
                  <ExternalLink size={13} />
                )}
                {link.label}
              </a>
            ))
          ) : (
            <span className="text-secondary text-sm">Internal project</span>
          )}
        </div>
      ),
    },
  ]

  return (
    <section className="py-12 border-y border-border/50">
      <div className="container-content">
        <motion.div
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={staggerItem}
              className="p-5 rounded-2xl border bg-surface/50 relative overflow-hidden group"
              style={{ borderColor: `${theme.accentColor}20` }}
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `${theme.accentColor}08` }}
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{card.icon}</span>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {card.label}
                  </span>
                </div>
                {card.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
