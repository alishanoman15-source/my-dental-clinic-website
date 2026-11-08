import React from 'react';

const RestorativeContent = ({ subtitle, title, description, img1, img2, img3 }) => {
  return (
    <section className="bg-white py-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Text Area */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-3xl sm:text-[46px] font-bold text-[#000a3d] tracking-tight mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              {description}
            </p>
          </div>

          {/* Right Side: Fixed Responsive Collage Grid for Mobile & Desktop */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0 items-center">
            {/* Left stacked pair */}
            <div className="flex flex-col gap-4">
              <div className="aspect-square w-full rounded-[24px] overflow-hidden shadow-sm">
                <img src={img1} alt="Grid 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square w-full rounded-[24px] overflow-hidden shadow-sm">
                <img src={img3} alt="Grid 3" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Right single vertical image */}
            <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm">
              <img src={img2} alt="Grid 2" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RestorativeContent;