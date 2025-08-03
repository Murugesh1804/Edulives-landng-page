"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Phone, Mail, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Transform Your School Management?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Join 500+ schools already using EduLives to streamline operations, 
              enhance communication, and improve student outcomes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 rounded-lg p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Free Trial</h3>
              <p className="text-blue-100">
                Start with a 30-day free trial. No credit card required. 
                Experience the full platform with your school data.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Demo</h3>
              <p className="text-blue-100">
                Book a personalized demo with our education experts. 
                See how EduLives fits your specific needs.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-blue-100">
                Get dedicated support during implementation and beyond. 
                Our team ensures your success.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">+91 8047 0918 07</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">info@edulives.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">Available Mon-Fri, 9 AM - 6 PM IST</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-white mb-4">What You'll Get</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Personalized demo of your use case</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Implementation roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Pricing tailored to your needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Migration support included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <p className="text-blue-200 text-lg mb-8">
              Trusted by leading educational institutions across India
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-blue-200 text-sm">CBSE Schools</div>
              <div className="text-blue-200 text-sm">ICSE Schools</div>
              <div className="text-blue-200 text-sm">International Schools</div>
              <div className="text-blue-200 text-sm">State Board Schools</div>
              <div className="text-blue-200 text-sm">Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
