import { useState, useMemo, useEffect, useRef, Suspense, Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Center } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, MousePointer2, RotateCcw, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

// ─── Region data ──────────────────────────────────────────────────────────────
const REGIONS = [
  {
    id: 'cervical',
    label: 'Coluna Cervical',
    sub: 'C1 – C7',
    code: 'C',
    num: '01',
    color: '#2563eb',
    colorLight: '#dbeafe',
    specialty: 'Cervicalgia',
    desc: 'A região cervical suporta o peso da cabeça e permite ampla mobilidade. É frequentemente afetada por tensão muscular, hérnias e dores irradiadas para os braços.',
    symptoms: ['Dor e rigidez no pescoço', 'Cefaleia cervicogênica', 'Dor irradiada nos braços', 'Dormência nas mãos'],
    treatments: ['Infiltrações cervicais guiadas por imagem', 'Bloqueio do nervo occipital', 'Fisioterapia manual especializada', 'Reeducação postural global'],
  },
  {
    id: 'thoracic',
    label: 'Coluna Torácica',
    sub: 'T1 – T12',
    code: 'T',
    num: '02',
    color: '#7c3aed',
    colorLight: '#ede9fe',
    specialty: 'Dores Crônicas & Postura',
    desc: 'A coluna torácica é a mais estável da espinha. Dores nessa região estão associadas a postura inadequada, condições crônicas e tensão muscular persistente.',
    symptoms: ['Dor persistente no dorso', 'Tensão interescapular', 'Rigidez ao respirar fundo', 'Desvios posturais'],
    treatments: ['Infiltrações facetárias torácicas', 'Denervação por radiofrequência', 'Terapia manual especializada', 'Análise postural computadorizada'],
  },
  {
    id: 'lumbar',
    label: 'Coluna Lombar',
    sub: 'L1 – L5',
    code: 'L',
    num: '03',
    color: '#059669',
    colorLight: '#d1fae5',
    specialty: 'Lombalgia & Hérnia de Disco',
    desc: 'A coluna lombar suporta a maior parte do peso corporal. É a região mais frequentemente afetada por hérnias de disco e lombalgia crônica no Brasil.',
    symptoms: ['Dor lombar intensa ou crônica', 'Ciática com irradiação na perna', 'Dor ao sentar ou agachar', 'Dormência nas pernas'],
    treatments: ['Infiltração epidural guiada por imagem', 'Nucleoplastia percutânea', 'Programa de reabilitação lombar', 'Cirurgia minimamente invasiva'],
  },
  {
    id: 'sacral',
    label: 'Região Sacral',
    sub: 'Sacro & Cóccix',
    code: 'S',
    num: '04',
    color: '#b45309',
    colorLight: '#fef3c7',
    specialty: 'Estenose & Dor Sacroilíaca',
    desc: 'O sacro conecta a coluna à pelve. Problemas nessa área causam estenose do canal vertebral, artrite sacroilíaca e síndrome do piriforme.',
    symptoms: ['Dor ao caminhar que melhora sentado', 'Claudicação neurogênica', 'Dormência bilateral', 'Dor na virilha e nádegas'],
    treatments: ['Infiltração sacroilíaca guiada', 'Descompressão minimamente invasiva', 'Bloqueio diagnóstico e terapêutico', 'Estabilização vertebral'],
  },
]

const REGION_COLORS = {
  cervical: new THREE.Color('#2563eb'),
  thoracic: new THREE.Color('#7c3aed'),
  lumbar:   new THREE.Color('#059669'),
  sacral:   new THREE.Color('#b45309'),
}
const BASE_COLOR = new THREE.Color('#c8d4e0')
const BLACK      = new THREE.Color(0, 0, 0)

// ─── 3D Spine Model ───────────────────────────────────────────────────────────
function SpineModel({ selected, hovered, onSelect, onHover }) {
  const { scene } = useGLTF('/assets/spine.glb')

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    clone.updateMatrixWorld(true)
    const rawBox  = new THREE.Box3().setFromObject(clone)
    const rawSize = rawBox.getSize(new THREE.Vector3())
    const maxDim  = Math.max(rawSize.x, rawSize.y, rawSize.z)
    if (maxDim > 0) clone.scale.setScalar(3.0 / maxDim)

    clone.updateMatrixWorld(true)
    const box  = new THREE.Box3().setFromObject(clone)
    const h    = box.max.y - box.min.y
    const minY = box.min.y

    clone.traverse(child => {
      if (!child.isMesh) return
      if (Array.isArray(child.material)) {
        child.material = child.material.map(m => m.clone())
      } else {
        child.material = child.material.clone()
      }
      const mb   = new THREE.Box3().setFromObject(child)
      const cy   = (mb.min.y + mb.max.y) / 2
      const relY = (cy - minY) / h

      if      (relY >= 0.78) child.userData.region = 'cervical'
      else if (relY >= 0.45) child.userData.region = 'thoracic'
      else if (relY >= 0.18) child.userData.region = 'lumbar'
      else                   child.userData.region = 'sacral'
    })
    return clone
  }, [scene])

  useEffect(() => {
    clonedScene.traverse(child => {
      if (!child.isMesh) return
      const r        = child.userData.region
      const isActive = selected === r || hovered === r
      const isDimmed = (selected || hovered) && !isActive
      const mats     = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach(mat => {
        mat.color.copy(isActive ? REGION_COLORS[r] : BASE_COLOR)
        mat.emissive.copy(isActive ? REGION_COLORS[r] : BLACK)
        mat.emissiveIntensity = isActive ? 0.12 : 0
        mat.transparent       = isDimmed
        mat.opacity           = isDimmed ? 0.2 : 1
        mat.needsUpdate       = true
      })
    })
  }, [selected, hovered, clonedScene])

  const getRegion = (e) => e.object?.userData?.region ?? null

  return (
    <Center>
      <primitive
        object={clonedScene}
        onClick={e => { e.stopPropagation(); const r = getRegion(e); if (r) onSelect(r) }}
        onPointerMove={e => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
          const r = getRegion(e); if (r) onHover(r)
        }}
        onPointerLeave={() => { document.body.style.cursor = 'auto'; onHover(null) }}
      />
    </Center>
  )
}

useGLTF.preload('/assets/spine.glb')

// ─── Error boundary ───────────────────────────────────────────────────────────
class SpineErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: false } }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-neutral-400">
        <MousePointer2 size={28} className="opacity-40" />
        <p className="text-sm">Modelo 3D indisponível neste dispositivo</p>
      </div>
    )
    return this.props.children
  }
}

function SpineLoading() {
  return (
    <mesh>
      <boxGeometry args={[0.6, 3, 0.4]} />
      <meshStandardMaterial color="#e4e4e7" opacity={0.4} transparent />
    </mesh>
  )
}

// ─── 3D Canvas ────────────────────────────────────────────────────────────────
function Spine3DViewer({ selected, hovered, onSelect, onHover }) {
  return (
    <SpineErrorBoundary>
      <div className="relative w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 38 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.85} />
          <directionalLight position={[2, 5, 4]}  intensity={1.0} />
          <directionalLight position={[-3, 2, -2]} intensity={0.3} />
          <pointLight       position={[0, -3, 2]}  intensity={0.2} color="#dde4f0" />

          <Suspense fallback={<SpineLoading />}>
            <SpineModel
              selected={selected} hovered={hovered}
              onSelect={onSelect}  onHover={onHover}
            />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI * 0.12}
            maxPolarAngle={Math.PI * 0.88}
            autoRotate={!selected && !hovered}
            autoRotateSpeed={1.4}
          />
        </Canvas>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-neutral-200/60 text-[11px] text-neutral-400 pointer-events-none select-none">
          <MousePointer2 size={11} />
          Arraste · Clique para explorar
        </div>
      </div>
    </SpineErrorBoundary>
  )
}

// ─── Region selector button ───────────────────────────────────────────────────
function RegionButton({ region, isActive, onClick, onEnter, onLeave }) {
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      whileHover={{ x: 3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left w-full transition-colors duration-200"
      style={{
        background: isActive ? `${region.color}0d` : 'transparent',
      }}
    >
      <motion.div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-all duration-300"
        animate={{
          background: isActive ? region.color : '#f4f4f5',
          color: isActive ? '#ffffff' : '#a1a1aa',
          scale: isActive ? 1.08 : 1,
        }}
      >
        {region.num}
      </motion.div>
      <div className="min-w-0">
        <p
          className="text-sm font-semibold leading-tight transition-colors duration-200 truncate"
          style={{ color: isActive ? region.color : '#3f3f46' }}
        >
          {region.label}
        </p>
        <p className="text-[11px] text-neutral-400 mt-0.5">{region.sub}</p>
      </div>
      <motion.div
        className="ml-auto shrink-0 w-1 h-6 rounded-full"
        animate={{ background: isActive ? region.color : 'transparent', opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}

// ─── Dark Info Card ───────────────────────────────────────────────────────────
function InfoCard({ region, onClose }) {
  if (!region) return null

  return (
    <motion.div
      key={region.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-neutral-950 p-7 w-full relative overflow-hidden"
    >
      {/* Watermark code */}
      <div
        className="absolute -right-3 -top-5 font-heading font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: '7rem',
          color: region.color,
          opacity: 0.07,
        }}
      >
        {region.code}
      </div>

      {/* Accent + close */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-8 h-1 rounded-full"
          style={{ background: region.color }}
        />
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          aria-label="Fechar"
        >
          <X size={12} className="text-white/60" />
        </button>
      </div>

      {/* Header */}
      <span
        className="text-[10px] font-bold uppercase tracking-[0.15em]"
        style={{ color: region.color }}
      >
        {region.sub}
      </span>
      <h3 className="font-heading font-bold text-[1.35rem] text-white mt-1 mb-0.5 leading-tight tracking-[-0.02em]">
        {region.label}
      </h3>
      <div className="flex items-center gap-1.5 mb-5">
        <Zap size={11} style={{ color: region.color }} />
        <p className="text-neutral-400 text-xs">{region.specialty}</p>
      </div>

      <p className="text-neutral-400 text-[0.8rem] leading-relaxed mb-6">
        {region.desc}
      </p>

      {/* Symptoms — chips */}
      <div className="mb-5">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-500 mb-2.5">
          Sintomas
        </p>
        <div className="flex flex-wrap gap-1.5">
          {region.symptoms.map((s, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-none"
              style={{
                background: `${region.color}12`,
                borderColor: `${region.color}25`,
                color: region.colorLight,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Treatments — numbered */}
      <div className="mb-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-500 mb-2.5">
          Tratamentos
        </p>
        <div className="space-y-2">
          {region.treatments.map((t, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span
                className="w-4.5 h-4.5 min-w-[1.125rem] min-h-[1.125rem] rounded-md flex items-center justify-center text-[9px] font-black mt-0.5 shrink-0"
                style={{ background: `${region.color}20`, color: region.color }}
              >
                {i + 1}
              </span>
              <p className="text-neutral-300 text-[0.78rem] leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        to="/especialidades"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:-translate-y-px transition-all duration-200"
        style={{ background: `linear-gradient(135deg, ${region.color}cc, ${region.color})` }}
      >
        Ver especialidade
        <ChevronRight size={13} />
      </Link>
    </motion.div>
  )
}

// ─── Hint — nothing selected ──────────────────────────────────────────────────
function HintPanel() {
  return (
    <motion.div
      key="hint"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-1 pt-4"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3 px-2">
        Regiões da Coluna
      </p>
      {REGIONS.map((r, i) => (
        <motion.div
          key={r.id}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06, duration: 0.3 }}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: r.color, opacity: 0.5 }}
          />
          <div>
            <p className="text-sm text-neutral-500 font-medium">{r.label}</p>
            <p className="text-[10px] text-neutral-400">{r.sub}</p>
          </div>
        </motion.div>
      ))}
      <p className="text-[11px] text-neutral-400 mt-3 px-3 flex items-center gap-1.5">
        <MousePointer2 size={11} />
        Clique no modelo ou em uma região
      </p>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SpineInteractive() {
  const [selected, setSelected] = useState(null)
  const [hovered,  setHovered]  = useState(null)

  const activeRegion = REGIONS.find(r => r.id === selected)
  const handleSelect = (id) => setSelected(prev => prev === id ? null : id)

  const glowColor = activeRegion?.color ?? hovered
    ? REGIONS.find(r => r.id === hovered)?.color
    : '#2563eb'

  return (
    <section
      data-header-theme="light"
      className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden"
    >
      {/* Section gradient fades */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, white, transparent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, white, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex items-center gap-1.5">
            <MousePointer2 size={11} />
            Anatomia Interativa
          </span>
          <h2
            className="font-heading font-bold text-neutral-950 tracking-[-0.03em] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw + 0.25rem, 2.875rem)' }}
          >
            Explore a{' '}
            <span className="text-gradient-blue">Coluna Vertebral</span>
          </h2>
          <p className="text-neutral-500 text-base max-w-xl mx-auto">
            Clique em cada região para conhecer os sintomas e tratamentos oferecidos pela Espinhal D.O.R.
          </p>
        </div>

        {/* ── Desktop ───────────────────────────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-[200px_1fr_360px] xl:grid-cols-[220px_1fr_380px] gap-8 xl:gap-12 items-start">

          {/* Left: region buttons */}
          <div className="flex flex-col gap-1 pt-20">
            {REGIONS.map(r => (
              <RegionButton
                key={r.id}
                region={r}
                isActive={selected === r.id || hovered === r.id}
                onClick={() => handleSelect(r.id)}
                onEnter={() => setHovered(r.id)}
                onLeave={() => setHovered(null)}
              />
            ))}
            {selected && (
              <button
                onClick={() => setSelected(null)}
                className="mt-3 flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-600 transition-colors px-3"
              >
                <RotateCcw size={11} />
                Limpar seleção
              </button>
            )}
          </div>

          {/* Center: canvas — no box, with color glow */}
          <div className="relative" style={{ height: 560 }}>
            {/* Animated glow behind model */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              animate={{
                background: `radial-gradient(ellipse 55% 65% at 50% 48%, ${glowColor}18, transparent 68%)`,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
            <Spine3DViewer
              selected={selected} hovered={hovered}
              onSelect={handleSelect} onHover={setHovered}
            />
          </div>

          {/* Right: info card or hint */}
          <div className="pt-6">
            <AnimatePresence mode="wait">
              {activeRegion
                ? <InfoCard key={activeRegion.id} region={activeRegion} onClose={() => setSelected(null)} />
                : <HintPanel key="hint" />
              }
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile ────────────────────────────────────────────────────────── */}
        <div className="lg:hidden flex flex-col items-center gap-6">

          {/* Region pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {REGIONS.map(r => {
              const isActive = selected === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.id)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border"
                  style={{
                    borderColor: isActive ? `${r.color}50` : '#e4e4e7',
                    color:       isActive ? r.color          : '#71717a',
                    background:  isActive ? `${r.color}0d`   : 'transparent',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: r.color, opacity: isActive ? 1 : 0.4 }}
                  />
                  {r.label}
                </button>
              )
            })}
          </div>

          {/* Canvas — no box */}
          <div className="w-full relative" style={{ height: 360 }}>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${glowColor}15, transparent 70%)`,
              }}
              transition={{ duration: 0.6 }}
            />
            <Spine3DViewer
              selected={selected} hovered={hovered}
              onSelect={handleSelect} onHover={setHovered}
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
