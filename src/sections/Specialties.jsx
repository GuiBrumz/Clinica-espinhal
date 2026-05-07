import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bone, Activity, Wind, Zap, Heart, Shield, Brain, ClipboardList, ArrowRight, Plus
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants'
import { SPECIALTIES, CLINIC_INFO } from '../data/content'

const ICON_MAP = {
  bone: Bone,
  activity: Activity,
  wind: Wind,
  zap: Zap,
  heart: Heart,
  shield: Shield,
  brain: Brain,
  clipboard: ClipboardList,
}

export default function Specialties() {
  const [active, setActive] = useState(null)
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0057FF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #0057FF, transparent)', transform: 'translate(20%, -30%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">O que tratamos</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-5">
            Especialidades & <span className="text-gradient-blue">Tratamentos</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Abordagem completa para todas as condições da coluna vertebral,
            do diagnóstico ao tratamento e acompanhamento.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SPECIALTIES.map((spec) => {
            const Icon = ICON_MAP[spec.icon] || Activity
            const isActive = active === spec.id

            return (
              <motion.div
                key={spec.id}
                variants={scaleIn}
                layout
                onClick={() => setActive(isActive ? null : spec.id)}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                  isActive
                    ? 'shadow-card-hover ring-2 ring-brand-600 ring-offset-2'
                    : 'bg-white border border-neutral-100 shadow-card hover:-translate-y-2 hover:shadow-card-hover'
                }`}
              >
                {/* Card base */}
                <div className={`p-6 h-full transition-all duration-500 ${isActive ? 'bg-gradient-to-br ' + spec.color : ''}`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isActive ? 'bg-white/20' : 'bg-brand-50 group-hover:bg-brand-600'
                  }`}>
                    <Icon size={22} className={isActive ? 'text-white' : 'text-brand-600 group-hover:text-white'} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold text-base mb-2 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {spec.title}
                  </h3>

                  {/* Description */}
                  <AnimatePresence>
                    {isActive ? (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/80 text-sm leading-relaxed"
                      >
                        {spec.shortDesc}
                      </motion.p>
                    ) : (
                      <p className="text-neutral-500 text-sm line-clamp-2">{spec.shortDesc}</p>
                    )}
                  </AnimatePresence>

                  {/* CTA link */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.1 }}
                        href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Gostaria de saber mais sobre ${spec.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 flex items-center gap-1.5 text-white text-sm font-semibold group/link"
                      >
                        Saber mais
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                  </AnimatePresence>

                  {/* Expand icon */}
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-white/20 rotate-45' : 'bg-neutral-100 group-hover:bg-brand-100'
                  }`}>
                    <Plus size={12} className={isActive ? 'text-white' : 'text-brand-600'} />
                  </div>
                </div>

                {/* Bottom glow on hover */}
                {!isActive && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, transparent 60%, rgba(0,87,255,0.05) 100%)` }} />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 text-sm mb-4">
            Não encontrou sua condição? Entre em contato para uma avaliação completa.
          </p>
          <motion.a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá, gostaria de agendar uma avaliação`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            Agendar Avaliação Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
