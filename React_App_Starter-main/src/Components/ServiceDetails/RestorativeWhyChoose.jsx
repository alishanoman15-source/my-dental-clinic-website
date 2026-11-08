import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const RestorativeWhyChoose = ({ points }) => {
  return (
    <section className="w-full bg-[#f0f4fa] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Label */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase block mb-1">
            Top Reasons
          </span>
          <h2 className="text-3xl font-bold text-[#000a3d] tracking-tight">
            Why Choose Us
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points && points.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* Exact matching soft-blue checkbox from your screenshot */}
              <div className="w-14 h-14 rounded-2xl bg-[#4a7ee0] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <IoCheckmarkSharp className="text-white text-2xl stroke-[3]" />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#000a3d] mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RestorativeWhyChoose;