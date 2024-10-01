import { FaBrain, FaChartLine, FaClipboardCheck, FaComments, FaHandshake, FaLaptop, FaLightbulb, FaNetworkWired, FaRocket, FaToolbox, FaUsers, FaUserTie } from 'react-icons/fa6'
import CareerOptions from '../components/CareerOptions'
import React from 'react'
import { FaHandsHelping, FaPencilRuler, FaRegFileAlt, FaTools, FaUserFriends } from 'react-icons/fa'
import Button from '../components/Button'
import { useModal } from '../context/ModalContext'

const data = [
  {
    bg: "bg-purple-600 text-white",
    name: "Product Designer",
    description: "The design program is taught by prominent design experts and created as an introductory and research phase approach, taking you through design phases.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-white text-purple-600 my-6"
  },
  {
    bg: "bg-black text-white",
    name: "Product Manager",
    description: "Acquire top skills that help you define product vision, strategy, and a roadmap to delivering world class product to companies worldwide.",
    duration: "12 Weeks Virtual Class",
    startDate: "Next class starts: Sept 24, 2024",
    buttonStyle: "bg-purple-600 text-white my-6"
  },
  // {
  //   bg: "bg-purple-600 text-white",
  //   name: "Product Marketer",
  //   description: "Learn how to become a product marketing. Our seasoned coaches help you become one of the most sort after product marketers in the field.",
  //   duration: "12 Weeks Virtual Class",
  //   startDate: "Next class starts: Sept 24, 2024",
  //   buttonStyle: "bg-white text-purple-600 my-6"
  // }
]

const SchoolOfProduct = () => {
  const { openModal } = useModal();

  return (
    <div className='raleway-500 relative'>
      <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto py-8 sm:py-14'>
        <h2 className='platypi-400 text-4xl lg:text-5xl py-5 text-center'>
          School of <span className='text-purple-600'>Product</span>
        </h2>
        <p className='pt-6 w-full md:w-[70%] mx-auto text-center'>
          We offer you product courses such as Product Design and Product management by equipping you with the right materials, courses and professionals willing to coach
          you through your journey while giving you the best advices after your program.
        </p>


        <div className="max-w-4xl mx-auto mt-5 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-purple-500 text-white py-8 px-6 text-center">
            <h1 className="text-3xl font-bold mb-2">Product Management Mastery</h1>
            <p className="text-xl">Transform ideas into successful products!</p>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Register:</h2>
            <ul className="space-y-4 mb-8">
              {[
                { icon: FaLightbulb, text: "Learn product development life cycles, market research, and customer validation" },
                { icon: FaChartLine, text: "Master agile methodologies, prioritization, and stakeholder management" },
                { icon: FaUsers, text: "Develop strategic thinking, communication, and leadership skills" },
                { icon: FaRocket, text: "Boost career prospects in tech, entrepreneurship, and innovation" },
                { icon: FaNetworkWired, text: "Network with industry experts and peers" }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="text-purple-400 mr-3 text-xl flex-shrink-0" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration Benefits:</h2>
            <ul className="space-y-4 mb-8">
              {[
                { icon: FaClipboardCheck, text: "Interactive workshops and case studies" },
                { icon: FaComments, text: "Expert feedback and coaching" },
                { icon: FaTools, text: "Access to industry-standard tools and templates" },
                { icon: FaHandshake, text: "Opportunities for internships and job placements" },
                { icon: FaUserFriends, text: "Lifetime membership in a community of product managers" }
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
          <h1 className="text-3xl font-bold mb-2">Product Design Mastery</h1>
          <p className="text-xl">Craft intuitive, user-centered designs!</p>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Register:</h2>
          <ul className="space-y-4 mb-8">
            {[
              { icon: FaPencilRuler, text: "Learn human-centered design principles, wireframing, and prototyping" },
              { icon: FaBrain, text: "Master design thinking, user research, and testing" },
              { icon: FaLaptop, text: "Develop skills in Sketch, Figma, Adobe XD, and other design tools" },
              { icon: FaRocket, text: "Enhance career prospects in UX/UI design, visual design, and product development" }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <item.icon className="text-purple-400 mr-3 text-xl flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration Benefits:</h2>
          <ul className="space-y-4 mb-8">
            {[
              { icon: FaUserTie, text: "Expert design mentorship" },
              { icon: FaHandsHelping, text: "Hands-on design exercises and projects" },
              { icon: FaToolbox, text: "Access to design software and resources" },
              { icon: FaRegFileAlt, text: "Portfolio development and review" },
              { icon: FaUsers, text: "Networking opportunities with design professionals" }
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

export default SchoolOfProduct