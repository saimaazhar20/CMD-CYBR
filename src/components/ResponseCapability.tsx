'use client'

import { FaCog, FaLink, FaStopwatch } from 'react-icons/fa'

export default function ResponseCapability() {
  const features = [
    {
      icon: FaCog,
      title: "Response Expertise",
      description: "Your MDR provider should take real ownership of protecting your business, not just drown your team in alerts."
    },
    {
      icon: FaLink,
      title: "Response Coverage", 
      description: "Get continuous protection across your entire attack surface so you can sleep easy knowing that whenever and wherever a new cyber threat is detected, we'll always respond to protect you."
    },
    {
      icon: FaStopwatch,
      title: "Response Speed",
      description: "When your business' operations and reputation are under attack, every minute matters. We hunt and stop cyber threats faster than anyone else."
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight slide-up">
            The World's Most Complete Response Capability
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed fade-in">
            When it comes to response, it's how we do it that makes all the difference.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 h-full slide-up border border-gray-200">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center pulse-white">
                    <feature.icon className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a 
            href="#" 
            className="text-white font-semibold hover:text-gray-300 transition-colors duration-200 uppercase tracking-wider"
          >
            LEARN MORE ABOUT CMD:CYBR RESPONSE AND REMEDIATION
          </a>
        </div>
      </div>
    </section>
  )
}
