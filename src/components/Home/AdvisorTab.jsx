import React from 'react'
import LazyImage from '../LazyImage'
import { FaGraduationCap, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa6'

const AdvisorTab = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-purple-500 to-purple-700 py-8 raleway-500'>
        <div className='px-3 sm:px-0 w-full md:w-[90%] lg:w-[70%] mx-auto text-white md:flex justify-between items-center'>
          <div className='basis-1/2'>
            <p className='platypi-400 w-full md:w-[70%] text-4xl lg:text-5xl  pb-4'> Confused about what to learn?</p>
            <p className='w-[70%]'>Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an expert in your desired field.</p>
          </div>
          <div className='basis-1/2'>
            <img src="/Shrug-cuate.webp" alt="" />
            {/* <LazyImage className={''} alt={''} src={'/Shrug-cuate.webp'} /> */}
          </div>
        </div>
      </div>

      <div className='bg-black py-8 raleway-500'>
        <div className='w-full md:w-[90%] lg:w-[70%] mx-auto px-3 sm:px-0'>
          <p className='platypi-400 w-full md:w-[70%] text-4xl lg:text-5xl py-10 text-white'> Get onboard with us </p>
          <div className='text-white md:flex justify-between items-center'>
            <div className='basis-1/2'>
              <img src="/Professor-pana.webp" alt="" />
              {/* <LazyImage className={''} alt={''} src={'/Professor-pana.webp'} /> */}
            </div>
            <div className='basis-1/2'>
              <p className='platypi-400 w-full md:w-[90%] text-9xl'> " </p>
              <p className='w-full md:w-[90%] lg:w-[70%]'>Kodexxar is a pioneering tech company and school that converges innovation and learning. We develop innovative software solutions, data analytics, and cybersecurity services while simultaneously training the next generation of tech leaders. Our team of visionary thinkers and problem solvers is dedicated to harnessing the power of technology to drive business growth, improve lives, and shape the future.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-br from-purple-100 to-purple-300 py-10 px-4 raleway-500">
      <div className="w-full md:w-[90%] lg:w-[70%] mx-auto">
        <div className="">
          {/* Focus Section */}
          <div className="">
            <h2 className="text-4xl font-bold text-purple-600 platypi-400 mb-8">Our Focus</h2>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl sm:flex justify-between items-start mb-8">
              <div className='basis-1/2'>
                <h3 className="text-2xl font-semibold text-purple-800">Tech Company</h3>
                <ul className="space-y-4">
                  {['Crafting tailored software solutions that transform businesses',
                    'Unlocking insights through advanced data analytics and AI',
                    'Protecting digital assets with robust cybersecurity measures'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='basis-1/2'>
                <h3 className="text-2xl font-semibold text-purple-800 pt-6 md:pt-0">Tech School </h3>
                <ul className="space-y-4">
                  {['Providing immersive training programs in software development, data science, and cybersecurity',
                    'Fostering a community of learners, innovators, and entrepreneurs',
                    'Equipping students with industry-ready skills and mentorship'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Values and Goals Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-purple-600 platypi-400 mb-8">Our Values</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl sm:flex justify-between items-center">
              <ul className="basis-1/2">
                {[
                  { icon: FaLightbulb, title: 'Innovation', description: 'Embracing creativity and forward thinking' },
                  { icon: FaUsers, title: 'Customer-centricity', description: 'Putting clients and students at the heart of everything we do' },
                ].map((value, index) => (
                  <li key={index} className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-purple-50">
                    <value.icon className="text-purple-500 mr-4 text-3xl" />
                    <div>
                      <span className="font-semibold text-purple-800 text-lg">{value.title}</span>
                      <p className="text-gray-600 mt-1">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="basis-1/2">
                {[
                  { icon: FaHandshake, title: 'Teamwork', description: 'Collaborating to achieve excellence' },
                  { icon: FaGraduationCap, title: 'Knowledge sharing', description: 'Empowering others through education and mentorship' }
                ].map((value, index) => (
                  <li key={index} className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-purple-50">
                    <value.icon className="text-purple-500 mr-4 text-3xl" />
                    <div>
                      <span className="font-semibold text-purple-800 text-lg">{value.title}</span>
                      <p className="text-gray-600 mt-1">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="text-4xl font-bold text-purple-600 platypi-400 mt-12 mb-8">Our Goal</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                To become a leading technology partner and educator, empowering organizations and individuals to thrive in a rapidly evolving digital landscape through our expertise, passion, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
export default AdvisorTab