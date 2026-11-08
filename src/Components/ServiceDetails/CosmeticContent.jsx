import React from 'react';

const CosmeticContent = ({ subtitle, title, description, mainImage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Beautiful Floating Image Box */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100">
            <img src={mainImage || "/cosmetic-hero.jpg"} alt={title} className="w-full object-cover" />
          </div>
          {/* Floating Blue Quote Box */}
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-[240px] sm:max-w-[280px]">
            <span className="text-4xl font-serif block -mb-2">“</span>
            <p className="text-sm sm:text-base font-semibold leading-snug">
              Your natural beauty begins with a confident smile
            </p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="mt-8 lg:mt-0">
          <span className="text-sm font-bold text-blue-600 tracking-wide uppercase">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mt-3 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CosmeticContent;