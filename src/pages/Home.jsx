import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award, Zap, Heart, Activity, Search } from 'lucide-react'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import 'swiper/css'
import 'swiper/css/pagination'
import PageTransition from '../components/PageTransition'
import BottomCTA from '../components/BottomCTA'
import SpineInteractive from '../sections/SpineInteractive'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useScrollReveal, useReveal } from '../hooks/useScrollReveal'
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants'
import { CLINIC_INFO, STATS, SPECIALTIES, TESTIMONIALS, GALLERY_IMAGES, DOCTOR, DIFFERENTIALS } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

// ─── Cinematic Hero ───────────────────────────────────────────────────────────
// Performance strategy:
//   • Background motion = CSS @keyframes only (no React/Framer overhead)
//   • Entrance = one GSAP timeline, plays once
//   • Zero repeat:Infinity Framer Motion animations
function HomeHero() {
  const heroRef  = useRef(null)
  const textRef  = useRef(null)
  const chipsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single entrance timeline — fires once, then clears will-change
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        textRef.current.querySelectorAll('[data-hero]'),
        { opacity: 0, y: 32, willChange: 'transform, opacity' },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, clearProps: 'willChange' }
      ).fromTo(
        chipsRef.current?.querySelectorAll('.stat-chip') ?? [],
        { opacity: 0, y: 16, willChange: 'transform, opacity' },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, clearProps: 'willChange' },
        '-=0.3'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      data-header-theme="dark"
      className="hero-section relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #00082e 0%, #001254 30%, #001f8a 60%, #002db5 100%)' }}
    >
      {/* ── CSS-animated ambient layer — zero JS on scroll ── */}
      <div className="hero-bg absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />

        {/* Luminous spine motif — purely CSS */}
        <div className="hero-spine" aria-hidden="true">
          <div className="spine-line" />
          {[22, 36, 50, 64, 78].map((y, i) => (
            <div key={i} className="spine-node" style={{ top: `${y}%`, animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
      </div>

      {/* ── Stat chips — desktop, CSS float ── */}
      <div ref={chipsRef} className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
        {[
          { label: '15+ Anos', sub: 'de especialização', left: '5%', top: '32%' },
          { label: '12.000+', sub: 'Pacientes tratados', left: '5%', top: '60%' },
          { label: '4.98 ★', sub: 'Satisfação média',  left: '82%', top: '30%' },
          { label: '98%',    sub: 'Aprovação clínica', left: '82%', top: '58%' },
        ].map((c, i) => (
          <div key={i} className="stat-chip glass rounded-2xl px-4 py-3 absolute opacity-0"
            style={{ left: c.left, top: c.top }}>
            <div className="text-white font-bold text-sm leading-none">{c.label}</div>
            <div className="text-blue-200/70 text-xs mt-1">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Main copy — GSAP entrance ── */}
      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-32 text-center">

        <div data-hero className="mb-8 inline-flex opacity-0">
          <span className="section-label-white">
            <Shield size={11} className="text-blue-300" />
            Clínica Especializada em Coluna Vertebral
          </span>
        </div>

        <h1 data-hero
          className="font-serif font-bold text-white tracking-[-0.04em] leading-[1.04] mb-8 text-balance opacity-0"
          style={{ fontSize: 'clamp(2.75rem, 6vw + 0.25rem, 5.25rem)' }}>
          Excelência em Medicina{' '}
          <span className="relative inline-block">
            <span className="text-gradient">Espinhal</span>
            <span className="hero-underline" />
          </span>
          {' '}& Controle da Dor
        </h1>

        <p data-hero
          className="text-blue-100/60 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto opacity-0">
          Tecnologia de ponta, diagnóstico preciso e cuidado personalizado para devolver
          sua qualidade de vida. Referência em tratamentos não-cirúrgicos da coluna.
        </p>

        <div data-hero className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
            target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-9 py-[1.125rem] bg-white text-brand-700 font-bold rounded-2xl shadow-2xl overflow-hidden text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-white/20">
            <span className="absolute inset-0 bg-gradient-to-r from-brand-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" className="relative shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative">Agendar Avaliação</span>
            <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <Link to="/sobre"
            className="btn-ghost inline-flex items-center justify-center text-base transition-all duration-300 hover:-translate-y-1"
            style={{ paddingTop: '1.125rem', paddingBottom: '1.125rem', paddingLeft: '2.25rem', paddingRight: '2.25rem' }}>
            Conheça a Clínica
          </Link>
        </div>

        <div data-hero className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-0">
          {[
            { icon: <Award size={13} />, text: 'Certificação Internacional' },
            { icon: <Shield size={13} />, text: 'Ambiente Clínico Premium' },
            { icon: <Star size={13} />, text: '4.98 ★ Satisfação' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-blue-100/45 text-xs">
              <span className="text-blue-300/70">{b.icon}</span>{b.text}
            </div>
          ))}
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs select-none">
        <span>Rolar</span>
        <div className="scroll-cue-arrow" aria-hidden="true" />
      </div>

      {/* Dissolve into white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0 50 C400 100 1040 0 1440 50 L1440 100 L0 100 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

// ─── Trust strip ──────────────────────────────────────────────────────────────
function TrustStrip() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 })
  return (
    <section data-header-theme="light" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 rounded-3xl overflow-hidden shadow-card">
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}
              className="bg-white hover:bg-neutral-50 transition-colors duration-300 p-8 text-center flex flex-col items-center gap-3">
              <div className="flex items-end gap-1">
                <span className="font-serif font-extrabold text-neutral-900 leading-none tracking-tightest"
                  style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)' }}>
                  {inView ? <CountUp start={0} end={stat.value} duration={2.2} separator="." delay={i * 0.12} /> : '0'}
                </span>
                <span className="font-bold text-brand-600 text-xl mb-1">{stat.suffix}</span>
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
  const sectionRef = useScrollReveal('[data-reveal]', { y: 20, stagger: 0.07, start: 'top 85%' })

  const cards = [
    { emoji: '⚡', title: 'Dor Lombar',         desc: 'Tratamento multidisciplinar para dor persistente.' },
    { emoji: '🔬', title: 'Estenose do Canal',  desc: 'Abordagem não-cirúrgica de alta resolução.' },
    { emoji: '🌿', title: 'Cervicalgia',        desc: 'Protocolo para dores cervicais irradiadas.' },
    { emoji: '💊', title: 'Infiltrações',       desc: 'Procedimentos guiados por imagem de precisão.' },
  ]

  return (
    <section ref={sectionRef} data-header-theme="light" className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(0,87,255,0.035) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div data-reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">O que tratamos</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}>
              Especialidades &{' '}
              <span className="text-gradient-blue">Tratamentos</span>
            </h2>
          </div>
          <Link to="/especialidades" className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-colors shrink-0 hover:gap-3 duration-200">
            Ver todas <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">

          {/* Feature card — col/row span */}
          <div data-reveal
            className="col-span-2 row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #0040cc 0%, #001f8a 100%)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'radial-gradient(ellipse at 30% 70%, rgba(99,179,255,0.12), transparent 60%)' }} />
            <div className="absolute top-7 left-7 text-4xl select-none">🦴</div>
            <div className="absolute bottom-7 left-7 right-7">
              <h3 className="font-serif font-bold text-white text-xl mb-2 tracking-tight">Hérnia de Disco</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">Diagnóstico preciso e protocolo conservador para alívio duradouro.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-blue-200 text-xs font-semibold group-hover:gap-3 transition-all duration-200">
                Saiba mais <ArrowRight size={13} />
              </div>
            </div>
          </div>

          {cards.map((card, i) => (
            <div key={i} data-reveal
              className="group relative rounded-3xl bg-white border border-neutral-100 p-6 flex flex-col justify-between hover:border-brand-200 hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="text-2xl relative select-none">{card.emoji}</span>
              <div className="relative">
                <h4 className="font-serif font-semibold text-neutral-900 text-sm mb-1 tracking-tight">{card.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

// ─── Why Espinhal ─────────────────────────────────────────────────────────────
function WhySection() {
  const leftRef  = useReveal({ x: -28, y: 0, duration: 0.8, start: 'top 85%' })
  const rightRef = useReveal({ x:  28, y: 0, duration: 0.8, delay: 0.12, start: 'top 85%' })

  const pillars = [
    { icon: <Zap size={15} />,      title: 'Tecnologia de Ponta',   desc: 'Equipamentos de última geração para diagnóstico e tratamento de precisão.' },
    { icon: <Search size={15} />,   title: 'Diagnóstico Preciso',   desc: 'Avaliação abrangente com protocolos internacionais de excelência.' },
    { icon: <Heart size={15} />,    title: 'Cuidado Humanizado',    desc: 'Cada paciente recebe atenção personalizada e acompanhamento contínuo.' },
    { icon: <Activity size={15} />, title: 'Resultados Comprovados',desc: '98% de satisfação com metodologia baseada em evidências científicas.' },
  ]

  return (
    <section data-header-theme="light" className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div ref={leftRef} className="relative opacity-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1000&fit=crop&crop=center"
                alt="Ambiente clínico premium" className="w-full h-full object-cover"
                loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-light rounded-2xl p-4">
                <p className="text-neutral-500 text-xs font-medium mb-0.5 uppercase tracking-wider">Ambiente</p>
                <p className="text-neutral-900 font-semibold text-sm">Clínica de padrão internacional</p>
              </div>
            </div>
            {/* Accent chip */}
            <div className="absolute -top-6 -right-6 glass-dark rounded-3xl p-5 shadow-xl border border-white/10">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-white font-bold text-sm">Top Clinic</div>
              <div className="text-blue-300 text-xs mt-0.5">Referência Nacional</div>
            </div>
          </div>

          <div ref={rightRef} className="opacity-0">
            <span className="section-label mb-6 inline-flex">Por que nos escolher</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] mb-6 text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}>
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
                <div key={i} className="group">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 group-hover:bg-brand-600 border border-brand-100 group-hover:border-brand-600 flex items-center justify-center mb-3 transition-all duration-300">
                    <span className="text-brand-600 group-hover:text-white transition-colors duration-300">{p.icon}</span>
                  </div>
                  <h4 className="font-serif font-semibold text-neutral-900 text-sm mb-1 tracking-tight">{p.title}</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/sobre"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-all duration-200 hover:gap-3">
              Conhecer a história completa <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsPreview() {
  const headRef    = useReveal({ y: 20, duration: 0.65, start: 'top 88%' })
  const swiperRef  = useReveal({ y: 24, duration: 0.7, delay: 0.1, start: 'top 88%' })

  return (
    <section data-header-theme="light" className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div ref={headRef} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 opacity-0">
          <div>
            <span className="section-label mb-4 inline-flex">Depoimentos</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}>
              Pacientes que recuperaram{' '}
              <span className="text-gradient-blue">suas vidas</span>
            </h2>
          </div>
          <Link to="/depoimentos" className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-all duration-200 hover:gap-3 shrink-0">
            Ver todos <ArrowRight size={15} />
          </Link>
        </div>

        <div ref={swiperRef} className="opacity-0">
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
                    {[0, 1, 2, 3, 4].map(i => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-6">
                    "{t.text.slice(0, 140)}…"
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                    <img src={t.image} alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100"
                      loading="lazy" decoding="async"
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
        </div>

      </div>
    </section>
  )
}

// ─── Clinic environment ───────────────────────────────────────────────────────
function EnvironmentPreview() {
  const sectionRef = useScrollReveal('[data-reveal]', { y: 20, stagger: 0.08, start: 'top 85%' })

  return (
    <section ref={sectionRef} data-header-theme="light" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div data-reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">Nossa Estrutura</span>
            <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}>
              Um ambiente pensado{' '}
              <span className="text-gradient-blue">para você</span>
            </h2>
          </div>
          <Link to="/estrutura" className="inline-flex items-center gap-2 font-semibold text-sm text-brand-600 hover:text-brand-700 transition-all duration-200 hover:gap-3 shrink-0">
            Ver estrutura completa <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          <div data-reveal
            className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
            <img
              src={GALLERY_IMAGES[0]?.src || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=700&fit=crop'}
              alt={GALLERY_IMAGES[0]?.alt || 'Clínica'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-5 left-5 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {GALLERY_IMAGES[0]?.label || 'Espaço Principal'}
            </p>
          </div>
          {GALLERY_IMAGES.slice(1, 3).map(img => (
            <div key={img.id} data-reveal
              className="group relative rounded-3xl overflow-hidden cursor-pointer">
              <img src={img.src} alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Doctor — minimal institutional card ─────────────────────────────────────
function DoctorPreview() {
  const cardRef = useReveal({ y: 20, duration: 0.7, start: 'top 88%' })

  return (
    <section data-header-theme="light" className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div ref={cardRef}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-100 shadow-card flex flex-col lg:flex-row items-start gap-8 opacity-0">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-brand-50 shrink-0">
            <img src={DOCTOR.image} alt={DOCTOR.name}
              className="w-full h-full object-cover object-top"
              loading="lazy" decoding="async" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-serif font-bold text-neutral-900 text-xl tracking-tight">{DOCTOR.name}</h3>
                <p className="text-brand-600 text-sm font-medium mt-0.5">{DOCTOR.title}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{DOCTOR.crm}</p>
              </div>
              <Link to="/responsavel-tecnico"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-all duration-200 hover:gap-3">
                Ver perfil completo <ArrowRight size={12} />
              </Link>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-3">{DOCTOR.bio[0]}</p>
            <div className="flex flex-wrap gap-2">
              {DOCTOR.specialties.slice(0, 4).map((s, i) => (
                <span key={i} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100">{s}</span>
              ))}
            </div>
          </div>
        </div>
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
      <SpineInteractive />
      <TreatmentsPreview />
      <WhySection />
      <TestimonialsPreview />
      <EnvironmentPreview />
      <DoctorPreview />
      <BottomCTA />
    </PageTransition>
  )
}
