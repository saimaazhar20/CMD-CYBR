import React from 'react'
import Marquee from 'react-fast-marquee'

export default function MarqueeSection() {
  const logos = [
    { name: 'LEGAL', opacity: 'opacity-100' },
    { name: 'FOOD SUPPLY', opacity: 'opacity-100' },
    { name: 'SUPPLY CHAIN', opacity: 'opacity-100' },
    { name: 'MANUFACTURING', opacity: 'opacity-100' },
    { name: 'PRIVATE EQUITY', opacity: 'opacity-100' },
    { name: 'REAL ESTATE', opacity: 'opacity-100' },
    { name: 'HEALTHCARE', opacity: 'opacity-100' },
    { name: 'SOFTWARES', opacity: 'opacity-100' },
  ]

  return (
    <section className="w-full bg-gray-900 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Join the leading organisations that trust us with their security
          </h2>
        </div>
      </div>
      
      {/* Logos Marquee with same width as header */}
      <div className="w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Left blur overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right blur overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
          
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            className="overflow-hidden"
          >
            {logos.map((logo, index) => (
              <div key={index} className={`text-2xl font-bold text-white mx-8 ${logo.opacity}`}>
                {logo.name}
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className={`text-2xl font-bold text-white mx-8 ${logo.opacity}`}>
                {logo.name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}