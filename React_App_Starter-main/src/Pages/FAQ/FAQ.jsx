import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('General Care');
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = [
    'General Care',
    'Cosmetic Dentistry',
    'Restorative Dentistry',
    'Insurance & Appointments'
  ];

  const faqData = {
    'General Care': [
      { q: "How often should I visit the dentist?", a: "It's recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise." },
      { q: "What should I do in a dental emergency?", a: "Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling." },
      { q: "Do you offer services for kids?", a: "Absolutely! We provide gentle, family-friendly pediatric dental care for children of all ages." },
      { q: "What are my options for replacing missing teeth?", a: "We offer dental implants, bridges, and dentures depending on your needs and preferences." },
      { q: "Is teeth whitening safe?", a: "Yes, when performed by a dental professional, teeth whitening is safe and effective with long-lasting results." }
    ],
    'Cosmetic Dentistry': [
      { q: "How long does professional teeth whitening last?", a: "Typically anywhere from 6 months to 2 years, depending on your dietary habits and oral hygiene." },
      { q: "What are dental veneers?", a: "Veneers are thin, custom-made shells crafted of tooth-colored materials designed to cover the front surface of teeth." },
      { q: "Can cosmetic dentistry fix crooked teeth?", a: "Yes, solutions like clear aligners, bonding, or porcelain veneers can beautifully align and shape your teeth." }
    ],
    'Restorative Dentistry': [
      { q: "What is a dental implant?", a: "A dental implant is a titanium post that replaces a missing tooth root and provides a strong foundation for a crown." },
      { q: "Does getting a dental filling hurt?", a: "Not at all. We use local anesthesia to numb the area, ensuring a completely comfortable and pain-free procedure." },
      { q: "When is a root canal treatment necessary?", a: "When the inner pulp of a tooth becomes infected or deeply decayed, a root canal is needed to save the tooth." }
    ],
    'Insurance & Appointments': [
      { q: "Which insurance plans do you accept?", a: "We accept most major PPO dental insurance plans. Please contact our front desk to confirm your specific provider." },
      { q: "What is your cancellation policy?", a: "We request at least 24 hours' notice if you need to cancel or reschedule your appointment." },
      { q: "Can I book an appointment online?", a: "Yes, you can click on our 'Book Appointment' button anytime to visit our contact form and request your slot." }
    ]
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <div className="bg-[#f0f4fa] text-center pt-28 sm:pt-32 pb-12 sm:pb-16 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#000a3d] mb-2 tracking-tight">FAQ</h1>
        <div className="text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> &gt; <span className="text-gray-400">FAQ</span>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* 🛠️ Fixed Options Container: Mobile par vertical column and text center jaisa aapne manga */}
        <div className="flex flex-col sm:flex-row items-center justify-center border-b border-gray-100 gap-5 sm:gap-6 mb-10 pb-4 sm:pb-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`text-sm font-bold tracking-wide transition-all pb-1 focus:outline-none text-center ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600 sm:pb-3'
                  : 'text-gray-400 hover:text-[#000a3d] border-b-2 border-transparent sm:pb-3'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="flex flex-col gap-3">
          {faqData[activeTab].map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-[#f8fafc] border border-gray-100 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none bg-white gap-3"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-[#000a3d]'}`}>
                    {item.q}
                  </span>
                  <span className={`text-[10px] sm:text-xs text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}>
                    ▼
                  </span>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-gray-50 bg-[#f8fafc]' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                    {item.a}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;