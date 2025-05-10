import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-cyan-400/80 to-blue-500/80 text-white backdrop-blur-md hover:from-cyan-300 hover:to-blue-400 hover:scale-[1.04] active:scale-95 border border-cyan-300/30",
        destructive:
          "bg-gradient-to-br from-red-500/80 to-red-700/80 text-white hover:from-red-400 hover:to-red-600 hover:scale-[1.04] active:scale-95 border border-red-400/30",
        outline:
          "bg-white/10 border border-cyan-300/40 text-cyan-300 backdrop-blur-md hover:bg-cyan-300/10 hover:text-cyan-100 hover:scale-[1.04] active:scale-95",
        secondary:
          "bg-gradient-to-br from-gray-700/80 to-gray-900/80 text-white hover:from-gray-600 hover:to-gray-800 hover:scale-[1.04] active:scale-95 border border-gray-500/30",
        ghost: "bg-transparent text-cyan-300 hover:bg-cyan-300/10 hover:scale-[1.04] active:scale-95",
        link: "text-cyan-300 underline-offset-4 hover:underline hover:text-cyan-100",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 py-1.5 text-sm",
        lg: "h-14 rounded-xl px-10 py-3 text-lg",
        icon: "h-11 w-11",
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
