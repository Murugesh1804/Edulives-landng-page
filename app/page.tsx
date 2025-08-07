import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ComparisonSection } from "@/components/comparison-section"
import { MobileAppSection } from "@/components/mobile-app-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-green-50/30">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ComparisonSection />
      <MobileAppSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
