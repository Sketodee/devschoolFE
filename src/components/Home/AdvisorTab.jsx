import React from 'react'
import LazyImage from '../LazyImage'

const AdvisorTab = () => {
  return (
    <div>
      <div className='bg-purple-600 py-8 raleway-500'>
        <div className='px-3 sm:px-0 w-full md:w-[90%] lg:w-[70%] mx-auto text-white md:flex justify-between items-center'>
          <div className='basis-1/2'>
            <p className='platypi-400 w-full md:w-[70%] text-4xl lg:text-5xl  pb-4'> Confused about what to learn?</p>
            <p className='w-[70%]'>Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an expert in your desired field.</p>
          </div>
          <div className='basis-1/2'>
            {/* <img src="/Shrug-cuate.webp" alt="" /> */}
            <LazyImage className={''} alt={''} src={'/Shrug-cuate.webp'} />
          </div>
        </div>
      </div>

      <div className='bg-black py-8 raleway-500'>
        <div className='w-full md:w-[90%] lg:w-[70%] mx-auto px-3 sm:px-0'>
          <p className='platypi-400 w-full md:w-[70%] text-4xl lg:text-5xl py-10 text-white'> Get onboard with us </p>
          <div className='text-white md:flex justify-between items-center'>
            <div className='basis-1/2'>
              {/* <img src="/Professor-pana.webp" alt="" /> */}
              <LazyImage className={''} alt={''} src={'/Professor-pana.webp'} />
            </div>
            <div className='basis-1/2'>
              <p className='platypi-400 w-full md:w-[90%] text-9xl'> " </p>
              <p className='w-full md:w-[90%] lg:w-[70%]'>Kodexxar is a pioneering tech company and school that converges innovation and learning. We develop innovative software solutions, data analytics, and cybersecurity services while simultaneously training the next generation of tech leaders. Our team of visionary thinkers and problem solvers is dedicated to harnessing the power of technology to drive business growth, improve lives, and shape the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=' py-8 raleway-500'>
        <div className='w-full md:w-[90%] lg:w-[70%] mx-auto px-3 sm:px-0 sm:flex justify-center items-start md:space-x-3'>
          <div className='basis-1/2 leading-loose'>
            <p className='text-4xl  font-semibold platypi-400 text-purple-600 pb-2'>Our Focus</p>
            <p className='font-semibold'>Tech Company </p>
            <ul className='list-disc'>
              <li>Crafting tailored software solutions that transform businesses </li>
              <li> Unlocking insights through advanced data analytics and AI</li>
              <li>Protecting digital assets with robust cybersecurity measures</li>
            </ul>

            <p className='font-semibold'>Tech School</p>
            <ul className='list-disc'>
              <li>Providing immersive training programs in software development, data science, and cybersecurity</li>
              <li> Fostering a community of learners, innovators, and entrepreneurs</li>
              <li> Equipping students with industry-ready skills and mentorship</li>
            </ul>
          </div>
          <div className='basis-1/2 leading-loose'>
            <p className='text-4xl  font-semibold platypi-400 text-purple-600 pb-2'>Our Values</p>
            <ul>
              <li><span className='font-semibold'>Innovation:</span> Embracing creativity and forward thinking</li>
              <li><span className='font-semibold'>Customer-centiricity:</span>Putting clients and students at the heart of everything we do</li>
              <li><span className='font-semibold'>Teamwork:</span>Collaborating to achieve excellence</li>
              <li><span className='font-semibold'>Knowledge sharing:</span> Empowering others through education and mentorship</li>
            </ul>

            <p className='text-4xl  font-semibold platypi-400 text-purple-600 pb-2'>Our Goal</p>
            <p>To become a leading technology partner and educator, empowering organizations and individuals to thrive in a rapidly evolving digital landscape through our expertise, passion, and commitment to excellence.</p>

          </div>
        </div>
      </div>

    </div>
  )
}
export default AdvisorTab