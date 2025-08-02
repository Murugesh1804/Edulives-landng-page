'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  CreditCard, 
  FileText, 
  Package, 
  Calendar, 
  Bus, 
  MessageSquare, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  X,
  Star,
  Zap,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react'

const features = [
  {
    id: 'attendance',
    title: "Smart Attendance",
    shortDesc: "Automated biometric & RFID tracking",
    description: "Revolutionary attendance system with biometric authentication, RFID cards, and facial recognition. Real-time tracking with instant notifications to parents and automated reporting for administrators.",
    impact: "98% accurate and verifiable records",
    icon: Users,
    color: "blue",
    benefits: [
      "Biometric fingerprint scanning",
      "RFID card integration",
      "Facial recognition technology",
      "Real-time attendance alerts",
      "Automated reporting system",
      "Mobile app for parents"
    ],
    stats: {
      accuracy: "98%",
      timeSaved: "85%",
      notifications: "Instant"
    },
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'fees',
    title: "Fee Management",
    shortDesc: "Complete financial transparency",
    description: "Comprehensive fee management system with multiple payment gateways, installment tracking, late fee calculations, and detailed financial reporting. Parents can pay fees online with instant receipts.",
    impact: "₹75M+ processed securely",
    icon: CreditCard,
    color: "green",
    benefits: [
      "Multiple payment gateways",
      "Installment tracking",
      "Late fee automation",
      "Financial reporting",
      "Online fee payment",
      "Instant receipts"
    ],
    stats: {
      processed: "₹75M+",
      security: "100%",
      efficiency: "90%"
    },
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'reports',
    title: "Digital Report Cards",
    shortDesc: "Instant access to grades & progress",
    description: "Digital report cards with detailed analytics, progress tracking, and downloadable transcripts. Teachers can input grades easily, and parents receive real-time updates on their child's performance.",
    impact: "100% paperless evaluations",
    icon: FileText,
    color: "purple",
    benefits: [
      "Real-time grade updates",
      "Progress analytics",
      "Downloadable transcripts",
      "Performance insights",
      "Parent notifications",
      "Historical data tracking"
    ],
    stats: {
      paperless: "100%",
      efficiency: "95%",
      accessibility: "24/7"
    },
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'inventory',
    title: "School Inventory Tracker",
    shortDesc: "Complete asset management system",
    description: "Comprehensive inventory management for all school assets including books, equipment, uniforms, and supplies. Track issuance, returns, maintenance schedules, and automatic reorder points.",
    impact: "10+ categories tracked real-time",
    icon: Package,
    color: "orange",
    benefits: [
      "Asset categorization",
      "Issuance tracking",
      "Maintenance schedules",
      "Automatic reordering",
      "Barcode scanning",
      "Inventory reports"
    ],
    stats: {
      categories: "10+",
      accuracy: "99%",
      efficiency: "80%"
    },
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'events',
    title: "Events & Exams Coordination",
    shortDesc: "Seamless event management",
    description: "Complete event and examination management system with room allocation, student scheduling, invigilator assignment, and real-time coordination. Handle multiple events simultaneously with ease.",
    impact: "300+ events & exams organized",
    icon: Calendar,
    color: "red",
    benefits: [
      "Room allocation system",
      "Student scheduling",
      "Invigilator assignment",
      "Event coordination",
      "Real-time updates",
      "Conflict resolution"
    ],
    stats: {
      events: "300+",
      efficiency: "85%",
      coordination: "Real-time"
    },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'transport',
    title: "Transport Management",
    shortDesc: "GPS tracking & route optimization",
    description: "Advanced transport management with GPS tracking, route optimization, driver logs, student tracking, and emergency alerts. Parents can track their child's bus in real-time with estimated arrival times.",
    impact: "100% route compliance",
    icon: Bus,
    color: "indigo",
    benefits: [
      "GPS tracking system",
      "Route optimization",
      "Driver logs",
      "Student tracking",
      "Emergency alerts",
      "Parent notifications"
    ],
    stats: {
      compliance: "100%",
      safety: "Enhanced",
      tracking: "Real-time"
    },
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'communication',
    title: "Parent Communication",
    shortDesc: "Real-time messaging & updates",
    description: "Comprehensive communication platform for parents with real-time messaging, PTM scheduling, progress updates, leave requests, and emergency notifications. Keep parents informed and engaged.",
    impact: "90% parent satisfaction",
    icon: MessageSquare,
    color: "teal",
    benefits: [
      "Real-time messaging",
      "PTM scheduling",
      "Progress updates",
      "Leave requests",
      "Emergency alerts",
      "File sharing"
    ],
    stats: {
      satisfaction: "90%",
      engagement: "85%",
      response: "Instant"
    },
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'teacher',
    title: "Teacher Dashboard",
    shortDesc: "All-in-one teaching platform",
    description: "Comprehensive teacher dashboard with lesson planning, attendance management, grade input, resource uploads, and performance analytics. Everything teachers need in one intuitive interface.",
    impact: "85% improved teaching efficiency",
    icon: BookOpen,
    color: "pink",
    benefits: [
      "Lesson planning tools",
      "Attendance management",
      "Grade input system",
      "Resource uploads",
      "Performance analytics",
      "Student insights"
    ],
    stats: {
      efficiency: "85%",
      timeSaved: "60%",
      satisfaction: "92%"
    },
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
  },
]

const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  green: "from-green-500 to-green-600",
  purple: "from-purple-500 to-purple-600",
  orange: "from-orange-500 to-orange-600",
  red: "from-red-500 to-red-600",
  indigo: "from-indigo-500 to-indigo-600",
  teal: "from-teal-500 to-teal-600",
  pink: "from-pink-500 to-pink-600",
}

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openFeatureModal = (feature: any) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFeature(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        
        <div className="container mx-auto container-padding pt-32 pb-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Powerful Features for{' '}
              <span className="gradient-text-primary">Smarter Schools</span>
            </motion.h1>
            <motion.p 
              className="text-body-large text-neutral-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover how EduLives transforms every aspect of school management with 
              cutting-edge technology and intuitive design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto container-padding pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              onClick={() => openFeatureModal(feature)}
            >
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-neutral-200/50 group-hover:border-blue-200/50">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                  {feature.shortDesc}
                </p>

                {/* Impact Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    {feature.impact}
                  </span>
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedFeature && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl font-bold text-neutral-800">
                    {selectedFeature.title}
                  </DialogTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeModal}
                    className="rounded-full w-8 h-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Hero Section */}
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <img
                    src={selectedFeature.image}
                    alt={selectedFeature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colorClasses[selectedFeature.color as keyof typeof colorClasses]} text-white text-sm font-medium`}>
                      {React.createElement(selectedFeature.icon, { className: "w-4 h-4" })}
                      {selectedFeature.shortDesc}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Overview</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {selectedFeature.description}
                  </p>
                </div>

                                 {/* Stats */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {Object.entries(selectedFeature.stats).map(([key, value]) => (
                     <div key={key} className="bg-neutral-50 rounded-xl p-4 text-center">
                       <div className="text-2xl font-bold text-blue-600">{String(value)}</div>
                       <div className="text-sm text-neutral-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                     </div>
                   ))}
                 </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedFeature.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-neutral-800">Impact</h4>
                  </div>
                  <p className="text-neutral-600">{selectedFeature.impact}</p>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                    onClick={() => {
                      closeModal()
                      window.location.href = '/#pricing'
                    }}
                  >
                    Get Started with {selectedFeature.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}
