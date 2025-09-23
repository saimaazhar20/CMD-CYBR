'use client'

import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Card */}
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Company Column */}
              <div>
                <div className="mb-6">
                  <Logo isScrolled={true} size="small" className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Internships</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partnerships</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Insights</a></li>
                </ul>
              </div>

              {/* Key Services Column */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Key Services</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Offensive Security</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cyber Advisory</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Adversary Simulation</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Virtual CISO</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Forensics & Incident Response</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Managed Services</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-semibold">View All Services</a></li>
                </ul>
              </div>


              {/* Contact Column */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                <div className="mb-4">
                  <h4 className="text-gray-300 font-semibold mb-2">Sydney Offices</h4>
                  <p className="text-gray-300 text-sm">
                    Level 12, Suite 6<br />
                    189 Kent Street<br />
                    Sydney NSW 2000
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-blue-400 font-semibold">T. 1300 211 235</p>
                </div>
                <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-300 w-full sm:w-auto text-sm sm:text-base">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="whitespace-nowrap">Get in Touch</span>
                </button>
              </div>
            </div>

            {/* Affiliations Section */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-white">Affiliations</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
                  <div className="bg-white px-3 sm:px-4 py-2 rounded border border-gray-300">
                    <span className="text-black text-xs sm:text-sm font-semibold">JAS-ANZ G</span>
                  </div>
                  <div className="bg-white px-3 sm:px-4 py-2 rounded flex items-center gap-2 border border-gray-300">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black text-xs sm:text-sm font-semibold whitespace-nowrap">ISO 27001 CERTIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About & Acknowledgement Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-300 leading-relaxed">
                CMD:CYBR is one of Australia&apos;s leading Cybersecurity consultancies. Employing market-leading talent and with a strong thought leadership contribution to our field, we continue to out-think and out-smart the most innovative and cutting-edge cyber threats of today.
              </p>
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We acknowledge the Gadigal people of the Eora Nation as the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-5 bg-gradient-to-r from-black via-yellow-500 to-red-500 rounded-sm"></div>
                <div className="w-8 h-5 bg-gradient-to-r from-green-500 via-blue-500 to-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-700 gap-6">
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col items-center space-y-4 w-full lg:w-auto">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap">Terms and Conditions</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap">Vulnerability Disclosure Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap">Security Advisories</a>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm text-center lg:text-right">©2025 CMD:CYBR Cybersecurity Pty Limited | ABN: 19 617 435 711</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
