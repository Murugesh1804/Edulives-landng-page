import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-white">EduLives</span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              Empowering educational institutions with comprehensive management solutions that evolve seamlessly with
              your needs. Transform your school's operations today.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#features" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 leading-relaxed">
                  123 Education Street
                  <br />
                  Tech City, TC 12345
                  <br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <span className="text-neutral-400 hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <span className="text-neutral-400 hover:text-white transition-colors duration-300">
                  hello@edulives.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} EduLives. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 sm:mt-0">
            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
