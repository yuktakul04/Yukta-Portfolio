'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Mail, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/motion'

interface CTASectionProps {
  title?: string
  subtitle?: string
  showResume?: boolean
  showContact?: boolean
  accentColor?: string
}

export default function CTASection({
  title = "Let's build something great together.",
  subtitle = "I'm actively looking for full-time Software Engineer, Backend, Full Stack, and AI Engineer roles starting May 2026.",
  showResume = true,
  showContact = true,
  accentColor = '#7c3aed',
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${accentColor}12 0%, transparent 70%)`,
        }}
      />

      <motion.div
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-content relative z-10 text-center"
      >
        <motion.div variants={staggerItem}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            Available for full-time · May 2026
          </div>
        </motion.div>

        <motion.h2
          variants={staggerItem}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight"
        >
          {title}
        </motion.h2>

        <motion.p variants={staggerItem} className="text-secondary text-lg max-w-2xl mx-auto mb-10">
          {subtitle}
        </motion.p>

        <motion.div variants={staggerItem} className="flex flex-wrap items-center justify-center gap-4">
          {showContact && (
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-all duration-200 shadow-glow-violet hover:shadow-[0_0_50px_-8px_rgba(124,58,237,0.8)]"
            >
              <Mail size={16} />
              Get in Touch
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          {showResume && (
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border hover:border-border-light text-primary font-medium rounded-xl transition-all duration-200 hover:bg-white/[0.04]"
            >
              <Download size={16} />
              Download Resume
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
