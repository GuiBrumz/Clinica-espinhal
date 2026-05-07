import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(options = {}) {
  const { threshold = 0.15, triggerOnce = true, ...rest } = options
  const [ref, inView] = useInView({ threshold, triggerOnce, ...rest })
  return { ref, inView }
}
