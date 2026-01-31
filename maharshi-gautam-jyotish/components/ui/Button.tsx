// components/ui/Button.tsx
'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-lg
      transition-all duration-300 ease-in-out
      transform hover:scale-[1.02] active:scale-[0.98]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      disabled:hover:scale-100
    `

    const variants = {
      primary: `
        bg-gradient-to-r from-saffron-500 to-saffron-600
        hover:from-saffron-600 hover:to-saffron-700
        text-white shadow-lg hover:shadow-xl
        focus-visible:ring-saffron-500
        dark:from-gold-500 dark:to-gold-600
        dark:hover:from-gold-600 dark:hover:to-gold-700
      `,
      secondary: `
        bg-navy-800 hover:bg-navy-900
        text-white shadow-lg hover:shadow-xl
        focus-visible:ring-navy-500
        dark:bg-navy-700 dark:hover:bg-navy-600
      `,
      outline: `
        border-2 border-saffron-500
        text-saffron-600 hover:bg-saffron-50
        focus-visible:ring-saffron-500
        dark:border-gold-400 dark:text-gold-400
        dark:hover:bg-gold-400/10
      `,
      ghost: `
        text-saffron-600 hover:bg-saffron-50
        focus-visible:ring-saffron-500
        dark:text-gold-400 dark:hover:bg-gold-400/10
      `,
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }