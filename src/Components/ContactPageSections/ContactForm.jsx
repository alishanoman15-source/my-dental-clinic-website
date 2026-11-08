import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
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
    console.log("Form Submitted", formData);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Information Credentials Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-[40px] font-bold text-[#000a3d] tracking-tight mb-5 leading-tight">
              We are always ready to help you and answer your questions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal mb-10">
              Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we'll get back to you as soon as possible.
            </p>

            {/* 🛠️ Fixed Informational Grid System using precise SVG vectors instead of emojis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
              
              {/* 1. We're Open */}
              <div>
                <h4 className="text-[#000a3d] font-bold text-sm sm:text-base flex items-center gap-2 mb-1.5">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  We're Open
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">Monday - Friday 08.00 - 18.00</p>
              </div>

              {/* 2. Clinic Location */}
              <div>
                <h4 className="text-[#000a3d] font-bold text-sm sm:text-base flex items-center gap-2 mb-1.5">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Clinic Location
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">100 S Main St, New York, NY</p>
              </div>

              {/* 3. Call Us Directly */}
              <div>
                <h4 className="text-[#000a3d] font-bold text-sm sm:text-base flex items-center gap-2 mb-1.5">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Directly
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">+1 123 456 789</p>
              </div>

              {/* 4. Send a Message */}
              <div>
                <h4 className="text-[#000a3d] font-bold text-sm sm:text-base flex items-center gap-2 mb-1.5">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send a Message
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">contact@dentiacare.com</p>
              </div>

            </div>
          </div>

          {/* Right Block: Input Card Panel */}
          <div className="lg:col-span-6 w-full bg-[#f4f7fc] rounded-[24px] p-6 sm:p-10 border border-gray-50/50 shadow-sm">
            <h3 className="text-xl font-bold text-[#000a3d] mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Your Phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors"
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-[#000a3d] placeholder-gray-400 outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>

              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm w-max mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;