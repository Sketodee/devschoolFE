import React from 'react'

const Button = ({text, className, onClick}) => {
  return (
    // <button onClick={onClick} className = {`px-6 py-3 rounded-lg raleway-500 ${className}`}> {text} </button>
    <button onClick={onClick}
    className= {`bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg raleway-500 ${className}`}>
              {text}
            </button>
  )
}

export default Button


