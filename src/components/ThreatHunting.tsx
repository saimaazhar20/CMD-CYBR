'use client'

import { FaCheck } from 'react-icons/fa'

export default function ThreatHunting() {
  const features = [
    "Real-Time Threat Intelligence",
    "Rapid Threat Detection", 
    "Artificial Intelligence Pattern Recognition",
    "Multi-Signal Correlation",
    "Patented Machine Learning Applications",
    "Elite Security Researchers",
    "SOC as a Service (SOCaaS) Model",
    "Complete Response"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Header */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            AN ATTACK ON YOU IS AN ATTACK ON US
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-900 leading-tight">
            24/7 Cyber Threat Hunting Done Right
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Staffed with Elite Threat Hunters and experienced Cyber Analysts, our global 24/7 Security Operations Centers (SOCs) are focused on responding to high priority security events by driving human-led threat investigations to hunt, contain, and respond to known and unknown threats.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(4, 8).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
