"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Heart,
  Star,
  BookOpen,
  Users,
  Trophy,
  Lightbulb,
  Globe,
  Play,
  ArrowRight,
  Quote,
} from "lucide-react"
import Image from "next/image"
import {
  StudentLearningAnimation,
  GraduationCapAnimation,
  BooksAnimation,
  TeacherSmartboardAnimation,
  OnlineClassAnimation,
} from "./components/lottie-animations"

export default function ModernEducationUI() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const carouselImages = [
    {
      component: <StudentLearningAnimation />,
      caption: "Interactive Digital Learning",
    },
    {
      component: <OnlineClassAnimation />,
      caption: "Collaborative Virtual Classrooms",
    },
    {
      component: <TeacherSmartboardAnimation />,
      caption: "Smart Teaching Solutions",
    },
    {
      component: <BooksAnimation />,
      caption: "Rich Digital Resources",
    },
  ]

  const features = [
    {
      icon: <GraduationCapAnimation className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description: "Personalized education paths that adapt to each student's unique learning style and pace.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Classroom",
      description: "Connect with students worldwide through virtual exchange programs and collaborative projects.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Labs",
      description: "State-of-the-art maker spaces equipped with 3D printers, robotics, and coding stations.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Projects",
      description: "Team-based learning experiences that build communication and leadership skills.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievement Tracking",
      description: "Comprehensive progress monitoring with real-time feedback and milestone celebrations.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Library",
      description: "Access to thousands of interactive books, research materials, and multimedia resources.",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const testimonials = [
    {
      quote:
        "This platform has completely transformed how my daughter approaches learning. She's more engaged and excited about school than ever before!",
      name: "Sarah Chen",
      role: "Parent",
      avatar: "/placeholder.svg?height=60&width=60",
      side: "left",
    },
    {
      quote:
        "The collaborative tools have revolutionized my classroom. Students are working together in ways I never thought possible.",
      name: "Marcus Rodriguez",
      role: "Teacher",
      avatar: "/placeholder.svg?height=60&width=60",
      side: "right",
    },
    {
      quote: "I love how the AI tutor helps me when I'm stuck. It's like having a personal teacher available 24/7!",
      name: "Emma Thompson",
      role: "Student",
      avatar: "/placeholder.svg?height=60&width=60",
      side: "left",
    },
    {
      quote:
        "The analytics dashboard gives me incredible insights into student progress. It's a game-changer for personalized education.",
      name: "Dr. James Wilson",
      role: "Principal",
      avatar: "/placeholder.svg?height=60&width=60",
      side: "right",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Comfortaa:wght@300;400;500;600;700&display=swap');
        
        .font-fredoka { font-family: 'Fredoka', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-comfortaa { font-family: 'Comfortaa', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-fredoka bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduLives
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8 font-space font-medium">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">
                Features
              </a>
              <a href="#programs" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">
                Programs
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">
                Stories
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="font-space font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-space font-medium rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Hero Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-comfortaa font-medium px-4 py-2 rounded-full shadow-lg">
                🚀 The Future of Learning is Here
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold font-fredoka leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Unlock Every
                </span>
                <br />
                <span className="text-slate-800">Student's Potential</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 font-space leading-relaxed max-w-2xl">
                Experience education reimagined with AI-powered personalization, immersive learning environments, and
                collaborative tools that inspire creativity and critical thinking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-space font-semibold rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-space font-semibold rounded-full px-8 py-4 transition-all duration-300 transform hover:scale-105 group bg-transparent"
              >
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white shadow-lg"
                  ></div>
                ))}
              </div>
              <div className="font-space">
                <p className="text-slate-800 font-semibold">Join 50,000+ students</p>
                <p className="text-slate-600 text-sm">already learning with us</p>
              </div>
            </div>
          </div>

          {/* Hero Carousel */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {carouselImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl">
                    {item.component}
                  </div>
                  <div className="absolute bottom-6 left-6 text-slate-800">
                    <h3 className="text-xl font-bold font-fredoka">{item.caption}</h3>
                  </div>
                </div>
              ))}

              {/* Carousel Controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <Star className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-comfortaa font-medium px-4 py-2 rounded-full shadow-lg mb-6">
              ✨ Innovative Features
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold font-fredoka text-slate-800 mb-6">
              Learning That{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Adapts
              </span>{" "}
              to You
            </h2>
            <p className="text-xl text-slate-600 font-space max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge educational tools designed to make learning more engaging, personalized, and
              effective for every student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm rounded-3xl"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-fredoka text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-space leading-relaxed">{feature.description}</p>
                </CardContent>

                {/* Hover Effect Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                ></div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-comfortaa font-medium px-4 py-2 rounded-full shadow-lg mb-6">
              💬 Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold font-fredoka text-slate-800 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Community
              </span>{" "}
              Says
            </h2>
            <p className="text-xl text-slate-600 font-space max-w-3xl mx-auto leading-relaxed">
              Real stories from students, teachers, and parents who have experienced the transformative power of our
              platform.
            </p>
          </div>

          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex items-center ${testimonial.side === "right" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-2xl ${testimonial.side === "right" ? "text-right" : "text-left"}`}>
                  {/* Speech Bubble */}
                  <div className="relative">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                      <CardContent className="p-8">
                        <Quote
                          className={`w-8 h-8 text-blue-400 mb-4 ${testimonial.side === "right" ? "ml-auto" : ""}`}
                        />
                        <p className="text-lg text-slate-700 font-space leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        <div
                          className={`flex items-center ${testimonial.side === "right" ? "justify-end" : "justify-start"} space-x-4`}
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className={testimonial.side === "right" ? "text-right" : "text-left"}>
                            <h4 className="font-bold font-fredoka text-slate-800">{testimonial.name}</h4>
                            <p className="text-slate-600 font-space text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Speech Bubble Tail */}
                    <div
                      className={`absolute top-8 ${testimonial.side === "right" ? "right-0 translate-x-4" : "left-0 -translate-x-4"} w-0 h-0 border-t-[20px] border-b-[20px] border-t-transparent border-b-transparent ${testimonial.side === "right" ? "border-l-[20px] border-l-white/90" : "border-r-[20px] border-r-white/90"}`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white font-comfortaa font-medium px-4 py-2 rounded-full shadow-lg">
              🎓 Ready to Transform Education?
            </Badge>

            <h2 className="text-4xl lg:text-6xl font-bold font-fredoka text-white leading-tight">
              Start Your Learning Journey Today
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 font-space leading-relaxed max-w-3xl mx-auto">
              Join thousands of students, teachers, and schools already experiencing the future of education.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-space font-bold rounded-full px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-space font-bold rounded-full px-10 py-4 transition-all duration-300 transform hover:scale-105 group bg-transparent"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-white/80 font-space">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold font-fredoka">EduLives</span>
              </div>
              <p className="text-slate-400 font-space leading-relaxed">
                Transforming education through innovative technology and personalized learning experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold font-fredoka text-lg">Platform</h3>
              <ul className="space-y-2 font-space text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold font-fredoka text-lg">Resources</h3>
              <ul className="space-y-2 font-space text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold font-fredoka text-lg">Company</h3>
              <ul className="space-y-2 font-space text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 font-space">
            <p>&copy; 2024 EduLives. All rights reserved. Made with ❤️ for educators worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
