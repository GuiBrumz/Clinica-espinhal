import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, scaleIn } from '../animations/variants'
import { GALLERY_IMAGES, CLINIC_INFO } from '../data/content'

const CATEGORIES = ['Todos', ...Array.from(new Set(GALLERY_IMAGES.map(i=>i.category)))]

const ROOMS = [
  { emoji:'🏥', title:'Consultórios',       desc:'3 consultórios privados com equipamentos de última geração para avaliação e diagnóstico.' },
  { emoji:'🛏️', title:'Salas de Tratamento', desc:'4 salas de tratamento individuais com fluoroscopia e equipamentos de reabilitação.' },
  { emoji:'🏋️', title:'Estúdio de Pilates',  desc:'Estúdio completo com Reformers, Cadillac e acessórios para reabilitação funcional.' },
  { emoji:'🔬', title:'Centro Diagnóstico',  desc:'Biofotogrametria computadorizada e ultrassonografia musculoesquelética in-house.' },
  { emoji:'🛋️', title:'Recepção Premium',    desc:'Ambiente acolhedor com atendimento personalizado, café e espaço de relaxamento.' },
  { emoji:'🚗', title:'Estacionamento',      desc:'Vaga no próprio edifício para maior comodidade dos nossos pacientes.' },
]

export default function Estrutura() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)
  const { ref, inView } = useScrollAnimation({ threshold:0.05 })

  const filtered = activeCategory === 'Todos' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(i=>i.category===activeCategory)

  const prev = () => setLightbox(l => (l-1+filtered.length)%filtered.length)
  const next = () => setLightbox(l => (l+1)%filtered.length)

  return (
    <PageTransition>
      <PageHero
        label="Nossa Estrutura"
        title={<>Um ambiente projetado<br /><span className="text-gradient">para a sua recuperação</span></>}
        subtitle="Instalações de alto padrão, projetadas para oferecer conforto, privacidade e a melhor experiência de tratamento."
        image="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label:'Estrutura' }]}
        cta={{ label:'Agendar Visita', href:`https://wa.me/${CLINIC_INFO.whatsapp}?text=Gostaria de conhecer a estrutura da clínica` }}
      />

      {/* Room highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Espaços</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              Cada detalhe pensado <span className="text-gradient-blue">para você</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROOMS.map((room,i) => (
              <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.3 }}
                transition={{ delay:i*0.08, duration:0.6 }}
                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all">
                <div className="text-3xl mb-4">{room.emoji}</div>
                <h4 className="font-serif font-semibold text-neutral-900 mb-2">{room.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{room.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Galeria</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 mb-6 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              Conheça nosso espaço
            </h2>
            {/* Category filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={()=>setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory===cat ? 'bg-brand-600 text-white shadow-glow' : 'bg-white border border-neutral-200 text-neutral-600 hover:border-brand-300 hover:text-brand-600'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((img,i) => (
                <motion.div key={img.id} variants={scaleIn} layout
                  onClick={()=>setLightbox(i)}
                  className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-card ${i===0?'col-span-2 row-span-2 aspect-square':''} aspect-[4/3]`}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={24} className="text-white"/>
                  </div>
                  <p className="absolute bottom-3 left-3 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={()=>setLightbox(null)}>
            <button onClick={()=>setLightbox(null)} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10"><X size={20}/></button>
            <button onClick={e=>{e.stopPropagation();prev()}} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10"><ChevronLeft size={24}/></button>
            <button onClick={e=>{e.stopPropagation();next()}} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10"><ChevronRight size={24}/></button>
            <motion.div key={lightbox} initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.9, opacity:0 }}
              onClick={e=>e.stopPropagation()} className="max-w-4xl w-full">
              <img src={filtered[lightbox]?.src.replace('w=800&h=600','w=1200&h=900')} alt={filtered[lightbox]?.alt} className="w-full max-h-[80vh] object-contain rounded-2xl"/>
              <p className="text-white/50 text-sm text-center mt-3">{filtered[lightbox]?.label} · {lightbox+1}/{filtered.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomCTA title="Venha conhecer nossa estrutura" subtitle="Agende sua visita e descubra um ambiente projetado para o seu bem-estar." ctaLabel="Agendar Visita" />
    </PageTransition>
  )
}
