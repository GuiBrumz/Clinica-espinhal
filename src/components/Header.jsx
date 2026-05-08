import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS } from '../data/content'

const DESKTOP_LINKS = NAV_LINKS.slice(0, 5)

const HEADER_SAMPLE_Y = 53

function detectSectionTheme() {
  const sections = document.querySelectorAll('[data-header-theme]')
  // No themed sections on this page → default to light (dark header, always visible)
  if (!sections.length) return 'light'
  const checkY = window.scrollY + HEADER_SAMPLE_Y
  for (const section of sections) {
    const top = section.getBoundingClientRect().top + window.scrollY
    const bottom = top + section.offsetHeight
    if (checkY >= top && checkY < bottom) return section.dataset.headerTheme
  }
  // Below all themed sections → treat as light
  return 'light'
}

export default function Header() {
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  // Start as 'light' — entrance animation hides the header during first paint,
  // so the effect has time to detect the correct theme before it becomes visible.
  const [sectionTheme, setSectionTheme]   = useState('light')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
      setSectionTheme(detectSectionTheme())
    }
    setSectionTheme(detectSectionTheme())
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Re-detect on route change (page may have different sections)
  useEffect(() => {
    setSectionTheme(detectSectionTheme())
  }, [location.pathname])

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  // onDark = header is sitting over a dark section → use white/light header
  // onLight = header is sitting over a light section → use dark/blue header
  const onDark = sectionTheme === 'dark'

  // ── Card background & border ─────────────────────────────────────────────
  // Both states use fully opaque backgrounds so backdrop-filter never shows
  // through during color crossfades — prevents any blur animation mid-transition.
  const cardClass = onDark
    ? scrolled
      ? 'bg-white border-neutral-200 shadow-[0_4px_24px_rgba(0,0,0,0.10)]'
      : 'bg-white border-neutral-200/60 shadow-[0_2px_16px_rgba(0,0,0,0.07)]'
    : scrolled
      ? 'bg-[#0d1f5c] border-[#1e3578] shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
      : 'bg-[#0d1f5c] border-[#1e3578] shadow-[0_2px_20px_rgba(0,0,0,0.28)]'

  // ── Nav link colors ──────────────────────────────────────────────────────
  const navActive   = onDark ? 'text-neutral-900 font-semibold' : 'text-white font-semibold'
  const navInactive = onDark ? 'text-neutral-500 hover:text-neutral-800 font-medium' : 'text-white/60 hover:text-white font-medium'
  const pillBg      = onDark ? 'bg-neutral-100' : 'bg-white/[0.12]'

  // ── Logo text ────────────────────────────────────────────────────────────
  const logoTitle    = onDark ? 'text-neutral-900' : 'text-white'
  const logoSubtitle = onDark ? 'text-brand-600'   : 'text-blue-300'

  // ── Phone color ──────────────────────────────────────────────────────────
  const phoneClass = onDark
    ? 'text-neutral-400 hover:text-neutral-700'
    : 'text-white/50 hover:text-white/80'

  // ── CTA button ───────────────────────────────────────────────────────────
  const ctaClass = onDark
    ? 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950'
    : 'bg-white text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200'

  // ── Burger ───────────────────────────────────────────────────────────────
  const burgerClass = onDark
    ? 'text-neutral-600 hover:bg-neutral-100'
    : 'text-white/70 hover:bg-white/10'

  return (
    <>
      {/* ── Floating pill wrapper ─────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-6xl mx-auto rounded-2xl border transition-[background-color,border-color,box-shadow,color] duration-500 ${cardClass}`}
        >
          <div className="px-5 sm:px-6">
            <div className="relative flex items-center justify-between h-[58px]">

              {/* ── Logo ───────────────────────────────────────────────── */}
              <Link to="/" className="flex items-center gap-2.5 shrink-0 z-10">
                <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center shadow-sm">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20a1 1 0 001 1h6a1 1 0 001-1v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                    />
                    <path d="M9 13.5V16M12 13V16M15 13.5V16"
                      stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="leading-none">
                  <span className={`font-serif font-bold text-[15px] block transition-colors duration-500 ${logoTitle}`}>Espinhal</span>
                  <span className={`text-[9px] font-bold tracking-[0.14em] uppercase block transition-colors duration-500 ${logoSubtitle}`}>D.O.R</span>
                </div>
              </Link>

              {/* ── Nav — absolutamente centralizada ───────────────────── */}
              <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5">
                {DESKTOP_LINKS.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`relative px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                        active ? navActive : navInactive
                      }`}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 rounded-xl -z-10 transition-colors duration-500 ${pillBg}`}
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </nav>

              {/* ── Actions ────────────────────────────────────────────── */}
              <div className="hidden lg:flex items-center gap-3 shrink-0 z-10">
                {scrolled && (
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className={`text-sm font-medium transition-colors duration-200 ${phoneClass}`}
                  >
                    {CLINIC_INFO.phone}
                  </a>
                )}
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 hover:-translate-y-px shadow-sm ${ctaClass}`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Agendar Avaliação
                </a>
              </div>

              {/* ── Burger mobile ──────────────────────────────────────── */}
              <button
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                className={`lg:hidden p-2 rounded-xl transition-colors z-10 ${burgerClass}`}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>
          </div>
        </motion.header>
      </div>

      {/* ── Mobile drawer ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[82px] left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white rounded-2xl border border-neutral-200/60 shadow-xl overflow-hidden"
                style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>

                {/* Links */}
                <nav className="p-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'bg-neutral-100 text-neutral-900 font-semibold'
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

                {/* Divider + CTAs */}
                <div className="px-3 pb-3 pt-1 border-t border-neutral-100 space-y-2 mt-1">
                  <a href={`tel:${CLINIC_INFO.phone}`}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-400 hover:text-neutral-700 transition-colors">
                    <Phone size={13} />
                    {CLINIC_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
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
