import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGamepad, FaBars, FaTimes } from 'react-icons/fa'
import MagneticButton from './ui/MagneticButton'

const navItems = ['Home', 'Cars', 'Garage', 'News', 'Download', 'Community']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-4 transition-all duration-300 ${
        scrolled ? 'glass-strong' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <FaGamepad className="text-3xl text-neon-blue group-hover:animate-pulse" />
          <span className="font-orbitron text-2xl font-black bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            NITRO RUSH
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-neon-blue transition-colors duration-300 text-sm font-semibold tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
          <MagneticButton variant="outline" size="sm">
            Login
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-neon-blue py-2 text-lg font-semibold"
                >
                  {item}
                </a>
              ))}
              <MagneticButton variant="outline" size="sm" className="mt-2">
                Login
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
            }
