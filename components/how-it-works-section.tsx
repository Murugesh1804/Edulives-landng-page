import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up & Setup",
    description: "Create your account and configure your school profile in minutes. No technical expertise required.",
    image: "/images/step1.png",
    imageAlt: "Sign Up & Setup illustration",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Import Your Data",
    description: "Seamlessly import existing student and staff data with our automated migration tools.",
    image: "/images/step2.png",
    imageAlt: "Import Data illustration",
    gradient: "from-green-500 to-green-600",
  },
  {
    number: "03",
    title: "Configure Modules",
    description: "Enable the modules you need and customize them according to your school's requirements.",
    image: "/images/step3.png",
    imageAlt: "Configure Modules illustration",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    title: "Go Live",
    description: "Launch your school management system and start managing your institution efficiently.",
    image: "/images/step4.png",
    imageAlt: "Go Live illustration",
    gradient: "from-orange-500 to-orange-600",
  },
];

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

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-neutral-50 to-blue-50/30 relative overflow-hidden">
      <BgPattern />

      {/* Decorative floating images */}
      <div className="pointer-events-none absolute z-10 w-full h-full">
        <Image
          src="/images/how-it-works/bg-books.png"
          alt="Books"
          width={180}
          height={180}
          className="hidden md:block absolute left-0 top-24 opacity-30 animate-float-slow"
          style={{ zIndex: 1 }}
        />
        <Image
          src="/images/how-it-works/bg-graduation.png"
          alt="Graduation Cap"
          width={120}
          height={120}
          className="hidden md:block absolute right-0 top-40 opacity-20 animate-float"
          style={{ zIndex: 1 }}
        />
        <Image
          src="/images/how-it-works/bg-laptop.png"
          alt="Laptop"
          width={140}
          height={140}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 opacity-10 animate-float"
          style={{ zIndex: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Simple Setup Process
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Get Started in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group flex flex-col items-stretch">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/50 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 relative z-10 flex flex-col h-full">
                  {/* Step number */}
                  <div
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #059669 100%)"
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Only Image */}
                  <div className="relative flex flex-col items-center mb-6">
                    <div className="relative w-full">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={0}
                        height={196}
                        className="rounded-xl object-contain shadow-lg border border-neutral-100 bg-white w-full"
                        style={{ zIndex: 5, width: "100%", height: "auto" }}
                        priority={index === 0}
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop: right arrow */}
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-medium border border-neutral-200/50">
                        <ArrowRight className="w-6 h-6 text-neutral-400" />
                      </div>
                    </div>
                    {/* Mobile: down arrow */}
                    <div className="lg:hidden flex justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-medium border border-neutral-200/50 mt-4 mb-0">
                        <ArrowRight className="w-5 h-5 text-neutral-400 transform rotate-90" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with image */}
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
  );
}