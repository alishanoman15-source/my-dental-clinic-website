import React from 'react';

const PediatricContent = ({ subtitle, title, description, image }) => {
  return (
    <section className="w-full bg-[#000a3d] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Mobile par py-12 aur desktop par py-24 taake gap extra na ho */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-24 max-w-3xl mx-auto lg:mx-0 w-full">
          <span className="text-sm font-semibold tracking-wider text-blue-400 mb-3 block opacity-80">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-[46px] font-bold tracking-tight mb-4 leading-[1.15]">
            {title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl opacity-80">
            {description}
          </p>
        </div>

        <div className="relative min-h-[300px] lg:min-h-full w-full">
          <img 
            src={image} 
            alt="Pediatric Dental Care" 
            className="w-full h-full object-cover lg:absolute lg:inset-0 block"
          />
        </div>

      </div>
    </section>
  );
};

export default PediatricContent;