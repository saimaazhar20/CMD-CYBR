'use client'

export default function ResponseCapability() {
  const capabilities = [
    {
      title: "Response Speed",
      metrics: [
        "Detect in 35 seconds",
        "Mean Time to Contain 15 Mins", 
        "200+ IOCs/IPs modelled daily to harden your defenses"
      ]
    },
    {
      title: "Response Expertise",
      metrics: [
        "Act on threats vs alerting",
        "35% of intel operationalized by TRU ahead of commercial feeds",
        "Threat Hunters on 24/7"
      ]
    },
    {
      title: "Response Coverage",
      metrics: [
        "2500 connections/day disrupted that FWs missed",
        "Unlimited Incident Handling included",
        "Additional Incident Response Readiness & Retainer available"
      ]
    }
  ]

  const getIcon = (title: string) => {
    switch (title) {
      case "Response Speed":
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
          </svg>
        )
      case "Response Expertise":
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case "Response Coverage":
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight slide-up">
            The World&apos;s Most Complete Response Capability
          </h2>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 h-full slide-up border border-black">
              {/* Icon and Title */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  {getIcon(capability.title)}
                </div>
                <h3 className="text-xl font-bold text-black leading-tight">
                  {capability.title}
                </h3>
              </div>

              {/* Metrics List */}
              <div className="space-y-4">
                {capability.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-black leading-relaxed">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
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
