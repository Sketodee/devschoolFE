import MovingCircles from '../components/Home/MovingCircles'
import React from 'react'

const SchoolOfProduct = () => {
  return (
    <div className='w-[70%] mx-auto raleway-500 relative'>
      <div className='py-14 relative h-96'>
        <h2 className='agbalumo-regular text-5xl py-5 text-center'>
          School of <span className='text-purple-600'>Product</span>
        </h2>
        <p className='pt-6 w-[70%] mx-auto text-center'>
          We offer you product courses such as Product Design and Product management by equipping you with the right materials, courses and professionals willing to coach 
          you through your journey while giving you the best advices after your program.
        </p>
        <div className='relative bottom-32 h-full '>
                <MovingCircles />
        </div>
        
      </div>
    </div>
  )
}

export default SchoolOfProduct