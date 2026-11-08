import React from 'react';

const TestimonialsGrid = () => {
  const reviews = [
    {
      id: 1,
      name: "Jessica M.",
      treatment: "Teeth Whitening",
      stars: 5,
      text: "Dr. Patel did an amazing job with my teeth whitening. I've never felt so confident about my smile!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "David R.",
      treatment: "Root Canal Therapy",
      stars: 4,
      text: "After my root canal with Dr. Lin, I had zero pain and quick recovery. Truly a top-notch experience.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Nina T.",
      treatment: "Dental Cleaning",
      stars: 5,
      text: "Dr. Kim's gentle touch during my cleaning made the whole process so comfortable.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Matthew L.",
      treatment: "Porcelain Veneers",
      stars: 5,
      text: "I was nervous about getting veneers, but Dr. Alvarez and her team walked me through everything. I love my new smile!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Olivia S.",
      treatment: "Dental Implant",
      stars: 4,
      text: "Thanks to Dr. Chen, my dental implant looks and feels just like a real tooth.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Jake H.",
      treatment: "Tooth Bonding",
      stars: 5,
      text: "I chipped a tooth on vacation, but Dr. Nguyen fixed it the same day with bonding that looks perfect.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      name: "Melissa A.",
      treatment: "Pediatric Dentistry",
      stars: 5,
      text: "My daughter had her first cavity filled by Dr. Singh. He was so kind and patient with her.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      name: "Alex P.",
      treatment: "Customer",
      stars: 5,
      text: "They're professional, friendly, and genuinely care about your dental health. I trust them completely.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid System matching your desktop 3-columns and mobile 1-column layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full min-h-[220px]"
            >
              <div>
                {/* Dynamic Yellow Stars Generator */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-lg ${i < item.stars ? 'text-amber-400' : 'text-gray-200'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text Body */}
                <p className="text-gray-400 text-sm leading-relaxed font-medium mb-6">
                  {item.text}
                </p>
              </div>

              {/* Patient Profile Card Meta */}
              <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover shadow-inner shrink-0"
                />
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#000a3d] leading-tight">{item.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5 font-semibold">{item.treatment}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsGrid;