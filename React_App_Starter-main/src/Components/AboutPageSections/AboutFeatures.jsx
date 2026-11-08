import React from 'react';

const AboutTeam = () => {
  const doctors = [
    { name: "Dr. Sarah Bennett", role: "Lead Dentist", img: "/doctor1.webp" },
    { name: "Dr. Maya Lin", role: "Cosmetic Dentist", img: "/doctor2.webp" },
    { name: "Dr. Michael Reyes", role: "Pediatric Specialist", img: "/doctor3.webp" },
    { name: "Dr. James Carter", role: "Dental Hygienist", img: "/doctor4.webp" }
  ];

  return (
    <section className="bg-[#f8fafc] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">Meet Our Dental Team</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000a3d] tracking-tight mb-12">Committed to Your Smile</h2>
        
        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col p-4 pb-6 transition-all duration-300 hover:shadow-md">
              
              {/* 📸 Image Container: h-auto aur object-contain lagaya hai taake full image bina kate display ho */}
              <div className="w-full aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102" 
                />
              </div>

              {/* Doctor Details Below Image */}
              <div className="text-center mt-2">
                <h4 className="text-base font-bold text-[#000a3d]">{doc.name}</h4>
                <p className="text-gray-400 text-xs mt-1 font-medium">{doc.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;