import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    // py-20 ko py-10 kar diya taake space kam ho
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          
          {/* Left Image */}
          <div className="hidden lg:block w-1/4">
            <img src="/p1.webp" alt="Dentist" className="rounded-3xl shadow-lg w-full h-[400px] object-cover" />
          </div>

          {/* Center Text */}
          <div className="w-full lg:w-1/2 text-center">
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-2">About Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] leading-tight mb-6">
              Dedicated Professionals Delivering Personalized Dental Excellence With Gentle Precision And Attentive Care
            </h2>
            
            {/* 🛠️ Route ko badal kar /appointment par lock kar diya hai */}
            <button 
              onClick={() => navigate('/appointment')}
              className="bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e293b] transition cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block w-1/4">
            <img src="/p2 (1).webp" alt="Patient" className="rounded-3xl shadow-lg w-full h-[400px] object-cover" />
          </div>

          {/* Mobile Only Image */}
          <div className="lg:hidden w-full mt-4">
            <img src="/p2 (1).webp" alt="Dental Care" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;