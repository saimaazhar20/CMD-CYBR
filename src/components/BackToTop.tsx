'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group border border-slate-600"
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-slate-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-slate-600 opacity-30 animate-ping"></div>
    </button>
  )
}
