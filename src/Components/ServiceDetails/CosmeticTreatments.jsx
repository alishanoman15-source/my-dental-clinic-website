import React from 'react';

const CosmeticTreatments = () => {
  const treatments = [
    { title: "Teeth Whitening", desc: "Brighten your smile safely with professional whitening that works in just one visit." },
    { title: "Dental Veneers", desc: "Ultra-thin porcelain shells that cover imperfections and create a flawless smile." },
    { title: "Cosmetic Bonding", desc: "An affordable way to repair chips, cracks, and small gaps using tooth-colored resin." },
    { title: "Smile Makeovers", desc: "A customized combination of treatments to fully transform and enhance your smile." },
    { title: "Tooth Contouring", desc: "Refine tooth shape and smooth rough edges for a more symmetrical, balanced smile." },
    { title: "Gum Contouring", desc: "Reshape your gum line to correct a gummy smile and improve symmetry." },
    { title: "Invisalign & Clear Aligners", desc: "Straighten teeth discreetly with clear aligners—no brackets or wires needed." },
    { title: "Metal-Free Crowns", desc: "Restore damaged teeth with all-ceramic crowns that blend seamlessly with your smile." }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-bold text-blue-600 tracking-wide uppercase block text-center mb-2">
          Cosmetic Dentistry
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] text-center mb-12 tracking-tight">
          Cosmetic Treatments We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {treatments.map((item, index) => (
            <div key={index} className="py-6 border-b border-gray-100 flex flex-col justify-start">
              <h3 className="text-[19px] font-bold text-[#1e293b] mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CosmeticTreatments;