"use client"

// Student Learning with Laptop Animation
export const StudentLearningAnimation = ({ className = "w-64 h-64" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#studentBg)"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />

        {/* Laptop */}
        <g className="animate-bounce" style={{ animationDuration: "2s", transformOrigin: "200px 250px" }}>
          <rect x="120" y="220" width="160" height="100" rx="8" fill="#1e40af" />
          <rect x="130" y="230" width="140" height="80" rx="4" fill="#3b82f6" />
          <rect x="140" y="240" width="120" height="60" rx="2" fill="#60a5fa" />

          {/* Screen Content */}
          <rect x="150" y="250" width="100" height="4" rx="2" fill="#f97316" className="animate-pulse" />
          <rect
            x="150"
            y="260"
            width="80"
            height="4"
            rx="2"
            fill="#fb923c"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <rect
            x="150"
            y="270"
            width="60"
            height="4"
            rx="2"
            fill="#fdba74"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </g>

        {/* Student Figure */}
        <g className="animate-pulse" style={{ animationDuration: "4s" }}>
          {/* Head */}
          <circle cx="200" cy="120" r="25" fill="#fbbf24" />
          {/* Body */}
          <rect x="180" y="140" width="40" height="60" rx="20" fill="#1e40af" />
          {/* Arms */}
          <rect
            x="160"
            y="150"
            width="15"
            height="40"
            rx="7"
            fill="#fbbf24"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <rect
            x="225"
            y="150"
            width="15"
            height="40"
            rx="7"
            fill="#fbbf24"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </g>

        {/* Floating Elements */}
        <g className="animate-bounce" style={{ animationDuration: "3s", animationDelay: "1s" }}>
          <circle cx="100" cy="100" r="8" fill="#f97316" />
          <circle cx="300" cy="120" r="6" fill="#fb923c" />
          <circle cx="80" cy="180" r="5" fill="#fdba74" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="studentBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Graduation Cap Animation
export const GraduationCapAnimation = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Cap Base */}
        <g className="animate-bounce" style={{ animationDuration: "2s", transformOrigin: "50px 50px" }}>
          <polygon points="20,45 50,35 80,45 50,55" fill="#1e40af" className="animate-pulse" />
          <rect x="45" y="45" width="10" height="20" fill="#f97316" />

          {/* Tassel */}
          <g className="animate-swing" style={{ transformOrigin: "55px 45px" }}>
            <line x1="55" y1="45" x2="65" y2="35" stroke="#fb923c" strokeWidth="2" />
            <circle cx="65" cy="35" r="3" fill="#f97316" />
          </g>
        </g>

        <style jsx>{`
          @keyframes swing {
            0%, 100% { transform: rotate(-10deg); }
            50% { transform: rotate(10deg); }
          }
          .animate-swing {
            animation: swing 1.5s ease-in-out infinite;
          }
        `}</style>
      </svg>
    </div>
  )
}

// Books Opening Animation
export const BooksAnimation = ({ className = "w-64 h-64" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#booksBg)"
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        {/* Book 1 */}
        <g className="animate-float" style={{ animationDelay: "0s" }}>
          <rect x="120" y="180" width="80" height="100" rx="4" fill="#1e40af" />
          <rect x="125" y="185" width="70" height="90" rx="2" fill="#3b82f6" />
          <line x1="160" y1="185" x2="160" y2="275" stroke="#60a5fa" strokeWidth="2" />
        </g>

        {/* Book 2 */}
        <g className="animate-float" style={{ animationDelay: "0.5s" }}>
          <rect x="200" y="160" width="80" height="100" rx="4" fill="#f97316" />
          <rect x="205" y="165" width="70" height="90" rx="2" fill="#fb923c" />
          <line x1="240" y1="165" x2="240" y2="255" stroke="#fdba74" strokeWidth="2" />
        </g>

        {/* Book 3 */}
        <g className="animate-float" style={{ animationDelay: "1s" }}>
          <rect x="160" y="140" width="80" height="100" rx="4" fill="#059669" />
          <rect x="165" y="145" width="70" height="90" rx="2" fill="#10b981" />
          <line x1="200" y1="145" x2="200" y2="235" stroke="#6ee7b7" strokeWidth="2" />
        </g>

        {/* Floating Pages */}
        <g className="animate-bounce" style={{ animationDuration: "3s" }}>
          <rect x="100" y="100" width="20" height="25" rx="2" fill="#ffffff" opacity="0.8" />
          <rect x="280" y="120" width="20" height="25" rx="2" fill="#ffffff" opacity="0.8" />
          <rect x="320" y="200" width="20" height="25" rx="2" fill="#ffffff" opacity="0.8" />
        </g>

        <defs>
          <linearGradient id="booksBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `}</style>
      </svg>
    </div>
  )
}

// Teacher Smartboard Animation
export const TeacherSmartboardAnimation = ({ className = "w-64 h-64" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#teacherBg)"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />

        {/* Smartboard */}
        <rect x="100" y="80" width="200" height="140" rx="8" fill="#1e40af" />
        <rect x="110" y="90" width="180" height="120" rx="4" fill="#3b82f6" />

        {/* Board Content */}
        <g className="animate-pulse" style={{ animationDuration: "2s" }}>
          <rect x="120" y="100" width="80" height="4" rx="2" fill="#f97316" />
          <rect x="120" y="110" width="60" height="4" rx="2" fill="#fb923c" />
          <rect x="120" y="120" width="100" height="4" rx="2" fill="#fdba74" />

          {/* Chart */}
          <rect x="220" y="100" width="60" height="80" rx="4" fill="#60a5fa" />
          <rect x="230" y="140" width="10" height="40" fill="#f97316" className="animate-bounce" />
          <rect
            x="245"
            y="120"
            width="10"
            height="60"
            fill="#fb923c"
            className="animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <rect
            x="260"
            y="110"
            width="10"
            height="70"
            fill="#fdba74"
            className="animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </g>

        {/* Teacher Figure */}
        <g className="animate-pulse" style={{ animationDuration: "4s" }}>
          {/* Head */}
          <circle cx="150" cy="260" r="20" fill="#fbbf24" />
          {/* Body */}
          <rect x="135" y="275" width="30" height="50" rx="15" fill="#f97316" />
          {/* Pointing Arm */}
          <g className="animate-wave">
            <rect x="165" y="285" width="25" height="8" rx="4" fill="#fbbf24" />
          </g>
          {/* Other Arm */}
          <rect x="120" y="285" width="12" height="30" rx="6" fill="#fbbf24" />
        </g>

        {/* Pointer/Stylus */}
        <line x1="190" y1="289" x2="210" y2="150" stroke="#1e40af" strokeWidth="3" className="animate-pulse" />
        <circle cx="210" cy="150" r="3" fill="#f97316" className="animate-ping" />

        <defs>
          <linearGradient id="teacherBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>

        <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          .animate-wave {
            animation: wave 1s ease-in-out infinite;
            transform-origin: 165px 289px;
          }
        `}</style>
      </svg>
    </div>
  )
}

// School Icons Animation
export const SchoolIconsAnimation = ({ className = "w-64 h-64" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#iconsBg)"
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        {/* Pencil */}
        <g className="animate-spin-slow" style={{ transformOrigin: "150px 150px" }}>
          <rect x="140" y="100" width="20" height="100" rx="10" fill="#fbbf24" />
          <polygon points="140,100 160,100 150,80" fill="#f97316" />
          <rect x="145" y="190" width="10" height="10" fill="#1e40af" />
        </g>

        {/* Backpack */}
        <g className="animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
          <rect x="220" y="120" width="60" height="80" rx="15" fill="#1e40af" />
          <rect x="230" y="130" width="40" height="60" rx="8" fill="#3b82f6" />
          <rect x="235" y="110" width="30" height="20" rx="5" fill="#f97316" />
          <circle cx="240" cy="140" r="3" fill="#fb923c" />
          <circle cx="260" cy="140" r="3" fill="#fb923c" />
        </g>

        {/* Certificate */}
        <g className="animate-float" style={{ animationDelay: "1s" }}>
          <rect x="120" y="220" width="80" height="60" rx="4" fill="#ffffff" stroke="#1e40af" strokeWidth="2" />
          <rect x="130" y="230" width="60" height="4" rx="2" fill="#f97316" />
          <rect x="130" y="240" width="40" height="4" rx="2" fill="#fb923c" />
          <circle cx="170" cy="260" r="8" fill="#fbbf24" />
          <polygon points="170,252 174,260 170,268 166,260" fill="#f97316" />
        </g>

        {/* Paper/Notes */}
        <g className="animate-float" style={{ animationDelay: "1.5s" }}>
          <rect x="250" y="240" width="50" height="60" rx="4" fill="#ffffff" stroke="#1e40af" strokeWidth="2" />
          <rect x="260" y="250" width="30" height="3" rx="1" fill="#f97316" />
          <rect x="260" y="260" width="25" height="3" rx="1" fill="#fb923c" />
          <rect x="260" y="270" width="35" height="3" rx="1" fill="#fdba74" />
        </g>

        {/* Floating Elements */}
        <g className="animate-ping" style={{ animationDuration: "3s" }}>
          <circle cx="100" cy="200" r="4" fill="#f97316" opacity="0.6" />
          <circle cx="320" cy="180" r="3" fill="#fb923c" opacity="0.6" />
          <circle cx="80" cy="120" r="5" fill="#fdba74" opacity="0.6" />
        </g>

        <defs>
          <linearGradient id="iconsBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>

        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(2deg); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </svg>
    </div>
  )
}

// Online Class Animation
export const OnlineClassAnimation = ({ className = "w-64 h-64" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#classBg)"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />

        {/* Main Screen */}
        <rect x="80" y="100" width="240" height="160" rx="12" fill="#1e40af" />
        <rect x="90" y="110" width="220" height="140" rx="8" fill="#3b82f6" />

        {/* Video Grid */}
        <g className="animate-pulse" style={{ animationDuration: "2s" }}>
          {/* Teacher (larger) */}
          <rect x="100" y="120" width="100" height="60" rx="4" fill="#60a5fa" />
          <circle cx="130" cy="140" r="8" fill="#fbbf24" />
          <rect x="120" y="150" width="20" height="15" rx="3" fill="#f97316" />

          {/* Student 1 */}
          <rect
            x="210"
            y="120"
            width="45"
            height="35"
            rx="4"
            fill="#60a5fa"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <circle cx="225" cy="132" r="4" fill="#fbbf24" />
          <rect x="220" y="140" width="10" height="8" rx="2" fill="#fb923c" />

          {/* Student 2 */}
          <rect
            x="265"
            y="120"
            width="45"
            height="35"
            rx="4"
            fill="#60a5fa"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle cx="280" cy="132" r="4" fill="#fbbf24" />
          <rect x="275" y="140" width="10" height="8" rx="2" fill="#fdba74" />

          {/* Student 3 */}
          <rect
            x="210"
            y="165"
            width="45"
            height="35"
            rx="4"
            fill="#60a5fa"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <circle cx="225" cy="177" r="4" fill="#fbbf24" />
          <rect x="220" y="185" width="10" height="8" rx="2" fill="#f97316" />

          {/* Student 4 */}
          <rect
            x="265"
            y="165"
            width="45"
            height="35"
            rx="4"
            fill="#60a5fa"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <circle cx="280" cy="177" r="4" fill="#fbbf24" />
          <rect x="275" y="185" width="10" height="8" rx="2" fill="#fb923c" />
        </g>

        {/* Chat Messages */}
        <g className="animate-bounce" style={{ animationDuration: "3s", animationDelay: "1s" }}>
          <rect x="100" y="210" width="60" height="20" rx="10" fill="#f97316" opacity="0.8" />
          <rect x="170" y="220" width="80" height="20" rx="10" fill="#fb923c" opacity="0.8" />
        </g>

        {/* Connection Indicators */}
        <g className="animate-ping">
          <circle cx="320" cy="120" r="3" fill="#10b981" />
          <circle cx="320" cy="140" r="3" fill="#10b981" style={{ animationDelay: "0.5s" }} />
          <circle cx="320" cy="160" r="3" fill="#10b981" style={{ animationDelay: "1s" }} />
        </g>

        {/* Laptop Base */}
        <rect x="60" y="260" width="280" height="20" rx="10" fill="#1e40af" />
        <rect x="180" y="275" width="40" height="15" rx="7" fill="#374151" />

        <defs>
          <linearGradient id="classBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Compact Icon Versions for Feature Cards
export const CompactGraduationIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <polygon points="6,14 16,10 26,14 16,18" fill="#1e40af" className="animate-pulse" />
        <rect x="15" y="14" width="2" height="6" fill="#f97316" />
        <g className="animate-bounce" style={{ animationDuration: "1.5s", transformOrigin: "18px 14px" }}>
          <line x1="18" y1="14" x2="22" y2="10" stroke="#fb923c" strokeWidth="1" />
          <circle cx="22" cy="10" r="1" fill="#f97316" />
        </g>
      </svg>
    </div>
  )
}

export const CompactBookIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect x="8" y="10" width="16" height="12" rx="1" fill="#1e40af" className="animate-pulse" />
        <rect x="9" y="11" width="14" height="10" rx="1" fill="#3b82f6" />
        <line x1="16" y1="11" x2="16" y2="21" stroke="#f97316" strokeWidth="1" />
        <rect
          x="10"
          y="13"
          width="5"
          height="1"
          fill="#fb923c"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <rect
          x="10"
          y="15"
          width="4"
          height="1"
          fill="#fdba74"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>
    </div>
  )
}

export const CompactLaptopIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <rect x="6" y="12" width="20" height="12" rx="1" fill="#1e40af" />
        <rect x="7" y="13" width="18" height="9" rx="1" fill="#3b82f6" />
        <rect x="8" y="14" width="16" height="7" rx="1" fill="#60a5fa" />
        <rect x="10" y="16" width="8" height="1" fill="#f97316" className="animate-pulse" />
        <rect
          x="10"
          y="18"
          width="6"
          height="1"
          fill="#fb923c"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <rect x="4" y="24" width="24" height="2" rx="1" fill="#374151" />
      </svg>
    </div>
  )
}
