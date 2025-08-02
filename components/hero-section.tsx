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

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-image: url('/bg.png');
          background-repeat: repeat;
          background-size: auto;
          opacity: 0.12;
          pointer-events: none;
        }
      `}</style>

      <div className="hero-container">
        <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50/30 overflow-hidden">
          {/* Pattern background image */}
          <div className="hero-bg-pattern" aria-hidden="true"></div>
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
                  className="text-white px-12 py-8 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-400 group border-0 hover-lift"
                  style={{
                    background: 'linear-gradient(90deg, #4285C5 0%, #34A853 100%)'
                  }}
                >
                  View Dashboard Demo
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-neutral-300 bg-white/90 backdrop-blur-sm hover:bg-white px-12 py-8 text-xl font-semibold rounded-2xl shadow-soft hover:shadow-lg transition-all duration-400 group hover-lift"
                >
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Start Free Trial
                </Button>
              </div>

              {/* Feature Stats */}
              <div
                className={`rounded-2xl p-8 mb-24 border border-white/10 ${isLoaded ? 'fade-in-up' : ''}`}
                style={{
                  background: 'linear-gradient(135deg, #4285C5 0%, #34A853 100%)'
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                  {/* Schools & Colleges */}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">40,000+</div>
                      <div className="text-sm text-white/80">Schools & Colleges</div>
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">200+</div>
                      <div className="text-sm text-white/80">Countries</div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">20+</div>
                      <div className="text-sm text-white/80">Languages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Tour Video */}
            <div className={`pb-24 ${isLoaded ? 'fade-in-up' : ''}`}>
              <div className="flex justify-center">
                <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-md font-sans">
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                    {/* Fallback image if video fails to load or is blocked */}
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      poster="/images/logo.jpg"
                    >
                      <source src="/Tour.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-8 md:p-10 text-center">
                    <h3 className="text-gradient-primary text-3xl md:text-4xl font-extrabold leading-tight mb-3 font-sans">
                      See the EduLives Dashboard in Action
                    </h3>
                    <p className="text-neutral-700 text-lg md:text-xl font-medium font-sans">
                      Watch a quick tour of the all-in-one dashboard for students, teachers, and principals.
                    </p>
                    <div className="mt-4 text-sm text-neutral-500">
                      {/*
                        If the video does not play, provide a download link and troubleshooting tips.
                      */}
                      <span>
                        Having trouble viewing the video?{" "}
                        <a
                          href="/tour.mp4"
                          download
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Download the video
                        </a>
                        {" "}or{" "}
                        <a
                          href="https://get.adobe.com/flashplayer/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          check your browser settings
                        </a>
                        .
                      </span>
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