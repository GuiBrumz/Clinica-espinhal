import { motion } from 'framer-motion'
import { Award, GraduationCap, Star, Quote } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, scaleIn } from '../animations/variants'
import { DOCTOR, CLINIC_INFO } from '../data/content'

export default function ResponsavelTecnico() {
  const { ref: s1, inView: v1 } = useScrollAnimation()
  const { ref: s2, inView: v2 } = useScrollAnimation({ threshold:0.1 })
  const { ref: s3, inView: v3 } = useScrollAnimation({ threshold:0.1 })

  return (
    <PageTransition>
      <PageHero
        label="Responsável Técnico"
        title={<>Conheça o especialista<br /><span className="text-gradient">por trás dos resultados</span></>}
        subtitle="Formação internacional, 15 anos de especialização e um compromisso inabalável com a excelência e o cuidado humanizado."
        image={DOCTOR.imageWide}
        breadcrumbs={[{ label:'Responsável Técnico' }]}
        cta={{ label:'Agendar Consulta', href:`https://wa.me/${CLINIC_INFO.whatsapp}?text=Gostaria de agendar uma consulta com o Dr. André Cavalcanti` }}
      />

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image */}
            <motion.div ref={s1} variants={fadeLeft} initial="hidden" animate={v1?'visible':'hidden'} className="relative">
              <div className="sticky top-28">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 opacity-70"/>
                  </div>
                  <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                    <img src={DOCTOR.image} alt={DOCTOR.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" loading="eager"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent"/>
                    <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[0,1,2,3,4].map(i=><Star key={i} size={11} className="text-yellow-400 fill-yellow-400"/>)}
                        <span className="text-yellow-200 text-xs ml-1">4.98</span>
                      </div>
                      <p className="text-white font-serif font-bold">{DOCTOR.name}</p>
                      <p className="text-blue-200 text-xs mt-0.5">{DOCTOR.title}</p>
                      <p className="text-blue-300/70 text-xs mt-0.5">{DOCTOR.crm}</p>
                    </div>
                  </div>
                  {/* Achievement badges */}
                  <motion.div initial={{ opacity:0, x:-20 }} animate={v1?{ opacity:1, x:0 }:{}} transition={{ delay:0.5 }}
                    className="absolute -left-6 top-1/3 bg-white rounded-xl px-3 py-2 shadow-lg border border-neutral-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center"><Award size={12} className="text-white"/></div>
                      <span className="text-xs font-semibold text-neutral-700">JHU Fellowship</span>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity:0, x:20 }} animate={v1?{ opacity:1, x:0 }:{}} transition={{ delay:0.7 }}
                    className="absolute -right-6 top-1/4 bg-brand-600 rounded-xl px-3 py-2 shadow-glow text-white">
                    <div className="text-xs font-semibold">15+ anos</div>
                    <div className="text-blue-200 text-xs">de especialização</div>
                  </motion.div>
                </div>

                {/* Achievements grid */}
                <motion.div initial={{ opacity:0, y:20 }} animate={v1?{ opacity:1, y:0 }:{}} transition={{ delay:0.4, duration:0.6 }}
                  className="grid grid-cols-2 gap-3 mt-6">
                  {DOCTOR.achievements.map((a,i)=>(
                    <div key={i} className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-4 text-center">
                      <div className="font-serif font-extrabold text-brand-600 text-xl tracking-[-0.04em]">{a.number}</div>
                      <div className="text-neutral-500 text-xs mt-0.5">{a.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Bio & Certs */}
            <motion.div ref={s1} variants={fadeRight} initial="hidden" animate={v1?'visible':'hidden'} className="space-y-8">
              <div>
                <span className="section-label">Perfil Profissional</span>
                <h2 className="font-serif font-bold text-neutral-900 mt-4 mb-1 tracking-[-0.025em]"
                  style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.5rem)' }}>{DOCTOR.name}</h2>
                <p className="text-brand-600 font-semibold">{DOCTOR.title}</p>
              </div>

              {DOCTOR.bio.map((para,i) => (
                <p key={i} className="text-neutral-600 leading-relaxed">{para}</p>
              ))}

              {/* Philosophy quote */}
              <div className="border-l-4 border-brand-600 pl-6 py-2">
                <Quote size={20} className="text-brand-200 mb-2"/>
                <p className="font-serif text-neutral-800 text-lg italic leading-relaxed">
                  {DOCTOR.philosophy.replace(/"/g,'')}
                </p>
              </div>

              {/* Specialties chips */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Áreas de Atuação</p>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.specialties.map((s,i) => (
                    <span key={i} className="px-3 py-1.5 bg-brand-50 text-brand-700 text-xs font-medium rounded-lg border border-brand-100">{s}</span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={16} className="text-brand-600"/>
                  <span className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">Certificações & Filiações</span>
                </div>
                <div className="space-y-2.5">
                  {DOCTOR.certifications.map((cert,i) => (
                    <motion.div key={i} initial={{ opacity:0, x:20 }} animate={v1?{ opacity:1, x:0 }:{}} transition={{ delay:0.3+i*0.08 }}
                      className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-600"/>
                      </div>
                      <span className="text-neutral-700 text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={s2} initial={{ opacity:0, y:24 }} animate={v2?{ opacity:1, y:0 }:{}} transition={{ duration:0.65 }} className="text-center mb-12">
            <span className="section-label">Formação Acadêmica</span>
            <h2 className="font-serif font-bold text-neutral-900 mt-4 tracking-[-0.025em]"
              style={{ fontSize:'clamp(1.875rem,3vw+0.5rem,2.5rem)' }}>
              Uma trajetória de <span className="text-gradient-blue">excelência</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate={v2?'visible':'hidden'} className="space-y-4">
            {DOCTOR.education.map((edu,i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex gap-5 items-start bg-white border border-neutral-100 rounded-2xl p-5 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all">
                <div className="w-14 h-12 rounded-xl bg-brand-600 flex items-center justify-center shrink-0 shadow-glow">
                  <span className="text-white font-bold text-xs">{edu.year}</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-neutral-900 mb-0.5">{edu.title}</h4>
                  <p className="text-brand-600 text-sm font-medium">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <BottomCTA title={`Agende uma consulta com ${DOCTOR.name}`} subtitle="Diagnóstico preciso e tratamento personalizado por quem mais entende de coluna." ctaLabel="Agendar Consulta" />
    </PageTransition>
  )
}
