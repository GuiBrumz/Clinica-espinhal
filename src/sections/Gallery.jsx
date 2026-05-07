import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { staggerContainer, scaleIn } from '../animations/variants'
import { GALLERY_IMAGES } from '../data/content'

export default function Gallery() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 })
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (i) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((l) => (l - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  const next = () => setLightbox((l) => (l + 1) % GALLERY_IMAGES.length)

  return (
    <section className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Ambiente</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-4">
            Conheça nossa <span className="text-gradient-blue">estrutura</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Um ambiente projetado para oferecer conforto, privacidade e a melhor experiência de tratamento.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              variants={scaleIn}
              onClick={() => openLightbox(i)}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-card ${
                i === 0 ? 'md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => { e.target.src = `https://placehold.co/800x600/0057FF/white?text=${encodeURIComponent(img.label)}` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <p className="text-white font-semibold text-sm">{img.label}</p>
              </motion.div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40">
                <ZoomIn size={14} className="text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={GALLERY_IMAGES[lightbox].src.replace('w=800&h=600', 'w=1200&h=900')}
                alt={GALLERY_IMAGES[lightbox].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white/60 text-sm text-center mt-3">{GALLERY_IMAGES[lightbox].label}</p>
              <p className="text-white/30 text-xs text-center mt-1">{lightbox + 1} / {GALLERY_IMAGES.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
