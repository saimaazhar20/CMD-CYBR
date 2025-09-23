import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhyChoose from '@/components/WhyChoose'
import ThreatHunting from '@/components/ThreatHunting'
import NewsSection from '@/components/NewsSection'
import ResponseCapability from '@/components/ResponseCapability'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black animated-bg">
      <Header />
      <Hero />
      <Marquee />
      <WhyChoose />
      <ThreatHunting />
      <NewsSection />
      <ResponseCapability />
      <CTABanner />
      <Footer />
    </div>
  );
}
