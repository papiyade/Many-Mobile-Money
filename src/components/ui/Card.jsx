import React from 'react'
import { motion } from 'framer-motion'

const Card = ({
  variant = 'default',
  title,
  description,
  image,
  children,
  className = '',
  bodyClassName = '',
  ...props
}) => {
  const variants = {
    default: 'card card-compact bg-base-100/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover-card',
    primary: 'card card-compact bg-primary group hover:bg-base-100/90  shadow-xl hover:shadow-primary/20 transition-all duration-300 hover-card',
    secondary: 'card card-compact bg-secondary/20 text-secondary-content hover:bg-secondary/30 shadow-xl hover:shadow-secondary/20 transition-all duration-300 hover-card',
    accent: 'card card-compact bg-accent/20 text-accent-content hover:bg-accent/30 shadow-xl hover:shadow-accent/20 transition-all duration-300 hover-card',
    glass: 'card card-compact bg-base-100/95 backdrop-blur-sm hover:bg-base-100/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover-card',
    bordered: 'card card-compact bg-base-100/95 border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-lg transition-all duration-300 hover-card',
    gradient: 'card card-compact bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-base-content hover:from-primary/30 hover:via-secondary/30 hover:to-accent/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover-card'
  }

  return (
    <motion.div className={`${variants[variant] || variants.default} ${className} `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}

    >
      <div className={`card-body ${bodyClassName}`.trim()}>
        {title && (
          <h2 className="text-2xl  font-bold text-primary-content group-hover:text-secondary-content">{title}</h2>
        )}
        {description && (
          <p className="text-primary-content group-hover:text-secondary-content">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  )
}

export default Card
