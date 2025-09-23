export default function Hero() {
  return (
    <main className="relative flex items-center py-20 min-h-screen overflow-hidden animated-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="cyber-grid"></div>
        </div>
        
        {/* Floating data nodes */}
        <div className="absolute inset-0">
          <div className="cyber-node" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className="cyber-node" style={{top: '30%', right: '15%', animationDelay: '1s'}}></div>
          <div className="cyber-node" style={{top: '60%', left: '20%', animationDelay: '2s'}}></div>
          <div className="cyber-node" style={{top: '70%', right: '25%', animationDelay: '3s'}}></div>
          <div className="cyber-node" style={{top: '40%', left: '50%', animationDelay: '4s'}}></div>
          <div className="cyber-node" style={{top: '80%', left: '70%', animationDelay: '5s'}}></div>
        </div>
        
        {/* Connection lines */}
        <div className="absolute inset-0">
          <div className="cyber-line" style={{top: '25%', left: '15%', width: '200px', transform: 'rotate(45deg)', animationDelay: '0.5s'}}></div>
          <div className="cyber-line" style={{top: '50%', right: '20%', width: '150px', transform: 'rotate(-30deg)', animationDelay: '1.5s'}}></div>
          <div className="cyber-line" style={{top: '75%', left: '30%', width: '180px', transform: 'rotate(60deg)', animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="cyber-scan" style={{animationDelay: '0s'}}></div>
          <div className="cyber-scan" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="cyber-particle" style={{top: '15%', left: '5%', animationDelay: '0s'}}></div>
          <div className="cyber-particle" style={{top: '25%', right: '10%', animationDelay: '1s'}}></div>
          <div className="cyber-particle" style={{top: '45%', left: '15%', animationDelay: '2s'}}></div>
          <div className="cyber-particle" style={{top: '65%', right: '20%', animationDelay: '3s'}}></div>
          <div className="cyber-particle" style={{top: '85%', left: '25%', animationDelay: '4s'}}></div>
        </div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="text-left max-w-2xl lg:max-w-none lg:flex-1 slide-in-left">
            <h2 className="text-xs font-semibold text-gray-300 mb-4 uppercase tracking-wider fade-in">
              CMD:CYBR: THE AUTHORITY IN CYBERSECURITY SOLUTIONS
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight slide-up">
              Protect What's Next.<br />
              Accelerate What's Possible<br />
              <span className="text-white pulse-white">
                with CMD:CYBR.
              </span>
            </h1>
            <p className="text-base text-gray-300 mb-6 max-w-2xl leading-relaxed fade-in">
              CMD:CYBR's complete cybersecurity solutions provide 24/7 cutting-edge protection and next level security operations to prevent cyber criminals from ever disrupting your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 slide-up">
              <a href="/contact" className="bg-white text-black px-10 py-5 rounded-md font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 w-fit text-lg transform hover:scale-105 shadow-lg border border-gray-300">
                CONTACT US
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Now showing additional info instead of image */}
          <div className="lg:flex-1 flex justify-center lg:justify-end slide-in-right">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/20 shadow-2xl float">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">24/7 Protection</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border border-gray-300 pulse-white">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span>Threat Detection</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border border-gray-300 pulse-white">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span>Rapid Response</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border border-gray-300 pulse-white">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span>Analytics</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 border border-gray-300 pulse-white">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span>Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
