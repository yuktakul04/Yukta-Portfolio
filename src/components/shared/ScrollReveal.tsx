'use client'

import { motion, type Variants } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === 'object' && !Array.isArray(variants.visible)
            ? variants.visible
            : {}),
          transition: {
            ...((typeof variants.visible === 'object' &&
              !Array.isArray(variants.visible) &&
              (variants.visible as Record<string, unknown>).transition) || {}),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
