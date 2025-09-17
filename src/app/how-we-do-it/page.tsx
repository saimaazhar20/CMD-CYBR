import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HowWeDoIt() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How We Do It
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology combines cutting-edge technology, expert analysis, and proactive threat hunting to deliver comprehensive cybersecurity protection.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure comprehensive protection and rapid response to cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your current security posture, identifying vulnerabilities and potential attack vectors.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Strategy</h3>
              <p className="text-gray-600">
                Development of a customized security strategy tailored to your organization's specific needs and risk profile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Deployment of advanced security tools and technologies with minimal disruption to your business operations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Monitoring</h3>
              <p className="text-gray-600">
                Continuous 24/7 monitoring and threat hunting to detect and respond to potential security incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools to provide comprehensive security coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">AI-Powered Detection</h3>
              <p className="text-gray-600">
                Machine learning algorithms that continuously learn and adapt to identify sophisticated threats in real-time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics engine that processes millions of events per second to identify potential threats.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Automated Response</h3>
              <p className="text-gray-600">
                Intelligent automation that can instantly respond to threats and implement protective measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Our Unique Approach
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine human expertise with advanced technology to create a comprehensive security solution that adapts to your organization's unique needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Proactive Threat Hunting</h3>
                    <p className="text-gray-600">We don't wait for alerts - we actively hunt for threats before they impact your business.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">Every organization is unique - we tailor our approach to your specific industry and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Continuous Improvement</h3>
                    <p className="text-gray-600">We constantly evolve our methods and technologies to stay ahead of emerging threats.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Contact our experts to learn more about our methodology and how we can protect your organization.
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
