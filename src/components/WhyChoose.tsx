'use client'

import { FaShieldAlt, FaClock, FaRobot, FaDollarSign } from 'react-icons/fa'

export default function WhyChoose() {
  const features = [
    {
      icon: FaShieldAlt,
      title: "ALL-IN-ONE MDR SERVICE",
      description: "Multi-Signal MDR with 300+ technology integrations to support your existing investments.",
      buttonText: "LEARN MORE →",
      isFeatured: true
    },
    {
      icon: FaClock,
      title: "24/7 SOC SUPPORT", 
      description: "24/7 SOC-as-a-Service with Unlimited Threat Hunting and Incident Handling.",
      buttonText: "LEARN MORE →",
      isFeatured: false
    },
    {
      icon: FaRobot,
      title: "SECURITY OPERATIONS PLATFORM",
      description: "Multi-agent Generative AI system embedded across our SecOps platform to scale human expertise.",
      buttonText: "LEARN MORE →",
      isFeatured: false
    },
    {
      icon: FaDollarSign,
      title: "MDR PRICING AND PACKAGES",
      description: "We offer three flexible MDR pricing packages that can be customized to your unique needs.",
      buttonText: "EXPLORE PACKAGES →",
      isFeatured: false
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
            Why 2000+ Organizations Choose eSentire
          </h2>
        </div>

        {/* Grid Layout - 2 top cards, 2 bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Top Row - 2 cards */}
          <div className="lg:col-span-2">
            <ServiceCard {...features[0]} />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard {...features[1]} />
          </div>
          
          {/* Bottom Row - 2 cards */}
          <div className="lg:col-span-2">
            <ServiceCard {...features[2]} />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard {...features[3]} />
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 rounded-lg overflow-hidden">
          {/* Diagonal Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )`
            }}></div>
          </div>
          
          <div className="relative px-8 py-12 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Text */}
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Experience Next Level eSentire MDR
              </h3>
            </div>
            
            {/* Right Button */}
            <div>
              <button className="bg-blue-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-200 text-lg">
                BUILD A QUOTE →
              </button>
            </div>
          </div>
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
    <div className="relative bg-blue-800 rounded-lg p-8 h-full min-h-[300px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4">
          <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-md text-xs font-bold">
            Start Here
          </span>
        </div>
      )}
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <IconComponent className="text-3xl text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-lg font-bold mb-4 leading-tight uppercase tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200 text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
