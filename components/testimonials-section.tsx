import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Award, Users, Shield } from "lucide-react"

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
    color: "from-blue-100 to-blue-300",
    iconColor: "text-blue-500",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "Average Rating",
    color: "from-yellow-100 to-yellow-300",
    iconColor: "text-yellow-500",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime Guarantee",
    color: "from-green-100 to-green-300",
    iconColor: "text-green-500",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Subtle background pattern */}
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
            id="testimonial-grid"
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
        <rect width="100%" height="100%" fill="url(#testimonial-grid)" />
      </svg>
      {/* Decorative blobs */}
      <div className="absolute top-[-6rem] left-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-6rem] right-1/4 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold shadow-sm">
            <Quote className="w-4 h-4 mr-2 text-blue-400" />
            Customer Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Educational Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what school administrators, teachers, and staff are saying about their experience
            with EduLives and how it's transforming their institutions.
          </p>
        </div>

        {/* Trust metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur rounded-2xl p-8 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow`}
              >
                <metric.icon className={`w-8 h-8 ${metric.iconColor}`} />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        {/* Marquee/scrolling testimonials grid */}
        <div className="relative overflow-hidden">
          <style>
            {`
              @keyframes marquee-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee-scroll 40s linear infinite;
              }
              @media (max-width: 1023px) {
                .marquee-track {
                  animation-duration: 60s;
                }
              }
            `}
          </style>
          <div className="w-full">
            <div className="marquee-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[340px] max-w-[400px] w-full mx-4 flex-shrink-0"
                  style={{ flexBasis: "33.3333%" }}
                >
                  <Card
                    className="group border-gray-100 bg-white/90 backdrop-blur hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <CardContent className="p-8">
                      {/* Quote icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow">
                        <Quote className="w-6 h-6 text-blue-400" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 mb-6 leading-relaxed italic text-base">
                        "{testimonial.content}"
                      </p>

                      {/* Author info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center shadow">
                          <span className="text-blue-700 font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-xs text-gray-400 mt-1">{testimonial.school} • {testimonial.students}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-green-100/80 backdrop-blur rounded-2xl px-10 py-7 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-700">4.9/5 average rating</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700">500+ schools worldwide</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-gray-700">99.9% uptime guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
