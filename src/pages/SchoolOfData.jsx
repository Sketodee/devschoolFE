import CareerOptions from '../components/CareerOptions'
import MovingCircles from '../components/Home/MovingCircles'
import React from 'react'

const data = [
    {
      bg: "bg-purple-600 text-white",
      name: "Data Analyst",
      description: "Logo has designed for its students the programme to learn Data Analyst in the schdeuled months and prepare them for jobs in the Data Analyst field. Tools Include: SQL, Excel, PowerBI & Python.",
      duration: "12 Weeks Virtual Class",
      startDate: "Next class starts: Sept 24, 2024",
      buttonStyle: "bg-white text-purple-600 my-6"
    },
    {
      bg: "text-white bg-black",
      name: "Data Scientist",
      description: "Logo has designed for its students the programme to learn Data Science in the schdeuled months and prepare them for jobs in the Data Science field. Tools includes Python, OpenCV, Tensorflow, and Numpy to uncover insights, interpret and process datasets.",
      duration: "12 Weeks Virtual Class",
      startDate: "Next class starts: Sept 24, 2024",
      buttonStyle: "bg-purple-600 text-white my-6"
    }
  ]

const SchoolOfData = () => {
  return (
    <div className='raleway-500 relative'>
    <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14 relative h-96'>
      <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
        School of <span className='text-purple-600'>Data</span>
      </h2>
      <p className='pt-6 w-full md:w-[70%] mx-auto text-center'>
      Begin your Data learning career and more. Discover career opportunities available for you. Speak to professionals and read through the materials and the programme designed specifically for you.
      </p>
      <div className='relative bottom-32 h-full '>
              <MovingCircles />
      </div>   
    </div>
    <CareerOptions data={data} />
  </div>
  )
}

export default SchoolOfData