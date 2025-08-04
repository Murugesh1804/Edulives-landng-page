"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetStartedClick = () => {
    setIsContactFormOpen(true)
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <>
      <header
        className="sticky top-0 z-50 nav-modern transition-colors duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.3)"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "saturate(180%) blur(8px)" : undefined,
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(8px)" : undefined,
        }}
      >
        <div className="container mx-auto container-padding px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-4">
                <Image
                  src="/images/edulives-logo.png"
                  alt="EduLives Logo"
                  width={48}
                  height={48}
                  className="object-contain w-36 sm:w-60 h-10 sm:h-12"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-12">
              <Link href="/features" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
                Features
              </Link>
              <Link href="#how-it-works" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
                How It Works
              </Link>
              <Link href="/roles" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
                Roles
              </Link>
              <Link href="#testimonials" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
                Testimonials
              </Link>
              <Link href="/about" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
                About
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Button
                onClick={handleGetStartedClick}
                className="btn-modern btn-primary justify-start group text-white"
                style={{
                  background: 'linear-gradient(90deg, #4285C5 0%, #34A853 100%)'
                }}
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-3 rounded-2xl hover:bg-neutral-100 transition-all duration-300 focus-modern ml-2"
              style={{ minWidth: 44, minHeight: 44 }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-8 border-t border-neutral-200/50 bg-white/95 backdrop-blur-sm px-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/features" 
                  className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="/roles" 
                  className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Roles
                </Link>
                <Link 
                  href="#testimonials" 
                  className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  href="/about" 
                  className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col space-y-4 pt-6 border-t border-neutral-200/50">
                  <Button
                    onClick={handleGetStartedClick}
                    className="btn-modern btn-primary justify-start group text-white w-full py-4 text-lg"
                    style={{
                      background: 'linear-gradient(90deg, #4285C5 0%, #34A853 100%)'
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact Form Popup */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  )
}
