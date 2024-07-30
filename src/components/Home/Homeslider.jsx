import React,{useRef, useEffect} from 'react'
import './Homeslider.css'
import rev from '../../data/Reviews';
import { FaUserCircle } from "react-icons/fa";

const Homeslider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let position = 0;

    const animate = () => {
      position += 0.05; // Adjust speed as needed
      if (position >= 350) {
        position = 0; // Reset when 9 divs (3 screens worth) have scrolled
      }
      container.style.transform = `translateX(-${position}%)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const divs = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-1/3 h-72 flex flex-col justify-between  bg-purple-200 text-black raleway-500 px-6 py-9 mx-4"
    >
      <p className='text-base text-justify'>{rev[i].review}</p>
      <div className="flex">
        <p className='text-5xl text-purple-700'><FaUserCircle /></p>
        <p className='py-3 px-5 font-semibold'> {rev[i].name}</p>
      </div>
    </div>
  ));

  return (
    <div className="w-full overflow-hidden py-20">
      <div
        ref={containerRef}
        className="flex"
        style={{ width: '100%' }} // 12 divs at 1/3 width each = 400%
      >
        {divs}
      </div>
    </div>
  );
}

export default Homeslider