'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Mail, ArrowRight, Github, Linkedin } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/motion'

const roles = [
  'AI Engineer',
  'Backend Developer',
  'Full Stack Engineer',
  'ML Researcher',
]

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')

  useEffect(() => {
    const current = roles[roleIdx]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pause'), 1800)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('deleting'), 400)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setPhase('typing')
      }
    }
  }, [displayed, phase, roleIdx])

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}>
        {displayed}
      </span>
      <span className="inline-block w-0.5 h-[0.85em] bg-violet-400 animate-pulse" />
    </span>
  )
}

const skills = [
  'Python', 'TypeScript', 'React', 'Next.js', 'FastAPI',
  'GPT-4o', 'RAG', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Orbs */}
        <div
          className="orb w-[600px] h-[600px] -top-32 -right-32 opacity-15 animate-float"
          style={{ background: 'radial-gradient(circle, #7c3aed80, transparent 70%)' }}
        />
        <div
          className="orb w-[400px] h-[400px] bottom-20 -left-20 opacity-10 animate-float-delayed"
          style={{ background: 'radial-gradient(circle, #3b82f680, transparent 70%)' }}
        />
        <div
          className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-05"
          style={{ background: 'radial-gradient(circle, #10b98150, transparent 70%)' }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-content relative z-10 py-16">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={staggerItem} className="mb-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              Available for full-time roles · Graduating May 2026
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={staggerItem}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3">
              <span className="text-primary">Hi, I'm </span>
              <span
                className="text-gradient"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #3b82f6 100%)',
                }}
              >
                Yukta Kulkarni
              </span>
            </h1>
          </motion.div>

          {/* Role typewriter */}
          <motion.div variants={staggerItem} className="text-3xl md:text-4xl font-bold mb-6">
            <TypewriterRole />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-8"
          >
            NYU MS Computer Science '26 · Building intelligent, scalable systems at the
            intersection of AI, backend engineering, and real-world impact. Previously at{' '}
            <span className="text-amber-400 font-medium">Systematic Ventures</span> &{' '}
            <span className="text-cyan-400 font-medium">Samsung R&D</span>.
          </motion.p>

          {/* Skills row */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.04 }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface border border-border text-secondary hover:border-border-light hover:text-primary transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-glow-violet hover:shadow-[0_0_50px_-8px_rgba(124,58,237,0.9)]"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 border border-border hover:border-border-light text-primary font-semibold rounded-xl transition-all duration-200 hover:bg-white/[0.04]"
            >
              <Download size={16} />
              Resume
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/yuktakul04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border hover:border-border-light flex items-center justify-center text-secondary hover:text-primary transition-all hover:bg-white/[0.04]"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/yukta-kulkarni-/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border hover:border-border-light flex items-center justify-center text-secondary hover:text-primary transition-all hover:bg-white/[0.04]"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:yk3213@nyu.edu"
                className="w-10 h-10 rounded-xl border border-border hover:border-border-light flex items-center justify-center text-secondary hover:text-primary transition-all hover:bg-white/[0.04]"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
