import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../animations/variants'
import { CLINIC_INFO } from '../data/content'

const SUBJECTS = ['Agendar avaliação','Informações sobre tratamentos','Dúvidas sobre pagamento','Outros']
const SOCIAL = [
  { icon: Instagram, href: CLINIC_INFO.instagram, label:'Instagram', color:'#E1306C' },
  { icon: Facebook,  href: CLINIC_INFO.facebook,  label:'Facebook',  color:'#1877F2' },
  { icon: Youtube,   href: CLINIC_INFO.youtube,   label:'YouTube',   color:'#FF0000' },
  { icon: Linkedin,  href: CLINIC_INFO.linkedin,  label:'LinkedIn',  color:'#0A66C2' },
]

function FloatInput({ label, type='text', name, value, onChange, required, as='input', rows=4 }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value
  const Tag = as

  return (
    <div className="relative">
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 font-medium
        ${active ? 'top-2 text-[10px] text-brand-600 font-semibold tracking-wider uppercase' : 'top-1/2 -translate-y-1/2 text-neutral-400 text-sm'}`}
        style={as==='textarea' && !active ? { top:'1rem', transform:'none' } : {}}>
        {label}{required && ' *'}
      </label>
      <Tag
        type={type} name={name} value={value} rows={rows}
        onFocus={()=>setFocused(true)}
        onBlur={()=>setFocused(false)}
        onChange={onChange}
        className={`w-full px-4 pt-6 pb-2.5 bg-neutral-50 border rounded-xl text-neutral-900 text-sm transition-all duration-200 resize-none focus:outline-none
          ${focused ? 'border-brand-600 bg-white shadow-sm' : 'border-neutral-200 hover:border-neutral-300'}`}
      />
    </div>
  )
}

export default function Contato() {
  const { ref, inView } = useScrollAnimation()
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:SUBJECTS[0], message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <PageTransition>
      <PageHero
        label="Contato"
        title={<>Fale conosco — estamos<br /><span className="text-gradient">prontos para ajudar</span></>}
        subtitle="Entre em contato pelo WhatsApp, telefone ou formulário. Respondemos em até 2 horas úteis."
        breadcrumbs={[{ label:'Contato' }]}
        cta={{ label:'WhatsApp direto', href:`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá!` }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Info */}
            <motion.div ref={ref} variants={fadeLeft} initial="hidden" animate={inView?'visible':'hidden'}
              className="lg:col-span-2 space-y-6">
              <div>
                <span className="section-label">Informações</span>
                <h2 className="font-serif font-bold text-neutral-900 mt-4 mb-2 tracking-[-0.025em]"
                  style={{ fontSize:'clamp(1.5rem,2vw+0.5rem,2rem)' }}>
                  Como chegar até nós
                </h2>
              </div>

              {[
                { Icon:Phone,   label:'Telefone',  value:CLINIC_INFO.phone, href:`tel:${CLINIC_INFO.phone}` },
                { Icon:Mail,    label:'E-mail',    value:CLINIC_INFO.email, href:`mailto:${CLINIC_INFO.email}` },
                { Icon:MapPin,  label:'Endereço',  value:CLINIC_INFO.address, href:'#' },
                { Icon:Clock,   label:'Horários',  value:CLINIC_INFO.hours, href:null },
              ].map((item,i) => (
                <motion.div key={i} initial={{ opacity:0, x:-20 }} animate={inView?{ opacity:1, x:0 }:{}} transition={{ delay:0.1+i*0.1 }}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-brand-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                    <item.Icon size={17} className="text-brand-600"/>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-0.5">{item.label}</p>
                    {item.href && item.href !== '#' ? (
                      <a href={item.href} className="text-neutral-700 text-sm hover:text-brand-600 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-neutral-700 text-sm leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp button */}
              <motion.a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de falar com a equipe`}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}
                className="flex items-center gap-3 w-full justify-center py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-2xl transition-colors shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar pelo WhatsApp
              </motion.a>

              {/* Social */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Redes Sociais</p>
                <div className="flex gap-3">
                  {SOCIAL.map(({ icon:Icon, href, label, color }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      whileHover={{ scale:1.15, y:-2 }}
                      className="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors text-neutral-600"
                      style={{ '--hover-color': color }}>
                      <Icon size={17}/>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeRight} initial="hidden" animate={inView?'visible':'hidden'}
              className="lg:col-span-3">
              <div className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-card">
                {sent ? (
                  <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={30} className="text-green-600"/>
                    </div>
                    <h3 className="font-serif font-bold text-neutral-900 text-xl mb-2">Mensagem enviada!</h3>
                    <p className="text-neutral-500 text-sm">Retornaremos em até 2 horas úteis.</p>
                    <button onClick={()=>setSent(false)} className="mt-6 btn-primary">Enviar outra mensagem</button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-serif font-bold text-neutral-900 text-xl mb-6">Envie uma mensagem</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FloatInput label="Seu nome" name="name" value={form.name} onChange={onChange} required/>
                        <FloatInput label="Telefone / WhatsApp" name="phone" value={form.phone} onChange={onChange}/>
                      </div>
                      <FloatInput label="E-mail" type="email" name="email" value={form.email} onChange={onChange} required/>
                      {/* Subject select */}
                      <div className="relative">
                        <label className="absolute left-4 top-2 text-[10px] text-brand-600 font-bold tracking-wider uppercase z-10">
                          Assunto *
                        </label>
                        <select name="subject" value={form.subject} onChange={onChange}
                          className="w-full px-4 pt-6 pb-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:border-brand-600 transition-all appearance-none">
                          {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <FloatInput label="Mensagem" name="message" value={form.message} onChange={onChange} as="textarea" rows={4} required/>
                      <motion.button type="submit" disabled={loading}
                        whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.98 }}
                        className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <motion.span animate={{ rotate:360 }} transition={{ duration:1, repeat:Infinity, ease:'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"/>
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2"><Send size={16}/>Enviar Mensagem</span>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 md:h-80 bg-neutral-100 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=400&fit=crop" alt="Localização" className="w-full h-full object-cover opacity-60"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl text-center">
            <MapPin size={22} className="text-brand-600 mx-auto mb-2"/>
            <p className="font-semibold text-neutral-900 text-sm">{CLINIC_INFO.address}</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
              className="text-brand-600 text-xs font-medium hover:underline mt-1 inline-block">
              Ver no Google Maps →
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
