"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { BookOpen, Smartphone, Globe, Star, CheckCircle, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Counter Animation Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Video Player Component
function VideoPlayer({ thumbnail, title }: { thumbnail: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
      <Image
        src={thumbnail || "/placeholder.svg"}
        alt={title}
        width={800}
        height={450}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
        <Button
          size="lg"
          className="bg-white/90 hover:bg-white text-emerald-600 rounded-full w-20 h-20 p-0 transition-all duration-300 group-hover:scale-110"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
        </Button>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
          <p className="font-semibold text-gray-900 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Student Information System",
      description: "Complete student lifecycle management from admission to graduation",
      image: "/placeholder.svg?height=400&width=600",
      benefits: ["Digital admission process", "Student profiles & documents", "Academic history tracking"],
    },
    {
      title: "Attendance & Timetable",
      description: "Smart attendance tracking and intelligent timetable management",
      image: "/placeholder.svg?height=400&width=600",
      benefits: ["Biometric integration", "Auto timetable generation", "Real-time notifications"],
    },
    {
      title: "Academic Management",
      description: "Complete curriculum, examination, and assessment management",
      image: "/placeholder.svg?height=400&width=600",
      benefits: ["Lesson planning", "Online examinations", "Digital report cards"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              EduLives
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Success Stories
            </Link>
            <Link href="#support" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Support
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
              Request Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Background Pattern"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-300 rounded-full opacity-20 animate-bounce delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 animate-pulse">
                  🚀 Transform Your School Management Today
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Complete School
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">
                    Management Solution
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline your institution's operations with EduLives - the most comprehensive school management
                  system. Automate admissions, attendance, academics, finance, and communication in one powerful
                  platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Live Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6 bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    <AnimatedCounter end={50000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Schools & Colleges</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    <AnimatedCounter end={180} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/home.png"
                  alt="EduLives Dashboard Preview"
                  width={800}
                  height={600}
                 
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">See EduLives in Action</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how leading schools are transforming their operations with our comprehensive management platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <VideoPlayer
              thumbnail="/placeholder.svg?height=300&width=500"
              title="Complete School Management Demo - 5 min overview"
            />
            <VideoPlayer
              thumbnail="/placeholder.svg?height=300&width=500"
              title="Parent & Student Mobile App Tour - 3 min"
            />
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              Schedule Personal Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose EduLives with Real Images */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="School Background"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why School Leaders Choose EduLives?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduLives is the most trusted school management platform that transforms educational institutions with
              cutting-edge technology, comprehensive features, and unmatched support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="School Automation"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-emerald-900">Complete Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From student admissions to fee collection, examination management to report generation - automate
                  every aspect of your school operations seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Fast Performance"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-emerald-900">Lightning Fast Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built with modern cloud technology ensuring 99.9% uptime, instant data access, and real-time
                  synchronization across all devices and locations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Expert Support"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-emerald-900">24/7 Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated support team with education domain expertise, comprehensive training programs, and on-site
                  implementation assistance for seamless adoption.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Success Pattern"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-900">Trusted by Educational Leaders Worldwide</h3>
                <p className="text-gray-700 mb-6">
                  Join thousands of successful schools that have transformed their operations with EduLives. Our
                  platform supports all education boards including CBSE, ICSE, State Boards, IB, and International
                  curricula.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    CBSE Certified
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    ICSE Compatible
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    IB Approved
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    State Board Ready
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-emerald-600">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-emerald-600">
                    <AnimatedCounter end={5} suffix="M+" />
                  </div>
                  <div className="text-sm text-gray-600">Students Managed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-emerald-600">
                    <AnimatedCounter end={500} suffix="K+" />
                  </div>
                  <div className="text-sm text-gray-600">Teachers Empowered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section id="features" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Technology Background"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Feature Showcase</h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive school management modules with live previews
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl"
                        : "bg-white hover:bg-emerald-50 shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <h3
                      className={`text-xl font-bold mb-2 ${activeFeature === index ? "text-white" : "text-emerald-900"}`}
                    >
                      {feature.title}
                    </h3>
                    <p className={`mb-4 ${activeFeature === index ? "text-emerald-100" : "text-gray-600"}`}>
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle
                            className={`w-4 h-4 mr-2 ${activeFeature === index ? "text-emerald-200" : "text-emerald-500"}`}
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={features[activeFeature].image || "/placeholder.svg"}
                    alt={features[activeFeature].title}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-all duration-500 transform hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section with Real Images */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Mobile Background"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                EduLives Mobile App
                <span className="block text-emerald-600">Your School in Your Pocket</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Empower parents, teachers, and students with dedicated mobile apps. Stay connected, track progress, and
                manage school activities on the go.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Mobile Apps"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">iOS & Android Apps</h3>
                    <p className="text-gray-600">Native apps for all stakeholders with your school branding</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Notifications"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Real-time Notifications</h3>
                    <p className="text-gray-600">Instant alerts for attendance, assignments, and announcements</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Offline"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Offline Capability</h3>
                    <p className="text-gray-600">Access essential features even without internet connection</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    alt="Download on App Store"
                    width={180}
                    height={60}
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="EduLives Mobile App"
                  width={400}
                  height={600}
                  className="mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations with Real Logos */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Integration Background"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and enhance your school management experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Google Workspace", logo: "/placeholder.svg?height=80&width=120" },
              { name: "Microsoft Teams", logo: "/placeholder.svg?height=80&width=120" },
              { name: "Zoom", logo: "/placeholder.svg?height=80&width=120" },
              { name: "PayPal", logo: "/placeholder.svg?height=80&width=120" },
              { name: "Stripe", logo: "/placeholder.svg?height=80&width=120" },
              { name: "AWS", logo: "/placeholder.svg?height=80&width=120" },
            ].map((integration, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <Image
                    src={integration.logo || "/placeholder.svg"}
                    alt={integration.name}
                    width={120}
                    height={80}
                    className="mx-auto mb-2 hover:scale-110 transition-transform duration-200"
                  />
                  <p className="text-sm font-medium text-gray-700">{integration.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent transform hover:scale-105 transition-all duration-200"
            >
              View All 50+ Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials with Real Photos */}
      <section id="testimonials" className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Testimonial Background"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Educational Leaders</h2>
            <p className="text-xl text-gray-600">See how schools worldwide are transforming with EduLives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Principal, Delhi Public School",
                image: "/placeholder.svg?height=80&width=80",
                school: "/placeholder.svg?height=200&width=300",
                quote:
                  "EduLives has revolutionized our school operations. The comprehensive features and intuitive interface have made managing our 2000+ students effortless. Our administrative efficiency has improved by 80%.",
              },
              {
                name: "Mr. Rajesh Kumar",
                role: "Director, St. Mary's International",
                image: "/placeholder.svg?height=80&width=80",
                school: "/placeholder.svg?height=200&width=300",
                quote:
                  "The parent engagement features are outstanding. Parents love the real-time updates and the mobile app. Our parent satisfaction scores have increased significantly since implementing EduLives.",
              },
              {
                name: "Ms. Anita Patel",
                role: "Administrator, Greenwood Academy",
                image: "/placeholder.svg?height=80&width=80",
                school: "/placeholder.svg?height=200&width=300",
                quote:
                  "EduLives support team is exceptional. They provided comprehensive training and continue to assist us. The system is reliable, secure, and has transformed our digital infrastructure completely.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Image
                      src={testimonial.school || "/placeholder.svg"}
                      alt="School"
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent transform hover:scale-105 transition-all duration-200"
            >
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="CTA Background"
            width={1200}
            height={400}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your School?</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join thousands of successful schools worldwide. Start your digital transformation journey today with
              EduLives - the most comprehensive school management solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                Schedule Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-6 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
              </Button>
            </div>
            <p className="text-emerald-100 mt-4 text-sm">
              No credit card required • 30-day free trial • Setup in 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Footer Background"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">EduLives</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering educational institutions worldwide with comprehensive school management solutions.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-2 hover:scale-110 transition-all duration-200"
                >
                  <Globe className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-2 hover:scale-110 transition-all duration-200"
                >
                  <Smartphone className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Implementation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 EduLives Technologies. All rights reserved.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Contact: +91-9876543210</span>
                <span className="text-gray-400 text-sm">Email: hello@edulives.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
