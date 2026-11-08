import React, { useState } from 'react';

const PediatricSlider = ({ reviews, image }) => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="w-full bg-[#dbeafe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          
          {/* Left Side: Image matching background color perfectly */}
          <div className="relative min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] w-full">
            <img 
              src={image} 
              alt="Happy Pediatric Patient" 
              className="w-full h-full object-cover lg:absolute lg:inset-0 block"
            />
          </div>

          {/* Right Side: Text content with precise brand colors */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24 w-full">
            {/* Quote Icon color updated */}
            <span className="text-5xl font-serif text-blue-600 mb-4 block leading-none">“</span>
            
            {/* Text color set to signature deep blue matching the design */}
            <p className="text-xl sm:text-2xl font-bold text-[#000a3d] leading-relaxed mb-4 min-h-[140px] sm:min-h-[120px]">
              {reviews[activeReview].text}
            </p>
            
            {/* Author name formatting */}
            <span className="text-sm font-semibold text-gray-500 tracking-wider block mb-8">
              {reviews[activeReview].author}
            </span>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReview(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    activeReview === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-blue-300/60'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PediatricSlider;