"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Shield, Clock, BookOpen, Calendar, FileText, CreditCard, TrendingUp, Award, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = ["Management", "Excellence", "Innovation", "Success", "Growth"]

  useEffect(() => {
    // Fade in animation after mount
    const loadTimer = setTimeout(() => setIsLoaded(true), 100)

    // Loop through texts every 3s
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => {
      clearTimeout(loadTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        .hero-container {
          font-family: 'Poppins', sans-serif;
        }

        .bg-pattern {
          background-image: url('/bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .slide-down {
          animation: slideDown 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          transform: translateY(-60px);
        }

        .slide-up {
          animation: slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          opacity: 0;
          transform: translateY(60px);
        }

        .fade-in-up-1 {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-up-2 {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-up-3 {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in-up-4 {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .animated-text {
          display: inline-block;
          min-width: 320px;
          text-align: left;
          height: 3rem;
          vertical-align: -2px;
        }

        .text-fade-in {
          animation: fadeInOut 3s ease-in-out;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          20% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
        }

        .text-gradient-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-secondary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-accent {
          background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
        }

        .gradient-bg-secondary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
        }

        .gradient-bg-accent {
          background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
        }

        .word-item.inactive {
          opacity: 0;
          transform: translateY(-30px) scale(0.95);
        }

        .floating-orb-1 {
          animation: float 8s ease-in-out infinite;
        }

        .floating-orb-2 {
          animation: float 10s ease-in-out infinite reverse;
        }

        .floating-orb-3 {
          animation: float 12s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .hover-scale {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-scale:hover {
          transform: scale(1.03);
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.12);
        }

        .progress-bar {
          animation: progressFill 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards;
          width: 0%;
        }

        .text-gradient-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-secondary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-accent {
          background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }



        @keyframes slideDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.02);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(37, 99, 235, 0.2);
          }
          50% {
            box-shadow: 0 0 45px rgba(37, 99, 235, 0.4);
          }
        }

        @keyframes progressFill {
          to {
            width: 90%;
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-6px,0);
          }
          70% {
            transform: translate3d(0,-3px,0);
          }
          90% {
            transform: translate3d(0,-1px,0);
          }
        }

        .gradient-bg-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
        }

        .gradient-bg-secondary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
        }

        .gradient-bg-accent {
          background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
        }
      `}</style>

      <div className="hero-container">
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-15 floating-orb-1"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-15 floating-orb-2"></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-10 floating-orb-3"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="pt-20 pb-16 text-center max-w-6xl mx-auto">
              {/* Trust Badge */}
              <div className={`inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/30 shadow-lg mb-8 hover-scale pulse-glow ${isLoaded ? 'fade-in-up-1' : ''}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" style={{animation: 'bounce 2s infinite'}}></div>
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">Trusted by 500+ schools nationwide</span>
                </div>
              </div>

              {/* Animated Main Heading */}
              <div className="mb-8">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
                    <span className="inline-block">Smart, Simple & Seamless</span>
                  </div>

                  <div className={`mt-2 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <span className="inline-block">
                      School{" "}
                      <span className="animated-text">
                        <span className="text-gradient-primary font-bold text-fade-in">
                          {texts[currentTextIndex]}
                        </span>
                      </span>
                    </span>
                  </div>
                </h1>
              </div>

              {/* Subtitle */}
              <p className={`text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 max-w-4xl mx-auto ${isLoaded ? 'fade-in-up-2' : ''}`}>
                Empower every role — students, teachers, HODs, and admins — with organized dashboards, 
                real-time insights, and seamless coordination that transforms education.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 ${isLoaded ? 'fade-in-up-2' : ''}`}>
                <Button 
                  size="lg" 
                  className="gradient-bg-primary text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-400 group border-0 hover-lift"
                >
                  View Dashboard Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 bg-white/90 backdrop-blur-sm hover:bg-white px-10 py-4 text-lg font-semibold rounded-full shadow-sm hover:shadow-lg transition-all duration-400 group hover-lift"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Start Free Trial
                </Button>
              </div>

              {/* Feature Stats */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ${isLoaded ? 'fade-in-up-3' : ''}`}>
                {/* Statistics Card 1 */}
                <div className="group relative hover-lift">
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Schools Trust Us</div>
                      <div className="text-xs text-slate-500">Nationwide coverage</div>
                      <div className="mt-4 w-full bg-blue-100 rounded-full h-2">
                        <div className="gradient-bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics Card 2 */}
                <div className="group relative hover-lift">
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Uptime Guarantee</div>
                      <div className="text-xs text-slate-500">Always available</div>
                      <div className="mt-4 w-full bg-green-100 rounded-full h-2">
                        <div className="gradient-bg-accent h-2 rounded-full" style={{width: '99%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics Card 3 */}
                <div className="group relative hover-lift">
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Support Available</div>
                      <div className="text-xs text-slate-500">Round the clock</div>
                      <div className="mt-4 w-full bg-purple-100 rounded-full h-2">
                        <div className="gradient-bg-secondary h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className={`pb-20 ${isLoaded ? 'fade-in-up-4' : ''}`}>
              {/* Role Switcher */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/30">
                  <div className="flex space-x-2">
                    <button className="px-8 py-3 rounded-xl gradient-bg-primary text-white font-semibold text-sm transition-all duration-300 hover-scale">
                      Student View
                    </button>
                    <button className="px-8 py-3 rounded-xl text-slate-600 font-semibold text-sm hover:bg-white/60 transition-all duration-300">
                      Teacher View
                    </button>
                    <button className="px-8 py-3 rounded-xl text-slate-600 font-semibold text-sm hover:bg-white/60 transition-all duration-300">
                      Principal View
                    </button>
                  </div>
                </div>
              </div>

              {/* Dashboard Mock */}
              <div className="max-w-7xl mx-auto">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:shadow-3xl transition-all duration-500">
                  {/* Browser Header */}
                  <div className="bg-gradient-to-r from-slate-100 to-slate-200 px-6 py-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full" style={{animation: 'bounce 2s infinite'}}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" style={{animation: 'bounce 2s infinite 0.2s'}}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full" style={{animation: 'bounce 2s infinite 0.4s'}}></div>
                      <div className="ml-6 text-sm font-medium text-slate-600">EduLives Dashboard</div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        {/* Schedule Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover-lift">
                          <div className="flex items-center mb-6">
                            <div className="w-10 h-10 gradient-bg-primary rounded-xl flex items-center justify-center mr-3">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900">Today's Schedule</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover-scale">
                              <div>
                                <div className="font-semibold text-slate-900">Mathematics</div>
                                <div className="text-sm text-slate-600">Mr. Johnson • Room 201</div>
                              </div>
                              <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">9:00 AM</div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover-scale">
                              <div>
                                <div className="font-semibold text-slate-900">English Literature</div>
                                <div className="text-sm text-slate-600">Ms. Davis • Room 105</div>
                              </div>
                              <div className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">10:30 AM</div>
                            </div>
                          </div>
                        </div>

                        {/* Assignments Card */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover-lift">
                          <div className="flex items-center mb-6">
                            <div className="w-10 h-10 gradient-bg-accent rounded-xl flex items-center justify-center mr-3">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900">Assignment Status</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-sm transition-all duration-200 hover-scale">
                              <span className="font-medium text-slate-700">Math Homework</span>
                              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full pulse-glow">Submitted</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-sm transition-all duration-200 hover-scale">
                              <span className="font-medium text-slate-700">Science Project</span>
                              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Due Tomorrow</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Attendance Card */}
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 hover-lift">
                          <div className="flex items-center mb-6">
                            <div className="w-10 h-10 gradient-bg-secondary rounded-xl flex items-center justify-center mr-3">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900">Attendance Report</h3>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-slate-700">Present Days</span>
                              <span className="font-bold text-2xl text-slate-900">18/20</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                              <div className="gradient-bg-accent h-3 rounded-full progress-bar"></div>
                            </div>
                            <div className="text-sm font-medium text-slate-600">90% attendance rate</div>
                          </div>
                        </div>

                        {/* Fee Receipt Card */}
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover-lift">
                          <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                              <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900">Fee Receipt</h3>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between p-2 hover:bg-white rounded-lg transition-colors duration-200">
                              <span className="text-slate-600">Tuition Fee</span>
                              <span className="font-semibold text-slate-900">$1,200</span>
                            </div>
                            <div className="flex justify-between p-2 hover:bg-white rounded-lg transition-colors duration-200">
                              <span className="text-slate-600">Library Fee</span>
                              <span className="font-semibold text-slate-900">$50</span>
                            </div>
                            <div className="border-t border-orange-200 pt-3 mt-4">
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-slate-900">Total</span>
                                <span className="font-bold text-2xl text-slate-900">$1,325</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <span className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-full pulse-glow">✓ Paid</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}