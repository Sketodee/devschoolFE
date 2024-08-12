import React from 'react'

const Button = ({text, className, onClick}) => {
  return (
    <button onClick={onClick} className = {`px-6 py-3 rounded-lg raleway-500 ${className}`}> {text} </button>
  )
}

export default Button


