import { FaBriefcase, FaCertificate, FaChartLine, FaCode, FaDatabase, FaGraduationCap, FaLaptopCode, FaMicrochip, FaPalette, FaPuzzlePiece, FaRocket, FaServer, FaUsers, FaUserTie } from 'react-icons/fa6'
import CareerOptions from '../components/CareerOptions'
import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'
import { useModal } from '../context/ModalContext'
import Button from '../components/Button'

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
  const { openModal } = useModal();

  return (
    <div className='raleway-500 relative'>
      <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14'>
        <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
          School of <span className='text-purple-600'>Engineering</span>
        </h2>
        <p className='pt-6 w-full md:w-[70%] mx-auto text-center'>
          Begin your learning process in Front-End Web Development, Back-End Web Development and more.
          Discover career opportunities available for you. Speak to professionals and read through the materials and the programme designed specifically for you.
        </p>

        <div className="max-w-4xl mx-auto mt-5 bg-white rounded-2xl shadow-xl overflow-hidden ">
          <div className="bg-purple-500 text-white py-8 px-6 text-center">
            <h1 className="text-xl md:text-3xl font-bold mb-2">Web Development Mastery</h1>
            <p className="text-sm md:text-xl">Unlock the secrets of building stunning, user-friendly websites and applications!</p>
          </div>

          <div className="p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Why Register:</h2>
            <ul className="space-y-4 mb-8">
              {[
                { icon: FaCode, text: "Learn HTML, CSS, JavaScript, and frameworks like React and Angular" },
                { icon: FaPalette, text: "Master responsive design, accessibility, and UI/UX principles" },
                { icon: FaBriefcase, text: "Build a portfolio of projects to impress potential employers" },
                { icon: FaChartLine, text: "Stay up-to-date with industry trends and best practices" },
                { icon: FaGraduationCap, text: "Enhance career prospects in web development, e-commerce, and digital marketing" }
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
                { icon: FaUserTie, text: "Expert instructor guidance" },
                { icon: FaLaptopCode, text: "Hands-on coding exercises" },
                { icon: FaCode, text: "Access to industry-standard tools and software" },
                { icon: FaUsers, text: "Networking opportunities with peers" },
                { icon: FaCertificate, text: "Certificate of completion" }
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


          <div className="max-w-4xl mx-auto mt-5 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-purple-500 text-white py-8 px-6 text-center">
              <h1 className="text-xl md:text-3xl font-bold mb-2">Back-end Development Mastery</h1>
              <p className="text-sm md:text-xl">Dive into the world of server-side programming and data management!</p>
            </div>

            <div className="p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Why Register:</h2>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: FaCode, text: "Learn programming languages like Python, Ruby, and PHP" },
                  { icon: FaDatabase, text: "Understand database management, API integration, and security" },
                  { icon: FaServer, text: "Develop scalable, efficient, and reliable server-side applications" },
                  { icon: FaRocket, text: "Expand career opportunities in software development, fintech, and data analysis" },
                  { icon: FaChartLine, text: "Stay ahead in the rapidly evolving tech landscape" }
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
                  { icon: FaMicrochip, text: "Access to cutting-edge technologies and frameworks" },
                  { icon: FaPuzzlePiece, text: "Enhanced problem-solving skills" },
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

export default SchoolOfEngineering