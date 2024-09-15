import React from 'react'
import Rotate from './Rotate'
import Button from '../Button'
import { useModal } from '../../context/ModalContext';

const Jumbotron = () => {
  const { openModal } = useModal();
  return (
    <div className='lg:flex justify-between items-center raleway-600 px-3 sm:px-0 w-full md:w-[90%] mx-auto'>
      <div className="lg:basis-3/5 hidden lg:block">
        <Rotate />
      </div>
      <div className='lg:basis-2/5'>
        <h3 className='text-4xl lg:text-5xl leading-snug platypi-400 pb-6'>
          Accelerate your Career with <span className='text-purple-600'>Endless Growth</span>
        </h3>
        <p className='w-full lg:w-3/5 text-gray-700'>Begin your tech journey and expand your career opportunities in the tech space by learning tech skills in demand.</p>
        <Button  onClick={openModal} text={"Apply"} className={"bg-purple-600 my-5 text-white"} />
      </div>
    </div>



    // <div className='lg:flex justify-between items-center raleway-600 w-[70%] mx-auto'>
    //     <div className='basis-2/5'>
    //         <h3 className='text-5xl leading-snug platypi-400'>
    //             Accelerate your Career <br />
    //             with <span className='text-purple-600'> Endless Growth  </span> 
    //         </h3>
    //         <p className='w-3/5 text-gray-700'>Begin your tech journey and expand your career opportunities in the tech space by learning tech skills in demand.</p>
    //         <Button text={"Apply"} className={"bg-purple-600 my-5 text-white"} />
    //     </div>
    //     <div className="basis-3/5">
    //     <Rotate /> 
    //     </div>
    // </div>
  )
}

export default Jumbotron