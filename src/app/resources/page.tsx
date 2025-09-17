import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of cybersecurity resources, whitepapers, guides, and industry insights to stay informed and protected.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our curated collection of cybersecurity resources organized by category for easy navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Whitepapers */}
            <div className="bg-blue-900 rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Whitepapers</h3>
              <p className="text-blue-100 mb-6">
                In-depth research reports and analysis on the latest cybersecurity trends and threats.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                View All
              </button>
            </div>

            {/* Guides */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Security Guides</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step guides to help you implement security best practices and protect your organization.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                View All
              </button>
            </div>

            {/* Webinars */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Webinars</h3>
              <p className="text-gray-600 mb-6">
                Live and recorded webinars featuring industry experts and the latest security insights.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and recently updated cybersecurity resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-gray-500 text-sm ml-2">Dec 2024</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">The State of Cybersecurity 2024</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive analysis of current cybersecurity threats and trends affecting organizations worldwide.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Download PDF →
                </button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-900 text-white text-xs font-semibold px-2 py-1 rounded">Guide</span>
                  <span className="text-gray-500 text-sm ml-2">Nov 2024</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Zero Trust Implementation Guide</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step guide to implementing Zero Trust security architecture in your organization.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">Webinar</span>
                  <span className="text-gray-500 text-sm ml-2">Jan 2025</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">AI in Cybersecurity: Future Trends</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert panel discussion on how artificial intelligence is shaping the future of cybersecurity.
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Watch Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cybersecurity insights, threat intelligence, and industry updates.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
