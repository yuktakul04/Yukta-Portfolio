'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ThemeTokens } from '@/content/theme'
import { staggerContainer, staggerItem } from '@/lib/motion'

interface RelatedItem {
  slug: string
  title: string
  hook: string
  theme: ThemeTokens
  type: 'project' | 'experience'
  timeframe: string
  badge?: string
}

interface RelatedCardsProps {
  items: RelatedItem[]
  title?: string
}

export default function RelatedCards({ items, title = 'Related Work' }: RelatedCardsProps) {
  if (items.length === 0) return null

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container-content">
        <h2 className="text-2xl font-bold text-primary mb-8 tracking-tight">{title}</h2>
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {items.map((item) => {
            const href = `/${item.type === 'project' ? 'projects' : 'experience'}/${item.slug}`
            return (
              <motion.div key={item.slug} variants={staggerItem}>
                <Link href={href} className="group block">
                  <div
                    className="p-6 rounded-2xl border bg-surface/40 hover:bg-surface/70 transition-all duration-300 relative overflow-hidden h-full"
                    style={{ borderColor: `${item.theme.accentColor}20` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${item.theme.accentColor}12, transparent 70%)`,
                      }}
                    />

                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: item.theme.accentGradient }}
                    />

                    <div className="relative">
                      <div className="text-2xl mb-3">{item.theme.icon}</div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                        {item.badge && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: `${item.theme.accentColor}20`,
                              color: item.theme.accentColor,
                            }}
                          >
                            ★
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted mb-3 font-mono">{item.timeframe}</p>
                      <p className="text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
                        {item.hook}
                      </p>
                      <div
                        className="flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: item.theme.accentColor }}
                      >
                        View {item.type === 'project' ? 'Project' : 'Experience'}
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
