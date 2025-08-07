import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
        secondary: "bg-brand-secondary text-white shadow-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
        ghost: "bg-transparent text-brand-secondary border border-brand-secondary hover:bg-brand-secondary/10 hover:-translate-y-1 active:translate-y-0",
        outline: "border border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white hover:-translate-y-1 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
        success: "bg-gradient-success text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
        accent: "bg-brand-accent text-brand-dark shadow-lg hover:bg-yellow-600 hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
        gradient: "bg-gradient-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 rounded-lg px-3 text-sm",
        lg: "h-14 rounded-2xl px-8 py-4 text-lg",
        xl: "h-16 rounded-2xl px-10 py-5 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
