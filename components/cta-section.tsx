"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Phone, Mail, CheckCircle, Star, Users, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          {/* Main CTA */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
              <Star className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Join 500+ Schools</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ready to Transform Your
              <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                School Management?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Join hundreds of schools already using EduLives to streamline operations, 
              enhance communication, and improve student outcomes with our comprehensive platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request Live Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Sales
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Trial</h3>
              <p className="text-gray-600 leading-relaxed">
                Start with a 30-day free trial. No credit card required. 
                Experience the full platform with your school data.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Demo</h3>
              <p className="text-gray-600 leading-relaxed">
                Book a personalized demo with our education experts. 
                See how EduLives fits your specific needs.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get dedicated support during implementation and beyond. 
                Our team ensures your success.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 border border-gray-200/50 shadow-soft">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get Started Today</h3>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">+91 8047 0918 07</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">info@edulives.com</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Available Mon-Fri, 9 AM - 6 PM IST</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">What You'll Get</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Personalized demo of your use case</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Implementation roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Pricing tailored to your needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Migration support included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-8">
            <p className="text-gray-600 text-lg font-medium">
              Trusted by leading educational institutions across India
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 text-gray-700 font-medium">CBSE Schools</div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 text-gray-700 font-medium">ICSE Schools</div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 text-gray-700 font-medium">International Schools</div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 text-gray-700 font-medium">State Board Schools</div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 text-gray-700 font-medium">Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
