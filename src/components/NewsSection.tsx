'use client'

import { useState } from 'react'

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const newsItems = [
    {
      category: "ANNOUNCEMENT",
      title: "CMD:CYBR Launches Advanced AI-Driven Security Platform, Empowering Organizations with Next-Generation Cybersecurity Solutions",
      description: "Our new platform allows organizations to leverage cutting-edge AI technology for comprehensive threat detection and response capabilities.",
      ctaText: "READ NOW →"
    },
    {
      category: "REPORT", 
      title: "The Forrester Wave™: Managed Detection And Response Services In Europe, Q3 2025",
      description: "Learn why CMD:CYBR was recognized as an MDR Leader and customer's favorite in Europe.",
      ctaText: "DOWNLOAD NOW →"
    },
    {
      category: "REPORT",
      title: "The Forrester Wave™: Managed Detection And Response Services, Q1 2025", 
      description: "CMD:CYBR has been recognized as a Strong Performer and a superior choice for mid-market organizations.",
      ctaText: "DOWNLOAD THE REPORT →"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white slide-up">
            CMD:CYBR In The News
          </h2>
        </div>

        {/* Desktop: 3 cards in a row */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {newsItems.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <NewsCard {...item} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsCard({ category, title, description, ctaText }: {
  category: string
  title: string
  description: string
  ctaText: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col slide-up border border-gray-200">
      {/* Category */}
      <div className="mb-4">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-4 leading-tight flex-grow">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* CTA Link */}
      <div className="mt-auto">
        <a 
          href="#" 
          className="text-black font-semibold hover:text-gray-600 transition-colors duration-200 inline-flex items-center gap-2"
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}
