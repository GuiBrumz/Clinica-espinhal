import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Header        from './components/Header'
import Footer        from './sections/Footer'
import ScrollToTop   from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home               from './pages/Home'
import Sobre              from './pages/Sobre'
import Especialidades     from './pages/Especialidades'
import Tratamentos        from './pages/Tratamentos'
import ResponsavelTecnico from './pages/ResponsavelTecnico'
import Estrutura          from './pages/Estrutura'
import Depoimentos        from './pages/Depoimentos'
import FAQ                from './pages/FAQ'
import Contato            from './pages/Contato'

function AnimatedRoutes() {
  const location = useLocation()
  useSmoothScroll()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"                    element={<Home />} />
        <Route path="/sobre"               element={<Sobre />} />
        <Route path="/especialidades"      element={<Especialidades />} />
        <Route path="/tratamentos"         element={<Tratamentos />} />
        <Route path="/responsavel-tecnico" element={<ResponsavelTecnico />} />
        <Route path="/estrutura"           element={<Estrutura />} />
        <Route path="/depoimentos"         element={<Depoimentos />} />
        <Route path="/faq"                 element={<FAQ />} />
        <Route path="/contato"             element={<Contato />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}
