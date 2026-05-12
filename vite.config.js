import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: animation libs isolated so hero doesn't block main bundle
          'vendor-motion': ['framer-motion'],
          'vendor-gsap':   ['gsap'],
          'vendor-swiper': ['swiper'],
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          // 3D spine — loaded separately so it doesn't block initial render
          'vendor-three':  ['three'],
          'vendor-r3f':    ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    // Raise warning threshold slightly — these are lazy-loaded chunks
    chunkSizeWarningLimit: 600,
  },
})
