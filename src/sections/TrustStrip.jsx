import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Award, Users, Stethoscope, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { STATS } from '../data/content'
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants'

const ICON_MAP = {
  award: Award,
  users: Users,
  stethoscope: Stethoscope,
  heart: Heart,
}

export default function TrustStrip() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map((stat, i) => {
            const Icon = ICON_MAP[stat.icon]
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative bg-gradient-to-br from-white to-brand-50 border border-brand-100 rounded-2xl p-6 md:p-8 text-center overflow-hidden card-hover cursor-default"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-600/10 group-hover:bg-brand-600/20 transition-colors duration-300 mb-4">
                  <Icon size={22} className="text-brand-600" />
                </div>

                {/* Counter */}
                <div className="flex items-end justify-center gap-0.5">
                  <span className="font-serif font-bold text-4xl md:text-5xl text-neutral-900 leading-none">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator="."
                        delay={i * 0.15}
                      />
                    ) : '0'}
                  </span>
                  <span className="font-bold text-2xl text-brand-600 mb-1">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-neutral-500 text-sm mt-2 font-medium">{stat.label}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
