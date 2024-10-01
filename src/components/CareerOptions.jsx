import React from 'react'
import { TbClockHour3Filled } from "react-icons/tb";
import { PiCalendarDotsFill } from "react-icons/pi";
import Button from './Button';
import { useModal } from '../context/ModalContext';

const CareerOptions = ({data}) => {
    const { openModal } = useModal();
    return (
        <div>
          {data.map((item, index) => (
            <div key={index} className= {`py-20 ${item.bg}`}>
            <div className='w-full md:w-[70%] mx-auto text-center px-3 sm:px-0 '>
                <h2 className='platypi-400 text-4xl lg:text-5xl py-5'>
                    Become a {item.name}
                </h2>
                <p className='pt-6 w-full md:w-[50%] mx-auto text-center'>
                    {item.description}
                </p>
                <div className='md:flex md:w-[50%] mx-auto justify-around py-7'>
                    <div className='flex justify-center items-center'>
                        <p><TbClockHour3Filled /> </p>
                        <p>{item.duration}</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <p><PiCalendarDotsFill /> </p>
                        <p>{item.startDate}</p>
                    </div>
                </div>
                {/* <Button  onClick={openModal} text={"Apply"} className={item.buttonStyle} /> */}
            </div>
        </div>
          ))}
        </div>
      );
}

export default CareerOptions