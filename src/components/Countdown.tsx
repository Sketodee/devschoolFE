import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const targetDate = new Date('February 15, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-600">
        <p className='text-xl md:text-4xl text-white py-5'>Kodexarr is coming ...</p>
      <div className="md:flex text-center space-x-2 text-white">
        {Object.entries(timeLeft).map(([unit, value], index, arr) => (
          <div key={unit} className="flex items-end">
            <div className="text-7xl font-bold">
              {value < 10 ? `0${value}` : value}
            </div>
            <div className="text-sm uppercase ps-2">{unit}</div>
            {index < arr.length - 1 && (
              <div className="hidden md:block text-4xl mx-2">:</div> // Add ":" between time units
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
