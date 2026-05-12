import { useState, useMemo, useEffect, useRef, Suspense, Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Center } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, MousePointer2, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'

// ─── Region data ──────────────────────────────────────────────────────────────
const REGIONS = [
  {
    id: 'cervical',
    label: 'Coluna Cervical',
    sub: 'C1 – C7',
    color: '#2563eb',
    specialty: 'Cervicalgia',
    desc: 'A região cervical suporta o peso da cabeça e permite ampla mobilidade. É frequentemente afetada por tensão muscular, hérnias e dores irradiadas para os braços.',
    symptoms: ['Dor e rigidez no pescoço', 'Cefaleia de origem cervical', 'Dor irradiada para os braços', 'Dormência nas mãos e dedos'],
    treatments: ['Infiltrações cervicais guiadas por imagem', 'Bloqueio do nervo occipital', 'Fisioterapia manual especializada', 'Reeducação postural global'],
  },
  {
    id: 'thoracic',
    label: 'Coluna Torácica',
    sub: 'T1 – T12',
    color: '#7c3aed',
    specialty: 'Dores Crônicas & Postura',
    desc: 'A coluna torácica é a mais estável da espinha. Dores nessa região estão associadas a postura inadequada, condições crônicas e tensão muscular persistente.',
    symptoms: ['Dor persistente no dorso', 'Tensão muscular interescapular', 'Rigidez ao respirar fundo', 'Desvios posturais compensatórios'],
    treatments: ['Infiltrações facetárias torácicas', 'Denervação por radiofrequência', 'Pilates clínico supervisionado', 'Análise postural computadorizada'],
  },
  {
    id: 'lumbar',
    label: 'Coluna Lombar',
    sub: 'L1 – L5',
    color: '#059669',
    specialty: 'Lombalgia & Hérnia de Disco',
    desc: 'A coluna lombar suporta a maior parte do peso corporal. É a região mais frequentemente afetada por hérnias de disco e lombalgia crônica no Brasil.',
    symptoms: ['Dor lombar intensa ou crônica', 'Ciática — dor que irradia pela perna', 'Dor ao sentar, agachar ou torcer', 'Dormência ou fraqueza nas pernas'],
    treatments: ['Infiltração epidural guiada por imagem', 'Nucleoplastia percutânea', 'Programa de reabilitação lombar', 'Cirurgia minimamente invasiva'],
  },
  {
    id: 'sacral',
    label: 'Região Sacral',
    sub: 'Sacro & Cóccix',
    color: '#b45309',
    specialty: 'Estenose & Dor Sacroilíaca',
    desc: 'O sacro conecta a coluna à pelve. Problemas nessa área causam estenose do canal vertebral, artrite sacroilíaca e síndrome do piriforme.',
    symptoms: ['Dor ao caminhar que melhora ao sentar', 'Claudicação neurogênica', 'Dormência bilateral nos membros', 'Dor na virilha e nádegas'],
    treatments: ['Infiltração sacroilíaca guiada', 'Descompressão minimamente invasiva', 'Bloqueio diagnóstico e terapêutico', 'Estabilização vertebral'],
  },
]

// Three.js colors — used only on the 3D model mesh
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
        mat.emissiveIntensity = isActive ? 0.12 : 0   // subtle, not glowing
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

// ─── Error boundary ────────────────────────────────────────────────────────────
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

// ─── Loading skeleton (inside Canvas) ────────────────────────────────────────
function SpineLoading() {
  return (
    <mesh>
      <boxGeometry args={[0.6, 3, 0.4]} />
      <meshStandardMaterial color="#e4e4e7" opacity={0.4} transparent />
    </mesh>
  )
}

// ─── 3D Canvas wrapper ────────────────────────────────────────────────────────
function Spine3DViewer({ selected, hovered, onSelect, onHover }) {
  return (
    <SpineErrorBoundary>
      <div className="relative w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 38 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          {/* Neutral, even lighting — no colored tones */}
          <ambientLight intensity={0.85} />
          <directionalLight position={[2, 5, 4]}   intensity={1.0} />
          <directionalLight position={[-3, 2, -2]}  intensity={0.3} />
          <pointLight       position={[0, -3, 2]}   intensity={0.2} color="#dde4f0" />

          <Suspense fallback={<SpineLoading />}>
            <SpineModel
              selected={selected}
              hovered={hovered}
              onSelect={onSelect}
              onHover={onHover}
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

        {/* Hint badge — neutral */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-100 text-[11px] text-neutral-400 pointer-events-none select-none shadow-xs">
          <MousePointer2 size={11} />
          Arraste · Clique para explorar
        </div>
      </div>
    </SpineErrorBoundary>
  )
}

// ─── Info Card ────────────────────────────────────────────────────────────────
function InfoCard({ region, onClose }) {
  if (!region) return null

  return (
    <motion.div
      key={region.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-neutral-100 bg-white p-7 lg:p-8 w-full shadow-card"
    >
      {/* Thin color accent bar */}
      <div
        className="w-10 h-1 rounded-full mb-6"
        style={{ backgroundColor: region.color }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
            {region.sub}
          </span>
          <h3 className="font-heading font-bold text-2xl text-neutral-950 mt-1 tracking-[-0.02em]">
            {region.label}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: region.color }}
            />
            <p className="text-sm font-medium text-neutral-500">{region.specialty}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors mt-1 shrink-0"
          aria-label="Fechar"
        >
          <X size={13} className="text-neutral-500" />
        </button>
      </div>

      <p className="text-neutral-500 text-sm leading-relaxed mb-6">{region.desc}</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-7">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-3">
            Sintomas
          </p>
          <ul className="space-y-2">
            {region.symptoms.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: region.color }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-3">
            Tratamentos
          </p>
          <ul className="space-y-2">
            {region.treatments.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                <ChevronRight size={12} className="mt-0.5 shrink-0 text-neutral-300" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        to="/especialidades"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 text-white text-sm font-semibold transition-all duration-200 hover:bg-neutral-800 hover:-translate-y-px"
      >
        Ver especialidade completa
        <ChevronRight size={13} />
      </Link>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SpineInteractive() {
  const [selected, setSelected] = useState(null)
  const [hovered,  setHovered]  = useState(null)

  const activeRegion = REGIONS.find(r => r.id === selected)
  const handleSelect = (id) => setSelected(prev => prev === id ? null : id)

  return (
    <section
      data-header-theme="light"
      className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden"
    >
      {/* Subtle top/bottom gradient fades */}
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

        {/* ── Section header ── */}
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

        {/* ── Desktop layout ─────────────────────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-[200px_1fr_360px] xl:grid-cols-[220px_1fr_400px] gap-8 xl:gap-12 items-start">

          {/* Left: region list */}
          <div className="flex flex-col gap-1.5 pt-16">
            {REGIONS.map(r => {
              const isActive = selected === r.id || hovered === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.id)}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border text-left transition-all duration-200 hover:-translate-y-px"
                  style={{
                    borderColor: isActive ? `${r.color}30` : 'transparent',
                    background:  isActive ? `${r.color}08` : 'transparent',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: r.color,
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? 'scale(1.25)' : 'scale(1)',
                    }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold transition-colors duration-200"
                      style={{ color: isActive ? r.color : '#52525b' }}
                    >
                      {r.label}
                    </p>
                    <p className="text-[11px] text-neutral-400">{r.sub}</p>
                  </div>
                </button>
              )
            })}

            {selected && (
              <button
                onClick={() => setSelected(null)}
                className="mt-3 flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-600 transition-colors px-4"
              >
                <RotateCcw size={11} />
                Limpar seleção
              </button>
            )}
          </div>

          {/* Center: 3D canvas */}
          <div
            className="rounded-3xl overflow-hidden bg-white border border-neutral-100 shadow-card"
            style={{ height: 560 }}
          >
            <Spine3DViewer
              selected={selected}
              hovered={hovered}
              onSelect={handleSelect}
              onHover={setHovered}
            />
          </div>

          {/* Right: info card or placeholder */}
          <div className="pt-8">
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <InfoCard
                  key={activeRegion.id}
                  region={activeRegion}
                  onClose={() => setSelected(null)}
                />
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
                    <p className="font-semibold text-neutral-700 text-sm mb-1">Selecione uma região</p>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px]">
                      Clique em qualquer segmento da coluna para ver detalhes
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile layout ──────────────────────────────────────────────────── */}
        <div className="lg:hidden flex flex-col items-center gap-6">

          {/* Region pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {REGIONS.map(r => {
              const isActive = selected === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.id)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border"
                  style={{
                    borderColor: isActive ? `${r.color}40` : '#e4e4e7',
                    color:       isActive ? r.color         : '#71717a',
                    background:  isActive ? `${r.color}08`  : 'transparent',
                  }}
                >
                  {r.label}
                </button>
              )
            })}
          </div>

          {/* 3D canvas */}
          <div
            className="w-full rounded-3xl overflow-hidden bg-white border border-neutral-100 shadow-card"
            style={{ height: 360 }}
          >
            <Spine3DViewer
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
                <InfoCard
                  key={activeRegion.id}
                  region={activeRegion}
                  onClose={() => setSelected(null)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
