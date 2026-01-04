import React, { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const percentage = (scrolled / totalHeight) * 100
      
      setScrollPercentage(percentage)
      setIsScrolled(scrolled > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 bg-primary/10 backdrop-blur-xl z-[9999] ${isScrolled ? 'block' : 'hidden'}`}>
      <div className="h-full bg-primary transition-all rounded-br-full rounded-tr-full duration-300" style={{ width: `${scrollPercentage}%` }}/>
    </div>
  )
}

export default ScrollProgress
