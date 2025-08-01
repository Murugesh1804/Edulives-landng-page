import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Zap, Shield, Users } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                School Management?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of schools already using EduLives to streamline their operations and improve educational
              outcomes. Start your free trial today and experience the difference.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-12 py-6 text-lg font-semibold shadow-large hover:shadow-glow transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm px-12 py-6 text-lg font-semibold shadow-soft"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-medium">Setup in 2 hours</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Shield className="w-6 h-6 text-green-300" />
              <span className="text-lg font-medium">99.9% uptime</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-100">
              <Users className="w-6 h-6 text-purple-300" />
              <span className="text-lg font-medium">500+ schools trust us</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 border-t border-white/20">
            <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
              <span className="font-medium">hello@edulives.com</span>
            </div>
          </div>

          {/* Bottom trust badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-100 text-sm font-medium">Live chat available 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
