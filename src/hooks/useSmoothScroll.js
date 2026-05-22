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
    // Prevent browser from restoring previous scroll position — Lenis/ScrollToTop manages this
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

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
        const tickerFn = (time) => lenis.raf(time * 1000)
        gsap.ticker.add(tickerFn)

        // Prevent GSAP from compensating for lag frames (avoids jump)
        gsap.ticker.lagSmoothing(0)

        cleanup = () => {
          gsap.ticker.remove(tickerFn)
          lenis.destroy()
          lenisInstance = null
        }

      } catch {
        // Graceful fallback to native scroll
      }
    }

    let cleanup = null
    init()

    return () => {
      if (cleanup) cleanup()
    }
  }, [])
}
