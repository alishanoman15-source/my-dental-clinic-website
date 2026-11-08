import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const PreventiveWhyChoose = ({ title, subtitle, points }) => {
  return (
    <section className="w-full bg-[#f0f4fa] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Heading Column */}
          <div className="lg:col-span-1">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase block mb-2">
              {subtitle}
            </span>
            <h2 className="text-3xl sm:text-[40px] font-bold text-[#000a3d] tracking-tight leading-tight">
              {title}
            </h2>
          </div>

          {/* Right Side: 2 Columns List Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {points && points.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                {/* Solid blue rounded checkbox directly from your image */}
                <div className="w-12 h-12 rounded-2xl bg-[#4a7ee0] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <IoCheckmarkSharp className="text-white text-xl stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#000a3d] mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreventiveWhyChoose;