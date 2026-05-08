// Framer Motion variant library — kept lean for performance.
// Rule: entrance only (no repeat: Infinity), short distances, fast easing.
// Continuous ambient motion lives in CSS @keyframes instead.

const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const fadeLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}

export const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}

// scale from 0.96 only — avoids expensive composite-layer thrashing
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export const staggerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
}

// Kept for backward-compat — use CSS float class instead where possible
export const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export const floatSlow = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
}

// glowPulse removed — use CSS animation instead (GPU cheaper)
