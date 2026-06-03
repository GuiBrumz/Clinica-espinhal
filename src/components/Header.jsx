import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS } from '../data/content'

const DESKTOP_LINKS = NAV_LINKS.filter(l =>
  ['/', '/especialidades', '/tratamentos', '/sobre', '/estrutura', '/contato'].includes(l.href)
)

function Logo() {
  return (
    <Link to="/" className="shrink-0">
      <img
        src="/img/espinhal.png"
        alt="Clínica Espinhal D.O.R"
        className="h-16 w-auto"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        {/* Dark gradient so white text is always legible over any hero image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.18) 70%, transparent 100%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            <Logo />

            {/* Nav — desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {DESKTOP_LINKS.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      active
                        ? 'text-white bg-white/12'
                        : 'text-white/65 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-400" />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white text-neutral-950 hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-sm"
              >
                Agendar Avaliação
                <ArrowRight size={13} />
              </a>
            </div>

            {/* Burger — mobile */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="lg:hidden p-2 rounded-xl text-white/80 hover:bg-white/10 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[80px] left-4 right-4 z-50 lg:hidden"
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
