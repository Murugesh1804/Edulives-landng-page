import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  Calendar,
  BarChart3,
  Shield,
  Smartphone,
  BookOpen,
  CreditCard,
  MessageSquare,
  FileText,
  Clock,
  Award,
  Zap,
  Lock,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building2,
  Database,
  Bell,
  Target,
} from "lucide-react"
import { FeatureIllustration } from "./illustrations"

const features = [
  {
    title: "Student Management",
    description: "Complete student lifecycle management from admission to graduation with detailed academic records and performance tracking.",
    stats: "50K+ Students Managed",
    color: "blue",
  },
  {
    title: "Staff Management",
    description: "Comprehensive staff profiles, attendance tracking, and performance management system with role-based permissions.",
    stats: "2K+ Staff Members",
    color: "purple",
  },
  {
    title: "Timetable Management",
    description: "Automated timetable generation with conflict detection and easy schedule modifications for optimal resource allocation.",
    stats: "99% Conflict-Free",
    color: "green",
  },
  {
    title: "Analytics & Reports",
    description: "Detailed insights and customizable reports for academic performance and operational metrics with real-time dashboards.",
    stats: "100+ Report Types",
    color: "orange",
  },
  {
    title: "Fee Management",
    description: "Streamlined fee collection, payment tracking, and automated receipt generation with multiple payment gateway support.",
    stats: "₹500M+ Collected",
    color: "blue",
  },
  {
    title: "Communication Hub",
    description: "Integrated messaging system connecting teachers, students, and parents seamlessly with real-time notifications.",
    stats: "1M+ Messages/Month",
    color: "purple",
  },
  {
    title: "Library Management",
    description: "Digital catalog management with book tracking and automated fine calculations for comprehensive library operations.",
    stats: "50K+ Books Tracked",
    color: "green",
  },
  {
    title: "Examination System",
    description: "Complete exam management from scheduling to result publication and analysis with automated grading capabilities.",
    stats: "10K+ Exams Conducted",
    color: "orange",
  },
  {
    title: "Security & Privacy",
    description: "Enterprise-grade security with role-based access control and data encryption ensuring complete data protection.",
    stats: "99.9% Uptime",
    color: "blue",
  },
  {
    title: "Mobile App",
    description: "Native mobile applications for iOS and Android with offline capabilities and push notifications.",
    stats: "100K+ Downloads",
    color: "purple",
  },
  {
    title: "Attendance Tracking",
    description: "Biometric and RFID integration for accurate attendance monitoring with automated reporting and analytics.",
    stats: "98% Accuracy",
    color: "green",
  },
  {
    title: "Certificate Generation",
    description: "Automated generation of certificates, transcripts, and official documents with digital signatures and verification.",
    stats: "25K+ Certificates",
    color: "orange",
  },
]

const highlights = [
  {
    title: "Lightning Fast",
    description: "Optimized performance with sub-second load times",
    metric: "< 1s",
    color: "yellow",
  },
  {
    title: "Bank-Level Security",
    description: "256-bit encryption and SOC 2 compliance",
    metric: "256-bit",
    color: "green",
  },
  {
    title: "Global Access",
    description: "Available in 150+ countries with 24/7 support",
    metric: "150+",
    color: "blue",
  },
]

const benefits = [
  {
    title: "Increase Efficiency",
    description: "Reduce administrative workload by 70%",
    color: "green",
  },
  {
    title: "Boost Performance",
    description: "Improve student outcomes by 40%",
    color: "blue",
  },
  {
    title: "Enhance Communication",
    description: "Connect everyone seamlessly",
    color: "purple",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-50/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-50/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern section header */}
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium border border-blue-100/50">
            <Zap className="w-4 h-4 mr-2" />
            Comprehensive Features
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight max-w-5xl mx-auto">
            Everything you need to{" "}
            <span className="gradient-text-secondary">
              transform your school
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Our platform covers every aspect of school management, from academics to administration, 
            all in one integrated solution designed for modern educational institutions.
          </p>
        </div>

        {/* Benefits section with modern design */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">
              What EduLives provides
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              A complete school management ecosystem that digitizes every aspect of your educational institution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-900 mb-4">{benefit.title}</h4>
                  <p className="text-lg text-neutral-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature highlights with modern cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-10 border border-neutral-200/50 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-${highlight.color}-500 to-${highlight.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{highlight.title}</h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">{highlight.description}</p>
                <div className="text-4xl font-bold text-neutral-900">{highlight.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main features grid with modern layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-500">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern bottom CTA */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200/50">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-lg font-semibold text-neutral-700">30-day free trial</span>
              </div>
              <div className="w-px h-8 bg-neutral-300"></div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-lg font-semibold text-neutral-700">No credit card required</span>
              </div>
              <div className="w-px h-8 bg-neutral-300"></div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-lg font-semibold text-neutral-700">Cancel anytime</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6 text-lg text-neutral-600">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-px h-6 bg-neutral-300"></div>
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="w-px h-6 bg-neutral-300"></div>
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
