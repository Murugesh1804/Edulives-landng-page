"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedButton, 
  AnimatedText, 
  FloatingElement,
  AnimatedBadge,
  ScrollProgress,
  AnimatedDivider,
  AnimatedCounter,
  ParallaxImage
} from "@/components/animated-components"
import { LoadingScreen } from "@/components/loading-screen"
import { useScrollAnimation, useParallax, useScrollProgress } from "@/hooks/use-scroll-animation"
import { 
  ChevronDown, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Play, 
  Users, 
  Globe, 
  Languages,
  Shield,
  BarChart3,
  Smartphone,
  Zap,
  Award,
  Clock,
  Headphones
} from "lucide-react"

export default function EduLivesLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const scrollProgress = useScrollProgress()

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
    <LoadingScreen 
      logoSrc="/logo.png" 
      logoAlt="EduLives Logo" 
    />
      <ScrollProgress />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="EduLives Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Product", "Features", "Pricing", "Resources", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <AnimatedButton 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Try For Free
              </AnimatedButton>
              <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Demo
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="bg-gray-600 block h-0.5 w-6 rounded-sm"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="bg-gray-600 block h-0.5 w-6 rounded-sm my-0.5"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="bg-gray-600 block h-0.5 w-6 rounded-sm"
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {["Product", "Features", "Pricing", "Resources", "About", "Contact"].map((item) => (
                  <Link 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                    Try For Free
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request Demo</Button>
                </div>
              </nav>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bg.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop')`
              }}
            />
          </video>
          {/* Professional overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Content Section - Full Width */}
            <AnimatedSection direction="up" className="space-y-12">
              <div className="space-y-10">
                {/* Professional Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <AnimatedBadge 
                    variant="warning" 
                    className="inline-flex items-center bg-blue-600 text-white border-0 font-semibold px-6 py-3 rounded-full text-base shadow-2xl backdrop-blur-sm"
                  >
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    New Release: EduLives 5.0 with Advanced Analytics
                  </AnimatedBadge>
                </motion.div>
                
                {/* Main Heading - Centered and Larger */}
                <div className="space-y-6">
  <AnimatedText
    text="Transform Your Educational Institution"
    className="text-xl lg:text-2xl xl:text-8xl font-bold leading-tight text-white tracking-tight"
    stagger={0.06}
  />
  <AnimatedText
    text="with Complete School Management Excellence"
    className="text-lg lg:text-lg xl:text-4xl font-light text-blue-200 leading-relaxed max-w-5xl mx-auto"
    stagger={0.04}
  />
</div>
                
                {/* Professional Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="space-y-8 max-w-4xl mx-auto"
                >
                  <p className="text-2xl lg:text-1.5xl text-gray-200 leading-relaxed font-light">
                    Empower your educational institution with our comprehensive management platform. 
                    Streamline operations, enhance student outcomes, and drive institutional excellence 
                    with cutting-edge technology trusted by leading schools worldwide.
                  </p>
                  
                  {/* Enhanced Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    <motion.div 
                      className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-white">Student Management</div>
                      <div className="text-sm text-gray-300 text-center">Complete student lifecycle management</div>
                    </motion.div>
                    <motion.div 
                      className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-white">Advanced Analytics</div>
                      <div className="text-sm text-gray-300 text-center">Data-driven insights & reporting</div>
                    </motion.div>
                    <motion.div 
                      className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-white">Multi-Campus</div>
                      <div className="text-sm text-gray-300 text-center">Unified management across locations</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
              >
                <AnimatedButton 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Schedule Live Demo
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1M7 7h10v10H7V7z" />
                  </svg>
                </AnimatedButton>
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-5 text-xl font-semibold rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
                >
                  Start Free Trial
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </AnimatedButton>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/20 max-w-4xl mx-auto"
              >
                <FloatingElement className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    <AnimatedCounter value={50000} />+
                  </div>
                  <div className="text-lg text-gray-300 font-medium">Active Schools Worldwide</div>
                  <div className="text-sm text-blue-300 mt-1">Across 6 continents</div>
                </FloatingElement>
                <FloatingElement className="text-center" duration={3.5}>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    <AnimatedCounter value={180} />+
                  </div>
                  <div className="text-lg text-gray-300 font-medium">Countries Served</div>
                  <div className="text-sm text-blue-300 mt-1">Global presence</div>
                </FloatingElement>
                <FloatingElement className="text-center" duration={4}>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    <AnimatedCounter value={25} />+
                  </div>
                  <div className="text-lg text-gray-300 font-medium">Languages Supported</div>
                  <div className="text-sm text-blue-300 mt-1">Localized experience</div>
                </FloatingElement>
              </motion.div>

              {/* Professional Certification/Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="pt-12"
              >
                <div className="text-lg text-gray-400 mb-6">Trusted by leading educational institutions worldwide</div>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                  <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                  <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                  <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                  <div className="h-12 w-32 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Professional Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600"></div>
      </section>

      {/* Why EduLives Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose EduLives School Management System?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              EduLives provides a comprehensive educational management ecosystem designed specifically for modern
              schools. Our platform combines powerful functionality with intuitive design to help educational
              institutions operate more efficiently and effectively.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  title: "Streamlined Operations",
                  description: "Reduce administrative workload by up to 70% with intelligent automation, integrated workflows, and centralized data management across all school departments.",
                  color: "bg-blue-600"
                },
                {
                  icon: Shield,
                  title: "Data Security & Compliance",
                  description: "Enterprise-grade security with bank-level encryption, regular security audits, and full compliance with FERPA, GDPR, and other educational data protection standards.",
                  color: "bg-green-500"
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Make data-driven decisions with comprehensive reporting, predictive analytics, and real-time insights into student performance, attendance patterns, and institutional metrics.",
                  color: "bg-yellow-500"
                }
              ].map((feature, index) => (
                <AnimatedCard key={index} delay={index * 0.2} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedSection direction="right" className="relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop"
                alt="Teachers collaborating with technology"
                className="rounded-2xl shadow-xl"
                speed={0.3}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/90"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <AnimatedSection className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">Comprehensive School Management Modules</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to run a modern educational institution - from student enrollment to alumni
              management, all integrated into one powerful platform.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Student Information System",
                description: "Complete student lifecycle management including enrollment, academic records, attendance tracking, and progress monitoring with detailed reporting capabilities.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
                color: "bg-blue-600",
                icon: Users
              },
              {
                title: "Academic Management",
                description: "Comprehensive curriculum planning, grade management, examination scheduling, report card generation, and academic performance analytics for informed decision making.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
                color: "bg-green-500",
                icon: Award
              },
              {
                title: "Parent Communication Portal",
                description: "Real-time communication platform enabling instant messaging, progress updates, event notifications, and virtual parent-teacher conferences for enhanced engagement.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
                color: "bg-yellow-500",
                icon: Globe
              },
              {
                title: "Timetable & Scheduling",
                description: "Intelligent scheduling system with conflict resolution, resource optimization, substitute teacher management, and automated timetable generation for all classes.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
                color: "bg-blue-600",
                icon: Clock
              },
              {
                title: "Financial Management",
                description: "Complete fee management with online payments, installment tracking, financial reporting, budget planning, and integration with popular payment gateways.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
                color: "bg-green-500",
                icon: BarChart3
              },
              {
                title: "Digital Learning Platform",
                description: "Integrated learning management system with virtual classrooms, assignment distribution, online assessments, and collaborative learning tools for modern education.",
                image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&h=200&fit=crop",
                color: "bg-yellow-500",
                icon: Smartphone
              },
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="group border-0 shadow-2xl overflow-hidden bg-white/95">
                <div className="relative h-48 overflow-hidden">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${feature.color} rounded-lg p-3`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                  <AnimatedButton variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </AnimatedButton>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12 text-white">
            <p className="text-lg mb-6">
              <span className="font-bold text-2xl text-yellow-400">
                <AnimatedCounter value={50} />+
              </span> additional modules available in EduLives Complete Suite
            </p>
            <AnimatedButton
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              Explore All Features
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-blue-50/95"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Modern Educational Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduLives is designed with educators, administrators, and students in mind, providing intuitive tools that
              enhance learning outcomes and operational efficiency.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "User-Friendly Interface",
                description: "Intuitive design that requires minimal training. Teachers, administrators, and parents can navigate the system effortlessly, reducing adoption time and increasing productivity from day one.",
                color: "bg-blue-600"
              },
              {
                icon: Zap,
                title: "Scalable & Flexible",
                description: "Grows with your institution from small schools to large university systems. Modular architecture allows you to add features as needed, ensuring you only pay for what you use.",
                color: "bg-green-500"
              },
              {
                icon: Headphones,
                title: "24/7 Expert Support",
                description: "Dedicated support team with deep education industry knowledge. Comprehensive training programs, documentation, and ongoing assistance ensure your success with EduLives.",
                color: "bg-yellow-500"
              }
            ].map((benefit, index) => (
              <AnimatedCard key={index} delay={index * 0.2} className="text-center p-8 border-0 shadow-lg bg-white">
                <div className={`w-16 h-16 ${benefit.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/90"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl font-bold mb-6">EduLives Mobile Applications</h2>
                <p className="text-xl text-gray-200 mb-8">
                  Access your school management system anywhere, anytime with our native mobile applications. Available
                  for iOS and Android with full offline capabilities and real-time synchronization.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Custom Branded Applications",
                    description: "White-label mobile apps featuring your school's branding, colors, and logo. Available on both App Store and Google Play Store with your institution's identity."
                  },
                  {
                    title: "Real-Time Notifications",
                    description: "Instant push notifications for attendance alerts, grade updates, fee reminders, event announcements, and emergency communications to keep everyone informed."
                  },
                  {
                    title: "Offline Functionality",
                    description: "Continue working even without internet connectivity. Data syncs automatically when connection is restored, ensuring uninterrupted access to essential features."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="glass rounded-xl p-6 border border-white/20"
                  >
                    <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-4">
                <AnimatedButton className="bg-black rounded-lg p-4 hover-lift cursor-pointer">
                  <div className="text-white text-sm">Download on the</div>
                  <div className="text-white text-lg font-bold">App Store</div>
                </AnimatedButton>
                <AnimatedButton className="bg-black rounded-lg p-4 hover-lift cursor-pointer">
                  <div className="text-white text-sm">Get it on</div>
                  <div className="text-white text-lg font-bold">Google Play</div>
                </AnimatedButton>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <FloatingElement>
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=600&fit=crop"
                  alt="Students using EduLives mobile application"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </FloatingElement>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Third-Party Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EduLives integrates with over 50 popular educational tools and services, creating a unified ecosystem that
              works with your existing technology infrastructure.
            </p>
          </AnimatedSection>

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
              <AnimatedCard key={index} delay={index * 0.05} className="bg-white rounded-2xl p-6 shadow-lg text-center border">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <p className="text-sm font-semibold text-gray-900">{integration}</p>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <AnimatedButton
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              View All Integrations
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-blue-900/90"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <AnimatedSection className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">Trusted by Educational Leaders Worldwide</h2>
            <p className="text-xl text-gray-200">
              See what school administrators and educators are saying about their experience with EduLives.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedCard className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-6 h-6 bg-yellow-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                <motion.blockquote 
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl text-gray-700 text-center mb-8 leading-relaxed"
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.blockquote>
                <motion.div 
                  key={`author-${currentTestimonial}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center space-x-4"
                >
                  <Image
                    src={testimonials[currentTestimonial].image}
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
                </motion.div>
              </CardContent>
            </AnimatedCard>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
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
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about EduLives School Management Software implementation and features.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What is EduLives School Management Software?",
                  answer: "EduLives is a comprehensive cloud-based school management platform that automates and streamlines all academic and administrative activities. From student admission to alumni management, EduLives provides a unified solution that helps educational institutions operate more efficiently, reduce administrative overhead, and make data-driven decisions to improve student outcomes."
                },
                {
                  question: "How long does it take to implement EduLives in our school?",
                  answer: "Most educational institutions can be fully operational with EduLives within 2-4 weeks. Our implementation timeline includes data migration, staff training, system configuration, and testing phases. We provide dedicated implementation specialists, comprehensive training materials, and ongoing support to ensure a smooth transition with minimal disruption to your daily operations."
                },
                {
                  question: "Is EduLives suitable for different types of educational institutions?",
                  answer: "Yes, EduLives is designed to accommodate various educational systems including K-12 schools, colleges, universities, and vocational institutions. Our platform supports multiple curricula including CBSE, ICSE, State Boards, International Baccalaureate (IB), Cambridge, and other international standards. The system can be customized to meet specific institutional requirements and local regulations."
                },
                {
                  question: "What kind of support and training do you provide?",
                  answer: "We offer comprehensive 24/7 customer support through multiple channels including phone, email, live chat, and video conferencing. Our support team consists of education technology specialists who understand the unique challenges of educational institutions. We provide on-site training, virtual workshops, detailed documentation, video tutorials, and ongoing professional development sessions."
                },
                {
                  question: "How secure is our institutional data with EduLives?",
                  answer: "Data security is our highest priority. EduLives employs bank-level encryption (AES-256), multi-factor authentication, regular security audits, and penetration testing. We comply with international data protection regulations including FERPA, GDPR, COPPA, and other regional privacy laws. All data is stored in secure, geographically distributed cloud servers with automated backups and disaster recovery protocols."
                },
                {
                  question: "Can EduLives integrate with our existing systems and tools?",
                  answer: "Absolutely. EduLives offers robust integration capabilities with over 50 popular educational tools and services including Google Workspace, Microsoft 365, learning management systems, payment gateways, communication platforms, and third-party applications. Our API allows for custom integrations, and our technical team can assist with connecting your existing systems to ensure seamless data flow."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="bg-white rounded-2xl shadow-lg border-0"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-bold text-gray-900 hover:no-underline text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900/90 to-green-900/90"></div>
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Educational Institution?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join over 50,000 educational institutions worldwide who trust EduLives to streamline their operations,
              improve student outcomes, and drive institutional excellence. Start your digital transformation journey
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Schedule Live Demo
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Start Free Trial
              </AnimatedButton>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              No credit card required • 30-day free trial • Implementation support included
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
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
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-blue-600 rounded-lg"
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-10 h-10 bg-green-500 rounded-lg"
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-yellow-500 rounded-lg"
                  />
                </div>
              </motion.div>
            </div>

            {[
              {
                title: "Product",
                links: ["Features Overview", "Mobile Applications", "System Integrations", "Security & Compliance", "Pricing Plans"]
              },
              {
                title: "Resources",
                links: ["Help Center", "Documentation", "Training Webinars", "Case Studies", "Best Practices"]
              },
              {
                title: "Company",
                links: ["About EduLives", "Career Opportunities", "Contact Support", "Privacy Policy", "Terms of Service"]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-bold mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <AnimatedDivider className="border-gray-800 mt-12" color="#374151" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              © 2025 EduLives Technologies. All Rights Reserved. Transforming Education Through Technology.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Contact Sales:</span>
              <span className="text-white font-semibold">+1-800-EDULIVES</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
