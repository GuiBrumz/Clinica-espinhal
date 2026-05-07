import { motion } from 'framer-motion'
import { Award, GraduationCap, CheckCircle, Star } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '../animations/variants'
import { DOCTOR, CLINIC_INFO } from '../data/content'

export default function Doctor() {
  const { ref: leftRef, inView: leftInView } = useScrollAnimation()
  const { ref: rightRef, inView: rightInView } = useScrollAnimation()

  return (
    <section id="medico" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #0057FF, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #0057FF, transparent 70%)', transform: 'translate(30%, 30%)' }} />
        {/* Subtle lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Responsável Técnico</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-4">
              O especialista por trás de{' '}
              <span className="text-gradient-blue">cada resultado</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            ref={leftRef}
            variants={fadeLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="relative flex justify-center"
          >
            {/* Background shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 opacity-60" />
            </div>

            {/* Image frame */}
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden w-72 md:w-80 shadow-2xl">
                <img
                  src={DOCTOR.image}
                  alt={DOCTOR.name}
                  className="w-full aspect-[3/4] object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="glass-dark rounded-2xl p-4">
                    <div className="flex items-center gap-1 mb-1">
                      {[0,1,2,3,4].map(i => (
                        <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="text-yellow-200 text-xs ml-1">4.98</span>
                    </div>
                    <p className="text-white font-serif font-bold text-base leading-tight">{DOCTOR.name}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{DOCTOR.title}</p>
                  </div>
                </div>
              </div>

              {/* CRM badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={leftInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-8 top-1/3 bg-white rounded-xl px-3 py-2 shadow-lg border border-neutral-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-700">{DOCTOR.crm}</span>
                </div>
              </motion.div>

              {/* Johns Hopkins badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={leftInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-8 top-1/4 bg-brand-600 rounded-xl px-3 py-2 shadow-glow text-white"
              >
                <div className="flex items-center gap-1.5">
                  <Award size={13} className="shrink-0" />
                  <span className="text-xs font-semibold">JHU Fellowship</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            ref={rightRef}
            variants={fadeRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="space-y-7"
          >
            <div>
              <span className="section-label mb-4 inline-flex">Especialista</span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-2">
                {DOCTOR.name}
              </h3>
              <p className="text-brand-600 font-semibold">{DOCTOR.title}</p>
            </div>

            {DOCTOR.bio.map((para, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed">{para}</p>
            ))}

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-brand-600" />
                <span className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">Certificações & Formação</span>
              </div>
              <div className="space-y-2.5">
                {DOCTOR.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={rightInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-600/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                    </div>
                    <span className="text-neutral-700 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialties chips */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">Áreas de atuação</p>
              <div className="flex flex-wrap gap-2">
                {DOCTOR.specialties.map((spec, i) => (
                  <span key={i} className="px-3 py-1.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma consulta com o Dr. André Cavalcanti`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex"
            >
              Agendar Consulta com o Especialista
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
