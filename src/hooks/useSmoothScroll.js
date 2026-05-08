import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function useSmoothScroll() {
  useEffect(() => {
    let lenis

    async function init() {
      try {
        const { default: Lenis } = await import('lenis')

        lenis = new Lenis({
          lerp: 0.08,            // silky interpolation (lower = smoother)
          wheelMultiplier: 0.9,  // reduce over-scroll on wheel
          touchMultiplier: 1.2,
          smoothWheel: true,
          syncTouch: false,      // native feel on mobile
        })

        lenisInstance = lenis

        // Sync Lenis position into ScrollTrigger every frame
        lenis.on('scroll', ScrollTrigger.update)

        // Replace rAF loop with GSAP ticker — one unified frame budget
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000)
        })

        // Prevent GSAP from compensating for lag frames (avoids jump)
        gsap.ticker.lagSmoothing(0)

      } catch {
        // Graceful fallback to native scroll
      }
    }

    init()

    return () => {
      if (lenis) {
        gsap.ticker.remove((time) => lenis.raf(time * 1000))
        lenis.destroy()
        lenisInstance = null
      }
    }
  }, [])
}
