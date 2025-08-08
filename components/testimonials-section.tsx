import { Card, CardContent } from "@/components/ui/card"
import { Quote, Users, Shield, Zap } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal, Greenwood High School",
    image: "/placeholder-user.jpg",
    content:
      "The role-based dashboards helped our teams focus on the right tasks at the right time.",
  },
  {
    name: "Michael Chen",
    role: "IT Administrator, Riverside Academy",
    image: "/placeholder-user.jpg",
    content:
      "Clean design and intuitive flows made adoption smooth for teachers and students.",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher, Oakwood Elementary",
    image: "/placeholder-user.jpg",
    content:
      "Real-time updates and mobile access keep everyone informed and aligned.",
  },
  {
    name: "David Thompson",
    role: "Vice Principal, Metro High School",
    image: "/placeholder-user.jpg",
    content:
      "The analytics and reporting features provide insights we never had before.",
  },
  {
    name: "Lisa Park",
    role: "Administrative Director, St. Mary's College",
    image: "/placeholder-user.jpg",
    content:
      "Configuration took less time than expected, and support was responsive and helpful.",
  },
  {
    name: "Robert Martinez",
    role: "Technology Coordinator, Lincoln Academy",
    image: "/placeholder-user.jpg",
    content:
      "Security and access controls give us peace of mind without slowing anyone down.",
  },
]

const trustChips = [
  {
    icon: Users,
    label: "Built with educators and administrators",
  },
  {
    icon: Shield,
    label: "Secure, scalable, and easy to maintain",
  },
  {
    icon: Zap,
    label: "Continuous updates without disruption",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
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
            What educators say about {" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4285C6 0%, #4CAF50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              EduLives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories about how a clear, role-based platform simplifies day-to-day academic work.
          </p>
        </div>

        {/* Trust chips (neutral, non-numeric) */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustChips.map((chip, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur rounded-2xl p-8 border border-gray-100 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow`}>
                <chip.icon className={`w-8 h-8 text-brand-primary`} />
              </div>
              <div className="text-brand-mid font-medium">{chip.label}</div>
            </div>
          ))}
        </div>

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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA (neutral) */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-green-100/80 backdrop-blur rounded-2xl px-10 py-7 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-semibold text-gray-700">Designed to simplify school operations</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-semibold text-gray-700">Built with educators and administrators</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-semibold text-gray-700">Continuous updates without disruption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
