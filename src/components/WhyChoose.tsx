'use client'

import { FaCheck } from 'react-icons/fa'

export default function WhyChoose() {
  const sections = [
    {
      category: "ANTICIPATE",
      title: "AI-Powered Threat Intelligence",
      slogan: "STAY AHEAD OF ADVANCED THREATS",
      services: [
        "Zero-Day Vulnerability Detection",
        "AI-Driven Risk Assessment", 
        "Threat Landscape Mapping",
        "Advanced Persistent Threat Hunting",
        "Cloud Security Posture Management",
        "Supply Chain Risk Analysis"
      ]
    },
    {
      category: "WITHSTAND", 
      title: "Next-Gen Security Operations",
      slogan: "DEFEND AGAINST SOPHISTICATED ATTACKS",
      services: [
        "Extended Detection & Response (XDR)",
        "500+ Security Tool Integrations",
        "24/7 AI-Enhanced SOC Operations",
        "Behavioral Analytics & UEBA",
        "Automated Threat Response",
        "Quantum-Safe Encryption Protocols"
      ]
    },
    {
      category: "RECOVER",
      title: "Cyber Resilience & Recovery", 
      slogan: "RAPID RECOVERY WITH MINIMAL DOWNTIME",
      services: [
        "Ransomware Recovery Services",
        "Business Continuity Planning",
        "Cyber Insurance Coordination",
        "15-Minute Response SLA",
        "Immutable Backup Solutions",
        "Post-Incident Security Hardening"
      ]
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white slide-up">
            Why Organizations Choose CMD:CYBR
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <ServiceColumn key={index} {...section} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceColumn({ category, title, slogan, services }: {
  category: string
  title: string
  slogan: string
  services: string[]
}) {
  const getIcon = (category: string) => {
    switch (category) {
      case "ANTICIPATE":
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case "WITHSTAND":
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      case "RECOVER":
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-10h2M2 12h2" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative bg-white rounded-lg p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 slide-up border border-gray-300">
      {/* Category Banner */}
      <div className="bg-black text-white px-4 py-2 rounded-t-lg -m-6 mb-6 text-center font-bold text-sm">
        {category}
      </div>
      
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center border-2 border-gray-300">
          {getIcon(category)}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-black text-lg font-bold mb-4 leading-tight text-center">
        {title}
      </h3>

      {/* Slogan Box */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 mb-6">
        <p className="text-black text-sm font-semibold text-center">
          {slogan}
        </p>
      </div>

      {/* Services List */}
      <div className="flex-1">
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="w-4 h-4 text-black mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
