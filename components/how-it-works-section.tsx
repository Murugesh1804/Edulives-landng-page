import { CheckCircle, ArrowRight, Users, Shield, Zap, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Sign Up & Setup",
    description: "Create your account and configure your school profile in minutes. No technical expertise required.",
    icon: Users,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Import Your Data",
    description: "Seamlessly import existing student and staff data with our automated migration tools.",
    icon: Shield,
    color: "green",
    gradient: "from-green-500 to-green-600",
  },
  {
    number: "03",
    title: "Configure Modules",
    description: "Enable the modules you need and customize them according to your school's requirements.",
    icon: Zap,
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    title: "Go Live",
    description: "Launch your school management system and start managing your institution efficiently.",
    icon: BarChart3,
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Simple Setup Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined setup process ensures you can start managing your school efficiently 
            without any technical complications or lengthy implementation periods.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-medium border border-neutral-200/50">
                      <ArrowRight className="w-5 h-5 text-neutral-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-soft border border-neutral-200/50">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-neutral-700">Average setup time: 2 hours</span>
            </div>
            <div className="w-px h-6 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-neutral-700">99% success rate</span>
            </div>
            <div className="w-px h-6 bg-neutral-300"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-neutral-700">24/7 support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 