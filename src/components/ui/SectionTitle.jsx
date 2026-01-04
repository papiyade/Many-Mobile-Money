import React from 'react'
import { motion } from 'framer-motion'
import GradientText from './GradientText'
import { FiStar } from 'react-icons/fi'

const SectionTitle = ({ badge, title, subtitle, paragraph, icon: Icon = FiStar, iconSize = 'w-6 h-6', gradientTitle, titleSize = 'md', position = 'default' }) => {

    const titleSizeClasses = {
        xxl: 'text-8xl',
        xl: 'md:text-7xl sm:text-xl text-xl',
        lg: 'md:text-6xl text-4xl ',
        md: 'md:text-4xl text-xl ',
        sm: 'md:text-4xl text-xl ',
        xs: 'md:text-3xl sm:text-xl text-base',
    }
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={`text-${position} space-y-4`}>
            {badge && (
                <span className={`inline-flex items-center text-secondary-content gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/30 transition-colors duration-300`}>
                    <Icon className={`${iconSize} text-secondary-content`} /> {badge}
                </span>
            )}
            {title && (
                <h2 className={` font-bold text-secondary-content  ${titleSizeClasses[titleSize]}`}>{title} <GradientText title={gradientTitle} /></h2>
            )}
            {subtitle && (
                <p className={`my-6 text-sm sm:text-lg font-semibold text-secondary-content`}>{subtitle}</p>
            )}
            {paragraph && (
                <p className={`my-6 text-base max-w-3xl mx-auto `}>{paragraph}</p>
            )}
        </motion.div>
    )
}

export default SectionTitle
