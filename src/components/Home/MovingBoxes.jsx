import React, { useState, useEffect } from 'react';

const MovingBoxes= ({ children }) => {
  const [positions, setPositions] = useState([
    { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 },
    { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositions(prevPositions =>
        prevPositions.map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500'];

  return (
    <div className="flex items-center justify-around h-screen">
      <div className="relative w-32 h-32 bg-blue-500 rounded-lg shadow-lg">
        {positions.map((pos, index) => (
          <div
            key={index}
            className={`absolute w-4 h-4 rounded-full ${colors[index]} transition-all duration-1000 ease-in-out`}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`
            }}
          ></div>
        ))}
        <div className="absolute inset-0 flex items-center justify-end">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MovingBoxes;
