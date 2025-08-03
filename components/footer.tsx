import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo_white.png"
                alt="EduLives Logo"
                width={180}
                height={45}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering educational institutions with simple, effective management solutions. 
              Transform your school operations with our comprehensive platform.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Features
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Pricing
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Demo
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Integrations
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                API
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                About Us
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Careers
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Blog
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Press
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Partners
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 8047 0918 07</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@edulives.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
            <div className="pt-4">
              <Link 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Security</Link>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EduLives. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
