"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EduLivesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Smooth parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      text: "EduLives has completely transformed how we manage our school operations. The integrated approach to student information management, attendance tracking, and parent communication has increased our administrative efficiency by 85%. Our teachers can now focus more on teaching rather than paperwork.",
      author: "Dr. Sarah Johnson",
      position: "Principal",
      school: "Greenwood International School, California",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "The parent engagement features in EduLives are exceptional. We've seen a 200% increase in parent participation in school activities since implementation. The real-time grade updates and communication tools have strengthened our school community significantly.",
      author: "Michael Chen",
      position: "IT Director",
      school: "Riverside Academy, New York",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "From admission processing to graduation ceremonies, EduLives handles every aspect seamlessly. Our administrative workload has decreased by 60%, allowing us to invest more time in curriculum development and student success initiatives.",
      author: "Dr. Priya Patel",
      position: "Academic Director",
      school: "Future Leaders International School, Texas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ]

  // // Parallax scroll listener
  // useEffect(() => {
  //   const handle = () => setScrollY(window.scrollY)
  //   window.addEventListener("scroll", handle, { passive: true })
  //   return () => window.removeEventListener("scroll", handle)
  // }, [])

  // Auto-cycle testimonials
  useEffect(() => {
    const id = setInterval(() =>
      setCurrentTestimonial((p) => (p + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [testimonials.length])

  // // Smooth scroll when clicking links
  // useEffect(() => {
  //   const links = Array.from(document.querySelectorAll('a[href^="#"]'))
  //   links.forEach((link) =>
  //     link.addEventListener("click", (e) => {
  //       e.preventDefault()
  //       const targetId = link.getAttribute("href")!
  //       const el = document.querySelector(targetId)
  //       el?.scrollIntoView({ behavior: "smooth", block: "start" })
  //       setIsMenuOpen(false)
  //     })
  //   )
  // }, [])

  // const parallax = (factor: number) => ({
  //   transform: `translateY(${scrollY * factor}px)`,
  //   transition: "transform 0.1s ease-out",
  // })
  return (
       <div className="min-h-screen scroll-smooth bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/Edulives-logo.jpg"
                alt="EduLives Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#product" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Product
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="#resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Resources
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Try For Free
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request Demo</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <Link href="#product" className="text-gray-700 hover:text-blue-600 font-medium">
                  Product
                </Link>
                <Link href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
                  Features
                </Link>
                <Link href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
                  Pricing
                </Link>
                <Link href="#resources" className="text-gray-700 hover:text-blue-600 font-medium">
                  Resources
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                    Try For Free
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request Demo</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-gray-900/80 to-green-900/85"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <Badge className="bg-yellow-500 text-black border-0 font-semibold">
                  New Release: EduLives 5.0 with Advanced Analytics
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Complete School Management
                  <span className="block gradient-text">Software Solution</span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Streamline your educational institution with our comprehensive management platform. From student
                  enrollment to graduation, manage every aspect of your school operations with powerful analytics and
                  seamless integration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Schedule Live Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50,000+</div>
                  <div className="text-sm text-gray-300">Active Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">180+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">25+</div>
                  <div className="text-sm text-gray-300">Languages</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="EduLives Dashboard Interface"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&h=200&fit=crop"
                    alt="Mobile Application"
                    width={120}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EduLives Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose EduLives School Management System?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              EduLives provides a comprehensive educational management ecosystem designed specifically for modern
              schools. Our platform combines powerful functionality with intuitive design to help educational
              institutions operate more efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Streamlined Operations</h3>
                <p className="text-gray-600">
                  Reduce administrative workload by up to 70% with intelligent automation, integrated workflows, and
                  centralized data management across all school departments.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Security & Compliance</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with bank-level encryption, regular security audits, and full compliance
                  with FERPA, GDPR, and other educational data protection standards.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">
                  Make data-driven decisions with comprehensive reporting, predictive analytics, and real-time insights
                  into student performance, attendance patterns, and institutional metrics.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
                alt="Teachers collaborating with technology"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">Comprehensive School Management Modules</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to run a modern educational institution - from student enrollment to alumni
              management, all integrated into one powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Student Information System",
                description:
                  "Complete student lifecycle management including enrollment, academic records, attendance tracking, and progress monitoring with detailed reporting capabilities.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
                color: "bg-blue-600",
              },
              {
                title: "Academic Management",
                description:
                  "Comprehensive curriculum planning, grade management, examination scheduling, report card generation, and academic performance analytics for informed decision making.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
                color: "bg-green-500",
              },
              {
                title: "Parent Communication Portal",
                description:
                  "Real-time communication platform enabling instant messaging, progress updates, event notifications, and virtual parent-teacher conferences for enhanced engagement.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
                color: "bg-yellow-500",
              },
              {
                title: "Timetable & Scheduling",
                description:
                  "Intelligent scheduling system with conflict resolution, resource optimization, substitute teacher management, and automated timetable generation for all classes.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
                color: "bg-blue-600",
              },
              {
                title: "Financial Management",
                description:
                  "Complete fee management with online payments, installment tracking, financial reporting, budget planning, and integration with popular payment gateways.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
                color: "bg-green-500",
              },
              {
                title: "Digital Learning Platform",
                description:
                  "Integrated learning management system with virtual classrooms, assignment distribution, online assessments, and collaborative learning tools for modern education.",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&h=200&fit=crop",
                color: "bg-yellow-500",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-2xl overflow-hidden bg-white/95">
                <div className="relative h-48 overflow-hidden">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${feature.color} rounded-lg p-3`}>
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 text-white">
            <p className="text-lg mb-6">
              <span className="font-bold text-2xl text-yellow-400">50+</span> additional modules available in EduLives
              Complete Suite
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              Explore All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute inset-0 bg-blue-50/95"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Modern Educational Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduLives is designed with educators, administrators, and students in mind, providing intuitive tools that
              enhance learning outcomes and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg bg-white hover-lift">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6"></div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">User-Friendly Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intuitive design that requires minimal training. Teachers, administrators, and parents can navigate
                  the system effortlessly, reducing adoption time and increasing productivity from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white hover-lift">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6"></div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Scalable & Flexible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Grows with your institution from small schools to large university systems. Modular architecture
                  allows you to add features as needed, ensuring you only pay for what you use.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white hover-lift">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-6"></div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">24/7 Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated support team with deep education industry knowledge. Comprehensive training programs,
                  documentation, and ongoing assistance ensure your success with EduLives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl font-bold mb-6">EduLives Mobile Applications</h2>
                <p className="text-xl text-gray-200 mb-8">
                  Access your school management system anywhere, anytime with our native mobile applications. Available
                  for iOS and Android with full offline capabilities and real-time synchronization.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="font-bold text-white text-lg mb-2">Custom Branded Applications</h3>
                  <p className="text-gray-300">
                    White-label mobile apps featuring your school's branding, colors, and logo. Available on both App
                    Store and Google Play Store with your institution's identity.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="font-bold text-white text-lg mb-2">Real-Time Notifications</h3>
                  <p className="text-gray-300">
                    Instant push notifications for attendance alerts, grade updates, fee reminders, event announcements,
                    and emergency communications to keep everyone informed.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="font-bold text-white text-lg mb-2">Offline Functionality</h3>
                  <p className="text-gray-300">
                    Continue working even without internet connectivity. Data syncs automatically when connection is
                    restored, ensuring uninterrupted access to essential features.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-black rounded-lg p-4 hover-lift cursor-pointer">
                  <div className="text-white text-sm">Download on the</div>
                  <div className="text-white text-lg font-bold">App Store</div>
                </div>
                <div className="bg-black rounded-lg p-4 hover-lift cursor-pointer">
                  <div className="text-white text-sm">Get it on</div>
                  <div className="text-white text-lg font-bold">Google Play</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=600&fit=crop"
                alt="Students using EduLives mobile application"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Third-Party Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduLives integrates with over 50 popular educational tools and services, creating a unified ecosystem that
              works with your existing technology infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Google Workspace for Education",
              "Microsoft 365 Education",
              "Zoom Video Conferencing",
              "PayPal Payment Gateway",
              "Stripe Payment Processing",
              "WhatsApp Business API",
              "SMS Gateway Services",
              "Biometric Attendance Systems",
              "Google Meet Integration",
              "BigBlueButton LMS",
              "Canvas Learning Platform",
              "Moodle Course Management",
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center border">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <p className="text-sm font-semibold text-gray-900">{integration}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">Trusted by Educational Leaders Worldwide</h2>
            <p className="text-xl text-gray-200">
              See what school administrators and educators are saying about their experience with EduLives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <blockquote className="text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].author}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-gray-200"
                  />
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                    <div className="text-blue-600 font-semibold">{testimonials[currentTestimonial].school}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-white shadow-lg" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about EduLives School Management Software implementation and features.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What is EduLives School Management Software?",
                  answer:
                    "EduLives is a comprehensive cloud-based school management platform that automates and streamlines all academic and administrative activities. From student admission to alumni management, EduLives provides a unified solution that helps educational institutions operate more efficiently, reduce administrative overhead, and make data-driven decisions to improve student outcomes.",
                },
                {
                  question: "How long does it take to implement EduLives in our school?",
                  answer:
                    "Most educational institutions can be fully operational with EduLives within 2-4 weeks. Our implementation timeline includes data migration, staff training, system configuration, and testing phases. We provide dedicated implementation specialists, comprehensive training materials, and ongoing support to ensure a smooth transition with minimal disruption to your daily operations.",
                },
                {
                  question: "Is EduLives suitable for different types of educational institutions?",
                  answer:
                    "Yes, EduLives is designed to accommodate various educational systems including K-12 schools, colleges, universities, and vocational institutions. Our platform supports multiple curricula including CBSE, ICSE, State Boards, International Baccalaureate (IB), Cambridge, and other international standards. The system can be customized to meet specific institutional requirements and local regulations.",
                },
                {
                  question: "What kind of support and training do you provide?",
                  answer:
                    "We offer comprehensive 24/7 customer support through multiple channels including phone, email, live chat, and video conferencing. Our support team consists of education technology specialists who understand the unique challenges of educational institutions. We provide on-site training, virtual workshops, detailed documentation, video tutorials, and ongoing professional development sessions.",
                },
                {
                  question: "How secure is our institutional data with EduLives?",
                  answer:
                    "Data security is our highest priority. EduLives employs bank-level encryption (AES-256), multi-factor authentication, regular security audits, and penetration testing. We comply with international data protection regulations including FERPA, GDPR, COPPA, and other regional privacy laws. All data is stored in secure, geographically distributed cloud servers with automated backups and disaster recovery protocols.",
                },
                {
                  question: "Can EduLives integrate with our existing systems and tools?",
                  answer:
                    "Absolutely. EduLives offers robust integration capabilities with over 50 popular educational tools and services including Google Workspace, Microsoft 365, learning management systems, payment gateways, communication platforms, and third-party applications. Our API allows for custom integrations, and our technical team can assist with connecting your existing systems to ensure seamless data flow.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="bg-white rounded-2xl shadow-lg border-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-bold text-gray-900 hover:no-underline text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop')`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900/90 to-green-900/90"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Educational Institution?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join over 50,000 educational institutions worldwide who trust EduLives to streamline their operations,
              improve student outcomes, and drive institutional excellence. Start your digital transformation journey
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Schedule Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Start Free Trial
              </Button>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              No credit card required • 30-day free trial • Implementation support included
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edulives-01.jpg-3Osewoj8qJ1ey5vaZ3YnbGIWOesPA4.jpeg"
                alt="EduLives Logo"
                width={150}
                height={40}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering educational institutions worldwide with innovative school management solutions that drive
                student success, operational excellence, and institutional growth through technology.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
                <div className="w-10 h-10 bg-green-500 rounded-lg"></div>
                <div className="w-10 h-10 bg-yellow-500 rounded-lg"></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features Overview
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    System Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Training Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Best Practices
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About EduLives
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EduLives Technologies. All Rights Reserved. Transforming Education Through Technology.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Contact Sales:</span>
              <span className="text-white font-semibold">+1-800-EDULIVES</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
