import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Footer from '../../Components/Footer/Footer';

const OurServices = () => {
  // Is list ko exact aapke grid sequence ke mutabiq manage kiya hai
  const servicesList = [
    {
      title: "General Dentistry",
      desc: "Complete oral care for every smile with cleanings, exams, and more.",
      path: "/services/general-dentistry",
      type: "icon",
      icon: "/tooth-1.png"
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile’s beauty with whitening, veneers, and more.",
      path: "/services/cosmetic-dentistry",
      type: "icon",
      icon: "/tooth-2.png"
    },
    {
      type: "image",
      imgUrl: "/pic6.png" // Pediatric Dentistry ke sath wali image card
    },
    {
      title: "Pediatric Dentistry",
      desc: "Gentle and fun dental care for kids to grow healthy, happy smiles.",
      path: "/services/pediatric-dentistry",
      type: "icon",
      icon: "/tooth-3.png"
    },
    {
      title: "Restorative Dentistry",
      desc: "Repair and restore your teeth for lasting comfort and function.",
      path: "/services/restorative-dentistry",
      type: "icon",
      icon: "/tooth-4.png"
    },
    {
      type: "image",
      imgUrl: "/pic5.png" // Restorative Dentistry ke sath wali image card
    },
    {
      title: "Preventive Dentistry",
      desc: "Prevent problems before they start with our comprehensive care.",
      path: "/services/preventive-dentistry",
      type: "icon",
      icon: "/tooth-5.png"
    },
    {
      title: "Orthodontics",
      desc: "Straighten your teeth and correct your bite with modern solutions.",
      path: "/services/orthodontics",
      type: "icon",
      icon: "/tooth-6.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
     {/* Top Main Section Header - Added pt-32 to push it down from the fixed navbar */}
<div className="bg-[#f0f4fa] text-center pt-32 pb-16">
  <h1 className="text-4xl sm:text-5xl font-bold text-[#000a3d] mb-2">Our Services</h1>
  <div className="text-sm text-gray-500 font-medium">
    <Link to="/" className="hover:text-blue-600">Home</Link> &gt; <span>Our Services</span>
  </div>
</div>

      {/* Services Grid Layout matching the screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            if (service.type === "image") {
              return (
                /* Pure Image Card Layout */
                <div 
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-sm h-[320px] w-full border border-gray-50"
                >
                  <img 
                    src={service.imgUrl} 
                    alt="Dental Clinic" 
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            return (
              /* Icon Service Card with Interactive Hover Effect */
              <Link 
                to={service.path}
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-[#f3f6fc] p-6 shadow-sm transition-all duration-500 hover:shadow-lg hover:bg-white flex flex-col justify-between h-[320px] w-full border border-gray-100"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 mb-5 flex items-center justify-start">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#000a3d] mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                {/*  Dynamic Hover Button: Plus converts to Read More */}
                <div className="flex items-center mt-3">
                  <div className="inline-flex items-center bg-white group-hover:bg-blue-600 border border-gray-200 group-hover:border-blue-600 h-10 rounded-full overflow-hidden transition-all duration-500 max-w-[40px] group-hover:max-w-[150px] shadow-sm">
                    
                    {/* Plus Icon Block */}
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-90 text-gray-500 group-hover:text-white">
                      <FiPlus className="text-lg" />
                    </div>
                    
                    {/* Sliding Text Label */}
                    <span className="text-xs font-bold uppercase tracking-wider text-white pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
                      Read More
                    </span>
                    
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OurServices;