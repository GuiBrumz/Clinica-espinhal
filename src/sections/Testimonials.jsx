import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { TESTIMONIALS } from '../data/content'

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #0057FF, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="section-label">Histórias reais</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-3">
              Pacientes que <span className="text-gradient-blue">recuperaram</span><br className="hidden md:block" /> suas vidas
            </h2>
            <p className="text-neutral-500 max-w-lg">
              Mais de 12.000 pacientes tratados. Cada história é um testemunho de dedicação, técnica e cuidado.
            </p>
          </div>

          {/* Custom nav arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-xl border-2 border-neutral-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white text-neutral-600 flex items-center justify-center transition-all duration-200 group"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-xl border-2 border-neutral-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white text-neutral-600 flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              640:  { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Top */}
                  <div className="flex items-center justify-between mb-5">
                    <StarRating count={t.rating} />
                    <Quote size={24} className="text-brand-100" />
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-700 text-sm leading-relaxed flex-1 mb-5 italic">
                    "{t.text}"
                  </p>

                  {/* Before / After */}
                  <div className="flex gap-2 mb-5">
                    <div className="flex-1 bg-red-50 rounded-xl p-2.5 border border-red-100">
                      <p className="text-red-400 text-[10px] font-semibold uppercase tracking-wider mb-1">Antes</p>
                      <p className="text-red-600 text-xs font-medium">{t.before}</p>
                    </div>
                    <div className="flex-1 bg-green-50 rounded-xl p-2.5 border border-green-100">
                      <p className="text-green-400 text-[10px] font-semibold uppercase tracking-wider mb-1">Depois</p>
                      <p className="text-green-600 text-xs font-medium">{t.after}</p>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100"
                        loading="lazy"
                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0057FF&color=fff&size=80` }}
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                      <p className="text-neutral-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="swiper-custom-pagination flex justify-center gap-1.5 mt-2" />
        </motion.div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-neutral-100"
        >
          {[
            { value: '4.98', label: 'Nota média no Google', icon: '🌟' },
            { value: '12.000+', label: 'Pacientes tratados', icon: '👥' },
            { value: '98%', label: 'Taxa de satisfação', icon: '✅' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-neutral-600">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <span className="font-bold text-neutral-900">{item.value}</span>
                <span className="text-sm ml-1.5">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
