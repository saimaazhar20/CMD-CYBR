export default function Hero() {
  return (
    <main className="relative flex items-center py-20" style={{
      background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1e3a8a 75%, #1e40af 100%)'
    }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="text-left max-w-2xl lg:max-w-none lg:flex-1">
            <h2 className="text-xs font-semibold text-blue-200 mb-4 uppercase tracking-wider">
              ESENTIRE: THE AUTHORITY IN MANAGED DETECTION AND RESPONSE
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Protect What's Next.<br />
              Accelerate What's Possible<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                with eSentire MDR.
              </span>
            </h1>
            <p className="text-base text-blue-100 mb-6 max-w-2xl leading-relaxed">
              eSentire's complete, multi-signal Managed Detection and Response services provide 24/7 cutting-edge protection and next level security operations to prevent cyber criminals from ever disrupting your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-10 py-5 rounded-md font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-3 w-fit text-lg transform hover:scale-105 shadow-lg">
                BUILD A QUOTE
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/hero.webp" 
                alt="Cybersecurity Professional" 
                className="w-full max-w-lg lg:max-w-none h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
