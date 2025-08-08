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
        <section className="relative min-h-screen overflow-hidden">
          {/* Hero background image */}
          <div className="hero-bg-image" aria-hidden="true"></div>
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="pt-16 sm:pt-24 pb-10 sm:pb-16 text-center max-w-6xl mx-auto">
              {/* Trust Badge */}
              <div className={`inline-flex items-center px-6 py-3 rounded-full card-modern mb-12 ${isLoaded ? 'fade-in-up' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <Users className="w-5 h-5 text-brand-primary" />
                  <span className="text-lg font-semibold text-brand-mid">Privacy-first and role-based by design</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-12">
                <h1 className="text-display text-brand-dark leading-snug tracking-tight text-center">
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
              <p className={`text-body-large text-brand-mid leading-relaxed mb-10 sm:mb-16 max-w-5xl mx-auto ${isLoaded ? 'fade-in-up' : ''}`}>
                Empower every role — students, teachers, HODs, and admins — with organized dashboards, 
                real-time insights, and seamless coordination that transforms education.
              </p>

              {/* Assurance Chips (replacing numeric stats) */}
              <div
                className={`rounded-2xl p-8 mb-24 card-modern ${isLoaded ? 'fade-in-up' : ''}`}
                style={{
                  background: 'linear-gradient(135deg, #4285C6 0%, #4CAF50 100%)'
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center justify-center">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-base font-semibold text-white">Privacy-first</div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-base font-semibold text-white">Role-based access</div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-base font-semibold text-white">Fast, intuitive onboarding</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Tour Video - inside a computer frame */}
            <div className={`pb-32 ${isLoaded ? 'fade-in-up' : ''}`}>
              <div className="flex justify-center">
                <div className="w-full max-w-screen-2xl flex flex-col items-center">
                  {/* Full Aspect Video (no laptop frame) */}
                  <div className="w-full flex justify-center px-4">
                    <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg border border-brand-divider bg-white/80 card-modern">
                      <video
                        className="w-full h-full aspect-video object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/logo.jpg"
                        style={{ display: "block" }}
                      >
                        <source src="/Tour_lap.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Caption and Help Text */}
                  <div className="p-6 sm:p-10 md:p-16 text-center">
                    <h3 className="text-brand-primary text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 sm:mb-4">
                      See the EduLives Dashboard in Action
                    </h3>
                    <p className="text-brand-mid text-base sm:text-xl md:text-2xl font-medium">
                      Watch a quick tour of the all-in-one dashboard for students, teachers, and principals.
                    </p>
                    <div className="mt-4 sm:mt-6 text-sm sm:text-base text-brand-muted">
                      <span>
                        Having trouble viewing the video?{" "}
                        <a
                          href="/Tour-web.mp4"
                          download
                          className="text-brand-primary underline hover:text-brand-primary/80"
                        >
                          Download the video
                        </a>
                        {" "}or{" "}
                        <a
                          href="https://get.adobe.com/flashplayer/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-primary underline hover:text-brand-primary/80"
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