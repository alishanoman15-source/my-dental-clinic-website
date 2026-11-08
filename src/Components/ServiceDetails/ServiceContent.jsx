import React from 'react';

const ServiceContent = ({ subtitle, title, description, image1, image2 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 max-w-[85%]">
            <img src={image1 || "/service-main.jpg"} alt={title} className="w-full object-cover" />
          </div>
          <div className="absolute -bottom-10 right-0 max-w-[50%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img src={image2 || "/service-sub.jpg"} alt="Doctor" className="w-full object-cover" />
          </div>
        </div>

        {/* Right Side: Text */}
        <div>
          <span className="text-sm font-bold text-blue-600 tracking-wide uppercase">
            {subtitle}
          </span>
          <h2 className="text-4xl font-bold text-[#0f172a] mt-3 mb-6 leading-tight">
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

export default ServiceContent;