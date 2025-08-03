"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, UserCheck, Users, Crown, Shield, Settings, ChevronRight, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const BgPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    width="100%"
    height="100%"
    fill="none"
    style={{ minHeight: 1200 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(2)"
      >
        <rect x="0" y="0" width="60" height="60" fill="none" />
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="#e0e7ef"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

const roles = [
  {
    id: "student",
    name: "Student",
    icon: User,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces",
    description: "Your personalized learning hub",
    features: [
      { title: "Academic Records", desc: "View grades, transcripts, and progress reports in real-time", delay: 0.1 },
      { title: "Smart Timetables", desc: "AI-powered schedule management with conflict detection", delay: 0.2 },
      { title: "Assignment Hub", desc: "Submit work, track deadlines, and receive instant feedback", delay: 0.3 },
      { title: "Attendance Insights", desc: "Visual attendance tracking with predictive analytics", delay: 0.4 },
      { title: "Digital Certificates", desc: "Blockchain-verified credentials and achievements", delay: 0.5 },
      { title: "Fee Management", desc: "Seamless payment processing with installment options", delay: 0.6 },
      { title: "Learning Resources", desc: "AI-curated study materials and interactive content", delay: 0.7 },
      { title: "Communication Hub", desc: "Direct messaging with teachers and peer collaboration", delay: 0.8 }
    ]
  },
  {
    id: "teacher",
    name: "Teacher",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
    description: "Empowering educators with smart tools",
    features: [
      { title: "Smart Attendance", desc: "QR code and biometric attendance with auto-sync", delay: 0.1 },
      { title: "Assignment Studio", desc: "Create interactive assignments with multimedia support", delay: 0.2 },
      { title: "Lesson Planner", desc: "AI-assisted curriculum planning with resource suggestions", delay: 0.3 },
      { title: "Performance Analytics", desc: "Deep insights into student learning patterns", delay: 0.4 },
      { title: "Parent Connect", desc: "Automated progress reports and meeting scheduling", delay: 0.5 },
      { title: "Grade Book Pro", desc: "Advanced grading with rubrics and peer assessments", delay: 0.6 },
      { title: "Meeting Scheduler", desc: "Integrated calendar with video conferencing", delay: 0.7 },
      { title: "Assessment Tools", desc: "Create quizzes, tests, and interactive evaluations", delay: 0.8 }
    ]
  },
  {
    id: "hod",
    name: "Head of Department",
    icon: Users,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=faces",
    description: "Strategic department leadership",
    features: [
      { title: "Team Dashboard", desc: "Real-time overview of all department teachers and classes", delay: 0.1 },
      { title: "Curriculum Approval", desc: "Streamlined workflow for lesson plan reviews", delay: 0.2 },
      { title: "Performance Metrics", desc: "Department-wide analytics and benchmarking", delay: 0.3 },
      { title: "Event Coordination", desc: "Plan and manage department activities seamlessly", delay: 0.4 },
      { title: "Schedule Master", desc: "Optimize teacher schedules and handle substitutions", delay: 0.5 },
      { title: "Academic Oversight", desc: "Approve curriculum changes and academic policies", delay: 0.6 },
      { title: "Resource Management", desc: "Budget allocation and resource request handling", delay: 0.7 },
      { title: "Strategic Reports", desc: "Comprehensive department performance insights", delay: 0.8 }
    ]
  },
  {
    id: "vice-principal",
    name: "Vice Principal",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=faces",
    description: "School-wide operational excellence",
    features: [
      { title: "Academic Command Center", desc: "Comprehensive oversight of all academic operations", delay: 0.1 },
      { title: "Exam Orchestrator", desc: "Coordinate complex examination schedules and logistics", delay: 0.2 },
      { title: "Staff Operations", desc: "Manage attendance, leaves, and performance tracking", delay: 0.3 },
      { title: "Student Affairs", desc: "Handle disciplinary matters and student welfare", delay: 0.4 },
      { title: "Event Management", desc: "Plan and supervise school-wide events and programs", delay: 0.5 },
      { title: "Stakeholder Relations", desc: "Manage parent communications and complaint resolution", delay: 0.6 },
      { title: "Operations Control", desc: "Oversee transport, security, and facility management", delay: 0.7 },
      { title: "Executive Reports", desc: "Generate comprehensive school performance analytics", delay: 0.8 }
    ]
  },
  {
    id: "principal",
    name: "Principal",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
    description: "Visionary leadership and governance",
    features: [
      { title: "Executive Dashboard", desc: "360-degree view of entire school operations", delay: 0.1 },
      { title: "Strategic Planning", desc: "Long-term vision planning with data-driven insights", delay: 0.2 },
      { title: "HR Management", desc: "Complete staff lifecycle from recruitment to performance", delay: 0.3 },
      { title: "Financial Control", desc: "Budget oversight with intelligent spend analytics", delay: 0.4 },
      { title: "Stakeholder Relations", desc: "Board reporting and external partnership management", delay: 0.5 },
      { title: "Policy Framework", desc: "Create and implement school-wide policies", delay: 0.6 },
      { title: "Compliance Center", desc: "Regulatory compliance and audit management", delay: 0.7 },
      { title: "Intelligence Suite", desc: "AI-powered insights for strategic decision making", delay: 0.8 }
    ]
  },
  {
    id: "admin",
    name: "Admin Staff",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=faces",
    description: "Operational backbone of the institution",
    features: [
      { title: "Admission Pipeline", desc: "Streamlined student onboarding and record management", delay: 0.1 },
      { title: "Payment Gateway", desc: "Advanced fee collection with multiple payment options", delay: 0.2 },
      { title: "Asset Management", desc: "Inventory tracking with automated alerts and maintenance", delay: 0.3 },
      { title: "Facility Coordination", desc: "Transport scheduling and facility booking system", delay: 0.4 },
      { title: "Document Factory", desc: "Automated document generation and digital archiving", delay: 0.5 },
      { title: "Security Hub", desc: "Visitor management with digital check-in/check-out", delay: 0.6 },
      { title: "Support Center", desc: "Integrated helpdesk with ticket management system", delay: 0.7 },
      { title: "Data Operations", desc: "Bulk data processing and automated report generation", delay: 0.8 }
    ]
  }
]

// Modern feature card with white theme
function FeatureCard({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: feature.delay,
        type: "spring",
        stiffness: 100
      }}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/60 rounded-2xl border border-gray-200" />
      <div className="relative p-6 rounded-2xl hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center shadow"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  )
}

export default function ModernRolesDashboard() {
  const [activeRole, setActiveRole] = useState("student")
  const currentRole = roles.find(role => role.id === activeRole)

  return (
    <>
      <Header />
    <div className="min-h-screen relative overflow-hidden bg-white">
      <BgPattern />

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-10 h-10 text-blue-500" />
              </div>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Smart <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Dashboards</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Next-generation role-based interfaces powered by AI and designed for the future of education
            </p>
          </motion.div>
        </div>
      </header>

      {/* Role Selection */}
      <div className="relative z-10 mb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {roles.map((role, index) => (
              <motion.button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeRole === role.id
                    ? "bg-gradient-to-r from-blue-400 to-green-300 text-white shadow-xl scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-blue-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <role.icon className={`w-5 h-5 inline-block mr-2 ${activeRole === role.id ? "text-white" : "text-blue-400"}`} />
                {role.name}
                {activeRole === role.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-300 rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {currentRole && (
              <motion.div
                key={currentRole.id}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="max-w-7xl mx-auto"
              >
                {/* Role Header Card */}
                <div className="mb-12">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-green-50/40" />
                    <div className="relative p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <motion.div
                            className="flex items-center gap-4 mb-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                              <currentRole.icon className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                              <h2 className="text-4xl font-black text-gray-900">{currentRole.name}</h2>
                              <p className="text-gray-600 text-lg">{currentRole.description}</p>
                            </div>
                          </motion.div>
                        </div>
                        <motion.div
                          className="relative"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                              src={currentRole.image}
                              alt={currentRole.name}
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {currentRole.features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20" />
    </div>
    <Footer />
    </>
  )
}