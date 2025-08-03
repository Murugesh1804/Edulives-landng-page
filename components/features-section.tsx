"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Clock, 
  BookOpen, 
  CreditCard, 
  Truck, 
  MessageSquare, 
  FileText, 
  Shield,
  CheckCircle,
  TrendingUp,
  Calendar,
  Settings
} from "lucide-react";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyFeatures = [
    {
      icon: Users,
      title: "Role-Based Dashboards",
      description: "Personalized interfaces for students, teachers, HODs, principals, and administrators with role-specific tools and permissions.",
      features: [
        "Student dashboard with assignments & grades",
        "Teacher tools for class management",
        "HOD academic oversight & approvals",
        "Principal school-wide analytics",
        "Admin operational controls"
      ]
    },
    {
      icon: Clock,
      title: "Real-Time Attendance & Performance Monitoring",
      description: "Automated attendance tracking with biometric integration and comprehensive performance analytics for informed decision-making.",
      features: [
        "Biometric & RFID attendance systems",
        "Real-time performance dashboards",
        "Automated attendance reports",
        "Performance trend analysis",
        "Early warning systems"
      ]
    },
    {
      icon: BookOpen,
      title: "Assignment & Homework Tracking",
      description: "Complete digital workflow for assignment creation, submission, grading, and feedback with deadline management.",
      features: [
        "Digital assignment creation & submission",
        "Automated deadline reminders",
        "Online grading & feedback system",
        "Progress tracking & analytics",
        "Parent notification system"
      ]
    },
    {
      icon: CreditCard,
      title: "Fee & Inventory Management",
      description: "Comprehensive financial management with online payment processing and complete inventory tracking for school assets.",
      features: [
        "Online fee collection & receipts",
        "Inventory tracking & alerts",
        "Financial reporting & analytics",
        "Asset management & maintenance",
        "Payment gateway integration"
      ]
    },
    {
      icon: Truck,
      title: "Transport, Hostel & Library Integration",
      description: "Complete management of transportation, hostel facilities, and library resources with real-time tracking and coordination.",
      features: [
        "GPS bus tracking & route optimization",
        "Hostel room & meal management",
        "Library catalog & issue tracking",
        "Transport safety monitoring",
        "Facility booking & scheduling"
      ]
    },
    {
      icon: MessageSquare,
      title: "Secure Communication",
      description: "Built-in messaging system for announcements, parent-teacher meetings, and real-time communication between all stakeholders.",
      features: [
        "Announcement broadcasting system",
        "PTM scheduling & management",
        "Secure chat & messaging",
        "Email & SMS notifications",
        "Communication history tracking"
      ]
    },
    {
      icon: FileText,
      title: "Certificate & Document Generation",
      description: "Automated generation of certificates, report cards, and official documents with digital signatures and verification.",
      features: [
        "Automated certificate generation",
        "Digital report card creation",
        "Document templates & customization",
        "Digital signature integration",
        "Document verification system"
      ]
    },
    {
      icon: Shield,
      title: "Multi-Level Approvals & Audit Logs",
      description: "Comprehensive approval workflows with role-based permissions and complete audit trails for accountability and compliance.",
      features: [
        "Role-based approval workflows",
        "Complete audit trail logging",
        "Permission management system",
        "Compliance reporting",
        "Security monitoring & alerts"
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        "The role-based dashboards have transformed how our school operates. Each user gets exactly what they need, making daily tasks more efficient.",
      author: "Mrs. Sarah Anderson",
      role: "Principal",
      school: "Riverside Elementary School",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80",
    },
    {
      quote:
        "Real-time attendance and performance monitoring helps us identify and support struggling students before it's too late.",
      author: "Mr. David Chen",
      role: "HOD Mathematics",
      school: "Hillcrest High School",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80",
    },
    {
      quote:
        "The fee management system has eliminated payment delays and improved our financial tracking significantly.",
      author: "Ms. Patricia Williams",
      role: "Administrative Head",
      school: "Oakwood International School",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Modules to Automate School Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Single ERP Platform for All Your Education Needs
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Perfect School Management System to Meet Your Institution Needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple & Easy to use for Teachers</h3>
              <p className="text-gray-600">
                Designed to engage teachers and parents. No expertise is required to quickly accomplish a task.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Powerful features for your Institution</h3>
              <p className="text-gray-600">
                We provide everything you will ever need to run an education institution. No customization required.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online & On-site Customer Support</h3>
              <p className="text-gray-600">
                Along with online & on-site support, we also offer on-demand & webinar-based training to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Institutes Love EduLives School ERP System?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.school}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;