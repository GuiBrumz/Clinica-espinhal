import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * GSAP ScrollTrigger reveal for a container element.
 * Children matching `selector` stagger-fade in from below.
 * More performant than Framer Motion for large lists of elements.
 *
 * @param {string} selector  - CSS selector for children to animate (default '[data-reveal]')
 * @param {object} opts      - overrides: { y, duration, stagger, start, ease }
 */
export function useScrollReveal(selector = '[data-reveal]', opts = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y        = 28,
      duration = 0.7,
      stagger  = 0.09,
      start    = 'top 88%',
      ease_    = 'power3.out',
    } = opts

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll(selector)
      if (!targets.length) return

      gsap.fromTo(
        targets,
        { opacity: 0, y, willChange: 'transform, opacity' },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: ease_,
          clearProps: 'willChange',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,       // fire once — no re-trigger cost
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [selector, opts.y, opts.duration, opts.stagger, opts.start])

  return ref
}

/**
 * Single-element reveal — simpler alternative for headings / images.
 */
export function useReveal(opts = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y        = 24,
      x        = 0,
      duration = 0.75,
      delay    = 0,
      start    = 'top 90%',
    } = opts

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, x, willChange: 'transform, opacity' },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
          clearProps: 'willChange',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [opts.y, opts.x, opts.duration, opts.delay, opts.start])

  return ref
}
