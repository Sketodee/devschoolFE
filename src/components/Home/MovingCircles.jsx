import React, { useState, useEffect } from 'react';

const MovingCircles = () => {
  const [positions, setPositions] = useState(
    Array(6).fill({ x: '0%', y: '0%' })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositions(positions => 
        positions.map(() => ({
          x: Math.random() * 100 + '%',
          y: Math.random() * 100 + '%'
        }))
      );
    }, 1000); // Update positions every second

    return () => clearInterval(intervalId);
  }, []);

  const colors = [
    'bg-red-500', 
    'bg-green-500', 
    'bg-blue-500', 
    'bg-yellow-500', 
    'bg-purple-500', 
    'bg-pink-500'
  ];

  return (
    <div className="">
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`absolute w-5 h-5 rounded-full ${colors[index]} transition-all duration-1000`}
          style={{
            left: pos.x,
            top: pos.y,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MovingCircles;
