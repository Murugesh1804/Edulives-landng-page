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
        className="sticky top-0 z-50 nav-modern transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.8)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(224, 224, 224, 0.5)" : "none",
        }}
      >
        <div className="container mx-auto container-padding px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/edulives-logo.png"
                  alt="EduLives Logo"
                  width={40}
                  height={40}
                  className="object-contain w-28 sm:w-40 h-8 sm:h-10"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <Link href="/features" className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 hover:-translate-y-0.5">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 hover:-translate-y-0.5">
                How It Works
              </Link>
              <Link href="/roles" className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 hover:-translate-y-0.5">
                Roles
              </Link>
              <Link href="#testimonials" className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 hover:-translate-y-0.5">
                Testimonials
              </Link>
              <Link href="/about" className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 hover:-translate-y-0.5">
                About
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <Button
                onClick={handleGetStartedClick}
                variant="gradient"
                className="group text-sm px-4 py-2"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-2xl hover:bg-brand-divider transition-all duration-300 focus-modern ml-2"
              style={{ minWidth: 36, minHeight: 36 }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-brand-divider bg-white/95 backdrop-blur-sm px-2 animate-fade-in">
              <nav className="flex flex-col space-y-2">
                <Link 
                  href="/features" 
                  className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 py-2 hover:bg-brand-primary/5 rounded-2xl px-3 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 py-2 hover:bg-brand-primary/5 rounded-2xl px-3 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="/roles" 
                  className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 py-2 hover:bg-brand-primary/5 rounded-2xl px-3 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Roles
                </Link>
                <Link 
                  href="#testimonials" 
                  className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 py-2 hover:bg-brand-primary/5 rounded-2xl px-3 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  href="/about" 
                  className="text-sm font-medium text-brand-mid hover:text-brand-primary transition-all duration-300 py-2 hover:bg-brand-primary/5 rounded-2xl px-3 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-brand-divider">
                  <Button
                    onClick={handleGetStartedClick}
                    variant="gradient"
                    className="group w-full py-3 text-base"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
