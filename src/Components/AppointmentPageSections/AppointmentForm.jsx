import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Form Submitted", formData);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* 🛠️ Right Block (Image) turned to order-first on mobile devices */}
          <div className="lg:col-span-6 relative rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-full shadow-sm bg-gray-50 flex items-end order-first lg:order-none">
            <img 
              src="/ppic11.webp" 
              alt="Kid Smiling at Dental Treatment" 
              className="w-full h-full object-cover absolute inset-0"
            />
            
            {/* 🔮 Frosted Dark Glassmorphism Box Panel */}
            <div className="relative z-10 bg-black/30 backdrop-blur-md m-6 p-5 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4 max-w-[290px]">
              
              {/* White Rounded Container for Icon */}
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Clean White Text content over dark glass */}
              <div className="text-white">
                <h4 className="text-sm font-bold tracking-wide">Opening Hours</h4>
                <p className="text-gray-100 text-xs mt-0.5 font-medium whitespace-nowrap">Mon to Sat 08:00 - 20:00</p>
              </div>

            </div>
          </div>

          {/* Left Block: Clean Appointment Input Fields Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h4 className="text-[#000a3d] font-bold text-lg flex items-center gap-2 mb-2 mt-4 lg:mt-0">
              <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Book Your Appointment
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed mb-6">
              Book your appointment today for expert dental care tailored to your needs. Healthy, beautiful smiles start with a simple step, schedule now!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Dropdown Selection Grid */}
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
                required
                className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-500 outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Select Service</option>
                <option value="General Dentistry">General Dentistry</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                <option value="Restorative Dentistry">Restorative Dentistry</option>
              </select>

              {/* Date and Time Pickers Horizontal Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-400 outline-none focus:border-blue-500 transition-colors"
                />
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-gray-400 outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select Time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>

              {/* Credentials Grid Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <textarea 
                name="message"
                placeholder="Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>

              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-lg transition-all shadow-sm w-max mt-2 uppercase tracking-wider"
              >
                Send Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;