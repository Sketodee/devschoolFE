import React from 'react'
import Reviews from './Reviews'

const SuccessStories = () => {
  return (
    <div className='py-20 raleway-500 '>
        <div className='w-full md:w-[90%] lg:w-[70%] mx-auto px-3 sm:px-0'>
            <p className='platypi-400 text-4xl lg:text-5xl text-purple-600'>Our Success Stories</p>
            <p className='pt-5'>What our students are saying about their learning experience.</p>
        </div>
        <Reviews />
    </div>
  )
}

export default SuccessStories