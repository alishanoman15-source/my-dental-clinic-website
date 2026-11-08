import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const PediatricWhyChoose = ({ points }) => {
  return (
    <section className="w-full bg-[#f8fafc] py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Left Side: Headings (Color set to matching brand deep blue) */}
          <div className="lg:col-span-1">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase block mb-2">
              Top Reasons
            </span>
            <h2 className="text-4xl sm:text-[42px] font-bold text-[#000a3d] tracking-tight leading-tight">
              Why Choose Us?
            </h2>
          </div>

          {/* Right Side: Points List (Color adjusted to exact screenshot dark tint) */}
          <div className="lg:col-span-2 flex flex-col gap-4 mt-2 lg:mt-0">
            {points && points.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 text-base sm:text-[17px] text-[#000a3d] font-semibold opacity-90 leading-relaxed"
              >
                {/* Sharp Blue Icon */}
                <IoCheckmarkSharp className="text-blue-500 text-xl shrink-0 mt-1 stroke-[3]" />
                <span>{point}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PediatricWhyChoose;