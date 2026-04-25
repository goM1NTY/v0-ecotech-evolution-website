import * as React from 'react'

type ButtonVariant = 'default' | 'outline' | 'ghost'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 px-3',
  lg: 'h-10 px-6',
  icon: 'size-9',
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  {
    variant?: ButtonVariant
    size?: ButtonSize
    asChild?: boolean
  }) {
  const buttonClassName = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: cn(buttonClassName, children.props.className),
    })
  }

  return (
    <button
      data-slot="button"
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
