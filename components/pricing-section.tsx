"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown, Building2, ArrowRight, Star, Users, Shield, Globe, TrendingUp, Award, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    price: { monthly: "₹2,999", yearly: "₹29,999" },
    period: { monthly: "/month", yearly: "/year" },
    description: "Perfect for small schools up to 200 students",
    features: [
      "Up to 200 students",
      "Basic student management",
      "Attendance tracking",
      "Fee management",
      "Parent communication",
      "Mobile app access",
      "Email support",
      "Basic analytics",
    ],
    popular: false,
    icon: Zap,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    illustration: "🚀",
    savings: "Save ₹6,000/year",
    bestFor: "Small Schools",
  },
  {
    name: "Professional",
    price: { monthly: "₹5,999", yearly: "₹59,999" },
    period: { monthly: "/month", yearly: "/year" },
    description: "Ideal for medium schools up to 1000 students",
    features: [
      "Up to 1000 students",
      "Advanced analytics",
      "Inventory management",
      "Examination system",
      "Library management",
      "Transport tracking",
      "Priority support",
      "Custom reports",
      "Multi-branch support",
      "Advanced security",
    ],
    popular: true,
    icon: Crown,
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    illustration: "👑",
    savings: "Save ₹12,000/year",
    bestFor: "Medium Schools",
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    period: { monthly: "pricing", yearly: "pricing" },
    description: "For large institutions with unlimited students",
    features: [
      "Unlimited students",
      "Multi-campus support",
      "Advanced integrations",
      "Custom workflows",
      "Dedicated support",
      "Training & onboarding",
      "SLA guarantee",
      "White-label options",
      "API access",
      "Custom development",
    ],
    popular: false,
    icon: Building2,
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    illustration: "🏢",
    savings: "Contact Sales",
    bestFor: "Large Institutions",
  },
]

const valueProps = [
  {
    icon: Users,
    title: "500+ Schools Trust Us",
    description: "Join the growing community",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level data protection",
    color: "green",
  },
  {
    icon: Globe,
    title: "24/7 Global Support",
    description: "Always here when you need us",
    color: "purple",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-neutral-50 to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
            <Crown className="w-4 h-4 mr-2" />
            Simple & Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Choose the Perfect{" "}
            <span className="gradient-text-accent">
              Plan for Your School
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. All plans include core features with a 30-day free trial.
            Start small, scale as you grow.
          </p>
        </div>

        {/* Value propositions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
              <div className={`w-12 h-12 bg-${prop.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <prop.icon className={`w-6 h-6 text-${prop.color}-600`} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{prop.title}</h3>
              <p className="text-neutral-600 text-sm">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced pricing toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-soft border border-neutral-200/50">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isYearly
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isYearly
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-medium"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-neutral-200/50 bg-white/80 backdrop-blur-sm hover:shadow-large transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "ring-2 ring-purple-500 shadow-large" : ""
              } overflow-hidden`}
            >
              {/* Background illustration */}
              <div className="absolute top-4 right-4 text-4xl opacity-5">
                {plan.illustration}
              </div>

              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-medium">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</CardTitle>
                <div className="text-sm text-neutral-500 mb-2">{plan.bestFor}</div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-neutral-900">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-neutral-600 ml-2">
                    {isYearly ? plan.period.yearly : plan.period.monthly}
                  </span>
                </div>
                <CardDescription className="text-neutral-600 leading-relaxed">
                  {plan.description}
                </CardDescription>
                {plan.savings !== "Contact Sales" && (
                  <div className="mt-3 text-sm text-green-600 font-medium">
                    {plan.savings}
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full group ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-medium hover:shadow-glow"
                      : "bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-900 text-white"
                  } transition-all duration-300`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced bottom CTA with more visual elements */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-neutral-700">30-day free trial</span>
              </div>
              <div className="w-px h-6 bg-neutral-300"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-neutral-700">No credit card required</span>
              </div>
              <div className="w-px h-6 bg-neutral-300"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-neutral-700">Cancel anytime</span>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-neutral-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-px h-4 bg-neutral-300"></div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="w-px h-4 bg-neutral-300"></div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
