import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className = {`px-6 py-3 rounded-lg text-white ${className}`}> {text} </button>
  )
}

export default Button