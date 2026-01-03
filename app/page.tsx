import Hero from "@/components/hero"
import Rooms from "@/components/rooms"
import WhyUs from "@/components/why-us"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Rooms />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
