import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CLINIC_INFO } from '../data/content'

export default function BottomCTA({
  title = 'Pronto para viver sem dor?',
  subtitle = 'Agende sua avaliação com o especialista e descubra o tratamento ideal para o seu caso.',
  ctaLabel = 'Agendar pelo WhatsApp',
}) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 })
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #001040 0%, #0040cc 50%, #0057FF 100%)' }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.025em]">
            {title}
          </h2>
          <p className="text-blue-100/75 text-lg mb-8 leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-brand-700 font-bold rounded-2xl shadow-xl transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {ctaLabel}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="btn-ghost py-4 px-8"
            >
              <Phone size={16} />
              {CLINIC_INFO.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
