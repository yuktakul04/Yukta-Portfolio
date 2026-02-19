'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, GraduationCap } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/motion'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yk3213@nyu.edu',
    href: 'mailto:yk3213@nyu.edu',
    description: 'Best for role inquiries and opportunities',
    color: '#7c3aed',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yukta-kulkarni-',
    href: 'https://www.linkedin.com/in/yukta-kulkarni-/',
    description: 'Professional profile and network',
    color: '#0a66c2',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yuktakul04',
    href: 'https://github.com/yuktakul04',
    description: 'Code, projects, and open source work',
    color: '#e8e8f8',
  },
]

const roleTypes = [
  'Software Engineer',
  'Backend Engineer',
  'Full Stack Engineer',
  'AI / ML Engineer',
  'Research Engineer',
]

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('yk3213@nyu.edu')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-28 pb-24">
      <div className="container-content">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Get in touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
              Let's work together.
            </h1>
            <p className="text-secondary text-lg max-w-xl leading-relaxed">
              I'm actively looking for full-time roles in software engineering and AI starting
              May 2026. If you're building something meaningful, I'd love to talk.
            </p>
          </motion.div>

          {/* Availability card */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse-slow mt-1 shrink-0" />
              <div>
                <div className="font-bold text-emerald-300 mb-1">
                  Open to full-time roles · Available May 2026
                </div>
                <p className="text-secondary text-sm mb-3">
                  Currently finishing my Master's at NYU and open to the following role types:
                </p>
                <div className="flex flex-wrap gap-2">
                  {roleTypes.map((r) => (
                    <span
                      key={r}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-2 text-secondary text-sm mb-8"
          >
            <MapPin size={14} className="text-muted" />
            New York City, NY · Open to remote & hybrid
            <span className="mx-2 text-muted">·</span>
            <GraduationCap size={14} className="text-muted" />
            NYU Tandon School of Engineering
          </motion.div>

          {/* Contact channels */}
          <motion.div variants={staggerItem} className="mb-12">
            <h2 className="text-xl font-bold text-primary mb-5 tracking-tight">
              Reach me directly
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group p-5 rounded-2xl border border-border hover:border-border-light bg-surface/50 transition-all duration-300 block"
                  style={{
                    ['--hover-glow' as string]: `${channel.color}12`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl border flex items-center justify-center"
                      style={{
                        background: `${channel.color}15`,
                        borderColor: `${channel.color}30`,
                      }}
                    >
                      <channel.icon size={15} style={{ color: channel.color }} />
                    </div>
                    <span className="font-semibold text-primary text-sm">{channel.label}</span>
                  </div>
                  <div className="text-xs font-mono text-secondary mb-1 break-all">
                    {channel.value}
                  </div>
                  <div className="text-xs text-muted">{channel.description}</div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick copy email */}
          <motion.div
            variants={staggerItem}
            className="p-6 rounded-2xl border border-border bg-surface/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="font-semibold text-primary mb-1">Quick copy</div>
              <div className="text-secondary text-sm font-mono">yk3213@nyu.edu</div>
            </div>
            <button
              onClick={copyEmail}
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2"
            >
              {copied ? '✓ Copied!' : (
                <>
                  <Send size={13} />
                  Copy Email
                </>
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
