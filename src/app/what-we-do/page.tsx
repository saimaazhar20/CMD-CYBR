import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What We Do
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions designed to protect your organization from evolving threats and ensure business continuity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end cybersecurity services to protect your digital assets and ensure compliance with industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Managed Detection and Response */}
            <div className="bg-blue-900 rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Managed Detection & Response</h3>
              <p className="text-blue-100 mb-6">
                24/7 monitoring and response to cyber threats with advanced threat hunting capabilities and rapid incident response.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Security Consulting */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Security Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance on security strategy, risk assessment, and compliance to strengthen your security posture.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Penetration Testing */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Penetration Testing</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive security assessments to identify vulnerabilities and provide actionable remediation strategies.
              </p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose CMD:CYBR
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600">Round-the-clock threat detection and response</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100+</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified cybersecurity professionals</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">99%</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">Threat detection and prevention</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5min</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Average incident response time</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
