import React, { useEffect, useState, useRef } from 'react';
import rev from '../../data/Reviews';
import { FaUserCircle } from "react-icons/fa";

const Homeslider = () => {
  const divs = Array.from({ length: 12 }, (_, i) => `Div ${i + 1}`);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 1));
    }, 10); // Adjust speed by changing the interval time

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = containerRef.current.scrollWidth;

    if (Math.abs(offset) >= contentWidth) {
      setOffset(containerWidth);
    }
  }, [offset]);

  const getWidthClass = () => {
    return 'w-full sm:w-1/3'; // Adjust this based on your layout
  };

  return (
    <div className="overflow-hidden w-full pt-10" ref={containerRef}>
      <div
        className="flex transition-none"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {rev.map((r, index) => (
          <div
            key={index}
            className={`flex-none px-4 py-5 mx-2 ${getWidthClass()} bg-purple-200  flex items-center justify-center`}
          >
            <div className="flex flex-col justify-between">
              <p className='text-base text-justify h-80 lg:h-60'>{r.review}</p>
              <div className="flex pt-5">
                <p className='text-5xl text-purple-700'><FaUserCircle /></p>
                <p className='py-3 px-5 font-semibold'> {r.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Homeslider;




// import React,{useRef, useEffect} from 'react'
// import './Homeslider.css'
// import rev from '../../data/Reviews';
// import { FaUserCircle } from "react-icons/fa";

// const Homeslider = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     let position = 0;

//     const animate = () => {
//       position += 0.05; // Adjust speed as needed
//       if (position >= 350) {
//         position = 0; // Reset when 9 divs (3 screens worth) have scrolled
//       }
//       container.style.transform = `translateX(-${position}%)`;
//       requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);
//   }, []);

//   const divs = Array.from({ length: 12 }, (_, i) => (
//     <div
//       key={i}
//       className="flex-shrink-0 w-1/3 h-72 flex flex-col justify-between  bg-purple-200 text-black raleway-500 px-6 py-9 mx-4"
//     >
//       <p className='text-base text-justify'>{rev[i].review}</p>
//       <div className="flex">
//         <p className='text-5xl text-purple-700'><FaUserCircle /></p>
//         <p className='py-3 px-5 font-semibold'> {rev[i].name}</p>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="w-full overflow-hidden py-20">
//       <div
//         ref={containerRef}
//         className="flex"
//         style={{ width: '100%' }} // 12 divs at 1/3 width each = 400%
//       >
//         {divs}
//       </div>
//     </div>
//   );
// }

// export default Homeslider