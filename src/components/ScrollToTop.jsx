import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../hooks/useSmoothScroll'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = getLenis()

    // Quando há uma âncora na URL (ex: /#depoimentos), rola até a seção.
    // O elemento pode ainda não existir por causa da transição de página
    // (AnimatePresence mode="wait"), então tentamos algumas vezes.
    if (hash) {
      const id = hash.slice(1)
      let attempts = 0

      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 })
          } else {
            el.scrollIntoView({ behavior: 'smooth' })
          }
          return
        }
        if (attempts++ < 30) {
          requestAnimationFrame(tryScroll)
        }
      }

      tryScroll()
      return
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.dispatchEvent(new Event('scroll'))
  }, [pathname, hash])

  return null
}
