import CareerOptions from '../components/CareerOptions'
import MovingCircles from '../components/Home/MovingCircles'
import React from 'react'

const data = [
  {
    bg: "bg-purple-600 text-white",
    name: "Frontend Developer",
    description: "Begin your journey as a Frontend Developer. We will be teaching you about Frontend Development and also help you build an exceptional portfolio while learning HTML, CSS, JavaScript and React.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-white text-purple-600 my-6"
  },
  {
    bg: "text-white bg-black",
    name: "Backend Developer",
    description: "Begin our backend development program structured to help students launch a new career in web development.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-purple-600 text-white my-6"
  }
]

const SchoolOfEngineering = () => {
  return (
    <div className='raleway-500 relative'>
      <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14 relative h-96'>
        <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
          School of <span className='text-purple-600'>Engineering</span>
        </h2>
        <p className='pt-6 w-full md:w-[70%] mx-auto text-center'>
        Begin your learning process in Front-End Web Development, Back-End Web Development and more. 
        Discover career opportunities available for you. Speak to professionals and read through the materials and the programme designed specifically for you.
        </p>
        <div className='relative bottom-32 h-full '>
                <MovingCircles />
        </div>   
      </div>
      <CareerOptions data={data} />
    </div>
  )
}

export default SchoolOfEngineering