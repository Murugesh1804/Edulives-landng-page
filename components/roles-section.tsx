"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, UserCheck, Users, Crown, Shield, Settings, Monitor, Heart, GraduationCap } from "lucide-react"

const roles = [
  {
    id: "student",
    name: "Student",
    icon: User,
    color: "bg-blue-100 text-blue-600",
    description: "Access assignments, track grades, and manage academic progress with personalized learning tools.",
    features: [
      "View personal profile and academic records",
      "Access timetables and class schedules",
      "Submit assignments and view feedback",
      "Check attendance and exam results",
      "Download certificates and documents",
      "Track fee payments and receipts",
      "Access study materials and resources",
      "Communicate with teachers and staff",
    ],
  },
  {
    id: "parent",
    name: "Parent",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    description: "Stay connected with your child's education through real-time updates and direct communication.",
    features: [
      "Monitor child's academic performance",
      "Track attendance and behavior reports",
      "View fee status and payment history",
      "Receive real-time notifications",
      "Schedule parent-teacher meetings",
      "Access school announcements",
      "View transport and safety updates",
      "Communicate directly with teachers",
    ],
  },
  {
    id: "teacher",
    name: "Teacher",
    icon: UserCheck,
    color: "bg-green-100 text-green-600",
    description: "Streamline classroom management with comprehensive tools for teaching and student assessment.",
    features: [
      "Manage class attendance and records",
      "Create and grade assignments",
      "Upload lesson plans and study materials",
      "Track student performance and progress",
      "Communicate with students and parents",
      "Generate class reports and analytics",
      "Schedule parent-teacher meetings",
      "Access examination and grading tools",
    ],
  },
  {
    id: "hod",
    name: "Head of Department",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
    description: "Oversee academic departments with comprehensive monitoring and approval workflows.",
    features: [
      "Oversee department teachers and classes",
      "Approve lesson plans and curricula",
      "Monitor academic performance by subject",
      "Coordinate department activities and events",
      "Manage teacher schedules and substitutions",
      "Review and approve academic changes",
      "Generate department performance reports",
      "Handle resource allocation and requests",
    ],
  },
  {
    id: "vice-principal",
    name: "Vice Principal",
    icon: Crown,
    color: "bg-purple-100 text-purple-600",
    description: "Coordinate school-wide academic operations and administrative functions efficiently.",
    features: [
      "School-wide academic oversight",
      "Coordinate examination schedules",
      "Manage staff attendance and leaves",
      "Oversee student affairs and discipline",
      "Plan and supervise school events",
      "Handle parent communications and complaints",
      "Monitor transport and security operations",
      "Generate comprehensive school reports",
    ],
  },
  {
    id: "principal",
    name: "Principal",
    icon: Shield,
    color: "bg-red-100 text-red-600",
    description: "Complete school administration control with strategic oversight and decision-making tools.",
    features: [
      "Complete school administration control",
      "Strategic planning and policy making",
      "Staff recruitment and performance management",
      "Budget oversight and financial approvals",
      "External relations and compliance",
      "Final authority on all school matters",
      "Board reporting and stakeholder management",
      "System-wide analytics and insights",
    ],
  },
  {
    id: "admin",
    name: "Admin Staff",
    icon: Settings,
    color: "bg-gray-100 text-gray-600",
    description: "Manage day-to-day operations with comprehensive administrative tools and workflows.",
    features: [
      "Student admission and record management",
      "Fee collection and payment processing",
      "Inventory and asset management",
      "Transport and facility coordination",
      "Document generation and printing",
      "Visitor management and security",
      "Helpdesk and complaint handling",
      "Data entry and report generation",
    ],
  },
  {
    id: "it-admin",
    name: "IT Admin",
    icon: Monitor,
    color: "bg-indigo-100 text-indigo-600",
    description: "Manage system access, security, and technical infrastructure with advanced controls.",
    features: [
      "User role management and permissions",
      "System security and access control",
      "Account creation and maintenance",
      "System logs and audit trails",
      "Technical support and troubleshooting",
      "Data backup and recovery",
      "System integration management",
      "Performance monitoring and optimization",
    ],
  },
  {
    id: "counselor",
    name: "Counselor",
    icon: GraduationCap,
    color: "bg-teal-100 text-teal-600",
    description: "Support student development with comprehensive counseling and guidance tools.",
    features: [
      "Student counseling and guidance",
      "Career planning and assessment",
      "Behavioral monitoring and support",
      "Academic advising and mentoring",
      "Parent consultation scheduling",
      "Progress tracking and reporting",
      "Resource and referral management",
      "Wellness and mental health support",
    ],
  },
]

export function RolesSection() {
  const [activeRole, setActiveRole] = useState("student")

  return (
    <section id="roles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Role-Based Dashboards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every user gets a personalized dashboard with features and permissions tailored to their role in the
            educational ecosystem.
          </p>
        </div>

        <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-8 bg-gray-100 p-1 rounded-lg">
            {roles.map((role) => (
              <TabsTrigger 
                key={role.id} 
                value={role.id} 
                className="flex flex-col items-center space-y-1 text-xs p-3 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-md transition-all duration-300"
              >
                <role.icon className="w-4 h-4" />
                <span className="hidden sm:inline text-center leading-tight">{role.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id}>
              <Card className="border-gray-200 shadow-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${role.color}`}>
                      <role.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{role.name} Dashboard</CardTitle>
                      <CardDescription className="text-gray-600 text-lg">
                        {role.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Benefits Summary */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Role-Based Dashboards Matter</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each role gets exactly what they need - no clutter, no confusion. Students focus on learning, 
              teachers on teaching, and administrators on managing. This targeted approach increases efficiency 
              and user satisfaction across the entire school community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
