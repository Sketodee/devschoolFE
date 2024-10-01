import { FaBrain, FaBriefcase, FaChartBar, FaChartLine, FaDatabase, FaLaptopCode, FaPython, FaUsers, FaUserTie } from 'react-icons/fa6'
import CareerOptions from '../components/CareerOptions'
import MovingCircles from '../components/Home/MovingCircles'
import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'
import { useModal } from '../context/ModalContext'
import Button from '../components/Button'

const data = [
    {
      bg: "bg-purple-600 text-white",
      name: "Data Analyst",
      description: "Kodexxar has designed for its students the programme to learn Data Analyst in the schdeuled months and prepare them for jobs in the Data Analyst field. Tools Include: SQL, Excel, PowerBI & Python.",
      duration: "12 Weeks Virtual Class",
      startDate: "Next class starts: Sept 24, 2024",
      buttonStyle: "bg-white text-purple-600 my-6"
    },
    {
      bg: "text-white bg-black",
      name: "Data Scientist",
      description: "Kodexxar has designed for its students the programme to learn Data Science in the schdeuled months and prepare them for jobs in the Data Science field. Tools includes Python, OpenCV, Tensorflow, and Numpy to uncover insights, interpret and process datasets.",
      duration: "12 Weeks Virtual Class",
      startDate: "Next class starts: Sept 24, 2024",
      buttonStyle: "bg-purple-600 text-white my-6"
    }
  ]

const SchoolOfData = () => {

  const { openModal } = useModal();

  return (
    <div className='raleway-500 relative'>
    <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14'>
      <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
        School of <span className='text-purple-600'>Data</span>
      </h2>
      <p className='pt-6 w-full md:w-[70%] mx-auto text-center'>
      Begin your Data learning career and more. Discover career opportunities available for you. Speak to professionals and read through the materials and the programme designed specifically for you.
      </p>

      <div className="max-w-4xl mx-auto mt-5 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-purple-500 text-white py-8 px-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-2">Data Science Mastery</h1>
          <p className="text:sm md:text-xl">Unlock insights from data!</p>
        </div>
        
        <div className="p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Why Register:</h2>
          <ul className="space-y-4 mb-8">
            {[
              { icon: FaChartBar, text: "Learn data visualization, machine learning, and statistical analysis" },
              { icon: FaPython, text: "Master Python, R, SQL, and data science tools (e.g., Tableau, Power BI)" },
              { icon: FaDatabase, text: "Develop skills in data wrangling, modeling, and interpretation" },
              { icon: FaBrain, text: "Enhance career prospects in data science, business intelligence, and analytics" },
              { icon: FaChartLine, text: "Stay updated on industry trends and methodologies" }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <item.icon className="text-purple-400 mr-3 text-xl flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Registration Benefits:</h2>
          <ul className="space-y-4 mb-8">
            {[
              { icon: FaUserTie, text: "Expert mentorship" },
              { icon: FaProjectDiagram, text: "Real-world project experience" },
              { icon: FaLaptopCode, text: "Access to industry-standard data science tools and software" },
              { icon: FaUsers, text: "Networking opportunities with data professionals" },
              { icon: FaBriefcase, text: "Career support and placement assistance" }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <item.icon className="text-purple-400 mr-3 text-xl flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
          <Button  onClick={openModal} text={"Apply"} className={""} />
          </div>
        </div>
      </div>




    </div>
    <CareerOptions data={data} />
  </div>
  )
}

export default SchoolOfData