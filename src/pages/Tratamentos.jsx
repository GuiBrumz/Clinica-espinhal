import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Crosshair, Scan, Waves, Zap, Activity, BarChart2, Shield, Target } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../animations/variants'
import { TREATMENTS, CLINIC_INFO } from '../data/content'

const PROCESS_STEPS = [
  { n:'01', title:'Avaliação Inicial',        desc:'Consulta completa de 60 min: anamnese detalhada, exame físico e análise de exames de imagem.' },
  { n:'02', title:'Diagnóstico Diferencial',  desc:'Identificação da origem exata da dor com protocolos baseados em evidências científicas.' },
  { n:'03', title:'Plano Terapêutico',        desc:'Elaboração de protocolo individualizado com metas claras e cronograma de evolução.' },
  { n:'04', title:'Execução & Monitoramento', desc:'Tratamento com reavaliações periódicas e ajustes conforme a resposta clínica do paciente.' },
  { n:'05', title:'Alta & Seguimento',        desc:'Conclusão do tratamento com plano preventivo estruturado para evitar recidivas.' },
]

const TECHS = [
  { icon: Crosshair, title: 'Fluoroscopia Digital', desc: 'Guia em tempo real para infiltrações e procedimentos com posicionamento de precisão máxima.', image: 'https://images.unsplash.com/photo-1770134195107-0217c17ccaad?w=600&h=300&fit=crop' },
  { icon: Scan,      title: 'RM 3 Tesla',           desc: 'Ressonância magnética de alta resolução para diagnóstico diferencial preciso.',               image: 'https://images.unsplash.com/photo-1666214282459-c7dff167ecc0?w=600&h=300&fit=crop' },
  { icon: Waves,     title: 'Ondas de Choque',      desc: 'Tratamento não invasivo para inflamações crônicas e dores musculoesqueléticas.',              image: 'https://images.unsplash.com/photo-1772122028843-9139d23af4fb?w=600&h=300&fit=crop' },
  { icon: Zap,       title: 'Radiofrequência',      desc: 'Denervação seletiva de facetas articulares para alívio duradouro e comprovado da dor.',       image: 'https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?w=600&h=300&fit=crop' },
  { icon: Activity,  title: 'Pilates Clínico',      desc: 'Reabilitação funcional com equipamentos Reformer adaptados para patologias da coluna.',        image: 'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?w=600&h=300&fit=crop' },
  { icon: BarChart2, title: 'Biofotogrametria',     desc: 'Avaliação postural computadorizada com medições digitais de alta precisão.',                  image: 'https://images.unsplash.com/photo-1666214280165-20e3d73d70bf?w=600&h=300&fit=crop' },
]

const TREATMENT_ICONS = { shield: Shield, target: Target, zap: Zap, scan: Scan }
const ACCENT_COLORS = [
  { bg: 'bg-brand-50', border: 'border-brand-200', icon: 'bg-brand-600', text: 'text-brand-600', badge: 'text-brand-500' },
  { bg: 'bg-blue-50',  border: 'border-blue-200',  icon: 'bg-blue-600',  text: 'text-blue-600',  badge: 'text-blue-500'  },
  { bg: 'bg-violet-50',border: 'border-violet-200',icon: 'bg-violet-600',text: 'text-violet-600',badge: 'text-violet-500'},
  { bg: 'bg-cyan-50',  border: 'border-cyan-200',  icon: 'bg-cyan-700',  text: 'text-cyan-700',  badge: 'text-cyan-600'  },
]

export default function Tratamentos() {
  const { ref: pr, inView: pv } = useScrollAnimation({ threshold:0.05 })
  const { ref: tr, inView: tv } = useScrollAnimation({ threshold:0.05 })

  return (
    <PageTransition>
      <PageHero
        label="Tratamentos"
        title={<>Tecnologia clínica ao serviço<br /><span className="text-gradient">da sua recuperação</span></>}
        subtitle="Abordagens conservadoras, minimamente invasivas e de reabilitação — todas baseadas em evidências científicas e adaptadas para cada paciente."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label:'Tratamentos' }]}
        cta={{ label:'Agendar Avaliação', href:`https://wa.me/${CLINIC_INFO.whatsapp}` }}
        ctaSecondary={{ label:'Ver Especialidades', href:'/especialidades' }}
      />

      {/* Treatment blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible"
            className="grid md:grid-cols-2 gap-6">
            {TREATMENTS.map((t, i) => {
              const Icon = TREATMENT_ICONS[t.icon] || Zap
              const c = ACCENT_COLORS[i % 4]
              return (
                <motion.div key={t.id} variants={fadeUp}
                  className={`rounded-3xl border ${c.border} ${c.bg} p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${c.icon} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className={`text-4xl font-black ${c.badge} opacity-20 leading-none select-none`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${c.text} mb-1`}>{t.subtitle}</p>
                    <h3 className="font-serif font-bold text-neutral-900 text-xl leading-snug">{t.title}</h3>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed">{t.desc}</p>

                  <div className="grid grid-cols-1 gap-2">
                    {t.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className={`${c.text} shrink-0 mt-0.5`} />
                        <span className="text-neutral-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Gostaria de saber mais sobre ${t.title}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`group mt-auto inline-flex items-center gap-2 ${c.text} font-semibold text-sm hover:opacity-80 transition-opacity`}>
                    Agendar avaliação <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={pr} initial={{ opacity:0, y:24 }} animate={pv?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-14">
            <span className="section-label">Como funciona</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              Do diagnóstico ao <span className="text-gradient-blue">acompanhamento</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate={pv?'visible':'hidden'} className="space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-start gap-5 bg-white border border-neutral-100 rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center shrink-0 shadow-sm">
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



      <BottomCTA
        title="Agende sua avaliação inicial"
        subtitle="Receba um diagnóstico preciso e um plano terapêutico desenvolvido para o seu caso."
      />
    </PageTransition>
  )
}
