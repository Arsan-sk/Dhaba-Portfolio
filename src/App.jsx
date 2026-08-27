import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import Navigation from './components/Navigation/Navigation'
import Preloader from './components/Preloader/Preloader'
import Footer from './components/Footer/Footer'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home/Home'))
const Menu = lazy(() => import('./pages/Menu/Menu'))
const Gallery = lazy(() => import('./pages/Gallery/Gallery'))
const BookTable = lazy(() => import('./pages/BookTable/BookTable'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="page-loading" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<BookTable />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Store lenis instance globally for GSAP integration
    window.__lenis = lenis

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <div className="app grain-overlay">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        {!loading && (
          <>
            <Navigation />
            <ScrollToTop />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}
