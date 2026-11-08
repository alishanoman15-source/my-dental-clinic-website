import React from 'react';

const PreventiveContent = ({ subtitle, title, description, img1, img2 }) => {
  return (
    <section className="bg-white py-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: 2 Images with Blue Gradient Overlay Effect */}
          <div className="grid grid-cols-2 gap-4 order-last lg:order-first">
            
            {/* Image 1 Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[3/4]">
              <img src={img1} alt="Preventive Clinic 1" className="w-full h-full object-cover" />
              {/* Blue overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-500/10 to-transparent pointer-events-none" />
            </div>

            {/* Image 2 Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[3/4]">
              <img src={img2} alt="Preventive Clinic 2" className="w-full h-full object-cover" />
              {/* Blue overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-500/10 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Right Side: Text Area */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-3xl sm:text-[44px] font-bold text-[#000a3d] tracking-tight mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreventiveContent;