import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import Services from '@/components/landing/Services'
import WhyUs from '@/components/landing/WhyUs'
import Portfolio from '@/components/landing/Portfolio'
import Contact from '@/components/landing/Contact'
import Footer from '@/components/landing/Footer'
import WhatsAppButton from '@/components/landing/WhatsAppButton'
import ScrollToTop from '@/components/landing/ScrollTotop'

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
