import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  {
    href: 'https://github.com/yuktakul04',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/yukta-kulkarni-/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:yk3213@nyu.edu',
    label: 'Email',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-content py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
                YK
              </div>
              <span className="font-semibold text-primary">Yukta Kulkarni</span>
            </div>
            <p className="text-secondary text-sm max-w-xs">
              AI & Full Stack Engineer · NYU MS CS '26 · Open to roles starting May 2026
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary hover:text-primary transition-colors hover-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-border hover:border-border-light flex items-center justify-center text-secondary hover:text-primary transition-all hover:bg-white/[0.04]"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} Yukta Kulkarni. Built with Next.js & Framer Motion.</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-emerald-500">Open to full-time roles · May 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
