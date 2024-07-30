
import React, { useState, useEffect } from 'react';
import MovingBoxes from './MovingBoxes';

import { FaBusinessTime } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BsFillDatabaseFill } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { TbChartBubbleFilled } from "react-icons/tb";
import { TbBinaryTree } from "react-icons/tb";


const Rotate = () => {
  const [angle, setAngle] = useState(0);
  const boxCount = 6;
  const orbitRadius = 250; // Radius of the orbit

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(intervalId);
  }, []);

  const calculatePosition = (index) => {
    const angleOffset = (360 / boxCount) * index;
    const totalAngle = angle + angleOffset;
    const radians = (totalAngle * Math.PI) / 180;
    const x = Math.cos(radians) * orbitRadius;
    const y = Math.sin(radians) * orbitRadius;
    return { x, y };
  };

  const colors = [
    // 'bg-gray-100',
    // 'bg-gray-100',
    // 'bg-gray-100',
    // 'bg-gray-100',
    // 'bg-gray-100',
    // 'bg-gray-100',
    'bg-red-300',
    'bg-green-300',
    'bg-indigo-300',
    'bg-orange-300',
    'bg-pink-300',
    'bg-purple-300',
  ];

  const icons = [
    {name: "BUSINESS", icon: FaBusinessTime},
    {name: "PRODUCT", icon: TbChartBubbleFilled},
    {name: "DATA", icon: BsFillDatabaseFill},
    {name: "ENGINEERING", icon: GiProcessor},
    {name: "FRONTEND", icon: FaReact},
    {name: "BACKEND", icon: TbBinaryTree},
  ] 

  return (
    // <div className="flex items-center justify-center border-2 border-red-600">
    <div className="">
      <div className="">
        <MovingBoxes className={'w-32 h-32 bg-blue-500'}>
        {[...Array(boxCount)].map((_, index) => {
          const { x, y } = calculatePosition(index);
          return (
            <div
              key={index}
              className={`absolute w-32 h-32 ${colors[index]} shadow-md transition-all duration-300 ease-linear rounded-lg`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className='flex justify-center text-5xl pt-7'>{React.createElement(icons[index].icon, { size: 40 })}</div>
              <p className='pt-4 text-center'>{icons[index].name}</p>
            </div>
          );
        })}
        </MovingBoxes>
        
      </div>
    </div>
  );
};

export default Rotate;
