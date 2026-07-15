import { useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function LenisProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [prefersReduced])

  return <>{children}</>
}
