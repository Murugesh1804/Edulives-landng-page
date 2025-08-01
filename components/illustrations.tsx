import Image from "next/image"

// Illustration components using online sources
export function SchoolIllustration() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">🏫</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-neutral-700">Modern School Management</div>
        </div>
      </div>
    </div>
  )
}

export function StudentsIllustration() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">👨‍🎓👩‍🎓</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-neutral-700">50K+ Students Managed</div>
        </div>
      </div>
    </div>
  )
}

export function TechnologyIllustration() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">💻📱</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-neutral-700">Cloud-Based Technology</div>
        </div>
      </div>
    </div>
  )
}

export function AnalyticsIllustration() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">📊📈</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-neutral-700">Advanced Analytics</div>
        </div>
      </div>
    </div>
  )
}

export function CommunicationIllustration() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">💬📞</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-neutral-700">Seamless Communication</div>
        </div>
      </div>
    </div>
  )
}

export function SecurityIllustration() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl">🔒🛡️</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-neutral-700">Enterprise Security</div>
        </div>
      </div>
    </div>
  )
}

// Feature illustration with animated elements
export function FeatureIllustration({ icon, title, description, color = "blue" }: {
  icon: string
  title: string
  description: string
  color?: string
}) {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100 border-blue-200/50",
    purple: "from-purple-50 to-purple-100 border-purple-200/50",
    green: "from-green-50 to-green-100 border-green-200/50",
    orange: "from-orange-50 to-orange-100 border-orange-200/50",
    red: "from-red-50 to-red-100 border-red-200/50",
    indigo: "from-indigo-50 to-indigo-100 border-indigo-200/50",
  }

  return (
    <div className={`relative w-full h-48 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-2xl p-6 border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl animate-float">{icon}</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-sm font-semibold text-neutral-900 mb-1">{title}</div>
          <div className="text-xs text-neutral-600">{description}</div>
        </div>
      </div>
    </div>
  )
}

// Dashboard mockup with realistic content
export function DashboardMockup() {
  return (
    <div className="relative bg-white rounded-2xl shadow-large border border-neutral-200/50 overflow-hidden">
      {/* Browser header */}
      <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm font-medium text-neutral-700">EduLives Dashboard</div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-neutral-300 rounded"></div>
            <div className="w-4 h-4 bg-neutral-300 rounded"></div>
            <div className="w-4 h-4 bg-neutral-300 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Dashboard content */}
      <div className="p-6">
        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-3 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">1,247</div>
              <div className="text-xs text-blue-700">Students</div>
            </div>
          </div>
          <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-3 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">₹2.4M</div>
              <div className="text-xs text-purple-700">Revenue</div>
            </div>
          </div>
          <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-3 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">98%</div>
              <div className="text-xs text-green-700">Attendance</div>
            </div>
          </div>
          <div className="h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-3 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">85</div>
              <div className="text-xs text-orange-700">Teachers</div>
            </div>
          </div>
        </div>
        
        {/* Activity feed */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm">👨‍🎓</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">New student enrolled</div>
              <div className="text-xs text-neutral-600">2 minutes ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-sm">💰</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">Fee payment received</div>
              <div className="text-xs text-neutral-600">5 minutes ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-sm">📝</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">Exam results published</div>
              <div className="text-xs text-neutral-600">10 minutes ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Floating notification cards
export function FloatingNotification({ icon, title, subtitle, delay = 0 }: {
  icon: string
  title: string
  subtitle: string
  delay?: number
}) {
  return (
    <div 
      className="bg-white rounded-xl shadow-medium border border-neutral-200/50 p-4 animate-float backdrop-blur-sm"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl flex-shrink-0">{icon}</div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-neutral-900 truncate">{title}</div>
          <div className="text-xs text-neutral-600 truncate">{subtitle}</div>
        </div>
      </div>
    </div>
  )
} 