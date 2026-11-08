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
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100 flex flex-col h-[380px] w-full">
              
              {/* 📸 Fixed Image Box: Height set to 75% and object-top to force the face into view */}
              <div className="w-full h-[75%] bg-gray-50 overflow-hidden relative">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top absolute inset-0" 
                />
              </div>

              {/* Absolute Bottom White Details Card matching your exact layout design */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-md p-3 text-center border border-gray-50 z-10 transition-colors duration-300 group-hover:border-blue-100">
                <h4 className="text-sm font-bold text-[#000a3d] tracking-tight">{doc.name}</h4>
                <p className="text-gray-400 text-xs mt-0.5 font-medium">{doc.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;