import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import WhyChoose from '@/components/WhyChoose'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Marquee />
      <WhyChoose />
      <Footer />
    </div>
  );
}
