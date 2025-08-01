"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, UserCheck, Users, Crown, Shield, Settings } from "lucide-react"

const roles = [
  {
    id: "student",
    name: "Student",
    icon: User,
    color: "bg-blue-100 text-blue-600",
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
    id: "teacher",
    name: "Teacher",
    icon: UserCheck,
    color: "bg-green-100 text-green-600",
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
]

export function RolesSection() {
  const [activeRole, setActiveRole] = useState("student")

  return (
    <section id="roles" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Role-Based Dashboards</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every user gets a personalized dashboard with features and permissions tailored to their role in the
            educational ecosystem.
          </p>
        </div>

        <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            {roles.map((role) => (
              <TabsTrigger key={role.id} value={role.id} className="flex items-center space-x-2 text-sm">
                <role.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{role.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id}>
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${role.color}`}>
                      <role.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-900">{role.name} Dashboard</CardTitle>
                      <CardDescription className="text-slate-600">
                        Specialized features and tools for {role.name.toLowerCase()} users
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
