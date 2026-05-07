import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../animations/variants'
import { TREATMENTS, CLINIC_INFO } from '../data/content'

const PROCESS_STEPS = [
  { n:'01', title:'Avaliação Inicial',       desc:'Consulta completa de 60 min: anamnese detalhada, exame físico e análise de exames de imagem.' },
  { n:'02', title:'Diagnóstico Preciso',     desc:'Identificação da origem exata da dor com protocolos baseados em evidências científicas.' },
  { n:'03', title:'Plano Terapêutico',       desc:'Elaboração de protocolo individualizado com metas claras e cronograma de evolução.' },
  { n:'04', title:'Execução & Monitoramento',desc:'Tratamento com reavaliações periódicas e ajustes conforme a resposta do paciente.' },
  { n:'05', title:'Alta & Manutenção',       desc:'Conclusão do tratamento com plano preventivo para evitar recidivas.' },
]

const TECHS = [
  { emoji:'🔬', title:'Fluoroscopia Digital', desc:'Guia em tempo real para infiltrações e procedimentos com precisão máxima.' },
  { emoji:'🧲', title:'RM 3 Tesla',           desc:'Ressonância magnética de alta resolução para diagnóstico diferencial preciso.' },
  { emoji:'🌊', title:'Ondas de Choque',       desc:'Tratamento não invasivo para inflamações crônicas e dores musculoesqueléticas.' },
  { emoji:'⚡', title:'Radiofrequência',       desc:'Denervação seletiva de facetas articulares para alívio duradouro da dor.' },
  { emoji:'🏋️', title:'Pilates Clínico',      desc:'Reabilitação funcional com equipamentos Reformer adaptados para coluna.' },
  { emoji:'📊', title:'Biofotogrametria',      desc:'Avaliação postural computadorizada com medições digitais de alta precisão.' },
]

function TreatmentBlock({ t, index }) {
  const { ref, inView } = useScrollAnimation()
  const isEven = index % 2 === 0

  return (
    <motion.div ref={ref} initial={{ opacity:0, y:40 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
      className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className={`${isEven ? '' : 'lg:order-2'}`}>
        <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-neutral-100">
          <img src={t.image} alt={t.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy"/>
        </div>
      </div>

      {/* Text */}
      <div className={`${isEven ? '' : 'lg:order-1'}`}>
        <span className="section-label">{t.subtitle}</span>
        <h3 className="font-serif font-bold text-neutral-900 mt-4 mb-4 tracking-[-0.02em] leading-tight"
          style={{ fontSize:'clamp(1.5rem,2vw+0.5rem,2.25rem)' }}>
          {t.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed mb-6">{t.desc}</p>
        <div className="space-y-2.5 mb-7">
          {t.items.map((item,i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-brand-600 shrink-0 mt-0.5"/>
              <span className="text-neutral-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <a href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Gostaria de saber mais sobre ${t.title}`}
          target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors">
          Agendar avaliação <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
        </a>
      </div>
    </motion.div>
  )
}

export default function Tratamentos() {
  const { ref: pr, inView: pv } = useScrollAnimation({ threshold:0.05 })
  const { ref: tr, inView: tv } = useScrollAnimation({ threshold:0.05 })

  return (
    <PageTransition>
      <PageHero
        label="Tratamentos"
        title={<>Alta tecnologia ao serviço<br /><span className="text-gradient">da sua recuperação</span></>}
        subtitle="Procedimentos conservadores, minimamente invasivos e de reabilitação — todos baseados em evidências científicas e adaptados para cada paciente."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label:'Tratamentos' }]}
        cta={{ label:'Agendar Avaliação', href:`https://wa.me/${CLINIC_INFO.whatsapp}` }}
        ctaSecondary={{ label:'Ver Especialidades', href:'/especialidades' }}
      />

      {/* Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {TREATMENTS.map((t,i) => <TreatmentBlock key={t.id} t={t} index={i}/>)}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={pr} initial={{ opacity:0, y:24 }} animate={pv?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-14">
            <span className="section-label">Como funciona</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              Nosso processo de <span className="text-gradient-blue">tratamento</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate={pv?'visible':'hidden'} className="space-y-4">
            {PROCESS_STEPS.map((step,i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-start gap-5 bg-white border border-neutral-100 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center shrink-0 shadow-glow">
                  <span className="text-white font-bold text-sm">{step.n}</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-neutral-900 mb-1">{step.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20" style={{ background:'linear-gradient(150deg,#001040 0%,#0040cc 50%,#0057FF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={tr} initial={{ opacity:0, y:24 }} animate={tv?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-12">
            <span className="section-label-white">Tecnologia</span>
            <h2 className="font-serif font-bold text-white mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              Equipamentos & <span className="text-gradient">tecnologias</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate={tv?'visible':'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECHS.map((t,i) => (
              <motion.div key={i} variants={fadeUp} className="glass rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-3xl mb-4">{t.emoji}</div>
                <h4 className="font-serif font-semibold text-white mb-2">{t.title}</h4>
                <p className="text-blue-200/70 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <BottomCTA title="Descubra o tratamento ideal para você" subtitle="Agende sua avaliação e receba um plano terapêutico personalizado." />
    </PageTransition>
  )
}
