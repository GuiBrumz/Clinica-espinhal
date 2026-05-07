import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    let lenis
    async function init() {
      try {
        const { default: Lenis } = await import('lenis')
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch {
        // Lenis not available, fallback to native
      }
    }
    init()
    return () => lenis?.destroy?.()
  }, [])
}
