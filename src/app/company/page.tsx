import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Company() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 slide-up">
              About CMD:CYBR
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Leading the charge in cybersecurity innovation, we&apos;re dedicated to protecting organizations from evolving digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with a mission to revolutionize cybersecurity, CMD:CYBR has grown from a small team of passionate security experts to a leading force in the industry. Our journey began with a simple belief: every organization deserves world-class protection against cyber threats.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Today, we serve thousands of organizations worldwide, from startups to Fortune 500 companies, providing them with cutting-edge security solutions and peace of mind in an increasingly digital world.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">2000+</div>
                  <div className="text-gray-300">Organizations Protected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-black slide-in-right float border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide comprehensive, innovative cybersecurity solutions that protect our clients&apos; digital assets and enable them to operate with confidence in today&apos;s threat landscape.
              </p>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600">
                To be the world&apos;s most trusted cybersecurity partner, setting the standard for excellence in threat detection, response, and prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              Meet the experts who lead our mission to protect organizations worldwide from cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg slide-up">
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-6 flex items-center justify-center pulse-white">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">John Smith</h3>
              <p className="text-gray-600 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Former cybersecurity director with 15+ years of experience in threat intelligence and security operations.
              </p>
            </div>

            {/* CTO */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg slide-up">
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-6 flex items-center justify-center pulse-white">
                <span className="text-2xl font-bold text-white">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Maria Johnson</h3>
              <p className="text-gray-600 font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Technology visionary with expertise in AI-driven security solutions and cloud infrastructure.
              </p>
            </div>

            {/* CSO */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg slide-up">
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-6 flex items-center justify-center pulse-white">
                <span className="text-2xl font-bold text-white">DB</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">David Brown</h3>
              <p className="text-gray-600 font-semibold mb-4">Chief Security Officer</p>
              <p className="text-gray-600 text-sm">
                Security strategist with deep expertise in threat hunting and incident response methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
              Our Values
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto fade-in">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">We strive for the highest standards in everything we do, continuously improving our services and solutions.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">We operate with honesty, transparency, and ethical practices in all our business relationships.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">We embrace new technologies and methodologies to stay ahead of evolving cyber threats.</p>
            </div>

            <div className="text-center slide-up">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-300 pulse-white">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Commitment</h3>
              <p className="text-gray-300">We are deeply committed to protecting our clients and building long-term partnerships based on trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 slide-up">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto fade-in">
            Ready to make a difference in cybersecurity? Explore career opportunities and help us protect organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 border border-gray-300">
              View Open Positions
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
