"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// SVG pattern for background
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

export function FeaturesSection() {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stories = [
    {
      id: "smart-morning",
      title: "Morning Routines Reimagined",
      subtitle: "Safe Transport & Attendance",
      narrative:
        'Ananya gets ready as the bus nears. Her father sees a live route update: "Bus 7 arriving in 2 mins." At school, she taps the biometric scanner—attendance done, and her dad gets a real-time alert on his phone.',
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
      features: [
        "Live GPS school bus tracking",
        "Biometric and RFID attendance",
        "Instant parent alerts",
        "Centralized transport schedule",
      ],
      color: "from-amber-400 to-orange-500",
      stats: "100% route coverage & 98% attendance accuracy",
    },
    {
      id: "classroom-intelligence",
      title: "Smart Classrooms, Smarter Teaching",
      subtitle: "Teacher Tools & Student Insights",
      narrative:
        "Ms. Isha begins her day reviewing the lesson plan auto-approved by the HOD. She quickly checks student profiles and performance charts before sharing today's topic with interactive slides—engagement soars, even the shy ones participate.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
      features: [
        "Teacher dashboard access",
        "Lesson plan uploads & approvals",
        "Digital content and analytics",
        "Behavioral insights & feedback",
      ],
      color: "from-blue-400 to-indigo-500",
      stats: "85% boost in classroom engagement",
    },
    {
      id: "homework-hub",
      title: "One-Click Homework Management",
      subtitle: "Student-Teacher Workflow",
      narrative:
        "Nikhil uploads his science project via the app. His teacher sees the submission and adds voice feedback. The dashboard updates instantly, showing ‘Submitted’—no more missed deadlines or confusion.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
      features: [
        "Online homework submissions",
        "Auto deadline reminders",
        "Voice/text teacher feedback",
        "Track progress & grading",
      ],
      color: "from-purple-400 to-pink-500",
      stats: "92% timely submissions recorded",
    },
    {
      id: "parent-bridge",
      title: "Always Connected, Always Informed",
      subtitle: "Parent Communication Portal",
      narrative:
        'Mrs. Raman receives a message from the teacher: "Good progress in English!" She replies with appreciation and books a PTM slot for Friday—all via the parent dashboard.',
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      features: [
        "Direct messaging with teachers",
        "Book PTM slots",
        "Track fee status & academic progress",
        "Leave requests & updates",
      ],
      color: "from-green-400 to-teal-500",
      stats: "90% parent satisfaction rate",
    },
    {
      id: "principal-hub",
      title: "Total School Control at a Glance",
      subtitle: "Admin & Academic Oversight",
      narrative:
        "Principal Mehra opens her dashboard: today’s attendance, staff leaves, transport delays, and fee reports—everything summarized. She approves leave requests and checks exam performance by class—all before 10 AM.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      features: [
        "Centralized school dashboard",
        "Live stats on academics & infra",
        "Multi-level approvals",
        "Role-based access & permissions",
      ],
      color: "from-indigo-400 to-purple-500",
      stats: "70% faster decision-making for school heads",
    },
  ];  

  const quickFeatures = [
    {
      title: "Seamless Fee Management",
      description: "Track, pay, and report fees with full transparency",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      impact: "₹75M+ processed with real-time receipts",
    },
    {
      title: "Digital Report Cards",
      description: "View grades, feedback, and transcripts instantly",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
      impact: "100% paperless evaluations",
    },
    {
      title: "Inventory Tracker",
      description: "Monitor and issue school assets like lab gear & stationery",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      impact: "10+ inventory zones tracked real-time",
    },
    {
      title: "Event & Exam Coordination",
      description: "Plan logistics, schedules, and attendance seamlessly",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      impact: "300+ events & exams organized",
    },
    {
      title: "Safe School Transport",
      description: "Track routes, drivers, and bus safety in real time",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
      impact: "100% route compliance with emergency protocols",
    },
    {
      title: "Smart Attendance",
      description: "Automated logs for students and staff with accuracy",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
      impact: "98% accurate and verifiable records",
    },
  ];  

  const testimonials = [
    {
      quote:
        "This system transformed how we connect with parents. Communication is now instant and meaningful.",
      author: "Mrs. Anderson",
      role: "Grade 4 Teacher",
      school: "Riverside Elementary",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80", // smiling woman teacher
    },
    {
      quote:
        "As a working parent, having real-time updates about my child's day gives me such peace of mind.",
      author: "David Chen",
      role: "Parent",
      school: "Hillcrest Middle School",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80", // smiling man, parent
    },
    {
      quote:
        "The analytics help me make data-driven decisions for our school's growth and student success.",
      author: "Dr. Patricia Williams",
      role: "Principal",
      school: "Oakwood High School",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=80&h=80&facepad=2&q=80", // professional woman, principal
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-x-hidden">
      {/* Background SVG Pattern */}
      <BgPattern />
      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block mb-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-full px-10 py-4 shadow-xl border border-white/30">
                <span className="text-blue-700 font-semibold text-lg tracking-wide">
                  Real Stories, Real Impact
                </span>
              </div>
            </div>
            <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8 drop-shadow-lg">
              School Management
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Built for Humans
              </span>
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-14 font-medium">
              Every feature designed around real people, real situations, and
              real needs. See how EduLives transforms daily school life for
              students, teachers, parents, and administrators.
            </p>
            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60">
                <Image
                  src="/api/placeholder/800/500"
                  alt="Happy students and teachers using EduLives system"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100/40">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-extrabold text-blue-700 drop-shadow">
                          500+
                        </div>
                        <div className="text-base text-gray-600 font-medium">
                          Schools
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-purple-700 drop-shadow">
                          1M+
                        </div>
                        <div className="text-base text-gray-600 font-medium">
                          Students
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-indigo-700 drop-shadow">
                          50K+
                        </div>
                        <div className="text-base text-gray-600 font-medium">
                          Teachers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story-Based Features */}
      <section className="py-24 relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-32 bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-indigo-100/40 blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow">
              A Day in the Life
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Follow real scenarios and see how our features solve everyday
              challenges
            </p>
          </div>
          <div className="space-y-32">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`transform transition-all duration-1000 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <div
                  className={`flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-8">
                    <div className="space-y-6">
                      <div className="inline-block">
                        <div
                          className={`bg-gradient-to-r ${story.color} text-white px-7 py-3 rounded-full font-semibold text-lg shadow-lg tracking-wide`}
                        >
                          {story.subtitle}
                        </div>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow">
                        {story.title}
                      </h3>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        {story.narrative}
                      </p>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {story.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-400 rounded-full shadow"></div>
                              <span className="text-gray-800 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="inline-block bg-gradient-to-r from-gray-100 via-white to-gray-50 px-7 py-3 rounded-full shadow border border-gray-200">
                        <span className="text-gray-700 font-semibold tracking-wide">
                          {story.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-br from-white/60 to-white/10 rounded-3xl blur-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60">
                        <Image
                          src={story.image}
                          alt={story.title}
                          width={600}
                          height={400}
                          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      </div>
                      {/* Floating stat badge */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex flex-col items-center min-w-[90px]">
                        <div className="text-2xl font-extrabold text-blue-700">
                          {story.stats.split(" ")[0]}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {story.stats.split(" ").slice(1).join(" ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Features Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-50/60 via-white/80 to-purple-50/60 relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 drop-shadow">
              More Ways We Help
            </h2>
            <p className="text-2xl text-gray-700 font-medium">
              Every detail designed to make school life better
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {quickFeatures.map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100/30">
                  <div className="relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-700/10 to-transparent"></div>
                  </div>
                  <div className="p-7 space-y-4">
                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 font-medium">{feature.description}</p>
                    <div className="text-base font-semibold text-blue-600">
                      {feature.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-32 bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-indigo-100/40 blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 drop-shadow">
              Real People, Real Stories
            </h2>
            <p className="text-2xl text-gray-700 font-medium">
              Hear from the educators, parents, and administrators who use
              EduLives daily
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-xl border-2 border-blue-100/30 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="space-y-6 flex flex-col items-center">
                  <div className="text-lg text-gray-700 leading-relaxed font-medium text-center">
                    <span className="text-3xl text-blue-600 font-bold mr-2">“</span>
                    {testimonial.quote}
                    <span className="text-3xl text-blue-600 font-bold ml-2">”</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="w-14 h-14 rounded-full object-cover border-4 border-blue-100"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.school}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default FeaturesSection;