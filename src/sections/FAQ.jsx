import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp } from '../animations/variants'
import { FAQ_ITEMS, CLINIC_INFO } from '../data/content'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-brand-200 bg-brand-50/50 shadow-sm'
          : 'border-neutral-100 bg-white hover:border-brand-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
      >
        <div className="flex items-start gap-3">
          <span className={`shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 transition-colors duration-200 ${
            isOpen ? 'bg-brand-600 text-white' : 'bg-neutral-100 text-neutral-400'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-semibold text-base transition-colors duration-200 ${
            isOpen ? 'text-brand-700' : 'text-neutral-800'
          }`}>
            {item.question}
          </span>
        </div>
        <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-brand-600 text-white rotate-0' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 md:px-6 pb-5 pl-[60px] md:pl-[72px]">
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #0057FF, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Dúvidas frequentes</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-4">
            Perguntas <span className="text-gradient-blue">frequentes</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos, avaliação e funcionamento da clínica.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl border border-brand-100"
        >
          <HelpCircle size={32} className="text-brand-500 mx-auto mb-3" />
          <h3 className="font-semibold text-neutral-900 text-lg mb-2">Ainda tem dúvidas?</h3>
          <p className="text-neutral-500 text-sm mb-5">
            Nossa equipe está pronta para responder qualquer pergunta pelo WhatsApp.
          </p>
          <motion.a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Tenho algumas dúvidas sobre os tratamentos`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-flex"
          >
            Falar com a equipe
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
