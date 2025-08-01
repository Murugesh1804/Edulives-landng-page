import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="footer-modern relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding py-24 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-white">EduLives</span>
            </div>
            <p className="text-body text-neutral-300 max-w-sm leading-relaxed">
              Empowering educational institutions with comprehensive management solutions that evolve seamlessly with
              your needs. Transform your school's operations today.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300 hover-lift">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300 hover-lift">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300 hover-lift">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all duration-300 hover-lift">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold mb-8 text-xl">Product</h3>
            <ul className="space-y-6">
              <li>
                <Link href="#features" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-8 text-xl">Company</h3>
            <ul className="space-y-6">
              <li>
                <Link href="#about" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body text-neutral-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-5 h-5 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-8 text-xl">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" />
                <span className="text-body text-neutral-300 leading-relaxed">
                  123 Education Street
                  <br />
                  Tech City, TC 12345
                  <br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-neutral-400 flex-shrink-0" />
                <span className="text-body text-neutral-300 hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-neutral-400 flex-shrink-0" />
                <span className="text-body text-neutral-300 hover:text-white transition-colors duration-300">
                  hello@edulives.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="divider-modern mt-20 pt-12 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-body text-neutral-400">
            © {new Date().getFullYear()} EduLives. All rights reserved.
          </p>
          <div className="flex space-x-12 mt-6 sm:mt-0">
            <Link href="#" className="text-body text-neutral-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-body text-neutral-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-body text-neutral-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
