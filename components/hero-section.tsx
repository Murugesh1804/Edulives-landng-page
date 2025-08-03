"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Shield, Clock, BookOpen, Calendar, FileText, CreditCard, TrendingUp, Award, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(loadTimer)
  }, [])

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-300 rounded-full blur-2xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-10 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Trusted by 500+ Schools</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                All-In-One
                <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  School Management
                </span>
                <span className="block text-gray-900">Software</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Automate institute daily operations, generate insightful reports, and make better & faster decisions. 
                Comprehensive role-based dashboards for students, teachers, HODs, principals, and administrators.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Request Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">Schools & Colleges</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600 font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">Languages</div>
              </div>
            </div>
          </div>

          {/* Dashboard Tour Video - inside a computer frame */}
          <div className={`flex justify-center items-center ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-full max-w-2xl">
              {/* Laptop Frame with Video */}
              <div className="relative w-full">
                {/* Laptop image */}
                <img
                  src="/images/laptop.png"
                  alt="Laptop frame"
                  className="w-full h-auto block select-none pointer-events-none drop-shadow-2xl"
                  style={{ display: 'block' }}
                  draggable={false}
                />
                {/* Video absolutely positioned over the laptop screen area */}
                <div
                  className="absolute rounded-lg overflow-hidden"
                  style={{
                    left: '8.2%',
                    top: '8.5%',
                    width: '85.5%',
                    height: '62%',
                    pointerEvents: 'auto',
                    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)'
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    poster="/images/logo.jpg"
                  >
                    <source src="/Tour-web.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Caption */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  See the EduLives Dashboard in Action
                </h3>
                <p className="text-gray-600 text-lg">
                  Watch a quick tour of the all-in-one dashboard for students, teachers, and principals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}