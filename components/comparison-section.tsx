import { CheckCircle, XCircle, Star } from "lucide-react"

const comparisonData = [
  {
    feature: "Setup Time",
    traditional: "2-4 weeks",
    edulives: "2 hours",
    edulivesBetter: true,
  },
  {
    feature: "Technical Expertise Required",
    traditional: "High",
    edulives: "None",
    edulivesBetter: true,
  },
  {
    feature: "Data Migration",
    traditional: "Manual, error-prone",
    edulives: "Automated, 99.9% accurate",
    edulivesBetter: true,
  },
  {
    feature: "Mobile Access",
    traditional: "Limited or none",
    edulives: "Full mobile app",
    edulivesBetter: true,
  },
  {
    feature: "Real-time Updates",
    traditional: "Delayed sync",
    edulives: "Instant sync",
    edulivesBetter: true,
  },
  {
    feature: "Security",
    traditional: "Basic",
    edulives: "Enterprise-grade",
    edulivesBetter: true,
  },
  {
    feature: "Support",
    traditional: "Limited hours",
    edulives: "24/7 support",
    edulivesBetter: true,
  },
  {
    feature: "Updates & Maintenance",
    traditional: "Manual, disruptive",
    edulives: "Automatic, seamless",
    edulivesBetter: true,
  },
  {
    feature: "Cost",
    traditional: "High upfront + ongoing",
    edulives: "Predictable monthly",
    edulivesBetter: true,
  },
  {
    feature: "Scalability",
    traditional: "Limited",
    edulives: "Unlimited",
    edulivesBetter: true,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            Why Choose EduLives
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Better Than{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Traditional Solutions
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            See how our modern cloud-based platform outperforms traditional school management systems 
            in every aspect that matters to your institution.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-3xl shadow-large border border-neutral-200/50 overflow-hidden">
          {/* Table header */}
          <div className="bg-gradient-to-r from-neutral-50 to-blue-50/30 px-8 py-6 border-b border-neutral-200/50">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-neutral-900">Feature</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-neutral-600">Traditional Systems</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-600">EduLives</h3>
              </div>
            </div>
          </div>

          {/* Table body */}
          <div className="divide-y divide-neutral-200/50">
            {comparisonData.map((item, index) => (
              <div key={index} className="px-8 py-6 hover:bg-neutral-50/50 transition-colors duration-200">
                <div className="grid grid-cols-3 gap-8 items-center">
                  <div className="text-left">
                    <h4 className="font-medium text-neutral-900">{item.feature}</h4>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span className="text-neutral-600">{item.traditional}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-neutral-900">{item.edulives}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table footer */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50/30 px-8 py-6 border-t border-neutral-200/50">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft border border-neutral-200/50">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-neutral-900">EduLives wins in all categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8 py-6 shadow-soft border border-neutral-200/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-neutral-700">10x faster setup</span>
            </div>
            <div className="w-px h-6 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-neutral-700">99.9% uptime</span>
            </div>
            <div className="w-px h-6 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-neutral-700">50% cost savings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 