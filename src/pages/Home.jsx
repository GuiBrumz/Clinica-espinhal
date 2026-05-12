import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award, Zap, Heart, Activity, Search, Bone, Quote } from 'lucide-react'
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

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 18, color = '#25D366' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

// ─── Hero Full-Screen Foto ────────────────────────────────────────────────────
function HomeHero() {
  const heroRef = useRef(null)
  const copyRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        copyRef.current.querySelectorAll('[data-hero]'),
        { opacity: 0, y: 22, willChange: 'transform, opacity' },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, clearProps: 'will-change' }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1767972463825-96eaa9e0766b?q=85&w=1920&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Dark gradient — heavy at bottom, lighter at top */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.52) 30%, rgba(0,0,0,0.22) 60%, rgba(0,0,0,0.10) 100%)',
          }}
        />
      </div>

      {/* Content — bottom-left anchored */}
      <div ref={copyRef} className="relative z-10 mt-auto w-full px-6 pb-12 lg:px-14 lg:pb-16 max-w-3xl">

        {/* Heading */}
        <h1
          data-hero
          className="opacity-0 font-heading font-bold text-white leading-[1.05] tracking-[-0.03em] mb-5"
          style={{ fontSize: 'clamp(2.4rem, 4.5vw + 0.5rem, 4.5rem)' }}
        >
          Excelência em
          <br />
          Medicina{' '}
          <span className="relative inline-block">
            <span>Espinhal</span>
            <span className="hero-underline" />
          </span>
          <br />
          <span className="text-white/45 font-medium">&amp; Controle da Dor</span>
        </h1>

        {/* Subtitle */}
        <p
          data-hero
          className="opacity-0 text-white/75 font-semibold leading-relaxed mb-8 max-w-md"
          style={{ fontSize: 'clamp(0.9rem, 1vw + 0.3rem, 1.05rem)' }}
        >
          Tecnologia de ponta, diagnóstico preciso e cuidado personalizado
          para devolver sua qualidade de vida — referência em tratamentos
          não-cirúrgicos da coluna vertebral.
        </p>

        {/* CTAs — underlined text links */}
        <div data-hero className="opacity-0 flex flex-wrap items-center gap-7">
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-sm underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors duration-200"
          >
            Agendar pelo WhatsApp
          </a>
          <Link
            to="/sobre"
            className="text-white/55 font-medium text-sm underline underline-offset-4 decoration-white/20 hover:text-white/85 hover:decoration-white/55 transition-colors duration-200"
          >
            Conheça a Clínica
          </Link>
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2.5 text-white/30 select-none">
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase">Rolar</span>
        <div className="scroll-cue-arrow" aria-hidden="true" />
      </div>
    </section>
  )
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────
function TrustStrip() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section data-header-theme="light" className="py-16 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 rounded-2xl overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white hover:bg-neutral-50 transition-colors duration-300 p-8 text-center flex flex-col items-center gap-2"
            >
              <div className="flex items-end gap-1">
                <span
                  className="font-heading font-extrabold text-neutral-950 leading-none tracking-[-0.04em]"
                  style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}
                >
                  {inView
                    ? <CountUp start={0} end={stat.value} duration={2.0} separator="." delay={i * 0.1} />
                    : '0'}
                </span>
                <span className="font-bold text-brand-600 text-lg mb-0.5">{stat.suffix}</span>
              </div>
              <p className="text-neutral-400 text-xs font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Treatments Bento ────────────────────────────────────────────────────────
function TreatmentsPreview() {
  const sectionRef = useScrollReveal('[data-reveal]', { y: 20, stagger: 0.07, start: 'top 85%' })

  const cards = [
    { icon: <Zap size={18} className="text-brand-600" />,        title: 'Dor Lombar',        desc: 'Tratamento multidisciplinar para dor persistente.' },
    { icon: <Search size={18} className="text-brand-600" />,     title: 'Estenose do Canal', desc: 'Abordagem não-cirúrgica de alta resolução.' },
    { icon: <Activity size={18} className="text-brand-600" />,   title: 'Cervicalgia',       desc: 'Protocolo para dores cervicais irradiadas.' },
    { icon: <Shield size={18} className="text-brand-600" />,     title: 'Infiltrações',      desc: 'Procedimentos guiados por imagem de precisão.' },
  ]

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div data-reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label-blue mb-4 inline-flex">O que tratamos</span>
            <h2
              className="font-heading font-bold text-neutral-950 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}
            >
              Especialidades &{' '}
              <span className="text-gradient-blue">Tratamentos</span>
            </h2>
          </div>
          <Link
            to="/especialidades"
            className="inline-flex items-center gap-2 font-semibold text-sm text-brand-700 hover:text-brand-800 transition-all duration-200 shrink-0 hover:gap-3"
          >
            Ver todas <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">

          {/* Feature card */}
          <div
            data-reveal
            className="col-span-2 row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer border border-neutral-900"
            style={{ background: 'linear-gradient(145deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%)' }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'radial-gradient(ellipse at 25% 65%, rgba(147,197,253,0.10), transparent 55%)' }}
            />
            <div className="absolute top-7 left-7">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Bone size={20} className="text-white/90" />
              </div>
            </div>
            <div className="absolute bottom-7 left-7 right-7">
              <h3 className="font-heading font-bold text-white text-xl mb-2 tracking-[-0.02em]">Hérnia de Disco</h3>
              <p className="text-blue-100/65 text-sm leading-relaxed">Diagnóstico preciso e protocolo conservador para alívio duradouro.</p>
              <div className="mt-5 inline-flex items-center gap-2 text-blue-200/80 text-xs font-semibold group-hover:gap-3 transition-all duration-200">
                Saiba mais <ArrowRight size={13} />
              </div>
            </div>
          </div>

          {cards.map((card, i) => (
            <div
              key={i}
              data-reveal
              className="group relative rounded-3xl bg-white border border-neutral-100 p-6 flex flex-col justify-between hover:border-brand-100 hover:shadow-card-hover transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />
              <div className="relative w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 group-hover:bg-brand-600 group-hover:border-brand-600 flex items-center justify-center transition-all duration-300">
                <span className="group-hover:[&>*]:text-white transition-colors duration-300">{card.icon}</span>
              </div>
              <div className="relative">
                <h4 className="font-heading font-semibold text-neutral-900 text-sm mb-1 tracking-tight">{card.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

// ─── Por que a Espinhal ───────────────────────────────────────────────────────
function WhySection() {
  const leftRef  = useReveal({ x: -28, y: 0, duration: 0.85, start: 'top 85%' })
  const rightRef = useReveal({ x:  28, y: 0, duration: 0.85, delay: 0.12, start: 'top 85%' })

  const pillars = [
    { icon: <Zap size={15} />,      title: 'Tecnologia de Ponta',    desc: 'Equipamentos de última geração para diagnóstico e tratamento de precisão.' },
    { icon: <Search size={15} />,   title: 'Diagnóstico Preciso',    desc: 'Avaliação abrangente com protocolos internacionais de excelência.' },
    { icon: <Heart size={15} />,    title: 'Cuidado Humanizado',     desc: 'Cada paciente recebe atenção personalizada e acompanhamento contínuo.' },
    { icon: <Activity size={15} />, title: 'Resultados Comprovados', desc: '98% de satisfação com metodologia baseada em evidências científicas.' },
  ]

  return (
    <section data-header-theme="light" className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div ref={leftRef} className="relative opacity-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1000&fit=crop&crop=center"
                alt="Ambiente clínico premium"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass-light rounded-2xl p-4 border border-white/70">
                <p className="text-neutral-500 text-xs font-medium mb-0.5 uppercase tracking-widest">Ambiente</p>
                <p className="text-neutral-900 font-semibold text-sm">Clínica de padrão internacional</p>
              </div>
            </div>

            {/* Credential chip */}
            <div className="absolute -top-5 -right-5 bg-neutral-950 text-white rounded-2xl px-5 py-4 shadow-premium">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Award size={14} className="text-amber-400 shrink-0" />
                <div className="text-xs font-bold text-white leading-tight">Referência Nacional</div>
              </div>
              <div className="text-neutral-400 text-[10px] leading-tight">15+ anos de especialização</div>
            </div>
          </div>

          <div ref={rightRef} className="opacity-0">
            <span className="section-label-blue mb-6 inline-flex">Por que nos escolher</span>
            <h2
              className="font-heading font-bold text-neutral-950 tracking-[-0.03em] leading-[1.08] mb-6 text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}
            >
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
                  <div className="w-9 h-9 rounded-xl bg-brand-50 group-hover:bg-brand-700 border border-brand-100 group-hover:border-brand-700 flex items-center justify-center mb-3 transition-all duration-300">
                    <span className="text-brand-700 group-hover:text-white transition-colors duration-300">{p.icon}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-neutral-900 text-sm mb-1 tracking-tight">{p.title}</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/sobre"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-sm text-brand-700 hover:text-brand-800 transition-all duration-200 hover:gap-3"
            >
              Conhecer a história completa <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Depoimentos ─────────────────────────────────────────────────────────────
function TestimonialsPreview() {
  const headRef   = useReveal({ y: 20, duration: 0.65, start: 'top 88%' })
  const swiperRef = useReveal({ y: 24, duration: 0.7, delay: 0.1, start: 'top 88%' })

  return (
    <section data-header-theme="light" className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div ref={headRef} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 opacity-0">
          <div>
            <span className="section-label mb-4 inline-flex">Depoimentos</span>
            <h2
              className="font-heading font-bold text-neutral-950 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}
            >
              Pacientes que recuperaram{' '}
              <span className="text-gradient-blue">suas vidas</span>
            </h2>
          </div>
          <Link
            to="/depoimentos"
            className="inline-flex items-center gap-2 font-semibold text-sm text-brand-700 hover:text-brand-800 transition-all duration-200 hover:gap-3 shrink-0"
          >
            Ver todos <ArrowRight size={15} />
          </Link>
        </div>

        <div ref={swiperRef} className="opacity-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.home-test-pag' }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {TESTIMONIALS.slice(0, 4).map(t => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col border border-neutral-100 hover:border-brand-100 hover:shadow-card-hover transition-all duration-300">
                  <Quote size={20} className="text-brand-200 mb-4 shrink-0" />
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text.slice(0, 140)}&hellip;&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100"
                      loading="lazy"
                      decoding="async"
                      onError={e => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=dbeafe&color=1d4ed8&size=80`
                      }}
                    />
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                      <p className="text-neutral-400 text-xs">{t.role}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5">
                      {[0, 1, 2, 3, 4].map(i => (
                        <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                      ))}
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

// ─── Estrutura da Clínica ─────────────────────────────────────────────────────
function EnvironmentPreview() {
  const sectionRef = useScrollReveal('[data-reveal]', { y: 20, stagger: 0.08, start: 'top 85%' })

  return (
    <section ref={sectionRef} data-header-theme="light" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div data-reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">Nossa Estrutura</span>
            <h2
              className="font-heading font-bold text-neutral-950 tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}
            >
              Um ambiente pensado{' '}
              <span className="text-gradient-blue">para você</span>
            </h2>
          </div>
          <Link
            to="/estrutura"
            className="inline-flex items-center gap-2 font-semibold text-sm text-brand-700 hover:text-brand-800 transition-all duration-200 hover:gap-3 shrink-0"
          >
            Ver estrutura completa <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          <div
            data-reveal
            className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            <img
              src={GALLERY_IMAGES[0]?.src || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=700&fit=crop'}
              alt={GALLERY_IMAGES[0]?.alt || 'Clínica'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="absolute bottom-5 left-5 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {GALLERY_IMAGES[0]?.label || 'Espaço Principal'}
            </p>
          </div>
          {GALLERY_IMAGES.slice(1, 3).map(img => (
            <div
              key={img.id}
              data-reveal
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

// ─── Dr. André Cavalcanti ─────────────────────────────────────────────────────
function DoctorPreview() {
  const cardRef = useReveal({ y: 20, duration: 0.7, start: 'top 88%' })

  return (
    <section data-header-theme="light" className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-100 shadow-card flex flex-col lg:flex-row items-start gap-8 opacity-0"
        >
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-brand-50 shrink-0">
            <img
              src={DOCTOR.image}
              alt={DOCTOR.name}
              className="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-heading font-bold text-neutral-950 text-xl tracking-[-0.02em]">{DOCTOR.name}</h3>
                <p className="text-brand-700 text-sm font-medium mt-0.5">{DOCTOR.title}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{DOCTOR.crm}</p>
              </div>
              <Link
                to="/responsavel-tecnico"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 hover:text-brand-800 transition-all duration-200 hover:gap-3"
              >
                Ver perfil completo <ArrowRight size={12} />
              </Link>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-3">{DOCTOR.bio[0]}</p>
            <div className="flex flex-wrap gap-2">
              {DOCTOR.specialties.slice(0, 4).map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100"
                >
                  {s}
                </span>
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
