import React from 'react'

const Section = ({ container = true, padding = true, paddingX = true, paddingY = true, id, children, className }) => {
  return (
    <section id={id} className={`relative ${container ? 'container mx-auto' : ''} ${paddingX ? 'px-4 sm:px-5' : ''} ${paddingY ? 'py-8 sm:py-12 lg:py-24' : ''} ${className}`}>
      {children}
    </section>
  )
}

export default Section
