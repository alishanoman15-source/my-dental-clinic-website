import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-28 lg:pt-36 pb-12 lg:pb-0 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')" }} 
      >
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            
            {/* Trusted by 23k customers Section */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="flex -space-x-4">
                <img src="https://i.pravatar.cc/100?img=11" alt="user" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=12" alt="user" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=13" alt="user" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src="https://i.pravatar.cc/100?img=14" alt="user" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" />
              </div>
              <p className="text-white font-bold text-lg">Trusted by 23k customers</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Unforgettable Dental <br className="hidden sm:block" />
              With Expert And Caring
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 font-medium">
              Ullamco in eiusmod sint sint irure esse in aliquip consequat officia.
            </p>
            <div className="mt-8 sm:mt-10">
              {/* 🛠️ onClick add kiya jo user ko seedha naye appointment page par le jayega */}
              <button 
                onClick={() => navigate('/appointment')}
                className="bg-[#3b82f6] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:bg-[#1e293b] hover:shadow-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right Content: 98% Score Card */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl max-w-sm w-full text-center transform transition duration-500 hover:scale-105">
              <h2 className="text-6xl sm:text-7xl xl:text-8xl font-black text-[#1e293b] tracking-tighter">
                98%
              </h2>
              <p className="text-lg sm:text-xl font-bold text-gray-500 mt-2">
                Trusted Score
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;