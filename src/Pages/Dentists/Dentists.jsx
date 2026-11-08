import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';

const Dentists = () => {
  const doctorsList = [
    {
      id: "1",
      name: "Dr. Sarah Bennett",
      role: "Lead Dentist",
      qualification: "Doctor of Dental Surgery (DDS), New York University College of Dentistry",
      certifications: ["Certified in Invisalign Provider", "Advanced Cardiac Life Support (ACLS)"],
      awards: ["\"Top Dentist in Manhattan\" – New York Dental Journal (2022)", "American Academy of Cosmetic Dentistry Excellence Award (2021)"],
      imgUrl: "/doctor1.webp"
    },
    {
      id: "2",
      name: "Dr. Maya Lin",
      role: "Cosmetic Dentist",
      qualification: "Doctor of Medicine in Dentistry (DMD), University of Pennsylvania School of Dental Medicine",
      certifications: ["Board Certified by the American Board of Periodontology", "Sedation Dentistry Certified"],
      awards: ["Best Periodontist – Pennsylvania Dental Association (2023)", "Clinical Research Award – American Association (2020)"],
      imgUrl: "/doctor2.webp"
    },
    {
      id: "3",
      name: "Dr. Michael Reyes",
      role: "Pediatric Specialist",
      qualification: "Bachelor of Dental Surgery (BDS), University of Mumbai; Master of Dental Surgery (MDS) in Orthodontics",
      certifications: ["Invisalign Platinum Provider", "Certified in Digital Smile Design"],
      awards: ["National Orthodontics Innovation Award (India, 2021)", "Excellence in Dental Practice – Indian Dental Association (2022)"],
      imgUrl: "/doctor3.webp"
    },
    {
      id: "4",
      name: "Dr. James Carter",
      role: "Dental Hygienist",
      qualification: "DDS, University of Michigan; MS in Prosthodontics",
      certifications: ["Board Certified Prosthodontist", "Laser Dentistry Certified (ALD)"],
      awards: ["American College of Prosthodontists Educator of the Year (2020)", "International Smile Makeover Award (2023)"],
      imgUrl: "/doctor4.webp"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Section with Perfect Overlap Padding Protection */}
      <div className="bg-[#f0f4fa] text-center pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">Our Dentists</h1>
        <div className="text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt; <span>Our Dentists</span>
        </div>
      </div>

      {/* 2. Main Container List Stack */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
        {doctorsList.map((doc) => (
          <div 
            key={doc.id}
            className="relative bg-[#f8fafc] rounded-[24px] overflow-hidden border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch w-full transition-all duration-300 hover:shadow-md"
          >
            
            {/* Left Box Image Cover (Responsive Height Match) */}
            <div className="w-full lg:w-[38%] min-h-[320px] lg:min-h-full relative shrink-0">
              <img 
                src={doc.imgUrl} 
                alt={doc.name} 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Right Detailed Content Panel */}
            <div className="p-8 sm:p-10 flex flex-col justify-center flex-1 relative z-10">
              
              {/* Doctor Title Head */}
              <div className="mb-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#000a3d] tracking-tight">{doc.name}</h2>
                <p className="text-blue-500 text-sm font-semibold mt-0.5 tracking-wide">{doc.role}</p>
              </div>

              {/* Qualifications */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-[#000a3d] uppercase tracking-wider mb-1">Qualification</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{doc.qualification}</p>
              </div>

              {/* Certifications Checkbox Items */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-[#000a3d] uppercase tracking-wider mb-2">Certifications</h4>
                <ul className="space-y-1.5">
                  {doc.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-400 font-medium">
                      <span className="text-blue-500 mr-2 font-bold">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards Checklist Items */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#000a3d] uppercase tracking-wider mb-2">Awards</h4>
                <ul className="space-y-1.5">
                  {doc.awards.map((award, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-400 font-medium">
                      <span className="text-blue-500 mr-2 font-bold">✓</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand Social Links */}
              <div className="flex items-center gap-4 text-gray-400 mt-2">
                <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebookF className="text-base" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter className="text-base" /></a>
                <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube className="text-base" /></a>
              </div>

              {/* Massive Light Background Number Effect */}
              <div className="absolute right-6 bottom-4 text-[100px] sm:text-[140px] font-black text-blue-900/[0.04] select-none leading-none pointer-events-none font-sans">
                {doc.id}
              </div>

            </div>

          </div>
        ))}
      </div>
       <Footer/>
    </div>
  );
};

export default Dentists;