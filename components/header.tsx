"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
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
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/edulives-logo.png"
                alt="EduLives Logo"
                width={48}
                height={48}
                className="object-contain w-60 h-12"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link href="/features" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
              Features
            </Link>
            <Link href="#how-it-works" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
              How It Works
            </Link>
            <Link href="#pricing" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="#about" className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300">
              About
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
          <Button
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
            className="lg:hidden p-3 rounded-2xl hover:bg-neutral-100 transition-all duration-300 focus-modern" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-8 border-t border-neutral-200/50 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-6">
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
                href="#pricing" 
                className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#testimonials" 
                className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#about" 
                className="text-body font-medium text-neutral-700 hover:text-blue-600 transition-colors duration-300 py-3 hover:bg-blue-50/50 rounded-2xl px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-4 pt-6 border-t border-neutral-200/50">
                <Button
                  className="btn-modern btn-primary justify-start group text-white"
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
  )
}
