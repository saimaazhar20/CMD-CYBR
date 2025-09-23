'use client'

import { FaShieldAlt, FaClock, FaRobot, FaDollarSign } from 'react-icons/fa'

export default function WhyChoose() {
  const features = [
    {
      icon: FaShieldAlt,
      title: "CONTINUOUS THREAT EXPOSURE MANAGEMENT",
      description: "Comprehensive threat exposure management with continuous monitoring and assessment of your security posture.",
      buttonText: "LEARN MORE →",
      isFeatured: true
    },
    {
      icon: FaClock,
      title: "MDR", 
      description: "Managed Detection and Response services with 24/7 monitoring and rapid incident response capabilities.",
      buttonText: "LEARN MORE →",
      isFeatured: false
    },
    {
      icon: FaRobot,
      title: "INCIDENT RESPONSE",
      description: "Expert incident response services to quickly contain, investigate, and remediate security incidents.",
      buttonText: "LEARN MORE →",
      isFeatured: false
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

        {/* Grid Layout - 3 rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ServiceCard {...features[0]} />
          <ServiceCard {...features[1]} />
          <ServiceCard {...features[2]} />
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ icon: IconComponent, title, description, buttonText, isFeatured }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  buttonText: string
  isFeatured: boolean
}) {
  return (
    <div className="relative bg-white rounded-lg p-8 h-full min-h-[300px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 slide-up">
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4">
          <span className="bg-black text-white px-3 py-1 rounded-md text-xs font-bold">
            Start Here
          </span>
        </div>
      )}
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center pulse-white">
            <IconComponent className="text-3xl text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-black text-lg font-bold mb-4 leading-tight uppercase tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <a 
          href={
            title === "CONTINUOUS THREAT EXPOSURE MANAGEMENT" ? "/services/threat-exposure" :
            title === "MDR" ? "/services/mdr-service" :
            title === "INCIDENT RESPONSE" ? "/services/incident-response" :
            "#"
          }
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200 text-sm inline-block border border-gray-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}
