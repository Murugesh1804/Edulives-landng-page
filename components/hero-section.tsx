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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .hero-container {
          font-family: 'Inter', sans-serif;
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

        .gradient-bg-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%);
        }

        .gradient-bg-secondary {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
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

        @keyframes progressFill {
          to {
            width: 90%;
          }
        }

        .fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="hero-container">
        <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50/30 overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="pt-24 pb-16 text-center max-w-6xl mx-auto">
              {/* Trust Badge */}
              <div className={`inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/50 shadow-soft mb-12 ${isLoaded ? 'fade-in-up' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-semibold text-neutral-700">Trusted by 500+ schools nationwide</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-12">
                <h1 className="text-6xl lg:text-8xl font-bold text-neutral-900 leading-tight">
                  <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
                    <span className="inline-block">Smart, Simple &</span>
                  </div>

                  <div className={`mt-4 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <span className="inline-block">
                      Seamless School{" "}
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
              <p className={`text-2xl lg:text-3xl text-neutral-600 leading-relaxed mb-16 max-w-5xl mx-auto ${isLoaded ? 'fade-in-up' : ''}`}>
                Empower every role — students, teachers, HODs, and admins — with organized dashboards, 
                real-time insights, and seamless coordination that transforms education.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-24 ${isLoaded ? 'fade-in-up' : ''}`}>
                <Button 
                  size="lg" 
                  className="gradient-bg-primary text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 group border-0 hover-lift"
                >
                  View Dashboard Demo
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-neutral-300 bg-white/90 backdrop-blur-sm hover:bg-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-soft hover:shadow-lg transition-all duration-400 group hover-lift"
                >
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Start Free Trial
                </Button>
              </div>

              {/* Feature Stats */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 ${isLoaded ? 'fade-in-up' : ''}`}>
                {/* Statistics Card 1 */}
                <div className="group relative hover-lift">
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-soft hover:shadow-large transition-all duration-500 border border-neutral-200/50">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
                      <div className="text-xl font-semibold text-neutral-700 mb-2">Schools Trust Us</div>
                      <div className="text-lg text-neutral-500">Nationwide coverage</div>
                      <div className="mt-6 w-full bg-blue-100 rounded-full h-3">
                        <div className="gradient-bg-primary h-3 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics Card 2 */}
                <div className="group relative hover-lift">
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-soft hover:shadow-large transition-all duration-500 border border-neutral-200/50">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                      <div className="text-xl font-semibold text-neutral-700 mb-2">Uptime Guarantee</div>
                      <div className="text-lg text-neutral-500">Always available</div>
                      <div className="mt-6 w-full bg-green-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '99%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics Card 3 */}
                <div className="group relative hover-lift">
                  <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-soft hover:shadow-large transition-all duration-500 border border-neutral-200/50">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-xl font-semibold text-neutral-700 mb-2">Support Available</div>
                      <div className="text-lg text-neutral-500">Round the clock</div>
                      <div className="mt-6 w-full bg-purple-100 rounded-full h-3">
                        <div className="gradient-bg-secondary h-3 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className={`pb-24 ${isLoaded ? 'fade-in-up' : ''}`}>
              {/* Role Switcher */}
              <div className="flex justify-center mb-12">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-3 shadow-soft border border-neutral-200/50">
                  <div className="flex space-x-3">
                    <button className="px-10 py-4 rounded-2xl gradient-bg-primary text-white font-semibold text-lg transition-all duration-300 hover-lift">
                      Student View
                    </button>
                    <button className="px-10 py-4 rounded-2xl text-neutral-600 font-semibold text-lg hover:bg-white/60 transition-all duration-300">
                      Teacher View
                    </button>
                    <button className="px-10 py-4 rounded-2xl text-neutral-600 font-semibold text-lg hover:bg-white/60 transition-all duration-300">
                      Principal View
                    </button>
                  </div>
                </div>
              </div>

              {/* Dashboard Mock */}
              <div className="max-w-7xl mx-auto">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-large border border-neutral-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  {/* Browser Header */}
                  <div className="bg-gradient-to-r from-neutral-100 to-neutral-200 px-8 py-6 border-b border-neutral-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <div className="ml-8 text-lg font-medium text-neutral-600">EduLives Dashboard</div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        {/* Schedule Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover-lift">
                          <div className="flex items-center mb-8">
                            <div className="w-12 h-12 gradient-bg-primary rounded-2xl flex items-center justify-center mr-4">
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900">Today's Schedule</h3>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 hover-lift">
                              <div>
                                <div className="text-xl font-semibold text-neutral-900">Mathematics</div>
                                <div className="text-lg text-neutral-600">Mr. Johnson • Room 201</div>
                              </div>
                              <div className="text-lg font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-xl">9:00 AM</div>
                            </div>
                            <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200 hover-lift">
                              <div>
                                <div className="text-xl font-semibold text-neutral-900">English Literature</div>
                                <div className="text-lg text-neutral-600">Ms. Davis • Room 105</div>
                              </div>
                              <div className="text-lg font-semibold text-indigo-600 bg-indigo-100 px-4 py-2 rounded-xl">10:30 AM</div>
                            </div>
                          </div>
                        </div>

                        {/* Assignments Card */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover-lift">
                          <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                              <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900">Assignment Status</h3>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-soft transition-all duration-200 hover-lift">
                              <span className="text-xl font-semibold text-neutral-700">Math Homework</span>
                              <span className="px-4 py-2 bg-green-100 text-green-700 text-lg font-semibold rounded-xl">Submitted</span>
                            </div>
                            <div className="flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-soft transition-all duration-200 hover-lift">
                              <span className="text-xl font-semibold text-neutral-700">Science Project</span>
                              <span className="px-4 py-2 bg-orange-100 text-orange-700 text-lg font-semibold rounded-xl">Due Tomorrow</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-8">
                        {/* Attendance Card */}
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-100 hover-lift">
                          <div className="flex items-center mb-8">
                            <div className="w-12 h-12 gradient-bg-secondary rounded-2xl flex items-center justify-center mr-4">
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900">Attendance Report</h3>
                          </div>
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-semibold text-neutral-700">Present Days</span>
                              <span className="font-bold text-4xl text-neutral-900">18/20</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-4 overflow-hidden">
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full progress-bar"></div>
                            </div>
                            <div className="text-lg font-semibold text-neutral-600">90% attendance rate</div>
                          </div>
                        </div>

                        {/* Fee Receipt Card */}
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 hover-lift">
                          <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                              <CreditCard className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900">Fee Receipt</h3>
                          </div>
                          <div className="space-y-4">
                            <div className="flex justify-between p-4 hover:bg-white rounded-2xl transition-colors duration-200">
                              <span className="text-lg text-neutral-600">Tuition Fee</span>
                              <span className="text-xl font-semibold text-neutral-900">$1,200</span>
                            </div>
                            <div className="flex justify-between p-4 hover:bg-white rounded-2xl transition-colors duration-200">
                              <span className="text-lg text-neutral-600">Library Fee</span>
                              <span className="text-xl font-semibold text-neutral-900">$50</span>
                            </div>
                            <div className="border-t border-orange-200 pt-6 mt-6">
                              <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-neutral-900">Total</span>
                                <span className="text-3xl font-bold text-neutral-900">$1,325</span>
                              </div>
                            </div>
                            <div className="mt-6">
                              <span className="px-6 py-3 bg-green-100 text-green-700 text-xl font-semibold rounded-xl">✓ Paid</span>
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