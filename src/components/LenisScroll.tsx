'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Desabilitar Lenis no mobile
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // No mobile, ainda assim scrollar para o hash se existir
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 500)
      }
      return
    }

    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      infinite: false,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll para o hash da URL se existir (ex: #portfolio)
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash)
        if (element) {
          lenis.scrollTo(element, { offset: 0 })
        }
      }, 500)
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  return <>{children}</>
}