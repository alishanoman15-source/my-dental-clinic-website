import React from 'react';

const ServiceFeatures = () => {
  const features = [
    {
      title: "Routine Exams & Cleanings",
      desc: "Keep your teeth and gums healthy with regular check-ups and cleanings."
    },
    {
      title: "Digital X-rays & Diagnostics",
      desc: "Quick, safe imaging to detect hidden dental issues early."
    },
    {
      title: "Tooth-Colored Fillings",
      desc: "Natural-looking solutions to treat cavities and restore strength to your teeth."
    },
    {
      title: "Tooth Extractions",
      desc: "Comfortable, gentle removal of damaged or problematic teeth."
    },
    {
      title: "Root Canal Therapy",
      desc: "Save infected teeth with this pain-relieving, tooth-saving procedure."
    },
    {
      title: "Gum Disease Treatment",
      desc: "Non-surgical and deep-cleaning options to treat gingivitis and periodontitis."
    }
  ];

  return (
    <div className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center min-h-[180px]"
            >
              <h3 className="text-[20px] font-bold text-[#1e293b] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceFeatures;