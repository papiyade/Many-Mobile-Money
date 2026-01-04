import React from 'react'
import { Link } from 'react-router-dom'

const variants = {
  primary: {
    base: 'btn-primary hover:bg-transparent hover:text-primary-content border border-primary/20',
    hoverIcon: 'text-primary',
    border: 'from-primary via-secondary to-primary'
  },
  secondary: {
    base: 'btn-secondary hover:bg-transparent hover:text-primary-content border border-secondary/20',
    hoverIcon: 'text-secondary',
    border: 'from-secondary via-primary to-secondary'
  },
  accent: {
    base: 'btn-accent text-accent-content hover:bg-transparent hover:text-accent border border-accent/20',
    hover: 'hover:bg-accent/10',
    hoverIcon: 'hover:bg-accent/10 hover:text-accent',
    border: 'from-accent via-primary to-accent'
  },
  ghost: {
    base: 'btn-ghost hover:bg-transparent hover:text-primary-content',
    hover: 'hover:text-primary',
    hoverIcon: 'text-primary',
    border: 'from-primary via-secondary to-primary'
  },
  link: {
    base: 'btn-link hover:no-underline hover:text-primary group-hover:text-primary',
    hover: 'group-hover:text-primary',
    hoverIcon: 'text-primary',
    border: 'from-primary via-secondary to-primary'
  },
  outline: {
    base: 'btn-outline text-secondary-content hover:bg-primary/10',
    hover: 'hover:text-secondary-content',
    hoverIcon: 'text-primary',
    border: 'from-primary via-secondary to-primary'
  },
  gradient: {
    base: 'btn bg-gradient-to-r from-primary to-secondary text-primary-content hover:from-primary/90 hover:text-primary-content hover:to-secondary/90',
    hover: 'hover:opacity-90',
    hoverIcon: 'text-primary-content',
    border: 'from-primary via-secondary to-primary'
  }
}

const sizes = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg px-6',
  xl: 'btn-xl',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconClassName = '',
  type = 'button',
  ...props
}) => {
  const isLink = props.to || props.href;
  const Component = isLink ? Link : 'button';

  return (
    <Component className={`group relative ${variants[variant].base} ${sizes[size]} ${className} z-20 rounded-xl overflow-hidden text-base font-semibold btn flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95`}
      type={type}
      {...props}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
      </div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

      {/* Border animation */}
      <div className="absolute inset-0 rounded-xl p-[1px]">
        <div className={`absolute inset-0 bg-gradient-to-r ${variants[variant].border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        {Icon && (
          <Icon className={`w-5 h-5 transition-all duration-300 ${variants[variant].hoverIcon} ${iconClassName} group-hover:scale-110`} />
        )}
        <span className={`transition-all duration-300 text-xs lg:text-base group-hover:tracking-wider`}>{children}</span>
      </div>
    </Component>
  )
}

export default Button
