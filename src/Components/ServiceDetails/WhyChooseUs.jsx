import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const WhyChooseUs = ({ mainImage }) => {
  const points = [
    "Experienced & Gentle Dentists",
    "Modern Technology",
    "Flexible Appointments",
    "Transparent Pricing",
    "Personalized Treatment Plans",
    "Sterile & Safe Facility"
  ];

  return (
    <section className="w-full bg-[#000a3d] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Right Side Image Block -> Mobile par upar laane ke liye order-first lagaya hai */}
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-full w-full order-first lg:order-none">
          <img 
            src={mainImage || "/s5.webp"} 
            alt="Our Professional Dental Team" 
            className="w-full h-full object-cover lg:absolute lg:inset-0"
          />
          {/* Corner dark accent triangle */}
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[40px] border-r-[#000a3d] border-t-[40px] border-t-transparent hidden lg:block"></div>
        </div>

        {/* Left Side: Dark Blue Text Block */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 sm:py-24 max-w-3xl mx-auto lg:mx-0 w-full">
          <span className="text-sm font-semibold tracking-wider uppercase opacity-80 mb-3 block">
            Top Reasons
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">
            Why Choose Us
          </h2>
          
          {/* Points List */}
          <div className="flex flex-col gap-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-4 text-base sm:text-lg font-medium">
                <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                  <IoCheckmarkSharp className="text-white text-sm stroke-[3]" />
                </div>
                <span className="opacity-90">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;