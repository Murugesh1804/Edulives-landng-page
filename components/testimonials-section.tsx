import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Award, Users, Shield } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal, Greenwood High School",
    image: "/placeholder-user.jpg",
    content:
      "EduLives has completely transformed how we manage our school. The comprehensive dashboard and role-based access have streamlined our operations significantly. We've seen a 40% reduction in administrative workload.",
    rating: 5,
    school: "Greenwood High School",
    students: "1,200+ students",
  },
  {
    name: "Michael Chen",
    role: "IT Administrator, Riverside Academy",
    image: "/placeholder-user.jpg",
    content:
      "The inventory management system alone has saved us countless hours. The automated alerts and tracking features are exactly what we needed. Setup was incredibly smooth - we were live in just 3 hours.",
    rating: 5,
    school: "Riverside Academy",
    students: "800+ students",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher, Oakwood Elementary",
    image: "/placeholder-user.jpg",
    content:
      "As a teacher, I love how easy it is to track student progress and communicate with parents. The mobile app is incredibly convenient and the real-time notifications keep everyone informed.",
    rating: 5,
    school: "Oakwood Elementary",
    students: "500+ students",
  },
  {
    name: "David Thompson",
    role: "Vice Principal, Metro High School",
    image: "/placeholder-user.jpg",
    content:
      "The analytics and reporting features provide insights we never had before. Decision-making has become much more data-driven. The support team is exceptional - they're always there when we need help.",
    rating: 5,
    school: "Metro High School",
    students: "2,000+ students",
  },
  {
    name: "Lisa Park",
    role: "Administrative Director, St. Mary's College",
    image: "/placeholder-user.jpg",
    content:
      "The fee management system has revolutionized our financial operations. Parents love the transparency and we love the automated reminders. It's a win-win for everyone involved.",
    rating: 5,
    school: "St. Mary's College",
    students: "1,500+ students",
  },
  {
    name: "Robert Martinez",
    role: "Technology Coordinator, Lincoln Academy",
    image: "/placeholder-user.jpg",
    content:
      "Security was our biggest concern, but EduLives exceeded our expectations. The enterprise-grade security and compliance features give us complete peace of mind.",
    rating: 5,
    school: "Lincoln Academy",
    students: "900+ students",
  },
]

const trustMetrics = [
  {
    icon: Users,
    value: "500+",
    label: "Schools Trust Us",
    color: "blue",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "Average Rating",
    color: "yellow",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime Guarantee",
    color: "green",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
            <Quote className="w-4 h-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Educational Leaders
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            See what school administrators, teachers, and staff are saying about their experience 
            with EduLives and how it's transforming their institutions.
          </p>
        </div>

        {/* Trust metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-soft text-center group hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-${metric.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`w-8 h-8 text-${metric.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{metric.value}</div>
              <div className="text-neutral-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group border-neutral-200/50 bg-white/80 backdrop-blur-sm hover:shadow-large transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-neutral-700 mb-6 leading-relaxed italic text-base">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center">
                    <span className="text-neutral-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                    <div className="text-xs text-neutral-500 mt-1">{testimonial.school} • {testimonial.students}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-soft border border-neutral-200/50">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-neutral-700">4.9/5 average rating</span>
            </div>
            <div className="w-px h-6 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-neutral-700">500+ schools worldwide</span>
            </div>
            <div className="w-px h-6 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-neutral-700">99.9% uptime guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
