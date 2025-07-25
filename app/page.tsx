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

  // // Parallax scroll listener
  // useEffect(() => {
  //   const handle = () => setScrollY(window.scrollY)
  //   window.addEventListener("scroll", handle, { passive: true })
  //   return () => window.removeEventListener("scroll", handle)
  // }, [])

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/Edulives-logo.jpg"
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
                    className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-blue-50"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Try For Free
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Request Demo
              </motion.button>
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
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Try For Free
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Request Demo
                  </motion.button>
                </div>
              </nav>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section with Background Video */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            <source src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-gray-900/80 to-green-900/85"></div>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * window.innerWidth],
                y: [0, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-8 text-white">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <AnimatedBadge variant="warning" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-0 font-semibold shadow-lg">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 mr-2"
                    >
                      ⭐
                    </motion.div>
                    New Release: EduLives 5.0 with Advanced Analytics
                  </AnimatedBadge>
                </motion.div>
                
                <AnimatedText 
                  text="Complete School Management Software Solution"
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  stagger={0.1}
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-gray-200 leading-relaxed"
                >
                  Streamline your educational institution with our comprehensive management platform. From student
                  enrollment to graduation, manage every aspect of your school operations with powerful analytics and
                  seamless integration.
                </motion.p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg flex items-center justify-center space-x-2"
                >
                  <span>Schedule Live Demo</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-transparent text-lg backdrop-blur-sm"
                >
                  Start Free Trial
                </motion.button>
              </div>

              {/* <div className="flex items-center space-x-8 pt-4">
                <FloatingElement className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-blue-400"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedCounter value={50000} />+
                  </motion.div>
                  <div className="text-sm text-gray-300">Active Schools</div>
                </FloatingElement>
                <FloatingElement className="text-center" duration={3.5}>
                  <motion.div 
                    className="text-3xl font-bold text-green-400"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedCounter value={180} />+
                  </motion.div>
                  <div className="text-sm text-gray-300">Countries</div>
                </FloatingElement>
                <FloatingElement className="text-center" duration={4}>
                  <motion.div 
                    className="text-3xl font-bold text-yellow-400"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedCounter value={25} />+
                  </motion.div>
                  <div className="text-sm text-gray-300">Languages</div>
                </FloatingElement>
              </div> */}
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <FloatingElement className="relative z-10">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="EduLives Dashboard Interface"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&h=200&fit=crop"
                    alt="Mobile Application"
                    width={120}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
              </FloatingElement>
            </AnimatedSection>
          </div>
        </div>
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
      {/* <section className="py-20 relative overflow-hidden">
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
      </section> */}

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
                src="/Edulives-logo.jpg"
                alt="EduLives Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  Empowering educational institutions worldwide with innovative school management solutions that drive
                  student success, operational excellence, and institutional growth through technology.
                </p>
                {/* <div className="flex space-x-4">
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
                </div> */}
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
