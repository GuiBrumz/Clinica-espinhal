import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, MousePointer2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// ─── Region data ──────────────────────────────────────────────────────────────
const REGIONS = [
  {
    id: 'cervical',
    label: 'Coluna Cervical',
    sub: 'C1 – C7',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    specialty: 'Cervicalgia',
    desc: 'A região cervical suporta o peso da cabeça e permite ampla mobilidade. É frequentemente afetada por tensão muscular, hérnias e dores irradiadas para os braços.',
    symptoms: ['Dor e rigidez no pescoço', 'Cefaleia de origem cervical', 'Dor irradiada para os braços', 'Dormência nas mãos e dedos'],
    treatments: ['Infiltrações cervicais guiadas por imagem', 'Bloqueio do nervo occipital', 'Fisioterapia manual especializada', 'Reeducação postural global'],
  },
  {
    id: 'thoracic',
    label: 'Coluna Torácica',
    sub: 'T1 – T12',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    specialty: 'Dores Crônicas & Postura',
    desc: 'A coluna torácica é a mais estável da espinha. Dores nessa região estão associadas a postura inadequada, condições crônicas e tensão muscular persistente.',
    symptoms: ['Dor persistente no dorso', 'Tensão muscular interescapular', 'Rigidez ao respirar fundo', 'Desvios posturais compensatórios'],
    treatments: ['Infiltrações facetárias torácicas', 'Denervação por radiofrequência', 'Pilates clínico supervisionado', 'Análise postural computadorizada'],
  },
  {
    id: 'lumbar',
    label: 'Coluna Lombar',
    sub: 'L1 – L5',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    specialty: 'Lombalgia & Hérnia de Disco',
    desc: 'A coluna lombar suporta a maior parte do peso corporal. É a região mais frequentemente afetada por hérnias de disco e lombalgia crônica no Brasil.',
    symptoms: ['Dor lombar intensa ou crônica', 'Ciática — dor que irradia pela perna', 'Dor ao sentar, agachar ou torcer', 'Dormência ou fraqueza nas pernas'],
    treatments: ['Infiltração epidural guiada por imagem', 'Nucleoplastia percutânea', 'Programa de reabilitação lombar', 'Cirurgia minimamente invasiva'],
  },
  {
    id: 'sacral',
    label: 'Região Sacral',
    sub: 'Sacro & Cóccix',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.25)',
    specialty: 'Estenose & Dor Sacroilíaca',
    desc: 'O sacro conecta a coluna à pelve. Problemas nessa área causam estenose do canal vertebral, artrite sacroilíaca e síndrome do piriforme.',
    symptoms: ['Dor ao caminhar que melhora ao sentar', 'Claudicação neurogênica', 'Dormência bilateral nos membros', 'Dor na virilha e nádegas'],
    treatments: ['Infiltração sacroilíaca guiada', 'Descompressão minimamente invasiva', 'Bloqueio diagnóstico e terapêutico', 'Estabilização vertebral'],
  },
]

// ─── Build vertebrae list ─────────────────────────────────────────────────────
const CX = 100  // center X of the SVG (viewBox width = 200)

function buildVertebrae() {
  const list = []
  let y = 24

  // Cervical C1–C7 — smaller vertebrae
  for (let i = 0; i < 7; i++) {
    const bw = 38 + i * 2.2
    const bh = 12
    const dh = 7
    list.push({ region: 'cervical', y, bw, bh, dh, ww: 16 + i, wh: 8 })
    y += bh + dh
  }

  // Thoracic T1–T12 — medium
  for (let i = 0; i < 12; i++) {
    const bw = 54 + i * 0.4
    const bh = 13
    const dh = 7
    list.push({ region: 'thoracic', y, bw, bh, dh, ww: 20, wh: 9 })
    y += bh + dh
  }

  // Lumbar L1–L5 — larger
  for (let i = 0; i < 5; i++) {
    const bw = 65 + i * 2.5
    const bh = 16
    const dh = 10
    list.push({ region: 'lumbar', y, bw, bh, dh, ww: 22, wh: 12 })
    y += bh + dh
  }

  const sacralY = y
  return { list, sacralY, totalH: sacralY + 75 }
}

const { list: VERTEBRAE, sacralY: SACRAL_Y, totalH: SVG_H } = buildVertebrae()

// Region Y-bounds for label positioning
const REGION_BOUNDS = REGIONS.reduce((acc, r) => {
  const verts = VERTEBRAE.filter(v => v.region === r.id)
  if (verts.length) {
    acc[r.id] = {
      y1: verts[0].y,
      y2: verts.at(-1).y + verts.at(-1).bh + verts.at(-1).dh,
    }
  } else {
    // sacral
    acc[r.id] = { y1: SACRAL_Y, y2: SACRAL_Y + 68 }
  }
  return acc
}, {})

// ─── Spine SVG ────────────────────────────────────────────────────────────────
function SpineSVG({ selected, hovered, onSelect, onHover }) {
  return (
    <svg
      viewBox={`0 0 200 ${SVG_H}`}
      style={{ height: SVG_H, width: 'auto' }}
      className="flex-shrink-0"
      aria-label="Diagrama interativo da coluna vertebral"
    >
      <defs>
        {REGIONS.map(r => (
          <filter key={r.id} id={`glow-${r.id}`} x="-30%" y="-10%" width="160%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {/* Spinal cord dashed line */}
      <line
        x1={CX} y1={20} x2={CX} y2={SVG_H - 20}
        stroke="rgba(148,163,184,0.25)" strokeWidth={1.5} strokeDasharray="4 6"
      />

      {/* Vertebrae */}
      {VERTEBRAE.map((v, i) => {
        const region = REGIONS.find(r => r.id === v.region)
        const isActive = selected === v.region || hovered === v.region
        const isDimmed = (selected || hovered) && !isActive
        const col = isActive ? region.color : '#94a3b8'
        const discCol = isActive ? region.color + '55' : '#e2e8f0'
        const op = isDimmed ? 0.18 : 1

        return (
          <g
            key={i}
            onClick={() => onSelect(v.region)}
            onMouseEnter={() => onHover(v.region)}
            onMouseLeave={() => onHover(null)}
            className="cursor-pointer"
            style={{ opacity: op, transition: 'opacity 0.25s' }}
            filter={isActive ? `url(#glow-${v.region})` : undefined}
          >
            {/* Left transverse process */}
            <ellipse
              cx={CX - v.bw / 2 - v.ww * 0.45}
              cy={v.y + v.bh / 2}
              rx={v.ww * 0.55}
              ry={v.wh / 2}
              fill={col}
              opacity={0.70}
              style={{ transition: 'fill 0.25s' }}
            />
            {/* Right transverse process */}
            <ellipse
              cx={CX + v.bw / 2 + v.ww * 0.45}
              cy={v.y + v.bh / 2}
              rx={v.ww * 0.55}
              ry={v.wh / 2}
              fill={col}
              opacity={0.70}
              style={{ transition: 'fill 0.25s' }}
            />
            {/* Spinous process (nub above body) */}
            <rect
              x={CX - 3.5} y={v.y - 4}
              width={7} height={5}
              rx={2}
              fill={col}
              opacity={0.5}
              style={{ transition: 'fill 0.25s' }}
            />
            {/* Vertebral body */}
            <rect
              x={CX - v.bw / 2} y={v.y}
              width={v.bw} height={v.bh}
              rx={3.5}
              fill={col}
              style={{ transition: 'fill 0.25s' }}
            />
            {/* Pedicle openings (foramina hint) */}
            <ellipse cx={CX - v.bw * 0.28} cy={v.y + v.bh / 2} rx={v.bw * 0.07} ry={v.bh * 0.25}
              fill="rgba(255,255,255,0.22)" />
            <ellipse cx={CX + v.bw * 0.28} cy={v.y + v.bh / 2} rx={v.bw * 0.07} ry={v.bh * 0.25}
              fill="rgba(255,255,255,0.22)" />
            {/* Intervertebral disc */}
            {v.dh > 0 && (
              <rect
                x={CX - v.bw * 0.42} y={v.y + v.bh}
                width={v.bw * 0.84} height={v.dh}
                rx={2}
                fill={discCol}
                style={{ transition: 'fill 0.25s' }}
              />
            )}
          </g>
        )
      })}

      {/* Sacrum */}
      {(() => {
        const r = REGIONS.find(r => r.id === 'sacral')
        const isActive = selected === 'sacral' || hovered === 'sacral'
        const isDimmed = (selected || hovered) && !isActive
        const col = isActive ? r.color : '#94a3b8'
        const tw = 74, bw2 = 46, h = 58
        return (
          <g
            onClick={() => onSelect('sacral')}
            onMouseEnter={() => onHover('sacral')}
            onMouseLeave={() => onHover(null)}
            className="cursor-pointer"
            style={{ opacity: isDimmed ? 0.18 : 1, transition: 'opacity 0.25s' }}
            filter={isActive ? `url(#glow-sacral)` : undefined}
          >
            <path
              d={`M ${CX - tw / 2} ${SACRAL_Y} L ${CX + tw / 2} ${SACRAL_Y} L ${CX + bw2 / 2} ${SACRAL_Y + h} L ${CX - bw2 / 2} ${SACRAL_Y + h} Z`}
              fill={col}
              style={{ transition: 'fill 0.25s' }}
            />
            {/* Foramina */}
            {[0.28, 0.52, 0.76].map((t, j) => (
              <g key={j}>
                <ellipse cx={CX - 11} cy={SACRAL_Y + h * t} rx={4.5} ry={2.8} fill="rgba(255,255,255,0.25)" />
                <ellipse cx={CX + 11} cy={SACRAL_Y + h * t} rx={4.5} ry={2.8} fill="rgba(255,255,255,0.25)" />
              </g>
            ))}
            {/* Coccyx */}
            <path
              d={`M ${CX - 12} ${SACRAL_Y + h} Q ${CX - 6} ${SACRAL_Y + h + 14} ${CX} ${SACRAL_Y + h + 12} Q ${CX + 6} ${SACRAL_Y + h + 14} ${CX + 12} ${SACRAL_Y + h}`}
              fill="none" stroke={col} strokeWidth={8} strokeLinecap="round"
              style={{ transition: 'stroke 0.25s' }}
            />
          </g>
        )
      })()}
    </svg>
  )
}

// ─── Info Card ────────────────────────────────────────────────────────────────
function InfoCard({ region, onClose }) {
  if (!region) return null
  return (
    <motion.div
      key={region.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border p-7 lg:p-8 w-full"
      style={{ borderColor: region.border, background: region.bg }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: region.color }}>
            {region.sub}
          </span>
          <h3 className="font-serif font-bold text-2xl text-neutral-900 mt-0.5">{region.label}</h3>
          <p className="text-sm font-medium text-neutral-500 mt-0.5">{region.specialty}</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors mt-1 shrink-0"
          aria-label="Fechar"
        >
          <X size={13} className="text-neutral-500" />
        </button>
      </div>

      <p className="text-neutral-600 text-sm leading-relaxed mb-6">{region.desc}</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-7">
        {/* Symptoms */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">Sintomas</p>
          <ul className="space-y-2">
            {region.symptoms.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: region.color }} />
                {s}
              </li>
            ))}
          </ul>
        </div>
        {/* Treatments */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">Tratamentos</p>
          <ul className="space-y-2">
            {region.treatments.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color: region.color }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        to="/especialidades"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:-translate-y-px hover:opacity-90"
        style={{ backgroundColor: region.color }}
      >
        Ver especialidade completa
        <ChevronRight size={13} />
      </Link>
    </motion.div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function SpineInteractive() {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered]   = useState(null)

  const activeRegion = REGIONS.find(r => r.id === selected)

  const handleSelect = (id) => setSelected(prev => prev === id ? null : id)

  return (
    <section data-header-theme="light" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.025] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0057FF, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex items-center gap-1.5">
            <MousePointer2 size={11} />
            Anatomia Interativa
          </span>
          <h2 className="font-serif font-bold text-neutral-900 tracking-[-0.03em] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}>
            Explore a{' '}
            <span className="text-gradient-blue">Coluna Vertebral</span>
          </h2>
          <p className="text-neutral-500 text-base max-w-xl mx-auto">
            Clique em cada região para conhecer os sintomas e tratamentos oferecidos pela Espinhal D.O.R.
          </p>
        </div>

        {/* ── Desktop layout ─────────────────────────────────────────── */}
        <div className="hidden lg:flex items-start justify-center gap-10 xl:gap-16">

          {/* Left: region labels */}
          <div className="relative shrink-0" style={{ height: SVG_H }}>
            {REGIONS.map(r => {
              const b = REGION_BOUNDS[r.id]
              const midPct = ((b.y1 + b.y2) / 2 / SVG_H) * 100
              const isActive = selected === r.id || hovered === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.id)}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute right-0 flex items-center gap-3 group"
                  style={{ top: `${midPct}%`, transform: 'translateY(-50%)' }}
                >
                  <div className="text-right">
                    <p className="text-sm font-semibold transition-colors duration-200"
                      style={{ color: isActive ? r.color : '#94a3b8' }}>
                      {r.label}
                    </p>
                    <p className="text-[11px] text-neutral-400">{r.sub}</p>
                  </div>
                  {/* Connector dot */}
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-200 shrink-0"
                    style={{ backgroundColor: isActive ? r.color : '#cbd5e1', transform: isActive ? 'scale(1.4)' : 'scale(1)' }}
                  />
                </button>
              )
            })}
          </div>

          {/* Center: SVG spine */}
          <SpineSVG
            selected={selected}
            hovered={hovered}
            onSelect={handleSelect}
            onHover={setHovered}
          />

          {/* Right: info card or placeholder */}
          <div className="flex-1 max-w-sm xl:max-w-md pt-8">
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <InfoCard key={activeRegion.id} region={activeRegion} onClose={() => setSelected(null)} />
              ) : (
                <motion.div
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-64 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center">
                    <MousePointer2 size={22} className="text-neutral-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-700 mb-1">Selecione uma região</p>
                    <p className="text-neutral-400 text-sm">Clique em qualquer segmento da coluna para ver detalhes</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full mt-2">
                    {REGIONS.map(r => (
                      <button
                        key={r.id}
                        onClick={() => handleSelect(r.id)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all hover:-translate-y-px text-left"
                        style={{ borderColor: r.border, color: r.color, background: r.bg }}
                      >
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                        {r.label}
                        <span className="ml-auto text-[11px] text-neutral-400">{r.sub}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile layout ──────────────────────────────────────────── */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Region buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {REGIONS.map(r => (
              <button
                key={r.id}
                onClick={() => handleSelect(r.id)}
                className="px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
                style={{
                  borderColor: selected === r.id ? r.color : r.border,
                  color: r.color,
                  background: selected === r.id ? r.bg : 'transparent',
                  boxShadow: selected === r.id ? `0 0 0 2px ${r.color}40` : 'none',
                }}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Spine (smaller on mobile) */}
          <div className="overflow-hidden" style={{ maxHeight: '420px' }}>
            <SpineSVG
              selected={selected}
              hovered={hovered}
              onSelect={handleSelect}
              onHover={setHovered}
            />
          </div>

          {/* Info card */}
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {activeRegion && (
                <InfoCard key={activeRegion.id} region={activeRegion} onClose={() => setSelected(null)} />
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
