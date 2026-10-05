import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Scene from './components/Scene'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import FilmGrain from './components/FilmGrain'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <SmoothScroll>
      <div className="text-cream font-body selection:bg-muted-gold selection:text-espresso min-h-screen relative bg-transparent cursor-none">
        <CustomCursor />
        <FilmGrain />
        
        <AnimatePresence>
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

      {/* 3D Interactive Background */}
      <div className="fixed inset-0 z-[-1] bg-espresso">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className={`relative z-10 w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Contact />
      </div>
    </div>
    </SmoothScroll>
  )
}

export default App
