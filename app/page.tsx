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
      text: "The role-based dashboards in EduLives have revolutionized our school management. Each user gets exactly what they need - principals have institutional oversight, teachers focus on their classes, and parents stay connected. The multi-level approval workflows have streamlined our decision-making process significantly.",
      author: "Dr. Sarah Johnson",
      position: "Principal",
      school: "Greenwood International School, California",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "As an IT administrator, I appreciate the granular role controls and comprehensive audit logs. The system's security features and user management capabilities make it easy to maintain data integrity while providing appropriate access to different user groups.",
      author: "Michael Chen",
      position: "IT Director",
      school: "Riverside Academy, New York",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      text: "The integrated approach to academics, finance, and administration has transformed our operations. Real-time monitoring of attendance, assignments, and performance allows us to intervene early and support student success. The inventory and transport modules have eliminated manual tracking completely.",
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
                  text="Enterprise School Management Platform"
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  stagger={0.1}
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl text-gray-200 leading-relaxed"
                >
                  Comprehensive role-based dashboards for principals, teachers, students, and parents. Manage academics, 
                  finance, inventory, transport, and communication through a unified platform with real-time analytics 
                  and multi-level approval workflows.
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
                  <span>Explore Dashboard</span>
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
                  Request Demo
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-Grade School Management Platform</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              EduLives delivers comprehensive role-based dashboards with multi-level approval workflows, real-time 
              monitoring, and integrated modules for academics, finance, inventory, transport, and communication. 
              Designed for modern educational institutions seeking operational excellence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  title: "Role-Based Dashboards",
                  description: "Tailored interfaces for principals, teachers, students, parents, and administrators with role-specific permissions, workflows, and real-time access to relevant data and functions.",
                  color: "bg-blue-600"
                },
                {
                  icon: Shield,
                  title: "Multi-Level Approvals & Security",
                  description: "Enterprise-grade security with hierarchical approval workflows, audit logs, role-based access controls, and compliance with educational data protection standards.",
                  color: "bg-green-500"
                },
                {
                  icon: BarChart3,
                  title: "Real-Time Analytics & Monitoring",
                  description: "Comprehensive dashboards with live attendance tracking, performance monitoring, financial reports, inventory status, and predictive analytics for informed decision-making.",
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
            <h2 className="text-4xl font-bold mb-6">Core Platform Features</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive modules covering every aspect of school operations - from academic management to 
              administrative functions, all integrated through role-based dashboards with real-time synchronization.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Role-Based Dashboards",
                description: "Customized interfaces for principals, vice principals, HODs, teachers, students, parents, admin staff, IT admins, and counselors with role-specific permissions and workflows.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
                color: "bg-blue-600",
                icon: Users
              },
              {
                title: "Real-Time Monitoring",
                description: "Live attendance tracking, performance monitoring, behavioral analytics, and academic progress with instant notifications and automated reporting systems.",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
                color: "bg-green-500",
                icon: Award
              },
              {
                title: "Assignment & Homework Tracking",
                description: "Complete assignment lifecycle management with submission tracking, grading workflows, plagiarism detection, and automated notifications to students and parents.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
                color: "bg-yellow-500",
                icon: Globe
              },
              {
                title: "Fee & Inventory Management",
                description: "Comprehensive financial management with online payments, installment tracking, inventory control, asset management, and automated billing with receipt generation.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
                color: "bg-blue-600",
                icon: Clock
              },
              {
                title: "Transport & Hostel Integration",
                description: "Integrated transport management with route optimization, vehicle tracking, hostel management, room allocation, and real-time communication with parents and staff.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
                color: "bg-green-500",
                icon: BarChart3
              },
              {
                title: "Secure Communication Hub",
                description: "Multi-channel communication platform with announcements, PTM scheduling, chat functionality, email integration, and document sharing with role-based access controls.",
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
                <AnimatedCounter value={9} />
              </span> specialized role-based dashboards with 
              <span className="font-bold text-2xl text-yellow-400 ml-2">
                <AnimatedCounter value={25} />+
              </span> integrated modules
            </p>
            <AnimatedButton
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              View Role Dashboards
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Role-Based Dashboards Section */}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Role-Based Dashboards for Every User</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customized interfaces designed specifically for each role's responsibilities, providing relevant tools, 
              data, and workflows to maximize productivity and effectiveness.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Principal",
                responsibilities: "Complete school oversight & approvals",
                features: ["Institutional analytics", "Multi-level approvals", "Staff performance monitoring", "Financial oversight", "Strategic planning tools"],
                color: "bg-blue-600"
              },
              {
                role: "Vice Principal",
                responsibilities: "Academic coordination & staff monitoring",
                features: ["Academic performance tracking", "Teacher evaluation", "Curriculum oversight", "Disciplinary management", "Event coordination"],
                color: "bg-green-500"
              },
              {
                role: "HOD",
                responsibilities: "Lesson plan review, department reports",
                features: ["Department analytics", "Lesson plan approval", "Resource allocation", "Subject performance", "Teacher mentoring"],
                color: "bg-yellow-500"
              },
              {
                role: "Teacher",
                responsibilities: "Class management, assignment & grade tracking",
                features: ["Class dashboard", "Assignment creation", "Grade management", "Attendance tracking", "Parent communication"],
                color: "bg-purple-500"
              },
              {
                role: "Student",
                responsibilities: "Assignments, results, calendar, resources",
                features: ["Assignment submission", "Grade access", "Timetable view", "E-learning resources", "Communication portal"],
                color: "bg-indigo-500"
              },
              {
                role: "Parent",
                responsibilities: "Child's performance, fee status, communication",
                features: ["Child's progress", "Fee management", "Communication hub", "Event calendar", "Transport tracking"],
                color: "bg-pink-500"
              },
              {
                role: "Admin Staff",
                responsibilities: "Admission, fee, inventory, events, transport",
                features: ["Admission management", "Fee collection", "Inventory control", "Event planning", "Transport coordination"],
                color: "bg-red-500"
              },
              {
                role: "IT Admin",
                responsibilities: "Role control, account creation, system logs",
                features: ["User management", "System monitoring", "Security logs", "Backup management", "Integration setup"],
                color: "bg-gray-600"
              },
              {
                role: "Counselor",
                responsibilities: "Student guidance, behavioral monitoring",
                features: ["Student counseling", "Behavioral tracking", "Career guidance", "Mental health support", "Parent consultation"],
                color: "bg-teal-500"
              }
            ].map((role, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="border-0 shadow-lg bg-white overflow-hidden">
                <div className={`${role.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-2">{role.role}</h3>
                  <p className="text-sm opacity-90">{role.responsibilities}</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                  question: "What role-based dashboards does EduLives provide?",
                  answer: "EduLives offers 9 specialized dashboards: Principal (institutional oversight), Vice Principal (academic coordination), HOD (department management), Teacher (class management), Student (academic access), Parent (child monitoring), Admin Staff (operational tasks), IT Admin (system management), and Counselor (student guidance). Each dashboard provides role-specific tools, permissions, and workflows tailored to the user's responsibilities."
                },
                {
                  question: "How does the multi-level approval system work?",
                  answer: "Our hierarchical approval system allows institutions to set up custom workflows based on their organizational structure. For example, teacher requests go to HOD, then Vice Principal, and finally Principal for approval. Each level can approve, reject, or request modifications with full audit trails and automated notifications to keep all stakeholders informed."
                },
                {
                  question: "What real-time monitoring features are available?",
                  answer: "EduLives provides live monitoring of attendance, assignment submissions, grade updates, fee payments, inventory levels, transport tracking, and behavioral incidents. Real-time dashboards show current status, trends, and alerts, enabling immediate intervention when needed. All data is synchronized across devices and user roles."
                },
                {
                  question: "How comprehensive is the inventory and asset management?",
                  answer: "Our inventory system tracks all school assets including textbooks, equipment, furniture, and digital resources. Features include barcode scanning, maintenance schedules, depreciation tracking, allocation management, and automated reorder alerts. The system integrates with the finance module for cost tracking and budget management."
                },
                {
                  question: "What communication tools are included?",
                  answer: "EduLives includes a comprehensive communication hub with announcements, PTM scheduling, chat functionality, email integration, document sharing, and video conferencing. All communications are role-based, ensuring users only see relevant information. The system supports multiple languages and can send notifications via SMS, email, and push notifications."
                },
                {
                  question: "How does the transport and hostel management work?",
                  answer: "The transport module includes route optimization, vehicle tracking, driver management, and real-time location sharing with parents. The hostel module manages room allocation, meal planning, visitor logs, and maintenance requests. Both modules integrate with the main system for seamless data flow and communication."
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
            <h2 className="text-4xl font-bold mb-6">Ready to Implement Role-Based School Management?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Experience the power of customized dashboards, real-time monitoring, and integrated workflows designed 
              specifically for educational institutions. Transform your school operations with enterprise-grade 
              technology tailored to every role.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Explore Dashboard
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Request Demo
              </AnimatedButton>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              Free consultation • Custom implementation plan • Role-based training included
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-green-900/20"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-white rounded-lg p-2 shadow-lg">
                    <Image
                      src="/Edulives-logo.jpg"
                      alt="EduLives Logo"
                      width={180}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 20px rgba(59, 130, 246, 0.6)",
                        "0 0 0 rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                  />
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 leading-relaxed text-lg max-w-md"
                >
                  Enterprise-grade school management platform with role-based dashboards, real-time monitoring, 
                  multi-level approvals, and integrated modules for academics, finance, inventory, transport, 
                  and communication.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-6"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>

            {/* Footer Links */}
            {[
              {
                title: "Product",
                icon: "🚀",
                links: [
                  { name: "Features Overview", href: "#features" },
                  { name: "Mobile Applications", href: "#mobile" },
                  { name: "System Integrations", href: "#integrations" },
                  { name: "Security & Compliance", href: "#security" },
                  { name: "Pricing Plans", href: "#pricing" }
                ]
              },
              {
                title: "Resources",
                icon: "📚",
                links: [
                  { name: "Help Center", href: "#help" },
                  { name: "Documentation", href: "#docs" },
                  { name: "Training Webinars", href: "#training" },
                  { name: "Case Studies", href: "#cases" },
                  { name: "Best Practices", href: "#best-practices" }
                ]
              },
              {
                title: "Company",
                icon: "🏢",
                links: [
                  { name: "About EduLives", href: "#about" },
                  { name: "Career Opportunities", href: "#careers" },
                  { name: "Contact Support", href: "#support" },
                  { name: "Privacy Policy", href: "#privacy" },
                  { name: "Terms of Service", href: "#terms" }
                ]
              },
              {
                title: "Support",
                icon: "🛠️",
                links: [
                  { name: "24/7 Live Chat", href: "#chat" },
                  { name: "Phone Support", href: "#phone" },
                  { name: "Email Support", href: "#email" },
                  { name: "Video Tutorials", href: "#tutorials" },
                  { name: "Implementation Guide", href: "#guide" }
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-bold text-lg text-white">{section.title}</h3>
                </motion.div>
                                 <ul className="space-y-3">
                   {section.links.map((link, linkIndex) => (
                     <motion.li 
                       key={link.name}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.4, delay: (index * 0.1) + (linkIndex * 0.05) }}
                     >
                       <Link 
                         href={link.href} 
                         className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                       >
                         <span className="group-hover:translate-x-1 transition-transform duration-200">
                           {link.name}
                         </span>
                       </Link>
                     </motion.li>
                   ))}
                 </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact & Newsletter Section */}
          <AnimatedSection className="mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-white">Stay Connected with EduLives</h3>
                <p className="text-gray-300 text-lg">
                  Get the latest updates on new features, educational insights, and industry best practices delivered directly to your inbox.
                </p>
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">24/7 Support Available</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 font-semibold">Live Demo Ready</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-gray-400 text-sm">
                  Join 50,000+ educators receiving our monthly newsletter. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Animated Divider */}
          <AnimatedDivider className="border-gray-700" color="#374151" />
          
          {/* Bottom Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <motion.p 
                className="text-gray-400 text-sm"
                whileHover={{ color: "#ffffff" }}
                transition={{ duration: 0.3 }}
              >
                © 2025 EduLives Technologies. All Rights Reserved.
              </motion.p>
                             <motion.div
                 className="flex items-center space-x-4"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
               >
                 <Link href="#privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                   Privacy Policy
                 </Link>
                 <span className="text-gray-600">•</span>
                 <Link href="#terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                   Terms of Service
                 </Link>
                 <span className="text-gray-600">•</span>
                 <Link href="#cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                   Cookie Policy
                 </Link>
               </motion.div>
            </div>
            
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-gray-400 text-sm">Contact Sales:</span>
                <motion.span 
                  className="text-white font-bold text-lg"
                  whileHover={{ color: "#3B82F6" }}
                  transition={{ duration: 0.3 }}
                >
                  +1-800-EDULIVES
                </motion.span>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border border-white/10 rounded-lg"
              >
                <span className="text-white text-sm font-semibold">ISO 27001 Certified</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
