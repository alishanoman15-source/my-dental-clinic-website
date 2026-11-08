import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { 
      title: 'General Dentistry', 
      desc: 'Complete oral care for every smile...', 
      icon: '/tooth-1.png',
      path: '/services/general-dentistry'
    },
    { 
      title: 'Cosmetic Dentistry', 
      desc: 'Enhance your smile’s beauty...', 
      icon: '/tooth-2.png',
      path: '/services/cosmetic-dentistry'
    },
    { 
      title: 'Pediatric Dentistry', 
      desc: 'Gentle and fun dental care...', 
      icon: '/tooth-3.png',
      path: '/services/pediatric-dentistry'
    },
    { 
      title: 'Restorative Dentistry', 
      desc: 'Repair and restore your teeth...', 
      icon: '/tooth-4.png',
      path: '/services/restorative-dentistry'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          {/* 🛠️ Fixed: "Our Services" text ko Link se wrap kiya taake click karne par AllServices page open ho */}
          <Link 
            to="/services" 
            className="text-blue-600 font-bold mb-2 uppercase tracking-wide inline-block hover:text-blue-800 transition-colors cursor-pointer"
          >
            Our Services
          </Link>
          <h2 className="text-4xl font-bold text-slate-800">Complete Care for Every Smile</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between">
              
              <div>
                {/* Image Icon */}
                <div className="mb-6">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>
              </div>
              
              {/* Dynamic Read More Button linked directly to its specific route page */}
              <button 
                onClick={() => navigate(service.path)}
                className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 overflow-hidden w-[40px] hover:w-[120px] font-bold text-sm cursor-pointer"
              >
                <span>+</span> 
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Read more
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Link Button redirected to /services page */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/services" 
            className="bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e293b] transition duration-300 inline-block text-center"
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;