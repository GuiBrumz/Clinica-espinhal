import { motion } from 'framer-motion'
import { CheckCircle, Sparkles, Target, HeartHandshake } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../animations/variants'

const PILLARS = [
  { icon: Target, label: 'Diagnóstico Preciso', desc: 'Identificamos a origem exata da dor com tecnologia de ponta.' },
  { icon: HeartHandshake, label: 'Cuidado Humanizado', desc: 'Cada paciente recebe atenção e tratamento personalizados.' },
  { icon: Sparkles, label: 'Inovação Constante', desc: 'Protocolos atualizados baseados em evidências científicas.' },
]

const MILESTONES = [
  { year: '2009', event: 'Fundação da clínica com foco em coluna vertebral' },
  { year: '2013', event: 'Expansão para 3 consultórios e incorporação de diagnóstico por imagem' },
  { year: '2017', event: 'Certificação internacional e parceria com centros de referência' },
  { year: '2021', event: 'Implementação de protocolos minimamente invasivos de última geração' },
  { year: '2024', event: 'Nova sede premium e expansão da equipe multidisciplinar' },
]

export default function About() {
  const { ref: leftRef, inView: leftInView } = useScrollAnimation()
  const { ref: rightRef, inView: rightInView } = useScrollAnimation()
  const { ref: pillarsRef, inView: pillarsInView } = useScrollAnimation()

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, #0057FF, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Nossa História</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-5">
              Mais que uma clínica,<br />
              <span className="text-gradient-blue">uma filosofia de cuidado</span>
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Nascemos da convicção de que o tratamento da coluna exige muito mais do que técnica —
              exige escuta, precisão, humanidade e inovação contínua.
            </p>
          </motion.div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image side */}
          <motion.div
            ref={leftRef}
            variants={fadeLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Interior da Clínica Espinhal D.O.R"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={leftInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -right-6 w-48 md:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=400&fit=crop"
                alt="Consultório"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={leftInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
              className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-brand-600 flex flex-col items-center justify-center shadow-glow text-white"
            >
              <span className="font-serif font-bold text-2xl leading-none">15</span>
              <span className="text-xs text-blue-200 mt-0.5">anos</span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            ref={rightRef}
            variants={fadeRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="space-y-7"
          >
            <span className="section-label">Sobre a Clínica</span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Excelência em medicina espinhal com abordagem humana
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              A Espinhal D.O.R nasceu em 2009 com uma proposta clara: oferecer o que existe de mais
              avançado em diagnóstico e tratamento de patologias da coluna vertebral, com o calor humano
              que cada paciente merece.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Ao longo de 15 anos, construímos uma estrutura de alto padrão, reunimos uma equipe
              especializada e desenvolvemos protocolos exclusivos que combinam medicina baseada em
              evidências com cuidado individualizado.
            </p>

            {/* Checkpoints */}
            <div className="space-y-3 pt-2">
              {[
                'Equipe multidisciplinar altamente qualificada',
                'Tecnologia de diagnóstico de última geração',
                'Tratamentos conservadores e minimamente invasivos',
                'Protocolos personalizados e baseados em evidências',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={rightInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-brand-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contato"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex mt-2"
            >
              Agendar Avaliação
            </motion.a>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          ref={pillarsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={pillarsInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-card group card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-600 transition-colors duration-300 flex items-center justify-center mb-4">
                <pillar.icon size={22} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">{pillar.label}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <h3 className="font-serif text-2xl font-bold text-neutral-900 text-center mb-12">
            Nossa Trajetória
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-600 to-brand-100 -translate-x-1/2 hidden md:block" />

            <div className="space-y-6 md:space-y-8">
              {MILESTONES.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={pillarsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.4, duration: 0.6 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className={`bg-white border border-neutral-100 rounded-2xl p-4 shadow-card max-w-sm ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <p className="text-neutral-700 text-sm">{milestone.event}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 border-4 border-white shadow-glow shrink-0 z-10">
                    <span className="text-white text-xs font-bold">{milestone.year.slice(2)}</span>
                  </div>
                  <div className="hidden md:flex flex-1" />
                  {/* Mobile */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="flex items-center justify-center w-12 h-8 rounded-full bg-brand-600 shrink-0">
                      <span className="text-white text-xs font-bold">{milestone.year}</span>
                    </div>
                    <div className="bg-white border border-neutral-100 rounded-xl p-3 shadow-sm flex-1">
                      <p className="text-neutral-700 text-sm">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
