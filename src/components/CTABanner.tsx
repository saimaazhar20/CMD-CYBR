'use client'

export default function CTABanner() {
  return (
    <section className="relative">
      {/* Main CTA Section - Black Background */}
      <div className="bg-black py-16 animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 slide-up">
            Ready to Get Started?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
            We're here to help! Submit your information and a CMD:CYBR representative will be in touch to help you build a more resilient security operation today.
          </p>
          
          {/* CTA Button */}
          <a href="/contact" className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200 text-lg flex items-center gap-2 mx-auto inline-block border border-gray-300 slide-up">
            GET STARTED
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  )
}
