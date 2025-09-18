'use client'

export default function CTABanner() {
  return (
    <section className="relative">
      {/* Main CTA Section - Dark Blue Background */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          
          {/* Description */}
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to help! Submit your information and an eSentire representative will be in touch to help you build a more resilient security operation today.
          </p>
          
          {/* CTA Button */}
          <button className="bg-gray-200 text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-300 transition-colors duration-200 text-lg flex items-center gap-2 mx-auto">
            GET STARTED
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Emergency Contact Section - Light Blue Background */}
      <div className="bg-cyan-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Text */}
            <div className="text-center md:text-left">
              <p className="text-blue-900 font-semibold text-sm md:text-base">
                ARE YOU EXPERIENCING A SECURITY INCIDENT OR HAVE YOU BEEN BREACHED?
              </p>
            </div>
            
            {/* Right Call Box */}
            <div className="flex-shrink-0">
              <a 
                href="tel:1-866-579-2200"
                className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200 text-sm md:text-base inline-block"
              >
                Call 1-866-579-2200
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
