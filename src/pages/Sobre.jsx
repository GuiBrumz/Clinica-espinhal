import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, scaleIn } from '../animations/variants'
import { VALUES } from '../data/content'

const MILESTONES = [
  { year:'2009', title:'Fundação',        desc:'Abertura da Espinhal D.O.R com foco exclusivo em coluna vertebral, com 1 consultório e 2 profissionais.' },
  { year:'2011', title:'Crescimento',     desc:'Expansão para 3 consultórios e incorporação do diagnóstico por imagem in-house.' },
  { year:'2014', title:'Reconhecimento',  desc:'Certificação pela Sociedade Brasileira de Coluna e primeiros protocolos minimamente invasivos.' },
  { year:'2017', title:'Internacionalização', desc:'Parcerias com centros de referência nos EUA e Europa, validando nossos protocolos internacionalmente.' },
  { year:'2021', title:'Inovação',        desc:'Implementação de fluoroscopia in-house e expansão da equipe multidisciplinar.' },
  { year:'2024', title:'Nova Sede',       desc:'Mudança para espaço premium na Av. Paulista com 8 salas, sala cirúrgica e área de reabilitação.' },
]

const PILLARS = [
  { emoji:'🎯', title:'Missão',    text:'Oferecer o mais alto nível de medicina espinhal, com diagnóstico preciso, tratamento individualizado e acompanhamento humanizado.' },
  { emoji:'🔭', title:'Visão',     text:'Ser a referência nacional em tratamentos para coluna, reconhecida pela excelência técnica e pelo cuidado genuíno com cada paciente.' },
  { emoji:'⭐', title:'Propósito', text:'Devolver qualidade de vida e movimento para pessoas que sofrem com dores na coluna, transformando limitação em liberdade.' },
]

export default function Sobre() {
  const { ref: s1, inView: v1 } = useScrollAnimation()
  const { ref: s2, inView: v2 } = useScrollAnimation({ threshold:0.1 })
  const { ref: s3, inView: v3 } = useScrollAnimation({ threshold:0.1 })

  return (
    <PageTransition>
      <PageHero
        label="Sobre a Clínica"
        title={<>Mais que uma clínica,<br /><span className="text-gradient">uma filosofia de cuidado</span></>}
        subtitle="Nascemos da convicção de que o tratamento da coluna exige muito mais do que técnica — exige escuta, precisão, humanidade e inovação contínua."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label:'Sobre a Clínica' }]}
        cta={{ label:'Agendar Avaliação', href:`https://wa.me/5511999999999?text=Olá!`, }}
        ctaSecondary={{ label:'Conheça o Especialista', href:'/responsavel-tecnico' }}
      />

      {/* ── Mission / Vision / Purpose ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={s1} variants={staggerContainer} initial="hidden" animate={v1?'visible':'hidden'}
            className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p,i)=>(
              <motion.div key={i} variants={scaleIn}
                className="bg-gradient-to-br from-white to-brand-50 border border-brand-100 rounded-2xl p-8 group card-hover">
                <div className="text-3xl mb-4">{p.emoji}</div>
                <h3 className="font-serif font-bold text-neutral-900 text-xl mb-3">{p.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div ref={s2} variants={fadeLeft} initial="hidden" animate={v2?'visible':'hidden'}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-neutral-200">
                  <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop" alt="Nossa história" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
                <motion.div initial={{ opacity:0, x:30, y:30 }} animate={v2?{ opacity:1, x:0, y:0 }:{}} transition={{ delay:0.4, duration:0.7 }}
                  className="absolute -bottom-6 -right-5 w-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-square">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop" alt="Tecnologia" className="w-full h-full object-cover"/>
                </motion.div>
                <motion.div initial={{ opacity:0, scale:0 }} animate={v2?{ opacity:1, scale:1 }:{}} transition={{ delay:0.6, type:'spring' }}
                  className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-brand-600 flex flex-col items-center justify-center shadow-glow">
                  <span className="font-serif font-extrabold text-white text-2xl leading-none tracking-[-0.04em]">15</span>
                  <span className="text-blue-200 text-xs">anos</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" animate={v2?'visible':'hidden'} className="space-y-6">
              <span className="section-label">Nossa História</span>
              <h2 className="font-serif font-bold text-neutral-900 leading-tight tracking-[-0.025em] text-balance"
                style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
                Excelência em medicina espinhal com abordagem humana
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                A Espinhal D.O.R nasceu em 2009 com uma proposta clara: oferecer o que existe de mais avançado em diagnóstico e tratamento de patologias da coluna vertebral, com o calor humano que cada paciente merece.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Ao longo de 15 anos, construímos uma estrutura de alto padrão, reunimos uma equipe especializada e desenvolvemos protocolos exclusivos que combinam medicina baseada em evidências com cuidado individualizado.
              </p>
              <div className="space-y-3 pt-2">
                {['Equipe multidisciplinar altamente qualificada','Tecnologia de diagnóstico de última geração','Tratamentos conservadores e minimamente invasivos','Protocolos personalizados baseados em evidências'].map((item,i)=>(
                  <motion.div key={i} initial={{ opacity:0, x:20 }} animate={v2?{ opacity:1, x:0 }:{}} transition={{ delay:0.3+i*0.1 }}
                    className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-600 shrink-0 mt-0.5"/>
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={s3} initial={{ opacity:0, y:24 }} animate={v3?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-12">
            <span className="section-label">Nossos Valores</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              O que nos <span className="text-gradient-blue">guia</span> todos os dias
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate={v3?'visible':'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v,i)=>(
              <motion.div key={i} variants={fadeUp}
                className="group bg-white border border-neutral-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-serif font-semibold text-neutral-900 mb-2">{v.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Nossa Trajetória</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.75rem)' }}>
              15 anos de evolução contínua
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-600 to-brand-100 -translate-x-1/2 hidden md:block"/>
            <div className="space-y-8">
              {MILESTONES.map((m,i)=>(
                <motion.div key={i} initial={{ opacity:0, x: i%2===0?-30:30 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true, amount:0.4 }} transition={{ duration:0.6, delay:0.1 }}
                  className={`flex items-center gap-6 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                  <div className={`hidden md:flex flex-1 ${i%2===0?'justify-end':'justify-start'}`}>
                    <div className={`bg-white border border-neutral-100 rounded-2xl p-5 shadow-card max-w-xs ${i%2===0?'text-right':''}`}>
                      <div className="font-serif font-bold text-brand-600 text-lg mb-1">{m.title}</div>
                      <p className="text-neutral-600 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 border-4 border-white shadow-glow shrink-0 z-10">
                    <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="hidden md:flex flex-1"/>
                  {/* Mobile */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="flex items-center justify-center w-14 h-8 rounded-full bg-brand-600 shrink-0">
                      <span className="text-white text-xs font-bold">{m.year}</span>
                    </div>
                    <div className="bg-white border border-neutral-100 rounded-xl p-4 shadow-sm flex-1">
                      <div className="font-serif font-bold text-brand-600 mb-1">{m.title}</div>
                      <p className="text-neutral-600 text-sm">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA title="Pronto para começar sua jornada de recuperação?" subtitle="Conheça nossa equipe e descubra como podemos ajudar você a viver sem dor." />
    </PageTransition>
  )
}
