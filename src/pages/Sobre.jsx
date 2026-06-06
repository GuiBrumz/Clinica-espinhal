import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Compass, Crosshair, Heart, Microscope, Shield, Users, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, scaleIn } from '../animations/variants'
import { VALUES, DOCTOR, CLINIC_INFO } from '../data/content'

const PILLARS = [
  { icon: Target,  title: 'Missão',    text: 'Oferecer o mais alto nível de medicina da coluna, com diagnóstico preciso, tratamento individualizado e acompanhamento humanizado.' },
  { icon: Eye,     title: 'Visão',     text: 'Ser a referência na região metropolitana de Porto Alegre em tratamentos para coluna, reconhecida pela excelência técnica e pelo cuidado genuíno com cada paciente.' },
  { icon: Compass, title: 'Propósito', text: 'Devolver qualidade de vida e mobilidade a pessoas com dores na coluna, transformando limitação em capacidade funcional.' },
]

const VALUE_ICONS = {
  crosshair: Crosshair,
  heart:     Heart,
  microscope:Microscope,
  shield:    Shield,
  users:     Users,
  award:     Award,
}

export default function Sobre() {
  const { ref: s1, inView: v1 } = useScrollAnimation()
  const { ref: s2, inView: v2 } = useScrollAnimation({ threshold: 0.1 })
  const { ref: s3, inView: v3 } = useScrollAnimation({ threshold: 0.1 })
  const { ref: s4, inView: v4 } = useScrollAnimation({ threshold: 0.1 })

  return (
    <PageTransition>
      <PageHero
        label="Sobre a Clínica"
        title={<>Mais que uma clínica,<br /><span className="text-gradient">uma filosofia de cuidado</span></>}
        subtitle="Nascemos da convicção de que o tratamento da coluna exige muito mais do que técnica — exige escuta, precisão, humanidade e inovação contínua."
        image="/img/Dr.Elias4.jpg"
        imagePosition="center 80%"
        breadcrumbs={[{ label: 'Sobre a Clínica' }]}
        cta={{ label: 'Agendar Avaliação', href: `https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá!` }}
      />

      {/* ── Mission / Vision / Purpose ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={s1} variants={staggerContainer} initial="hidden" animate={v1 ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div key={i} variants={scaleIn}
                className="bg-gradient-to-br from-white to-brand-50 border border-brand-100 rounded-2xl p-8 group card-hover">
                <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center mb-5">
                  <p.icon size={18} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-neutral-900 text-xl mb-3">{p.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Linha 1 — imagem esquerda | texto direita */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div ref={s2} variants={fadeLeft} initial="hidden" animate={v2 ? 'visible' : 'hidden'}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-neutral-200">
                    <img src="/img/Dr.Elias3.jpeg" alt="Equipe médica especializada" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={v2 ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6, type: 'spring' }}
                    className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-brand-600 flex flex-col items-center justify-center shadow-md">
                    <span className="font-serif font-extrabold text-white text-2xl leading-none tracking-[-0.04em]">13</span>
                    <span className="text-blue-200 text-xs">anos</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeRight} initial="hidden" animate={v2 ? 'visible' : 'hidden'} className="space-y-5">
                <span className="section-label">Nossa História</span>
                <h2 className="font-serif font-bold text-neutral-900 leading-tight tracking-[-0.025em] text-balance"
                  style={{ fontSize: 'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
                  Medicina da coluna de alto nível com cuidado genuinamente humano
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Fundada em 2013, a Clínica Espinhal D.O.R. nasceu com a missão de oferecer atendimento especializado em doenças da coluna vertebral, unindo excelência médica, inovação terapêutica e cuidado humanizado. Desde sua criação, a clínica tem se dedicado a proporcionar aos pacientes um acompanhamento próximo, individualizado e focado em suas necessidades específicas.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Um dos principais diferenciais da Clínica Espinhal D.O.R. é o atendimento personalizado realizado diretamente pela equipe, garantindo acolhimento, orientação e suporte em todas as etapas do tratamento. Acreditamos que cada paciente possui uma história única e merece um cuidado baseado na confiança, na transparência e na construção de uma relação próxima com os profissionais responsáveis pelo seu acompanhamento.
                </p>
              </motion.div>
            </div>

            {/* Linha 2 — texto esquerda | imagem direita */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div variants={fadeLeft} initial="hidden" animate={v2 ? 'visible' : 'hidden'} className="space-y-5">
                <p className="text-neutral-600 leading-relaxed">
                  A equipe atua em Porto Alegre e Região Metropolitana, oferecendo consultas, avaliações especializadas e acompanhamento contínuo. Os procedimentos cirúrgicos são realizados em hospitais de referência, como o Hospital Moinhos de Vento, Hospital Mãe de Deus, Hospital Divina Providência, Blanc Hospital e outras instituições reconhecidas pela excelência assistencial e estrutura de alta complexidade.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Com uma equipe formada por médicos de diferentes subespecialidades que trabalham de maneira integrada, a Clínica Espinhal D.O.R. busca oferecer as melhores opções de tratamento, desde abordagens conservadoras até procedimentos cirúrgicos avançados, sempre com o objetivo de reduzir a dor, restaurar a funcionalidade e proporcionar mais qualidade de vida aos seus pacientes.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Há mais de uma década, seguimos comprometidos com a excelência médica e com um atendimento verdadeiramente humano, colocando o paciente e sua família no centro de cada decisão.
                </p>
                <div className="space-y-3 pt-2">
                  {['Equipe multidisciplinar altamente qualificada', 'Tecnologia de diagnóstico de última geração', 'Tratamentos conservadores e minimamente invasivos', 'Protocolos personalizados baseados em evidências'].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={v2 ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeRight} initial="hidden" animate={v2 ? 'visible' : 'hidden'}>
                <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-neutral-200">
                  <img src="/img/Dr.Elias4.jpg" alt="Clínica Espinhal D.O.R." className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ objectPosition: 'center 85%' }} />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={s3} initial={{ opacity: 0, y: 24 }} animate={v3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="text-center mb-12">
            <span className="section-label">Nossos Valores</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize: 'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              O que nos <span className="text-gradient-blue">guia</span> todos os dias
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate={v3 ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon]
              return (
                <motion.div key={i} variants={fadeUp}
                  className="group bg-white border border-neutral-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                  {Icon && (
                    <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-300">
                      <Icon size={16} className="text-brand-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  )}
                  <h4 className="font-serif font-semibold text-neutral-900 mb-2">{v.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Dr. Elias ── */}
      <section id="dr-elias" className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />
        <div className="absolute -bottom-40 right-0 w-96 h-96 opacity-8 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div ref={s4} initial={{ opacity: 0, y: 20 }} animate={v4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-400 mb-4">
              <span className="w-5 h-px bg-brand-400" />
              Responsável Técnico
              <span className="w-5 h-px bg-brand-400" />
            </span>
            <h2 className="font-heading font-bold text-white tracking-[-0.03em] leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)' }}>
              O profissional por trás{' '}
              <span className="text-brand-400">dos resultados</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Foto — 2 colunas */}
            <motion.div variants={fadeLeft} initial="hidden" animate={v4 ? 'visible' : 'hidden'}
              className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50">
                  <img
                    src={DOCTOR.image}
                    alt={DOCTOR.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg leading-tight">{DOCTOR.name}</p>
                    <p className="text-brand-400 text-xs font-semibold mt-1">{DOCTOR.crm}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conteúdo — 3 colunas */}
            <motion.div variants={fadeRight} initial="hidden" animate={v4 ? 'visible' : 'hidden'}
              className="lg:col-span-3 space-y-8">

              <div>
                <h3 className="font-heading font-bold text-white text-2xl tracking-[-0.025em]">{DOCTOR.name}</h3>
              </div>

              <div className="space-y-5">
                {DOCTOR.bio.map((para, i) => (
                  <p key={i} className="text-neutral-400 leading-relaxed text-sm">{para}</p>
                ))}
              </div>

              {/* Áreas de Atuação */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-600 mb-3">Áreas de Atuação</p>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.specialties.map((s, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/[0.06] border border-white/10 text-neutral-300 text-xs font-medium rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {DOCTOR.achievements.map((a, i) => (
                  <div key={i} className="bg-white/[0.05] border border-white/8 rounded-2xl p-4 text-center">
                    <div className="font-heading font-extrabold text-white text-xl tracking-tight">{a.number}</div>
                    <div className="text-neutral-500 text-xs mt-1 leading-snug">{a.label}</div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <BottomCTA
        title="Agende sua avaliação inicial"
        subtitle="Nossa equipe está disponível para compreender seu caso e apresentar as melhores opções de tratamento."
      />
    </PageTransition>
  )
}
