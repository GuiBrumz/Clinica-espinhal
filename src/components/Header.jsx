import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS } from '../data/content'

const DESKTOP_LINKS = NAV_LINKS.slice(0, 5)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <>
      {/* ── Main bar ──────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white border-b border-neutral-100 shadow-xs'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img
                src="/img/espinhal.png"
                alt="Espinhal D.O.R"
                className="h-11 w-auto transition-[filter] duration-500"
                style={{
                  filter: scrolled ? 'brightness(0)' : 'brightness(0) invert(1)',
                }}
              />
            </Link>

            {/* Nav — desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {DESKTOP_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative text-sm transition-colors duration-300 pb-1 ${
                      active
                        ? scrolled
                          ? 'text-neutral-950 font-semibold'
                          : 'text-white font-semibold'
                        : scrolled
                          ? 'text-neutral-500 hover:text-neutral-800 font-medium'
                          : 'text-white/70 hover:text-white font-medium'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: 'linear-gradient(90deg, #1d4ed8, #60a5fa, #1d4ed8)' }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA — desktop */}
            <div className="hidden lg:block">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  scrolled
                    ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                    : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/28'
                }`}
              >
                Agendar Avaliação
              </a>
            </div>

            {/* Burger — mobile */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? 'text-neutral-700 hover:bg-neutral-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[76px] left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-xl overflow-hidden">
                <nav className="p-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.025, duration: 0.2 }}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'bg-neutral-100 text-neutral-950 font-semibold'
                            : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                        }`}
                      >
                        {link.label}
                        {isActive(link.href) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="px-3 pb-3 pt-1 border-t border-neutral-100 mt-1">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-950 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Agendar Avaliação
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
