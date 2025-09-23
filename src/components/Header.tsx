'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-4xl transition-all duration-700 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2 px-6' 
            : 'bg-transparent py-2 px-6'
        }`}>
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <Logo isScrolled={isScrolled} />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="/what-we-do" className={`flex items-center space-x-1 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                <span>What we do</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="/how-we-do-it" className={`flex items-center space-x-1 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                <span>How we do it</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="/resources" className={`flex items-center space-x-1 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="/company" className={`flex items-center space-x-1 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="/partners" className={`flex items-center space-x-1 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                <span>Partners</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="/contact" className={`flex items-center space-x-2 rounded-full px-6 py-2 transition-all duration-300 ${
              isScrolled
                ? 'bg-transparent text-black border-2 border-black hover:bg-gray-100'
                : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 transition-all duration-300 ${
              isScrolled 
                ? 'bg-white shadow-lg' 
                : 'bg-black'
            }`}>
              <a href="/what-we-do" className={`block px-3 py-2 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                What we do
              </a>
              <a href="/how-we-do-it" className={`block px-3 py-2 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                How we do it
              </a>
              <a href="/resources" className={`block px-3 py-2 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                Resources
              </a>
              <a href="/company" className={`block px-3 py-2 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                Company
              </a>
              <a href="/partners" className={`block px-3 py-2 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                Partners
              </a>
              <a href="/contact" className={`block px-3 py-2 transition-colors duration-700 ${
                isScrolled 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}>
                Contact Us
              </a>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  )
}
