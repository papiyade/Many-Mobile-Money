import React from 'react'
const GradientText = ({ title }) => {
    return (
        <span className=" bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">{title}</span>
    )
}

export default GradientText
