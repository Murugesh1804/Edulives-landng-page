"use client"

import { useState } from "react"
import { X, Send, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    message: "",
    contactMethod: "email"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        institution: "",
        role: "",
        message: "",
        contactMethod: "email"
      })
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="card-modern max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-brand-divider">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">Get Started with EduLives</h2>
            <p className="text-brand-muted mt-2">Let's discuss how we can help your institution</p>
          </div>
          <button
            onClick={onClose}
            className="text-brand-muted hover:text-brand-dark transition-colors p-2 rounded-full hover:bg-brand-divider"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Email</p>
                    <p className="text-brand-muted">info@edulives.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-secondary/10 rounded-full">
                    <Phone className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Phone</p>
                    <p className="text-brand-muted">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-accent/10 rounded-full">
                    <MapPin className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Address</p>
                    <p className="text-brand-muted">123 Education Street<br />Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-accent/10 rounded-full">
                    <Clock className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Office Hours</p>
                    <p className="text-brand-muted">Mon-Fri: 9AM-6PM EST<br />Sat: 10AM-2PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-modern p-6">
              <h4 className="font-semibold text-brand-dark mb-3">Why Choose EduLives?</h4>
              <ul className="space-y-2 text-sm text-brand-mid">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Comprehensive school management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <span>User-friendly interface</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span>24/7 technical support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Customizable solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-brand-dark mb-1">
                      Institution Name *
                    </label>
                    <Input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                      placeholder="School/University name"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-brand-dark mb-1">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="input-modern focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300"
                    >
                      <option value="">Select your role</option>
                      <option value="administrator">Administrator</option>
                      <option value="principal">Principal</option>
                      <option value="teacher">Teacher</option>
                      <option value="it-manager">IT Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-brand-dark mb-1">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="input-modern focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="input-modern focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gradient"
                  className="w-full py-3 text-lg font-medium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Thank You!</h3>
                <p className="text-brand-muted mb-4">Your message has been sent successfully.</p>
                <Alert variant="success">
                  <AlertDescription>
                    We'll get back to you within 24 hours.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 