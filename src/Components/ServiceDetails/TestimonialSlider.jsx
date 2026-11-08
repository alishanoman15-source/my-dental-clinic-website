import React, { useState } from 'react';

const TestimonialSlider = ({ clientImage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    { text: "I never thought I'd love my smile this much. The veneers look so natural, and the process was surprisingly comfortable. I finally feel confident in every photo!", author: "Jessica M." },
    { text: "The team took the time to listen to what I wanted and made it happen. My whitening results were incredible, and I get compliments all the time. I actually enjoy going to the dentist now!", author: "Darren K." },
    { text: "From start to finish, I felt completely taken care of. My smile makeover was life-changing. I can't stop smiling—literally!", author: "Elena R." },
    { text: "I was always self-conscious about my teeth. After my bonding and reshaping, it's like I have a brand-new smile. Quick, painless, and totally worth it.", author: "Carlos F." },
    { text: "The results exceeded my expectations. The cosmetic work looks so natural, and the staff was supportive every step of the way.", author: "Aisha B." }
  ];

  return (
    <section className="bg-[#f8fafc] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Client Image representation */}
          <div className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-md">
            <img src={clientImage || "/patient-happy.webp"} alt="Happy Patient" className="w-full h-auto object-cover" />
          </div>

          {/* Right Side: Slider Display Block */}
          <div className="flex flex-col justify-center min-h-[250px]">
            <span className="text-5xl font-serif text-blue-600 mb-4 block">“</span>
            <p className="text-xl sm:text-2xl font-bold text-[#0f172a] leading-relaxed mb-6">
              {reviews[activeIndex].text}
            </p>
            <span className="text-sm font-semibold text-gray-400 tracking-wider">
              {reviews[activeIndex].author}
            </span>

            {/* Pagination Controls Dots */}
            <div className="flex items-center gap-2.5 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;