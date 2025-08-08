"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Shield, Zap } from "lucide-react"
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
        .animated-text {
          display: inline-block;
          min-width: 320px;
          text-align: left;
          height: 2.2rem;
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

        .hero-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-image: url('/bg.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          opacity: 0.18;
          pointer-events: none;
        }
      `}</style>

      <div>
        <section className="relative min-h-[85vh] overflow-hidden">
          {/* Hero background image */}
          <div className="hero-bg-image" aria-hidden="true"></div>
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="pt-8 sm:pt-10 pb-4 sm:pb-8 flex items-center min-h-[85vh]">
              {/* Left Side - Content */}
              <div className="w-full lg:w-1/2 lg:pr-8">
                {/* Main Heading */}
                <div className="mb-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-snug tracking-tight">
                    <span className="block sm:inline transition-all duration-1000 ease-out"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)'
                      }}
                    >
                      Smart, Simple &nbsp;
                    </span>
                    <span className="block sm:inline transition-all duration-1000 delay-150 ease-out"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)'
                      }}
                    >
                      Seamless School&nbsp;
                    </span>
                    <span
                      className="block sm:inline text-brand-primary transition-all duration-1000 delay-300 ease-out"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)'
                      }}
                    >
                      {texts[currentTextIndex]}
                    </span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p className={`text-base sm:text-lg text-brand-mid leading-relaxed mb-6 sm:mb-8 max-w-2xl ${isLoaded ? 'fade-in-up' : ''}`}>
                  Empower every role — students, teachers, HODs, and admins — with organized dashboards, 
                  real-time insights, and seamless coordination that transforms education.
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 ${isLoaded ? 'fade-in-up' : ''}`}>
                  <Button
                    size="md"
                    variant="gradient"
                    className="group hover-lift text-sm sm:text-base px-4 py-2"
                  >
                    View Dashboard Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button 
                    size="md" 
                    variant="outline" 
                    className="border-2 border-brand-divider bg-white/90 backdrop-blur-sm hover:bg-white shadow-soft hover:shadow-lg hover-lift text-brand-dark hover:text-brand-dark text-sm sm:text-base px-4 py-2"
                  >
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Start Free Trial
                  </Button>
                </div>

                {/* Assurance Chips */}
                <div
                  className={`rounded-2xl p-4 card-modern ${isLoaded ? 'fade-in-up' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, #4285C6 0%, #4CAF50 100%)'
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center justify-center">
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 flex items-center justify-center mb-1">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-white">Privacy-first</div>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 flex items-center justify-center mb-1">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-white">Role-based access</div>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-8 h-8 flex items-center justify-center mb-1">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-white">Fast, intuitive onboarding</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                <div className={`${isLoaded ? 'fade-in-up' : ''}`}>
                  <div className="relative">
                    {/* Laptop Frame */}
                    <div className="relative mx-auto max-w-lg">
                      <div className="relative bg-brand-dark rounded-[2rem] p-3 shadow-2xl">
                        <div className="bg-white rounded-[0.5rem] overflow-hidden">
                          <video
                            className="w-full h-full aspect-video object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/images/logo.jpg"
                            style={{ display: "block" }}
                          >
                            <source src="/Tour-web.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 card-modern p-1.5 shadow-lg animate-float">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-medium text-brand-mid">Live</span>
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