import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award, ChevronDown } from 'lucide-react'
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

// ─── Hero ────────────────────────────────────────────────────────────────────
function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #001a5c 0%, #0040cc 40%, #0057FF 70%, #002fa0 100%)' }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ scale:[1,1.15,1], x:[0,30,0] }} transition={{ duration:15,repeat:Infinity,ease:'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(96,165,250,0.15) 0%,transparent 70%)' }} />
        <motion.div animate={{ scale:[1,1.2,1], x:[0,-25,0], y:[0,30,0] }} transition={{ duration:18,repeat:Infinity,ease:'easeInOut',delay:3 }}
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-5 inline-flex">
              <span className="section-label-white"><Shield size={11} />Clínica Especializada em Coluna</span>
            </motion.div>
            <motion.h1 variants={fadeUp}
              className="font-serif font-bold text-white leading-[1.06] tracking-[-0.035em] mb-6 text-balance"
              style={{ fontSize:'clamp(2.75rem,5.5vw+0.5rem,4.5rem)' }}
            >
              Referência em{' '}
              <span className="relative">
                <span className="text-gradient">Tratamentos</span>
                <motion.span initial={{ scaleX:0 }} animate={{ scaleX:1 }}
                  transition={{ delay:1.2, duration:0.8, ease:[0.22,1,0.36,1] }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300/0 via-blue-300 to-blue-300/0 origin-left" />
              </span>{' '}
              para Coluna e Dor
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-100/75 text-lg leading-relaxed mb-10 max-w-xl">
              Tecnologia, precisão e cuidado especializado para sua qualidade de vida.
              Mais de 15 anos transformando vidas com medicina espinhal de alto nível.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação na Espinhal D.O.R.`}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl shadow-2xl overflow-hidden relative"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar pelo WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <Link to="/sobre">
                <motion.span whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }} className="btn-ghost py-4 px-8 flex">
                  Conheça a Clínica
                </motion.span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              {[{ icon:<Award size={13}/>, text:'Certificação Internacional' },{ icon:<Shield size={13}/>, text:'Ambiente Premium' },{ icon:<Star size={13}/>, text:'4.98 ★ de satisfação' }].map((b,i)=>(
                <div key={i} className="flex items-center gap-1.5 text-blue-100/60 text-xs">
                  <span className="text-blue-300">{b.icon}</span>{b.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity:0, x:60 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.5, duration:0.9, ease:[0.22,1,0.36,1] }} className="relative hidden lg:block">
            <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut' }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/5] max-h-[600px]"
            >
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=875&fit=crop&crop=center" alt="Especialista em coluna" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.4 }}
                className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600/80 flex items-center justify-center shrink-0">
                    <Award size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{DOCTOR.name}</div>
                    <div className="text-blue-200 text-xs">{DOCTOR.title} · {DOCTOR.crm}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay:1.0, type:'spring' }}
              className="absolute -top-5 -right-5 glass rounded-2xl p-4 w-44 shadow-xl">
              <div className="text-2xl mb-1">🏅</div>
              <div className="text-white font-bold text-sm">Johns Hopkins</div>
              <div className="text-blue-200 text-xs leading-tight">Fellowship em Cirurgia da Coluna</div>
            </motion.div>
            <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay:1.3, type:'spring' }}
              className="absolute -bottom-3 -left-6 glass rounded-2xl p-3 shadow-xl">
              <div className="flex items-center gap-1 mb-1">{[0,1,2,3,4].map(i=><Star key={i} size={11} className="text-yellow-400 fill-yellow-400"/>)}</div>
              <div className="text-white text-sm font-bold">12.000+ pacientes</div>
              <div className="text-blue-200 text-xs">transformados</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 text-xs">
        <span>Explorar</span>
        <motion.div animate={{ y:[0,6,0] }} transition={{ duration:1.5, repeat:Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

// ─── Trust strip ─────────────────────────────────────────────────────────────
function TrustStrip() {
  const { ref, inView } = useScrollAnimation({ threshold:0.3 })
  const icons = { award:'🏆', users:'👥', stethoscope:'🩺', heart:'⭐' }
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat,i)=>(
            <motion.div key={i} variants={scaleIn}
              className="group bg-gradient-to-br from-white to-brand-50 border border-brand-100 rounded-2xl p-6 text-center card-hover">
              <div className="text-2xl mb-3">{icons[stat.icon]}</div>
              <div className="flex items-end justify-center gap-0.5">
                <span className="font-serif font-extrabold text-4xl text-neutral-900 leading-none tracking-[-0.04em]">
                  {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="." delay={i*0.15}/> : '0'}
                </span>
                <span className="font-bold text-xl text-brand-600 mb-1">{stat.suffix}</span>
              </div>
              <p className="text-neutral-500 text-sm mt-1.5 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Preview section wrapper ─────────────────────────────────────────────────
function PreviewSection({ id, label, title, subtitle, to, linkLabel='Saiba mais', dark=false, children }) {
  const { ref, inView } = useScrollAnimation({ threshold:0.1 })
  return (
    <section id={id} className={`py-20 lg:py-28 ${dark?'':'bg-white'} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:28 }} animate={inView?{ opacity:1, y:0 }:{}}
          transition={{ duration:0.65 }} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-12">
          <div>
            <span className={dark?'section-label-white':'section-label'}>{label}</span>
            <h2 className={`font-serif font-bold mt-3 mb-3 tracking-[-0.025em] leading-tight text-balance
              ${dark?'text-white':'text-neutral-900'}`}
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              {title}
            </h2>
            {subtitle && <p className={`max-w-lg text-base leading-relaxed ${dark?'text-blue-100/70':'text-neutral-500'}`}>{subtitle}</p>}
          </div>
          <Link to={to}>
            <motion.span whileHover={{ scale:1.04, x:3 }} className={`inline-flex items-center gap-2 font-semibold text-sm whitespace-nowrap shrink-0 ${dark?'text-blue-200 hover:text-white':'text-brand-600 hover:text-brand-700'} transition-colors`}>
              {linkLabel} <ArrowRight size={15}/>
            </motion.span>
          </Link>
        </motion.div>
        {children}
      </div>
    </section>
  )
}

// ─── About preview ────────────────────────────────────────────────────────────
function AboutPreview() {
  const { ref: lRef, inView: lIn } = useScrollAnimation()
  const { ref: rRef, inView: rIn } = useScrollAnimation()
  return (
    <PreviewSection label="Sobre a Clínica" title="Uma filosofia de cuidado que transforma vidas"
      subtitle="Nascemos da convicção de que tratar a coluna exige muito mais do que técnica — exige escuta, precisão e humanidade."
      to="/sobre" dark>
      <div className="grid lg:grid-cols-2 gap-14 items-center"
        style={{ background:'linear-gradient(150deg,#001040 0%,#0040cc 50%,#0057FF 100%)', margin:'0 -2rem', padding:'0 2rem 0', borderRadius:'1.5rem' }}>
        <div className="py-10">
          <motion.div ref={lRef} initial={{ opacity:0, x:-40 }} animate={lIn?{ opacity:1, x:0 }:{}} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[{ n:'2009', t:'Fundação da clínica' },{ n:'15+', t:'Anos de especialização' },{ n:'12k+', t:'Pacientes tratados' },{ n:'98%', t:'Satisfação' }].map((item,i)=>(
                <div key={i} className="glass rounded-2xl p-4">
                  <div className="font-serif font-extrabold text-white text-2xl tracking-[-0.04em]">{item.n}</div>
                  <div className="text-blue-200 text-xs mt-1">{item.t}</div>
                </div>
              ))}
            </div>
            <Link to="/sobre" className="btn-primary inline-flex">Conhecer a Clínica <ArrowRight size={15}/></Link>
          </motion.div>
        </div>
        <motion.div ref={rRef} initial={{ opacity:0, x:40 }} animate={rIn?{ opacity:1, x:0 }:{}} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
          className="relative py-10 hidden lg:block">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" alt="Clínica" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"/>
          </div>
        </motion.div>
      </div>
    </PreviewSection>
  )
}

// ─── Specialties preview ──────────────────────────────────────────────────────
function SpecialtiesPreview() {
  const { ref, inView } = useScrollAnimation({ threshold:0.1 })
  const preview = SPECIALTIES.slice(0,4)
  return (
    <PreviewSection label="O que tratamos" title={<>Especialidades & <span className="text-gradient-blue">Tratamentos</span></>}
      subtitle="Abordagem completa para todas as condições da coluna vertebral." to="/especialidades">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {preview.map((spec,i)=>(
          <motion.div key={spec.id} variants={scaleIn}
            className="group bg-white border border-neutral-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-600 transition-colors duration-300 flex items-center justify-center mb-4">
              <span className="text-2xl">{['🦴','⚡','🌬️','💊'][i]}</span>
            </div>
            <h3 className="font-serif font-semibold text-neutral-900 text-base mb-2">{spec.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{spec.shortDesc}</p>
          </motion.div>
        ))}
      </motion.div>
    </PreviewSection>
  )
}

// ─── Doctor preview ───────────────────────────────────────────────────────────
function DoctorPreview() {
  const { ref, inView } = useScrollAnimation()
  return (
    <PreviewSection label="Responsável Técnico" title="O especialista por trás de cada resultado" to="/responsavel-tecnico" linkLabel="Ver perfil completo">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div ref={ref} initial={{ opacity:0, x:-40 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}>
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 ring-4 ring-brand-100">
              <img src={DOCTOR.image} alt={DOCTOR.name} className="w-full h-full object-cover object-top"/>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-neutral-900">{DOCTOR.name}</h3>
              <p className="text-brand-600 font-medium text-sm">{DOCTOR.title}</p>
              <p className="text-neutral-400 text-xs mt-0.5">{DOCTOR.crm}</p>
            </div>
          </div>
          <p className="mt-5 text-neutral-600 leading-relaxed">{DOCTOR.bio[0]}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {DOCTOR.specialties.slice(0,3).map((s,i)=>(
              <span key={i} className="px-3 py-1.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100">{s}</span>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity:0, x:40 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ delay:0.2, duration:0.7, ease:[0.22,1,0.36,1] }}
          className="relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] max-h-[480px]">
            <img src={DOCTOR.image} alt={DOCTOR.name} className="w-full h-full object-cover object-top"/>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent"/>
          </div>
          <div className="absolute bottom-5 left-5 right-5 glass-dark rounded-xl p-4">
            <p className="text-white/60 text-xs italic font-serif">{DOCTOR.philosophy}</p>
          </div>
        </motion.div>
      </div>
    </PreviewSection>
  )
}

// ─── Testimonials preview ─────────────────────────────────────────────────────
function TestimonialsPreview() {
  const { ref, inView } = useScrollAnimation({ threshold:0.1 })
  return (
    <PreviewSection label="Depoimentos" title={<>Pacientes que <span className="text-gradient-blue">recuperaram</span> suas vidas</>}
      to="/depoimentos" linkLabel="Ver todos os depoimentos">
      <motion.div ref={ref} initial={{ opacity:0, y:30 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.7 }}>
        <Swiper modules={[Autoplay, Pagination]} spaceBetween={20} slidesPerView={1}
          autoplay={{ delay:4500, disableOnInteraction:false, pauseOnMouseEnter:true }}
          pagination={{ clickable:true, el:'.home-test-pag' }}
          breakpoints={{ 640:{ slidesPerView:2 }, 1024:{ slidesPerView:3 } }}
          className="!pb-10">
          {TESTIMONIALS.slice(0,4).map(t=>(
            <SwiperSlide key={t.id}>
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-card h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[0,1,2,3,4].map(i=><Star key={i} size={13} className="text-yellow-400 fill-yellow-400"/>)}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1 italic mb-5">"{t.text.slice(0,120)}…"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-brand-100"
                    onError={e=>{ e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0057FF&color=fff&size=80` }}/>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                    <p className="text-neutral-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="home-test-pag flex justify-center gap-1.5" />
      </motion.div>
    </PreviewSection>
  )
}

// ─── Gallery preview ──────────────────────────────────────────────────────────
function GalleryPreview() {
  const { ref, inView } = useScrollAnimation({ threshold:0.1 })
  return (
    <PreviewSection label="Nossa Estrutura" title={<>Conheça nossa <span className="text-gradient-blue">estrutura</span></>}
      to="/estrutura" linkLabel="Ver estrutura completa">
      <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_IMAGES.slice(0,3).map((img,i)=>(
          <motion.div key={img.id} variants={scaleIn}
            className={`relative group overflow-hidden rounded-2xl shadow-card ${i===0?'row-span-2 aspect-[3/4] md:aspect-auto':''} aspect-[4/3]`}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <p className="absolute bottom-3 left-3 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </PreviewSection>
  )
}

// ─── Differentials preview ────────────────────────────────────────────────────
function DifferentialsPreview() {
  const { ref, inView } = useScrollAnimation({ threshold:0.1 })
  const icons = { 'heart-handshake':'❤️', 'cpu':'⚙️', 'graduation-cap':'🎓', 'scan':'🔬', 'building':'🏛️', 'layers':'🔗' }
  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background:'linear-gradient(150deg,#001040 0%,#0040cc 50%,#0057FF 100%)' }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'60px 60px' }}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} initial={{ opacity:0, y:28 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-12">
          <span className="section-label-white">Por que nos escolher</span>
          <h2 className="font-serif font-bold text-white mt-4 mb-4 tracking-[-0.025em]"
            style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
            O que nos torna <span className="text-gradient">diferentes</span>
          </h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIALS.map((d,i)=>(
            <motion.div key={i} variants={fadeUp} className="glass rounded-2xl p-5 hover:bg-white/15 transition-colors group card-hover">
              <div className="text-2xl mb-3">{icons[d.icon]}</div>
              <h4 className="font-serif font-semibold text-white text-sm mb-2">{d.title}</h4>
              <p className="text-blue-200/70 text-xs leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
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
      <AboutPreview />
      <SpecialtiesPreview />
      <DoctorPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <DifferentialsPreview />
      <BottomCTA />
    </PageTransition>
  )
}
