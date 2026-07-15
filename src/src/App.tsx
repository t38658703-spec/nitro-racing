import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LenisProvider from './components/LenisProvider'
import ScrollProgress from './components/ScrollProgress'

const Features = lazy(() => import('./components/Features'))
const GameModes = lazy(() => import('./components/GameModes'))
const CarCollection = lazy(() => import('./components/CarCollection'))
const Gallery = lazy(() => import('./components/Gallery'))
const Trailer = lazy(() => import('./components/Trailer'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <LenisProvider>
      <div className="relative overflow-hidden">
        <Navbar />
        <ScrollProgress />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Features />
          <GameModes />
          <CarCollection />
          <Gallery />
          <Trailer />
          <Testimonials />
          <FAQ />
          <Footer />
        </Suspense>
      </div>
    </LenisProvider>
  )
}

function SectionFallback() {
  return <div className="h-screen flex items-center justify-center text-xl text-white/30">Loading...</div>
}
