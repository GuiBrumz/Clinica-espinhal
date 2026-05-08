import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award, ChevronDown, Zap, Heart, Microscope, Activity } from 'lucide-react'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import PageTransition from '../components/PageTransition'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, scaleIn, fadeLeft, fadeRight } from '../animations/variants'
import { CLINIC_INFO, STATS, SPECIALTIES, TESTIMONIALS, GALLERY_IMAGES, DOCTOR, DIFFERENTIALS } from '../data/content'

// ─── Cinematic Hero ───────────────────────────────────────────────────────────
function HomeHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #00082e 0%, #001254 30%, #001f8a 60%, #0031c4 100%)' }}
    >
      {/* Deep ambient layers */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yBg }}>
        {/* Large central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,87,255,0.18) 0%, rgba(0,49,196,0.08) 40%, transparent 70%)' }} />
        {/* Top-right aurora */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(99,179,255,0.12) 0%, transparent 65%)' }} />
        {/* Bottom-left sweep */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], x: [0, -30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-40 -left-20 w-[800px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(56,132,255,0.1) 0%, transparent 60%)' }} />

        {/* Fine grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
            backgroundSize: '80px 80px'
          }} />

        {/* Floating orbs */}
        {[
          { cx: '15%', cy: '25%', size: 3, delay: 0 },
          { cx: '80%', cy: '20%', size: 2, delay: 1.5 },
          { cx: '70%', cy: '65%', size: 4, delay: 0.8 },
          { cx: '25%', cy: '70%', size: 2, delay: 2.2 },
          { cx: '90%', cy: '45%', size: 3, delay: 0.4 },
          { cx: '50%', cy: '15%', size: 2, delay: 3.1 },
          { cx: '8%',  cy: '50%', size: 5, delay: 1.8 },
        ].map((orb, i) => (
          <motion.div key={i}
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
            className="absolute rounded-full bg-blue-300"
            style={{
              left: orb.cx, top: orb.cy,
              width: orb.size * 2, height: orb.size * 2,
              filter: `blur(${orb.size - 1}px)`
            }} />
        ))}

        {/* Abstract spine visual — vertical luminous line */}
        <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(99,179,255,0.15) 20%, rgba(99,179,255,0.4) 50%, rgba(99,179,255,0.15) 80%, transparent 100%)' }} />
        {[20, 35, 50, 65, 80].map((y, i) => (
          <motion.div key={i}
            animate={{ scaleX: [0.6, 1.3, 0.6], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 h-px rounded-full"
            style={{
              top: `${y}%`,
              width: `${60 + i * 12}px`,
              background: 'linear-gradient(90deg, transparent, rgba(99,179,255,0.6), transparent)'
            }} />
        ))}
      </motion.div>

      {/* Floating stat chips */}
      <motion.div style={{ opacity }}
        className="absolute inset-0 pointer-events-none hidden xl:block">
        {[
          { label: '15+ Anos', sub: 'de especialização', x: '5%', y: '32%', delay: 1.4 },
          { label: '12.000+', sub: 'Pacientes tratados', x: '5%', y: '58%', delay: 1.8 },
          { label: '4.98★', sub: 'Satisfação média', x: '82%', y: '28%', delay: 1.6 },
          { label: '98%', sub: 'Aprovação clínica', x: '82%', y: '58%', delay: 2.0 },
        ].map((chip, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: chip.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute glass rounded-2xl px-4 py-3"
            style={{ left: chip.x, top: chip.y }}>
            <div className="text-white font-bold text-sm leading-none">{chip.label}</div>
            <div className="text-blue-200/70 text-xs mt-1">{chip.sub}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-32 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">

          <motion.div variants={fadeUp} className="mb-8 inline-flex">
            <span className="section-label-white">
              <Shield size={11} className="text-blue-300" />
              Clínica Especializada em Coluna Vertebral
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="font-serif font-bold text-white leading-[1.04] tracking-[-0.04em] mb-8 text-balance"
            style={{ fontSize: 'clamp(3rem, 6vw + 0.5rem, 5.5rem)' }}>
            Excelência em Medicina{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Espinhal</span>
              <motion.span
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-400/0 via-blue-300 to-blue-400/0 origin-left" />
            </span>
            {' '}& Controle da Dor
          </motion.h1>

          <motion.p variants={fadeUp}
            className="text-blue-100/65 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Tecnologia de ponta, diagnóstico preciso e cuidado personalizado para devolver
            sua qualidade de vida. Referência em tratamentos não-cirúrgicos da coluna.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}
              className="group relative flex items-center justify-center gap-3 px-9 py-4.5 bg-white text-brand-700 font-bold rounded-2xl shadow-2xl overflow-hidden text-base"
              style={{ paddingTop: '1.125rem', paddingBottom: '1.125rem' }}>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" className="relative">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative">Agendar Avaliação</span>
              <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <Link to="/sobre">
              <motion.span
                whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}
                className="btn-ghost inline-flex"
                style={{ paddingTop: '1.125rem', paddingBottom: '1.125rem', paddingLeft: '2.25rem', paddingRight: '2.25rem' }}>
                Conheça a Clínica
              </motion.span>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: <Award size={13} />, text: 'Certificação Internacional' },
              { icon: <Shield size={13} />, text: 'Ambiente Clínico Premium' },
              { icon: <Star size={13} />, text: '4.98 ★ Satisfação' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-100/50 text-xs">
                <span className="text-blue-300/80">{b.icon}</span>{b.text}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs">
        <span>Rolar</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom dissolve */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0 50 C400 100 1040 0 1440 50 L1440 100 L0 100 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

// ─── Premium trust strip ──────────────────────────────────────────────────────
function TrustStrip() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 })
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 rounded-3xl overflow-hidden shadow-card">
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}
              className="group bg-white hover:bg-neutral-50 transition-colors duration-300 p-8 text-center flex flex-col items-center gap-3">
              <div className="flex items-end gap-1">
                <span className="font-serif font-extrabold text-neutral-900 leading-none tracking-tightest"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="." delay={i * 0.15} /> : '0'}
                </span>
                <span className="font-bold text-brand-600 text-2xl mb-1">{stat.suffix}</span>
              </div>
              <p className="text-neutral-400 text-sm font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Treatments bento ────────────────────────────────────────────────────────
function TreatmentsPreview() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const items = [
    { emoji: '🦴', title: 'Hérnia de Disco', desc: 'Diagnóstico preciso e protocolo conservador para alívio duradouro.', large: true },
    { emoji: '⚡', title: 'Dor Lombar Crônica', desc: 'Tratamento multidisciplinar para dor persistente na região lombar.' },
    { emoji: '🔬', title: 'Estenose do Canal', desc: 'Abordagem não-cirúrgica com alta taxa de resolução.' },
    { emoji: '🌿', title: 'Cervicalgia', desc: 'Protocolo especializado para dores cervicais e irradiação para membros.' },
    { emoji: '💊', title: 'Infiltrações Guiadas', desc: 'Procedimentos de precisão guiados por imagem.', wide: true },
  ]

  return (
    <section className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(0,87,255,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">O que tratamos</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}>
              Especialidades &{' '}
              <span className="text-gradient-blue">Tratamentos</span>
            </h2>
          </div>
          <Link to="/especialidades">
            <motion.span whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-colors shrink-0">
              Ver todas <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Bento grid */}
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">

          {/* Large card */}
          <motion.div variants={scaleIn}
            className="col-span-2 row-span-2 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 p-8 flex flex-col justify-end cursor-pointer hover:shadow-glow-lg transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(99,179,255,0.15), transparent 60%)' }} />
            <div className="absolute top-7 left-7 text-4xl select-none">🦴</div>
            <div className="relative">
              <h3 className="font-serif font-bold text-white text-xl mb-2 tracking-tight">Hérnia de Disco</h3>
              <p className="text-blue-100/75 text-sm leading-relaxed">Diagnóstico preciso e protocolo conservador para alívio duradouro e recuperação completa.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-blue-200 text-xs font-semibold group-hover:gap-3 transition-all">
                Saiba mais <ArrowRight size={13} />
              </div>
            </div>
          </motion.div>

          {/* Regular cards */}
          {[
            { emoji: '⚡', title: 'Dor Lombar', desc: 'Tratamento multidisciplinar para dor persistente.' },
            { emoji: '🔬', title: 'Estenose do Canal', desc: 'Abordagem não-cirúrgica de alta resolução.' },
            { emoji: '🌿', title: 'Cervicalgia', desc: 'Protocolo para dores cervicais irradiadas.' },
            { emoji: '💊', title: 'Infiltrações', desc: 'Procedimentos guiados por imagem de precisão.' },
          ].map((card, i) => (
            <motion.div key={i} variants={scaleIn}
              className="group relative rounded-3xl bg-white border border-neutral-100 p-6 flex flex-col justify-between hover:border-brand-200 hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="text-2xl relative">{card.emoji}</span>
              <div className="relative">
                <h4 className="font-serif font-semibold text-neutral-900 text-sm mb-1 tracking-tight">{card.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}

// ─── Why Espinhal — editorial split ──────────────────────────────────────────
function WhySection() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const pillars = [
    { icon: <Zap size={16} />, title: 'Tecnologia de Ponta', desc: 'Equipamentos de última geração para diagnóstico e tratamento de precisão.' },
    { icon: <Microscope size={16} />, title: 'Diagnóstico Preciso', desc: 'Avaliação abrangente com protocolos internacionais de excelência.' },
    { icon: <Heart size={16} />, title: 'Cuidado Humanizado', desc: 'Cada paciente recebe atenção personalizada e acompanhamento contínuo.' },
    { icon: <Activity size={16} />, title: 'Resultados Comprovados', desc: '98% de satisfação com metodologia baseada em evidências científicas.' },
  ]

  return (
    <section className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — visual composition */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1000&fit=crop&crop=center"
                alt="Ambiente clínico premium"
                className="w-full h-full object-cover"
                loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              {/* Bottom glass label */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <p className="text-white/80 text-xs font-medium mb-1 uppercase tracking-wider">Ambiente</p>
                <p className="text-white font-semibold text-sm">Clínica de padrão internacional</p>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 glass-dark rounded-3xl p-5 shadow-xl border border-white/10">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-white font-bold text-sm">Top Clinic</div>
              <div className="text-blue-300 text-xs">Referência Nacional</div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label mb-6 inline-flex">Por que nos escolher</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] mb-6 text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}>
              Uma abordagem{' '}
              <span className="text-gradient-blue">diferente</span>{' '}
              para a medicina da coluna
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-10">
              Combinamos tecnologia de ponta com cuidado humanizado para oferecer
              a experiência clínica mais completa do setor.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 group-hover:bg-brand-600 border border-brand-100 group-hover:border-brand-600 flex items-center justify-center mb-3 transition-all duration-300">
                    <span className="text-brand-600 group-hover:text-white transition-colors duration-300">{p.icon}</span>
                  </div>
                  <h4 className="font-serif font-semibold text-neutral-900 text-sm mb-1 tracking-tight">{p.title}</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/sobre" className="mt-10 inline-block">
              <motion.span whileHover={{ x: 3 }}
                className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-colors">
                Conhecer a história completa <ArrowRight size={14} />
              </motion.span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsPreview() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  return (
    <section className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">Depoimentos</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}>
              Pacientes que recuperaram{' '}
              <span className="text-gradient-blue">suas vidas</span>
            </h2>
          </div>
          <Link to="/depoimentos">
            <motion.span whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-colors shrink-0">
              Ver todos <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24} slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.home-test-pag' }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12">
            {TESTIMONIALS.slice(0, 4).map(t => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col border border-neutral-100 hover:border-brand-100 hover:shadow-card transition-all duration-300">
                  <div className="flex items-center gap-0.5 mb-5">
                    {[0, 1, 2, 3, 4].map(i => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-6">
                    "{t.text.slice(0, 140)}…"
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                    <img src={t.image} alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100"
                      onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0057FF&color=fff&size=80` }} />
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                      <p className="text-neutral-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="home-test-pag flex justify-center gap-2 mt-2" />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Clinic environment ───────────────────────────────────────────────────────
function EnvironmentPreview() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">Nossa Estrutura</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}>
              Um ambiente pensado{' '}
              <span className="text-gradient-blue">para você</span>
            </h2>
          </div>
          <Link to="/estrutura">
            <motion.span whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-colors shrink-0">
              Ver estrutura completa <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Asymmetric image grid */}
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          <motion.div variants={scaleIn}
            className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
            <img src={GALLERY_IMAGES[0]?.src || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=700&fit=crop'}
              alt={GALLERY_IMAGES[0]?.alt || 'Clínica'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-5 left-5 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {GALLERY_IMAGES[0]?.label || 'Espaço Principal'}
            </p>
          </motion.div>
          {GALLERY_IMAGES.slice(1, 3).map((img, i) => (
            <motion.div key={img.id} variants={scaleIn}
              className="group relative rounded-3xl overflow-hidden cursor-pointer">
              <img src={img.src} alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Doctor — minimal institutional preview ───────────────────────────────────
function DoctorPreview() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-100 shadow-card flex flex-col lg:flex-row items-start gap-8">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-brand-50 shrink-0">
            <img src={DOCTOR.image} alt={DOCTOR.name} className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-serif font-bold text-neutral-900 text-xl tracking-tight">{DOCTOR.name}</h3>
                <p className="text-brand-600 text-sm font-medium mt-0.5">{DOCTOR.title}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{DOCTOR.crm}</p>
              </div>
              <Link to="/responsavel-tecnico">
                <motion.span whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                  Ver perfil completo <ArrowRight size={12} />
                </motion.span>
              </Link>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-3">{DOCTOR.bio[0]}</p>
            <div className="flex flex-wrap gap-2">
              {DOCTOR.specialties.slice(0, 4).map((s, i) => (
                <span key={i} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <PageTransition>
      <HomeHero />
      <TrustStrip />
      <TreatmentsPreview />
      <WhySection />
      <TestimonialsPreview />
      <EnvironmentPreview />
      <DoctorPreview />
      <BottomCTA />
    </PageTransition>
  )
}
