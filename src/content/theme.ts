export type MotionPreset = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'
export type BackgroundPattern = 'grid' | 'dots' | 'circuit' | 'hex' | 'noise' | 'radial'

export interface ThemeTokens {
  /** CSS gradient string for hero/header backgrounds */
  accentGradient: string
  /** Tailwind shadow class for glow effect */
  accentGlow: string
  /** Primary accent hex color */
  accentColor: string
  /** Secondary accent hex color */
  accentColorSecondary: string
  /** Emoji icon representing the project */
  icon: string
  /** Tailwind classes for tech stack tags */
  tagStyle: string
  /** Background pattern type */
  backgroundPattern: BackgroundPattern
  /** Framer Motion preset to use for animations */
  motionPreset: MotionPreset
  /** Tailwind classes for metric number displays */
  keyMetricStyle: string
  /** CSS gradient for hero title text */
  heroTextGradient: string
  /** Card border color class */
  cardBorder: string
  /** Colors for SVG architecture diagrams */
  svgColors: {
    primary: string
    secondary: string
    edge: string
    nodeBg: string
    text: string
  }
  /** RGB values for CSS custom property glow (e.g. "124, 58, 237") */
  glowRgb: string
}

// ─── Preset Themes ────────────────────────────────────────────────────────────

export const themes: Record<string, ThemeTokens> = {
  /** Systematic Ventures — gold/amber, financial intelligence */
  financial: {
    accentGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
    accentGlow: 'shadow-glow-amber',
    accentColor: '#f59e0b',
    accentColorSecondary: '#d97706',
    icon: '💹',
    tagStyle:
      'bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:border-amber-400/40',
    backgroundPattern: 'grid',
    motionPreset: 'fadeUp',
    keyMetricStyle: 'text-amber-400',
    heroTextGradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
    cardBorder: 'border-amber-500/20',
    svgColors: {
      primary: '#f59e0b',
      secondary: '#d97706',
      edge: '#92400e',
      nodeBg: '#1c1508',
      text: '#fbbf24',
    },
    glowRgb: '245, 158, 11',
  },

  /** Samsung R&D — electric blue/cyan, security */
  security: {
    accentGradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #1d4ed8 100%)',
    accentGlow: 'shadow-glow-cyan',
    accentColor: '#06b6d4',
    accentColorSecondary: '#3b82f6',
    icon: '🛡️',
    tagStyle: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/40',
    backgroundPattern: 'circuit',
    motionPreset: 'slideLeft',
    keyMetricStyle: 'text-cyan-400',
    heroTextGradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #3b82f6 100%)',
    cardBorder: 'border-cyan-500/20',
    svgColors: {
      primary: '#06b6d4',
      secondary: '#3b82f6',
      edge: '#0e7490',
      nodeBg: '#021015',
      text: '#22d3ee',
    },
    glowRgb: '6, 182, 212',
  },

  /** Stonklytics — emerald green, stock/finance */
  market: {
    accentGradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #065f46 100%)',
    accentGlow: 'shadow-glow-emerald',
    accentColor: '#10b981',
    accentColorSecondary: '#059669',
    icon: '📈',
    tagStyle:
      'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:border-emerald-400/40',
    backgroundPattern: 'grid',
    motionPreset: 'fadeUp',
    keyMetricStyle: 'text-emerald-400',
    heroTextGradient: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)',
    cardBorder: 'border-emerald-500/20',
    svgColors: {
      primary: '#10b981',
      secondary: '#059669',
      edge: '#065f46',
      nodeBg: '#021210',
      text: '#34d399',
    },
    glowRgb: '16, 185, 129',
  },

  /** GrubSync — orange/amber, food/social */
  social: {
    accentGradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #9a3412 100%)',
    accentGlow: 'shadow-glow-orange',
    accentColor: '#f97316',
    accentColorSecondary: '#ea580c',
    icon: '🍽️',
    tagStyle:
      'bg-orange-500/10 text-orange-300 border border-orange-500/20 hover:border-orange-400/40',
    backgroundPattern: 'dots',
    motionPreset: 'slideRight',
    keyMetricStyle: 'text-orange-400',
    heroTextGradient: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
    cardBorder: 'border-orange-500/20',
    svgColors: {
      primary: '#f97316',
      secondary: '#ea580c',
      edge: '#7c2d12',
      nodeBg: '#150a02',
      text: '#fb923c',
    },
    glowRgb: '249, 115, 22',
  },

  /** GreenLens — teal/green, sustainability/edge AI */
  edge: {
    accentGradient: 'linear-gradient(135deg, #14b8a6 0%, #10b981 50%, #047857 100%)',
    accentGlow: 'shadow-glow-teal',
    accentColor: '#14b8a6',
    accentColorSecondary: '#10b981',
    icon: '🌿',
    tagStyle: 'bg-teal-500/10 text-teal-300 border border-teal-500/20 hover:border-teal-400/40',
    backgroundPattern: 'hex',
    motionPreset: 'scale',
    keyMetricStyle: 'text-teal-400',
    heroTextGradient: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #10b981 100%)',
    cardBorder: 'border-teal-500/20',
    svgColors: {
      primary: '#14b8a6',
      secondary: '#10b981',
      edge: '#0f766e',
      nodeBg: '#021210',
      text: '#2dd4bf',
    },
    glowRgb: '20, 184, 166',
  },

  /** Neuro-Symbolic AI — purple/violet, research */
  research: {
    accentGradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #4c1d95 100%)',
    accentGlow: 'shadow-glow-violet',
    accentColor: '#8b5cf6',
    accentColorSecondary: '#7c3aed',
    icon: '🧠',
    tagStyle:
      'bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:border-violet-400/40',
    backgroundPattern: 'radial',
    motionPreset: 'fadeIn',
    keyMetricStyle: 'text-violet-400',
    heroTextGradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)',
    cardBorder: 'border-violet-500/20',
    svgColors: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      edge: '#4c1d95',
      nodeBg: '#0e0818',
      text: '#a78bfa',
    },
    glowRgb: '139, 92, 246',
  },
}
