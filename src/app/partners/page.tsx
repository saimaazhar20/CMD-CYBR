import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partners
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Building strategic partnerships to deliver comprehensive cybersecurity solutions and expand our global reach.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our ecosystem of trusted partners and help organizations worldwide stay secure in an evolving threat landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technology Partners */}
            <div className="bg-blue-900 rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technology Partners</h3>
              <p className="text-blue-100 mb-6">
                Integrate your security solutions with our platform to provide enhanced protection and seamless user experiences.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Channel Partners */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Channel Partners</h3>
              <p className="text-gray-600 mb-6">
                Resell our cybersecurity solutions and provide value-added services to your clients while earning competitive margins.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Strategic Partners */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Strategic Partners</h3>
              <p className="text-gray-600 mb-6">
                Collaborate on joint initiatives, co-develop solutions, and expand market reach through strategic alliances.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with industry leaders to deliver comprehensive cybersecurity solutions and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Partner Logos */}
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold text-sm">Microsoft</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold text-sm">AWS</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold text-sm">Cisco</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold text-sm">IBM</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold text-sm">Splunk</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center h-24">
              <span className="text-gray-400 font-semibold text-sm">Palo Alto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with CMD:CYBR and how we can help grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Revenue Growth</h3>
              <p className="text-gray-600">Access to new revenue streams and market opportunities through our partner programs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training programs and ongoing support to help you succeed.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Co-Marketing</h3>
              <p className="text-gray-600">Joint marketing initiatives and co-branded materials to expand your reach.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">Dedicated partner success managers to help you achieve your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing ecosystem of partners and help organizations worldwide stay secure. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
              Become a Partner
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Download Partner Kit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
