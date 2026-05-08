import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Star, ChevronDown, Play } from 'lucide-react'
import { CLINIC_INFO } from '../data/content'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, floatAnimation, floatSlow } from '../animations/variants'

const FLOATING_CARDS = [
  {
    id: 'patients',
    icon: '👥',
    value: '12.000+',
    label: 'Pacientes Atendidos',
    delay: 0.2,
    position: 'top-[18%] left-[3%] lg:top-[22%] lg:left-[4%]',
  },
  {
    id: 'experience',
    icon: '🏆',
    value: '15 Anos',
    label: 'de Experiência',
    delay: 0.4,
    position: 'bottom-[28%] left-[2%] lg:bottom-[30%] lg:left-[5%]',
  },
  {
    id: 'rating',
    icon: '⭐',
    value: '4.98 / 5',
    label: 'Avaliação Média',
    delay: 0.6,
    position: 'top-[20%] right-[2%] lg:top-[25%] lg:right-[4%]',
  },
]

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`,
      '_blank'
    )
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1714929818437-889f2c93a94a?w=1920&h=1200&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, rgba(0,20,80,0.55) 0%, rgba(0,55,180,0.48) 45%, rgba(0,87,255,0.45) 65%, rgba(0,35,130,0.55) 100%)' }}
        />
      </div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,87,255,0.08) 0%, transparent 60%)' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-300/60 blur-sm" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-white/60" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-200/40 blur-md" />
      </div>

      {/* Floating cards — desktop only */}
      {FLOATING_CARDS.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: card.delay + 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute hidden xl:flex glass rounded-2xl px-4 py-3 items-center gap-3 z-10 ${card.position}`}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + parseFloat(card.id === 'patients' ? '0' : card.id === 'experience' ? '1' : '2'), repeat: Infinity, ease: 'easeInOut' }}
            className="text-2xl"
          >
            {card.icon}
          </motion.div>
          <div>
            <div className="text-white font-bold text-sm leading-none">{card.value}</div>
            <div className="text-blue-200 text-xs mt-0.5">{card.label}</div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex">
              <span className="section-label-white">
                <Shield size={12} className="text-blue-200" />
                Clínica Especializada em Coluna
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6"
            >
              Referência em{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Tratamentos</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300/0 via-blue-300 to-blue-300/0 origin-left"
                />
              </span>{' '}
              para Coluna e Dor
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-blue-100/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Tecnologia, precisão e cuidado especializado para sua qualidade de vida.
              Mais de 15 anos transformando vidas com medicina espinhal de alto nível.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl text-base shadow-2xl hover:shadow-white/20 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar pelo WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost text-base py-4"
              >
                Conheça a Clínica
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              {[
                { icon: <Award size={14} />, text: 'Certificação Internacional' },
                { icon: <Shield size={14} />, text: 'Ambiente Premium' },
                { icon: <Star size={14} />, text: '4.98 ★ de satisfação' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 text-blue-100/70 text-xs">
                  <span className="text-blue-300">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <motion.div
              variants={floatSlow}
              animate="animate"
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/5] max-h-[620px]"
            >
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=875&fit=crop&crop=center"
                alt="Médico especialista em coluna"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
              {/* Bottom overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600/80 flex items-center justify-center shrink-0">
                    <Award size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Dr. André Cavalcanti</div>
                    <div className="text-blue-200 text-xs">Especialista em Coluna – CRM-SP 123.456</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Accent card — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              variants={floatAnimation}
              className="absolute -top-6 -right-6 glass rounded-2xl p-4 w-44 shadow-xl"
            >
              <div className="text-3xl mb-1">🏅</div>
              <div className="text-white font-bold text-base">Johns Hopkins</div>
              <div className="text-blue-200 text-xs leading-tight">Fellowship em Cirurgia da Coluna</div>
            </motion.div>

            {/* Accent card — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-8 glass rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                {[0,1,2,3,4].map(i => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-white text-sm font-bold mt-1">12.000+ pacientes</div>
              <div className="text-blue-200 text-xs">transformados</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
      >
        <span>Rolar para baixo</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
