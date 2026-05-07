import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search, HelpCircle, Calendar, Stethoscope, CreditCard, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp } from '../animations/variants'
import { FAQ_CATEGORIES, CLINIC_INFO } from '../data/content'

const CATEGORY_ICONS = {
  'Agendamento & Consultas':     Calendar,
  'Tratamentos & Resultados':    Stethoscope,
  'Pagamentos & Convênios':      CreditCard,
  'Estrutura & Localização':     MapPin,
}

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div variants={fadeUp}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen?'border-brand-200 bg-brand-50/40 shadow-sm':'border-neutral-100 bg-white hover:border-brand-100'}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left gap-4">
        <div className="flex items-start gap-3">
          <span className={`shrink-0 w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center mt-0.5 transition-colors ${isOpen?'bg-brand-600 text-white':'bg-neutral-100 text-neutral-400'}`}>
            {String(index+1).padStart(2,'0')}
          </span>
          <span className={`font-semibold text-sm leading-snug transition-colors ${isOpen?'text-brand-700':'text-neutral-800'}`}>
            {item.question}
          </span>
        </div>
        <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isOpen?'bg-brand-600 text-white':'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}>
          {isOpen ? <Minus size={13}/> : <Plus size={13}/>}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
            transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}>
            <div className="px-5 pb-5 pl-[60px]">
              <p className="text-neutral-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [search, setSearch] = useState('')
  const [openKey, setOpenKey] = useState(null)
  const { ref, inView } = useScrollAnimation({ threshold:0.05 })

  const allItems = FAQ_CATEGORIES.flatMap((cat, ci) =>
    cat.items.map((item, ii) => ({ ...item, catIndex:ci, itemIndex:ii, key:`${ci}-${ii}` }))
  )

  const filtered = search.trim()
    ? allItems.filter(item =>
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase()))
    : null

  const toggle = (key) => setOpenKey(prev => prev === key ? null : key)

  return (
    <PageTransition>
      <PageHero
        label="FAQ"
        title={<>Respostas para suas<br /><span className="text-gradient">dúvidas mais comuns</span></>}
        subtitle="Encontre rapidamente as respostas que você precisa sobre nossos tratamentos, agendamentos e funcionamento da clínica."
        breadcrumbs={[{ label:'Perguntas Frequentes' }]}
        cta={{ label:'Falar com especialista', href:`https://wa.me/${CLINIC_INFO.whatsapp}?text=Tenho algumas dúvidas` }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search */}
          <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{ opacity:1, y:0 }:{}} transition={{ duration:0.6 }}
            className="relative mb-12">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"/>
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Buscar pergunta..."
              className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-600 focus:bg-white transition-all text-sm"/>
            {search && (
              <button onClick={()=>setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs font-medium">
                Limpar
              </button>
            )}
          </motion.div>

          {/* Search results */}
          {filtered ? (
            <div>
              <p className="text-neutral-500 text-sm mb-5">{filtered.length} resultado(s) para "{search}"</p>
              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle size={40} className="text-neutral-200 mx-auto mb-3"/>
                  <p className="text-neutral-500">Nenhuma pergunta encontrada.</p>
                  <p className="text-sm text-neutral-400 mt-1">Tente outros termos ou fale conosco pelo WhatsApp.</p>
                </div>
              ) : (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                  {filtered.map(item => (
                    <FAQItem key={item.key} item={item} index={item.itemIndex} isOpen={openKey===item.key} onToggle={()=>toggle(item.key)}/>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            // Categorized view
            <div className="space-y-10">
              {FAQ_CATEGORIES.map((cat, ci) => {
                const Icon = CATEGORY_ICONS[cat.category] || HelpCircle
                return (
                  <motion.div key={ci} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.2 }} transition={{ duration:0.6 }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                        <Icon size={18} className="text-brand-600"/>
                      </div>
                      <h3 className="font-serif font-bold text-neutral-900 text-lg">{cat.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {cat.items.map((item,ii) => {
                        const key = `${ci}-${ii}`
                        return <FAQItem key={key} item={item} index={ii} isOpen={openKey===key} onToggle={()=>toggle(key)}/>
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Still have questions */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            className="mt-12 text-center p-8 bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl border border-brand-100">
            <HelpCircle size={32} className="text-brand-500 mx-auto mb-3"/>
            <h3 className="font-serif font-semibold text-neutral-900 text-lg mb-2">Ainda tem dúvidas?</h3>
            <p className="text-neutral-500 text-sm mb-5">Nossa equipe responde em até 2 horas úteis.</p>
            <a href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Tenho algumas dúvidas`} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex">
              Falar com a equipe
            </a>
          </motion.div>
        </div>
      </section>

      <BottomCTA title="Pronto para agendar sua avaliação?" subtitle="Todas as suas dúvidas foram respondidas? Dê o próximo passo." ctaLabel="Agendar Agora" />
    </PageTransition>
  )
}
