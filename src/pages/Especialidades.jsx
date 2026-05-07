import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, scaleIn, fadeUp } from '../animations/variants'
import { SPECIALTIES, CLINIC_INFO } from '../data/content'

const EMOJI = { bone:'🦴', activity:'⚡', wind:'🌬️', zap:'💊', heart:'❤️', shield:'🛡️', brain:'🧠', clipboard:'📋' }

function SpecialtyCard({ spec, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={scaleIn}
      className={`bg-white border rounded-2xl overflow-hidden shadow-card transition-all duration-300 ${open ? 'border-brand-200 shadow-card-hover' : 'border-neutral-100 hover:border-brand-100 hover:-translate-y-1 hover:shadow-card-hover'}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/7] overflow-hidden">
        <img src={spec.image} alt={spec.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy"/>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent"/>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${spec.color} flex items-center justify-center text-white text-lg shadow-glow`}>
            {EMOJI[spec.icon]}
          </div>
          <h3 className="font-serif font-bold text-white text-lg">{spec.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">{spec.fullDesc}</p>

        <button onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-brand-600 text-sm font-semibold hover:text-brand-700 transition-colors">
          <span>{open ? 'Menos detalhes' : 'Ver sintomas e tratamentos'}</span>
          <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}/>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
              transition={{ duration:0.35, ease:[0.22,1,0.36,1] }}>
              <div className="pt-5 grid sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={14} className="text-orange-500"/>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Sintomas Comuns</span>
                  </div>
                  <ul className="space-y-1.5">
                    {spec.symptoms.map((s,i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"/>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle size={14} className="text-brand-600"/>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Abordagens</span>
                  </div>
                  <ul className="space-y-1.5">
                    {spec.treatments.map((t,i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle size={13} className="text-brand-500 shrink-0 mt-0.5"/>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de saber mais sobre ${spec.title}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 group">
                Agendar avaliação para {spec.title}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Especialidades() {
  const { ref, inView } = useScrollAnimation({ threshold:0.05 })

  return (
    <PageTransition>
      <PageHero
        label="Especialidades"
        title={<>Tratamentos especializados<br /><span className="text-gradient">para cada condição</span></>}
        subtitle="Diagnóstico preciso e tratamento personalizado para toda a gama de patologias da coluna vertebral."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label:'Especialidades' }]}
        cta={{ label:'Agendar Avaliação', href:`https://wa.me/${CLINIC_INFO.whatsapp}` }}
        ctaSecondary={{ label:'Ver Tratamentos', href:'/tratamentos' }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={ref} initial={{ opacity:0, y:24 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-14">
            <span className="section-label">O que tratamos</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 mb-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              Nossas especialidades
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Clique em cada especialidade para ver sintomas, abordagens terapêuticas e informações detalhadas.
            </p>
          </motion.div>

          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}
            className="grid md:grid-cols-2 gap-6">
            {SPECIALTIES.map((spec, i) => <SpecialtyCard key={spec.id} spec={spec} index={i}/>)}
          </motion.div>
        </div>
      </section>

      <BottomCTA title="Não encontrou sua condição?" subtitle="Entre em contato para uma avaliação completa. Tratamos uma ampla variedade de condições espinhais." ctaLabel="Falar com especialista" />
    </PageTransition>
  )
}
