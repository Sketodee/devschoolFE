import React, { useState } from 'react';

const reviews = [
  { id: 1, text: "The web development course was fantastic! I learned so much and now I'm building my own projects.", author: "Sarah J." },
  { id: 2, text: "Data Science course opened up new career opportunities for me. Highly recommended!", author: "Michael R." },
  { id: 3, text: "The instructors are knowledgeable and the course material is up-to-date with industry standards.", author: "Emily T." },
  { id: 4, text: "I never thought I could learn mobile app development so quickly. Great course!", author: "David L." },
  { id: 5, text: "The hands-on projects really helped solidify my understanding of the concepts. I feel much more confident in my skills now.", author: "Lisa M." }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        setIsAnimating(false);
      }, 200); // This should match the duration of your animation
    }
  };

  const prevReview = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
        setIsAnimating(false);
      }, 200); // This should match the duration of your animation
    }
  };

  const currentReview = reviews[currentIndex];

  return (
      <div className="max-w-3xl mx-auto px-4 pt-10">
        <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 relative overflow-hidden transition-all duration-200 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-900"></div>
          <div className="h-48 flex flex-col justify-center">
            <p className="text-gray-600 italic mb-4 text-lg leading-relaxed overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              "{currentReview.text}"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {currentReview.author.charAt(0)}
              </div>
              <p className="text-gray-800 font-semibold ml-4">- {currentReview.author}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button 
            onClick={prevReview}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            disabled={isAnimating}
          >
            ← Previous
          </button>
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-500 scale-125' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
          <button 
            onClick={nextReview}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            disabled={isAnimating}
          >
            Next →
          </button>
        </div>
      </div>
  );
};

export default Reviews;