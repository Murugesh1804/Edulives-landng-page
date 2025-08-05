import React from "react"

const comparisonData = [
  {
    feature: "Setup Time",
    traditional: "2-4 weeks",
    edulives: "2 hours",
  },
  {
    feature: "Technical Expertise Required",
    traditional: "High",
    edulives: "None",
  },
  {
    feature: "Data Migration",
    traditional: "Manual, error-prone",
    edulives: "Automated, 99.9% accurate",
  },
  {
    feature: "Mobile Access",
    traditional: "Limited or none",
    edulives: "Full mobile app",
  },
  {
    feature: "Real-time Updates",
    traditional: "Delayed sync",
    edulives: "Instant sync",
  },
  {
    feature: "Security",
    traditional: "Basic",
    edulives: "Enterprise-grade",
  },
  {
    feature: "Support",
    traditional: "Limited hours",
    edulives: "24/7 support",
  },
  {
    feature: "Updates & Maintenance",
    traditional: "Manual, disruptive",
    edulives: "Automatic, seamless",
  },
  {
    feature: "Cost",
    traditional: "High upfront + ongoing",
    edulives: "Predictable monthly",
  },
  {
    feature: "Scalability",
    traditional: "Limited",
    edulives: "Unlimited",
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100/40 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-100/40 rounded-full blur-2xl -z-10"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold tracking-wide mb-3">
            Why Choose EduLives
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 leading-tight">
            EduLives vs. Traditional Solutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover how EduLives outperforms legacy school management systems in every way that matters.
          </p>
        </div>

        {/* Side-by-side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Card */}
          <div className="flex flex-col bg-white rounded-3xl shadow-lg border border-blue-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100 rounded-t-3xl" />
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-2xl font-bold shadow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              </span>
              <span className="text-2xl font-extrabold text-blue-700 tracking-tight">Traditional</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-xs uppercase text-neutral-400 font-semibold pb-2">Feature</th>
                  <th className="text-xs uppercase text-neutral-400 font-semibold pb-2">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, idx) => (
                  <tr key={item.feature} className={idx % 2 === 0 ? "bg-blue-50/30" : ""}>
                    <td className="py-3 pr-4 font-medium text-neutral-700">{item.feature}</td>
                    <td className="py-3 font-semibold text-blue-800">{item.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* EduLives Card */}
          <div className="flex flex-col bg-white rounded-3xl shadow-lg border border-green-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-300 to-green-100 rounded-t-3xl" />
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 text-2xl font-bold shadow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-2xl font-extrabold text-green-700 tracking-tight">EduLives</span>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-xs uppercase text-neutral-400 font-semibold pb-2">Feature</th>
                  <th className="text-xs uppercase text-neutral-400 font-semibold pb-2">EduLives</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, idx) => (
                  <tr key={item.feature} className={idx % 2 === 0 ? "bg-green-50/30" : ""}>
                    <td className="py-3 pr-4 font-medium text-neutral-700">{item.feature}</td>
                    <td className="py-3 font-semibold text-green-800">{item.edulives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary/Highlight */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex-1 bg-blue-100/60 rounded-xl px-6 py-4 text-center shadow-sm">
            <div className="text-lg font-bold text-blue-700">10x Faster Setup</div>
            <div className="text-xs text-blue-900 mt-1">Get started in hours, not weeks</div>
          </div>
          <div className="flex-1 bg-green-100/60 rounded-xl px-6 py-4 text-center shadow-sm">
            <div className="text-lg font-bold text-green-700">99.9% Uptime</div>
            <div className="text-xs text-green-900 mt-1">Reliable and always available</div>
          </div>
          <div className="flex-1 bg-purple-100/60 rounded-xl px-6 py-4 text-center shadow-sm">
            <div className="text-lg font-bold text-purple-700">50% Cost Savings</div>
            <div className="text-xs text-purple-900 mt-1">Save on operations & IT</div>
          </div>
        </div>

        {/* Mobile summary stacked */}
        <div className="sm:hidden mt-8 flex flex-col gap-3">
          <div className="bg-blue-100/60 rounded-xl px-4 py-3 text-center">
            <div className="text-base font-bold text-blue-700">10x Faster Setup</div>
            <div className="text-xs text-blue-900 mt-1">Get started in hours, not weeks</div>
          </div>
          <div className="bg-green-100/60 rounded-xl px-4 py-3 text-center">
            <div className="text-base font-bold text-green-700">99.9% Uptime</div>
            <div className="text-xs text-green-900 mt-1">Reliable and always available</div>
          </div>
          <div className="bg-purple-100/60 rounded-xl px-4 py-3 text-center">
            <div className="text-base font-bold text-purple-700">50% Cost Savings</div>
            <div className="text-xs text-purple-900 mt-1">Save on operations & IT</div>
          </div>
        </div>
      </div>
    </section>
  )
}