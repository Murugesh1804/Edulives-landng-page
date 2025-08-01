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
    icon: GraduationCap,
    title: "Student Management",
    description: "Complete student lifecycle management from admission to graduation with detailed academic records and performance tracking.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    illustration: "👨‍🎓",
    stats: "50K+ Students Managed",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Comprehensive staff profiles, attendance tracking, and performance management system with role-based permissions.",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    illustration: "👥",
    stats: "2K+ Staff Members",
  },
  {
    icon: Calendar,
    title: "Timetable Management",
    description: "Automated timetable generation with conflict detection and easy schedule modifications for optimal resource allocation.",
    color: "green",
    gradient: "from-green-500 to-green-600",
    illustration: "📅",
    stats: "99% Conflict-Free",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Detailed insights and customizable reports for academic performance and operational metrics with real-time dashboards.",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    illustration: "📊",
    stats: "100+ Report Types",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Streamlined fee collection, payment tracking, and automated receipt generation with multiple payment gateway support.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    illustration: "💰",
    stats: "₹500M+ Collected",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Integrated messaging system connecting teachers, students, and parents seamlessly with real-time notifications.",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    illustration: "💬",
    stats: "1M+ Messages/Month",
  },
  {
    icon: BookOpen,
    title: "Library Management",
    description: "Digital catalog management with book tracking and automated fine calculations for comprehensive library operations.",
    color: "green",
    gradient: "from-green-500 to-green-600",
    illustration: "📚",
    stats: "50K+ Books Tracked",
  },
  {
    icon: FileText,
    title: "Examination System",
    description: "Complete exam management from scheduling to result publication and analysis with automated grading capabilities.",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    illustration: "📝",
    stats: "10K+ Exams Conducted",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Enterprise-grade security with role-based access control and data encryption ensuring complete data protection.",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    illustration: "🔒",
    stats: "99.9% Uptime",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native mobile applications for iOS and Android with offline capabilities and push notifications.",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    illustration: "📱",
    stats: "100K+ Downloads",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Biometric and RFID integration for accurate attendance monitoring with automated reporting and analytics.",
    color: "green",
    gradient: "from-green-500 to-green-600",
    illustration: "⏰",
    stats: "98% Accuracy",
  },
  {
    icon: Award,
    title: "Certificate Generation",
    description: "Automated generation of certificates, transcripts, and official documents with digital signatures and verification.",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    illustration: "🏆",
    stats: "25K+ Certificates",
  },
]

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second load times",
    color: "yellow",
    illustration: "⚡",
    metric: "< 1s",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "256-bit encryption and SOC 2 compliance",
    color: "green",
    illustration: "🛡️",
    metric: "256-bit",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available in 150+ countries with 24/7 support",
    color: "blue",
    illustration: "🌍",
    metric: "150+",
  },
]

const benefits = [
  {
    icon: Target,
    title: "Increase Efficiency",
    description: "Reduce administrative workload by 70%",
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Boost Performance",
    description: "Improve student outcomes by 40%",
    color: "blue",
  },
  {
    icon: Star,
    title: "Enhance Communication",
    description: "Connect everyone seamlessly",
    color: "purple",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Everything You Need to{" "}
            <span className="gradient-text-secondary">
              Transform Your School
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform covers every aspect of school management, from academics to administration, 
            all in one integrated solution designed for modern educational institutions.
          </p>
        </div>

        {/* What we provide - clear value proposition */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 mb-20 border border-blue-200/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center justify-center">
              <Building2 className="w-6 h-6 mr-2 text-blue-600" />
              What EduLives Provides:
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A complete school management ecosystem that digitizes every aspect of your educational institution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft">
                <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 text-${benefit.color}-600`} />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">{benefit.title}</h4>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced feature highlights with illustrations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200/50 shadow-soft hover:shadow-medium transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background illustration */}
              <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:scale-110 transition-transform duration-300">
                {highlight.illustration}
              </div>
              <div className={`w-12 h-12 bg-${highlight.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className={`w-6 h-6 text-${highlight.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{highlight.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">{highlight.description}</p>
              <div className="text-2xl font-bold text-neutral-900">{highlight.metric}</div>
            </div>
          ))}
        </div>

        {/* Enhanced main features grid with illustrations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-neutral-200/50 bg-white/80 backdrop-blur-sm hover:shadow-large transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
            >
              {/* Background illustration */}
              <div className="absolute top-4 right-4 text-3xl opacity-5 group-hover:scale-110 transition-transform duration-300">
                {feature.illustration}
              </div>
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600 leading-relaxed text-base mb-4">
                  {feature.description}
                </CardDescription>
                <div className="flex items-center space-x-2 text-sm text-neutral-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-medium">{feature.stats}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced bottom CTA with more visual elements */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-neutral-700">30-day free trial</span>
              </div>
              <div className="w-px h-6 bg-neutral-300"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-neutral-700">No credit card required</span>
              </div>
              <div className="w-px h-6 bg-neutral-300"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-neutral-700">Cancel anytime</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-px h-4 bg-neutral-300"></div>
              <div className="flex items-center space-x-1">
                <Database className="w-4 h-4 text-blue-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="w-px h-4 bg-neutral-300"></div>
              <div className="flex items-center space-x-1">
                <Bell className="w-4 h-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
