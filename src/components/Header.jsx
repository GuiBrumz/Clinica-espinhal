import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS } from '../data/content'

// Split nav into primary (visible) + overflow (More dropdown) at md breakpoint
const PRIMARY_LINKS = NAV_LINKS.slice(0, 6)   // Início → Estrutura
const MORE_LINKS    = NAV_LINKS.slice(6)       // Depoimentos, FAQ, Contato

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [moreOpen, setMoreOpen]   = useState(false)
  const location = useLocation()
  const moreRef  = useRef(null)

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const solidBg  = scrolled || !isHome
  const textBase = solidBg ? 'text-neutral-600' : 'text-white/80'
  const textActive = solidBg ? 'text-brand-600' : 'text-white'
  const bgClass  = solidBg
    ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-100'
    : 'bg-transparent'

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  const isMoreActive = MORE_LINKS.some(l => isActive(l.href))

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.07 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  solidBg ? 'bg-brand-600' : 'bg-white/20 backdrop-blur-sm'
                }`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20a1 1 0 001 1h6a1 1 0 001-1v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13.5V16M12 13V16M15 13.5V16M9 9h6M12 7v4"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.div>
              <div>
                <div className={`font-serif font-bold text-lg leading-none transition-colors duration-300 ${solidBg ? 'text-neutral-900' : 'text-white'}`}>
                  Espinhal
                </div>
                <div className={`text-[10px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${solidBg ? 'text-brand-600' : 'text-blue-200'}`}>
                  D.O.R
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {PRIMARY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group
                    ${isActive(link.href) ? textActive + ' font-semibold' : textBase + ' hover:' + (solidBg ? 'text-neutral-900' : 'text-white')}`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${solidBg ? 'bg-brand-600' : 'bg-white'}`}
                    />
                  )}
                </Link>
              ))}

              {/* More dropdown */}
              {MORE_LINKS.length > 0 && (
                <div ref={moreRef} className="relative">
                  <button
                    onClick={() => setMoreOpen(!moreOpen)}
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200
                      ${isMoreActive ? textActive + ' font-semibold' : textBase}`}
                  >
                    Mais
                    <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {moreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-neutral-100 p-1.5 z-50"
                      >
                        {MORE_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={`flex items-center px-3 py-2.5 text-sm rounded-xl transition-colors
                              ${isActive(link.href)
                                ? 'bg-brand-50 text-brand-600 font-semibold'
                                : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'}`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </nav>

            {/* ── Right CTAs ── */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                  solidBg ? 'text-neutral-500 hover:text-brand-600' : 'text-white/70 hover:text-white'
                }`}
              >
                <Phone size={14} />
                {CLINIC_INFO.phone}
              </a>
              <motion.a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá, gostaria de agendar uma avaliação`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Agendar Avaliação
              </motion.a>
            </div>

            {/* ── Mobile burger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className={`xl:hidden p-2 rounded-lg transition-colors ${
                solidBg ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-2xl xl:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20a1 1 0 001 1h6a1 1 0 001-1v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-neutral-900">Espinhal D.O.R</span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-500">
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all
                        ${isActive(link.href)
                          ? 'bg-brand-50 text-brand-600 font-semibold'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'}`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer CTAs */}
              <div className="p-4 border-t border-neutral-100 space-y-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-neutral-600 text-sm hover:text-brand-600 transition-colors"
                >
                  <Phone size={15} className="text-brand-600" />
                  {CLINIC_INFO.phone}
                </a>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá, gostaria de agendar uma avaliação`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Agendar Avaliação
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
