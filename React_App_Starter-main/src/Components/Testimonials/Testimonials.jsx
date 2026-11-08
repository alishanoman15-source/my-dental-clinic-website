import React from 'react';
// Swiper React components aur modules import karein
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper styles import karein
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  // Aapke paas jo images hain unke paths yahan 'image' property mein set kar lein
  const reviews = [
    {
      name: 'Edward B.',
      role: 'Customer',
      image: '/4.webp', // Apni image ka sahi path likhein
      text: '"I\'ve never felt more comfortable at a dentist\'s office. The team is so kind, professional, and thorough. They always explain everything in detail, and I leave with a smile every time!"'
    },
    {
      name: 'Michael S.',
      role: 'Customer',
      image: '/3.webp',
      text: '"I\'ve always been nervous about dental visits, but the staff made me feel completely comfortable. Their gentle care and attention to detail truly stand out."'
    },
    {
      name: 'Robert L.',
      role: 'Customer',
      image: '/2.webp',
      text: '"My family and I have been coming here for years. The service is exceptional, and the team always goes the extra mile to make sure we\'re happy and well taken care of."'
    },
    {
      name: 'Jake M.',
      role: 'Customer',
      image: '/1.webp',
      text: '"I came in for a whitening treatment and left with a brand new level of confidence. The results were amazing, and the staff made it such a relaxing experience."'
    },
    {
      name: 'Alex P.',
      role: 'Customer',
      image: '/5.webp',
      text: '"They\'re professional, friendly, and genuinely care about your dental health. I trust them completely and recommend them to anyone looking for great care."'
    },
    {
      name: 'Carlos R.',
      role: 'Customer',
      image: '/6.webp',
      text: '"Hands down the best dental experience I\'ve ever had. Everything from scheduling to treatment was smooth, comfortable, and handled with a personal touch."'
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold mb-2 uppercase tracking-wide">Testimonials</p>
          <h2 className="text-4xl font-bold text-[#1e293b] mb-4">Our Happy Customers</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="testimonial-slider-container pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              // Mobile / Base View: 1 Card
              0: {
                slidesPerView: 1,
              },
              // Tablet View: 2 Cards
              768: {
                slidesPerView: 2,
              },
              // Laptop / Desktop View: 3 Cards
              1024: {
                slidesPerView: 3,
              }
            }}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full relative group">
                  
                  {/* Quote Icon Styling */}
                  <div className="text-blue-500 opacity-20 text-6xl font-serif absolute top-4 left-6 pointer-events-none">
                    “
                  </div>
                  
                  <div className="relative z-10">
                    {/* User Profile Info */}
                    <div className="flex flex-col items-center mb-6">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-50 mb-3"
                      />
                      <h4 className="font-bold text-[#1e293b] text-lg">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-center italic leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Custom Styles overrides for Pagination Dots */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet {
          margin: 0 6px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;