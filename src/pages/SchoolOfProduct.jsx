import CareerOptions from '../components/CareerOptions'
import MovingCircles from '../components/Home/MovingCircles'
import React from 'react'

const data = [
  {
    bg: "bg-purple-600 text-white",
    name: "Product Design",
    description: "The design program is taught by prominent design experts and created as an introductory and research phase approach, taking you through design phases.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-white text-purple-600 my-6"
  },
  {
    bg: "text-black",
    name: "Product Manager",
    description: "Acquire top skills that help you define product vision, strategy, and a roadmap to delivering world class product to companies worldwide.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-purple-600 text-white my-6"
  },
  {
    bg: "bg-purple-600 text-white",
    name: "Product Marketer",
    description: "Learn how to become a product marketing. Our seasoned coaches help you become one of the most sort after product marketers in the field.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-white text-purple-600 my-6"
  }
]

const SchoolOfProduct = () => {
  return (
    <div className='raleway-500 relative'>
      <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14 relative h-96'>
        <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
          School of <span className='text-purple-600'>Product</span>
        </h2>
        <p className='pt-6 w-full md:w-[70%] mx-auto text-center'>
          We offer you product courses such as Product Design and Product management by equipping you with the right materials, courses and professionals willing to coach
          you through your journey while giving you the best advices after your program.
        </p>
        <div className='relative bottom-32 h-full '>
          <MovingCircles />
        </div>

      </div>
      <CareerOptions data={data} />
    </div>
  )
}

export default SchoolOfProduct