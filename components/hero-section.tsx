"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Shield, Zap, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ContactForm } from "@/components/contact-form"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const texts = [
    "for Schools",
    "for Educators",
    "for Institutions",
    "for Everyone",
    "for the Future"
  ]

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoaded(true), 100)
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => {
      clearTimeout(loadTimer)
      clearInterval(interval)
    }
  }, [])

  // Handler to open the contact form popup
  const handleGetStartedClick = () => {
    setIsContactFormOpen(true)
    setIsMenuOpen(false) // Close mobile menu if open
  }

  // Handler to close the contact form popup
  const handleCloseContactForm = () => {
    setIsContactFormOpen(false)
  }

  return (
    <>
      <style jsx>{`
        .animated-text {
          display: inline-block;
          min-width: 220px;
          text-align: left;
          height: 2.2rem;
          vertical-align: -2px;
        }

        @media (max-width: 640px) {
          .animated-text {
            min-width: 180px;
            height: 1.8rem;
          }
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

      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Hero background image */}
        <div className="hero-bg-image" aria-hidden="true"></div>

        {/* Background blur elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            {/* Left content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-snug tracking-tight">
                <span
                  className="block sm:inline transition-all duration-1000 ease-out"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
                  }}
                >
                  Complete School{" "}
                </span>
                <span
                  className="block sm:inline transition-all duration-1000 delay-150 ease-out"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
                  }}
                >
                  Management Platform {" "}
                </span>
                <span
                  className="block sm:inline text-brand-primary transition-all duration-1000 delay-300 ease-out"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
                  }}
                >
                  {texts[currentTextIndex]}
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg text-brand-mid leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                  isLoaded ? "fade-in-up" : ""
                }`}
              >
                Streamline your entire school operations with one powerful platform. 
                From student enrollment to exam management, attendance tracking to 
                fee collection — everything you need to run a modern educational institution.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start ${
                  isLoaded ? "fade-in-up" : ""
                }`}
              >
                <Button
                  size="lg"
                  variant="gradient"
                  className="group hover-lift text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
                  onClick={() => window.location.href = "/features"}
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  onClick={handleGetStartedClick}
                  variant="outline"
                  className="border-2 border-brand-divider bg-white/90 backdrop-blur-sm hover:bg-white shadow-soft hover:shadow-lg hover-lift text-brand-dark text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  Start Free Trial
                </Button>
              </div>

              {/* Assurance Chips */}
              <div
                className={`rounded-2xl p-4 card-modern mx-auto lg:mx-0 max-w-md ${
                  isLoaded ? "fade-in-up" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, #4285C6 0%, #4CAF50 100%)",
                }}
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  <div className="flex flex-col items-center text-center">
                    <Shield className="w-5 h-5 text-white mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Secure & Private
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Users className="w-5 h-5 text-white mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Multi-role Access
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Zap className="w-5 h-5 text-white mb-1" />
                    <div className="text-xs font-semibold text-white">
                      Easy Setup
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right video */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className={`${isLoaded ? "fade-in-up" : ""} w-full max-w-2xl`}>
                <div className="bg-brand-dark rounded-[2rem] p-3 sm:p-5 shadow-2xl">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <video
                      className="w-full h-full aspect-video object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/images/logo.jpg"
                      style={{ minHeight: 320, maxHeight: 520 }}
                    >
                      <source src="/Tour-web.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-2 right-2 card-modern px-2 py-1 shadow-lg animate-float">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-medium text-brand-mid">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-2 sm:p-4">
          <div
            className="card-modern w-full max-w-md sm:max-w-lg relative animate-fade-in"
            style={{
              minHeight: 420,
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
          >
            <button
              onClick={handleCloseContactForm}
              className="absolute top-3 right-3 text-brand-muted hover:text-brand-dark transition-colors p-2 rounded-full hover:bg-brand-divider z-10"
              aria-label="Close"
              tabIndex={0}
            >
              <X size={24} />
            </button>
            <div className="p-4 sm:p-6">
              <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
