'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqItems = [
    {
      question: "What is Gridware?",
      answer: "Gridware is a comprehensive cybersecurity platform that provides advanced threat detection and response capabilities for organizations of all sizes."
    },
    {
      question: "What are cyber security services?",
      answer: "Cybersecurity services include threat monitoring, incident response, vulnerability assessments, security consulting, and managed security services to protect your organization from cyber threats."
    },
    {
      question: "What is a cyber security consultant?",
      answer: "A cybersecurity consultant is a professional who helps organizations assess their security posture, identify vulnerabilities, and implement security measures to protect against cyber threats."
    },
    {
      question: "What sets Gridware apart?",
      answer: "Gridware stands out with its AI-driven threat detection, 24/7 monitoring capabilities, and comprehensive response services that provide complete protection for your organization."
    },
    {
      question: "What does a cyber security consultant do?",
      answer: "A cybersecurity consultant evaluates your current security measures, identifies potential vulnerabilities, develops security strategies, and helps implement best practices to protect your organization."
    },
    {
      question: "What is threatware in cyber security?",
      answer: "Threatware refers to malicious software designed to harm computer systems, including viruses, malware, ransomware, and other malicious programs that pose security risks."
    },
    {
      question: "What do cyber security companies do?",
      answer: "Cybersecurity companies provide services such as threat monitoring, incident response, security assessments, compliance consulting, and managed security services to protect organizations from cyber threats."
    },
    {
      question: "What is cyber security consulting?",
      answer: "Cybersecurity consulting involves providing expert advice and guidance to organizations on how to improve their security posture, comply with regulations, and protect against cyber threats."
    },
    {
      question: "What does a cyber security company do?",
      answer: "A cybersecurity company offers comprehensive security solutions including threat detection, incident response, security assessments, and ongoing monitoring to protect organizations from cyber attacks."
    },
    {
      question: "What cyber security frameworks is right for me?",
      answer: "The right cybersecurity framework depends on your industry, size, and specific needs. Common frameworks include NIST, ISO 27001, CIS Controls, and SOC 2."
    },
    {
      question: "What is a penetration test?",
      answer: "A penetration test is a simulated cyber attack on your computer system to check for exploitable vulnerabilities and assess the security of your infrastructure."
    },
    {
      question: "Why does a penetration test need to be done by a certified consultant?",
      answer: "Certified consultants have the expertise, tools, and knowledge to conduct thorough and accurate penetration tests while following ethical guidelines and industry best practices."
    },
    {
      question: "What are cyber security solutions?",
      answer: "Cybersecurity solutions include firewalls, antivirus software, intrusion detection systems, security monitoring tools, and managed security services that work together to protect your organization."
    },
    {
      question: "What is your response time?",
      answer: "Our response time varies by service level, but we typically respond to critical security incidents within minutes and provide 24/7 monitoring and support for all our clients."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const leftColumnItems = faqItems.slice(0, 7)
  const rightColumnItems = faqItems.slice(7, 14)

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Frequently Asked Questions About Cyber Security and Gridware
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnItems.map((item, index) => (
              <FAQItem
                key={index + 7}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(index + 7)}
                onToggle={() => toggleItem(index + 7)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-blue-900 font-medium pr-4">{question}</span>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 text-blue-900 transition-transform duration-200 ${
              isOpen ? 'rotate-45' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
