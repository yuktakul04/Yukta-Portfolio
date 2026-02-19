'use client'

import { motion } from 'framer-motion'
import { ThemeTokens } from '@/content/theme'
import { staggerContainer } from '@/lib/motion'

interface ThemedTagListProps {
  tags: string[]
  theme: ThemeTokens
  title?: string
  className?: string
}

export default function ThemedTagList({ tags, theme, title, className = '' }: ThemedTagListProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">{title}</h3>
      )}
      <motion.div
        variants={staggerContainer(0.04, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <motion.span
            key={tag}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } },
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${theme.tagStyle} transition-all duration-200 cursor-default`}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
