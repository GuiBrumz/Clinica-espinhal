import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Generic page-hero used by every interior page
export default function PageHero({
  label,           // overline eyebrow
  title,           // main heading (can contain JSX)
  subtitle,        // body paragraph
  image,           // background or side image URL
  breadcrumbs = [],// [{ label, href }]
  cta,             // { label, href, onClick }
  ctaSecondary,    // { label, href }
  align = 'left',  // 'left' | 'center'
  overlay = true,  // dark gradient overlay on image
  dark = true,     // dark (blue) vs light variant
  minHeight = 'min-h-[480px] md:min-h-[560px]',
  children,        // optional slot for extra right-column content
}) {
  const centered = align === 'center'

  return (
    <section
      className={`relative ${minHeight} flex flex-col justify-end overflow-hidden`}
      style={
        dark
          ? { background: 'linear-gradient(150deg, #001040 0%, #0040cc 50%, #0057FF 100%)' }
          : { background: 'linear-gradient(150deg, #f8fafc 0%, #eff6ff 100%)' }
      }
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          {overlay && (
            <div
              className="absolute inset-0"
              style={{
                background: dark
                  ? 'linear-gradient(135deg, rgba(0,16,64,0.85) 0%, rgba(0,64,204,0.75) 60%, rgba(0,87,255,0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(248,250,252,0.92) 0%, rgba(239,246,255,0.85) 100%)',
              }}
            />
          )}
        </div>
      )}

      {/* Decorative grid */}
      {dark && (
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      )}

      {/* Glow blobs */}
      {dark && (
        <>
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #60a5fa, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)' }}
          />
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 w-full ${centered ? 'text-center' : ''}`}>
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`flex items-center gap-2 text-xs mb-6 ${centered ? 'justify-center' : ''}`}
          >
            <Link to="/" className={`hover:text-white transition-colors ${dark ? 'text-white/50 hover:text-white' : 'text-neutral-400 hover:text-brand-600'}`}>
              Início
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} className={dark ? 'text-white/30' : 'text-neutral-300'} />
                {b.href ? (
                  <Link to={b.href} className={`hover:text-white transition-colors ${dark ? 'text-white/50 hover:text-white' : 'text-neutral-400 hover:text-brand-600'}`}>
                    {b.label}
                  </Link>
                ) : (
                  <span className={dark ? 'text-white/80' : 'text-neutral-700'}>{b.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className={`grid ${children ? 'lg:grid-cols-2 gap-12 items-center' : 'max-w-3xl' + (centered ? ' mx-auto' : '')}`}>
          {/* Text block */}
          <div>
            {/* Label */}
            {label && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`mb-4 ${centered ? 'flex justify-center' : 'inline-flex'}`}
              >
                <span className={dark ? 'section-label-white' : 'section-label'}>
                  {label}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`font-serif font-bold leading-[1.08] mb-5 tracking-[-0.03em] text-balance
                ${dark ? 'text-white' : 'text-neutral-900'}
                text-[clamp(2.25rem,4vw+0.5rem,3.5rem)]`}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`text-lg leading-relaxed mb-8 max-w-xl ${centered ? 'mx-auto' : ''}
                  ${dark ? 'text-blue-100/75' : 'text-neutral-600'}`}
              >
                {subtitle}
              </motion.p>
            )}

            {/* CTAs */}
            {(cta || ctaSecondary) && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}
              >
                {cta && (
                  cta.href?.startsWith('http') ? (
                    <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {cta.label}
                    </a>
                  ) : cta.onClick ? (
                    <button onClick={cta.onClick} className="btn-primary">{cta.label}</button>
                  ) : (
                    <Link to={cta.href} className="btn-primary">{cta.label}</Link>
                  )
                )}
                {ctaSecondary && (
                  ctaSecondary.href?.startsWith('http') ? (
                    <a href={ctaSecondary.href} target="_blank" rel="noopener noreferrer" className={dark ? 'btn-ghost' : 'btn-outline'}>
                      {ctaSecondary.label}
                    </a>
                  ) : (
                    <Link to={ctaSecondary.href} className={dark ? 'btn-ghost' : 'btn-outline'}>
                      {ctaSecondary.label}
                    </Link>
                  )
                )}
              </motion.div>
            )}
          </div>

          {/* Optional right slot */}
          {children && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-12">
          <path d="M0 24 C480 48 960 0 1440 24 L1440 48 L0 48 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
