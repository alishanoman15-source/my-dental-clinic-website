import React from 'react';

const RestorativeTreatments = ({ items }) => {
  return (
    <div className="bg-white pb-8 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <h3 className="text-[19px] font-bold text-[#000a3d] mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestorativeTreatments;