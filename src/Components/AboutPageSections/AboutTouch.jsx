import React from 'react';

const AboutTouch = () => {
  const infoBlocks = [
    { title: "Experienced Dental", desc: "Skilled care backed by years of trusted dental experience." },
    { title: "Advanced Technology", desc: "Modern tools ensure accurate and efficient treatments." },
    { title: "Personalized Treatment", desc: "Custom care plans made to fit your smile and lifestyle." },
    { title: "Family-Friendly", desc: "Welcoming space for kids, teens, adults, and seniors." }
  ];

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text details parameters */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-2 block">Why Choose Our Dental Care</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000a3d] tracking-tight mb-4 leading-tight">Exceptional Service With a Personal Touch</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-normal mb-8">
              Choosing the right dental provider matters. We combine expert care, advanced technology, and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to your unique needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {infoBlocks.map((block, i) => (
                <div key={i} className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#000a3d] mb-1">{block.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Asymmetry Blocks Layout */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-6 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-video shadow-sm"><img src="/pic1.png" className="w-full h-full object-cover" alt="Clinic Visual 1" /></div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-sm"><img src="/pic5.png" className="w-full h-full object-cover" alt="Clinic Visual 2" /></div>
            </div>
            <div className="col-span-6">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-sm"><img src="/pic6.png" className="w-full h-full object-cover" alt="Clinic Visual 3" /></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTouch;