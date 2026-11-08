import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "It's recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise."
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling."
    },
    {
      question: "Do you offer services for kids?",
      answer: "Absolutely! We provide gentle, friendly pediatric dental care for children of all ages."
    },
    {
      question: "What are my options for replacing missing teeth?",
      answer: "We offer dental implants, bridges, and dentures depending on your needs and preferences."
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Yes, when performed by a dental professional, teeth whitening is safe and effective with long-lasting results."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Headings */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <span className="text-sm font-bold text-blue-600 tracking-wide uppercase">
              Everything You Need to Know
            </span>
            <h2 className="text-4xl font-extrabold text-[#1e293b] mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-2 w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-[#1e293b] text-base sm:text-lg hover:text-blue-600 transition duration-200 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <IoIosArrowDown 
                      className={`text-gray-500 text-xl transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {/* Dynamic Smooth Answer Area */}
                  <div 
                    className={`transition-all duration-300 ease-in-out border-t border-gray-50 overflow-hidden ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="p-6 text-gray-500 font-medium text-sm sm:text-base leading-relaxed bg-white">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;