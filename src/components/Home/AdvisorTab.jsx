import React from 'react'

const AdvisorTab = () => {
  return (
    <div>
      <div className='bg-purple-600 py-8 raleway-500'>
        <div className='px-3 sm:px-0 w-full md:w-[70%] mx-auto text-white md:flex justify-between items-center'>
          <div className='basis-1/2'>
            <p className='platypi-400 w-full md:w-[70%] text-4xl lg:text-5xl  pb-4'> Confused about what to learn?</p>
            <p className='w-[70%]'>Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an expert in your desired field.</p>
          </div>
          <div className='basis-1/2'>
            <img src="/Shrug-cuate.png" alt="" />
          </div>
        </div>
      </div>

      <div className='bg-black py-8 raleway-500'>
        <div className='w-full md:w-[70%] mx-auto px-3 sm:px-0'>
          <p className='platypi-400 w-full md:w-[70%] text-4xl lg:text-5xl py-10 text-white'> Get onboard with us </p>
          <div className='text-white md:flex justify-between items-center'>
            <div className='basis-1/2'>
              <img src="/Professor-pana.png" alt="" />
            </div>
            <div className='basis-1/2'>
              <p className='platypi-400 w-full md:w-[70%] text-9xl pb-4'> " </p>
              <p className='w-full md:w-[70%]'> _______  is an organization that is focused on equipping African youths with the knowledge and digital skills needed today Our aim is to make tech knowledge accessible to every
                individual irrespective of age, literacy, and location.We are looking forward to building a strong community of ready-to-work personnel and employable candidates around the world in the tech space.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AdvisorTab