"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Users, Shield, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Decorative background pattern */}
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
              id="about-grid"
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
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
        {/* Decorative blobs */}
        <div className="absolute top-[-6rem] left-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-6rem] right-1/4 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />

        <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              About EduLives
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tight">
              Empowering <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Education</span> for a Brighter Tomorrow
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              EduLives is a next-generation school management platform designed to simplify, modernize, and elevate the educational experience for students, teachers, administrators, and parents. Our mission is to enable institutions to focus on what matters most: learning, growth, and community.
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-20">
            <div className="flex-1 flex flex-col items-center bg-white/80 rounded-2xl shadow-soft p-8 border border-neutral-200/50">
              <Users className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-3xl font-bold text-neutral-900">500+</div>
              <div className="text-neutral-600 mt-1">Schools Trust Us</div>
            </div>
            <div className="flex-1 flex flex-col items-center bg-white/80 rounded-2xl shadow-soft p-8 border border-neutral-200/50">
              <Award className="w-8 h-8 text-yellow-500 mb-2" />
              <div className="text-3xl font-bold text-neutral-900">4.9/5</div>
              <div className="text-neutral-600 mt-1">Average Rating</div>
            </div>
            <div className="flex-1 flex flex-col items-center bg-white/80 rounded-2xl shadow-soft p-8 border border-neutral-200/50">
              <Shield className="w-8 h-8 text-green-500 mb-2" />
              <div className="text-3xl font-bold text-neutral-900">99.9%</div>
              <div className="text-neutral-600 mt-1">Uptime Guarantee</div>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 text-center">Our Story</h2>
            <p className="text-lg text-neutral-700 leading-relaxed text-center">
              Founded by a passionate team of educators and technologists, EduLives was born from the belief that technology should empower—not complicate—school life. We saw the challenges schools faced: scattered data, manual processes, and disconnected communities. So we set out to build a platform that brings everything together, making school management seamless, secure, and smart.
            </p>
          </div>

          {/* Core Values */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/90 rounded-2xl shadow-soft p-8 border border-neutral-200/50 flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Innovation</h3>
                <p className="text-neutral-600 text-center">
                  We embrace the latest technology to deliver intuitive, future-ready solutions for every school.
                </p>
              </div>
              <div className="bg-white/90 rounded-2xl shadow-soft p-8 border border-neutral-200/50 flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Trust & Security</h3>
                <p className="text-neutral-600 text-center">
                  Data privacy and reliability are at the heart of everything we do, ensuring peace of mind for all users.
                </p>
              </div>
              <div className="bg-white/90 rounded-2xl shadow-soft p-8 border border-neutral-200/50 flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Community</h3>
                <p className="text-neutral-600 text-center">
                  We believe in building strong, connected communities—bridging students, teachers, parents, and staff.
                </p>
              </div>
            </div>
          </div>

          {/* Why EduLives */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 text-center">Why EduLives?</h2>
            <ul className="text-lg text-neutral-700 leading-relaxed space-y-4 list-none max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <span>
                  <strong>All-in-One Platform:</strong> Manage academics, attendance, fees, communication, and more from a single dashboard.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>
                  <strong>Role-Based Access:</strong> Personalized experiences for students, teachers, heads, principals, and admin staff.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>
                  <strong>Modern, Intuitive Design:</strong> Clean, user-friendly interfaces for effortless navigation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-500 mt-1" />
                <span>
                  <strong>AI-Powered Insights:</strong> Make smarter decisions with real-time analytics and smart recommendations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                <span>
                  <strong>Secure & Reliable:</strong> Enterprise-grade security, 99.9% uptime, and dedicated support.
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-soft border border-neutral-200/50">
              <span className="text-lg font-semibold text-neutral-900">
                Ready to experience the future of school management?
              </span>
              <a
                href="/#get-started"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-br from-[#2563EB] via-[#059669] to-[#F59E0B] text-white font-bold shadow-lg hover:scale-105 transition-transform"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
