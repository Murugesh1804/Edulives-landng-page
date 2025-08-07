"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const popupContent = {
    privacy: {
      title: "Privacy Policy",
      content: `At EduLives, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.

**Information We Collect:**
- Personal information (name, email, institution details)
- Usage data and analytics
- Technical information about your device and browser

**How We Use Your Information:**
- To provide and improve our services
- To communicate with you about updates and features
- To ensure security and prevent fraud

**Data Protection:**
We implement industry-standard security measures to protect your data. Your information is encrypted and stored securely.

**Your Rights:**
You have the right to access, modify, or delete your personal information at any time.

For questions about this policy, please contact us at privacy@edulives.com`
    },
    terms: {
      title: "Terms of Service",
      content: `Welcome to EduLives. By using our platform, you agree to these terms of service.

**Acceptance of Terms:**
By accessing or using EduLives, you agree to be bound by these terms and all applicable laws and regulations.

**Use of Service:**
- You must use the service for lawful purposes only
- You are responsible for maintaining the confidentiality of your account
- You agree not to interfere with the proper functioning of the service

**Intellectual Property:**
All content, features, and functionality are owned by EduLives and protected by copyright laws.

**Limitation of Liability:**
EduLives is provided "as is" without warranties. We are not liable for any damages arising from your use of the service.

**Termination:**
We may terminate or suspend your access at any time for violations of these terms.

**Changes to Terms:**
We reserve the right to modify these terms at any time. Continued use constitutes acceptance of changes.`
    },
    contact: {
      title: "Contact Us",
      content: `We're here to help! Get in touch with us through any of the following channels:

**General Inquiries:**
Email: info@edulives.com
Phone: +1 (555) 123-4567

**Technical Support:**
Email: support@edulives.com
Phone: +1 (555) 123-4568

**Business Development:**
Email: business@edulives.com
Phone: +1 (555) 123-4569

**Office Hours:**
Monday - Friday: 9:00 AM - 6:00 PM EST
Saturday: 10:00 AM - 2:00 PM EST

**Address:**
EduLives Inc.
123 Education Street
Tech City, TC 12345
United States

**Response Time:**
We typically respond to inquiries within 24 hours during business days.`
    }
  }

  const handleLinkClick = (e: React.MouseEvent, popupType: string) => {
    e.preventDefault()
    setActivePopup(popupType)
  }

  const closePopup = () => {
    setActivePopup(null)
  }

  return (
    <>
      <footer className="footer-modern border-t border-brand-divider py-16 mt-16">
        <div className="container mx-auto flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
            <Image
              src="/images/logo_white.png"
              alt="EduLives Logo"
              width={200}
              height={50}
              className="object-contain w-40 sm:w-70 hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <p className="text-white/90 text-center text-body max-w-2xl">
            Empowering educational institutions with simple, effective management solutions that transform the way schools operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 items-center">
            <button 
              onClick={(e) => handleLinkClick(e, 'privacy')}
              className="text-white/90 hover:text-white text-sm cursor-pointer transition-colors duration-300 hover:-translate-y-0.5"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => handleLinkClick(e, 'terms')}
              className="text-white/90 hover:text-white text-sm cursor-pointer transition-colors duration-300 hover:-translate-y-0.5"
            >
              Terms of Service
            </button>
            <button 
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="text-white/90 hover:text-white text-sm cursor-pointer transition-colors duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>
          <div className="divider-modern w-full max-w-md"></div>
          <p className="text-white/70 text-xs text-center">
            © {new Date().getFullYear()} EduLives. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Popup Overlay */}
      {activePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="card-modern max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-brand-divider">
              <h2 className="text-2xl font-bold text-brand-dark">
                {popupContent[activePopup as keyof typeof popupContent].title}
              </h2>
              <button
                onClick={closePopup}
                className="text-brand-muted hover:text-brand-dark transition-colors p-2 rounded-full hover:bg-brand-divider"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div
                className="prose prose-sm max-w-none text-brand-mid"
                style={{ whiteSpace: "pre-line" }}
                // Use dangerouslySetInnerHTML to allow HTML formatting
                dangerouslySetInnerHTML={{
                  __html: (
                    popupContent[activePopup as keyof typeof popupContent].content
                      // Replace **bold** with gradient bold span
                      .replace(
                        /\*\*(.*?)\*\*/g,
                        `<span class="font-bold text-brand-primary">${'$1'}</span>`
                      )
                      // Optionally, you can add more formatting rules here
                  ),
                }}
              />
            </div>
            <div className="flex justify-end p-6 border-t border-brand-divider">
              <Button
                onClick={closePopup}
                variant="gradient"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
