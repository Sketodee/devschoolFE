import React from 'react'
import Rotate from './Rotate'
import Button from '../Button'

const Jumbotron = () => {
  return (
    <div className='flex justify-between items-center raleway-600 w-[70%] mx-auto'>
        <div className='basis-2/5'>
            <h3 className='text-5xl leading-snug agbalumo-regular'>
                Accelerate your Career <br />
                with <span className='text-purple-600'> Endless Growth  </span> 
            </h3>
            <p className='w-3/5 text-gray-700'>Begin your tech journey and expand your career opportunities in the tech space by learning tech skills in demand.</p>
            <Button text={"Apply"} className={"bg-purple-600 my-5"} />
        </div>
        <div className="basis-3/5 ">
        <Rotate /> 
        </div>
    </div>
  )
}

export default Jumbotron