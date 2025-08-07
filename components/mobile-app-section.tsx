import React from "react"
import { Button } from "@/components/ui/button"
import { Download, Smartphone, Shield, Zap, Users, Bell } from "lucide-react"

const GradientIcon = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-primary shadow-glow"
    style={{
      WebkitMaskImage: "linear-gradient(white, white)",
      maskImage: "linear-gradient(white, white)",
    }}
  >
    <span className="w-6 h-6 text-white">{children}</span>
  </span>
);

const mobileFeatures = [
  {
    icon: (
      <GradientIcon>
        <Smartphone className="w-6 h-6" />
      </GradientIcon>
    ),
    title: "Mobile-First Design",
    description: "Optimized for touch interactions and mobile workflows",
  },
  {
    icon: (
      <GradientIcon>
        <Zap className="w-6 h-6" />
      </GradientIcon>
    ),
    title: "Real-time Sync",
    description: "Instant updates across all devices and platforms",
  },
  {
    icon: (
      <GradientIcon>
        <Shield className="w-6 h-6" />
      </GradientIcon>
    ),
    title: "Secure Access",
    description: "Enterprise-grade security with biometric authentication",
  },
  {
    icon: (
      <GradientIcon>
        <Bell className="w-6 h-6" />
      </GradientIcon>
    ),
    title: "Smart Notifications",
    description: "AI-powered alerts for important updates and deadlines",
  },
  {
    icon: (
      <GradientIcon>
        <Users className="w-6 h-6" />
      </GradientIcon>
    ),
    title: "Role-Based Access",
    description: "Personalized dashboards for students, teachers, and admins",
  },
];

export function MobileAppSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-100/30 rounded-full blur-2xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold tracking-wide mb-4">
            Mobile Experience
          </span>
          <h2 className="text-heading text-brand-dark mb-4 leading-tight">
            Education Management
            <span className="text-brand-primary"> On-The-Go</span>
          </h2>
          <p className="text-body-large text-brand-mid max-w-3xl mx-auto">
            Access your school management tools anywhere, anytime. Our mobile app brings the full power of EduLives to your smartphone with a seamless, intuitive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-brand-dark rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App Screen */}
                  <div className="h-[600px] bg-gradient-to-br from-blue-50 to-green-50 relative">
                    {/* App Header */}
                    <div className="bg-white px-4 py-3 border-b border-brand-divider">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-bold">E</span>
                          </div>
                          <span className="text-sm font-semibold text-brand-dark">EduLives</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                          <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                          <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4 space-y-4">
                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="card-modern p-3">
                          <div className="text-2xl font-bold text-brand-primary">24</div>
                          <div className="text-xs text-brand-muted">Classes Today</div>
                        </div>
                        <div className="card-modern p-3">
                          <div className="text-2xl font-bold text-brand-secondary">156</div>
                          <div className="text-xs text-brand-muted">Students</div>
                        </div>
                      </div>
                      
                      {/* Recent Activity */}
                      <div className="card-modern p-3">
                        <h3 className="text-sm font-semibold text-brand-dark mb-2">Recent Activity</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                            <span className="text-xs text-brand-muted">Math class updated</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                            <span className="text-xs text-brand-muted">Attendance marked</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                            <span className="text-xs text-brand-muted">New assignment posted</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-3 gap-2">
                        <button className="bg-gradient-primary text-white rounded-xl p-3 text-xs font-medium hover:shadow-glow transition-all duration-300">
                          Attendance
                        </button>
                        <button className="bg-gradient-primary text-white rounded-xl p-3 text-xs font-medium hover:shadow-glow transition-all duration-300">
                          Grades
                        </button>
                        <button className="bg-gradient-primary text-white rounded-xl p-3 text-xs font-medium hover:shadow-glow transition-all duration-300">
                          Schedule
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 card-modern p-3 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-brand-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-brand-mid">Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div className="space-y-6">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Section */}
            <div className="card-modern flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-brand-dark mb-3">
                Download the App
              </h3>
              <p className="text-brand-muted text-sm mb-4">
                Get the full EduLives experience on your mobile device
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
                <Button
                  className="flex items-center justify-center space-x-2 bg-black hover:bg-black/90 text-white border-none w-44"
                  style={{ background: "#000" }}
                >
                  <img
                    src="/images/apple.png"
                    alt="Apple"
                    className="w-5 h-5"
                  />
                  <span>App Store</span>
                </Button>
                <Button
                  className="flex items-center justify-center space-x-2 bg-black hover:bg-black/90 text-white border-none w-44"
                  style={{ background: "#000" }}
                >
                  <img
                    src="/images/google-play.png"
                    alt="Google Play"
                    className="w-5 h-5"
                  />
                  <span>Google Play</span>
                </Button>
              </div>
            </div>

            {/* QR Code */}
            <div className="text-center">
              <div className="inline-block card-modern p-4">
                <div className="w-24 h-24 bg-brand-divider rounded-xl flex items-center justify-center">
                  <span className="text-xs text-brand-muted">QR Code</span>
                </div>
                <p className="text-xs text-brand-muted mt-2">Scan to download</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="card-modern max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-brand-dark mb-2">
              Ready to Go Mobile?
            </h3>
            <p className="text-brand-muted mb-4">
              Join thousands of educators who trust EduLives mobile app for their daily school management needs.
            </p>
            <Button variant="gradient" size="lg">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 