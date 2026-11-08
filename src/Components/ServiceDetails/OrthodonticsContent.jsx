import React from 'react';

const OrthodonticsContent = ({ subtitle, title, description, img1, img2 }) => {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile par flex layout center alignment ke sath aur desktop par 3 columns grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center text-center justify-center">
          
          {/* 1. Left Side Image (Mobile par sab se upar dikhane ke liye order-1) */}
          <div className="relative rounded-[24px] overflow-hidden shadow-sm aspect-[4/5] max-w-[280px] w-full order-1">
            <img src={img1} alt="Orthodontics Left" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-500/10 to-transparent pointer-events-none" />
          </div>

          {/* 2. Center Text Area (Mobile par images ke beech me proper order-2) */}
          <div className="flex flex-col items-center justify-center text-center px-2 order-2 my-4 md:my-0">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-3xl sm:text-[40px] font-bold text-[#000a3d] tracking-tight mb-4 leading-tight max-w-md w-full text-center">
              {title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed font-normal max-w-md text-center">
              {description}
            </p>
          </div>

          {/* 3. Right Side Image (Mobile par sab se niche order-3) */}
          <div className="relative rounded-[24px] overflow-hidden shadow-sm aspect-[4/5] max-w-[280px] w-full order-3">
            <img src={img2} alt="Orthodontics Right" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-blue-500/10 to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default OrthodonticsContent;