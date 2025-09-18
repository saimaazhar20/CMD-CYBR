import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhyChoose from '@/components/WhyChoose'
import ThreatHunting from '@/components/ThreatHunting'
import NewsSection from '@/components/NewsSection'
import ResponseCapability from '@/components/ResponseCapability'
import CTABanner from '@/components/CTABanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Marquee />
      <WhyChoose />
      <ThreatHunting />
      <NewsSection />
      <ResponseCapability />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
}
