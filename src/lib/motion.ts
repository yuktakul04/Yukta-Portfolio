import type { Variants, Transition } from 'framer-motion'

// ─── Base Transitions ──────────────────────────────────────────────────────

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
}

export const smoothTransition: Transition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.5,
}

export const slowTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.8,
}

// ─── Animation Variants ────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...smoothTransition },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...smoothTransition },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...smoothTransition },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springTransition },
  },
}

// ─── Container Stagger ─────────────────────────────────────────────────────

export function staggerContainer(staggerChildren = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...smoothTransition },
  },
}

// ─── Page Transition ───────────────────────────────────────────────────────

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

// ─── Viewport Config ───────────────────────────────────────────────────────

export const viewportOnce = { once: true, margin: '-80px' }

// ─── Hover / Tap Animations ────────────────────────────────────────────────

export const hoverCard = {
  rest: { scale: 1, y: 0, transition: smoothTransition },
  hover: {
    scale: 1.02,
    y: -4,
    transition: springTransition,
  },
}

export const hoverButton = {
  rest: { scale: 1 },
  hover: { scale: 1.04 },
  tap: { scale: 0.97 },
}

// ─── Preset Map ────────────────────────────────────────────────────────────

export const presetMap = {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scale: scaleIn,
} as const

export type PresetKey = keyof typeof presetMap
