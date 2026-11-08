import React from 'react';

const PreventiveTreatments = ({ title, subtitle, items }) => {
  return (
    <div className="bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase block mb-1">
            {subtitle}
          </span>
          <h2 className="text-3xl font-bold text-[#000a3d] tracking-tight">
            {title}
          </h2>
        </div>

        {/* 3 Columns Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm flex flex-col"
            >
              <h3 className="text-[19px] font-bold text-[#000a3d] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PreventiveTreatments;