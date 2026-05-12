import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Phone, Star, Shield } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp } from '../animations/variants'
import { CLINIC_INFO } from '../data/content'

export default function CTA() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contato" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #0f172a 0%, #1e3a8a 55%, #1d4ed8 100%)' }}
    >
      {/* Subtle static ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.12) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Icon */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Calendar size={28} className="text-white" />
            </div>
          </motion.div>

          {/* Label */}
          <motion.div variants={fadeUp} className="mb-5">
            <span className="section-label-white">Agende sua avaliação</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Sua qualidade de vida<br />
            <span className="text-gradient">começa com uma decisão</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Não deixe a dor limitar seus dias. Agende sua avaliação com o especialista e
            descubra o tratamento mais adequado para o seu caso.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar minha avaliação na Espinhal D.O.R`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center justify-center gap-3 px-9 py-5 bg-white text-brand-700 font-bold rounded-2xl text-base shadow-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Agendar pelo WhatsApp
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={`tel:${CLINIC_INFO.phone}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost text-base py-5 px-9"
            >
              <Phone size={18} />
              {CLINIC_INFO.phone}
            </motion.a>
          </motion.div>

          {/* Trust micro-badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-5">
            {[
              { icon: <Star size={13} />, text: 'Sem lista de espera' },
              { icon: <Shield size={13} />, text: 'Ambiente premium e privativo' },
              { icon: <Calendar size={13} />, text: 'Resposta em até 2h úteis' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-1.5 text-blue-100/60 text-xs">
                <span className="text-blue-300">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
