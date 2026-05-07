import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants'
import { TESTIMONIALS, STATS, CLINIC_INFO } from '../data/content'

function TestimonialFull({ t }) {
  return (
    <div className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1">
          {[0,1,2,3,4].map(i=><Star key={i} size={13} className="text-yellow-400 fill-yellow-400"/>)}
        </div>
        <Quote size={28} className="text-brand-100"/>
      </div>
      <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-5 italic">"{t.text}"</p>
      {/* Condition badge */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100">{t.condition}</span>
        <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-lg">{t.duration}</span>
      </div>
      {/* Before/After */}
      <div className="flex gap-2 mb-5">
        <div className="flex-1 bg-red-50 rounded-xl p-2.5 border border-red-100">
          <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider mb-1">Antes</p>
          <p className="text-red-600 text-xs font-medium">{t.before}</p>
        </div>
        <div className="flex-1 bg-green-50 rounded-xl p-2.5 border border-green-100">
          <p className="text-green-400 text-[10px] font-bold uppercase tracking-wider mb-1">Depois</p>
          <p className="text-green-600 text-xs font-medium">{t.after}</p>
        </div>
      </div>
      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
        <div className="relative">
          <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-100"
            onError={e=>{e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0057FF&color=fff&size=80`}}/>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white"/>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
          <p className="text-neutral-400 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Depoimentos() {
  const { ref, inView } = useScrollAnimation({ threshold:0.05 })
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <PageTransition>
      <PageHero
        label="Depoimentos"
        title={<>Histórias reais de quem<br /><span className="text-gradient">recuperou a vida</span></>}
        subtitle="Mais de 12.000 pacientes tratados. Cada história é um testemunho de dedicação, técnica e cuidado genuíno."
        image="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label:'Depoimentos' }]}
        cta={{ label:'Seja o próximo', href:`https://wa.me/${CLINIC_INFO.whatsapp}?text=Gostaria de agendar minha avaliação` }}
      />

      {/* Stats bar */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { n:'4.98★', l:'Nota no Google' },
              { n:'12.000+', l:'Pacientes tratados' },
              { n:'98%', l:'Taxa de satisfação' },
              { n:'15+', l:'Anos de experiência' },
            ].map((item,i) => (
              <div key={i} className="text-center">
                <div className="font-serif font-extrabold text-brand-600 text-2xl tracking-[-0.04em]">{item.n}</div>
                <div className="text-neutral-500 text-sm mt-0.5">{item.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={ref} initial={{ opacity:0, y:24 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-12">
            <span className="section-label">Depoimentos verificados</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              O que nossos pacientes dizem
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <motion.div key={t.id} variants={scaleIn}>
                <TestimonialFull t={t}/>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured quote */}
      <section className="py-20" style={{ background:'linear-gradient(150deg,#001040 0%,#0040cc 50%,#0057FF 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={40} className="text-blue-300/30 mx-auto mb-6"/>
          <p className="font-serif text-white text-2xl md:text-3xl leading-relaxed italic font-medium mb-8">
            "O Dr. André foi a primeira pessoa que realmente ouviu minha história e me deu esperança.
            Hoje corro, danço e vivo sem dor — coisas que achei que nunca mais faria."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="Fernanda" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"/>
            <div className="text-left">
              <div className="text-white font-semibold">Fernanda Santos</div>
              <div className="text-blue-200 text-sm">Advogada, 38 anos · Zero dor há 14 meses</div>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA title="Escreva sua própria história de recuperação" subtitle="Agende sua avaliação e dê o primeiro passo para uma vida sem dor." ctaLabel="Agendar Agora" />
    </PageTransition>
  )
}
