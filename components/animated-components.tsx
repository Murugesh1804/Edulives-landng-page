"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChevronDown, ArrowRight, Star, CheckCircle, Play } from "lucide-react"

// Animated Section Component
export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.6 
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Card Component
export const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0,
  hover = true 
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      } : {}}
      className={`card-hover ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Animated Button Component
export const AnimatedButton = ({ 
  children, 
  className = "", 
  variant = "default",
  size = "default",
  ...props 
}: {
  children?: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  [key: string]: any
}) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className={`btn-hover focus-ring ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Parallax Image Component
export const ParallaxImage = ({ 
  src, 
  alt, 
  className = "", 
  speed = 0.5 
}: {
  src: string
  alt: string
  className?: string
  speed?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`overflow-hidden ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

// Animated Counter Component
export const AnimatedCounter = ({ 
  value, 
  duration = 2,
  className = "" 
}: {
  value: number
  duration?: number
  className?: string
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className={className}
    >
      {isInView && (
        <motion.span
          initial={{ number: 0 }}
          animate={{ number: value }}
          transition={{ duration, ease: "easeOut" }}
        >
          {({ number }: { number: number }) => Math.round(number)}
        </motion.span>
      )}
    </motion.span>
  )
}

// Animated Text Component
export const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0,
  stagger = 0.05 
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) => {
  const words = text.split(" ")

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * stagger,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Floating Element Component
export const FloatingElement = ({ 
  children, 
  className = "", 
  duration = 3 
}: {
  children: React.ReactNode
  className?: string
  duration?: number
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`float ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Animated Icon Component
export const AnimatedIcon = ({ 
  icon: Icon, 
  className = "", 
  size = 24,
  color = "currentColor" 
}: {
  icon: any
  className?: string
  size?: number
  color?: string
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      <Icon size={size} color={color} />
    </motion.div>
  )
}

// Progress Bar Component
export const ProgressBar = ({ 
  progress, 
  className = "", 
  color = "#3b82f6" 
}: {
  progress: number
  className?: string
  color?: string
}) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="h-2 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  )
}

// Animated Badge Component
export const AnimatedBadge = ({ 
  children, 
  className = "", 
  variant = "default" 
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "success" | "warning" | "error"
}) => {
  const variants = {
    default: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800"
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  )
}

// Scroll Progress Indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

// Animated Divider
export const AnimatedDivider = ({ 
  className = "", 
  color = "#3b82f6" 
}: {
  className?: string
  color?: string
}) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`h-px ${className}`}
      style={{ backgroundColor: color }}
    />
  )
} 