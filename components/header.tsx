"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/edulives-logo.png"
                alt="EduLives Logo"
                width={180}
                height={45}
                className="object-contain h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                onClick={() => handleDropdownToggle('features')}
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-soft border border-gray-200/50 py-4">
                  <div className="space-y-2">
                    <Link href="#features" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      All Features
                    </Link>
                    <Link href="#dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Dashboard Overview
                    </Link>
                    <Link href="#analytics" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Analytics & Reports
                    </Link>
                    <Link href="#communication" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Communication Tools
                    </Link>
                    <Link href="#automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Automation
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                onClick={() => handleDropdownToggle('solutions')}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-soft border border-gray-200/50 py-4">
                  <div className="space-y-2">
                    <Link href="#roles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Role-Based Access
                    </Link>
                    <Link href="/roles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      For Schools
                    </Link>
                    <Link href="/roles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      For Colleges
                    </Link>
                    <Link href="/roles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      For Universities
                    </Link>
                    <Link href="/roles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      For Training Centers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              How It Works
            </Link>
            
            <Link href="#comparison" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Comparison
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                onClick={() => handleDropdownToggle('resources')}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-soft border border-gray-200/50 py-4">
                  <div className="space-y-2">
                    <Link href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Customer Stories
                    </Link>
                    <Link href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      FAQ
                    </Link>
                    <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      About Us
                    </Link>
                    <Link href="/features" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Features Page
                    </Link>
                    <Link href="#help" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      Help Center
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium px-6 py-2 rounded-xl transition-all duration-300"
            >
              Sign In
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-2">
              {/* Features Section */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Features
                </div>
                <Link 
                  href="#features" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Features
                </Link>
                <Link 
                  href="#dashboard" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard Overview
                </Link>
                <Link 
                  href="#analytics" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Analytics & Reports
                </Link>
                <Link 
                  href="#communication" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Communication Tools
                </Link>
              </div>

              {/* Solutions Section */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Solutions
                </div>
                <Link 
                  href="#roles" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Role-Based Access
                </Link>
                <Link 
                  href="/roles" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Schools
                </Link>
                <Link 
                  href="/roles" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Colleges
                </Link>
                <Link 
                  href="/roles" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Universities
                </Link>
              </div>

              {/* Main Sections */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Main Sections
                </div>
                <Link 
                  href="#how-it-works" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="#comparison" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comparison
                </Link>
                <Link 
                  href="#testimonials" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Customer Stories
                </Link>
                <Link 
                  href="#faq" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>

              {/* Pages */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Pages
                </div>
                <Link 
                  href="/about" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/features" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features Page
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-xl"
                >
                  Sign In
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-soft"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  )
}
