import { motion } from 'framer-motion'
import { HeartHandshake, Cpu, GraduationCap, ScanLine, Building2, Layers } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft } from '../animations/variants'
import { DIFFERENTIALS } from '../data/content'

const ICON_MAP = {
  'heart-handshake': HeartHandshake,
  'cpu': Cpu,
  'graduation-cap': GraduationCap,
  'scan': ScanLine,
  'building': Building2,
  'layers': Layers,
}

export default function Differentials() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: imgRef, inView: imgInView } = useScrollAnimation()

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #001a5c 0%, #0040cc 50%, #0057FF 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #93c5fd, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label-white">Por que nos escolher</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
            O que nos torna <span className="text-gradient">diferentes</span>
          </h2>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Combinamos tecnologia de ponta, equipe especializada e atendimento humanizado
            para entregar resultados que transformam vidas.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-4"
          >
            {DIFFERENTIALS.map((diff, i) => {
              const Icon = ICON_MAP[diff.icon] || HeartHandshake
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass rounded-2xl p-5 group hover:bg-white/15 transition-all duration-300 card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-200 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-sm">{diff.title}</h4>
                  <p className="text-blue-200/70 text-xs leading-relaxed">{diff.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Image + overlay */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[560px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=933&fit=crop"
                alt="Tecnologia e cuidado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/20 to-transparent" />

              {/* Overlay cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imgInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute top-6 left-6 glass rounded-xl p-3 max-w-[170px]"
              >
                <div className="text-yellow-400 text-xl mb-1">🔬</div>
                <p className="text-white text-xs font-semibold">Tecnologia de ponta</p>
                <p className="text-blue-200 text-xs mt-0.5">Diagnóstico por imagem 3D</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={imgInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5"
              >
                <p className="text-blue-200 text-xs mb-2 uppercase tracking-widest font-semibold">Nossa missão</p>
                <p className="text-white text-sm leading-relaxed italic font-serif">
                  "Devolver qualidade de vida e movimento com o mais alto nível de medicina espinhal disponível."
                </p>
                <p className="text-blue-300 text-xs mt-3">— Dr. André Cavalcanti</p>
              </motion.div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={imgInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              className="absolute -right-6 top-1/3 glass rounded-2xl p-4 text-center min-w-[110px] shadow-xl"
            >
              <div className="font-serif font-bold text-white text-3xl">98%</div>
              <div className="text-blue-200 text-xs mt-1 leading-tight">de satisfação<br />dos pacientes</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
