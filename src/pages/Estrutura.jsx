import { useState } from 'react'
import { MapPin, Clock, ExternalLink, Navigation, Car } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import BottomCTA from '../components/BottomCTA'
import { CLINIC_INFO } from '../data/content'

const mkMap = (address) => ({
  mapUrl:   `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
})

const LOCATION_CARDS = [
  {
    tag: 'Unidade 1', city: 'Sapucaia do Sul', street: 'Av. João Pereira de Vargas, 500',
    neighborhood: 'Centro', state: 'RS', complement: null,
    parking: 'Desconto em estacionamento parceiro',
    image: 'https://sapucaiaclinicas.com.br/wp-content/uploads/2024/05/2024-04-04.jpg',
    ...mkMap('Av. João Pereira de Vargas, 500, Centro, Sapucaia do Sul, RS'),
  },
  {
    tag: 'Unidade 2', city: 'Gravataí', street: 'R. Pref. Ary Tubbs, 665',
    neighborhood: 'Centro', state: 'RS', complement: 'Sala 502 · 5º andar',
    parking: 'Sem estacionamento próprio',
    ...mkMap('R. Pref. Ary Tubbs, 665, Centro, Gravataí, RS'),
  },
  {
    tag: 'Unidade 3', city: 'Porto Alegre', street: 'Av. Brasil, 888',
    neighborhood: 'Bairro Navegantes', state: 'RS', complement: null,
    parking: 'Estacionamento disponível',
    ...mkMap('Av. Brasil, 888, Bairro Navegantes, Porto Alegre, RS'),
  },
]

export default function Estrutura() {
  const [selectedLoc, setSelectedLoc] = useState(0)

  return (
    <PageTransition>
      <PageHero
        label="Localização"
        title={<>Nossas unidades no<br /><span className="text-gradient">Rio Grande do Sul</span></>}
        subtitle="Três unidades estrategicamente localizadas para atender você com mais comodidade."
        breadcrumbs={[{ label: 'Localização' }]}
        waveColor="#09090b"
        cta={{ label: 'Agendar pelo WhatsApp', href: `https://wa.me/${CLINIC_INFO.whatsapp}?text=Olá! Gostaria de agendar uma avaliação.` }}
      />

      <section className="py-20 lg:py-28 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #93c5fd 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #2563eb, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">

            {/* Cards */}
            <div className="lg:col-span-2 space-y-3">
              {LOCATION_CARDS.map((loc, i) => (
                <button key={i} onClick={() => setSelectedLoc(i)}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                    selectedLoc === i
                      ? 'border-brand-500 shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_8px_32px_rgba(37,99,235,0.2)]'
                      : 'border-white/8 hover:border-white/18'
                  }`}>
                  <div className={`p-5 transition-all duration-300 ${selectedLoc === i ? 'bg-gradient-to-br from-brand-900/70 to-brand-800/40' : 'bg-white/[0.04] hover:bg-white/[0.07]'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${selectedLoc === i ? 'bg-brand-500 text-white' : 'bg-white/10 text-neutral-500'}`}>{i + 1}</div>
                          <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${selectedLoc === i ? 'text-brand-400' : 'text-neutral-600'}`}>{loc.tag}</span>
                        </div>
                        <h3 className={`font-heading font-bold text-base mb-1 transition-colors ${selectedLoc === i ? 'text-white' : 'text-neutral-300'}`}>{loc.city}</h3>
                        <p className={`text-sm leading-snug transition-colors ${selectedLoc === i ? 'text-blue-200/80' : 'text-neutral-500'}`}>{loc.street}</p>
                        {loc.complement && <p className={`text-xs mt-0.5 transition-colors ${selectedLoc === i ? 'text-blue-300/60' : 'text-neutral-600'}`}>{loc.complement}</p>}
                        <p className={`text-xs mt-0.5 transition-colors ${selectedLoc === i ? 'text-blue-300/60' : 'text-neutral-600'}`}>{loc.neighborhood} · {loc.state}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${selectedLoc === i ? 'bg-brand-500/25 border border-brand-400/30' : 'bg-white/5 border border-white/8'}`}>
                        <Navigation size={13} className={selectedLoc === i ? 'text-brand-400' : 'text-neutral-600'} />
                      </div>
                    </div>
                    {selectedLoc === i && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5 text-neutral-500 text-xs"><Car size={11} /><span>{loc.parking}</span></div>
                        <a href={loc.mapsLink} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 text-xs font-semibold transition-colors shrink-0">
                          Abrir no Maps <ExternalLink size={10} />
                        </a>
                      </div>
                    )}
                  </div>
                </button>
              ))}

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Horário de Funcionamento</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{CLINIC_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="lg:col-span-3">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ height: '520px' }}>
                <iframe key={selectedLoc} src={LOCATION_CARDS[selectedLoc].mapUrl}
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title={`Mapa – ${LOCATION_CARDS[selectedLoc].city}`} />

                {LOCATION_CARDS[selectedLoc].image && (
                  <div className="absolute top-4 right-4 w-36 h-24 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
                    <img src={LOCATION_CARDS[selectedLoc].image} alt={`Unidade ${LOCATION_CARDS[selectedLoc].city}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-1.5 left-2 text-white text-[10px] font-semibold drop-shadow">Fachada</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <div className="bg-neutral-950/90 backdrop-blur-md text-white rounded-2xl px-4 py-3 border border-white/10 shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shrink-0" />
                      <span className="text-sm font-bold">{LOCATION_CARDS[selectedLoc].city}</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed pl-4">
                      {LOCATION_CARDS[selectedLoc].street}
                      {LOCATION_CARDS[selectedLoc].complement && <><br />{LOCATION_CARDS[selectedLoc].complement}</>}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <a href={LOCATION_CARDS[selectedLoc].mapsLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-neutral-950/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors shadow-xl">
                    <MapPin size={12} className="text-brand-400" />
                    Abrir no Google Maps
                    <ExternalLink size={10} className="text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BottomCTA
        title="Venha nos visitar"
        subtitle="Estamos prontos para atendê-lo em uma das nossas três unidades no Rio Grande do Sul."
        ctaLabel="Agendar Avaliação"
      />
    </PageTransition>
  )
}
